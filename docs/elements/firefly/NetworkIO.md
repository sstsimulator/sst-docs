---
title: NetworkIO Components
---

## Overview

Firefly implements the storage-I/O feature described in the
[ember NetworkIO Storage Guide](../ember/NetworkIO). It provides:

* **`firefly.hadesNetworkIO`** — the compute-side implementation of the
  [Hermes NetworkIO API](../hermes/NetworkIO).
* **Striping mappers** (`Block`/`RR`/`Hash`) — choose which I/O node owns a byte offset.
* **`firefly.HadesStorageController`** — the storage-side pool publisher.
* **`firefly.SimpleSSD`** — a simple latency/bandwidth backing model for the storage nodes.
* **NIC NetworkIO handlers + statistics** — the send/receive path on `firefly.nic`.

The end-to-end path: an ember motif calls the Hermes API → `firefly.hadesNetworkIO`
selects a stripe index via a mapper → resolves it to a storage NID through the
per-pool `IoPool.<name>` shared array → dispatches Open/Read/Write/Close ops over
the [merlin](../merlin/intro) network → storage NICs enforce permit/deny and
capacity, time the op through `SimpleSSD`, and ACK back.

---

## `firefly.hadesNetworkIO`

The compute-side `SST::Hermes::NetworkIO::Interface` implementation
(`SST::Hermes::Interface` subcomponent).

**Parameters:**

| Name | Description | Default |
| --- | --- | --- |
| `nodeMapper.name` | NetworkIOMapper module to use (`firefly.Block_NetworkIOMapper`, `firefly.RR_NetworkIOMapper`, `firefly.Hash_NetworkIOMapper`). Required. | `""` |
| `nodeMapper.poolName` | I/O pool this job binds to; joined with prefix `IoPool.` to name the shared array. Required, and must match `EmberMPIJob.useNetworkIO(pool=...)`. | `""` |
| `suppressPermitInsert` | **Debug-only.** When non-zero, skips inserting this node into the pool permit set (used to synthesize deny scenarios). | `"0"` |
| `verboseLevel` | Debug verbosity. | `"0"` |
| `verboseMask` | Debug mask. | `"-1"` |

`EmberMPIJob.useNetworkIO(...)` sets these for you; you rarely write them by hand.
The component declares no statistics, slots, or ports — the mapper is loaded as a
*module*, and NetworkIO statistics live on the NIC.

Stripe selection is `idx = (offset / stripeUnit) % stripeNids.size()`, resolved
through the per-pool shared array. A file stripes across at most
`MAX_STRIPE_NIDS = 64` I/O nodes.

---

## Striping mappers

All three derive from `NetworkIOMapper` (an `SST::Module`) and are registered in the
`firefly` library. They convert a byte offset into a *stripe index*.

| Module | Policy | Parameters (default) |
| --- | --- | --- |
| `Block_NetworkIOMapper` | `(offset / bytesPerNode) % numNodes` — contiguous regions per node. | `ioNidList` (`""`), `bytesPerNode` (`"1GiB"`) |
| `RR_NetworkIOMapper` | `(offset / blockSize) % numNodes` — fine-grained round-robin. | `ioNidList` (`""`), `blockSize` (`"4KiB"`) |
| `Hash_NetworkIOMapper` | `hash(offset / blockSize) % numNodes` — decorrelates access. | `ioNidList` (`""`), `blockSize` (`"4KiB"`) |

`ioNidList` is the comma-separated list of global NIDs hosting I/O nodes (populated
automatically by `useNetworkIO`). `bytesPerNode`/`blockSize` are parsed with
`UnitAlgebra`. See [Striping](../ember/NetworkIO#striping-across-io-nodes) for guidance
on which to choose.

---

## I/O pools — `firefly.HadesStorageController`

A one-shot publisher loaded on **storage-side NICs only** (via the ember
`StorageNicConfiguration`). It writes its NID into the pool's shared array so compute
nodes can discover it. All work happens in its constructor; it has no clock, events,
statistics, slots, or ports.

**Parameters:**

| Name | Description | Default |
| --- | --- | --- |
| `poolName` | Pool this storage NID belongs to; joined with prefix `IoPool.`. Must match the compute-side subscription. | `"default"` |
| `storageRankInPool` | Zero-based index of this NID within its pool's sorted NID list (its shared-array slot). | `"0"` |
| `poolSize` | Total storage NIDs in the pool; all controllers must agree. | `"1"` |
| `nid` | Global NID of this storage endpoint. | `"0"` |
| `verboseLevel` | Debug verbosity. | `"0"` |
| `verboseMask` | Debug mask. | `"-1"` |

**Pool model:** a pool is a named group of storage NIDs backed by a
`SharedArray<int>` (`IoPool.<name>`, slot → NID) and a `SharedSet<int>`
(`IoPoolPermit.<name>`, permitted sender NIDs). The storage NIC's receive path
checks `permittedSender(srcNode)`; non-members receive an `AckDeny` carrying
`Status::PermissionDenied`. Per-file `capacity` bounds total bytes; over-capacity
operations are clamped and surface `ShortRead`/`NoSpace`. See
[I/O pools and permit/deny](../ember/NetworkIO#io-pools-and-permitdeny).

---

## Storage backing — `firefly.SimpleSSD`

A simple server model (`SimpleSSDAPI` subcomponent) that times each storage
operation as `delay_ns = latency_ns + bytes / bandwidth_GBps`.

**Parameters:**

| Name | Description | Default |
| --- | --- | --- |
| `nSSDsPerNode` | Number of SSDs to simulate. | `"1"` |
| `queuesCountPerSSD` | Parallel paths per SSD. | `"4"` |
| `readBandwidthPerSSD_GBps` | Read bandwidth per SSD. | `"6.25"` |
| `writeBandwidthPerSSD_GBps` | Write bandwidth per SSD. | `"6.25"` |
| `readOverheadLatency_ns` | Fixed read latency for tuning to hardware. | `"500"` |
| `writeOverheadLatency_ns` | Fixed write latency for tuning to hardware. | `"500"` |

**Statistics** (level 1): `readRequests`, `writeRequests`, `readBytes`, `writeBytes`,
`readLatency_ns`, `writeLatency_ns`, `queueDepthOnEnqueue`, `pendingOnDispatch`.
It is loaded anonymously with `INSERT_STATS`, so these are surfaced through the
parent `firefly.nic` — enable them on `firefly.nic`.

---

## NIC statistics

NetworkIO dispatch statistics are registered on `firefly.nic` (all
`Statistic<uint64_t>`):

| Name | Units | Meaning |
| --- | --- | --- |
| `networkIoReadTargetNid` | nid | Target NID of each NetworkIO read dispatch. |
| `networkIoWriteTargetNid` | nid | Target NID of each NetworkIO write dispatch. |
| `networkIoReadLatency_ns` | ns | End-to-end NetworkIO read latency. |
| `networkIoWriteLatency_ns` | ns | End-to-end NetworkIO write latency. |

Two NIC parameters gate the storage role: `useSimpleSSD` (default `"false"`) loads
the `SimpleSSD` backing model, and `useStorageController` (default `"false"`) loads
the `HadesStorageController` pool publisher. See
[Collecting statistics](../ember/NetworkIO#collecting-statistics).
