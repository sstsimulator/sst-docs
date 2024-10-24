---
title: Creating test suites
---

The SST testing framework is built on the [Python `unittest` library](https://docs.python.org/3/library/unittest.html). Support for running tests concurrently additionally builds on the Python [`testtools`](https://testtools.readthedocs.io/en/latest/index.html) extensions.
Each SST test suite consists of a group of individual tests defined in the same Python class. A single element library can have multiple test suites. Any element library, whether part of the SST official repositories or not, can register test suites with the testing framework. 

To create a new test suite, create a Python class that subclasses `SSTTestCase`. 
`SSTTestCase` subclasses `unittest.TestCase` and adds some SST-specific functionality such as a `run_sst()` function. 
The SST testing framework also provides a number of support functions to query the environment in which the test is being run (e.g., whether SST will be run in serial or parallel).

:::note

Whenever this guide refers to the `sst-test-elements` utility, the same is true of `sst-test-core`. The utilities are identical other than the search paths they use to locate tests.

:::

## Test suite name requirements
Test suites should be named `testsuite_TESTTYPE_ELEMLIB_TESTSUITENAME.py`.
* `TESTTYPE`: Usually "default" so that the test is always run when `sst-test-elements` is run.
* `ELEMLIB` : The name of the element library. This can be omitted for SST-Core tests.
* `TESTSUITENAME`: The name of the test suite.
If `TESTTYPE` is not "default", the test suite will not be run unless search parameters are provided to `sst-test-elements` to specify the test suite. The majority of SST's CI testing runs default test suites only.

```sh
$ sst-test-elements             # Runs test suites named testsuite_default_*.py
$ sst-test-elements -y "long"   # Runs test suites named testsuite_long_*.py
```

## Registering test suites
Each library needs to register the directory that contains its test suites with the SST-Core.
Any test suite added to the registered directory will be automatically located by the `sst-test-elements` utility as long as the suite follows the naming requirement described above.

SST-Core and the official SST-Elements repository store their tests in directories named `tests/`. These are registered during installation.

### Add a new SST-Core test suite
Add the new test suite file to `sst-core/tests/`.

### Add a new SST-Elements test suites for an existing library
Add the new test suite file to `sst-elements/src/sst/elements/ELEMDIR/tests/` where `ELEMDIR` is the element's directory.

### Add a new SST-Elements test suite for a new library
Place the test suite files in the directory `sst-elements/src/sst/elements/ELEMDIR/tests/` where `ELEMDIR` is the new element's directory.
In the element's `Makefile.am` file, add the following `install-exec-hook` section and register both the source code and test suite directory. The source code registration is not currently used by SST tools but may be in the future. Replace `libname` with the ELI name of the library.

```sh
install-exec-hook:
    $(SST_REGISTER_TOOL) SST_ELEMENT_SOURCE     libname=$(abs_srcdir)
    $(SST_REGISTER_TOOL) SST_ELEMENT_TESTS      libname=$(abs_srcdir)/tests
```

### Add a test suite for an element library that is not in the SST-Element repository
To register a directory for an element library that is not part of the SST-Elements repository, use the `sst-register` tool as follows.
Replace `libname` with the ELI name of the library and `/path/to/tests/directory` with the *absolute* path to the tests directory. 
It is good practice to register the test directory at the same time the library is registered.

```sh
$ sst-register SST_ELEMENT_TESTS libname=/path/to/tests/directory
```

An example of registering a tests directory can be found in the [simpleExternalElement](../../elements/simpleExternalElement/intro) library's Makefile. 

```sh title="Excerpt from https://github.com/sstsimulator/sst-external-element/blob/master/src/Makefile"
...
install:
    sst-register simpleExternalElement_LIBDIR=$(CURDIR)                     # Register the element library with SST
    sst-register SST_ELEMENT_SOURCE simpleExternalElement=$(CURDIR)         # Register the location of the element library source code
    # highlight-next-line
    sst-register SST_ELEMENT_TESTS simpleExternalElement=$(CURDIR)/../tests # Register the location of the library's test suites
```


## Test suite boilerplate
The test suite boilerplate looks like this. There is a test suite class and inside that class are one or more tests. UnitTest expects test function names to be prefixed with `test`. 

```py title="Boilerplate for a new test suite: testsuite_default_ELEMLIB_TESTSUITENAME.py"
from sst_unittest import *
from sst_unittest_support import *

class testcase_ELEMLIB_TESTSUITENAME(SSTTestCase):
    
    def test_TESTNAME1(self):
        # Test logic goes here
    
    def test_TESTNAME2(self):
        # Test logic goes here
```

The name of the test suite class is arbitrary but SST uses the following conventions. This naming is required for test suites in the official SST repositories. `TESTSUITENAME` is the name of the test suite and `ELEMLIB` is the name of the element library. These should also match the name of the file.
* SST-Core
  * Class name: `testcase_TESTSUITENAME`
  * File name : `testsuite_TESTTYPE_TESTSUITENAME.py`
* SST-Elements
  * Class name: `testcase_ELEMLIB_TESTSUITENAME`
  * File name: `testsuite_TESTTYPE_ELEMLIB_TESTSUITENAME.py`
  * In both names, `_TESTSUITENAME` can be omitted in libraries with a single test suite.

## Writing a test
Tests should (1) run SST using the `run_sst()` function provided by `sst_unittest` and (2) assert a pass or fail depending on the result of the test. Here is an example for running `$ sst test.py` in a test suite. The output of running SST is piped to a file named "test.out" in the test framework's output directory. The test passes if "test.out" matches a reference file "test.ref" and fails otherwise. Assume that `test.py` is in the same directory as the test suite (e.g., `<path-to-element-lib>/tests/test.py`) and the reference file is at `<path-to-element-lib>/tests/refFiles/test.ref`.

```py title="Example test"
    def test_basic(self):
        # Locate test.py
        test_dir = self.get_testsuite_dir()
        test_input = "{0}/test.py".format(test_dir)

        # Capture stdout and stderr to a file named test.out and put it in the test output directory
        test_output_dir = get_test_output_run_dir()
        test_output = "{0}/test.out".format(test_output_dir)

        # Run an SST test
        self.run_sst(test_input, test_output)

        # Locate test.ref
        test_ref = "{0}/refFiles/test.ref".format(test_dir)

        # Compare test.out and test.ref
        test_result = testing_compare_diff("test", test_output, test_ref)

        # Assert pass/fail using a unittest.TestCase assert method
        self.assertTrue(test_result, "Reference and output files do not match")
```

The next sections give more detail on both running SST in a test and evaluating the result of the test. 

### Running SST
SST's test frameworks provides the `run_sst()` function. This function runs SST with the parameters supplied to `sst-test-elements` as well as any provided by the test itself. The most common parameters are defined below. Refer to the [test framework API reference](testframeworkapi.md) for more detail.

```py
run_sst(sdl_file, out_file, err_file=None, set_cwd=None, mpi_out_files="", other_args="", 
    num_ranks=None, num_threads=None, global_args=None, # These should typically NOT be used
    timeout_sec=120, expected_rc=0, check_sdl_file=True,
    send_signal=signal.NSIG, signal_sec=3)
```

**Parameters:**
* **sdl_file** (type: string) The SST input configuration file to run.
* **out_file** (type: string) The full path of the output file. `stdout` and potentially `stderr` will be piped to this file.
* **err_file** (type: string) If given,`stderr` will be piped to this file rather than `out_file`. This must be a full path.
* **set_cwd** (type: string) The path from which SST should be run. If not provided, the current directory will be used.
* **mpi_out_files** (type: string) Full path for intermediate (per-rank) output files generated by MPI.
* **other_args** (type: string) Any arguments that should be provided to SST.
* **timeout_sec** (type: int) A timeout period in seconds after which SST will be terminated.
* **expected_rc** (type: int) The expected return code from SST.
* **check_sdl_file** (type: bool) If True, `run_test` will check that the `sdl_file` exists before trying to run it.
* **returns** The SST command that was run.

`run_sst()` will assert a test failure if SST runs longer than `timeout_sec` or if the expected return code (`expected_rc`) differs from the actual return code. The test that invoked `run_sst()` is responsible for evaluating any other test criteria.

:::warning

Tests must be portable across the Python versions and OS distributions supported by SST. They must also be written such that they can run concurrently with other tests in the same or other test suites. Some implications:
* Tests should use unique output file names.
* Tests should not change directory or other environment state.
* If a test needs to do setup that is shared such as compiling a test application, execution of the setup code needs to have appropriate synchronization.
* Tests should be careful using non-portable shell utilities. We recommend using Python equivalents when possible.
* Tests should not use Python libraries that require separate installation.
* Tests should work for all versions of Python that are supported by SST.

:::

### Test criteria

The `SSTTestCase` class and `sst_unittest_support` module provide extra SST-specific functions to assist with running SST tests. 
Unless the test is solely checking for an expected return value, the test will need to analyze some output from the run such as the stdout/stderr file or statistics output. The test must then use one of the `unittest.TestCase` assert methods to cause the test to pass or fail. 

#### Output files
The SST test framework sends console output and any other generated files to the directory specified by the `sst-test-elements` argument `--out_dir`. By default, the output directory will be a directory named `sst_test_outputs/` in the current working directory. The framework creates three subdirectories as shown.
```sh
$ ls sst_test_outputs/
 run_data        tmp_data        xml_data
```
* **run_data** Raw output from tests goes here, including `stdout` and `stderr` output, checkpoints, statistics files, etc.
* **tmp_data** Tests can place intermediate files used for post-processing in this directory.
* **xml_data** This directory contains an XML summary of the test framework results and is used by SST's automated CI system. Tests should not use this directory.

Tests can locate the output directories using `get_test_output_run_dir()` and `get_test_output_tmp_dir()`.

```py
test_output_dir = get_test_output_run_dir()
test_tmp_dir = get_test_output_tmp_dir()
```

#### Assert a pass or fail
`unittest` provides a number of assert functions to indicate whether the test passed. SST tests can use any of these. 
Refer to the [Python `unittest` documentation](https://docs.python.org/3/library/unittest.html) for details.
Common assertion functions are listed below.
```py
assertEqual(first, second, msg=None)
assertNotEqual(first, second, msg=None)
assertTrue(expression, msg=None)
assertFalse(expression, msg=None)
```

## Other capabilities

### Consolidate common test code
`unittest` provides two functions, `setUp` and `tearDown` which can be defined in the test suite class and are called before and after each test respectively. 
These are a convenient place to locate code that is common to all of the tests in the test suite. If these functions are used, they must also call the `SSTTestCase` version of the function. `SSTTestCase` uses these functions to track test execution time and manage some concurrency-related state in the framework.

```py
class testcase_NAME(SSTTestCase):

    # This is called once before each test is run
    def setUp(self):
        super(type(self), self).setUp()
        # Put common code here
    
    # This is called once after each test is run
    def tearDown(self):
        # Put common code here
        super(type(self), self).tearDown()
```

### Skipping tests
While the test suite defines the tests to run, runtime options passed to the test utility control the environment that
the test runs in. For example, a test does not control whether SST will run in parallel or serially or how SST was compiled or configured.
If a test needs to be skipped in certain conditions (e.g., it uses a library that is not supported on macOS),
that can be done using UnitTest's `skip()`-type decorators on test functions. See the Python unittest documentation for details. For example, this test will be skipped if SST is being run with more than 4 ranks and/or threads.

```py
parallelism = testing_check_get_num_ranks() * testing_check_get_num_threads()

@unittest.skipIf(parallelism > 4, "Test does not support greater than 4-way parallelism")
def test_testWithOnlyFourComponents(self):
    ...
```

The test framework provides a special skip function that can be used to check the SST ELI registry file, `sstsimulator.conf`. The function skips the test if the search variable returns an empty string. This is useful when a test relies on a library other than the one being tested. See the [sst-register](../../tools/commandLine/sst-register.md) documentation for details on the registry file.

```py
# Skip test if there is no LIBDIR path defined in the RAMULATOR section of sstsimulator.conf
@skip_on_sstsimulator_conf_empty_str("RAMULATOR", "LIBDIR", "Ramulator is not built")
def test_that_uses_ramulator(self):
    ...
```
