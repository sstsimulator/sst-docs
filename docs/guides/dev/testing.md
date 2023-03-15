---
title: SST Test Framework
---

SST Core includes two test utilities `sst-test-core` and `sst-test-elements`. These are python-based utilities built on the `unittest` module and modified for SST. The code for this framework resides in `sst-core/src/sst/core/testingframework/`. Pull request and nightly jobs that run tests on Core, Elements, or third-party element libraries, do so by using this framework to locate and run testsuites. The utiltiies are nearly identical and references to one in this guide apply to both unless otherwise stated.

### Core testing
After building and installing SST Core, tests can be run by invoking `sst-test-core`. This utility runs all tests for SST Core and is the same as the set of tests run on Core for pull request and nightly testing.

```sh
$ sst-test-core
```

### Elements testing
Similar to Core, elements testsuites (whether part of the SST-Elements repository or part of a separate element library and registered with Core), can be run using the `sst-test-elements` utility. Both Core and at least one element library must be built and installed.

```sh
$ sst-test-elements
```

Unlike Core, the set of elements tests that are detected and run depends on which elements and dependencies have been installed and have registered their testsuites with SST Core. Thus, replicating, for example, a particular SST job, requires installing the same set of SST Elements and dependencies as the job does.

### Test framework output
Running either command above produces a folder, by default named `sst_test_outputs`. This folder has three sub-folders as shown.
```sh
$ sst-test-core
$ ls sst_test_outputs
run_data	tmp_data	xml_data
```

The `run_data` folder contains the test outputs produced by running the tests. `tmp_data` holds intermediate files produced by some testsuites during their post-processing of test outputs. The last folder, `xml_data` is used by the SST AutoTesting infrastructure for reporting and can generally be ignored when run locally.

### Test framework options
Running either utility with `-h` returns a detailed description of available options. The most common ones are listed here.

| Option | Description | Default |
|--- | --- | --- |
| `-f`, `--fail_fast`           | Stop testing immediately on a test failure | false |
| `-o <DIR>`, `--output <DIR>`  | Set the output directory to DIR  | ./sst_test_outputs |
| `-k`, `--keep_output`         | Do not overwrite the output directory, append to it instead | false |
| `-c <N>`, `--concurrent <N>`  | Run the testsuites (not the individual tests) on N concurrent threads | 1 |
| `-l`, `--list_testsuites`     | List the discovered testsuites instead of running them | false |
| `-r <N>`, `--ranks <N>`       | Run SST with N ranks in each test | 1 |
| `-t <N>`, `--threads <N>`     | Run SST with N threads in each test | 1 |
| `-w <STR>`                    | Wildcard STR of testsuite names to run. Use quotes to avoid automatic wildcard expansion. For example, `-w "*merlin*"` | "" |


## Examples
### Run the Merlin tests
```sh
$ sst-test-elements -w "*merlin*"
```

### Run tests with 2 threads and 4 ranks
```sh
$ sst-test-elements -t 2 -r 4
```

### Run the MemHierarchy tests concurrently
```sh
$ sst-test-elements -c 2 -w "*memH*"
```

### Run both core and elements tests and send output to the same directory
```sh
$ sst-test-core
$ sst-test-elements -k
```

### List all the testsuites that can be found
```sh
$ sst-test-elements -l
```

:::info
A detailed guide on adding tests and testsuites to the frameworks will be forthcoming.
:::
