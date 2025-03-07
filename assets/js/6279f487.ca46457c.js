"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7190],{28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>a});var r=t(96540);const i={},l=r.createContext(i);function o(e){const s=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(l.Provider,{value:s},e.children)}},96533:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>n,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"core/eli/register/sst_eli_register_module_api","title":"SST_ELI_REGISTER_MODULE_API","description":"A module API defines the API for a particular variety of SST Modules. This macro is used to register a class that defines a module API with the SST Core. This class should also inherit from SST::Module. If instead this class inherits from another Module API, the SSTELIREGISTERMODULEDERIVEDAPI. A class may be both a module API and a module itself and include both registration macros. Modules that inherit from the registered API will also inherit any ELI documented by the API class.","source":"@site/../docs/core/eli/register/sst_eli_register_module_api.md","sourceDirName":"core/eli/register","slug":"/core/eli/register/sst_eli_register_module_api","permalink":"/sst-docs/docs/core/eli/register/sst_eli_register_module_api","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/eli/register/sst_eli_register_module_api.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1684522150000,"frontMatter":{"title":"SST_ELI_REGISTER_MODULE_API","sidebar_label":"Module API"},"sidebar":"core","previous":{"title":"Module","permalink":"/sst-docs/docs/core/eli/register/sst_eli_register_module"},"next":{"title":"Module Derived API","permalink":"/sst-docs/docs/core/eli/register/sst_eli_register_module_derived_api"}}');var i=t(74848),l=t(28453);const o={title:"SST_ELI_REGISTER_MODULE_API",sidebar_label:"Module API"},a=void 0,n={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"SST_ELI_REGISTER_MODULE_API(class_name)\n"})}),"\n",(0,i.jsxs)(s.p,{children:["A module API defines the API for a particular variety of SST Modules. This macro is used to register a class that defines a module API with the SST Core. This class should also inherit from ",(0,i.jsx)(s.code,{children:"SST::Module"}),". If instead this class inherits from another Module API, the ",(0,i.jsx)(s.a,{href:"sst_eli_register_module_derived_api",children:(0,i.jsx)(s.code,{children:"SST_ELI_REGISTER_MODULE_DERIVED_API"})}),". A class may be both a module API and a module itself and include both registration macros. Modules that inherit from the registered API will also inherit any ELI documented by the API class."]}),"\n",(0,i.jsx)(s.admonition,{title:"Important",type:"info",children:(0,i.jsxs)(s.p,{children:["This macro must reside in a ",(0,i.jsx)(s.code,{children:"public"})," section of the module API's header file."]})}),"\n",(0,i.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"class_name"})," (class) The name of the Module API class. This is not a string."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"class example1 : public SST::Module\n{\npublic:\n\n    SST_ELI_REGISTER_MODULE_API(SST::example1)\n\n    /* Rest of class */\n};\n"})}),"\n",(0,i.jsx)(s.h2,{id:"header",children:"Header"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"#include <sst/core/module.h>\n"})})]})}function u(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);