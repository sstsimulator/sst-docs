"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2781],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(r),m=i,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||n;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var d=2;d<n;d++)s[d]=r[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var a=r(87462),i=(r(67294),r(3905));const n={title:"SST_ELI_REGISTER_MODULE_API",sidebar_label:"Module API"},s=void 0,o={unversionedId:"core/eli/register/sst_eli_register_module_api",id:"core/eli/register/sst_eli_register_module_api",title:"SST_ELI_REGISTER_MODULE_API",description:"A module API defines the API for a particular variety of SST Modules. This macro is used to register a class that defines a module API with the SST Core. This class should also inherit from SST::Module. If instead this class inherits from another Module API, the SSTELIREGISTERMODULEDERIVEDAPI. A class may be both a module API and a module itself and include both registration macros. Modules that inherit from the registered API will also inherit any ELI documented by the API class.",source:"@site/../docs/core/eli/register/sst_eli_register_module_api.md",sourceDirName:"core/eli/register",slug:"/core/eli/register/sst_eli_register_module_api",permalink:"/sst-docs/docs/core/eli/register/sst_eli_register_module_api",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/eli/register/sst_eli_register_module_api.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"SST_ELI_REGISTER_MODULE_API",sidebar_label:"Module API"},sidebar:"core",previous:{title:"Module Derived",permalink:"/sst-docs/docs/core/eli/register/sst_eli_register_module_derived"},next:{title:"Module Derived API",permalink:"/sst-docs/docs/core/eli/register/sst_eli_register_module_derived_api"}},l={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"SST_ELI_REGISTER_MODULE_API(class_name)\n")),(0,i.kt)("p",null,"A module API defines the API for a particular variety of SST Modules. This macro is used to register a class that defines a module API with the SST Core. This class should also inherit from ",(0,i.kt)("inlineCode",{parentName:"p"},"SST::Module"),". If instead this class inherits from another Module API, the ",(0,i.kt)("a",{parentName:"p",href:"sst_eli_register_module_derived_api"},(0,i.kt)("inlineCode",{parentName:"a"},"SST_ELI_REGISTER_MODULE_DERIVED_API")),". A class may be both a module API and a module itself and include both registration macros. Modules that inherit from the registered API will also inherit any ELI documented by the API class."),(0,i.kt)("admonition",{title:"Important",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This macro must reside in a ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," section of the module API's header file.")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"class_name")," (class) The name of the Module API class. This is not a string.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class example1 : public SST::Module\n{\npublic:\n\n    SST_ELI_REGISTER_MODULE_API(SST::example1)\n\n    /* Rest of class */\n};\n")),(0,i.kt)("h2",{id:"header"},"Header"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/module.h>\n")))}p.isMDXComponent=!0}}]);