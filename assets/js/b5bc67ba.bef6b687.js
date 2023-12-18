"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5564],{80415:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=t(85893),s=t(11151);const i={id:"basics_header_files",title:"Basics: Header (.h) Files"},r=void 0,o={id:"guides/files/basics_header_files",title:"Basics: Header (.h) Files",description:"This page has not been reviewed recently to ensure that it is up-to-date with the latest SST specification. It is possible the information is out of date.",source:"@site/../docs/guides/files/basics_header_files.md",sourceDirName:"guides/files",slug:"/guides/files/basics_header_files",permalink:"/sst-docs/docs/guides/files/basics_header_files",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/guides/files/basics_header_files.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1702928554,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{id:"basics_header_files",title:"Basics: Header (.h) Files"},sidebar:"guides",previous:{title:"Files",permalink:"/sst-docs/docs/category/files"},next:{title:"Basics: Makefile",permalink:"/sst-docs/docs/guides/files/basics_makefile"}},c={},l=[{value:"SST::Component Subclass",id:"sstcomponent-subclass",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Examples",id:"examples",level:3},{value:"Example 1: Simple",id:"example-1-simple",level:4},{value:"Example 2: More Complex",id:"example-2-more-complex",level:4},{value:"SST::Subcomponent Subclass",id:"sstsubcomponent-subclass",level:2},{value:"Syntax",id:"syntax-1",level:3},{value:"Examples",id:"examples-1",level:3},{value:"Example 1",id:"example-1",level:4}];function S(n){const e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.admonition,{type:"warning",children:(0,a.jsx)(e.p,{children:"This page has not been reviewed recently to ensure that it is up-to-date with the latest SST specification. It is possible the information is out of date."})}),"\n",(0,a.jsx)(e.h2,{id:"sstcomponent-subclass",children:"SST::Component Subclass"}),"\n",(0,a.jsx)(e.p,{children:"For the most part, header files are just like any other C++ header file. There are only a few required pieces. Generally, these includes:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Registering the component with SST"}),"\n",(0,a.jsx)(e.li,{children:"Registering params, ports, subcomponents, statistics, etc. with SST."}),"\n",(0,a.jsx)(e.li,{children:"Variable and function declarations"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:'//include guard\n#ifndef _INSERT_CLASS_NAME_H\n#define _INSERT_CLASS_NAME_H\n\n//required\n#include <sst/core/component.h>\n\n//if you have a port on your component\n#include <sst/core/link.h>\n\n//if you have a subcomponent\n#include <sst/core/subcomponent.h>\n\n//generally a good idea to have a namespace\nnamespace SOME_NAMESPACE {\n\nclass INSERT_CLASS_NAME : public SST::Component {\n\npublic:\n\n    //required, constructor/destructor\n    INSERT_CLASS_NAME( SST::ComponentId_t id, SST::Params& params );\n\t~INSERT_CLASS_NAME();\n\n    //required, functions to run at the start and end of the simulation.\n    //  can just be functions that do nothing\n\tvoid setup();\n\tvoid finish();\n\n    //not required, but almost all components will register a clock and do something on a clock tick. The function name can be anything.\n    bool clockTick( SST::Cycle_t currentCycle );\n\n//Register pieces of the component with SST.\n\n    //required\n    // Register the component\n\tSST_ELI_REGISTER_COMPONENT(\n\t\tINSERT_CLASS_NAME, // class\n\t\t"exA_helloSST", // element library\n\t\t"INSERT_CLASS_NAME", // component\n\t\tSST_ELI_ELEMENT_VERSION( 1, 0, 0 ), //version\n\t\t"Simple model that prints Hello World!", //description\n\t\tCOMPONENT_CATEGORY_UNCATEGORIZED //category\n\t)\n    //if you want to accept params from the Configuration file\n    //           This text will be used to generate the sst-info documentation.\n\tSST_ELI_DOCUMENT_PARAMS(\n        // Parameter name, description, default value\n\t\t{ "repeats", "Number of repetitions to make", "10" },\n        { "param", "description", "default" }\n\t)\n\n    //if you want to collect statistics\n\tSST_ELI_DOCUMENT_STATISTICS(\n        // Statistic name, description, unit, enable level\n        { "smallCarsWashed", "Number of small cars washed", "cars", 1 },  \n        { "largeCarsWashed", "Number of large cars washed", "cars", 1 },\n        { "noCarEvents", "Number of no car generated events", "cars", 2 },\n        { "smallCarsWaiting", "Number of small cars still waiting in line", "cars", 1 },\n        { "largeCarsWaiting", "Number of large cars still waiting in line", "cars", 1 }\n    )\n\t\n\t//if you have subcomponents\n\tSST_ELI_DOCUMENT_SUBCOMPONENT_SLOTS(\n        // Slot name, description, slot type\n\t\t{ "bay", "Car Wash Bay", "SST::exC_carWash::carWashBay" }\n\t)\n\n\t//if you have ports\n\tSST_ELI_DOCUMENT_PORTS(\n        // Port name, description, event type\n\t\t{ "port", "Port on which to receive cars", {"sst.Interfaces.StringEvent"} }\n\t)\n\n    private:\n\t\n    //private variables, functions, etc.\n\t\n\t//if you have subcomponents\n\tstd::vector<SUBCOMPONENT_CLASS_NAME*> subComps;\n\n    //if you have a port\n\tSST::Link *port;\n\t\n\t// if you have statistics\n\tStatistic<int>* smallCarsWashed;\n\tStatistic<int>* largeCarsWashed;\n\tStatistic<int>* noCarEvents;\n\tStatistic<int>* smallCarsWaiting;\n\tStatistic<int>* largeCarsWaiting;\n};\n} // namespace exC_carWash\n#endif\n\\\n'})}),"\n",(0,a.jsx)(e.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(e.h4,{id:"example-1-simple",children:"Example 1: Simple"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:'#ifndef _hello_H\n#define _hello_H\n\n#include <sst/core/component.h>\n#include <sst/core/elementinfo.h>\n\nnamespace exA_hello {\n\nclass hello : public SST::Component {\n\npublic:\n\thello( SST::ComponentId_t id, SST::Params& params );\n\t~hello();\n\n\tvoid setup();\n\tvoid finish();\n\n\tbool clockTick( SST::Cycle_t currentCycle );\n\n\t// Register the component\n\tSST_ELI_REGISTER_COMPONENT(\n\t\thello, // class\n\t\t"exA_helloSST", // element library\n\t\t"hello", // component\n\t\tSST_ELI_ELEMENT_VERSION( 1, 0, 0 ),\n\t\t"Simple model that prints Hello World!",\n\t\tCOMPONENT_CATEGORY_UNCATEGORIZED\n\t)\n\n\t// Parameter name, description, default value\n\tSST_ELI_DOCUMENT_PARAMS(\n\t\t{ "repeats", "Number of repetitions to make", "10" }\n\t)\n\nprivate:\n\tSST::Output output;\n\tSST::Cycle_t maxRepeats; //number of repetitions to make\n\tSST::Cycle_t repeats; //number of repetitions printed already\n\n};\n} // namespace exA_hello\n#endif\n'})}),"\n",(0,a.jsx)(e.h4,{id:"example-2-more-complex",children:"Example 2: More Complex"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:'#ifndef _carWash_H\n#define _carWash_H\n\n#include <sst/core/component.h>\n#include <sst/core/link.h>\n#include <sst/core/elementinfo.h>\n#include <sst/core/subcomponent.h>\n\n#define WASH_BAY_EMPTY 0\n#define WASH_BAY_FULL 1\n#define NO_CAR 0\n#define SMALL_CAR 1\n#define LARGE_CAR 2\n\nnamespace exC_carWash {\n// carWash subcomponent prototype\nclass carWashBay : public SST::SubComponent {\npublic:\n\t// constructor and destructor cannot be virtual, all other functions must be\n\tcarWashBay(SST::Component *owningComponent) : SubComponent(owningComponent) {};\n\t~carWashBay() {};\n\tvirtual bool newCar(int CarType) = 0;\n\tvirtual int baySize() = 0;\n\tvirtual int isOccupied() = 0;\n\tvirtual void tick() {};\n};\n\n\nclass carWash : public SST::Component {\n\npublic:\n\tcarWash( SST::ComponentId_t id, SST::Params& params );\n\t~carWash();\n\n\tvoid setup();\n\tvoid finish();\n\n\tbool tick( SST::Cycle_t currentCycle );\n\n    //handle events on the port\n\tvoid handleEvent(SST::Event *ev);\n\t\n\t// Link list entry; used to store the cars as they are queued for service\n\ttypedef struct CAR_RECORD_T {\n\t\tint CarSize; // 0 == Small Car; 1 == Large Car\n\t\tCAR_RECORD_T *ptrNext; // The next Car in the linked list\t\n\t} CAR_RECORD;\n\n\t// Record to track how many cars have been washed\n\ttypedef struct {\n\t\tint currentTime; // Time (ticks) since the epoch of the day\n\t\tint smallCarsWashed;\n\t\tint largeCarsWashed;\n\t} CARS_WASHED;\n\t\n\t// Record to track how many cars arrived in the past hour\n\ttypedef struct {\n\t\tint smallCarsArrived;\n\t\tint largeCarsArrived;\n\t\tint noCarsArrived;\n\t} CAR_WASH_JOURNAL;\n\t\n\t// Register the component\n\tSST_ELI_REGISTER_COMPONENT(\n\t\tcarWash, // class\n\t\t"exC_carWash", // element library\n\t\t"carWash", // component\n\t\tSST_ELI_ELEMENT_VERSION( 1, 0, 0 ),\n\t\t"carWash main simulator. Accepts car inputs from a carGenerator component, then queues and washes cars using bay subcomponents",\n\t\tCOMPONENT_CATEGORY_UNCATEGORIZED\n\t)\n\n\t// Parameter name, description, default value\n\tSST_ELI_DOCUMENT_PARAMS(\n\t\t{ "simulationTime", "How long to run simulation (hours)", "24" }\n\t)\n\t\n\t// Statistic name, description, unit, enable level\n\tSST_ELI_DOCUMENT_STATISTICS(\n        { "smallCarsWashed", "Number of small cars washed", "cars", 1 },  \n        { "largeCarsWashed", "Number of large cars washed", "cars", 1 },\n        { "noCarEvents", "Number of no car generated events", "cars", 2 },\n        { "smallCarsWaiting", "Number of small cars still waiting in line", "cars", 1 },\n        { "largeCarsWaiting", "Number of large cars still waiting in line", "cars", 1 }\n    )\n\t\n\t// Slot name, description, slot type\n\tSST_ELI_DOCUMENT_SUBCOMPONENT_SLOTS(\n\t\t{ "bay", "Car Wash Bay", "SST::exC_carWash::carWashBay" }\n\t)\n\n\t// Port name, description, event type\n\tSST_ELI_DOCUMENT_PORTS(\n\t\t{ "port", "Port on which to receive cars", {"sst.Interfaces.StringEvent"} }\n\t)\n\nprivate:\n\tSST::Output output;\n\tCAR_RECORD *ptrCarRecordList;\n\tCARS_WASHED CarWash;\n\tCAR_WASH_JOURNAL HourlyReport;\n\n\tvoid QueueACar(int carSize);\n\tvoid CarWashClockTick();\n\t\n\tint CarWashTick;\n\tstd::string clock;\n\tfloat ticksPerHour;\n\tint64_t runTime;\n\tint CarType;\n\tstd::vector<carWashBay*> subComps;\n\tSST::Link *port;\n\t\n\t// Statistics\n\tStatistic<int>* smallCarsWashed;\n\tStatistic<int>* largeCarsWashed;\n\tStatistic<int>* noCarEvents;\n\tStatistic<int>* smallCarsWaiting;\n\tStatistic<int>* largeCarsWaiting;\n};\n} // namespace exC_carWash\n#endif\n\n'})}),"\n",(0,a.jsx)(e.h2,{id:"sstsubcomponent-subclass",children:"SST::Subcomponent Subclass"}),"\n",(0,a.jsx)(e.p,{children:"The syntax is the same as a Component class, except you use SST_ELI_REGISTER_SUBCOMPONENT instead of SST_ELI_REGISTER_COMPONENT."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:'// Register the subcomponent\n\tSST_ELI_REGISTER_SUBCOMPONENT(\n\t\tbay, // class\n\t\t"exC_carWash", // element library\n\t\t"bay", // subcomponent\n\t\tSST_ELI_ELEMENT_VERSION( 1, 0, 0 ), //version\n\t\t"Bay subcomponent for the carwash", //description\n\t\t"SST::exC_carWash::carWashBay" // type of objects that subcomponent slots will have\n\t)\n'})}),"\n",(0,a.jsx)(e.h3,{id:"syntax-1",children:"Syntax"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:'#ifndef _INSERT_CLASS_NAME_H\n#define _INSERT_CLASS_NAME_H\n\n#include "INSERT_COMPONENT_WITH_SUBCOMPONENT_DEFINITION.h"\n\n//generally a good idea to have a namespace\nnamespace SOME_NAMESPACE {\n\nclass INSERT_CLASS_NAME : public INSERT_PARENT_CLASS_NAME {\n\npublic:\n\tINSERT_CLASS_NAME( SST::Component *owningComponent, SST::Params& params );\n\t~INSERT_CLASS_NAME();\n\n\t//public interface functions. \n\t// - pass in data from events the main component gets\n\t// - functions to run on each clock tick of the main component\n\t// - other getters/setters\n\n\t// Register the subcomponent\n\tSST_ELI_REGISTER_SUBCOMPONENT(\n\t\tINSERT_CLASS_NAME, // class\n\t\t"exC_carWash", // element library\n\t\t"INSERT_CLASS_NAME", // subcomponent\n\t\tSST_ELI_ELEMENT_VERSION( 1, 0, 0 ),\n\t\t"Bay subcomponent for the carwash",\n\t\t"SST::SOME_NAMESPACE::INSERT_PARENT_CLASS_NAME" // subcomponent slot\n\t)\n\n\t// Parameter name, description, default value\n\tSST_ELI_DOCUMENT_PARAMS(\n\t\t{ "size", "Size of the bay (1 = small, 2 = large)", "1" },\n\t\t{ "smallCarWashTime", "How long to wash a small car (ticks)", "3" },\n\t\t{ "largeCarWashTime", "How long to wash a large car (ticks)", "5" }\n\t)\n\t\n\t// Statistic name, description, unit, enable level\n\tSST_ELI_DOCUMENT_STATISTICS(\n        { "carsWashed", "Number of cars washed", "cars", 1 },\n        { "idleTime", "Time spent not washing cars", "ticks", 1 }\n    )\n\n\nprivate:\n\t//private variables, functions, etc.\n};\n} // namespace SOME_NAMESPACE\n#endif\n'})}),"\n",(0,a.jsx)(e.h3,{id:"examples-1",children:"Examples"}),"\n",(0,a.jsx)(e.h4,{id:"example-1",children:"Example 1"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:'#ifndef _bay_H\n#define _bay_H\n\n#include "carWash.h"\n\nnamespace exC_carWash {\n\nclass bay : public carWashBay {\n\npublic:\n\tbay( SST::Component *owningComponent, SST::Params& params );\n\t~bay();\n\n\tbool newCar(int CarType);\n\tint baySize();\n\tint isOccupied();\n\tvoid tick();\n\n\t// Register the subcomponent\n\tSST_ELI_REGISTER_SUBCOMPONENT(\n\t\tbay, // class\n\t\t"exC_carWash", // element library\n\t\t"bay", // subcomponent\n\t\tSST_ELI_ELEMENT_VERSION( 1, 0, 0 ),\n\t\t"Bay subcomponent for the carwash",\n\t\t"SST::exC_carWash::carWashBay" // subcomponent slot\n\t)\n\n\t// Parameter name, description, default value\n\tSST_ELI_DOCUMENT_PARAMS(\n\t\t{ "size", "Size of the bay (1 = small, 2 = large)", "1" },\n\t\t{ "smallCarWashTime", "How long to wash a small car (ticks)", "3" },\n\t\t{ "largeCarWashTime", "How long to wash a large car (ticks)", "5" }\n\t)\n\t\n\t// Statistic name, description, unit, enable level\n\tSST_ELI_DOCUMENT_STATISTICS(\n        { "carsWashed", "Number of cars washed", "cars", 1 },\n        { "idleTime", "Time spent not washing cars", "ticks", 1 }\n    )\n\n\nprivate:\n\tSST::Output output;\n\tint bay_size;\n\tint smallTime;\n\tint largeTime;\n\tint occupied;\n\tint timeToOccupy;\n\tStatistic<uint32_t>* carsWashed;\n\tStatistic<uint32_t>* idleTime;\n};\n} // namespace exC_carWash\n#endif\n'})})]})}function d(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(S,{...n})}):S(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>r});var a=t(67294);const s={},i=a.createContext(s);function r(n){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);