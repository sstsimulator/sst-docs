"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),i=l(n),d=r,b=i["".concat(p,".").concat(d)]||i[d]||m[d]||a;return n?o.createElement(b,c(c({ref:t},u),{},{components:n})):o.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[i]="string"==typeof e?e:r,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),c=["components"],s={title:"SubComponent destructor"},p=void 0,l={unversionedId:"core/component/subcomponent/destructor",id:"core/component/subcomponent/destructor",title:"SubComponent destructor",description:"Availability: SubComponent",source:"@site/../docs/core/component/subcomponent/destructor.md",sourceDirName:"core/component/subcomponent",slug:"/core/component/subcomponent/destructor",permalink:"/sst-docs/docs/core/component/subcomponent/destructor",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/component/subcomponent/destructor.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"SubComponent destructor"},sidebar:"Core API",previous:{title:"SubComponent constructor",permalink:"/sst-docs/docs/core/component/subcomponent/constructor"},next:{title:"SST::ComponentExtension",permalink:"/sst-docs/docs/core/component/componentext/class"}},u={},i=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Header",id:"header",level:2}],m={toc:i},d="wrapper";function b(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)(d,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"~SubComponent();\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Availability"),": SubComponent\nSST calls each subcomponent's destructor prior to exiting. Components should ",(0,a.kt)("em",{parentName:"p"},"not")," call a SubComponent's destructor manually. SubComponents are responsible for cleaning up internal state but not state registered with SST including links, clock handlers, and statistics. Note that some SSTCore state may have already been cleaned up when the destructor is called and so subcomponents should not attempt to call any SubComponent API functions in their destructors."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"returns")," none")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"example-1"},"Example 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"/* Source: simpleElementExample/basicSubComponent_subcomponent.h */\n\n#include <sst/core/subcomponent.h>\n\n// SubComponent API - define an API for a type of subcomponent\nclass basicSubComponentAPI : public SST::SubComponent \n{\npublic:\n    // Tell SST that this class is a SubComponent API\n    SST_ELI_REGISTER_SUBCOMPONENT_API(SST::simpleElementExample::basicSubComponentAPI)\n\n    basicSubComponentAPI(ComponentId_t id, Params& params) : SubComponent(id) {}\n    virtual ~basicSubComponentAPI() {}\n\n    virtual int compute (int num) =0;\n    virtual std::string compute (std::string comp) =0;\n};\n")),(0,a.kt)("h2",{id:"header"},"Header"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/subcomponent.h>\n")))}b.isMDXComponent=!0}}]);