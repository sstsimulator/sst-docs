---
title: destructor
---

```cpp
~Event();
```

Delete an event.

## Parameters
* **returns** none


## Example

<!--- SOURCE_CODE: sst-elements/src/sst/elements/simpleElementExample/basicEvent.h --->
```cpp title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/basicEvent.h"
#include <sst/core/event.h>

namespace SST {
namespace simpleElementExample {

// Example event that include a vector<char> payload 
// and a boolean value called 'last'
class basicEvent : public SST::Event
{
public:
    basicEvent() : SST::Event(), last(false) { }
    //highlight-next-line
    ~basicEvent() { }

    // Example data members
    std::vector<char> payload;
    bool last;

    /** Rest of class here */
};

} // namespace simpleElementExample
} // namespace SST

## Header
```cpp
#include <sst/core/event.h>
```
