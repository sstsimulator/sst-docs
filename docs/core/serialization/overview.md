---
title: Serialization
---

SST uses serialization in three different contexts during simulation:
1) When transferring `SST::Events` between parallel processes
2) For checkpoint/restart 
3) To map an object's state, for example, for introspection and modification in an interactive console 

SST provides a serialization framework for elements, however elements need to manually specify how they should be serialized. In most cases, this is as simple as adding a special `serialize_order` function and passing each of the class's data members to the `SST_SER` macro as shown.

```cpp
void serialize_order(SST::Core::Serialization::serializer& ser) {
    SST_SER(var0);
    SST_SER(var1);
    SST_SER(var2);
    // ... and so on
}
```

While SST performs serialization slightly differently for each context, a class only needs to implement serialization once to support all three uses.

## When does a class need to be serializable?
Will an object of your class type ever be sent over a Link between Components, either because the class inherits from `SST::Event` or is a data member of an `SST::Event`? You need to support serialization.

Do you want to enable checkpoint/restart of your simulation as a whole? *Every* object that will be checkpointed needs to be serializable.

Do you want to enable introspection and/or modification of your class during simulation via an interactive console? The class needs to be serializable. This is the only case in which you may choose to partially serialize the class. Only serialized data members will be visible during introspection.

If the class is not an `Event`, and you do not intend to support checkpoint or interactive introspection, then it does not need to be serializable.


## How do I make a class serializable?
Provide a function that SST can use to serialize the class. The specifics depend on the class that needs to be serialized.

**Case 1: Your class inherits from an SST element class or other SST type such as Event**
1. Add a default constructor
1. Implement a `serialize_order` function in your class.
1. Add a serialization macro to the class's header.
    * `ImplementSerializable(class_name)`: For classes that are serializable
    * `ImplementVirtualSerializable(class_name)`: For abstract classes that are serializable
    * `NotSerializable(class_name)`: If a class is not serializable, it needs to declare this macro instead of the above. You can then  skip implementing a `serialize_order` function.

**Case 2: Your class is not polymorphic or is declared final**
Using this method, final classes can only be serialized as their final type. To allow serialization using base class pointers, follow the instructions in Case 3.
1. Add a default constructor
1. Implement a `serialize_order` function for your class.

**Case 3: Your class is polymorphic and does not inherit from a serializable class**

In this case you have two options:
* (Recommended) Inherit from `SST::Core::Serialization::Serializable` and follow the steps in "Case 1".
OR
* Implement a default constructor and a `serialize_impl` class templated on your type


## The `serialize_order` function

Many classes can be made serializable by adding a `serialize_order` function. This function serializes and deserializes all data members belonging to the class using a special `SST_SER` macro. The macro accepts data of many types including:
* All POD types (`bool`, `int`, etc.) and `std::string`
* All standard library containers (`std::vector`, `std::map`, `std::array`, etc.)
* Several standard library types: `std::atomic`, `std::pair`, `std::tuple`, `std::unique_ptr`
* SST types: `Link`, `TimeConverter`, `Output`, `RNG:Random`, `RNG:RandomDistribution`, `SharedArray`, `SharedMap`, `SharedSet`, `UnitAlgebra`, `Statistic`, `StatisticOutput`
* SST Handlers: `Clock::Handler2`, `Event::Handler2`
* SST Interfaces: `SimpleNetwork`, `StandardMem`
* Any object type for which you have implemented serialization

The serialize_order function looks like this. If your class inherits from another, it should call that class's `serialize_order` function *before* it serializes its own data.

```cpp 
virtual void serialize_order(SST::Core::Serialization::serializer& ser) override {
    Base::Class:serialize_order(ser);
    SST_SER(data0);
    SST_SER(data1);
    SST_SER(data2);
    SST_SER(data3);
    // ... and so on
}
```

The `SST_SER` macros have the following syntax.
```cpp
SST_SER(variable);
SST_SER(variable, options);
SST_SER_NAME(variable, mapping_name, options);
```
`variable` is required and is the variable being serialized. `options` may be passed if needed as described in the next section. `mapping_name` allows providing a different (e.g., more user-friendly) name than the variable name when mapping the object.

:::warning

Do not change the name of the serializer variable `ser` that is passed to `serialize_order`. The `SST_SER` macro uses it.

