---
title: sst-info
---

The command line utility, `sst-info`, leverages the Element Library Information (ELI) macros embedded in SST objects to return a list of elements (e.g., Components, SubComponents, Modules, Partitioners, etc.) provided by each element library registered with the SST-Core, as well as those provided by the Core itself. 

For each type of SST object, sst-info provides the following.


|                 | Component   | SubComponent  | Module  | Partitioner | ProfileTool |
| ---             | ---         | ---           | ---     | ---         | ---         |
| Description     | X           | X             | X       | X           | X           |
| Version         | X           | X             | X       | X           | X           |
| Compilation info | X          | X             | X       | X           | X           |
| Category        | X           |               |         |             |             |
| API implemented |             | X             |         |             | X           |
| Parameters      | X           | X             | X       |             | X           |
| Ports           | X           | X             |         |             |             |
| Statistics      | X           | X             |         |             |             |
| SubComponent slots | X        | X             |         |             |             |
| Profile points  | X           | X             |         |             |             |
| Attributes      | X           | X             |         |             |             |

## Output
For each category above, `sst-info` prints the following information.

#### Description
A brief description of the element

#### Version
A version of the form `major.minorX.minorY`. This is an element-specific version number and is not related to the SST release version.

#### Compilation info
Shows the date compiled and source file.

#### Category
Components are assigned a category among `PROCESSOR COMPONENT`, `MEMORY COMPONENT`, `NETWORK COMPONENT`, `SYSTEM COMPONENT`, and `UNCATEGORIZED COMPONENT`. 

#### API implemented
For elements that implement an API (e.g., a SubComponent), the API implemented.

#### Parameters
Parameters are displayed in the following format. `<name>` is the name of the parameter and matches the name that should be used in the SST input file. Each parameter displays a `<Description>` and the `<default>` value assigned to the parameter in square brackets. If no default value is defined, `<required>` is displayed instead.
```sh
# Format
<name>: <Description> [<required>] # A parameter with no default value
<name>: <Description> [<default_value>] # A parameter with a default value

# Examples
hyperx.local_ports: Number of endpoints attached to each router.  [<required>]
algorithm: Routing algorithm to use.  [DOR]
```

#### Ports
Similar to parameters, ports display the `<name>` which should be used to access the port and a description of the port's purpose.
```sh
# Format
<name>: <Description>

# Examples
rtr_port: Port that connects to router
```

#### Statistics
Statistics are printed in the following format. `<name>` matches the name of the statistic in the simulation input and statistic output. `<Description>` describes the statistic and `<unit_value` 
```sh
# Format
<name>: <Description>, (units = "<unit_value>") Enable level = <level>

# Examples
send_bit_count: Count number of bits sent on link,  (units = "bits") Enable level = 1
```

#### SubComponent Slots

#### Profile points

#### Attributes

## Syntax

```bash
sst-info [<element[.component|subcomponent]>]  [options]
```

## Parameters

**element** - Element Library Name.

**component|subcomponent** - Either a Component or SubComponent defined in the Element Library.

**options**:
- **-h, --help** - Print help message.
- **-v, --version** - Print SST Package Release Version.
- **-l, --libs=LIBS** - \{all, \<element\>, \<element[.component|subcomponent]\>\} - Element Library9(s) to process.
- **-n, --nodisplay** - Do not display output. Default is off.
- **-x, --xml** - Generate XML data. Default is off.
- **-o, --outputxml=FILE** - File path to XML file. Default is SSTInfo.xml.
- **-d, --debug** - Enabled debugging messages.

## Examples

### List All
```bash
sst-info
```

### List All To XML File
```bash
sst-info -x -o MyInfoFile.xml
```
OR
```bash
sst-info --xml --outputxml=MyInfoFile.xml
```

### Element Library
```bash
sst-info ariel
```

### Component
```bash
sst-info ariel.ariel
```

### SubComponent
```bash
sst-info ariel.MemoryManagerMalloc
```

### List Specific Element Libraries, Components, SubComponents
```bash
sst-info -l {ariel,miranda}
```
OR
```bash
sst-info -l ariel -l miranda
```
OR
```bash
sst-info --libs={ariel,miranda}
```
OR
```bash
sst-info --libs=ariel --libs=miranda
```
OR
```bash
sst-info -l {ariel,miranda.ReverseSingleStreamGenerator}
```
