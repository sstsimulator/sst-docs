---
id: primaryComponentDoNotEndSim
title: primaryComponentDoNotEndSim()
---
## Fully Qualified Name
```cpp
SST::Component::primaryComponentDoNotEndSim()
```

### Remarks
The component should be [registered as a primary component](cpp/component/registerAsPrimaryComponent.md) before calling.

Tells the simulation that it should not exit.

The component will remain in this state until a call to [primaryComponentOKToEndSim](cpp/component/primaryComponentOKToEndSim.md).

## Requirements

```cpp
 #include <sst/core/component.h>
```

## Syntax

```cpp
void SST::Component::primaryComponentDoNotEndSim()
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
- [registerAsPrimaryComponent](cpp/component/registerAsPrimaryComponent.md)