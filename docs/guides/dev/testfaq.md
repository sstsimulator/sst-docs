---
title: Testing FAQ
---

## Test Frameworks
### When I run the test framework, some tests are SKIPPED, is that a problem?
This is normal. Tests are skipped if they are ineligible to run. Some reasons include:
* A test depends on a package that wasn't built (e.g., Ramulator)
* A test is not compatible with the SST run variant (e.g., the test has only two components and the test framework is running SST with 8 threads)
* A test is not compatible with the platform (e.g., requires a library only supported on Linux but the test is running on OSX)

### Why are tests failing with a 'wget' error?
Some SST Elements tests require extra files that are located separately. The test framework uses wget to download these from [sst-downloads](https://github.com/sstsimulator/sst-downloads). If the rest of the tests are passing, it is likely this is just a problem with wget and not a larger issue.

## Pull Requests
### Why did the "make dist" job fail?
The most common cause of a failure is that a new file was added to the codebase but was not included in the `Makefile.am`'s list of files to distribute. All files that need to be distributed, including test and reference files, need to be included.

### My pull request passes on Linux jobs and fails on OSX, why?
There are many possible reasons, some common ones are:
* GCC and Clang do not produce identical warnings and errors, and things that cause a compile error or warning on one may not show the same issue on the other.
* Check any use of an unordered standard library container carefully. If the order of container elements inadvertantly affects event ordering, test output can diff between platforms.

### There's a tag, "WIP", on a pull request, what does that mean?
WIP means work-in-progress. It prevents a pull request from going through testing even if it has all neccessary approvals.


