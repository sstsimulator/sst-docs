---
title: find
---
```cpp
template<class T> // All find functions below are templated on a single parameter, T

/* Find a given key */
T find(const std::string& key) const;

/* Find a given key, return a default value if not found */
T find(const std::string& key, T default_value) const;
T find(const std::string& key, const std::string& default_value) const;

/* Find a given key, also indicate if found */
T find(const std::string& key, bool& found) const;

/* Find a given key, return a default value if not found, also indicate if found */
T find(const std::string& key, T default_value, bool& found) const;
T find(const std::string& key, const std::string& default_value, bool& found) const;

/* Special case for find<bool> to enable conversion of "T"/"F" to bool */
T find(const std::string& key, const char* default_value) const;
T find(const std::string& key, const char* default_value, bool& found) const;
```

Find a key in the Params object and return the corresponding value as template type `T`. If desired, the function can also take a default value to be returned if the key is not found, and a boolean variable to set indicating whether the key was found.

## Parameters
* **key** (std::string) The key to find
* **default_value** (T, std::string, char*) A value to return if the key is not found in the Params object
* **found** (bool) A variable that will be set to True if the key is found or False otherwise
* **returns** (T) The value matching the key, or the default_value if provided and the key is not found


## Example
<!--- SOURCE_CODE: sst-elements/src/sst/elements/simpleElementExample/basicParams.cc --->
```cpp title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/basicParams.cc"
/* 
 * This Component has several parameters which are uncreatively named by their type 
 * (e.g., "bool_param" is a bool)
 */
basicParams::basicParams(ComponentId_t id, Params& params) : Component(id)
{
    out = new Output("", 1, 0, Output::STDOUT);

    //highlight-start
    bool param0 = params.find<bool>("bool_param", false);
    uint32_t param1 = params.find<uint32_t>("uint32_param", 400);
    double param2 = params.find<double>("double_param", 12.5);
    std:;string param3 = params.find>std::string>("string_param", "hello");
    //highlight-end

    out->output("Found basic parameters: bool_param = %d, uint32_param = %" PRIu32 ", double_param = %f, string_param = %s\n",
            param0, param1, param2, param3.c_str());

    // Discover whether a parameter was passed in from the input file or not
    bool found;
    int param4 = params.find<int>("int_param", 0, found);

    if (!found) {
        out->fatal(CALL_INFO, -1, "Uh oh, in '%s', int_param is a required parameter, but it wasn't found in the parameter set.\n",
                getName().c_str());
    } else {
        out->output("Found the required parameter 'int_param' and got %d\n", param4);
    }

    /* More complex types that have constructors which take strings
     * - UnitAlgebra is a class provided by SST
     * - ExampleType is a made up class for this example, see basicParams.h
     */ 
     //highlight-start
    UnitAlgebra param5 = params.find<UnitAlgebra>("ua_param", "2TB/s");
    ExampleType param6 = params.find<ExampleType>("example_param", "key:5");
    //highlight-end

    out->output("Read ua_param = %s\n", param5.toStringBestSI().c_str());
    out->output("Read example_param. key = %s, value = %d\n", param6.key.c_str(), param6.value);
}
```

## Header
The Params header file is included with any SST object that supports Params.
```cpp
#include <sst/core/component.h> // or
#include <sst/core/subcomponent.h> // or
#include <sst/core/componentExtension.h> // or
#include <sst/core/params.h> // if not included in base class
```