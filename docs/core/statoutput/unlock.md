---
title: unlock
---

```cpp
void unlock();
```

Use this function to release the lock acquired by [`lock()`](./lock). 

Locking is handled in the base StatisticFieldsOutput class and typically does not need to be done by derivative classes. See [`lock()`](./lock) for additional details. 

## Parameters
* **returns** none

## Example

```cpp
this->lock();
buffer += "thing0";
buffer += "thing1";
buffer += "thing2";
//highlight-next-line
this->unlock();
```

## Header
```cpp
#include <sst/core/statapi/statoutput.h>
```