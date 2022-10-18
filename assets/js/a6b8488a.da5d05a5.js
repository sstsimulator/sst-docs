"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var i=2;i<l;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4847:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),s=["components"],o={id:"setup",title:"setup()"},p=void 0,i={unversionedId:"cpp/component/setup",id:"cpp/component/setup",title:"setup()",description:"Fully Qualified Name",source:"@site/../docs/cpp/component/setup.md",sourceDirName:"cpp/component",slug:"/cpp/component/setup",permalink:"/sst-website/docs/cpp/component/setup",draft:!1,editUrl:"https://github.com/sstsimulator/sst-website/edit/master/docs/../docs/cpp/component/setup.md",tags:[],version:"current",lastUpdatedBy:"Ryan Ledbetter",lastUpdatedAt:1539909317,formattedLastUpdatedAt:"Oct 19, 2018",frontMatter:{id:"setup",title:"setup()"},sidebar:"C++",previous:{title:"registerStatistic()",permalink:"/sst-website/docs/cpp/component/registerStatistic"},next:{title:"SST_ELI_DOCUMENT_PARAMS",permalink:"/sst-website/docs/cpp/eli/sst_eli_document_params"}},u={},c=[{value:"Fully Qualified Name",id:"fully-qualified-name",level:2},{value:"Remarks",id:"remarks",level:3},{value:"Requirements",id:"requirements",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"See Also",id:"see-also",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"fully-qualified-name"},"Fully Qualified Name"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"SST::BaseComponent::setup()\n")),(0,l.kt)("h3",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"Called after all components have been constructed and initialization has completed, but before simulation time has begun."),(0,l.kt)("p",null,"Typical tasks done:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Initialize variables."),(0,l.kt)("li",{parentName:"ul"},"Perform checks to make sure the Component is set up correctly."),(0,l.kt)("li",{parentName:"ul"},"Perform any other tasks to do before starting the simulation.")),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/component.h>\n")),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"void SST::BaseComponent::setup()\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"None")),(0,l.kt)("h2",{id:"return-value"},"Return Value"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"None")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"example-1"},"Example 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"void carWash::setup() {\n    ptrCarRecordList = NULL;\n    CarWash.currentTime = 0;\n    CarWash.smallCarsWashed = 0;\n    CarWash.largeCarsWashed =0;\n    CarWashTick = 0;\n    HourlyReport.smallCarsArrived = 0;\n    HourlyReport.largeCarsArrived = 0;\n    HourlyReport.noCarsArrived = 0;\n    CarType = NO_CAR;\n}\n")),(0,l.kt)("h3",{id:"example-2"},"Example 2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'\nvoid DirectoryController::setup (void)\n{\n     network->setup();\n     \n     numTargets = network->getSources()->size();\n     \n     if(0 == numTargets) dbg.fatal(CALL_INFO,-1,"%s, Error: Did not find any caches during init\\n",getName().c_str());\n \n     entrySize = (numTargets+1)/8 +1;\n }\n')),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/sst-website/docs/cpp/component/finish"},"finish"))))}d.isMDXComponent=!0}}]);