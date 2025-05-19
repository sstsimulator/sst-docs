---
title: Element Naming Conventions
---

Certain names in SST that are used as part of input configuration must follow naming conventions which essentially require that they be *valid Python variable names*. 

These restrictions apply to:
* User-provided names for Links and Components in input configurations.
    * Example: The names given in a Python input file via `sst.Link(name)` and `sst.Component(name, lib.element)`.
* Developer-provided names for Element Library Info (ELI) types for:
    * Elements (library, component, subcomponent, etc.)
    * Parameters
    * SubComponent slot names
    * Statistics
    * Ports

## Restrictions
* Names must start with a letter or single underscore.
* Names may only contain alphanumeric characters and underscores.
    * Exception: An integer format specifier is allowed for port and parameter names and is treated as a number. See below.
* Names may be scoped using a period/dot (.). Names on either side of the dot must be valid names (i.e., a dot may not be followed immediately by a number or multiple underscores).

### Valid Examples
* `link_bw`
* `_latency`
* `output.vc`
* `port5`

### Invalid Examples
* `4example` (begins with a number)
* `port.5` (`5` is not by itself a valid name)
* `__vn` (begins with more than one underscore)

### Exception for integer format specifiers
Parameters and port names may include an integer format specifier `%d` which allows for a set of names with slight variations. In this case `%d` is considered a number and must follow the naming restrictions for numbers (i.e., may not follow a dot). For example, an ELI name of `port%d` is valid and would allow ports named `port0`, `port1`, etc. However, a port named `port.%d` would not be allowed as the number follows a dot.

