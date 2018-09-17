---
id: sst_eli_document_params
title: SST_ELI_DOCUMENT_PARAMS
---
## Fully Qualified Name
```cpp
#define SST_ELI_DOCUMENT_PARAMS	( ... )	
```

### Remarks

Document and register all the parameters of a component or subcomponent.

## Requirements

```cpp
#include <sst/core/elementinfo.h>
```

## Syntax

```cpp
SST_ELI_DOCUMENT_PARAMS(
    { "parm1_NAME", "parm1_DESCRIPTION", "parm1_DEFAULT_VALUE" },
    { "parm2_NAME", "parm2_DESCRIPTION", "parm2_DEFAULT_VALUE" },
    { "parm3_NAME", "parm3_DESCRIPTION", "parm3_DEFAULT_VALUE" },
    ...
    { "parmN_NAME", "parmN_DESCRIPTION", "parmN_DEFAULT_VALUE" }
)
```

## Parameters

**parmN_NAME** - The name of the parameter. This is the value passed into the [addParams](projectDriver/component/addParams.md) function in the Project Driver.

**parmN_DESCRIPTION** - A description of the param. This value is shown when you run sst-info in the command line.

**parmN_DEFAULT_VALUE** - Shows or describes the default value for the parameter.

## Examples

### Example 1
```cpp
SST_ELI_DOCUMENT_PARAMS(
		{ "size", "Size of the bay (1 = small, 2 = large)", "1" },
		{ "smallCarWashTime", "How long to wash a small car (ticks)", "3" },
		{ "largeCarWashTime", "How long to wash a large car (ticks)", "5" }
	)
```

## See Also

- [addParams](projectDriver/component/addParams.md)
