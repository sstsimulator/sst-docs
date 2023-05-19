---
title: findComponentByName
---

In many cases, Components and SubComponents will be created using library functions and the user will not have direct access to their handles. In some instances, the provided python modules will have accessor functions that can provide handles to these elements. If this is not provided by the library, the user can call the findComponentByName() function to get a handle to the desired element. The function can find handles for both Components and SubComponents. The use of this function presupposes a knowledge of the naming convention of the elements in the build functions of the library. 

## Syntax
```python
sst.findComponentByName(name)
```

## Parameters
* **name** (type: string) name of the Component or SubComponent to find. The name for SubComponents is described above. Slot indexes are optional in cases where only on SubComponent has been added to a slot, but you can also use [0] in all cases, even when the actual name will not display this way. 
* **returns** the function will return a handle to the Component/SubComponent with the provided name, or None if the name is not found. 


## Example

```python
import sst

sst.Component("c0", "simpleElementExample.example0") # Name is 'c0'
comp = sst.findComponentByName("c0")
```

## Import
```python
import sst
```