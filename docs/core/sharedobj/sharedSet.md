---
title: Shared::SharedSet
---

SharedSet constructs a set of shared elements. The set is replicated globally across SST's ranks and threads. The set can be written during SST's construction and/or init stages and becomes read-only either when all the components that have initialized the set also publish it or when the setup stage begins, whichever is first.

Before the set becomes read-only, components should use caution with functions that are not thread-safe as the set may be modified by other threads concurrently.

## Constructor
```cpp
Shared::SharedSet<T>();
```

The template type `T` must be a non-pointer type and must be serializable.

## initialize
```cpp
int initialize(const std::string& obj_name, verify_type v_type = FE_VERIFY);
```

Initializes the SharedSet and returns the number of components (on the current rank) that have already initialized the set. 

#### Parameters
* **obj_name** (std::string) The name of the object to initialize.
* **v_type** (verify_type) A conflict resolution policy: INIT_VERIFY, FE_VERIFY (default), or NO_VERIFY. INIT_VERIFY and FE_VERIFY are equivalent for SharedSet.
* **returns** (int) The number of components on the current rank that have already initialized the set.

#### Error conditions
* Components may only call initialize once on each object.
* Components may not initialize the same object with different verify_type arguments.
* Initialize must be called prior to SST's setup stage.


## begin
```cpp
const_iterator begin();
```
Returns a const iterator to the beginning of the set. Thread-safe, though using this iterator to iterate the set before it becomes read-only is not safe as new elements may be added concurrently.

#### Parameters
* **returns** (const_iterator) A const iterator to the beginning of the set.


## count
```cpp
size_t count(const T& key);
```
Returns the number of set elements that match key. Because this is not a multiset, it can return only 0 or 1. Thread-safe.

#### Parameters
* **key** (const T) Key to search.
* **returns** (size_t) 1 if `key` matches an element in the set, 0 otherwise.


## empty
```cpp
bool empty();
```
Returns whether set is empty. Thread-safe.

#### Parameters
* **returns** (bool) True if set is empty, false otherwise.


## end
```cpp
const_iterator end();
```

Returns a const iterator to the end of the set. Thread-safe, though using this iterator to iterate the set before it becomes read-only is not safe as new elements may be added concurrently.

#### Parameters
* **returns** (const_iterator) A const iterator to the end of the set.

## find
```cpp
const_iterator find(const T& key);
```
Searches the set for an element equivalent to `key` and returns a const iterator to it if found. Otherwise, returns `SharedSet::end`. This is not thread-safe. Prior to the set becoming read-only, use `mutex_find()` instead. 

#### Parameters
* **key** (const T) Key to find.
* **returns** (const_iterator) A const iterator to the element in the set or `SharedSet::end` if not found. 

## insert
```cpp
void insert(const T& key);
```
Adds `key` to the set. This function can be used after calling initialize and prior to calling publish. It is thread-safe.

#### Parameters
* **key** (const T) Key to add.
* **returns** None

## isFullyPublished
```cpp
bool isFullyPublished();
```
Returns whether every component that has initialized the set has also published it. Note that it is possible for `isFullyPublished()` to return `true` in one phase of init and return `false` in a subsequent phase if a component initializes the set between the calls to `isFullyPublished()` (e.g., during the init stage). 

#### Parameters
* **returns** (bool) True if every component that has initialized the SharedSet has also published it, false otherwise.


## mutex_find
```cpp
const_iterator mutex_find(const T& key);
```
Searches the set for an element equivalent to `key` and returns a const iterator to it if found. Otherwise, returns `SharedSet::end`. This is thread-safe and can be used prior to the set becoming read-only.

#### Parameters
* **index** (const T) Key to find.
* **returns** (const_iterator) A const iterator to the element in the set or `SharedSet::end` if not found.


## publish
```cpp
void publish();
```
Changes the state of the SharedSet to read-only for the calling component. A component may not update the set after publishing it.

#### Parameters
* **returns** None.


## rbegin
```cpp
const_reverse_iterator rbegin();
```
Returns a const reverse_iterator to the beginning of the set. Thread-safe, though using this iterator to iterate the set before it becomes read-only is not safe as new elements may be added concurrently.

#### Parameters
* **returns** (const_reverse_iterator) A const reverse_iterator to the beginning of the set.

## rend
```cpp
const_reverse_iterator rend();
```
Returns a const reverse_iterator to the end of the set. Thread-safe, though using this iterator to iterate the set before it becomes read-only is not safe as new elements may be added concurrently.

#### Parameters
* **returns** (const_reverse_iterator) A const reverse_iterator to the end of set.


## size
```cpp
size_t size();
```
Returns the size of the set. Thread safe.

#### Parameters
* **returns** (size_t) Size of the set.


## Header
```cpp
#include <sst/core/shared/sharedSet.h
```