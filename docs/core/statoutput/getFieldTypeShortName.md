---
title: getFieldTypeShortName
---

```cpp
const char* getFieldTypeShortName(fieldType_t type);
```

Returns a short version of the type name for the field type `type`. This function wraps the static `getFieldTypeShortName` provided in the `StatisticFieldInfo` class and can be used as an alternative.

## Parameters
* **type** (fieldType_t) A field type
* **returns** (const char*) A short name for the specified field type

## Example

```cpp
// Print a list of fields with their types registered to this stat output
FieldInfoArray_t::iterator it_v = getFieldInfoArray().begin();
while ( it_v != getFieldInfoArray().end() ) {
    StatisticFieldInfo* statField    = *it_v;
    //highlight-next-line
    printf("%s.%s", statField->getFieldName(), getFieldTypeShortName(statField->getFieldType()));

    it_v++;
    if ( it_v != getFieldInfoArray().end() ) {
        printf(", ");
    } else {
        printf("\n");
    }
}
```

## Header
```cpp
#include <sst/core/statapi/statoutput.h>
```