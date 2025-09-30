---
title: "JSON simulation configuration file"
---

In addition to the SST Python module interface, SST also provides a standard JSON interface for which to build configuration files.  The JSON SST configuration files support all the standard features of a Python configuration file as a set of *name-value* pairs or *arrays* of name-value pairs.  The JSON configuration format contains the following major sections:

* **Program Options**: Configures general simulation options
* **Shared Parameter Sets**: Creates shared parameter sets for use with components/subcomponents
* **Global Statistics**: Enables global statistics and statistics options
* **Components (and subcomponents)**: Creates and parameterizes components and subcomponents
* **Statistics Groups**: Creates and parameterizes groups of statistics
* **Links**: Creates and connects links between component/subcomponent ports


## Value Types

The following types will be utilized to describe the *value* of each potential configuration option.
* **Integer**: describes a standard integer value
* **UnitAlgebra**: describes a value in UnitAlgebra form such as *1GHz* or *1ps*.  See [UnitAlgebra](../../config/unitalgebra/unitalgebra.md)
* **Bool**: describes a boolean value as either *True* or *False*
* **String**: describes a value as a string
* **Type**: describes the values for parameter names that can be any of the aforementioned types

## Ordering Constraints

The JSON reader streams objects and arrays iteratively in order of their discovery.  As a result, there are number of ordering constraints that must be adhered to in order to successfully parse and create the SST configuration graph from JSON.  We denote the ordering constraints as follows:
* `statistics_group` must appear *after* `components`.  The `statistics_group` reference component objects that must be present in the SST config graph
* For each `component` or `subcomponent` object, the `name` and `type` values must appear before any other values.  This ensures that the parser can create the component or subcomponet objects before adding parameters or statistics values to the resident config graph object.

## JSON Configuration Format

```json
{
  // Program Options
  "program_options" : {
    "verbose": "Integer",
    "stop-at": "UnitAlgebra",
    "print-timing-info": "Bool",
    "heartbeat-sim-period": "UnitAlgebra",
    "heartbeat-wall-period": "UnitAlgebra",
    "timebase": "UnitAlgebra",
    "partitioner": "String",
    "timeVortex": "String",
    "interthread-links": "Bool",
    "output-prefix-core": "String",
    "checkpoint-sim-period": "UnitAlgebra",
    "checkpoint-wall-period": "UnitAlgebra"
  },
  
  // Shared Parameter Sets
  "shared_params": [
    "shared_name": {
      "param1": "Type",
      "param2": "Type",
      ...
    }
  ],
  
  // Global Statistics
  "statistics_options": {
    "statisticLoadLevel": Integer,
    "statisticOutput": "String",
    "params": {
      "outputrank": "Bool",
      "outputsimtime": "Bool",
      "paramN": "Type",
      ...
    }
  },
  
  // Components
  "components" : [
    {
      // first defined component
      "name": "String",
      "type": "String",    // this is the fully qualified component name
      "params": {
        "param1": "Type",
        "param2": "Type",
        ...
      },
      "subcomponents": [
        {
          "slot_name": "String",
          "slot_number": Integer,
          "type": "String"   // this is the fully qualified subcomponent slot type
        }
      ],
      "partition": {
        "rank": Integer,
        "thread": Integer
      }
    },
    {
      // second defined component
      "name": "String",
      "type": "String",    // this is the fully qualified component name
      "params": {
        "param1": "Type",
        "param2": "Type",
        ...
      },
      "subcomponents": [
        {
          "slot_name": "String",
          "slot_number": Integer,
          "type": "String",  // this is the fully qualified subcomponent slot type
          "subcomponents": [      // this name-value pair array represent sub-sub-components
            {
              "slot_name": "String",
              "slot_number": Integer,
              "type": "String"  // this is the fully qualified subcomponent slot type
            }
          ]
        }
      ],
      "partition": {
        "rank": Integer,
        "thread": Integer
      }
    }
  ],
 
 // Statistics Groups
  "statistics_group": [
    {
      "name": "String",
      "frequency": "UnitAlgebra",
      "output": {
        "type": "String",    // this is the fully qualified simulation output type, eg "sst.statOutputConsole"
        "params": {
          "param1": "Type",
          "param2": "Type",
          ...
        }
      },
      "statistics": [
        {
          "name": "String",
          "params": {
            "resetOnOutput": "Bool",
            "type": "String"                    // this is the fully qualified statistic type, eg "sst.AccumulatorStatistic"
          }
        }
      ],
      "components": [   // contains a list of components for which the enclosing stat group applies
        "component0",
        "component1",
        ....
      ]
    },
  ],

  // Links
  "links": [
    {
      "name": "String",
      "noCut: Bool,
      // left hand side of the link object
      "left": {
        "component": "String",
        "port": "String",
        "latency": "UnitAlgebra"
      },
      // right hand side of the link object
      "right": {
        "component": "String",
        "port": "string",
        "latency": "UnitAlgebra"
      }
    }
  ]
}
```

