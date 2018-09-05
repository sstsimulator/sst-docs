---
id: sst-info
title: sst-info
---

### Remarks

List documented Components, SubComponents, Events, Modules, Partitioners, and Generators within an Element Library. Additionally sst-info will include more information for each of the types above:

- Components
  - Describes the Components in the Element Library.
  - **Parameters**: Includes the parameter name, description, and default value
  - **Ports**: Includes the port name, description, and what events the port accepts.
  - **Statistics**: Includes the statistics name, plural name for the units the stat collects, description, and the statistic's enable level.
  - **SubComponent Slots**: Includes the slot's name, description, and what interface the SubComponents should provide.
- SubComponents
  - Describes what SubComponents are defined in the Element Library. These SubComponents can be placed in the SubComponent slot of a Component.
  - **Provides Interface**: the interface the SubComponent expects to be communicated with. The SubComponent slot in the Component should be the same as this interface.
  - **Parameters**: Includes the parameter name, description, and default value
  - **Ports**: Includes the port name, description, and what events the port accepts.
  - **Statistics**: Includes the statistics name, plural name for the units the stat collects, description, and the statistic's enable level.
  - **SubComponent Slots**: Includes the slot's name, description, and what interface the SubComponents should provide.
- Events
  - Lists any custom events defined in the Element Library
- Modules (**Not recommended for use, may be depricated in the future - Use SubComponents instead**)
  - **Parameters**: Includes the parameter name, description, and default value
- Partitioners (**Not recommended for use, may be depricated in the future**)
  - name of the partitioner, description of the partitioner
- Generators (**Not recommended for use, may be depricated in the future**)

## Syntax

```bash
sst-info [<element[.component|subcomponent]>]  [options]
```

## Parameters

**element** - Element Library Name

**component|subcomponent** - Either a Component or SubComponent defined in the Elelement Library.

**options**:
- **-h, --help** - Print Help Message
- **-v, --version** - Print SST Package Release Version
- **-l, --libs=LIBS** - {all, <element>, <element[.component|subcomponent]>} - Element Library9(s) to process
- **-n, --nodisplay** - Do not display output - default is off
- **-x, --xml** - Generate XML data - default is off
- **-o, --outputxml=FILE** - File path to XML file. Default is SSTInfo.xml
- **-d, --debug** - Enabled debugging messages

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

### List specific ElementLibraries, Components, SubComponents
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