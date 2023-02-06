"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9866],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createContext({}),p=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=p(e.components);return o.createElement(m.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(m,".").concat(d)]||c[d]||u[d]||a;return n?o.createElement(f,s(s({ref:t},i),{},{components:n})):o.createElement(f,s({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>m,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),s=["components"],l={title:"loadAnonymousSubComponent"},m=void 0,p={unversionedId:"core/component/load/loadAnonymousSubComponent",id:"core/component/load/loadAnonymousSubComponent",title:"loadAnonymousSubComponent",description:"\x3c!---",source:"@site/../docs/core/component/load/loadAnonymousSubComponent.md",sourceDirName:"core/component/load",slug:"/core/component/load/loadAnonymousSubComponent",permalink:"/sst-website/docs/core/component/load/loadAnonymousSubComponent",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/component/load/loadAnonymousSubComponent.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"loadAnonymousSubComponent"},sidebar:"Core API",previous:{title:"loadUserSubComponent",permalink:"/sst-website/docs/core/component/load/loadUserSubComponent"},next:{title:"getSubComponentSlotInfo",permalink:"/sst-website/docs/core/component/load/getSubComponentSlotInfo"}},i={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Header",id:"header",level:2}],u={toc:c},d="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"template <class T, class... ARGS>\nT* loadAnonymousSubComponent(const std::string& type, const std::string slot_name,\n    int slot_num, uint64_t share_flags, Params& params, ARGS... args);\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Availability:")," Component, SubComponent, ComponentExtension"),(0,a.kt)("p",null,"Load an SST SubComponent anonymously, that is, not via the simulation configuration file."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type")," (string) SubComponent type in ",(0,a.kt)("inlineCode",{parentName:"li"},"lib.name")," format"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"slot_name")," (string) Name of the slot to load into"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"slot_num")," (int) Index in the slot to load into"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"share_flags")," (uint64_t) SST flags that indicate how statistics, ports, and other ELI properties should be shared between parent (Sub)Component and child SubComponent"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"params")," (Params) Set of parameters to pass to the SubComponent's constructor"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"args")," (ARGS) Additional SubComponent API-specific arguments for the SubComponent's constructor"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"returns")," (bool) A pointer to the newly-created SubComponent")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"example-1"},"Example 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'// Excerpt from miranda/mirandaCPU.cc\nRequestGenCPU::RequestGenCPU(ComponentId_t id, Params& params) : Component(id) {\n    /** Configuration here */\n\n    // Load a StandardMem memory interface to translate our memory requests for the attached memory subsystem\n    std::string interfaceName = params.find<std::string>("memoryinterface", "memHierarchy.standardInterface");\n    Params interfaceParams = params.get_scoped_params("memoryinterfaceparams");\n    interfaceParams.insert("port", "cache_link"); // The interface will share our port named \'cache_link\'\n\n    cache_link = loadAnonymousSubComponent<SST::Interfaces::StandardMem>(interfaceName, "memory", 0,\n        ComponentInfo::SHARE_PORTS | ComponentInfo::INSERT_STATS, interfaceParams, timeConverter, \n        new Interfaces::StandardMem::Handler<RequestGenCPU>(this, &RequestGenCPU::handleEvent));\n    \n    sst_assert(cache_link, CALL_INFO, -1, "%s, Error loading memory interface\\n", getName().c_str());\n\n    /** Rest of configuration here */\n}\n')),(0,a.kt)("h2",{id:"header"},"Header"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n")))}f.isMDXComponent=!0}}]);