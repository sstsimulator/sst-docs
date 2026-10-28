---
title: isInitialized
---

```cpp
bool isInitialized() const;
```

Returns whether the TimeConverter has been initialized, that is, whether its factor is non-zero.

## Example

<!--- SOURCE_CODE: None --->
```cpp
#include <sst/core/timeConverter.h>
void example::doSomethingWithTimeConverter(TimeConverter tc)
{
    //highlight-next-line
    if (!tc.isInitialized()) {
        return;
    }
    
    // Do something with tc...
}
```

## Header
```cpp
#include <sst/core/timeConverter.h>
```
