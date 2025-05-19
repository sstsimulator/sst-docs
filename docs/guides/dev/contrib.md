---
title: Contributing to SST
---

Interested in contributing to the SST repositories? This page describes the process and gives guidelines for contributing to specific SST repositories. To share an element library, tool, or other SST-related capability with the SST community, [add a pointer on the Community page](../../community/index.md#contribute).

## Source Code 
The main SST repositories are [sst-core](https://github.com/sstsimulator/sst-core) and [sst-elements](https://github.com/sstsimulator/sst-elements). There are additional repositories for specific elements (e.g., [sst-macro](https://github.com/sstsimulator/sst-macro), [external element](https://github.com/sstsimulator/sst-external-element)).
Most SST repositories have two main branches (*devel* and *master*) as well as a number of release branches. All development is done in private forks and submitted to the main repositories via pull requests against the *devel* branches (if present).

## Forking and cloning SST for development
We recommend cloning and configuring remotes as follows when cloning to prevent unnecessary merge commits of mainline branches into your forked development branches.

```sh
git clone git@github.com:<USERNAME>/sst-core            # Clone fork
cd sst-core
git remote add sst git@github.com:sstsimulator/sst-core # Add mainline remote
git fetch --all
git switch -c devel sst/devel                           # Set up your local devel branch to point to the mainline devel branch
```

Then, **always branch off the local devel branch when creating development branches.** Pull requests **must** target the *devel* branch if present. If a repository has no *devel* branch, pull requests may target the *master* or *main* branch directly.

```sh
git checkout devel              # Check out devel which points to upstream sstsimulator repository's devel branch
git pull                        # Make sure you have the latest upstream commits
git checkout -b feature_branch  # Create your branch (it will be created in your own fork)
```

## Developer Guidelines

Before contributing, read the [Contributing Guide](https://github.com/sstsimulator/sst-core/blob/master/CONTRIBUTING.md) in the sst-core repository. Some of that information is duplicated here. 

### SST-Core Guidelines
SST-Core follows more strict developer guidelines, including code formatting and testing, than the other SST repositories. Read the [Contributing Guide](https://github.com/sstsimulator/sst-core/blob/master/CONTRIBUTING.md) before contributing. A few key notes:

1. **Discussion** Major new features require opening an issue to discuss the feature at least two weeks prior to submitting a pull request. It is helpful to include use case as well as a description of the proposed implementation. All SST community members are welcome (and encouraged) to contribute to these discussions. Early discussion of the feature helps collect use cases that can be used to make the feature more broadly useful, as well as ensure the implementation will work well with the codebase.
1. **Style** PRs must pass a clang-format check (see sst-core/scripts/clang-format-test.sh).
1. **Standards** Commits must adhere to the standards outlined in the [Contributing Guide](https://github.com/sstsimulator/sst-core/blob/master/CONTRIBUTING.md)
1. **Deprecation** Changes that break public APIs (i.e., those visible to element libraries) require a [deprecation period of one major release cycle](#deprecation).
1. **Testing** New features must be accompanied by new tests. Major modifications of untested existing features should also be accompanied by tests.

### SST-Elements Guidelines
Contributions to individual libraries are managed by the library owners. The application of coding standards, testing, etc. varies based on the library's maturity and usage. In general:
1. **Discussion** For large, breaking, or otherwise potentially intrusive changes, we encourage opening an issue to discuss prior to submitting a PR.
1. **Style** Adopt the library's coding style.

### Mature SST Elements
For [mature SST Elements](../../elements/intro.mdx#sst-project-libraries) such as memHierarchy, merlin, and macro, follow these guidelines in addition to the general ones above:
1. **Testing** New features should be accompanied by appropriate tests.
1. **Deprecation** Breaking changes to APIs that may be used by other libraries are *heavily* discouraged. Follow the [deprecation timeline for SST-Core](#deprecation).

## Contributing to the Repositories
There are three steps to contributing: 
1. Create a pull request
1. Undergo a technical review and receive an approval
1. Pass CI testing

### Create a pull request
Ensure that commits contain only new changes (not merge commits of devel/master branches into your feature branch) by following the cloning instructions above. Pull request must target the *devel* branch of the repo if there is one. If no *devel* branch, target the *master* or *main* branch instead.

### Receive a technical review
All SST community developers are encouraged to review and discuss PRs. Additionally, the PR must receive at least one approving technical review from an SST team member prior to testing. Any suggested changes, questions, etc. need to be resolved prior to merging the PR though the PR may be released for testing earlier.

### Pass testing
Once approved, the PR will be released for CI testing. See [AutoTesting](autotest.md) for information on the tests to expect. [Running CI tests locally](testing.md) prior to submitting a pull request will reduce the likelihood of testing failures. Once the PR both passes testing and has approval, a member of the SST team will merge it. Pull requests that have failed testing may be marked with the `WIP` tag, indicating they are not ready to be re-tested.

## Release Process and Schedule
SST typically has at least two releases a year, a major release in late spring and a minor release in the fall. Additional bug-fix and minor releases are generated as needed. Releases branch off the *master* or *main* repository branches. 

### Deprecation
Any breaking change to the public APIs in SST-Core and mature SST-Elements must be announced via a deprecation notice *and* provide backwards compatibility for a full major release cycle. This means a deprecation must be announced in a major release and backwards compatibility provided until the next major release.
For example:
1. If deprecation occurs in SST 14.0, the breaking change may be made in SST 15.0. (Deprecation is announced in major release 14.0)
1. If deprecation occurs in SST 12.1, the breaking change may be made in SST 14.0. (Deprecation is announced in major release 13.0)

### Supported platforms
* Adding support for compiler/python/library/OS/etc. versions may be done at any release.
* Removing support for compiler/python/library/OS/etc. versions should be done at a major release.
* Generally, SST selects supported versions of compilers, python, and other libraries according to which versions ship with supported OSes. This minimizes the need to install additional packages for SST.

### Release Process
In addition to passing CI testing, release branches need to consistently pass all nightly and other regularly scheduled tests on each supported platform, as well as compile cleanly on those platforms.
