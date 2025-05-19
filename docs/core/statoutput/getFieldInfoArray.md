---
title: getFieldInfoArray
---

```cpp
// FieldInfoArray_t = std::vector<StatisticFieldInfo*>
FieldInfoArray_t& getFieldInfoArray() const;
```

Each StatisticFieldsOutput contains a `std::vector` of the fields that the statistics registered to it contain. For example, if all registered statistics are `AcculatorStatistic`s and tracking values of type `uint32_t`, then the array would contain entries for `sum(u32), sumSq(32), count(u32), min(u32), max(u32)`. If some statistics were tracking `float` or `int64_t`, then the fields array would also contain entries for those types (e.g., `sum(float)`). Likewise, if any statistics were being collected as histograms, each field of the histogram (bin size, bin width, start index, etc.) would have an entry in this array.

Each entry in `FieldInfoArray_t` is a pointer to a `StatisticFieldInfo` object and can be read using the following functions.
* `const std::string& getStatName()`: Returns the statistic name (e.g., "Accumulator" or "Histogram") associated with this field.
* `const std::string& getFieldName()`: Returns the name of the field such as "Sum", "Count", "BinWidth", etc.
* `fieldType_t getFieldType()`: Returns an indicator of the data type being tracked by this field. Use this in conjunction with the two functions below to get a string representation of the type.
    * `static const char* getFieldTypeShortName(fieldType_t type)`: Returns a short version of the type name, such as `"u32"` for `uint32_t`.
    * `static const char* getFieldTypeFullName(fieldType_t type)` : Returns the full type name such as `"float"` or `"uint32_t"`.
* `std::string getFieldUniqueName()`: Returns the field name and type separated by a `.`. For example: `"count.0"` where "0" is the field type (`fieldType_t = uint32_t`) associated with the field. 


## Parameters
* **returns** (FieldInfoArray_t) A reference to the FieldInfoArray for the statistics registered to this output object

## Example

```cpp
// Print a list of fields with their types registered to this stat output
//highlight-next-line
FieldInfoArray_t::iterator it_v = getFieldInfoArray().begin();
//highlight-next-line
while ( it_v != getFieldInfoArray().end() ) {
    StatisticFieldInfo* statField    = *it_v;
    printf("%s.%s", statField->getFieldName(), StatisticFieldInfo::getFieldTypeShortName(statField->getFieldType()));

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