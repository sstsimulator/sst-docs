---
title: SST_ELI_REGISTER_PYTHON_MODULE
sidebar_label: Python Module
---

```cpp
SST_ELI_REGISTER_PYTHON_MODULE(class_name, "library", SST_ELI_ELEMENT_VERSION(major, minorX, minorY) )
```

Libraries can implement python modules to assist with, for example, configuration. Such modules use this macro to register with the SST Core. Modules will be available as submodules in the 'sst' python module.

:::info Important
This macro must reside in a `public` section of the module's C++ class declaration.
:::


## Parameters

* **class_name** (class) The name of the Component class. This is not a string.
* **library** (string) The name of the library that this Component belongs to. If the library name does not exist, it will be created.
* **SST_ELI_ELEMENT_VERSION(major, minorX, minorY)** This is a macro that specifies the version of a Component. `major`, `minorX`, and `minorY` are integers that form a version number major.minorX.minorY. For example: SST_ELI_ELEMENT_VERSION(3, 0, 9) yields a version of 3.0.9. Versions are not checked by SST, this is provided for developers to version and manage their libraries.

## Examples

### Example 1
This example comes from SST's Merlin element library.
```cpp
namespace SST {
namespace Merlin {

class MerlinPyModule : public SSTElementPythonModule {
public:

    SST_ELI_REGISTER_PYTHON_MODULE(
        SST::Merlin::MerlinPyModule,    // Module class
        "merlin",                       // Library name
        SST_ELI_ELEMENT_VERSION(1,0,0)  // Module version
    )

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
#include <sst/core/module/element_python.h>
```
