---
title: Shared::SharedArray
---

SharedArray constructs an array of shared elements. The array is replicated globally across SST's ranks and threads. The array can be written during SST's construction and/or init stages and becomes read-only either when all the components that have initialized the array also publish it or when the setup stage begins, whichever is first.

Before the array becomes read-only, components should use caution with functions that are not thread-safe as the array may be modified by other threads concurrently.

## Constructor
```cpp
Shared::SharedArray<T>();
Shared::SharedArray<bool>(); // Special case that uses std::vector<bool> for storage
```

The template type `T` must be a non-pointer type and must be serializable.

## initialize
```cpp
int initialize(const std::string& obj_name, size_t length = 0, T init_value = T(), verify_type v_type = INIT_VERIFY);
```

Initializes the SharedArray and returns the number of components (on the current rank) that have already initialized the array. 

#### Parameters
* **obj_name** (std::string) The name of the object to initialize.
* **length** (size_t) The size of the array. The array will be the maximum size initialized by any component.
* **init_value** (T) A default value to give array elements. If not provided, the default constructor for type `T` is used.
* **v_type** (verify_type) A conflict resolution policy: INIT_VERIFY (default), FE_VERIFY, or NO_VERIFY.
* **returns** (int) The number of components on the current rank that have already initialized the array.

#### Error conditions
* Components may only call initialize once on each object.
* Components may not initialize the same object with different verify_type arguments.
* Initialize must be called prior to SST's setup stage.
* The size of the array will be the maximum of the 'length' parameters provided in the initialize calls. Writing/reading beyond this length is not allowed.


## begin
```cpp
const_iterator begin();
```
Returns a const iterator to the beginning of the array. If called prior to the SharedArray becoming read-only, the returned iterator could become invalid if the array is resized.

#### Parameters
* **returns** (const_iterator) A const iterator to the beginning of the array.


## empty
```cpp
bool empty();
```
Returns whether array is empty. Thread-safe.

#### Parameters
* **returns** (bool) True if array is empty (size == 0), false otherwise.


## end
```cpp
const_iterator end();
```
Returns a const iterator to the end of the array. If called prior to the SharedArray becoming read-only, the returned iterator could become invalid if the array is resized.

#### Parameters
* **returns** (const_iterator) A const iterator to the end of the array.


## isFullyPublished
```cpp
bool isFullyPublished();
```
Returns whether every component that has initialized the array has also published it. Note that it is possible for `isFullyPublished()` to return `true` in one phase of init and return `false` in a subsequent phase if a component initializes the array between the calls to `isFullyPublished()` (e.g., during the init stage). 

#### Parameters
* **returns** (bool) True if every component that has initialized the SharedArray has also published it, false otherwise.


## mutex_read
```cpp
const T& mutex_read(int index);
```
Returns the value at the specified index. This is thread-safe and can be used prior to the array becoming read-only.

#### Parameters
* **index** (int) Index to read from.
* **returns** (const T) A const reference to the value at the specified index. 


## operator[]
```cpp
const T& operator[](int index);
```
Returns the value at the specified index. This is not thread-safe. Prior to the array becoming read-only, use `mutex_read()` instead. 

#### Parameters
* **index** (int) Index to read from.
* **returns** (const T) A const reference to the value at the specified index. 


## publish
```cpp
void publish();
```
Changes the state of the SharedArray to read-only for the calling component. A component may not write the array after publishing it.

#### Parameters
* **returns** None.


## rbegin
```cpp
const_reverse_iterator rbegin();
```
Returns a const reverse_iterator to the beginning of the array. If called prior to the SharedArray becoming read-only, the returned iterator could become invalid if the array is resized.

#### Parameters
* **returns** (const_reverse_iterator) A const reverse_iterator to the beginning of the array.


## rend
```cpp
const_reverse_iterator rend();
```
Returns a const reverse_iterator to the end of the array. If called prior to the SharedArray becoming read-only, the returned iterator could become invalid if the array is resized.

#### Parameters
* **returns** (const_reverse_iterator) A const reverse_iterator to the end of array.


## size
```cpp
size_t size();
```
Returns the size of the array. Thread safe.

#### Parameters
* **returns** (size_t) Size of the array.


## write
```cpp
void write(int index, const T& value);
```
Write `value` to the specified index. This function can be used after calling initialize and prior to calling publish. It is thread-safe.

#### Parameters
* **index** (int) Index to write to.
* **value** (const T) Value to write.
* **returns** None


## Header
```cpp
#include <sst/core/shared/sharedArray.h
```
