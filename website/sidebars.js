const sidebars = {
  /***** GUIDES ******/
  guides: [
    'guides/runningSST',
    {
      type: 'category',
      label: 'Concepts',
      link: { type: 'generated-index' },
      items: ['guides/concepts/time']
    },
    {
      type: 'category',
      label: 'Configuration',
      link: { type: 'generated-index' },
      items: ['guides/configuration/pythonConfigGuide']
    },
    {
      type: 'category',
      label: 'Tips and Tricks',
      link: { type: 'generated-index' },
      items: ['guides/tips/compilation']
    },
    {
      type: 'category',
      label: 'Development',
      link: { type: 'generated-index' },
      items: [
        "guides/dev/autotest"
        , "guides/dev/testing"
        , "guides/dev/testfaq"
      ]
    },
    {
      type: 'category',
      label: 'Files',
      link: { type: 'generated-index' },
      items: [
        "guides/files/basics_header_files"
        ,"guides/files/basics_makefile"
      ]
    },
  ],

  /***** CORE   ******/
  core: [
    {
      type: 'category',
      label: 'Clocks',
      link: { type: 'doc', id: 'core/clock/class'  },
      items: ["core/clock/clock_handler"]
    },
    {
      type: 'category',
      label: 'Component',
      link: { type: 'doc', id: 'core/component/introduction'  },
      items: [
        {
          type: 'category',
          label: 'Component',
          link: { type: 'doc', id: 'core/component/component/class'},
          items: [
            "core/component/component/constructor"
            , "core/component/component/destructor"
            , "core/component/component/registerAsPrimaryComponent"
            , "core/component/component/primaryComponentDoNotEndSim"
            , "core/component/component/primaryComponentOKToEndSim"
          ]
        },
        { 
          type: 'category',
          label: "SubComponent",
          link: { type: 'doc', id: 'core/component/subcomponent/class' },
          items: [
            "core/component/subcomponent/constructor"
            , "core/component/subcomponent/destructor"
          ]
        }, 
        { 
          type: 'category',
          label: "ComponentExtension",
          link: { type: 'doc', id: 'core/component/componentext/class' },
          items: [
            "core/component/componentext/constructor"
            , "core/component/componentext/destructor"
          ]
        },
        { 
          type: 'category',
          label: "LifeCycle",
          link: { type: 'generated-index' },
          items: [
            "core/component/lifecycle/init"
            , "core/component/lifecycle/setup"
            , "core/component/lifecycle/complete"
            , "core/component/lifecycle/finish"
            , "core/component/lifecycle/emergencyShutdown"
            , "core/component/lifecycle/printStatus"
          ] 
        },
        { 
          type: 'category',
          label: "Introspection",
          link: { type: 'generated-index' },
          items: [
              "core/component/info/getId"
            , "core/component/info/getName"
            , "core/component/info/getType"
            , "core/component/info/getNumRanks"
            , "core/component/info/getRank"
            , "core/component/info/getParentComponentName"
            , "core/component/info/isAnonymous"
            , "core/component/info/isUser"
            , "core/component/info/requireLibrary"
            , "core/component/info/getCoordinates"
            , "core/component/info/getCurrentPriority"
            , "core/component/info/getSimulation"
            , "core/component/info/isSimulationRunModeBoth"
            , "core/component/info/isSimulationRunModeInit"
            , "core/component/info/isSimulationRunModeRun"
          ]
        },
        { 
          type: 'category',
          label: "Time, Clocks",
          link: { type: 'generated-index' },
          items: [
            "core/component/time/registerClock"
            , "core/component/time/unregisterClock"
            , "core/component/time/reregisterClock"
            , "core/component/time/getNextClockCycle"
            , "core/component/time/registerTimeBase"
            , "core/component/time/setDefaultTimeBase"
            , "core/component/time/getDefaultTimeBase"
            , "core/component/time/getTimeConverter"
            , "core/component/time/getCoreTimeBase"
            , "core/component/time/getCurrentSimCycle"
            , "core/component/time/getCurrentSimTime"
            , "core/component/time/getCurrentSimTimeMicro"
            , "core/component/time/getCurrentSimTimeMilli"
            , "core/component/time/getCurrentSimTimeNano"
            , "core/component/time/getElapsedSimTime"
            , "core/component/time/getEndSimCycle"
            , "core/component/time/getEndTime"
            , "core/component/time/getInitPhaseElapsedRealTime"
            , "core/component/time/getRunPhaseElapsedRealTime"
            , "core/component/time/getCompletePhaseElapsedRealTime"
          ]
        },
        { 
          type: 'category',
          label: "Links",
          link: { type: 'generated-index' },
          items: [
            "core/component/link/configureLink"
            , "core/component/link/configureSelfLink"
            , "core/component/link/isPortConnected"
          ]
        },
        {
          type: 'category',
          label: "Loadable Objects",
          link: { type: 'generated-index' },
          items: [
            "core/component/load/loadUserSubComponent"
            , "core/component/load/loadAnonymousSubComponent"
            , "core/component/load/getSubComponentSlotInfo"
            , "core/component/load/isUserSubComponentLoadableUsingAPI"
            , "core/component/load/isSubComponentLoadableUsingAPI"
            , "core/component/load/doesSubComponentExist"
            , "core/component/load/loadComponentExtension"
            , "core/component/load/loadModule"
            , "core/component/load/registerProfilePoint"
          ]
        },
        { 
          type: 'category',
          label: "Statistics",
          link: { type: 'generated-index' },
          items: [
            "core/component/stat/registerStatistic"
            , "core/component/stat/registerMultiStatistic"
            , "core/component/stat/doesComponentInfoStatisticExist"
            , "core/component/stat/getComponentInfoStatisticEnableLevel"
            , "core/component/stat/getStatisticLoadLevel"
            , "core/component/stat/isStatisticShared"
            , "core/component/stat/performGlobalStatisticOutput"
            , "core/component/stat/performStatisticOutput"
          ]
        },
        {
          type: 'category',
          label: "Output",
          link: { type: 'generated-index' },
          items: [
            "core/component/output/fatal"
            , "core/component/output/sst_assert"
            , "core/component/output/getSimulationOutput"
            , "core/component/output/getOutputDirectory"
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'ELI',
      link: { type: 'doc', id: 'core/eli/overview' },
      items: [
        {
          type: 'category',
          label: 'Register',  
          link: { type: 'generated-index' },
          items: [
            "core/eli/register/sst_eli_register_component"
            , "core/eli/register/sst_eli_register_component_base"
            , "core/eli/register/sst_eli_register_component_derived_base"
            , "core/eli/register/sst_eli_register_subcomponent"
            , "core/eli/register/sst_eli_register_subcomponent_api"
            , "core/eli/register/sst_eli_register_subcomponent_derived_api"
            , "core/eli/register/sst_eli_register_module"
            , "core/eli/register/sst_eli_register_module_derived"
            , "core/eli/register/sst_eli_register_module_api"
            , "core/eli/register/sst_eli_register_module_derived_api"
            , "core/eli/register/sst_eli_register_profiletool"
            , "core/eli/register/sst_eli_register_python_module"
          ]
        },
        {
          type: 'category',
          label: 'Document',    
          link: { type: 'generated-index' },
          items: [
            "core/eli/document/sst_eli_document_attributes"
            , "core/eli/document/sst_eli_document_params"
            , "core/eli/document/sst_eli_document_ports"
            , "core/eli/document/sst_eli_document_profile_points"
            , "core/eli/document/sst_eli_document_statistics"
            , "core/eli/document/sst_eli_document_subcomponent_slots"
          ]
        },
        {
          type: 'category',
          label: 'Delete',    
          link: { type: 'generated-index' },
          items: [
            "core/eli/delete/sst_eli_delete_attribute"
            , "core/eli/delete/sst_eli_delete_param"
            , "core/eli/delete/sst_eli_delete_port"
            , "core/eli/delete/sst_eli_delete_profile_point"
            , "core/eli/delete/sst_eli_delete_stat"
            , "core/eli/delete/sst_eli_delete_subcomponent_slot"
          ]
        },
        {
          type: 'category',
          label: 'Other',    
          link: { type: 'generated-index' },
          items: [
            "core/eli/other/sst_eli_category_info"            
            , "core/eli/other/sst_eli_element_version"            
            , "core/eli/other/sst_eli_export"  
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Events',
      link: { type: 'doc', id: 'core/events/class'  },
      items: [
        "core/events/event_handler"
        , "core/events/constructor"
        , "core/events/destructor"
        , "core/events/serialize_order"
        , "core/events/clone"
        , "core/events/generateUniqueId"
        , "core/events/toString"
      ]
    },
    {
      type: 'category',
      label: 'Interfaces',
      link: { type: 'doc', id: 'core/iface/overview'  },
      items: [
        {
          type: 'category',
          label: 'SimpleNetwork',
          link: { type: 'doc', id: 'core/iface/SimpleNetwork/class'  },
          items: [
            "core/iface/SimpleNetwork/constructor"
            , "core/iface/SimpleNetwork/destructor"
            , "core/iface/SimpleNetwork/init"
            , "core/iface/SimpleNetwork/setup"
            , "core/iface/SimpleNetwork/complete"
            , "core/iface/SimpleNetwork/finish"
            , "core/iface/SimpleNetwork/getEndpointID"
            , "core/iface/SimpleNetwork/getLinkBW"
            , "core/iface/SimpleNetwork/isNetworkInitialized"
            , "core/iface/SimpleNetwork/recv"
            , "core/iface/SimpleNetwork/recvInitData"
            , "core/iface/SimpleNetwork/recvUntimedData"
            , "core/iface/SimpleNetwork/requestToReceive"
            , "core/iface/SimpleNetwork/send"
            , "core/iface/SimpleNetwork/sendInitData"
            , "core/iface/SimpleNetwork/sendUntimedData"
            , "core/iface/SimpleNetwork/setNotifyOnReceive"
            , "core/iface/SimpleNetwork/setNotifyOnSend"
            , "core/iface/SimpleNetwork/spaceToSend"
            , "core/iface/SimpleNetwork/handler"
            , "core/iface/SimpleNetwork/NetworkInspector"
            , "core/iface/SimpleNetwork/Request"
          ]
        },
        {
          type: 'category',
          label: 'StandardMem',
          link: { type: 'doc', id: 'core/iface/StandardMem/class' },
          items: [
            "core/iface/StandardMem/constructor"
            , "core/iface/StandardMem/destructor"
            , "core/iface/StandardMem/init"
            , "core/iface/StandardMem/setup"
            , "core/iface/StandardMem/complete"
            , "core/iface/StandardMem/finish"
            , "core/iface/StandardMem/getLineSize"
            , "core/iface/StandardMem/poll"
            , "core/iface/StandardMem/recvUntimedData"
            , "core/iface/StandardMem/send"
            , "core/iface/StandardMem/sendUntimedData"
            , "core/iface/StandardMem/setMemoryMappedAddressRegion",
            {
              type: 'category',
              label: 'Request',
              link: { type: 'doc', id: 'core/iface/StandardMem/req/class' },
              items: [
                "core/iface/StandardMem/req/read"
                , "core/iface/StandardMem/req/readresp"
                , "core/iface/StandardMem/req/write" 
                , "core/iface/StandardMem/req/writeresp" 
                , "core/iface/StandardMem/req/readlock"
                , "core/iface/StandardMem/req/writeunlock"
                , "core/iface/StandardMem/req/loadlink"
                , "core/iface/StandardMem/req/storeconditional"
                , "core/iface/StandardMem/req/flushaddr" 
                , "core/iface/StandardMem/req/flushresp"
                , "core/iface/StandardMem/req/movedata"
                , "core/iface/StandardMem/req/invnotify"
                , "core/iface/StandardMem/req/customreq"
                , "core/iface/StandardMem/req/customresp"
                , "core/iface/StandardMem/req/customdata"
              ]
            },
            "core/iface/StandardMem/reqconverter"
            , "core/iface/StandardMem/reqhandler"
            , "core/iface/StandardMem/handler"
          ]
        },
        'core/iface/StringEvent/class',
        'core/iface/TestEvent/class'
      ]
    },
    {
      type: 'category',
      label: 'Link',
      link: { type: 'doc', id: 'core/link/class'  },
      items: [
        "core/link/send"
        , "core/link/recv"
        , "core/link/setFunctor"
        , "core/link/replaceFunctor"
        , "core/link/addSendLatency"
        , "core/link/addRecvLatency"
        , "core/link/getDefaultTimeBase"
        , "core/link/setDefaultTimeBase"
        , "core/link/sendUntimedData"
        , "core/link/recvUntimedData"
        , "core/link/sendInitData"
        , "core/link/recvInitData"
        , "core/link/getId"
      ]
    },
    {
      type: 'category',
      label: 'Output',
      link: { type: 'doc', id: 'core/output/class'  },
      items: [
        "core/output/constructor"
        , "core/output/destructor"
        , "core/output/init"
        , "core/output/fatal"
        , "core/output/output"
        , "core/output/verbose"
        , "core/output/verbosePrefix"
        , "core/output/debug"
        , "core/output/debugPrefix"    
        , "core/output/flush"
        , "core/output/getOutputLocation"
        , "core/output/setOutputLocation"
        , "core/output/setFileName"
        , "core/output/getPrefix"
        , "core/output/setPrefix"
        , "core/output/getVerboseLevel"
        , "core/output/setVerboseLevel"
        , "core/output/getVerboseMask"
        , "core/output/setVerboseMask"
        , "core/output/getDefaultObject"
      ]
    },
    {
      type: 'category',
      label: 'Params',
      link: { type: 'doc', id: 'core/params/class'  },
      items: [
        "core/params/constructor"
        , "core/params/destructor"
        , "core/params/operatoreq"
        , "core/params/find"
        , "core/params/find_array"
        , "core/params/find_map"
        , "core/params/find_set"
        , "core/params/get_scoped_params"
        , "core/params/getKeys"
        , "core/params/insert"
        , "core/params/size"
        , "core/params/clear"
        , "core/params/count"
        , "core/params/contains"
        , "core/params/empty"
        , "core/params/is_value_array"
        , "core/params/print_all_params"
      ]
    },
    {
      type: 'category',
      label: 'Random',
      link: { type: 'doc', id: 'core/rng/rng'  },
      items: [
        "core/rng/marsaglia"
        , "core/rng/mersenne"
        , "core/rng/xorshift"
        , "core/rng/distrib"
        , "core/rng/constant"
        , "core/rng/discrete"
        , "core/rng/expon"
        , "core/rng/gaussian"
        , "core/rng/poisson"
        , "core/rng/uniform"
      ]
    },
    {
      type: 'category',
      label: 'Statistics',
      link: { type: 'doc', id: 'core/statistics/class'  },
      items: [
        "core/statistics/addData"
        , "core/statistics/addDataNTimes"
      ]
    },
    {
      type: 'category',
      label: 'TimeConverter',
      link: { type: 'doc', id: 'core/timeconverter/class'  },
      items: [
        "core/timeconverter/convertFromCoreTime"
        , "core/timeconverter/convertToCoreTime"
        , "core/timeconverter/getFactor"
        , "core/timeconverter/getPeriod"
      ]
    },
    'core/types/class',
    {
      type: 'category',
      label: 'UnitAlgebra',
      link: { type: 'doc', id: 'core/unitalgebra/class'  },
      items: [
        "core/unitalgebra/constructor"
        , "core/unitalgebra/destructor"
        , "core/unitalgebra/init"
        , "core/unitalgebra/operatoreq"
        , "core/unitalgebra/operatoradd"
        , "core/unitalgebra/operatorsub"
        , "core/unitalgebra/operatormul"
        , "core/unitalgebra/operatordiv"
        , "core/unitalgebra/compeq"
        , "core/unitalgebra/compneq"
        , "core/unitalgebra/compgt"
        , "core/unitalgebra/compgteq"
        , "core/unitalgebra/complt"
        , "core/unitalgebra/complteq"
        , "core/unitalgebra/invert"
        , "core/unitalgebra/getDoubleValue"
        , "core/unitalgebra/getRoundedValue"
        , "core/unitalgebra/getValue"
        , "core/unitalgebra/hasUnits"
        , "core/unitalgebra/isValueZero"
        , "core/unitalgebra/print"
        , "core/unitalgebra/printWithBestSI"
        , "core/unitalgebra/toString"
        , "core/unitalgebra/toStringBestSI"
        , "core/unitalgebra/serialize_order"
      ]
    },
  ],

  /***** CONFIG ******/
  config : [
    'config/config',
    {
      type: 'category',
      label: 'General',
      link: {
        type: 'generated-index', 
      },
      items: [
        "config/general/setProgramOption"
        , "config/general/getProgramOptions"
        , "config/general/getMPIRankCount"
        , "config/general/getSSTThreadCount"
        , "config/general/setSSTThreadCount"
        , "config/general/pushNamePrefix"
        , "config/general/popNamePrefix"
        , "config/general/exit"
        , "config/general/findComponentByName"
      ]
    },
    {
      type: 'category',
      label: 'Component',
      link: {
        type: 'doc', id: 'config/component/classes'
      },
      items: [
        "config/component/component"
        , "config/component/setSubComponent"
        , "config/component/addParam"
        , "config/component/addParams"
        , "config/component/addLink"
        , "config/component/getFullName"
        , "config/component/getType"
        , "config/component/setStatistic"
        , "config/component/setStatisticLoadLevel"
        , "config/component/enableAllStatistics"
        , "config/component/enableStatistics"
        , "config/component/setCoordinates"
        , "config/component/setRank"
        , "config/component/setWeight"
      ]
    },
    {
      type: 'category',
      label: 'Link',
      link: {
        type: 'doc', id: 'config/link/link'
      },
      items: [
        "config/link/connect"
        , "config/link/setNoCut"
      ]
    },
    {
      type: 'category',
      label: 'Statistics',
      link: {
        type: 'doc', id: 'config/stats/overview'
      },
      items : [
        "config/stats/enableAllStatisticsForAllComponents"
        , "config/stats/enableAllStatisticsForComponentName"
        , "config/stats/enableAllStatisticsForComponentType"
        , "config/stats/enableStatisticForComponentName"
        , "config/stats/enableStatisticsForComponentName"
        , "config/stats/enableStatisticForComponentType"
        , "config/stats/enableStatisticsForComponentType"
        , "config/stats/setStatisticLoadLevel"
        , "config/stats/getStatisticLoadLevel"
        , "config/stats/setStatisticLoadLevelForComponentName"
        , "config/stats/setStatisticLoadLevelForComponentType"
        , "config/stats/setStatisticOutput"
        , "config/stats/setStatisticOutputOption"
        , "config/stats/setStatisticOutputOptions"
      ]
    },
    {
      type: 'category',
      label: 'StatisticObject',
      link: {
        type: 'doc', id: 'config/stats/object/statisticObject'
      },
      items : [
        "config/stats/object/addParam"
        , "config/stats/object/addParams"
      ],
    },
    {      
      type: 'category',
      label: 'StatisticOutput',
      link: {
        type: 'doc', id: 'config/stats/output/statisticOutput'
      },
      items : [
        "config/stats/output/addParam"
        , "config/stats/output/addParams"
      ],
    },
    {
      type: 'category',
      label: 'StatisticGroup',
      link: {
        type: 'doc', id: 'config/stats/group/statisticGroup'
      },
      items : [
        "config/stats/group/addComponent"
        , "config/stats/group/addStatistic"
        , "config/stats/group/setFrequency"
        , "config/stats/group/setOutput"
      ]
    },
  ],

  /***** ELEMENTS ******/
  elements: [
    'elements/intro',
    "elements/ariel/intro",
    "elements/balar/intro",
    "elements/cacheTracer/intro",
    "elements/cassini/intro",
    "elements/cramsim/intro",
    /* Ember */
    {
      type: 'category',
      label: 'ember',
      link: {type: 'doc', id: 'elements/ember/intro'},
      items: [
        "elements/ember/QuickStart",
        "elements/ember/CreatingMotifs",
        "elements/ember/RunningMotifs"]
    },
    "elements/firefly/intro",
    "elements/gensa/intro",
    "elements/hermes/intro",
    "elements/juno/intro",
    "elements/kingsley/intro",
    "elements/llyr/intro",
    "elements/macro/intro",
    "elements/memHierarchy/intro",
    "elements/mercury/intro",
    "elements/merlin/intro",
    "elements/messier/intro",
    "elements/miranda/intro",
    "elements/mmu/intro",
    "elements/opal/intro",
    "elements/osseous/intro",
    "elements/prospero/intro",
    "elements/rdmaNic/intro",
    "elements/samba/intro",
    "elements/serrano/intro",
    "elements/shogun/intro",
    "elements/simpleElementExample/intro",
    "elements/simpleExternalElement/intro",
    "elements/simpleSimulation/intro",
    "elements/thornhill/intro",
    "elements/vanadis/intro",
    "elements/vaultSimC/intro",
    "elements/zodiac/intro"
  ],

  /***** TOOLS ******/
  tools: [
    {
      type: 'category',
      label: 'Tools',
      link: {
        type: 'generated-index',
        title: "SST Tools",
        description: 'Command line utilities provided by SST',
      },
      items: [
        "tools/commandLine/sst-config",
        "tools/commandLine/sst-info",
        "tools/commandLine/sst-register",
      ]
    }
  ],

  /***** COMMUNITY *****/
  community: []
}
  module.exports = sidebars;
  /*
{

  },

}*/
