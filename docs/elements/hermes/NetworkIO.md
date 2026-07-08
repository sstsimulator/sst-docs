---
title: NetworkIO API
---

## Overview

`SST::Hermes::NetworkIO` is the abstract storage-I/O interface declared by Hermes
and implemented by [firefly](../firefly/intro) (`firefly.hadesNetworkIO`). Motifs
in [ember](../ember/intro) program against this interface to perform file-like
`open`/`read`/`write`/`close` over an SST network. For an end-to-end usage guide
see the [ember NetworkIO Storage Guide](../ember/NetworkIO).

The interface is declared in
`sst-elements/src/sst/elements/hermes/networkIOapi.h` in the
`SST::Hermes::NetworkIO` namespace. It offers three layered APIs that share the
same types:

1. A **legacy stripe-cyclic shim** (`networkIORead`/`networkIOWrite`) over a single
   implicit file.
2. A **blocking file-handle API** (`open`/`read_at`/`write_at`/`close`).
3. A **non-blocking API** (`iread_at`/`iwrite_at`/`wait`/`waitall`/`test`/`testany`/`cancel`).

---

## Types

### `enum class Status : int`

The error code carried in every completion. Transmitted on the wire as an `int`.

| Value | Int | Meaning |
| --- | --- | --- |
| `OK` | 0 | Success. |
| `PermissionDenied` | 1 | Sender NID is not in the target pool's permit set. |
| `ShortRead` | 2 | Read extended past the end of a sized file. |
| `NoSpace` | 3 | Write extended past a sized file's capacity. |
| `BadFileHandle` | 4 | `read_at`/`write_at` on a closed or unknown handle. |

There is no `Cancelled` status — `cancel` reports silent success.

### `struct IOStatus`

```cpp
struct IOStatus {
    uint64_t bytes_completed = 0;
    int      error           = static_cast<int>(Status::OK);
};
```

The structured result of an operation. Inspect `error` first; if it is `OK`,
`bytes_completed` equals the requested length. A short operation reports
`Status::ShortRead` with `bytes_completed < requested`.

### `enum class OpenMode : int`

| Value | Int | Notes |
| --- | --- | --- |
| `ReadOnly` | 0 | Honoured for routing. |
| `WriteOnly` | 1 | Honoured for routing. |
| `ReadWrite` | 2 | Honoured for routing. |
| `Create` | 3 | **Reserved/ignored** in the current implementation — files are pre-sized at build time. |

### `struct FileInfo`

```cpp
struct FileInfo { std::map<std::string,std::string> hints; };
```

An MPI_Info-shaped hint map supplied at `open`. Two hints are honoured (others are
ignored, for forward compatibility):

