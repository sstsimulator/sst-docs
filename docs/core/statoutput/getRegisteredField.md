---
title: getRegisteredField
---

```cpp
StatisticFieldInfo* getRegisteredField(fieldHandle_t fieldHandle);
```

Returns information about a registered field via a field handle.

## Parameters
* **fieldHandle** (fieldHandle_t) A unique handler indicating the field
* **returns** (StatisticFieldInfo*) The StatisticFieldInfo object associated with the requested `fieldHandle`

## Example

```cpp title="Using getRegisteredField() to print field information in outputField()"
// m_outputBuffer is a class variable, type is std::string
void outputField(fieldHandle_t field_handle, int32_t data) override
{
    std::string         buffer;
    //highlight-next-line
    StatisticFieldInfo* field_info = getRegisteredField(field_handle);

    if ( nullptr != field_info ) {
        const char* type_name = getFieldTypeShortName(field_info->getFieldType());

        // Prints for example: "sum.d32 = 24;"
        m_outputBuffer += format_string("%s.%s = %" PRId32";", field_info->getFieldName().c_str(), type_name, data);
    }
}
```

## Header
```cpp
#include <sst/core/statapi/statoutput.h>
```