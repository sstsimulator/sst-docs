---
title: AutoTesting
---

SST employs automatic testing (or "AutoTesting") for both pull-requests prior to allowing merge and on all devel and master branches in nightly regression jobs. Pull-request testing is run on a subset of SST runtime variants and supported platforms whereas the nightly testing covers all supported platforms and several variants (e.g., serial, parallel) on each. 

Terms used in this guide:
* **test** A single configuration file that is run through SST 
* **testsuite** A collection of tests, generally tied to a particular element library
* **test framework** The Python-based framework SST uses to find and run test suites on Core and any installed element libraries
* **job** A particular platform, SST execution variant (e.g., threaded), and set of test suites that is run to determine whether the code is working as expected

SST pull-request testing is integrated with GitHub such that once a pull request has been reviewed appropriately, it automatically runs a number of test jobs. If all jobs pass, the request is approved for merging. SST Core requests require an additional manual merge action while SST Elements requests merge automatically if testing passes. The extra manual step on SST Core exists to allow pull request testing prior to full code review. 

Nightly testing is also integrated with GitHub, and controls whether the devel branch is merged into the master branch. When all nightly jobs pass, the AutoTesting infrastructure merges the devel branches of all SST repositories (SST Core, Elements, Macro, Juno, ExternalElementExample, SQE) into their respective master branches.

## SST-Core Pull Request Testing
Pull requests on SST Core first go through a Clang-format check. This is run using GitHub Actions and runners. Once the request has both been reviewed and the format check passes, the request is automatically enqueued for testing. The results (PASS/FAIL) for each job are published to the pull request as comments. The following jobs are run on each Core pull request. If in doubt on the version of a particular library, use the version specified in the [SST Release Matrix](http://sst-simulator.org/SSTPages/SSTElementReleaseMatrix/) for the most recent release. For non-Core repositories, the `devel` branch is used.


| **OS**  | **Compiler** | **Python** | **OpenMPI** | **Other libraries** | **Run Variant** | **SST Repositories** | **Test Framework(s)** |
|---------|----------|--------|---------|------------------|--------------------|------------------|-----------------|
| Rocky 8 | -        | -      | -       | Clang-format v20 | Format             | Core         | sst-core/scripts/clang-format-test.sh |
| Rocky 8 | GCC 8.5.0 | 3.9   | 4.1.4   | Pin 3.31         | Serial             | Core, Elements, Juno, ExternalElementExample | `sst-test-core -k`, `sst-test-elements -k` |
| Rocky 8 | GCC 8.5.0 | 3.9   | 4.1.4   | Pin 3.31         | Threads = 2        | Core, Elements, Juno, ExternalElementExample | `sst-test-core -k -t 2`, `sst-test-elements -k -t 2` |
| Rocky 8 | GCC 8.5.0 | 3.9   | 4.1.4   | Pin 3.31         | Ranks = 2          | Core, Elements, Juno, ExternalElementExample | `sst-test-core -k -r 2`, `sst-test-elements -k -r 2` |
| Rocky 8 | GCC 8.5.0 | 3.9   | 4.1.4   | Pin 3.31         | Make dist          | Core, Elements, Juno, ExternalElementExample | `sst-test-core -k`, `sst-test-elements -k` |
| OSX 14 | Xcode 14 | 3.10 | 4.1.4 | - | Serial | Core, Elements, Juno, ExternalElementExample | `sst-test-core -k`, `sst-test-elements -k` |

Note that the "make dist" job first configures and runs make dist on the repositories under test and then runs the test framework on the generated distributions.

## SST-Elements Pull Request Testing
Pull requests on SST Elements are not format checked, as formatting guidelines are left to individual library developers. Like Core, once Element pull requests have been reviewed, they are automatically tested. If the jobs pass, the pull request merges without further intervention. The AutoTester jobs are listed below.

| **OS**  | **Compiler** | **Python** | **OpenMPI** | **Other libraries**  | **Run Variant** | **SST Repositories** | **Test Framework(s)** |
|---------|----------|--------|---------|------------------|--------------------|------------------|-----------------|
| Rocky 8 | GCC 8.5.0 | 3.9 | 4.1.4   | Pin 3.31         | Serial             | Core, Elements, Juno, ExternalElementExample | `sst-test-core -k`, `sst-test-elements` |
| Rocky 8 | GCC 8.5.0 | 3.9 | 4.1.4   | Pin 3.31         | Threads = 2        | Core, Elements, Juno, ExternalElementExample | `sst-test-core -k -t 2`, `sst-test-elements -t 2` |
| Rocky 8 | GCC 8.5.0 | 3.9 | 4.1.4   | Pin 3.31         | Ranks = 2          | Core, Elements, Juno, ExternalElementExample | `sst-test-core -k -r 2`, `sst-test-elements -r 2` |
| Rocky 8 | GCC 8.5.0 | 3.9 | 4.1.4   | Pin 3.31         | Make dist          | Core, Elements, Juno, ExternalElementExample | `sst-test-core -k`, `sst-test-elements` |
| OSX 14 | Xcode 14 | 3.10 | 4.1.4 | - | Serial | Core, Elements, Juno, ExternalElementExample | `sst-test-core -k`, `sst-test-elements` |

See the SST-Core section above for a description of "make dist" testing.

## Local Testing and Other Notes
The test environment can be replicated by replicating a build environment above, building and installing the listed Core and element libraries, and running the test frameworks as listed. See [SST Testing](testing) for more information about the SST test framework.

Additionally, note that any tests or test suites added to the SST test framework in the branch under test will automatically run as part of the AutoTester. There are no additional steps needed to update testing.
