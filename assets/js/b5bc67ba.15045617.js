"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5564],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},S={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=s,d=u["".concat(l,".").concat(m)]||u[m]||S[m]||r;return t?a.createElement(d,i(i({ref:n},p),{},{components:t})):a.createElement(d,i({ref:n},p))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9632:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>S});var a=t(7462),s=t(3366),r=(t(7294),t(3905)),i=["components"],o={id:"basics_header_files",title:"Basics: Header (.h) Files"},l=void 0,c={unversionedId:"guides/files/basics_header_files",id:"guides/files/basics_header_files",title:"Basics: Header (.h) Files",description:"SST::Component Subclass",source:"@site/../docs/guides/files/basics_header_files.md",sourceDirName:"guides/files",slug:"/guides/files/basics_header_files",permalink:"/sst-website/docs/guides/files/basics_header_files",draft:!1,editUrl:"https://github.com/sstsimulator/sst-website/edit/master/docs/../docs/guides/files/basics_header_files.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1666128058,formattedLastUpdatedAt:"Oct 18, 2022",frontMatter:{id:"basics_header_files",title:"Basics: Header (.h) Files"},sidebar:"Guides",previous:{title:"Basics: Simulation Configuration File",permalink:"/sst-website/docs/guides/external/projectDriver"},next:{title:"Basics: Makefile",permalink:"/sst-website/docs/guides/files/basics_makefile"}},p={},S=[{value:"SST::Component Subclass",id:"sstcomponent-subclass",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Examples",id:"examples",level:3},{value:"Example 1: Simple",id:"example-1-simple",level:4},{value:"Example 2: More Complex",id:"example-2-more-complex",level:4},{value:"SST::Subcomponent Subclass",id:"sstsubcomponent-subclass",level:2},{value:"Syntax",id:"syntax-1",level:3},{value:"Examples",id:"examples-1",level:3},{value:"Example 1",id:"example-1",level:4}],u={toc:S};function m(e){var n=e.components,t=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"sstcomponent-subclass"},"SST::Component Subclass"),(0,r.kt)("p",null,"For the most part, header files are just like any other C++ header file. There are only a few required pieces. Generally, these includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Registering the component with SST"),(0,r.kt)("li",{parentName:"ul"},"Registering params, ports, subcomponents, statistics, etc. with SST."),(0,r.kt)("li",{parentName:"ul"},"Variable and function declarations")),(0,r.kt)("h3",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'//include guard\n#ifndef _INSERT_CLASS_NAME_H\n#define _INSERT_CLASS_NAME_H\n\n//required\n#include <sst/core/component.h>\n#include <sst/core/elementinfo.h>\n\n//if you have a port on your component\n#include <sst/core/link.h>\n\n//if you have a subcomponent\n#include <sst/core/subcomponent.h>\n\n//generally a good idea to have a namespace\nnamespace SOME_NAMESPACE {\n\nclass INSERT_CLASS_NAME : public SST::Component {\n\npublic:\n\n    //required, constructor/destructor\n    INSERT_CLASS_NAME( SST::ComponentId_t id, SST::Params& params );\n    ~INSERT_CLASS_NAME();\n\n    //required, functions to run at the start and end of the simulation.\n    //  can just be functions that do nothing\n    void setup();\n    void finish();\n\n    //not required, but almost all components will register a clock and do something on a clock tick. The function name can be anything.\n    bool clockTick( SST::Cycle_t currentCycle );\n\n//Register pieces of the component with SST.\n\n    //required\n    // Register the component\n    SST_ELI_REGISTER_COMPONENT(\n        INSERT_CLASS_NAME, // class\n        "exA_helloSST", // element library\n        "INSERT_CLASS_NAME", // component\n        SST_ELI_ELEMENT_VERSION( 1, 0, 0 ), //version\n        "Simple model that prints Hello World!", //description\n        COMPONENT_CATEGORY_UNCATEGORIZED //category\n    )\n    //if you want to accept params from the Configuration file\n    //           This text will be used to generate the sst-info documentation.\n    SST_ELI_DOCUMENT_PARAMS(\n        // Parameter name, description, default value\n        { "repeats", "Number of repetitions to make", "10" },\n        { "param", "description", "default" }\n    )\n\n    //if you want to collect statistics\n    SST_ELI_DOCUMENT_STATISTICS(\n        // Statistic name, description, unit, enable level\n        { "smallCarsWashed", "Number of small cars washed", "cars", 1 },  \n        { "largeCarsWashed", "Number of large cars washed", "cars", 1 },\n        { "noCarEvents", "Number of no car generated events", "cars", 2 },\n        { "smallCarsWaiting", "Number of small cars still waiting in line", "cars", 1 },\n        { "largeCarsWaiting", "Number of large cars still waiting in line", "cars", 1 }\n    )\n    \n    //if you have subcomponents\n    SST_ELI_DOCUMENT_SUBCOMPONENT_SLOTS(\n        // Slot name, description, slot type\n        { "bay", "Car Wash Bay", "SST::exC_carWash::carWashBay" }\n    )\n\n    //if you have ports\n    SST_ELI_DOCUMENT_PORTS(\n        // Port name, description, event type\n        { "port", "Port on which to receive cars", {"sst.Interfaces.StringEvent"} }\n    )\n\n    private:\n    \n    //private variables, functions, etc.\n    \n    //if you have subcomponents\n    std::vector<SUBCOMPONENT_CLASS_NAME*> subComps;\n\n    //if you have a port\n    SST::Link *port;\n    \n    // if you have statistics\n    Statistic<int>* smallCarsWashed;\n    Statistic<int>* largeCarsWashed;\n    Statistic<int>* noCarEvents;\n    Statistic<int>* smallCarsWaiting;\n    Statistic<int>* largeCarsWaiting;\n};\n} // namespace exC_carWash\n#endif\n\\\n')),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("h4",{id:"example-1-simple"},"Example 1: Simple"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#ifndef _hello_H\n#define _hello_H\n\n#include <sst/core/component.h>\n#include <sst/core/elementinfo.h>\n\nnamespace exA_hello {\n\nclass hello : public SST::Component {\n\npublic:\n    hello( SST::ComponentId_t id, SST::Params& params );\n    ~hello();\n\n    void setup();\n    void finish();\n\n    bool clockTick( SST::Cycle_t currentCycle );\n\n    // Register the component\n    SST_ELI_REGISTER_COMPONENT(\n        hello, // class\n        "exA_helloSST", // element library\n        "hello", // component\n        SST_ELI_ELEMENT_VERSION( 1, 0, 0 ),\n        "Simple model that prints Hello World!",\n        COMPONENT_CATEGORY_UNCATEGORIZED\n    )\n\n    // Parameter name, description, default value\n    SST_ELI_DOCUMENT_PARAMS(\n        { "repeats", "Number of repetitions to make", "10" }\n    )\n\nprivate:\n    SST::Output output;\n    SST::Cycle_t maxRepeats; //number of repetitions to make\n    SST::Cycle_t repeats; //number of repetitions printed already\n\n};\n} // namespace exA_hello\n#endif\n')),(0,r.kt)("h4",{id:"example-2-more-complex"},"Example 2: More Complex"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#ifndef _carWash_H\n#define _carWash_H\n\n#include <sst/core/component.h>\n#include <sst/core/link.h>\n#include <sst/core/elementinfo.h>\n#include <sst/core/subcomponent.h>\n\n#define WASH_BAY_EMPTY 0\n#define WASH_BAY_FULL 1\n#define NO_CAR 0\n#define SMALL_CAR 1\n#define LARGE_CAR 2\n\nnamespace exC_carWash {\n// carWash subcomponent prototype\nclass carWashBay : public SST::SubComponent {\npublic:\n    // constructor and destructor cannot be virtual, all other functions must be\n    carWashBay(SST::Component *owningComponent) : SubComponent(owningComponent) {};\n    ~carWashBay() {};\n    virtual bool newCar(int CarType) = 0;\n    virtual int baySize() = 0;\n    virtual int isOccupied() = 0;\n    virtual void tick() {};\n};\n\n\nclass carWash : public SST::Component {\n\npublic:\n    carWash( SST::ComponentId_t id, SST::Params& params );\n    ~carWash();\n\n    void setup();\n    void finish();\n\n    bool tick( SST::Cycle_t currentCycle );\n\n    //handle events on the port\n    void handleEvent(SST::Event *ev);\n    \n    // Link list entry; used to store the cars as they are queued for service\n    typedef struct CAR_RECORD_T {\n        int CarSize; // 0 == Small Car; 1 == Large Car\n        CAR_RECORD_T *ptrNext; // The next Car in the linked list   \n    } CAR_RECORD;\n\n    // Record to track how many cars have been washed\n    typedef struct {\n        int currentTime; // Time (ticks) since the epoch of the day\n        int smallCarsWashed;\n        int largeCarsWashed;\n    } CARS_WASHED;\n    \n    // Record to track how many cars arrived in the past hour\n    typedef struct {\n        int smallCarsArrived;\n        int largeCarsArrived;\n        int noCarsArrived;\n    } CAR_WASH_JOURNAL;\n    \n    // Register the component\n    SST_ELI_REGISTER_COMPONENT(\n        carWash, // class\n        "exC_carWash", // element library\n        "carWash", // component\n        SST_ELI_ELEMENT_VERSION( 1, 0, 0 ),\n        "carWash main simulator. Accepts car inputs from a carGenerator component, then queues and washes cars using bay subcomponents",\n        COMPONENT_CATEGORY_UNCATEGORIZED\n    )\n\n    // Parameter name, description, default value\n    SST_ELI_DOCUMENT_PARAMS(\n        { "simulationTime", "How long to run simulation (hours)", "24" }\n    )\n    \n    // Statistic name, description, unit, enable level\n    SST_ELI_DOCUMENT_STATISTICS(\n        { "smallCarsWashed", "Number of small cars washed", "cars", 1 },  \n        { "largeCarsWashed", "Number of large cars washed", "cars", 1 },\n        { "noCarEvents", "Number of no car generated events", "cars", 2 },\n        { "smallCarsWaiting", "Number of small cars still waiting in line", "cars", 1 },\n        { "largeCarsWaiting", "Number of large cars still waiting in line", "cars", 1 }\n    )\n    \n    // Slot name, description, slot type\n    SST_ELI_DOCUMENT_SUBCOMPONENT_SLOTS(\n        { "bay", "Car Wash Bay", "SST::exC_carWash::carWashBay" }\n    )\n\n    // Port name, description, event type\n    SST_ELI_DOCUMENT_PORTS(\n        { "port", "Port on which to receive cars", {"sst.Interfaces.StringEvent"} }\n    )\n\nprivate:\n    SST::Output output;\n    CAR_RECORD *ptrCarRecordList;\n    CARS_WASHED CarWash;\n    CAR_WASH_JOURNAL HourlyReport;\n\n    void QueueACar(int carSize);\n    void CarWashClockTick();\n    \n    int CarWashTick;\n    std::string clock;\n    float ticksPerHour;\n    int64_t runTime;\n    int CarType;\n    std::vector<carWashBay*> subComps;\n    SST::Link *port;\n    \n    // Statistics\n    Statistic<int>* smallCarsWashed;\n    Statistic<int>* largeCarsWashed;\n    Statistic<int>* noCarEvents;\n    Statistic<int>* smallCarsWaiting;\n    Statistic<int>* largeCarsWaiting;\n};\n} // namespace exC_carWash\n#endif\n\n')),(0,r.kt)("h2",{id:"sstsubcomponent-subclass"},"SST::Subcomponent Subclass"),(0,r.kt)("p",null,"The syntax is the same as a Component class, except you use SST_ELI_REGISTER_SUBCOMPONENT instead of SST_ELI_REGISTER_COMPONENT. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// Register the subcomponent\n    SST_ELI_REGISTER_SUBCOMPONENT(\n        bay, // class\n        "exC_carWash", // element library\n        "bay", // subcomponent\n        SST_ELI_ELEMENT_VERSION( 1, 0, 0 ), //version\n        "Bay subcomponent for the carwash", //description\n        "SST::exC_carWash::carWashBay" // type of objects that subcomponent slots will have\n    )\n')),(0,r.kt)("h3",{id:"syntax-1"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#ifndef _INSERT_CLASS_NAME_H\n#define _INSERT_CLASS_NAME_H\n\n#include "INSERT_COMPONENT_WITH_SUBCOMPONENT_DEFINITION.h"\n\n//generally a good idea to have a namespace\nnamespace SOME_NAMESPACE {\n\nclass INSERT_CLASS_NAME : public INSERT_PARENT_CLASS_NAME {\n\npublic:\n    INSERT_CLASS_NAME( SST::Component *owningComponent, SST::Params& params );\n    ~INSERT_CLASS_NAME();\n\n    //public interface functions. \n    // - pass in data from events the main component gets\n    // - functions to run on each clock tick of the main component\n    // - other getters/setters\n\n    // Register the subcomponent\n    SST_ELI_REGISTER_SUBCOMPONENT(\n        INSERT_CLASS_NAME, // class\n        "exC_carWash", // element library\n        "INSERT_CLASS_NAME", // subcomponent\n        SST_ELI_ELEMENT_VERSION( 1, 0, 0 ),\n        "Bay subcomponent for the carwash",\n        "SST::SOME_NAMESPACE::INSERT_PARENT_CLASS_NAME" // subcomponent slot\n    )\n\n    // Parameter name, description, default value\n    SST_ELI_DOCUMENT_PARAMS(\n        { "size", "Size of the bay (1 = small, 2 = large)", "1" },\n        { "smallCarWashTime", "How long to wash a small car (ticks)", "3" },\n        { "largeCarWashTime", "How long to wash a large car (ticks)", "5" }\n    )\n    \n    // Statistic name, description, unit, enable level\n    SST_ELI_DOCUMENT_STATISTICS(\n        { "carsWashed", "Number of cars washed", "cars", 1 },\n        { "idleTime", "Time spent not washing cars", "ticks", 1 }\n    )\n\n\nprivate:\n    //private variables, functions, etc.\n};\n} // namespace SOME_NAMESPACE\n#endif\n')),(0,r.kt)("h3",{id:"examples-1"},"Examples"),(0,r.kt)("h4",{id:"example-1"},"Example 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#ifndef _bay_H\n#define _bay_H\n\n#include "carWash.h"\n\nnamespace exC_carWash {\n\nclass bay : public carWashBay {\n\npublic:\n    bay( SST::Component *owningComponent, SST::Params& params );\n    ~bay();\n\n    bool newCar(int CarType);\n    int baySize();\n    int isOccupied();\n    void tick();\n\n    // Register the subcomponent\n    SST_ELI_REGISTER_SUBCOMPONENT(\n        bay, // class\n        "exC_carWash", // element library\n        "bay", // subcomponent\n        SST_ELI_ELEMENT_VERSION( 1, 0, 0 ),\n        "Bay subcomponent for the carwash",\n        "SST::exC_carWash::carWashBay" // subcomponent slot\n    )\n\n    // Parameter name, description, default value\n    SST_ELI_DOCUMENT_PARAMS(\n        { "size", "Size of the bay (1 = small, 2 = large)", "1" },\n        { "smallCarWashTime", "How long to wash a small car (ticks)", "3" },\n        { "largeCarWashTime", "How long to wash a large car (ticks)", "5" }\n    )\n    \n    // Statistic name, description, unit, enable level\n    SST_ELI_DOCUMENT_STATISTICS(\n        { "carsWashed", "Number of cars washed", "cars", 1 },\n        { "idleTime", "Time spent not washing cars", "ticks", 1 }\n    )\n\n\nprivate:\n    SST::Output output;\n    int bay_size;\n    int smallTime;\n    int largeTime;\n    int occupied;\n    int timeToOccupy;\n    Statistic<uint32_t>* carsWashed;\n    Statistic<uint32_t>* idleTime;\n};\n} // namespace exC_carWash\n#endif\n')))}m.isMDXComponent=!0}}]);