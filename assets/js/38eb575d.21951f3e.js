"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"sendUntimedData"},o=void 0,l={unversionedId:"core/link/sendUntimedData",id:"core/link/sendUntimedData",title:"sendUntimedData",description:"Send an event during SST's init() or complete() phase.",source:"@site/../docs/core/link/sendUntimedData.md",sourceDirName:"core/link",slug:"/core/link/sendUntimedData",permalink:"/sst-docs/docs/core/link/sendUntimedData",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/link/sendUntimedData.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"sendUntimedData"},sidebar:"core",previous:{title:"setDefaultTimeBase",permalink:"/sst-docs/docs/core/link/setDefaultTimeBase"},next:{title:"recvUntimedData",permalink:"/sst-docs/docs/core/link/recvUntimedData"}},s={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void sendUntimedData(Event* data);\n")),(0,r.kt)("p",null,"Send an event during SST's ",(0,r.kt)("a",{parentName:"p",href:"../component/lifecycle/init"},(0,r.kt)("inlineCode",{parentName:"a"},"init()"))," or ",(0,r.kt)("a",{parentName:"p",href:"../component/lifecycle/complete"},(0,r.kt)("inlineCode",{parentName:"a"},"complete()"))," phase."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sendInitData")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sendUntimedData")," functions are identical. The latter was added when SST added the ",(0,r.kt)("inlineCode",{parentName:"p"},"complete()")," phase to indicate that it could be used during ",(0,r.kt)("em",{parentName:"p"},"any")," untimed phase, not just ",(0,r.kt)("inlineCode",{parentName:"p"},"init()"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"sendInitData")," may eventually be deprecated in favor of ",(0,r.kt)("inlineCode",{parentName:"p"},"sendUntimedData"),".")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," (Event*) Event to send"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"returns")," none")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.cc"',title:'"Excerpt',from:!0,'sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.cc"':!0},"void basicSimLifeCycle::init(unsigned int phase) {\n\n    // Only send our info on phase 0\n    if (phase == 0) {\n        basicLifeCycleEvent* event = new basicLifeCycleEvent(getName(), eventsToSend);\n        //highlight-next-line\n        leftLink->sendUntimedData(event);\n    }\n\n    /** Rest of init() handling **/\n}\n")),(0,r.kt)("h2",{id:"header"},"Header"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/link.h>\n")))}m.isMDXComponent=!0}}]);