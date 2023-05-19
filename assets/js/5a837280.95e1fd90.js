"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>b});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,b=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(b,c(c({ref:t},i),{},{components:n})):o.createElement(b,c({ref:t},i))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={title:"constructor"},c=void 0,s={unversionedId:"core/component/subcomponent/constructor",id:"core/component/subcomponent/constructor",title:"constructor",description:"Availability: SubComponent",source:"@site/../docs/core/component/subcomponent/constructor.md",sourceDirName:"core/component/subcomponent",slug:"/core/component/subcomponent/constructor",permalink:"/sst-docs/docs/core/component/subcomponent/constructor",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/subcomponent/constructor.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"constructor"},sidebar:"core",previous:{title:"SST::SubComponent",permalink:"/sst-docs/docs/core/component/subcomponent/class"},next:{title:"destructor",permalink:"/sst-docs/docs/core/component/subcomponent/destructor"}},p={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}],i={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Subclass constructor\nSubComponentClassName(SST::ComponentId_t id, SST::Params& params, ARGS ...);\n// Base SST::SubComponent class constructor\nSST::SubComponent::SubComponent(SST::ComponentId_t id);\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Availability"),": SubComponent\nThis constructor is called when a Sub(Component) loads a new SubComponent."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"id")," (ComponentId_t) A unique ID generated by SST for each SubComponent. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"params")," (Params&) The parameter set passed into the SubComponent by the simulation configuration file if user-defined or by the parent (Sub)Component if anonymous."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"...")," (variable) Variable arguments depending on the specific SubComponent definition"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"returns")," (SubComponent) The newly constructed SubComponent")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Excerpt from src/sst/elements/simpleElementExample/basicSubComponent_subcomponent.h"',title:'"Excerpt',from:!0,'src/sst/elements/simpleElementExample/basicSubComponent_subcomponent.h"':!0},"#include <sst/core/subcomponent.h>\n\n// SubComponent API - define an API for a type of subcomponent\nclass basicSubComponentAPI : public SST::SubComponent \n{\npublic:\n    // Tell SST that this class is a SubComponent API\n    SST_ELI_REGISTER_SUBCOMPONENT_API(SST::simpleElementExample::basicSubComponentAPI)\n\n//highlight-next-line\n    basicSubComponentAPI(ComponentId_t id, Params& params) : SubComponent(id) {}\n    virtual ~basicSubComponentAPI() {}\n\n    virtual int compute (int num) =0;\n    virtual std::string compute (std::string comp) =0;\n};\n")),(0,r.kt)("h2",{id:"header"},"Header"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/subcomponent.h>\n")))}m.isMDXComponent=!0}}]);