---
title: outputField
---

```cpp
virtual void outputField(fieldHandle_t fieldHandle, int32_t data);
virtual void outputField(fieldHandle_t fieldHandle, uint32_t data);
virtual void outputField(fieldHandle_t fieldHandle, int64_t data);
virtual void outputField(fieldHandle_t fieldHandle, uint64_t data);
virtual void outputField(fieldHandle_t fieldHandle, float data);
virtual void outputField(fieldHandle_t fieldHandle, double data);
```

These functions *should* be overridden for each type supported by the statistic output. 

The default implementations produce an error message that the function is not implemented. When outputting statistics, each statistic will call the appropriate function for each of its data members. For example, an accumulator will call this for "sum", "sum-squared", "count", "min", and "max" while a histogram will call these to output the histogram's bin configuration (number, width, etc.), the value of each bin, and any outliers.

The function implementations may simply store the data value formatted as needed or it may also use `fieldHandle` to look up information about the specific field being output.

## Parameters
* **fieldHandle** (fieldHandle_t) A handler indicating the specific field being output.
* **data** (various types) The data value to be output.
* **returns** none

## Examples

### Example 1
```cpp title="Buffering data as strings without any field information"
void outputField(fieldHandle_t fieldHandle, int32_t data) override { buffer_string += format_string(" %" PRId32, data); }
void outputField(fieldHandle_t fieldHandle, uint32_t data) override { buffer_string += format_string(" %" PRIu32, data); }
void outputField(fieldHandle_t fieldHandle, int64_t data) override { buffer_string += format_string(" %" PRId64, data); }
void outputField(fieldHandle_t fieldHandle, uint64_t data) override { buffer_string += format_string(" %" PRIu64, data); }
void outputField(fieldHandle_t fieldHandle, float data) override { buffer_string += format_string(" %f", data); }
void outputField(fieldHandle_t fieldHandle, double data) override { buffer_string += format_string(" %f", data); }
```

### Example 2
```cpp title="Buffering data as strings with field information"
void outputField(fieldHandle_t fieldHandle, int32_t data) override 
{ 
    buffer_string += format_string(" %" PRId32, data); 
}

void outputField(fieldHandle_t fieldHandle, uint32_t data) override 
{ 
    buffer_string += format_string(" %" PRIu32, data); 
}

void outputField(fieldHandle_t fieldHandle, int64_t data) override 
{ 
    buffer_string += format_string(" %" PRId64, data); 
}

void outputField(fieldHandle_t fieldHandle, uint64_t data) override 
{ 
    buffer_string += format_string(" %" PRIu64, data); 
}
void outputField(fieldHandle_t fieldHandle, float data) override 
{ 
    buffer_string += format_string(" %f", data); 
}
void outputField(fieldHandle_t fieldHandle, double data) override 
{ 
    buffer_string += format_string(" %f", data); 
}
```

## Header
```cpp
#include <sst/core/statapi/statoutput.h>
```