---
title: constructor
---

```cpp
UnitAlgebra(const std::string& val);
UnitAlgebra();
```

Create a new UnitAlgebra. The string passed to the constructor should include both the value and the units, for example, `3s`. If the default constructor is used, [UnitAlgebra::init()](init) must be called to initialize the object.

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

SST::UnitAlgebra* num0 = new UnitAlgebra("200MHz");
SST::UnitAlgebra* num1 = new UnitAlgebra("20KB/s");

// Use default constructor
SST::UnitAlgebra* num2 = new UnitAlgebra();
num2->init("1us");

// The constructor can be invoked directly from params.find()
UnitAlgebra num3 = params.find<UnitAlgebra>("clock_frequency", "3GHz");
```

## Header
```cpp
#include <sst/core/unitalgebra.h>
```
