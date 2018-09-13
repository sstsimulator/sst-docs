---
id: StringEvent
title: StringEvent
---
## Fully Qualified Name
```cpp
SST::Interfaces::StringEvent
```

### Remarks

## Requirements

```cpp
 #include <sst/core/interfaces/stringEvent.h>
```

## Functions

### Constructor
```cpp
// #1
StringEvent(const std::string& str)

// #2 - copy an existing StrinEvent reference or pointer
StringEvent(const StringEvent& me)
StringEvent(const StringEvent* me)


```

#### Parameters

**str** - The String contents of this event

**me** - the StringEvent to Copy

#### Return Value

**SST::Interfaces::StringEvent** - The new StringEvent

### getString
```cpp
getString()
```

#### Parameters

**None**

#### Return Value

**const std::string&** - The contents of the StringEvent

## Examples

### Example 1: Constructor #1
```cpp
cpuLinks_[i]->sendInitData(new Interfaces::StringEvent("SST::MemHierarchy::MemEvent"));
```

### Example 2: Constructor #2
```cpp
StringEvent myEvent = new StringEvent("Hello");
StringEvent myEventCopy = new StringEvent(myEvent);
```

### Example 2: getString()
```cpp
StringEvent myEvent = new StringEvent("Hello");
std::string str = myEvent.getString();
```

## See Also