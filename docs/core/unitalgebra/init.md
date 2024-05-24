---
title: init
---

```cpp
void init(const std::string& val);
```

Initialize a UnitAlgebra object. This function is required if the default [constructor](constructor) was used to create the UnitAlgebra object.

## Parameters
* **val** (std::string) value. The format must be `<NUMBER>?<UNITS>` where:
```cpp
NUMBER      := (-)?[0-9]+(.[0-9]+)?
UNITS       := UNITGROUP(/UNITGROUP)
UNITGROUP   := UNIT(-UNIT)*
UNIT        := (SIPREFIX)?(BASEUNIT|COMPUNIT)
SIPREFIX    := {a,f,p,n,u,m,[kKMGTPE]i?}
BASEUNIT    := {s,B,b,events}
COMPUNIT    := {Hz,hz,Bps,bps,event}
```
* **returns** none

## Examples
### Examples of valid format strings
```sh
1s
3MHz
-3ms
24KiB
5.5GHz
8b/s
8bps
3 events
90 Thz
24 s/B
```

### Code Example
```cpp
// Use default constructor
// Initialize to 5 milliseconds
SST::UnitAlgebra* num = new UnitAlgebra();
num->init("5ms");
```

## Header
```cpp
#include <sst/core/unitalgebra.h>
```
