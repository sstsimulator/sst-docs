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

## Generating JSON Configuration Files

SST can output its configuration graph as a JSON file from any Python configuration script using the `--output-json` option. This is useful for inspecting the configuration, reproducing runs without the Python interpreter, or loading configurations in parallel. The `--run-mode=init` option can be used in conjunction to build the configuration graph and write the JSON file without executing the simulation. This is optional, but may result in faster JSON file generation.

All of the examples below assume you have first changed to the SST core tests directory:

```bash
cd path/to/sst-core/tests/
```

### Single Rank Examples

#### test_Links.py

Generate a JSON configuration file from `test_Links.py`:

```bash
sst --output-json=test_Links.json --run-mode=init test_Links.py
```

Run the simulation using the generated JSON file:

```bash
sst test_Links.json
```

The generated `test_Links.json` corresponds to [JSON Configuration Example 1](#json-configuration-example-1) below.

#### test_StatisticsComponent_basic.py

Generate a JSON configuration file from `test_StatisticsComponent_basic.py`:

```bash
sst --output-json=test_StatisticsComponent_basic.json --run-mode=init test_StatisticsComponent_basic.py
```

Run the simulation using the generated JSON file:

```bash
sst test_StatisticsComponent_basic.json
```

The generated `test_StatisticsComponent_basic.json` corresponds to [JSON Configuration Example 2](#json-configuration-example-2) below.

### Multi-Rank Examples

#### test_ParallelLoad.py

For simulations that use multiple MPI ranks, JSON files can be generated using `mpirun` with the `--parallel-load=SINGLE` option. This ensures all ranks process the same Python configuration file and the resulting JSON captures the full partitioned configuration graph.

When using `--parallel-output`, each MPI rank will generate its own JSON file with a rank number suffix (e.g., `test_ParallelLoad0.json`, `test_ParallelLoad1.json`). Each file contains only the components and links assigned to that specific rank.

Generate JSON configuration files with 2 MPI ranks:

```bash
mpirun -np 2 sst --parallel-load=SINGLE --parallel-output --output-json=test_ParallelLoad.json --run-mode=init test_ParallelLoad.py
```

This will create two files:
- `test_ParallelLoad0.json` - Contains components assigned to rank 0 (see [JSON Configuration Example 3](#json-configuration-example-3))
- `test_ParallelLoad1.json` - Contains components assigned to rank 1 (see [JSON Configuration Example 4](#json-configuration-example-4))

Run the simulation using the generated JSON files with 2 MPI ranks:

```bash
mpirun -np 2 sst --parallel-load test_ParallelLoad.json
```

Note: When loading in parallel, SST will automatically append the rank number to find the correct JSON file for each rank.

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
"program_options":{
  "verbose": "0",
  "stop-at": "0ns",
  "print-timing-info": "0",
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
"statistics_options":{
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
"statistics_group": null,
"links": [
{
  "name": "link_0",
  "noCut": false,
  "nonlocal": false,
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
  "noCut": false,
  "nonlocal": false,
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
  "noCut": false,
  "nonlocal": false,
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
  "noCut": false,
  "nonlocal": false,
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
  "noCut": false,
  "nonlocal": false,
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
    "print-timing-info": "0",
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

## JSON Configuration Example 3

*This example shows the JSON configuration file generated for rank 0 from sst-core/tests/test_ParallelLoad.py using 2 MPI ranks*

```json
{
"program_options":{
  "verbose": "0",
  "stop-at": "10us",
  "print-timing-info": "0",
  "timing-info-json": "",
  "heartbeat-sim-period": "",
  "heartbeat-wall-period": "0",
  "timebase": "1ps",
  "partitioner": "sst.self",
  "timeVortex": "sst.timevortex.priority_queue",
  "interthread-links": "false",
  "output-prefix-core": "@x SST Core: ",
  "checkpoint-sim-period": "",
  "checkpoint-wall-period": "0"
},
"statistics_options":{
  "statisticOutput": "sst.statOutputConsole"
},
"components": [
{
  "name": "comp_x0_y0",
  "type": "coreTestElement.message_mesh.enclosing_component",
  "params": {
    "id": "0"
  },
  "subcomponents": [
    {
      "slot_name": "route",
      "slot_number": 0,
      "type": "coreTestElement.message_mesh.route_message"
    },
    {
      "slot_name": "ports",
      "slot_number": 0,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 1,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 2,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 3,
      "type": "coreTestElement.message_mesh.message_port"
    }
  ],
  "partition": {
    "rank": 0,
    "thread": 0
  }
},
{
  "name": "comp_x0_y1",
  "type": "coreTestElement.message_mesh.enclosing_component",
  "params": {
    "id": "8"
  },
  "subcomponents": [
    {
      "slot_name": "route",
      "slot_number": 0,
      "type": "coreTestElement.message_mesh.route_message"
    },
    {
      "slot_name": "ports",
      "slot_number": 0,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 1,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 2,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 3,
      "type": "coreTestElement.message_mesh.message_port"
    }
  ],
  "partition": {
    "rank": 0,
    "thread": 0
  }
},
{
  "name": "comp_x1_y0",
  "type": "coreTestElement.message_mesh.enclosing_component",
  "params": {
    "id": "1"
  },
  "subcomponents": [
    {
      "slot_name": "route",
      "slot_number": 0,
      "type": "coreTestElement.message_mesh.route_message"
    },
    {
      "slot_name": "ports",
      "slot_number": 0,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 1,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 2,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 3,
      "type": "coreTestElement.message_mesh.message_port"
    }
  ],
  "partition": {
    "rank": 0,
    "thread": 0
  }
},
{
  "name": "comp_x1_y1",
  "type": "coreTestElement.message_mesh.enclosing_component",
  "params": {
    "id": "9"
  },
  "subcomponents": [
    {
      "slot_name": "route",
      "slot_number": 0,
      "type": "coreTestElement.message_mesh.route_message"
    },
    {
      "slot_name": "ports",
      "slot_number": 0,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 1,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 2,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 3,
      "type": "coreTestElement.message_mesh.message_port"
    }
  ],
  "partition": {
    "rank": 0,
    "thread": 0
  }
},
{
  "name": "comp_x2_y0",
  "type": "coreTestElement.message_mesh.enclosing_component",
  "params": {
    "id": "2"
  },
  "subcomponents": [
    {
      "slot_name": "route",
      "slot_number": 0,
      "type": "coreTestElement.message_mesh.route_message"
    },
    {
      "slot_name": "ports",
      "slot_number": 0,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 1,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 2,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 3,
      "type": "coreTestElement.message_mesh.message_port"
    }
  ],
  "partition": {
    "rank": 0,
    "thread": 0
  }
},
{
  "name": "comp_x2_y1",
  "type": "coreTestElement.message_mesh.enclosing_component",
  "params": {
    "id": "10"
  },
  "subcomponents": [
    {
      "slot_name": "route",
      "slot_number": 0,
      "type": "coreTestElement.message_mesh.route_message"
    },
    {
      "slot_name": "ports",
      "slot_number": 0,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 1,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 2,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 3,
      "type": "coreTestElement.message_mesh.message_port"
    }
  ],
  "partition": {
    "rank": 0,
    "thread": 0
  }
},
{
  "name": "comp_x3_y0",
  "type": "coreTestElement.message_mesh.enclosing_component",
  "params": {
    "id": "3"
  },
  "subcomponents": [
  ],
  "partition": {
    "rank": 0,
    "thread": 0
  }
},
{
  "name": "comp_x3_y1",
  "type": "coreTestElement.message_mesh.enclosing_component",
  "params": {
    "id": "11"
  },
  "subcomponents": [
  ],
  "partition": {
    "rank": 0,
    "thread": 0
  }
}
],
"statistics_group": null,
"links": [
{
  "name": "link_x0y0_x1y0",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x0_y0",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x1_y0",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x7y0_x0y0",
  "noCut": false,
  "nonlocal": true,
  "left": {
    "component": "comp_x7_y0",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x0_y0",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x0y0_x0y1",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x0_y0",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x0_y1",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x0y1_x0y0",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x0_y1",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x0_y0",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x0y1_x1y1",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x0_y1",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x1_y1",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x7y1_x0y1",
  "noCut": false,
  "nonlocal": true,
  "left": {
    "component": "comp_x7_y1",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x0_y1",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x1y0_x2y0",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x1_y0",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x2_y0",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x1y0_x1y1",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x1_y0",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x1_y1",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x1y1_x1y0",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x1_y1",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x1_y0",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x1y1_x2y1",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x1_y1",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x2_y1",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x2y0_x3y0",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x2_y0",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x3_y0",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x2y0_x2y1",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x2_y0",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x2_y1",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x2y1_x2y0",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x2_y1",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x2_y0",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x2y1_x3y1",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x2_y1",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x3_y1",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x3y0_x4y0",
  "noCut": false,
  "nonlocal": true,
  "left": {
    "component": "comp_x3_y0",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x4_y0",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x3y0_x3y1",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x3_y0",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x3_y1",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x3y1_x3y0",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x3_y1",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x3_y0",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x3y1_x4y1",
  "noCut": false,
  "nonlocal": true,
  "left": {
    "component": "comp_x3_y1",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x4_y1",
    "port": "port0",
    "latency": "1 ns"
  }
}
]
}
```

## JSON Configuration Example 4

*This example shows the JSON configuration file generated for rank 1 from sst-core/tests/test_ParallelLoad.py using 2 MPI ranks*

```json
{
"program_options":{
  "verbose": "0",
  "stop-at": "10us",
  "print-timing-info": "0",
  "timing-info-json": "",
  "heartbeat-sim-period": "",
  "heartbeat-wall-period": "0",
  "timebase": "1ps",
  "partitioner": "sst.self",
  "timeVortex": "sst.timevortex.priority_queue",
  "interthread-links": "false",
  "output-prefix-core": "@x SST Core: ",
  "checkpoint-sim-period": "",
  "checkpoint-wall-period": "0"
},
"statistics_options":{
  "statisticOutput": "sst.statOutputConsole"
},
"components": [
{
  "name": "comp_x4_y0",
  "type": "coreTestElement.message_mesh.enclosing_component",
  "params": {
    "id": "4"
  },
  "subcomponents": [
    {
      "slot_name": "route",
      "slot_number": 0,
      "type": "coreTestElement.message_mesh.route_message"
    },
    {
      "slot_name": "ports",
      "slot_number": 0,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 1,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 2,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 3,
      "type": "coreTestElement.message_mesh.message_port"
    }
  ],
  "partition": {
    "rank": 1,
    "thread": 0
  }
},
{
  "name": "comp_x4_y1",
  "type": "coreTestElement.message_mesh.enclosing_component",
  "params": {
    "id": "12"
  },
  "subcomponents": [
    {
      "slot_name": "route",
      "slot_number": 0,
      "type": "coreTestElement.message_mesh.route_message"
    },
    {
      "slot_name": "ports",
      "slot_number": 0,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 1,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 2,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 3,
      "type": "coreTestElement.message_mesh.message_port"
    }
  ],
  "partition": {
    "rank": 1,
    "thread": 0
  }
},
{
  "name": "comp_x5_y0",
  "type": "coreTestElement.message_mesh.enclosing_component",
  "params": {
    "id": "5"
  },
  "subcomponents": [
    {
      "slot_name": "route",
      "slot_number": 0,
      "type": "coreTestElement.message_mesh.route_message"
    },
    {
      "slot_name": "ports",
      "slot_number": 0,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 1,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 2,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 3,
      "type": "coreTestElement.message_mesh.message_port"
    }
  ],
  "partition": {
    "rank": 1,
    "thread": 0
  }
},
{
  "name": "comp_x5_y1",
  "type": "coreTestElement.message_mesh.enclosing_component",
  "params": {
    "id": "13"
  },
  "subcomponents": [
    {
      "slot_name": "route",
      "slot_number": 0,
      "type": "coreTestElement.message_mesh.route_message"
    },
    {
      "slot_name": "ports",
      "slot_number": 0,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 1,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 2,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 3,
      "type": "coreTestElement.message_mesh.message_port"
    }
  ],
  "partition": {
    "rank": 1,
    "thread": 0
  }
},
{
  "name": "comp_x6_y0",
  "type": "coreTestElement.message_mesh.enclosing_component",
  "params": {
    "id": "6"
  },
  "subcomponents": [
    {
      "slot_name": "route",
      "slot_number": 0,
      "type": "coreTestElement.message_mesh.route_message"
    },
    {
      "slot_name": "ports",
      "slot_number": 0,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 1,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 2,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 3,
      "type": "coreTestElement.message_mesh.message_port"
    }
  ],
  "partition": {
    "rank": 1,
    "thread": 0
  }
},
{
  "name": "comp_x6_y1",
  "type": "coreTestElement.message_mesh.enclosing_component",
  "params": {
    "id": "14"
  },
  "subcomponents": [
    {
      "slot_name": "route",
      "slot_number": 0,
      "type": "coreTestElement.message_mesh.route_message"
    },
    {
      "slot_name": "ports",
      "slot_number": 0,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 1,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 2,
      "type": "coreTestElement.message_mesh.message_port"
    },
    {
      "slot_name": "ports",
      "slot_number": 3,
      "type": "coreTestElement.message_mesh.message_port"
    }
  ],
  "partition": {
    "rank": 1,
    "thread": 0
  }
},
{
  "name": "comp_x7_y0",
  "type": "coreTestElement.message_mesh.enclosing_component",
  "params": {
    "id": "7"
  },
  "subcomponents": [
  ],
  "partition": {
    "rank": 1,
    "thread": 0
  }
},
{
  "name": "comp_x7_y1",
  "type": "coreTestElement.message_mesh.enclosing_component",
  "params": {
    "id": "15"
  },
  "subcomponents": [
  ],
  "partition": {
    "rank": 1,
    "thread": 0
  }
}
],
"statistics_group": null,
"links": [
{
  "name": "link_x7y0_x0y0",
  "noCut": false,
  "nonlocal": true,
  "left": {
    "component": "comp_x7_y0",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x0_y0",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x7y1_x0y1",
  "noCut": false,
  "nonlocal": true,
  "left": {
    "component": "comp_x7_y1",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x0_y1",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x3y0_x4y0",
  "noCut": false,
  "nonlocal": true,
  "left": {
    "component": "comp_x3_y0",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x4_y0",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x3y1_x4y1",
  "noCut": false,
  "nonlocal": true,
  "left": {
    "component": "comp_x3_y1",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x4_y1",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x4y0_x5y0",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x4_y0",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x5_y0",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x4y0_x4y1",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x4_y0",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x4_y1",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x4y1_x4y0",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x4_y1",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x4_y0",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x4y1_x5y1",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x4_y1",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x5_y1",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x5y0_x6y0",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x5_y0",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x6_y0",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x5y0_x5y1",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x5_y0",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x5_y1",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x5y1_x5y0",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x5_y1",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x5_y0",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x5y1_x6y1",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x5_y1",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x6_y1",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x6y0_x7y0",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x6_y0",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x7_y0",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x6y0_x6y1",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x6_y0",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x6_y1",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x6y1_x6y0",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x6_y1",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x6_y0",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x6y1_x7y1",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x6_y1",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x7_y1",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x7y0_x7y1",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x7_y0",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x7_y1",
    "port": "port0",
    "latency": "1 ns"
  }
},
{
  "name": "link_x7y1_x7y0",
  "noCut": false,
  "nonlocal": false,
  "left": {
    "component": "comp_x7_y1",
    "port": "port0",
    "latency": "1 ns"
  },
  "right": {
    "component": "comp_x7_y0",
    "port": "port0",
    "latency": "1 ns"
  }
}
]
}
```