| Hint | Default | Meaning |
| --- | --- | --- |
| `striping_unit` | `1 MiB` | Bytes per stripe slot (matches MPI's `striping_unit`). |
| `stripe_pool` | the API's configured pool | Overrides which I/O pool the file stripes across. |

### `struct FileDescriptor` / `FileHandle`

```cpp
struct FileDescriptor { uint32_t fileId = 0; OpenMode mode = OpenMode::ReadOnly; std::string path; };
using FileHandle = FileDescriptor*;
```

A pointer-typed handle (same pattern as Hermes `MessageRequest`). `fileId == 0` is
the sentinel used by the legacy shim; `open` assigns ids `>= 1`.

### `StatusCallback`

```cpp
typedef std::function<void(IOStatus)> StatusCallback;
```

Delivers the full `IOStatus` on completion. (A separate legacy
`typedef std::function<void(int)> Callback;` backs the stripe-cyclic shim.)

### `IORequest`

```cpp
class IORequestBase { public: virtual ~IORequestBase() = default; };
using IORequest = IORequestBase*;
```

An opaque handle for non-blocking I/O, modeled on `MPI_Request`. Lifetime rules:

* Every `IORequest` from `iread_at`/`iwrite_at` is consumed by exactly one
  `wait`/`waitall`. `test`/`testany` are non-consuming.
* `waitall` fills `statuses[]` in **request-array index order**, not completion
  order.
* `testany`/`waitany`-style calls on `count == 0` short-circuit: `done = true`,
  `idx = -1` (the `MPI_UNDEFINED` analogue), status zeroed.
* `cancel` is best-effort and does not touch the in-flight wire packet.

---

## `class Interface`

`Interface` derives from `Hermes::Interface`. All methods are `virtual`; the base
bodies `assert(0)` (pure-interface pattern), so a backend must override the calls
it supports.

### Legacy stripe-cyclic shim

```cpp
virtual void networkIORead (Vaddr dest, uint64_t offset, uint64_t length, Callback);
virtual void networkIOWrite(uint64_t offset, Vaddr src,  uint64_t length, Callback);
```

These lazily open a single `'__legacy__'` file on first use and route through the
file-handle path with `fileId = 0`. Useful for simple cyclic-offset traffic.

### Blocking file-handle API

```cpp
virtual void open(const std::string& path, OpenMode mode, const FileInfo& info,
                  FileHandle* outHandle, StatusCallback cb);
virtual void close(FileHandle handle, StatusCallback cb);
virtual void read_at (FileHandle handle, uint64_t offset, Vaddr dest, uint64_t length, StatusCallback cb);
virtual void write_at(FileHandle handle, uint64_t offset, Vaddr src,  uint64_t length, StatusCallback cb);
```

* `open` sends Open ops to every storage NIC in the chosen stripe set (at most
  `MAX_STRIPE_NIDS = 64`); the callback fires once all open-ACKs return. On success
  `IOStatus.bytes_completed` carries the file's stripe count.
* `close` is idempotent on an already-closed handle (returns `OK`, `bytes_completed = 0`).
* `read_at` is `pread`-shaped; a read past EOF reports `Status::ShortRead`.
* `write_at` is `pwrite`-shaped; a write past capacity reports `Status::NoSpace`.

:::note Handle cleanup
Any file handles still open when the simulation ends are auto-closed in the API's
`finish()` and reported as a warning (not a fatal error), so a motif that forgets a
`close` will not crash the run. Closing your handles explicitly is still recommended
so the close cost is modeled.
:::

### Non-blocking API

```cpp
virtual void iread_at (FileHandle handle, uint64_t offset, Vaddr dest, uint64_t length,
                       IORequest* outReq, StatusCallback cb);
virtual void iwrite_at(FileHandle handle, uint64_t offset, Vaddr src,  uint64_t length,
                       IORequest* outReq, StatusCallback cb);
virtual void wait   (IORequest req, IOStatus* outStatus, StatusCallback cb);
virtual void waitall(int count, IORequest reqs[], IOStatus statuses[], StatusCallback cb);
virtual void test   (IORequest req, bool* outDone, IOStatus* outStatus, StatusCallback cb);
virtual void testany(int count, IORequest reqs[], int* outIdx, bool* outDone, IOStatus* outStatus, StatusCallback cb);
virtual void cancel (IORequest req, StatusCallback cb);
```

* `iread_at`/`iwrite_at` return an `IORequest` immediately; their per-issue
  `StatusCallback` is telemetry only and does **not** consume the request.
* `wait` is a single-request convenience wrapper over `waitall(1, ...)`.
* `waitall` aggregates: summed `bytes_completed`, first non-`OK` error. Pass
  `statuses = nullptr` for a `STATUSES_IGNORE` fast path.
* `test` is non-consuming and sets `*outDone`.
* `testany` with `count == 0` sets `done = true`, `idx = -1`, zeroed status.
* `cancel` returns `OK` for a valid handle, `BadFileHandle` otherwise.

:::info See also
[ember NetworkIO Storage Guide](../ember/NetworkIO) for how a motif drives these
calls, and [firefly](../firefly/intro) for the `hadesNetworkIO` implementation,
striping mappers, pools, and the `SimpleSSD` backing model.
:::

---

## Relationship to MPI-IO

`NetworkIO` is deliberately shaped after MPI-IO (`MPI_File_*`), so the offset-explicit
(`_at`) call family and the request/wait model map almost one-to-one. If you know
MPI-IO, the table below is the fastest way to orient:

| NetworkIO | MPI-IO equivalent | Notes |
| --- | --- | --- |
| `open` | `MPI_File_open` | `FileInfo.hints` plays the role of `MPI_Info`. |
| `close` | `MPI_File_close` | Idempotent on an already-closed handle. |
| `read_at` | `MPI_File_read_at` | Explicit-offset, blocking. |
| `write_at` | `MPI_File_write_at` | Explicit-offset, blocking. |
| `iread_at` | `MPI_File_iread_at` | Returns an `IORequest` (cf. `MPI_Request`). |
| `iwrite_at` | `MPI_File_iwrite_at` | Returns an `IORequest`. |
| `wait` | `MPI_Wait` | Consumes the request. |
| `waitall` | `MPI_Waitall` | Fills `statuses[]` in request-index order. |
| `test` | `MPI_Test` | Non-consuming. |
| `testany` | `MPI_Testany` | `count == 0` → `done = true`, `idx = -1` (`MPI_UNDEFINED`). |
| `cancel` | `MPI_Cancel` | Best-effort; no `Cancelled` status (cf. `MPI_Request_free`). |
| `IOStatus` | `MPI_Status` | `bytes_completed` ≈ `MPI_Get_count`; `error` ≈ `MPI_ERROR`. |
| `FileInfo.hints["striping_unit"]` | `striping_unit` ROMIO hint | Default 1 MiB. |

### Not yet implemented

:::note Scope
The current interface covers explicit-offset independent (non-collective) I/O. The
following MPI-IO capabilities are **intentionally not implemented yet** — a motif
should not assume they exist:

* **Collective I/O** — `read_at_all` / `write_at_all` and their non-blocking forms.
* **File views & derived datatypes** — `MPI_File_set_view`, etype/filetype layouts.
* **Individual/shared file pointers** — only explicit-offset (`_at`) calls exist;
  there is no `read`/`write`/`seek` or `read_shared`.
* **Typed buffers** — buffers are byte ranges (`Vaddr` + length), not
  `(count, MPI_Datatype)`.
* **Consistency control** — `MPI_File_sync`, `MPI_File_set_atomicity`.

These are documented design directions, not commitments; no timeline is implied.
:::
