---
title: SST_ELI_EXPORT
sidebar_label: Export ELI
---

```cpp
SST_ELI_EXPORT(class_name)
```

ELI macros must reside in a public section of the C++ class they belong too. In most cases, this is also in a header file. If a class is declared entirely in an implementation file and includes any ELI macros, this macro must also be used to ensure some compilers (e.g., Intel) find the ELI. ELI declared in header files does not require the use of this macro.


:::info Important
This macro must reside in a `public` section of the C++ class declaration.
:::


## Parameters

* **class_name** (class) The fully qualified name of the class. This is not a string.

## Example

This example comes from SST's Merlin element library.
```cpp title="Excerpt from sst-elements/src/sst/elements/merlin/merlin.cc"
namespace SST {
namespace Merlin {

class MerlinPyModule : public SSTElementPythonModule {
public:

    //highlight-start
    SST_ELI_REGISTER_PYTHON_MODULE(
        SST::Merlin::MerlinPyModule,    // Module class
        "merlin",                       // Library name
        SST_ELI_ELEMENT_VERSION(1,0,0)  // Module version
    )
    //highlight-end

    /* Required for certain compilers because this class is not declared in a header file */
    SST_ELI_EXPORT(SST::Merlin::MerlinPyModule)

    /* Constructor, add the Python modules to SST */
    MerlinPyModule(std::string library) :
    SSTElementPythonModule(library)
    {
        auto primary_module = createPrimaryModule(pymerlin, "pymerlin.py");
        primary_module->addSubModule("base",pymerlin_base,"pymerlin-base.py");
        primary_module->addSubModule("endpoint",pymerlin_endpoint,"pymerlin-endpoint.py");
        primary_module->addSubModule("router",pymerlin_router,"pymerlin-router.py");
        primary_module->addSubModule("interface",pymerlin_interface,"interfaces/pymerlin-interface.py");
        primary_module->addSubModule("targetgen",pymerlin_targetgen,"interfaces/pymerlin-targetgen.py");
        primary_module->addSubModule("topology",pymerlin_topo_dragonfly,"topology/pymerlin-topo-dragonfly.py");
        primary_module->addSubModule("topology",pymerlin_topo_hyperx,"topology/pymerlin-topo-hyperx.py");
        primary_module->addSubModule("topology",pymerlin_topo_fattree,"topology/pymerlin-topo-fattree.py");
        primary_module->addSubModule("topology",pymerlin_topo_mesh,"topology/pymerlin-topo-mesh.py");        
    }
};

} } /* namespaces */
```

## Header
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/module.h> // or
#include <sst/core/profiletool.h> // or
#include <sst/core/module/element_python.h>
```
