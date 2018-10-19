---
id: registerAsPrimaryComponent
title: registerAsPrimaryComponent()
---
## Fully Qualified Name
```cpp
SST::Component::registerAsPrimaryComponent()
```

### Remarks
Register as a primary component, which allows the component to specify when it is and is not OK to end simulation.

This must be called during simulation wireup (i.e. during the constructor for the component). By default, the state of the primary component is set to OKToEndSim.

## Requirements

```cpp
#include <sst/core/component.h>
```

## Syntax

```cpp
void SST::Component::registerAsPrimaryComponent()
```

## Parameters

**None**

## Return Value

**None**

## Examples

### Example 1
```cpp
carWash::carWash( SST::ComponentId_t id, SST::Params& params ) : SST::Component(id) {
// ** SNIP **

	// tell the simulator not to end without us
	registerAsPrimaryComponent();
	primaryComponentDoNotEndSim();

// ** SNIP **
}
```

## See Also

- [primaryComponentDoNotEndSim](cpp/component/primaryComponentDoNotEndSim.md)
- [primaryComponentOKToEndSim](cpp/component/primaryComponentOKToEndSim.md)