"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3933],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>_});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(r),m=l,_=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return r?n.createElement(_,o(o({ref:t},d),{},{components:r})):n.createElement(_,o({ref:t},d))}));function _(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,o=new Array(i);o[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:l,o[1]=a;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96254:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(87462),l=(r(67294),r(3905));const i={title:"SST_ELI_REGISTER_MODULE_DERIVED_API",sidebar_label:"Module Derived API"},o=void 0,a={unversionedId:"core/eli/register/sst_eli_register_module_derived_api",id:"core/eli/register/sst_eli_register_module_derived_api",title:"SST_ELI_REGISTER_MODULE_DERIVED_API",description:'If a module API inherits from another module API, the "derived" or child API should use this macro to register itself. Modules that implement the API registered in this call will inherit all ELI documented by this API as well as any the API inherits from.',source:"@site/../docs/core/eli/register/sst_eli_register_module_derived_api.md",sourceDirName:"core/eli/register",slug:"/core/eli/register/sst_eli_register_module_derived_api",permalink:"/sst-docs/docs/core/eli/register/sst_eli_register_module_derived_api",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/eli/register/sst_eli_register_module_derived_api.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"SST_ELI_REGISTER_MODULE_DERIVED_API",sidebar_label:"Module Derived API"},sidebar:"core",previous:{title:"Module API",permalink:"/sst-docs/docs/core/eli/register/sst_eli_register_module_api"},next:{title:"Profile Tool",permalink:"/sst-docs/docs/core/eli/register/sst_eli_register_profiletool"}},s={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"SST_ELI_REGISTER_MODULE_DERIVED_API(class_name, parent_class_name)\n")),(0,l.kt)("p",null,'If a module API inherits from another module API, the "derived" or child API should use this macro to register itself. Modules that implement the API registered in this call will inherit all ELI documented by this API as well as any the API inherits from.'),(0,l.kt)("admonition",{title:"Important",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This macro must reside in a ",(0,l.kt)("inlineCode",{parentName:"p"},"public")," section of the module API's header file.")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"class_name")," (class) The fully qualified name of the calling class. This is not a string."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"parent_class_name")," (class) The fully qualified name of the parent class. This API should also be registered with the SST Core.")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"In this example, AModuleAPI is a Module API class. AMoreSpecificModuleAPI is another Module API class that inherits from AModuleAPI. AnActualModule is an SST Module that inherits from AMoreSpecificModuleAPI. The module inherits the parameters from both its parent classes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <sst/core/module.h>\n\nnamespace SST {\nclass AModuleAPI : public SST::Module\n{\npublic:\n    SST_ELI_REGISTER_MODULE_API(SST::AModuleAPI)\n\n    SST_ELI_DOCUMENT_PARAMS(\n        { "count", "The count of something", 20 }\n    )\n\n    /* Rest of class here */\n};\n\nclass AMoreSpecificModuleAPI : public SST::AModuleAPI\n{\npublic:\n//highlight-next-line\n    SST_ELI_REGISTER_MODULE_DERIVED_API(SST::AMoreSpecificModuleAPI, SST::AModuleAPI)\n\n    SST_ELI_DOCUMENT_PARAMS(\n      { "name", "A name for this module" }\n    )\n\n    /* Rest of class */\n};\n\nclass AnActualModule : public SST::AMoreSpecificModuleAPI\n{\npublic:\n\n    SST_ELI_REGISTER_MODULE(\n        AnActualModule,                     // Module class\n        "exampleLibrary",                   // Element library (for Python/library lookup)\n        "mymodule",                         // Module name (for Python/library lookup)\n        SST_ELI_ELEMENT_VERSION(1,0,0),     // Version of the component (not related to SST version)\n        "Example of ELI inheritance",       // Description\n        SST::AMoreSpecificModuleAPI         // Module API\n    )\n\n    /* The module \'exampleLibrary.mymodule\' will have two parameters: \'count\' and \'name\' */\n\n/* Rest of class */\n};\n} /* End namespace SST */\n')),(0,l.kt)("h2",{id:"header"},"Header"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/module.h>\n")))}p.isMDXComponent=!0}}]);