---
title: simpleExternalElement
---

*SimpleExternalElement* is a standalone repository that demonstrates how one might write their own element library and register it with the SST Core framework.

:::note At a Glance

**Source Code:** [sst-external-element/](https://github.com/sstsimulator/sst-external-element) &nbsp;  
**SST Name:** `simpleExternalElement` &nbsp;  
**Maturity Level:** Mature (3) &nbsp;  
**Development Path:** Active &nbsp;   
**Last Released:** SST 16.1

:::

### Required dependencies
*None*

### Optional dependencies 
*None*


## Elements
Use `sst-info simpleExternalElement` to see its parameters.

| Library | Element | Type | Description |
|---------|---------|------|-------------|
| `simpleExternalElement` | `SimpleExternalElement` | Component | Clocked component that prints a message every `printFrequency` cycles and ends the simulation after `repeats` messages |

## Building and running
The library builds with `sst-config` and registers itself with SST using `sst-register`:

```bash
cd sst-external-element/src && make
```

<!--- SOURCE_CODE: sst-external-element/tests/simpleElementExample-test-001.py --->
```python title="Running SimpleExternalElement (from sst-external-element/tests/simpleElementExample-test-001.py)"
import sst

obj = sst.Component("simpleExternalElement", "simpleExternalElement.SimpleExternalElement")
obj.addParams({
    "printFrequency" : "5",
    "repeats" : "15",
})
```
