"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1930],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],c={id:"clock_handler",title:"Clock::Handler"},s=void 0,i={unversionedId:"cpp/clock/clock_handler",id:"cpp/clock/clock_handler",title:"Clock::Handler",description:"Fully Qualified Name",source:"@site/../docs/cpp/clock/clock_handler.md",sourceDirName:"cpp/clock",slug:"/cpp/clock/clock_handler",permalink:"/sst-website/docs/cpp/clock/clock_handler",draft:!1,editUrl:"https://github.com/sstsimulator/sst-website/edit/master/docs/../docs/cpp/clock/clock_handler.md",tags:[],version:"current",lastUpdatedBy:"Joseph Kenny",lastUpdatedAt:1664453450,formattedLastUpdatedAt:"Sep 29, 2022",frontMatter:{id:"clock_handler",title:"Clock::Handler"},sidebar:"C++",previous:{title:"Help Us",permalink:"/sst-website/docs/cpp/helpUs"},next:{title:"constructor",permalink:"/sst-website/docs/cpp/component/constructor"}},p={},u=[{value:"Fully Qualified Name",id:"fully-qualified-name",level:2},{value:"Remarks",id:"remarks",level:3},{value:"Requirements",id:"requirements",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"See Also",id:"see-also",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"fully-qualified-name"},"Fully Qualified Name"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"SST::Clock::Handler<classT, argT>\n// classT - The object that contains the handler\n// argT - (optional) the type of additional data sent to the handler, if any \n")),(0,l.kt)("h3",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"This wraps a function to be called at regular intervals. This passes the current cycle, and optionally, extra data to the function."),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/component.h>\n")),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"//#1 - no data - create a clock handler with a reference to an object and a pointer to its tick function\nSST::Clock::Handler<classT>::Handler (classT *const object, PtrMember member)\n\n//#2 - with data - provide additional data to the tick function\nSST::Clock::Handler<classT, argT>::Handler (classT *const  object, PtrMember  member, argT  data)\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"object")," - A reference to the object, most often it is this."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"member")," - Pointer to the tick function. The tick function signature depends on what constructor was used."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns true")," if the Handler should stop."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns false")," if the Handler should continue.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"  //#1 - no data\n  bool tick(Cycle_t cycle) { ... }\n\n  //#2 - with data\n  bool tick(Cycle_t cycle, argT data) { ... }\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"data")," - Additional data to pass to the tick function."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"example-1"},"Example 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"//#1 - no data\nClock::Handler<MemController>* clockHandler = new Clock::Handler<MemController>(this, &MemController::clock);\n\nbool MemController::clock(Cycle_t cycle) {\n    bool unclockLink = true;\n    if (clockLink_) {\n        unclockLink = link_->clock();\n    }\n\n    bool unclockBack = memBackendConvertor_->clock( cycle );\n    \n    if (unclockLink && unclockBack) {\n        memBackendConvertor_->turnClockOff();\n        clockOn_ = false;\n        return true;\n    }\n\n    return false;\n}\n")),(0,l.kt)("h3",{id:"example-2"},"Example 2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'//#2 - with data\nClock::Handler<MemController>* clockHandler = new Clock::Handler<simpleCarWash, uint32_t>(this, &simpleCarWash::Clock2Tick, 222)\n\nbool simpleCarWash::Clock2Tick(SST::Cycle_t CycleNum, uint32_t Param)\n{\n    // NOTE: THIS IS THE 5NS CLOCK \n    std::cout << "  CLOCK #2 - TICK Num " << CycleNum << "; Param = " << Param << std::endl;\n    \n    // return false so we keep going or true to stop\n    if (CycleNum == 15) {\n        return true;\n    } else {\n        return false;\n    }\n}\n\n')),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/sst-website/docs/cpp/component/registerClock"},"Component::registerClock"))))}m.isMDXComponent=!0}}]);