"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6794],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,v=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>v,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"recvUntimedData"},c=void 0,s={unversionedId:"core/link/recvUntimedData",id:"core/link/recvUntimedData",title:"recvUntimedData",description:"Receive an event during SST's init() or complete() phase. Event handlers are not active during this time, so links must be polled using this function.",source:"@site/../docs/core/link/recvUntimedData.md",sourceDirName:"core/link",slug:"/core/link/recvUntimedData",permalink:"/sst-docs/docs/core/link/recvUntimedData",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/link/recvUntimedData.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"recvUntimedData"},sidebar:"Core API",previous:{title:"sendUntimedData",permalink:"/sst-docs/docs/core/link/sendUntimedData"},next:{title:"sendInitData",permalink:"/sst-docs/docs/core/link/sendInitData"}},p={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Header",id:"header",level:2}],m={toc:d},u="wrapper";function v(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"Event* recvUntimedData();\n")),(0,i.kt)("p",null,"Receive an event during SST's ",(0,i.kt)("a",{parentName:"p",href:"../component/lifecycle/init"},(0,i.kt)("inlineCode",{parentName:"a"},"init()"))," or ",(0,i.kt)("a",{parentName:"p",href:"../component/lifecycle/complete"},(0,i.kt)("inlineCode",{parentName:"a"},"complete()"))," phase. Event handlers are not active during this time, so links must be polled using this function."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"returns")," Event received or ",(0,i.kt)("inlineCode",{parentName:"li"},"nullptr")," if none available")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"example-1"},"Example 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'/* excerpt from basicSimLifeCycle.cc */\nvoid basicSimLifeCycle::init(unsigned int phase) {\n\n    // Only send our info on phase 0\n    if (phase == 0) {\n        basicLifeCycleEvent* event = new basicLifeCycleEvent(getName(), eventsToSend);\n        leftLink->sendUntimedData(event);\n    }\n\n    // Check if an event is received. recvUntimedData returns nullptr if no event is available\n    while (SST::Event* ev = rightLink->recvUntimedData()) {\n\n        basicLifeCycleEvent* event = dynamic_cast<basicLifeCycleEvent*>(ev);\n\n        if (event) {\n            if (event->getStr() == getName()) { // Event made it around the ring and back to this component\n                delete event;\n            } else { // Event is from another component\n                neighbors.insert(event->getStr());\n                eventsToSend += event->getNum();\n                leftLink->sendUntimedData(event);\n            }\n\n        } else {\n            out->fatal(CALL_INFO, -1, "Error in %s: Received an event during init() but it is not the expected type\\n", getName().c_str());\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"header"},"Header"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/link.h>\n")))}v.isMDXComponent=!0}}]);