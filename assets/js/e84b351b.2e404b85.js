"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),i=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(f,l(l({ref:t},p),{},{components:n})):o.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<a;i++)l[i]=n[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var o=n(87462),r=(n(67294),n(3905));const a={title:"getSubComponentSlotInfo"},l=void 0,s={unversionedId:"core/component/load/getSubComponentSlotInfo",id:"core/component/load/getSubComponentSlotInfo",title:"getSubComponentSlotInfo",description:"Availability: Component, SubComponent, ComponentExtension",source:"@site/../docs/core/component/load/getSubComponentSlotInfo.md",sourceDirName:"core/component/load",slug:"/core/component/load/getSubComponentSlotInfo",permalink:"/sst-docs/docs/core/component/load/getSubComponentSlotInfo",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/load/getSubComponentSlotInfo.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"getSubComponentSlotInfo"},sidebar:"core",previous:{title:"loadAnonymousSubComponent",permalink:"/sst-docs/docs/core/component/load/loadAnonymousSubComponent"},next:{title:"isUserSubComponentLoadableUsingAPI",permalink:"/sst-docs/docs/core/component/load/isUserSubComponentLoadableUsingAPI"}},c={},i=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}],p={toc:i},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"SubComponentSlotInfo* getSubComponentSlotInfo(const std::string& name, bool fatalOnEmptyIndex = false);\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Availability:")," Component, SubComponent, ComponentExtension"),(0,r.kt)("p",null,"Return information about the SubComponent(s) that have been loaded into the named slot. "),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name")," (string) Name of the slot"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fatalOnEmptyIndex")," If true, throw a fatal error if no SubComponents were loaded into the specified slot"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"returns")," (SubComponentSlotInfo*) A pointer to the SubComponentSlotInfo object holding information (types, parameters, etc.) about the SubComponents that were loaded into the specified slot.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/memHierarchy/cacheFactory.cc"',title:'"Excerpt',from:!0,'sst-elements/src/sst/elements/memHierarchy/cacheFactory.cc"':!0},"#include <sst_config.h>\n#include <sst/core/component.h>\n\n// Excerpt from cache constructor. Cache listeners monitor cache traffic. \n// Multiple listeners can be loaded into the 'listener' subcomponent slot.\nvoid Cache::createListeners(Params& params) {\n    //highlight-next-line\n    SubComponentSlotInfo* lists = getSubComponentSlotInfo(\"listener\");\n    if (lists) {\n        for (int i = 0; i < lists->getMaxPopulatedSlotNumber(); i++) {\n            if (lists->isPopulated(i))\n                listeners_.push_back(lists->create<CacheListener>(i, ComponentInfo::SHARE_NONE));\n        }    \n    }\n}\n")),(0,r.kt)("h2",{id:"header"},"Header"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n")))}u.isMDXComponent=!0}}]);