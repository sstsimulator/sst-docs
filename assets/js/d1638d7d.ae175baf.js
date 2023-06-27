"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4614],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=n.createContext({}),l=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(m.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,v=u["".concat(m,".").concat(d)]||u[d]||p[d]||i;return r?n.createElement(v,a(a({ref:t},s),{},{components:r})):n.createElement(v,a({ref:t},s))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},96310:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={title:"convertFromCoreTime"},a=void 0,c={unversionedId:"core/timeconverter/convertFromCoreTime",id:"core/timeconverter/convertFromCoreTime",title:"convertFromCoreTime",description:"This function converts a count from the global view of time to a count in the local view. This",source:"@site/../docs/core/timeconverter/convertFromCoreTime.md",sourceDirName:"core/timeconverter",slug:"/core/timeconverter/convertFromCoreTime",permalink:"/sst-docs/docs/core/timeconverter/convertFromCoreTime",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/timeconverter/convertFromCoreTime.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"convertFromCoreTime"},sidebar:"core",previous:{title:"SST::TimeConverter",permalink:"/sst-docs/docs/core/timeconverter/class"},next:{title:"convertToCoreTime",permalink:"/sst-docs/docs/core/timeconverter/convertToCoreTime"}},m={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}],s={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"SimTime_t convertFromCoreTime (SimTime_t time);\n")),(0,o.kt)("p",null,"This function converts a count from the global view of time to a count in the local view. This\nfunction is used to get elapsed simulation time in the local view. For example, if a\nComponent has a clock frequency of 2GHz, the local time base would be 500ps (period of a 2GHz\nclock). If the clock timeconverter was used to convert a simulation time of 2ms to the local clock\nfrequency, this call would return 4,000 (2ms / 500ps)."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"time")," (SimTime_t) Core time to convert to local time "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"returns")," (SimTime_t) Converted local time")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/memHierarchy/cacheController.cc"',title:'"Excerpt',from:!0,'sst-elements/src/sst/elements/memHierarchy/cacheController.cc"':!0},'// This function checks if the cache has been stalling an \n// event for too long and may be in a deadlock situation\nvoid Cache::checkTimeout() {\n    MSHREntry* entry = mshr_->getOldestEntry();\n\n    if (entry) {\n        // Get the current simulation time in nano seconds\n        SimTime_t curTime = getCurrentSimTimeNano();\n        // Convert the arrival time for the oldest active event to ns and compute how long it has been waiting in ns\n        //highlight-next-line\n        SimTime_t startTime = getTimeConverter("1ns")->convertFromCoreTime(entry->getStartTime());\n        SimTime_t waitTime = curTime - startTime;\n\n        // If the event has been stalled for more than timeout_ ns, end the simulation with an error\n        if (waitTime > timeout_) {\n            out_->fatal(CALL_INFO, -1, "%s, Error: Maximum cache timeout reached - potential deadlock or other error. Event: %s. Current time: %" PRIu64 "ns. Event start time: %" PRIu64 "ns.\\n",\n                getName().c_str(), entry->getEvent()->getVerboseString().c_str(), curTime, startTime);\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"header"},"Header"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/timeConverter.h\n")))}p.isMDXComponent=!0}}]);