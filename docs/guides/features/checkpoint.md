---
title: Checkpoint and restart
---

In SST 14, SST has begun to bring back support for checkpoint/restart. Under the checkpoint/restart infrastructure, a particular SST simulation can be checkpointed *only* if all of the elements it uses support checkpointing (that is, are serializable). Thus, it will be necessary for developers to add checkpointing capability to their models. The current infrastructure is experimental and has several temporary limitations described below. It was released to enable developers to start adding checkpoint support in anticipation of a fully-functional checkpoint/restart capability. We also expect that as element libraries are made checkpointable and we discover new requirements, the SST-Core support may need modifications. 

This guide describes how to use checkpoint/restart, the current limitations, and how to make element libraries checkpoint-able. As checkpointing support evolves, this guide will be updated. 

## Use case
SST's checkpointing infrastructure is intended for a checkpoint-restart use case. For example, on machines with job scheduling infrastructure, a long-running simulation can be restarted to comply with job time limits or to address a node failure. Checkpoints are not intended to be portable across architectures or compilers. SST's serialization uses C++ `typeid`s which are not guaranteed to be portable.

## Limitations
There are several limitations in the current implementation.

### Short-term temporary limitations
The following limitations are expected to be addressed in the coming months.
* ~Checkpoint/restart is only supported for serial simulations.~ *This has been fixed in the SST-Core repository as of pull-request #1132*
* ~Statistics are not checkpointed. On restart, any previously enabled statistics will be disabled.~ *This has been fixed in the SST-Core repository as of pull-request #1098.* 
* There is no way to query whether a particular Element supports checkpointing.
* The target directory to write checkpoints to cannot be set.
* ~The checkpoint period must be specified in simulated time rather than real (wall) time.~ *This has been fixed in the SST-Core repository as of pull-request #1108.*
* There are no options to limit the number of checkpoints kept.
* SST serialization has support for standard C++ containers and containers of pointers but *not* a pointer to a container.
* SST interfaces (SimpleNetwork, StandardMem) have not yet been made serializable so elements using them will not be able to generate checkpoints

### Longer-term temporary limitations
These limitations are expected to be addressed as needed and once the short-term limitations above are resolved.
* Checkpoint state can, for the most part, not be altered at restart. We anticipate eventually allowing some state to be changed at restart (e.g., partitioning, parallelization).
    * An exception is that command line options governing output such as `--verbose` and `--output-directory` will override state set in the checkpoint. 
* Only the primary/default TimeVortex implementation supports checkpoint.

### Non-temporary limitations
These are limitations that either we have not identified a path towards addressing or that we do not intend to address.
* Profile points are not checkpoint-able.

## Creating a checkpoint

:::info
If you are using the SST-Core repository then as of PR #1108, the checkpoint period options are `--checkpoint-wall-period` and `--checkpoint-sim-period` to specify a wall-clock interval or a simulation time interval, respectively. `--checkpoint-period` is still available but will eventually be removed. The wall time option accepts a time formatted as HH:MM:SS, MM:SS, or SS. Alternately an integer with a time unit (`h`, `m`, or `s`) can be given. The simulation time option accepts an integer with a time unit of `s` or `Hz` and SI prefixes are allowed.
:::

Checkpoints can be created by passing the `--checkpoint-period` option to SST or by setting the option in the Python configuration file. In addition, a prefix can optionally be specified to customize the checkpoint filename.
```sh
$ sst --checkpoint-period=250us configuration.py
or
$ sst --checkpoint-period=250us --checkpoint-prefix="simulation" configuration.py
```
or
```py
import sst

sst.setProgramOption("checkpoint-period", "250us")
sst.setProgramOption("checkpoint-prefix", "simulation") # Optional
```

The period refers to simulated time (see limitations above) and must include units. SI-prefixes are valid.

