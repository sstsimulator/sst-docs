---
title: serialize_order
---
```cpp
void serialize_order(SST::Core::Serialization::serializer& ser);
```

See the [serialization framework](../serialization/overview) for more detail.

This function serializes the StatisticFieldsOutput object for checkpoint/restart.

## Parameters
* **ser** (Serializer) The serializer to add data to.
* **returns** None

## Example

```cpp title="Example taken from SST's CSV StatisticOutput "
void serialize_order(SST::Core::Serialization::serializer& ser) override
{
    // Required: serialize base class first
    StatisticFieldsOutput::serialize_order(ser);

    // Serialize all class members
    SST_SER(m_Separator)
    SST_SER(m_FilePath)
    SST_SER(m_outputRank)
    SST_SER(m_outputSimTime)
    SST_SER(m_outputTopHeader)
    SST_SER(m_useCompression)
}
```

## Header
```cpp
#include <sst/core/statapi/statoutput.h
```
