---
id: sst-info
title: sst-info
---

:::caution
This page has not been reviewed recently to ensure that it is up-to-date with the latest SST specification. It is possible the information is out of date.
:::

### Remarks

The command line utility, sst-info, lists documented Components, SubComponents, Events, Modules, and Partitioners within an Element Library. See below for more details on what sst-info will include for each of the types.

- Components
  - Describes the Components in the Element Library.
  - **Parameters** - Includes the parameter name, description, and default value.
  - **Ports** - Includes the port name, description, and what events the port accepts.
  - **Statistics** - Includes the statistic name, plural name for the units the statistic collects, description, and the statistic's enable level.
  - **SubComponent Slots** - Includes the slot's name, description, and what interface the SubComponent should provide.
- SubComponents
  - Describes what SubComponents are defined in the Element Library. These SubComponents can be placed in the SubComponent slot of a Component.
  - **Provides Interface** - The interface the SubComponent expects to be communicated with. The SubComponent slot in the Component should be the same as this interface.
  - **Parameters** - Includes the parameter name, description, and default value.
  - **Ports** - Includes the port name, description, and what events the port accepts.
  - **Statistics** - Includes the statistics name, plural name for the units the stat collects, description, and the statistic's enable level.
  - **SubComponent Slots** - Includes the slot's name, description, and what interface the SubComponents should provide.
- Events
  - Lists any custom events defined in the Element Library.
- Modules -
  - **Parameters** - Includes the parameter name, description, and default value.
- Partitioners -
  - Name of the partitioner, description of the partitioner.

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
- **-l, --libs=LIBS** - {all, \<element\>, \<element[.component|subcomponent]\>} - Element Library9(s) to process.
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
