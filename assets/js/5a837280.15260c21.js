"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=u(n),b=r,d=m["".concat(s,".").concat(b)]||m[b]||l[b]||a;return n?o.createElement(d,c(c({ref:t},i),{},{components:n})):o.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:r,c[1]=p;for(var u=2;u<a;u++)c[u]=n[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},7511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),c=["components"],p={title:"SubComponent constructor"},s=void 0,u={unversionedId:"core/component/subcomponent/constructor",id:"core/component/subcomponent/constructor",title:"SubComponent constructor",description:"Availability: SubComponent",source:"@site/../docs/core/component/subcomponent/constructor.md",sourceDirName:"core/component/subcomponent",slug:"/core/component/subcomponent/constructor",permalink:"/sst-website/docs/core/component/subcomponent/constructor",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/component/subcomponent/constructor.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"SubComponent constructor"},sidebar:"Core API",previous:{title:"SST::SubComponent",permalink:"/sst-website/docs/core/component/subcomponent/class"},next:{title:"SubComponent destructor",permalink:"/sst-website/docs/core/component/subcomponent/destructor"}},i={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Header",id:"header",level:2}],l={toc:m},b="wrapper";function d(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)(b,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Subclass constructor\nSubComponentClassName(SST::ComponentId_t id, SST::Params& params, ARGS ...);\n// Base SST::SubComponent class constructor\nSST::SubComponent::SubComponent(SST::ComponentId_t id);\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Availability"),": SubComponent\nThis constructor is called when a Sub(Component) loads a new SubComponent."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"id")," (ComponentId_t) A unique ID generated by SST for each SubComponent. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"params")," (Params&) The parameter set passed into the SubComponet by the simulation configuration file if user-defined or by the parent (Sub)Component if anonymous."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"...")," (variable) Variable arguments depending on the specific SubComponent definition"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"returns")," (SubComponent) The newly constructed SubComponent")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"/* simpleElementExample/basicSubComponent_subcomponent.h */\n#include <sst/core/subcomponent.h>\n\n// SubComponent API - define an API for a type of subcomponent\nclass basicSubComponentAPI : public SST::SubComponent \n{\npublic:\n    // Tell SST that this class is a SubComponent API\n    SST_ELI_REGISTER_SUBCOMPONENT_API(SST::simpleElementExample::basicSubComponentAPI)\n\n    basicSubComponentAPI(ComponentId_t id, Params& params) : SubComponent(id) {}\n    virtual ~basicSubComponentAPI() {}\n\n    virtual int compute (int num) =0;\n    virtual std::string compute (std::string comp) =0;\n};\n")),(0,a.kt)("h2",{id:"header"},"Header"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/subcomponent.h>\n")))}d.isMDXComponent=!0}}]);