This will produce a checkpoint every 250us (in the example).
Checkpoints are written to the current working directory and the file name is `PREFIX_TIME_ID.sstcpt`, if a PREFIX was provided, or `checkpoint_TIME_ID.sstcpt`. `TIME` is the time of the checkpoint as measured in the simulation's core time base. For most simulations, this is picoseconds. `ID` starts at 0 for the first checkpoint and is incremented for each subsequent checkpoint. Once checkpointing parallel simulations is supported, we anticipate generating multiple files per checkpoint.

## Restarting from a checkpoint
To restart from a checkpoint, use the `--load-checkpoint` option and pass the checkpoint file instead of a configuration file.
```sh
$ sst --load-checkpoint checkpoint_250000000_0.sstcpt
```

## Adding checkpoint support to SST Element libraries
To support checkpointing, any object that could be part of a checkpoint needs to be serializable and provide a method for serializing and deserializing its state. Element APIs inherit from SST's serializable class and can be made serializable by following the steps below. The same serialization engine is used both for the existing Event serialization in parallel simulations and for checkpointing. Thus, the steps are similar to the steps needed to make Events serializable. Like Event serialization, checkpointing requires data to be explicitly added to the serialization stream. Unlike Event serialization, checkpointing tracks and tags pointers to objects so that upon restart, a pointer will correctly point to the recreated object.

Use these guidelines to determine how to make an object serializable:
* **Elements (Components, SubComponents, Modules, etc.)**: Follow steps 1-4 below.
* **Non-polymorphic classes and structs** Either inherit from SST's serializable class and follow steps 1-4 OR add a serialize_order function without inheriting from the serializable class (step 3 only). Non-polymorphic classes will also need a default constructor if they do not already have one. (step 2).
* **All other classes** The easiest method is to inherit from SST's serializable class and then follow steps 1-4.

This snippet shows how to inherit from SST's serializable class.
```cpp title="Inheriting from SST's serializable class"
#include <sst/core/serialization/serializable.h>

class MyClass : public SST::Core::Serialization::serializable {
    ...
```

### Step 1: Change Clock and Event handler functions
The existing handler signatures are not serializable, however, the updated signatures require minimal changes. The handler type needs to be changed from `Handler` to `Handler2` and the function pointer needs to be moved from the function parameters into the template parameters.
```cpp
// Clock handler without metadata
SST::Clock::HandlerBase* old_handler = 
    new SST::Clock::Handler<ComponentName>(this, &ComponentName::HandlerFunction); // Not serializable
SST::Clock::HandlerBase* new_handler = 
    new SST::Clock::Handler2<ComponentName, &ComponentName::HandlerFunction>(this); // Serializable

// Clock handler with metadata
SST::Clock::HandlerBase* old_handler = 
    new SST::Clock::Handler<ComponentName, uint32_t>(this, &ComponentName::HandlerFunction, 0); // Not serializable
SST::Clock::HandlerBase* new_handler = 
    new SST::Clock::Handler2<ComponentName, &ComponentName::HandlerFunction, uint32_t>(this, 0); // Serializable

// Event handler without metadata
SST::Link::HandlerBase* old_handler = 
    new SST::Event::Handler<ComponentName>(this, &ComponentName::HandlerFunction); // Not serializable
SST::Link::HandlerBase* new_handler = 
    new SST::Event::Handler2<ComponentName, &ComponentName::HandlerFunction>(this); // Serializable

// Event handler with metadata
SST::Event::HandlerBase* old_handler = 
    new SST::Event::Handler<ComponentName, uint32_t>(this, &ComponentName::HandlerFunction, 0); // Not serializable
SST::Event::HandlerBase* new_handler = 
    new SST::Event::Handler2<ComponentName, &ComponentName::HandlerFunction, uint32_t>(this, 0); // Serializable
```

### Step 2: Add a default constructor
During deserialization, SST will call this constructor to create an object before populating its state from the checkpoint. 

### Step 3: Add a serialization function
SST's serializer calls `serialize_order` on elements during both serialization and deserialization. 
Add this function to a public section of your class definition:
```cpp title = "class.h"
public:
    // highlight-start
    void serialize_order(SST::Core::Serialization::serializer& ser) override;
    // highlight-end
```

