---
title: Debugging Tricks
---

## Using debugging tools

SST utilizes a bootstrapping approach to configure the environment prior to execution.
The following approaches may aid in the use of debugging tools.
These sections are not meant to be tutorials but instead focus on SST-specific requirements and hints.

### GDB/LLDB

`gdb`, the GNU debugger, is useful for stepping through compiled code, looking at the contents of variables,
and viewing backtraces for segmentation faults.
`lldb`, the LLVM debugger, is mostly equivalent and available on macOS.

#### Links

- [GDB tutorial](https://developers.redhat.com/blog/2021/04/30/the-gdb-developers-gnu-debugger-tutorial-part-1-getting-started-with-the-debugger)
- [LLDB to GDB command map](https://lldb.llvm.org/use/map.html)

#### Tips

- Using the latest version of GDB rather than the one installed with your operating system may enable better backtraces.
- In order to view source code information such as variable names and line numbers, ensure all SST code of interest is compiled with [debugging symbols](https://en.wikipedia.org/wiki/Debug_symbol). Additionally, compiling with optimizations (`-O2` or `-O3`) can lead to variable contents not being available. With Autotools, compile using `CFLAGS="-g3 -O0" CXXFLAGS="-g3 -O0" /path/to/configure ...`. With CMake, compile using `-DCMAKE_BUILD_TYPE=Debug`.
- If you want to set a breakpoint on an exception being thrown and you aren't sure of its location, use
   ```
   (gdb) catch throw
   ```

### Valgrind

If you are using Valgrind for debugging then the tool must be configured to follow child processes.
An example command is shown below.

```bash
valgrind --trace-children=yes <path to SST>/bin/sst mysstmodel.py
```

## Debug Output

### Dynamic Loading

Installing multiple verions of libraries and executables commonly leads to runtime errors if search paths are misconfigured.
Setting the `SST_CORE_DL_VERBOSE` environment variable can be helpful to diagnose dynamic linking problems.
```
[user1@localhost tests]$ SST_CORE_DL_VERBOSE=1 sst testStdMem.py
SST-DL: Searching: /home/user1/install/sst-core/lib/sst
SST-DL: Attempting to load /home/user1/install/sst-core/lib/sst/libmemHierarchy.so
SST-DL: Loading failed, error: /home/user1/install/sst-core/lib/sst/libmemHierarchy.so: cannot open shared object file: No such file or directory
SST-DL: Searching: /home/user1/install/sst-core/lib/sstcore
SST-DL: Attempting to load /home/user1/install/sst-core/lib/sstcore/libmemHierarchy.so
SST-DL: Loading failed, error: /home/user1/install/sst-core/lib/sstcore/libmemHierarchy.so: cannot open shared object file: No such file or directory
SST-DL: Searching: /home/user1/install/sst-elements/lib/sst-elements-library
SST-DL: Attempting to load /home/user1/install/sst-elements/lib/sst-elements-library/libmemHierarchy.so
SST-DL: Load was successful.
```
