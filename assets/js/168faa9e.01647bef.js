"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6051],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>S});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,S=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(S,i(i({ref:t},c),{},{components:n})):r.createElement(S,i({ref:t},c))}));function S(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>S,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"SST_ELI_REGISTER_SUBCOMPONENT_DERIVED_API",sidebar_label:"SubComponent Derived API"},l=void 0,p={unversionedId:"core/eli/register/sst_eli_register_subcomponent_derived_api",id:"core/eli/register/sst_eli_register_subcomponent_derived_api",title:"SST_ELI_REGISTER_SUBCOMPONENT_DERIVED_API",description:'If a subcomponent API inherits from another subcomponent API, the "derived" or child API should use this macro to register itself. SubComponents that implement the API registered in this call will inherit all ELI documented by this API as well as any the API inherits from.',source:"@site/../docs/core/eli/register/sst_eli_register_subcomponent_derived_api.md",sourceDirName:"core/eli/register",slug:"/core/eli/register/sst_eli_register_subcomponent_derived_api",permalink:"/sst-docs/docs/core/eli/register/sst_eli_register_subcomponent_derived_api",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/eli/register/sst_eli_register_subcomponent_derived_api.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1678138197,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{title:"SST_ELI_REGISTER_SUBCOMPONENT_DERIVED_API",sidebar_label:"SubComponent Derived API"},sidebar:"Core API",previous:{title:"SubComponent API",permalink:"/sst-docs/docs/core/eli/register/sst_eli_register_subcomponent_api"},next:{title:"Module",permalink:"/sst-docs/docs/core/eli/register/sst_eli_register_module"}},c={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Header",id:"header",level:2}],u={toc:m},d="wrapper";function S(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"SST_ELI_REGISTER_SUBCOMPONENT_DERIVED_API(class_name, parent_class_name)\n")),(0,a.kt)("p",null,'If a subcomponent API inherits from another subcomponent API, the "derived" or child API should use this macro to register itself. SubComponents that implement the API registered in this call will inherit all ELI documented by this API as well as any the API inherits from.'),(0,a.kt)("admonition",{title:"Important",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This macro must reside in a ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," section of the SubComponent API's header file.")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"class_name")," (class) The fully qualified name of the calling class. This is not a string."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"parent_class_name")," (class) The fully qualified name of the parent class. This API should also be registered with the SST Core.")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"example-1"},"Example 1"),(0,a.kt)("p",null,"In this example, ASubComponentAPI is a SubComponent API class. AMoreSpecificSubComponentAPI is another SubComponent API class that inherits from ASubCompponentAPI. AnActualSubComponent is an SST SubComponent that inherits from AMoreSpecificSubComponentAPI. The subcomponent inherits the parameters from both its parent classes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <sst/core/subcomponent.h>\n\nnamespace SST {\nclass ASubComponentAPI : public SST::SubComponent\n{\npublic:\n    SST_ELI_REGISTER_SUBCOMPONENT_API(SST::ASubComponentAPI)\n\n    SST_ELI_DOCUMENT_PARAMS(\n        { "count", "The count of something", 20 }\n    )\n\n    /* Rest of class here */\n};\n\nclass AMoreSpecificSubComponentAPI : public SST::ASubComponentAPI\n{\npublic:\n    SST_ELI_REGISTER_SUBCOMPONENT_DERIVED_API(SST::AMoreSpecificSubComponentAPI, SST::ASubComponentAPI)\n\n    SST_ELI_DOCUMENT_PARAMS(\n      { "name", "A name for this subcomponent" }\n    )\n\n    /* Rest of class */\n};\n\nclass AnActualSubComponent : public SST::AMoreSpecificSubComponentAPI\n{\npublic:\n\n    SST_ELI_REGISTER_SUBCOMPONENTD(\n        AnActualSubComponent,               // SubComponent class\n        "exampleLibrary",                   // Element library (for Python/library lookup)\n        "mysub",                            // SubCompponent name (for Python/library lookup)\n        SST_ELI_ELEMENT_VERSION(1,0,0),     // Version of the component (not related to SST version)\n        "Example of ELI inheritance",       // Description\n        SST::AMoreSpecificSubComponentAPI   // SubComponent API\n    )\n\n    /* The subcomponent \'exampleLibrary.mysub\' will have two parameters: \'count\' and \'name\' */\n\n/* Rest of class */\n};\n} /* End namespace SST */\n')),(0,a.kt)("h2",{id:"header"},"Header"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/subcomponent.h>\n")))}S.isMDXComponent=!0}}]);