## JSON Configuration Example 1

*This example is based on sst-core/tests/test_Links.py*

```json
{
  "program_options": {
    "verbose": "0",
    "stop-at": "0ns",
    "print-timing-info": "false",
    "timing-info-json": "",
    "heartbeat-sim-period": "",
    "heartbeat-wall-period": "0",
    "timebase": "1ps",
    "partitioner": "sst.single",
    "timeVortex": "sst.timevortex.priority_queue",
    "interthread-links": "false",
    "output-prefix-core": "@x SST Core: ",
    "checkpoint-sim-period": "",
    "checkpoint-wall-period": "0"
  },
  "statistics_options": {
    "statisticOutput": "sst.statOutputConsole"
  },
  "components": [
    {
      "name": "c1",
      "type": "coreTestElement.coreTestLinks",
      "params": {
        "id": "0",
        "link_time_base": "1 ns"
      }
    },
    {
      "name": "c0_1",
      "type": "coreTestElement.coreTestLinks",
      "params": {
        "id": "1",
        "link_time_base": "2 ns",
        "added_send_latency": "10 ns"
      }
    },
    {
      "name": "c1_0",
      "type": "coreTestElement.coreTestLinks",
      "params": {
        "id": "2",
        "link_time_base": "3 ns",
        "added_recv_latency": "15 ns"
      }
    },
    {
      "name": "c1_1",
      "type": "coreTestElement.coreTestLinks",
      "params": {
        "id": "3",
        "link_time_base": "4 ns",
        "added_send_latency": "20 ns",
        "added_recv_latency": "25 ns"
      }
    }
  ],
  "links": [
    {
      "name": "link_0",
      "left": {
        "component": "c1",
        "port": "Wlink",
        "latency": "2 ns"
      },
      "right": {
        "component": "c1",
        "port": "Wlink",
        "latency": "2 ns"
      }
    },
    {
      "name": "link_0_1",
      "left": {
        "component": "c1",
        "port": "Elink",
        "latency": "4 ns"
      },
      "right": {
        "component": "c0_1",
        "port": "Wlink",
        "latency": "4 ns"
      }
    },
    {
      "name": "link_1_1",
      "left": {
        "component": "c0_1",
        "port": "Elink",
        "latency": "8 ns"
      },
      "right": {
        "component": "c1_0",
        "port": "Wlink",
        "latency": "8 ns"
      }
    },
    {
      "name": "link_2_3",
      "left": {
        "component": "c1_0",
        "port": "Elink",
        "latency": "12 ns"
      },
      "right": {
        "component": "c1_1",
        "port": "Wlink",
        "latency": "12 ns"
      }
    },
    {
      "name": "link_3",
      "left": {
        "component": "c1_1",
        "port": "Elink",
        "latency": "16 ns"
      },
      "right": {
        "component": "c1_1",
        "port": "Elink",
        "latency": "16 ns"
      }
    }
  ]
}
```

## JSON Configuration Example 2

*This example is based on sst-core/tests/test_StatisticsComponent_basic.py*

