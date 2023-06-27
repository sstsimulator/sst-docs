"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8770],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=d(r),u=a,f=m["".concat(i,".").concat(u)]||m[u]||p[u]||s;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,c=new Array(s);c[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:a,c[1]=o;for(var d=2;d<s;d++)c[d]=r[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},72108:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const s={title:"destructor"},c=void 0,o={unversionedId:"core/iface/StandardMem/destructor",id:"core/iface/StandardMem/destructor",title:"destructor",description:"SST calls the StandardMem destructor prior to exiting. (Sub)Components should not call the StandardMem interface's destructor manually. StandardMem interfaces should clean up any state that is not registered with SST (e.g., not a link, clock handler, statistic, etc) in their destructors.",source:"@site/../docs/core/iface/StandardMem/destructor.md",sourceDirName:"core/iface/StandardMem",slug:"/core/iface/StandardMem/destructor",permalink:"/sst-docs/docs/core/iface/StandardMem/destructor",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/iface/StandardMem/destructor.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"destructor"},sidebar:"core",previous:{title:"constructor",permalink:"/sst-docs/docs/core/iface/StandardMem/constructor"},next:{title:"init",permalink:"/sst-docs/docs/core/iface/StandardMem/init"}},i={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}],l={toc:d},m="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"~StandardMem();\n")),(0,a.kt)("p",null,"SST calls the StandardMem destructor prior to exiting. (Sub)Components should ",(0,a.kt)("em",{parentName:"p"},"not")," call the StandardMem interface's destructor manually. StandardMem interfaces should clean up any state that is not registered with SST (e.g., not a link, clock handler, statistic, etc) in their destructors."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Memory interface")," ","\xa0",(0,a.kt)("br",{parentName:"p"}),"\n","Clean up any internal state that is not registered with SST."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Endpoint")," ","\xa0",(0,a.kt)("br",{parentName:"p"}),"\n","Do not call this function. SST will destroy SubComponents."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"returns")," none")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/memHierarchy/standardInterface.h"',title:'"Excerpt',from:!0,'sst-elements/src/sst/elements/memHierarchy/standardInterface.h"':!0},'#include <sst/core/interfaces/stdMem.h>\n\nclass StandardInterface : public SST::Interfaces::StandardMem {\npublic:\n    // Tell SST that this class is a SubComponent API\n    SST_ELI_REGISTER_SUBCOMPONENT(StandardInterface, "memHierarchy", "standardInterface", SST_ELI_ELEMENT_VERSION(1,0,0), "Interface to memory hierarchy between endpoint and cache. COnverts StandardMem requests into MemEventBases.", SST::Interfaces::StandardMem)\n\n    /* Rest of ELI macros */\n\n    StandardInterface(ComponentId_t cid, Params &params, TimeConverter* time, HandlerBase* handler = NULL);\n\n    ~StandardInterface();\n\n    /* Rest of class */\n};\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/memHierarchy/standardInterface.cc"',title:'"Excerpt',from:!0,'sst-elements/src/sst/elements/memHierarchy/standardInterface.cc"':!0},'#include <sst_config.h>\n#include "standardInterface.h"\n\nStandardInterface::StandardInterface(ComponentId_t cid, Params &params, TimeConverter* time, HandlerBase* handler) :\n    StandardMem(id, params, time, handler)\n    {\n        setDefaultTimeBase(time); // Links are required to have a timebase\n\n        /** Rest of constructor implementation **/\n    }\n')),(0,a.kt)("h2",{id:"header"},"Header"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/interfaces/stdMem.h>\n")))}p.isMDXComponent=!0}}]);