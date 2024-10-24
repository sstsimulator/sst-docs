---
title: Shared::SharedMap
---

SharedMap constructs a map of shared elements. The map is replicated globally across SST's ranks and threads. The map can be written during SST's construction and/or init stages and becomes read-only either when all the components that have initialized the map also publish it or when the setup stage begins, whichever is first.

Before the map becomes read-only, components should use caution with functions that are not thread-safe as the map may be modified by other threads concurrently.

## Constructor
```cpp
Shared::SharedMap<keyT,valT>();
```

The template types `keyT` and `valT` must both be a non-pointer types and must be serializable.

## initialize
```cpp
int initialize(const std::string& obj_name, verify_type v_type = FE_VERIFY);
```

Initializes the SharedMap and returns the number of components (on the current rank) that have already initialized the map. 

#### Parameters
* **obj_name** (std::string) The name of the object to initialize.
* **v_type** (verify_type) A conflict resolution policy: INIT_VERIFY, FE_VERIFY (default), or NO_VERIFY. INIT_VERIFY and FE_VERIFY are equivalent for SharedMap.
* **returns** (int) The number of components on the current rank that have already initialized the map.

#### Error conditions
* Components may only call initialize once on each object.
* Components may not initialize the same object with different verify_type arguments.
* Initialize must be called prior to SST's setup stage.


## begin
```cpp
const_iterator begin();
```
Returns a const iterator to the beginning of the map. If called prior to the SharedMap becoming read-only, the returned iterator could become invalid if the map is resized.

#### Parameters
* **returns** (const_iterator) A const iterator to the beginning of the map.


## count
```cpp
size_t count(const keyT& key);
```
Returns the number of map elements with the provided key. Because this is not a multimap, it can return only 0 or 1. Thread-safe.

#### Parameters
* **key** (const keyT) Key to search.
* **returns** (size_t) 1 if `key` matches a key in the map, 0 otherwise.


## empty
```cpp
bool empty();
```
Returns whether map is empty. Thread-safe.

#### Parameters
* **returns** (bool) True if map is empty, false otherwise.


## end
```cpp
const_iterator end();
```
Returns a const iterator to the end of the map. If called prior to the SharedMap becoming read-only, the returned iterator could become invalid if the map is resized.

#### Parameters
* **returns** (const_iterator) A const iterator to the end of the map.


## find
```cpp
const_iterator find(const keyT& key);
```
Searches the map for an element with a key equivalent to `key` and returns a const iterator to it if found. Otherwise, returns `SharedMap::end`. This is not thread-safe.

#### Parameters
* **key** (const keyT) Key to find.
* **returns** (const_iterator) A const iterator to the element in the map or `SharedMap::end` if not found. 


## isFullyPublished
```cpp
bool isFullyPublished();
```
Returns whether every component that has initialized the map has also published it. Note that it is possible for `isFullyPublished()` to return `true` in one phase of init and return `false` in a subsequent phase if a component initializes the map between the calls to `isFullyPublished()` (e.g., during the init stage). 

#### Parameters
* **returns** (bool) True if every component that has initialized the SharedMap has also published it, false otherwise.


## lower_bound
```cpp
const_iterator lower_bound(const keyT& key);
```
Returns an iterator pointing to the first element in the map whose key is not considered to go before `key` (i.e., it is equivalent or goes after).

#### Parameters
* **key** (const keyT) Key to compare to.
* **returns** (const_iterator) A const iterator to the first element whose key is not considered to go before `key`.


## mutex_read
```cpp
const valT& mutex_read(const keyT& key);
```
Returns the value of the specified key. This is thread-safe and can be used prior to the map becoming read-only.

#### Parameters
* **key** (const keyT) Key to read from.
* **returns** (const valT) A const reference to the value of the specified key. 

## operator[]
```cpp
const valT& operator[](const keyT& key);
```
Returns the value of the specified key. This is not thread-safe. Prior to the array becoming read-only, use `mutex_read()` instead. 

#### Parameters
* **key** (const keyT) Key to read from.
* **returns** (const valT) A const reference to the value of the specified key. 

## publish
```cpp
void publish();
```

Changes the state of the SharedMap to read-only for the calling component. A component may not update the map after publishing it.

#### Parameters
* **returns** None.


## rbegin
```cpp
const_reverse_iterator rbegin();
```
Returns a const reverse_iterator to the beginning of the map. If called prior to the SharedMap becoming read-only, the returned iterator could become invalid if the map is resized.

#### Parameters
* **returns** (const_reverse_iterator) A const reverse_iterator to the beginning of the map.


## rend
```cpp
const_reverse_iterator rend();
```
Returns a const reverse_iterator to the end of the map. If called prior to the SharedMap becoming read-only, the returned iterator could become invalid if the map is resized.

#### Parameters
* **returns** (const_reverse_iterator) A const reverse_iterator to the end of map.


## size
```cpp
size_t size();
```
Returns the size of the map. Thread safe.

#### Parameters
* **returns** (size_t) Size of the map.


## upper_bound
```cpp
const_iterator upper_bound(const keyT& key);
```
Returns an iterator to the first element in the map whose key is considered to go after `key`.

#### Parameters
* **key** (const keyT) Key to compare to.
* **returns** (const_iterator) A const iterator to the first element whose key is considered to go after `key`.


## write
```cpp
void write(const keyT& key, const valT& value);
```
Write the key-value pair to the map. This function can be used after calling initialize and prior to calling publish. It is thread-safe.

#### Parameters
* **key** (const keyT) Key to insert.
* **value** (const valT) Value to insert.
* **returns** None


## Header
```cpp
#include <sst/core/shared/sharedMap.h
```