"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8206],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>v});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,v=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return t?n.createElement(v,o(o({ref:r},p),{},{components:t})):n.createElement(v,o({ref:r},p))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6932:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>v,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],s={title:"serialize_order"},l=void 0,c={unversionedId:"core/events/serialize_order",id:"core/events/serialize_order",title:"serialize_order",description:"This function is used by SST when events need to be serialized for transmission over non-local Links.",source:"@site/../docs/core/events/serialize_order.md",sourceDirName:"core/events",slug:"/core/events/serialize_order",permalink:"/sst-docs/docs/core/events/serialize_order",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/events/serialize_order.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"serialize_order"},sidebar:"Core API",previous:{title:"destructor",permalink:"/sst-docs/docs/core/events/destructor"},next:{title:"clone",permalink:"/sst-docs/docs/core/events/clone"}},p={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Header",id:"header",level:2}],m={toc:d},u="wrapper";function v(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)(u,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"virtual void serialize_order(SST::Core::Serialization::serializer& ser) override;\n")),(0,i.kt)("p",null,"This function is used by SST when events need to be serialized for transmission over non-local Links.\nEvents that are serializable ",(0,i.kt)("em",{parentName:"p"},"must")," implement this function. The function should first call\n",(0,i.kt)("inlineCode",{parentName:"p"},"Event::serialize_order(ser)")," and then append any class members that need to be serialized (generally, all of them)\nto the serializer using the overloaded ",(0,i.kt)("inlineCode",{parentName:"p"},"&")," operation. SST's serializer can serialize POD types, pointers (but not the data pointed to), and many standard containers (e.g., std::vector). Other types may need to be manually serialized. "),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ser")," (SST::Core::Serialization::serializer) serializer to add the event class members to"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"returns")," none")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"example-1"},"Example 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"/* simpleElementExample/basicEvent.h */\nclass basicEvent : public SST::Event\n{\npublic:\n    // Constructor\n    basicEvent() : SST::Event(), last(false) { }\n    \n    // Example data members\n    std::vector<char> payload;\n    bool last;\n\n    // Events must provide a serialization function that serializes\n    // all data members of the event\n    void serialize_order(SST::Core::Serialization::serializer &ser)  override {\n        Event::serialize_order(ser);\n        ser & payload;\n        ser & last;\n    }\n\n    // Register this event as serializable\n    ImplementSerializable(SST::simpleElementExample::basicEvent);\n};\n")),(0,i.kt)("h2",{id:"header"},"Header"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/component.h>\n")))}v.isMDXComponent=!0}}]);