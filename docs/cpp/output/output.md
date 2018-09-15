---
id: output
title: output()
---
## Fully Qualified Name
```cpp
SST::Output::output()
```

### Remarks

Print a message during execution.

## Requirements

Main definition
```cpp
 #include <sst/core/output.h>
```

Also included in the following
```cpp
 #include <sst/core/simulation.h>
 #include <sst/core/component.h>
```

## Syntax

```cpp
//#1 will prepend the prefix set in this Output object
// NOTE: usually called with the CALL_INFO macro, which will take the place of the first 3 parameters
void SST::Output::output(uint32_t line, const char* file, const char* func, const char* format, ... )

//#2 outputs only the message provided. It will not prepend the prefix set in this Output object.
void SST::Output::output(const char* format, ... )
```

## Parameters

**line** - Line number of calling function (use CALL_INFO macro)

**file** - File name calling function (use CALL_INFO macro)

**func** - Function name calling function (use CALL_INFO macro)

**format** - Format string. All valid formats for printf are available

**...** - Argument strings for format

## Return Value

**NONE**

## Examples

### Example 2
```cpp
//#1
m_dbg.output(CALL_INFO,"Warn addr %" PRIx64 " ignored\n", vec[i].addr);
```

### Example 2
```cpp
//#2
output.output("WARNING:  Found dangling link: %s.  It is connected on one side to component %s.\n",clink.name.c_str(),
                    comps[clink.component[1]].name.c_str());
```

### Example 3
```cpp
 schedout.output("toRun:\n");
for (vector<Job*>::iterator it2 = intoRun -> begin(); !found && it2 != intoRun -> end(); it2++) {
    schedout.output("%s\n", (*it2) -> toString().c_str());
}
schedout.output("running:\n");
for (vector<Job*>::iterator it2 = inrunning -> begin(); !found && it2 != inrunning -> end(); it2++) {
    schedout.output("%s\n", (*it2) -> toString().c_str());
} 
schedout.fatal(CALL_INFO, 1, "Could not find deep copy for %s\nwhen copying StatefulScheduler estSched for FST\n", (*it) -> j -> toString().c_str());
         
```

## See Also

- [init()](cpp/output/init.md)
- [debug()](cpp/output/debug.md)
- [verbose()](cpp/output/verbose.md)
- [fatal()](cpp/output/fatal.md)