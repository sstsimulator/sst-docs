"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9162],{56892:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=o(74848),n=o(28453);const s={title:"SST_ELI_REGISTER_PROFILETOOL",sidebar_label:"Profile Tool"},t=void 0,l={id:"core/eli/register/sst_eli_register_profiletool",title:"SST_ELI_REGISTER_PROFILETOOL",description:'This macro is used to register a profiling tool with SST. The library and name strings provided in this macro will be used by SST to identify the tool as "library.name". The version and description are displayed',source:"@site/../docs/core/eli/register/sst_eli_register_profiletool.md",sourceDirName:"core/eli/register",slug:"/core/eli/register/sst_eli_register_profiletool",permalink:"/sst-docs/docs/core/eli/register/sst_eli_register_profiletool",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/eli/register/sst_eli_register_profiletool.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:169594075e4,frontMatter:{title:"SST_ELI_REGISTER_PROFILETOOL",sidebar_label:"Profile Tool"},sidebar:"core",previous:{title:"Module Derived API",permalink:"/sst-docs/docs/core/eli/register/sst_eli_register_module_derived_api"},next:{title:"Python Module",permalink:"/sst-docs/docs/core/eli/register/sst_eli_register_python_module"}},a={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const i={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cpp",children:'SST_ELI_REGISTER_PROFILETOOL(class_name, profile_api, "library", "name",\n    SST_ELI_ELEMENT_VERSION(major, minorX, minorY), "description")\n'})}),"\n",(0,r.jsxs)(i.p,{children:['This macro is used to register a profiling tool with SST. The library and name strings provided in this macro will be used by SST to identify the tool as "library.name". The version and description are displayed\nby ',(0,r.jsx)(i.code,{children:"sst-info"})," to document the purpose and version of the profile tool. The profile_api parameter identifies which API this tool implements which controls which profiling points it can be loaded in to."]}),"\n",(0,r.jsx)(i.admonition,{title:"Important",type:"info",children:(0,r.jsxs)(i.p,{children:["This macro must reside in a ",(0,r.jsx)(i.code,{children:"public"})," section of the tool's header file."]})}),"\n",(0,r.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"class_name"})," (class) The name of the profiling tool class. This is not a string."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"profile_api"})," (class) The name of the profiling API that this tool implements. This is not a string."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"library"})," (string) The name of the library that this tool belongs to. If the library name does not exist, it will be created."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"name"})," (string) The name that will be used to instantiate this tool in the simulation input configuration. It can be the same as the class_name but does not need to be. The full name of the tool will be ",(0,r.jsx)(i.code,{children:"library.name"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"SST_ELI_ELEMENT_VERSION(major, minorX, minorY)"})," This is a macro that specifies the version of a tool. ",(0,r.jsx)(i.code,{children:"major"}),", ",(0,r.jsx)(i.code,{children:"minorX"}),", and ",(0,r.jsx)(i.code,{children:"minorY"})," are integers that form a version number major.minorX.minorY. For example: SST_ELI_ELEMENT_VERSION(3, 0, 9) yields a version of 3.0.9. Versions are not checked by SST, this is provided for developers to version and manage their libraries."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"description"})," (string) A description of the tool"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cpp",children:'class CodeSegmentCounter: public SST::ComponentCodeSegmentProfileTool\n{\npublic:\n\n    SST_ELI_REGISTER_PROFILETOOL(\n        CodeSegmentCounter,                     // Profiler class\n        SST::ComponentCodeSegmentProfileTool,   // Profiler API\n        "simpleElementExample",                 // Profiler library (for Python/library lookup)\n        "example1",                             // Profiler name (for Python/library lookup)\n        SST_ELI_ELEMENT_VERSION(1,0,0),         // Version of the profiler (not related to SST version)\n        "Example #2, statistics & RNG",         // Description\n    )\n\n/* Rest of class */\n};\n'})}),"\n",(0,r.jsx)(i.h2,{id:"header",children:"Header"}),"\n",(0,r.jsx)(i.p,{children:"Varies by profiling API"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cpp",children:"#include <sst/core/profile/clockHandlerProfileTool.h>\n#include <sst/core/profile/componentProfileTool.h>\n#include <sst/core/profile/eventHandlerProfileTool.h>\n#include <sst/core/profile/syncProfileTool.h>\n#include <sst/core/profile/profiletool.h>\n"})})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,i,o)=>{o.d(i,{R:()=>t,x:()=>l});var r=o(96540);const n={},s=r.createContext(n);function t(e){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);