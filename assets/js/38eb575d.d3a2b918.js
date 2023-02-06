"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"sendUntimedData"},c=void 0,s={unversionedId:"core/link/sendUntimedData",id:"core/link/sendUntimedData",title:"sendUntimedData",description:"Send an event during SST's init() or complete() phase.",source:"@site/../docs/core/link/sendUntimedData.md",sourceDirName:"core/link",slug:"/core/link/sendUntimedData",permalink:"/docs/docs/core/link/sendUntimedData",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/link/sendUntimedData.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"sendUntimedData"},sidebar:"Core API",previous:{title:"setDefaultTimeBase",permalink:"/docs/docs/core/link/setDefaultTimeBase"},next:{title:"recvUntimedData",permalink:"/docs/docs/core/link/recvUntimedData"}},p={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Header",id:"header",level:2}],m={toc:d},u="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void sendUntimedData(Event* data);\n")),(0,i.kt)("p",null,"Send an event during SST's ",(0,i.kt)("a",{parentName:"p",href:"../component/lifecycle/init"},(0,i.kt)("inlineCode",{parentName:"a"},"init()"))," or ",(0,i.kt)("a",{parentName:"p",href:"../component/lifecycle/complete"},(0,i.kt)("inlineCode",{parentName:"a"},"complete()"))," phase."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," (Event*) Event to send"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"returns")," none")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"example-1"},"Example 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"/* excerpt from basicSimLifeCycle.cc */\nvoid basicSimLifeCycle::init(unsigned int phase) {\n\n    // Only send our info on phase 0\n    if (phase == 0) {\n        basicLifeCycleEvent* event = new basicLifeCycleEvent(getName(), eventsToSend);\n        leftLink->sendUntimedData(event);\n    }\n\n    /** Rest of init() handling **/\n}\n")),(0,i.kt)("h2",{id:"header"},"Header"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/link.h>\n")))}f.isMDXComponent=!0}}]);