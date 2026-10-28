---
title: operator bool
---

```cpp
explicit operator bool() const;
```

Converts TimeConverter to a bool, returning `true` if the TimeConverter is initialized and false otherwise.

## Example

<!--- SOURCE_CODE: None --->
```cpp
#include <sst/core/timeConverter.h>
void example::doSomethingWithTimeConverter(TimeConverter tc)
{
    //highlight-next-line
    if (!tc) {
        return;
    }
    
    // Do something with tc...
}
```

## Header
```cpp
#include <sst/core/timeConverter.h>
```