The function implementation should (1) call the base class's serialize_order if the class is inherited and (2) add *all* class data members that need to be saved to the checkpoint. During checkpoint generation, the serializer is tracking pointers and will correctly regenerate pointers upon restart. Recall that this is *not* true of normal event serialization during synchronization. SST provides two macros, `SST_SER` and `SST_SER_AS_PTR` to add data to the checkpoint. The macros are defined as follows:
```cpp title="Snippet from sst-core/src/sst/core/serialization/serializable.h"
#define SST_SER(x) ser& x;
#define SST_SER_AS_PTR(x) ser| x;
```
The macros have been added as a longer term SST goal is to use this serialization to also provide online debugging capability and the macro allows the serializer to capture the name, address, type, and data associated with the serialized object. For now, the macro is a placeholder and by using it, developers should save themselves some rewriting later to support that debug capability. 

The `SST_SER` (`&`) operator is used most commonly and adds data to the checkpoint (and loads saved data into the provided variable during restart). SST_SER is used for all pointer types and for all non-pointer data where there are no other pointers referencing it.  The `SST_SER_AS_PTR`(`|`) operator works only for non-pointer data and adds both the data to the checkpoint *and* registers a pointer to the data. This operator is only required if the object being serialized is not a pointer and you have a pointer elsewhere to the object that you intend to serialize as well. Using this macro allows a serialized pointer to correctly link itself to the serialized data. Using `SST_SER_AS_PTR` consumes both extra space in the checkpoint and adds a (small) overhead during serialization. Note, that the non-pointer data must serialize before any pointers to the data are serialized, otherwise the deserialized data will not be correct. One use case for `SST_SER_AS_PTR` is when the data is stored in a container (such as a map or set) and there are other pointers to the data.

By way of example:
```cpp
/* Class variables */
// 
SST::Link* link;
SST::Output* output;
SST::TimeConverter* tc;
int count;
std::string name;
std::vector<uint32_t> nums;
std::string pointedToObj;
std::string* pointer = &pointedToObj;

/* Serialization function */
void serialize_order(SST::Core::Serialization::Serializer& ser) override
{
    BaseClass::serialize_order(ser); // Assuming this class has a base class called 'BaseClass'. ALWAYS call the base class's serialize_order function prior to adding data from this class.
    SST_SER(link)
    SST_SER(output)
    SST_SER(tc)
    SST_SER(count)
    SST_SER(name)
    SST_SER(nums)
    SST_SER_AS_PTR(pointedToObj) // Track a pointer to this object
    SST_SER(pointer)
}
```

Many data types are supported natively in SST's serialization libraries. These include:
* POD types
* Pointers to POD types
* `std::vector`, `std::set`, `std::map`, `std::multiset`, `std::priority_queue`
* SST types: `Link`, `TimeConverter`, `Output`, `RNG:Random`, `RNG:RandomDistribution`, `SharedArray`, `SharedMap`, `SharedSet`, `UnitAlgebra` 
    * In the SST-Core repository, as of PR #1098: `Statistic`, `StatisticOutput`
* Handlers: `Clock::Handler2`, `Event::Handler2`

Note that non-polymorphic classes/structs are special cases in the serialization library. Because there is no way to reference the class with a different type, there is no need to inherit from `Serializable` or call the `ImplementSerializable` macro (step 4 below). You may simply add a `serialize_order()` function to the class as listed above and the class will be compatible with the serializer.

### Step 4: Add the appropriate serialization macro
Classes that inherit from `SST::Core::Serialization::serializable` must call the `ImplementSerializable` macro with their class name. Note that the macro should be called from a public section of the class definition.
```cpp
MyClass : public SST::Component
{
public:
    // Class functions
    
    ImplementSerializable(MyClass)
};
```
Pure virtual classes must use `ImplementVirtualSerializable` instead of `ImplementSerializable`.

### Put it together: An example
Here is an example of what this looks like. Note we've removed all but the relevant-to-checkpointing pieces of the class (ELI macros, most class functions, etc.).

