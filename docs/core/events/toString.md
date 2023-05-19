---
title: toString
---

```cpp
virtual std::string toString();
```

Returns a string representation of the event. This function is inherited from SST::Event's base class and can be overridden by Events. Some of SST Core's built-in debug output uses this function so specializing it can be useful for debugging.

## Parameters
* **returns** A string representation of the event


## Example

<!--- SOURCE_CODE: sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycleEvent.h --->
```cpp title="sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycleEvent.h"
class basicLifeCycleEvent : public SST::Event 
{
public: 
    /* Constructors, accessors, etc. here */
    
    //highlight-start
    std::string toString() const override {
        std::stringstream s;
        s << "basicLifeCycleEvent. String='" << str << "' Number='" << num << "'";
        return s.str();
    }
    //highlight-end
private:
    std::string str;
    unsigned num;

    /* Serialization function & macro here */
};
```

## Header
```cpp
#include <sst/core/component.h>
```
