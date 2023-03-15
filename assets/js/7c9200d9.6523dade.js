"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6514],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(r),p=a,h=c["".concat(s,".").concat(p)]||c[p]||u[p]||i;return r?n.createElement(h,o(o({ref:t},m),{},{components:r})):n.createElement(h,o({ref:t},m))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8876:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={title:"SST_ELI_REGISTER_MODULE_DERIVED",sidebar_label:"Module Derived"},s=void 0,d={unversionedId:"core/eli/register/sst_eli_register_module_derived",id:"core/eli/register/sst_eli_register_module_derived",title:"SST_ELI_REGISTER_MODULE_DERIVED",description:'All modules must register themselves with SST using this macro. The library and name strings provided in this macro will be used by SST to identify the macro as "library.name". The version and description are displayed by sst-info to document the purpose and version of the Module. The apiclassname field is used to enable ELI inheritance.',source:"@site/../docs/core/eli/register/sst_eli_register_module_derived.md",sourceDirName:"core/eli/register",slug:"/core/eli/register/sst_eli_register_module_derived",permalink:"/sst-docs/docs/core/eli/register/sst_eli_register_module_derived",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/eli/register/sst_eli_register_module_derived.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1678138197,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{title:"SST_ELI_REGISTER_MODULE_DERIVED",sidebar_label:"Module Derived"},sidebar:"Core API",previous:{title:"Module",permalink:"/sst-docs/docs/core/eli/register/sst_eli_register_module"},next:{title:"Module API",permalink:"/sst-docs/docs/core/eli/register/sst_eli_register_module_api"}},m={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Header",id:"header",level:2}],u={toc:c},p="wrapper";function h(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'SST_ELI_REGISTER_MODULE_DERIVED(class_name, "library", "name", \n    SST_ELI_ELEMENT_VERSION(major, minorX, minorY), "description", api_class_name)\n')),(0,i.kt)("p",null,'All modules must register themselves with SST using this macro. The library and name strings provided in this macro will be used by SST to identify the macro as "library.name". The version and description are displayed by ',(0,i.kt)("inlineCode",{parentName:"p"},"sst-info")," to document the purpose and version of the Module. The api_class_name field is used to enable ELI inheritance."),(0,i.kt)("admonition",{title:"Important",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This macro must reside in a ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," section of the Module's header file.")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"class_name")," (class) The name of the Module class. This is not a string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"library")," (string) The name of the library that this Module belongs to. If the library name does not exist, it will be created."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"name")," (string) The name that will be used to instantiate this Module in the simulation input configuration. It can be the same as the class_name but does not need to be. The full name of the Module will be ",(0,i.kt)("inlineCode",{parentName:"li"},"library.name"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SST_ELI_ELEMENT_VERSION(major, minorX, minorY)")," This is a macro that specifies the version of a Module. ",(0,i.kt)("inlineCode",{parentName:"li"},"major"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"minorX"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"minorY")," are integers that form a version number major.minorX.minorY. For example: SST_ELI_ELEMENT_VERSION(3, 0, 9) yields a version of 3.0.9. Versions are not checked by SST, this is provided for developers to version and manage their libraries."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description")," (string) A description of the module"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"api_class_name")," (class) The fully qualified name of the module's API class. This is not a string")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"example-1"},"Example 1"),(0,i.kt)("p",null,"In this example, AModuleAPI is a Module API class. AnActualModule is an SST Module that inherits from AModuleAPI and inherits its ELI parameter as well."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <sst/core/module.h>\n\nnamespace SST {\nclass AModuleAPI : public SST::Module\n{\npublic:\n    SST_ELI_REGISTER_MODULE_API(SST::AModuleAPI)\n\n    SST_ELI_DOCUMENT_PARAMS(\n        { "count", "The count of something", 20 }\n    )\n\n    /* Rest of class here */\n};\n\nclass AnActualModule : public SST::AModuleAPI\n{\npublic:\n\n    /* SST_ELI_REGISTER_MODULE is deprecated for the moment so that we can \n     * change its signature, use SST_ELI_REGISTER_MODULE_DERIVED instead */\n    SST_ELI_REGISTER_MODULE_DERIVED(\n        AnActualModule,                 // Module class\n        "exampleLibrary",               // Element library (for Python/library lookup)\n        "mymodule",                     // Module name (for Python/library lookup)\n        SST_ELI_ELEMENT_VERSION(1,0,0), // Version of the component (not related to SST version)\n        "Example of ELI inheritance",   // Description\n        SST::AModuleAPI                 // Module API\n    )\n    \n    SST_ELI_DOCUMENT_PARAMS(\n      { "name", "A name for this module" }\n    )\n\n    /* The module \'exampleLibrary.mymodule\' will have two parameters: \'count\' and \'name\' */\n\n/* Rest of class */\n};\n} /* End namespace SST */\n')),(0,i.kt)("h2",{id:"header"},"Header"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/module.h>\n")))}h.isMDXComponent=!0}}]);