```cpp title="example.h"
#ifndef SST_EXAMPLE_CHECKPOINT_HEADER
#define SST_EXAMPLE_CHECKPOINT_HEADER

#include <sst/core/component.h>
#include <sst/core/link.h>
#include <sst/core/rng/marsaglia.h>

namespace SST {
namespace ExampleSSTLibrary {

class example : public SST::Component {
public:
    // ELI macros would be here
    
    // Public class members would be here

    //highlight-start
    // Add default constructor, serialize_order, and serializable macro
    example();
    void serialize_order(SST::Core::Serialization::serializer& ser) override;
    ImplementSerializable(SST::ExampleSSTLibrary::example)
    //highlight-end
private:
    // Private member functions would be here

    // Private data members - to be serialized in serialize_order
    int64_t param0;
    uint32_t param1;
    std::string param2;
    Statistic<uint64_t> stat;
    SST::Output* out;
    std::vector<std::string> stringVec;
    SST::Link* link;
    RNG::Random* rng;
};

} } // End namespaces
#endif
```
```cpp title="example.cc"
// Rest of class defined here

// highlight-start
example::example() : Component() {}

void example::serialize_order(SST::Core::Serialization::serializer& ser) {
    // MUST call parent's serialize_order FIRST
    Component::serialize_order(ser);

    // Now, serialize everything we need to save
    SST_SER(param0)
    SST_SER(param1)
    SST_SER(param2)
    SST_SER(stat)
    SST_SER(out)
    SST_SER(stringVec)
    SST_SER(link)
    SST_SER(rng)
}
//highlight-end

```

## Advanced notes on serialization
While many types are serializable already within SST's serialization engine, complex types may require additional work. 

The serializer has three stages: (1) SIZER, (2) PACK, and (3) UNPACK. The first two comprise serialization (checkpoint) and the third is deserialization (restart). The serializer calls `serialize_order` once during each of these three stages. Thus, if the default serialization does not work for a particular type, a custom serialization can be implemented by querying the serializer's mode in the `serialize_order` function and taking the appropriate action to serialize the type. During `SIZER`, the `serialize_order` should add the size of the data to be serialized using the `&` or `|` operator. During `PACK`, `serialize_order` should add the data to be added to the serialization stream using the `&` or `|` operator. Finally, during `UNPACK`, `serialize_order` should read the serialized data from the stream, again using the `&` or `|` operator. The same operator should be used in all three stages.

As an example, the code snippet below shows how `SST::UnitAlgebra` is serialized. UnitAlgebra has two components, a "unit" struct that contains a numerator (string) and denominator (string) and a "value" object that is a custom type called `decimal_fixedpoint`.

The "unit" struct consists of strings so UnitAlgebra serializes the struct's members using the `&` operator in all three serializer stages (`SIZER`, `PACK`, and `UNPACK`). To serialize `decimal_fixedpoint`, SST converts it to a string, stores the string, and then, on deserialization, re-initializes a new `decimal_fixedpoint` type using the stored string.  

Note that the `SST_SER` macro is only useful for class members - `unit.numerator` and `unit.denominator` in the example below. For temporaries, use the raw (`&` or `|`) serialization operators.
```cpp
    void serialize_order(SST::Core::Serialization::serializer& ser) override
    {
        // Do the unit - these are both strings, no special handling required
        SST_SER(unit.numerator);
        SST_SER(unit.denominator);

        // For value, first convert to a string
        // Then, reinitialize from the string
        switch ( ser.mode() ) {
        case SST::Core::Serialization::serializer::SIZER:
        case SST::Core::Serialization::serializer::PACK:
        {
            std::string s = value.toString(0);
            // The next line will get the size of the string during SIZER
            // and will pack the string into the serialization stream during PACK
            ser&        s; // Could equivalently use SST_SER but not needed since 's' is not a class member
            break;
        }
        case SST::Core::Serialization::serializer::UNPACK:
        {   
            // Extract the serialized string from the stream
            std::string s;
            ser&        s;
            // Reinitialize 'value' using the string
            value = sst_big_num(s);
            break;
        }
        }
    }
    ```
