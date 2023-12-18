"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3933],{19380:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=t(85893),i=t(11151);const l={title:"SST_ELI_REGISTER_MODULE_DERIVED_API",sidebar_label:"Module Derived API"},r=void 0,o={id:"core/eli/register/sst_eli_register_module_derived_api",title:"SST_ELI_REGISTER_MODULE_DERIVED_API",description:'If a module API inherits from another module API, the "derived" or child API should use this macro to register itself. Modules that implement the API registered in this call will inherit all ELI documented by this API as well as any the API inherits from.',source:"@site/../docs/core/eli/register/sst_eli_register_module_derived_api.md",sourceDirName:"core/eli/register",slug:"/core/eli/register/sst_eli_register_module_derived_api",permalink:"/sst-docs/docs/core/eli/register/sst_eli_register_module_derived_api",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/eli/register/sst_eli_register_module_derived_api.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"SST_ELI_REGISTER_MODULE_DERIVED_API",sidebar_label:"Module Derived API"},sidebar:"core",previous:{title:"Module API",permalink:"/sst-docs/docs/core/eli/register/sst_eli_register_module_api"},next:{title:"Profile Tool",permalink:"/sst-docs/docs/core/eli/register/sst_eli_register_profiletool"}},a={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function c(e){const s={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-cpp",children:"SST_ELI_REGISTER_MODULE_DERIVED_API(class_name, parent_class_name)\n"})}),"\n",(0,n.jsx)(s.p,{children:'If a module API inherits from another module API, the "derived" or child API should use this macro to register itself. Modules that implement the API registered in this call will inherit all ELI documented by this API as well as any the API inherits from.'}),"\n",(0,n.jsx)(s.admonition,{title:"Important",type:"info",children:(0,n.jsxs)(s.p,{children:["This macro must reside in a ",(0,n.jsx)(s.code,{children:"public"})," section of the module API's header file."]})}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"class_name"})," (class) The fully qualified name of the calling class. This is not a string."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"parent_class_name"})," (class) The fully qualified name of the parent class. This API should also be registered with the SST Core."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(s.p,{children:"In this example, AModuleAPI is a Module API class. AMoreSpecificModuleAPI is another Module API class that inherits from AModuleAPI. AnActualModule is an SST Module that inherits from AMoreSpecificModuleAPI. The module inherits the parameters from both its parent classes."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-cpp",children:'#include <sst/core/module.h>\n\nnamespace SST {\nclass AModuleAPI : public SST::Module\n{\npublic:\n    SST_ELI_REGISTER_MODULE_API(SST::AModuleAPI)\n\n    SST_ELI_DOCUMENT_PARAMS(\n        { "count", "The count of something", 20 }\n    )\n\n    /* Rest of class here */\n};\n\nclass AMoreSpecificModuleAPI : public SST::AModuleAPI\n{\npublic:\n//highlight-next-line\n    SST_ELI_REGISTER_MODULE_DERIVED_API(SST::AMoreSpecificModuleAPI, SST::AModuleAPI)\n\n    SST_ELI_DOCUMENT_PARAMS(\n      { "name", "A name for this module" }\n    )\n\n    /* Rest of class */\n};\n\nclass AnActualModule : public SST::AMoreSpecificModuleAPI\n{\npublic:\n\n    SST_ELI_REGISTER_MODULE(\n        AnActualModule,                     // Module class\n        "exampleLibrary",                   // Element library (for Python/library lookup)\n        "mymodule",                         // Module name (for Python/library lookup)\n        SST_ELI_ELEMENT_VERSION(1,0,0),     // Version of the component (not related to SST version)\n        "Example of ELI inheritance",       // Description\n        SST::AMoreSpecificModuleAPI         // Module API\n    )\n\n    /* The module \'exampleLibrary.mymodule\' will have two parameters: \'count\' and \'name\' */\n\n/* Rest of class */\n};\n} /* End namespace SST */\n'})}),"\n",(0,n.jsx)(s.h2,{id:"header",children:"Header"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-cpp",children:"#include <sst/core/module.h>\n"})})]})}function u(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>r});var n=t(67294);const i={},l=n.createContext(i);function r(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);