```json
{
  "program_options": {
    "verbose": "0",
    "stop-at": "0ns",
    "print-timing-info": "false",
    "timing-info-json": "",
    "heartbeat-sim-period": "",
    "heartbeat-wall-period": "0",
    "timebase": "1ps",
    "partitioner": "sst.single",
    "timeVortex": "sst.timevortex.priority_queue",
    "interthread-links": "false",
    "output-prefix-core": "@x SST Core: ",
    "checkpoint-sim-period": "",
    "checkpoint-wall-period": "0"
  },
  "statistics_options": {
    "statisticLoadLevel": 2,
    "statisticOutput": "sst.statOutputConsole",
    "params": {
      "outputrank": "False",
      "outputsimtime": "True"
    }
  },
  "components": [
    {
      "name": "StatGlobal0",
      "type": "coreTestElement.StatisticsComponent.int",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1440",
        "seed_z": "1046",
        "register_dynamic": "20"
      }
    },
    {
      "name": "StatGlobal1",
      "type": "coreTestElement.StatisticsComponent.int",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1441",
        "seed_z": "1047"
      }
    },
    {
      "name": "StatBasic0",
      "type": "coreTestElement.StatisticsComponent.int",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1447",
        "seed_z": "1053",
        "register_dynamic": "30"
      },
      "statistics": [
        {
          "name": "stat1_U32",
          "params": {
            "rate": "5 ns",
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat2_U64",
          "params": {
            "rate": "10 ns",
            "resetOnOutput": "True",
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat3_I32",
          "params": {
            "rate": "7 ns",
            "startat": "25 ns",
            "stopat": "60 ns",
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat4_I64",
          "params": {
            "rate": "12 ns",
            "resetOnOutput": "True",
            "startat": "35 ns",
            "stopat": "70 ns",
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat5_dyn",
          "params": {
            "rate": "16 ns",
            "type": "sst.AccumulatorStatistic"
          }
        }
      ]
    },
    {
      "name": "StatBasic1",
      "type": "coreTestElement.StatisticsComponent.int",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1448",
        "seed_z": "1054"
      },
      "statistics": [
        {
          "name": "stat1_U32",
          "params": {
            "rate": "6 event",
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat2_U64",
          "params": {
            "rate": "11 events",
            "resetOnOutput": "True",
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat3_I32",
          "params": {
            "rate": "8 events",
            "startat": "25 ns",
            "stopat": "60 ns",
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat4_I64",
          "params": {
            "rate": "14 events",
            "resetOnOutput": "True",
            "startat": "35 ns",
            "stopat": "70 ns",
            "type": "sst.AccumulatorStatistic"
          }
        }
      ]
    },
    {
      "name": "StatBasic2",
      "type": "coreTestElement.StatisticsComponent.int",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1449",
        "seed_z": "1055"
      },
      "statistics": [
        {
          "name": "stat1_U32",
          "params": {
            "rate": "20 ns",
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat2_U64",
          "params": {
            "rate": "16 ns",
            "resetOnOutput": "True",
            "startat": "25 ns",
            "stopat": "60 ns",
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat3_I32",
          "params": {
            "rate": "20 ns",
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat4_I64",
          "params": {
            "rate": "16 ns",
            "resetOnOutput": "True",
            "startat": "25 ns",
            "stopat": "60 ns",
            "type": "sst.AccumulatorStatistic"
          }
        }
      ]
    },
    {
      "name": "StatBasic3",
      "type": "coreTestElement.StatisticsComponent.int",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1450",
        "seed_z": "1056"
      },
      "statistics": [
        {
          "name": "stat1_U32",
          "params": {
            "rate": "9 events",
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat2_U64",
          "params": {
            "rate": "13 events",
            "resetOnOutput": "True",
            "startat": "25 ns",
            "stopat": "60 ns",
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat3_I32",
          "params": {
            "rate": "9 events",
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat4_I64",
          "params": {
            "rate": "13 events",
            "resetOnOutput": "True",
            "startat": "25 ns",
            "stopat": "60 ns",
            "type": "sst.AccumulatorStatistic"
          }
        }
      ]
    },
    {
      "name": "StatBasic4",
      "type": "coreTestElement.StatisticsComponent.int",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1451",
        "seed_z": "1057"
      },
      "statistics": [
        {
          "name": "stat1_U32",
          "params": {
            "rate": "5 ns",
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat2_U64",
          "params": {
            "rate": "10 ns",
            "resetOnOutput": "True",
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat3_I32",
          "params": {
            "rate": "7 ns",
            "startat": "25 ns",
            "stopat": "60 ns",
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat4_I64",
          "params": {
            "rate": "12 ns",
            "resetOnOutput": "True",
            "startat": "35 ns",
            "stopat": "70 ns",
            "type": "sst.AccumulatorStatistic"
          }
        }
      ]
    },
    {
      "name": "StatBasic5",
      "type": "coreTestElement.StatisticsComponent.int",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1452",
        "seed_z": "1058"
      },
      "statistics": [
        {
          "name": "stat1_U32",
          "params": {
            "rate": "6 event",
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat2_U64",
          "params": {
            "rate": "11 events",
            "resetOnOutput": "True",
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat3_I32",
          "params": {
            "rate": "8 events",
            "startat": "25 ns",
            "stopat": "60 ns",
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat4_I64",
          "params": {
            "rate": "14 events",
            "resetOnOutput": "True",
            "startat": "35 ns",
            "stopat": "70 ns",
            "type": "sst.AccumulatorStatistic"
          }
        }
      ]
    },
    {
      "name": "StatBasic6",
      "type": "coreTestElement.StatisticsComponent.int",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1453",
        "seed_z": "1059"
      },
      "statistics": [
        {
          "name": "stat1_U32",
          "params": {
            "rate": "20 ns",
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat2_U64",
          "params": {
            "rate": "16 ns",
            "resetOnOutput": "True",
            "startat": "25 ns",
            "stopat": "60 ns",
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat3_I32",
          "params": {
            "rate": "20 ns",
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat4_I64",
          "params": {
            "rate": "16 ns",
            "resetOnOutput": "True",
            "startat": "25 ns",
            "stopat": "60 ns",
            "type": "sst.AccumulatorStatistic"
          }
        }
      ]
    },
    {
      "name": "StatBasic7",
      "type": "coreTestElement.StatisticsComponent.int",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1454",
        "seed_z": "1060"
      },
      "statistics": [
        {
          "name": "stat1_U32",
          "params": {
            "rate": "9 events",
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat2_U64",
          "params": {
            "rate": "13 events",
            "resetOnOutput": "True",
            "startat": "25 ns",
            "stopat": "60 ns",
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat3_I32",
          "params": {
            "rate": "9 events",
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat4_I64",
          "params": {
            "rate": "13 events",
            "resetOnOutput": "True",
            "startat": "25 ns",
            "stopat": "60 ns",
            "type": "sst.AccumulatorStatistic"
          }
        }
      ]
    },
    {
      "name": "StatBasic8",
      "type": "coreTestElement.StatisticsComponent.int",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1455",
        "seed_z": "1061"
      }
    },
    {
      "name": "StatBasic9",
      "type": "coreTestElement.StatisticsComponent.int",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1456",
        "seed_z": "1062"
      }
    },
    {
      "name": "StatBasic10",
      "type": "coreTestElement.StatisticsComponent.int",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1457",
        "seed_z": "1063"
      }
    },
    {
      "name": "StatType0",
      "type": "coreTestElement.StatisticsComponent.float",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1457",
        "seed_z": "1063"
      }
    },
    {
      "name": "StatType1",
      "type": "coreTestElement.StatisticsComponent.float",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1457",
        "seed_z": "1063"
      }
    },
    {
      "name": "StatType2",
      "type": "coreTestElement.StatisticsComponent.float",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1457",
        "seed_z": "1063"
      }
    },
    {
      "name": "StatObjComp0",
      "type": "coreTestElement.StatisticsComponent.float",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1458",
        "seed_z": "1064"
      },
      "statistics": [
        {
          "name": "statObj0_statobj0",
          "params": {
            "rate": "17ns",
            "type": "sst.AccumulatorStatistic"
          }
        }
      ]
    },
    {
      "name": "StatObjComp1",
      "type": "coreTestElement.StatisticsComponent.float",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1459",
        "seed_z": "1065"
      },
      "statistics": [
        {
          "name": "statObj1_statobj1",
          "params": {
            "rate": "17ns",
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "statObj1_statobj1",
          "params": {
            "rate": "17ns",
            "type": "sst.AccumulatorStatistic"
          }
        }
      ]
    },
    {
      "name": "StatGroupObj0",
      "type": "coreTestElement.StatisticsComponent.int",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1460",
        "seed_z": "1066"
      },
      "statistics": [
        {
          "name": "stat1_U32",
          "params": {
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat2_U64",
          "params": {
            "resetOnOutput": "True",
            "type": "sst.AccumulatorStatistic"
          }
        }
      ]
    },
    {
      "name": "StatGroupObj1",
      "type": "coreTestElement.StatisticsComponent.int",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1461",
        "seed_z": "1067"
      },
      "statistics": [
        {
          "name": "stat1_U32",
          "params": {
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat2_U64",
          "params": {
            "resetOnOutput": "True",
            "type": "sst.AccumulatorStatistic"
          }
        }
      ]
    },
    {
      "name": "StatGroupObj2",
      "type": "coreTestElement.StatisticsComponent.int",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1462",
        "seed_z": "1068"
      },
      "statistics": [
        {
          "name": "stat1_U32",
          "params": {
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat2_U64",
          "params": {
            "resetOnOutput": "True",
            "type": "sst.AccumulatorStatistic"
          }
        }
      ]
    },
    {
      "name": "StatGroupObj3",
      "type": "coreTestElement.StatisticsComponent.int",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1463",
        "seed_z": "1069"
      },
      "statistics": [
        {
          "name": "stat1_U32",
          "params": {
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat2_U64",
          "params": {
            "resetOnOutput": "True",
            "type": "sst.AccumulatorStatistic"
          }
        }
      ]
    },
    {
      "name": "StatGroupObj4",
      "type": "coreTestElement.StatisticsComponent.int",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1464",
        "seed_z": "1070"
      },
      "statistics": [
        {
          "name": "stat1_U32",
          "params": {
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat2_U64",
          "params": {
            "resetOnOutput": "True",
            "type": "sst.AccumulatorStatistic"
          }
        }
      ]
    },
    {
      "name": "StatGroupObj5",
      "type": "coreTestElement.StatisticsComponent.int",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1466",
        "seed_z": "1071"
      },
      "statistics": [
        {
          "name": "stat1_U32",
          "params": {
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat2_U64",
          "params": {
            "resetOnOutput": "True",
            "type": "sst.AccumulatorStatistic"
          }
        }
      ]
    },
    {
      "name": "StatGroupObj6",
      "type": "coreTestElement.StatisticsComponent.int",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1466",
        "seed_z": "1072"
      },
      "statistics": [
        {
          "name": "stat1_U32",
          "params": {
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat2_U64",
          "params": {
            "resetOnOutput": "True",
            "type": "sst.AccumulatorStatistic"
          }
        }
      ]
    },
    {
      "name": "StatGroupObj7",
      "type": "coreTestElement.StatisticsComponent.int",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1467",
        "seed_z": "1073"
      },
      "statistics": [
        {
          "name": "stat1_U32",
          "params": {
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat2_U64",
          "params": {
            "resetOnOutput": "True",
            "type": "sst.AccumulatorStatistic"
          }
        }
      ]
    },
    {
      "name": "StatGroupObj8",
      "type": "coreTestElement.StatisticsComponent.int",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1468",
        "seed_z": "1074"
      },
      "statistics": [
        {
          "name": "stat1_U32",
          "params": {
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat2_U64",
          "params": {
            "resetOnOutput": "True",
            "type": "sst.AccumulatorStatistic"
          }
        }
      ]
    },
    {
      "name": "StatGroupObj9",
      "type": "coreTestElement.StatisticsComponent.float",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1469",
        "seed_z": "1075"
      },
      "statistics": [
        {
          "name": "stat1_F32",
          "params": {
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat2_F64",
          "params": {
            "resetOnOutput": "True",
            "type": "sst.AccumulatorStatistic"
          }
        }
      ]
    },
    {
      "name": "StatGroupObj10",
      "type": "coreTestElement.StatisticsComponent.float",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1470",
        "seed_z": "1076"
      },
      "statistics": [
        {
          "name": "stat1_F32",
          "params": {
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat2_F64",
          "params": {
            "resetOnOutput": "True",
            "type": "sst.AccumulatorStatistic"
          }
        }
      ]
    },
    {
      "name": "StatGroupObj11",
      "type": "coreTestElement.StatisticsComponent.float",
      "params": {
        "rng": "marsaglia",
        "count": "101",
        "seed_w": "1471",
        "seed_z": "1077"
      },
      "statistics": [
        {
          "name": "stat1_F32",
          "params": {
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat2_F64",
          "params": {
            "resetOnOutput": "True",
            "type": "sst.AccumulatorStatistic"
          }
        }
      ]
    }
  ],
  "statistics_group": [
    {
      "name": "StatGroup0",
      "frequency": "19 ns",
      "output": {
        "type": "sst.statOutputConsole",
        "params": {
          "outputrank": "False",
          "outputsimtime": "True"
        }
      },
      "statistics": [
        {
          "name": "stat1_U32",
          "params": {
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat2_U64",
          "params": {
            "resetOnOutput": "True",
            "type": "sst.AccumulatorStatistic"
          }
        }
      ],
      "components": [
        "StatGroupObj0",
        "StatGroupObj1",
        "StatGroupObj2"
      ]
    },
    {
      "name": "StatGroup1",
      "frequency": "23 ns",
      "output": {
        "type": "sst.statOutputCSV",
        "params": {
          "outputrank": "0",
          "filepath": "test_StatisticsComponent_basic_group_stats.csv",
          "separator": ", "
        }
      },
      "statistics": [
        {
          "name": "stat1_U32",
          "params": {
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat2_U64",
          "params": {
            "resetOnOutput": "True",
            "type": "sst.AccumulatorStatistic"
          }
        }
      ],
      "components": [
        "StatGroupObj3",
        "StatGroupObj4",
        "StatGroupObj5"
      ]
    },
    {
      "name": "StatGroup2",
      "frequency": "27 ns",
      "output": {
        "type": "sst.statOutputTXT",
        "params": {
          "outputrank": "0",
          "filepath": "test_StatisticsComponent_basic_group_stats.txt"
        }
      },
      "statistics": [
        {
          "name": "stat1_U32",
          "params": {
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat2_U64",
          "params": {
            "resetOnOutput": "True",
            "type": "sst.AccumulatorStatistic"
          }
        }
      ],
      "components": [
        "StatGroupObj6",
        "StatGroupObj7",
        "StatGroupObj8"
      ]
    },
    {
      "name": "StatGroup3",
      "frequency": "29 ns",
      "output": {
        "type": "sst.statOutputTXT",
        "params": {
          "outputrank": "0",
          "filepath": "test_StatisticsComponent_basic_group_stats.txt"
        }
      },
      "statistics": [
        {
          "name": "stat1_F32",
          "params": {
            "type": "sst.AccumulatorStatistic"
          }
        },
        {
          "name": "stat2_F64",
          "params": {
            "resetOnOutput": "True",
            "type": "sst.AccumulatorStatistic"
          }
        }
      ],
      "components": [
        "StatGroupObj9",
        "StatGroupObj10",
        "StatGroupObj11"
      ]
    }
  ],
  "links": null
}
```