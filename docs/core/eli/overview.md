---
title: Element Library Information (ELI)
---

Element Library Information or ELI refers to information about each SST object that the SST Core keeps track of. This information includes things like which classes are available to SST for dynamic loading, which statistics an object generates, what kinds of SubComponents can be loaded into an object and more. ELI faciliates dynamic loading of libraries, introspection of libraries via the `sst-info` command-line utility, error checking input configurations, and many other operations. SST uses a series of macros to register ELI with the SST Core. 

There are two primary kinds of ELI macros: (1) macros for registering a new object (e.g., a Component or SubComponent) and (2) macros to document the parameters, statistics, links, etc. that an SST object supports. Registration macros are required for SST objects while documentation macros are only required if the object has something to document. For example, a Component only needs to use the `SST_ELI_DOCUMENT_PARAMETERS` macro if it takes parameters. 

In addition to registration and documentation, there are also ELI macros for deletion. These allow objects that have inherited ELI from a parent class to remove it from their own. For example, if a parent class documents a port that an inheriting component does not support, the component can delete that port from its own ELI.

## Registering SST Objects with SST Core
All ELI macros *must* reside in a public section of the registering object's class declaration. 


### Components
SST Components are required to use the [`SST_ELI_REGISTER_COMPONENT`](register/sst_eli_register_component) macro. They must also use any of the documentation macros if applicable. Classes that are not themselves Components but instead are base classes for a Component can register ELI and have that ELI inherited if they use one of the following macros to register themselves:
* [`SST_ELI_REGISTER_COMPONENT_BASE`](register/sst_eli_register_component_base)
* [`SST_ELI_REGISTER_COMPONENT_DERIVED_BASE`](register/sst_eli_register_component_derived_base)

### SubComponents
Classes that define a type of SubComponent must use the [`SST_ELI_REGISTER_SUBCOMPONENT_API`](register/sst_eli_register_subcomponent_api) macro to register the class API with the SST Core. SubComponents that implement an API must use the [`SST_ELI_REGISTER_SUBCOMPONENT`](register/sst_eli_register_subcomponent) macro and identify themselves as loadable SST SubComponents and identify the API they implement in the ELI. A class may be both an API and a SubComponent and include both macros. 

Another variant of the `SST_ELI_REGISTER_SUBCOMPONENT_API` macro is [`SST_ELI_REGISTER_SUBCOMPONENT_DERIVED_API`](register/sst_eli_register_subcomponent_derived_api).

:::info
The `SST_ELI_REGISTER_SUBCOMPONENT_DERIVED` macro was introduced temporarily to enable a signature change in the `SST_ELI_REGISTER_SUBCOMPONENT` macro. The two macros are now identical and the `SST_ELI_REGISTER_SUBCOMPONENT_DERIVED` macro will be deprecated in an upcoming release.
:::

### Modules
Modules must use the [`SST_ELI_REGISTER_MODULE_DERIVED`](register/sst_eli_register_module_derived) macro to register with the SST Core. Like SubComponents, Modules should implement an API that has also been registerd with the SST Core. The API must use the [`SST_ELI_REGISTER_MODULE_API`](register/sst_eli_register_module_api) or [`SST_ELI_REGISTER_MODULE_DERIVED_API`](register/sst_eli_register_module_derived_api) macro to register itself. Modules cannot have links, statistics, subcomponents, or parameters and so they may not use the documentation macros. 

:::info
The `SST_ELI_REGISTER_MODULE` macro is deprecated in order to move to an API-based registration for Modules. Once deprecation is complete, this macro will be reintroduced and be identical to the `SST_ELI_REGISTER_MODULE_DERIVED` macro.
:::

### Profiling Tools
Profiling tools are utilities used by SST Core to monitor and report performance information such as event arrival, time spent in clock functions, etc. These tools must be registered using the [`SST_ELI_REGISTER_PROFILETOOL`](register/sst_eli_register_profiletool) macro. 

### Python Modules
SST Element Libraries may create their own Python modules, for example, to simplify configuration for library components. Such modules should be registered using the [`SST_ELI_REGISTER_PYTHON_MODULE`](register/sst_eli_register_python_module) macro.

## Documenting ELI for SST Objects
Macros are available to document the following aspects of an SST object. See each macros' documentation for the specific types of objects that can use a particular documentation macro.
    * [Attributes](document/sst_eli_document_attributes) - arbitrary string tags that can be attached to an SST object to assist with locating, searching, and identifying the purpose of an object
    * [Parameters](document/sst_eli_document_params) - parameters that the object accepts from the simulation configuration
    * [Ports](document/sst_eli_document_ports) - ports that the simulation configuration can attach an SST::Link to
    * [Profile points](document/sst_eli_document_profile_points) - points to which a profiler can be attached
    * [Statistics](document/sst_eli_document_statistics) - statistics that the object generates
    * [SubComponent slots](document/sst_eli_document_subcomponent_slots) - slots into which subcomponent(s) of a specific type can be loaded

## Deleting ELI for SST Objects
Sometimes it is useful for an inheriting class to not inherit all ELI from its parent. To faciliate those instances, several macros are available for deleting documented ELI from an object.
