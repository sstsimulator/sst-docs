---
title: output
---
```cpp
void output(const char* format, ...) const;
void output(uint32_t line, const char* file, const char* func, const char* format, ...) const;
```

Output the message with formatting as specified by the format parameter. If called with CALL_INFO (line, file, func) parameters, the output will also prepend the Output object's prefix to the message.

## Parameters
* **line** (uint32_t) Line number of calling function (use CALL_INFO macro)
* **file** (const char*) File name of calling function (use CALL_INFO macro)
* **func** (const char*) Name of calling function (use CALL_INFO macro)
* **format** (const char*) Format string. All valid formats for printf are available
* **...** (variable) Arguments for format string
* **returns** none

## Examples

### Example 1
```cpp
//#1
out.output(CALL_INFO,"Warn addr %" PRIx64 " ignored\n", vec[i].addr);
```

### Example 2
```cpp
//#2
out.output("WARNING:  Found dangling link: %s.  It is connected on one side to component %s.\n",clink.name.c_str(),
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
```

## Header
```cpp
#include <sst/core/output.h>
```