:::

#### SerOption
Depending on how a variable is used, you may need to pass options to `SST_SER` to control serialization. Options and when to use them are as follows. Options may be combined with the `|` operator.

*Note: All options are ignored during event serialization*

* **SerOption::as_ptr**
Use this option if you are serializing a non-pointer variable but a pointer to the variable will also be serialized. The non-pointer must be serialized *before* the pointer. 
* **SerOption::as_ptr_elem**
Use this to pass the `as_ptr` option to the contents of a container
* **SerOption::map_read_only**
Prevents the variable's value from being modified when mapping an object.
* **SerOption::no_map**
Indicates that a variable should not be included when mapping the object.

#### When the default serialization does not work 
In many cases, calling `SST_SER` will be sufficient for both serialization and deserialization. However, in some instances, particularly with complex data structures, you may find the default serialization is not sufficient. In these cases, you can handle serialization manually by detecting which *mode* the serializer is in and performing the necessary actions. There are four modes: 
* **SIZER** Determine the size of the buffer to allocate
* **PACK** Serialize the data into the buffer
* **UNPACK** Deserialize the data
* **MAP** Map the object by serializing it 

During event serialization and checkpoint, the serializer will enter SIZER and then PACK mode. During event deserialization and restart, the serializer will enter UNPACK mode. During mapping, the serializer will enter MAP mode. Query the mode using `ser.mode()`.

Ensure that SIZER and PACK are identical. UNPACK should serialize data in the same order as SIZER/PACK.

As an example, this code manages an iterator that needs to be re-initialized for checkpoint/restart.
```cpp

// iter_ starts at neighbors_.begin() and increments each time an event is sent
// events_sent_ counts the total number of sent events
std::set<std::string> neighbors_;
std::set<std::string>::iterator iter_;
size_t events_sent_;

void serialize_order(SST::Core::Serialization::serializer& ser)
{
    SST_SER(events_sent_);
    SST_SER(neighbors_);

    // Re-initialize iter_ if deserializing (UNPACKing)
    if ( ser.mode() == SST::Core::Serialization::serializer::UNPACK) {
        // Move iter forward from neighbors.begin() events_sent_ times
        int index = events_sent_ % neighbors_.size();
        iter_ = neighbors_.begin();
        std::advance(iter_, index);
    }
}
```

## The `serialize_impl` template class
In some cases, implementing a `serialize_order` function may not be ideal or possible -- for example, a polymorphic class that cannot, for whatever reason, inherit from `Serializable`. In this case, you may implement a `serialize_impl` class templated on the type to be serialized. You will need to handle the [`SerOption` options](#seroption) manually in the template class.

An example of using this method will be forthcoming.


## Serialization odds and ends
### Serializing pointers
When serializing events, pointer tracking is NOT enabled. Serializing a pointer will serialize the pointed-to object, creating a copy at the recipient if the receiving component is on different thread or rank.

When serializing for checkpoint or mapping/debug, pointer tracking is enabled. You may serialize pointers and the pointed-to object will be serialized as well. Objects will be serialized once, even if multiple pointers point to them and are serialized. However, ensure that all serialized pointers are either valid or set to `nullptr`.


#### C-style arrays
C-style arrays are a special case of pointers. Serializing the pointer will only serialize the first element in the array. Use SST's array function to pass both the pointer and size (number of elements) to the serializer.
```cpp
// size_t size = 4;
// char* arr = new char[size];

SST_SER(SST::Core::Serialization::array(arr, size));
```

#### Malloc/free versus new/delete
When deserializing, SST uses `new` to allocate objects. If you are using `malloc` and may `free` the object, manually allocate and then serialize/deserialize the object itself (rather than a pointer).

```cpp
// MyStruct* ptr = (MyStruct*) malloc(sizeof(MyStruct));
switch( ser.mode() ) {
    case SST::Core::Serialization::serializer::SIZER:
    case SST::Core::Serialization::serializer::PACK:
    case SST::Core::Serialization::serializer::MAP:
        SST_SER(*ptr);
        break;
    case SST::Core::Serialization::serializer::UNPACK:
        ptr = (MyStruct*)malloc(sizeof(MyStruct));
        SST_SER(*ptr);
        break;
}
```

## See also: [Checkpoint Guide](../../guides/features/checkpoint.mdx).