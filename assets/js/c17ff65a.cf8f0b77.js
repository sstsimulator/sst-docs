"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63486],{20593:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"core/eli/register/sst_eli_register_component","title":"SST_ELI_REGISTER_COMPONENT","description":"All components must register themselves with SST using this macro. The library and name strings provided in this macro","source":"@site/../docs/core/eli/register/sst_eli_register_component.md","sourceDirName":"core/eli/register","slug":"/core/eli/register/sst_eli_register_component","permalink":"/sst-docs/docs/core/eli/register/sst_eli_register_component","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/eli/register/sst_eli_register_component.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1684522150000,"frontMatter":{"title":"SST_ELI_REGISTER_COMPONENT","sidebar_label":"Component"},"sidebar":"core","previous":{"title":"Register","permalink":"/sst-docs/docs/category/register"},"next":{"title":"Component Base","permalink":"/sst-docs/docs/core/eli/register/sst_eli_register_component_base"}}');var r=s(74848),i=s(28453);const o={title:"SST_ELI_REGISTER_COMPONENT",sidebar_label:"Component"},l=void 0,a={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'SST_ELI_REGISTER_COMPONENT(class_name, "library", "name", \n    SST_ELI_ELEMENT_VERSION(major, minorX, minorY), "description", CATEGORY)\n'})}),"\n",(0,r.jsxs)(n.p,{children:['All components must register themselves with SST using this macro. The library and name strings provided in this macro\nwill be used by SST to identify the component as "library.name". The version, description, and category are displayed\nby ',(0,r.jsx)(n.code,{children:"sst-info"})," to document the purpose and version of the Component."]}),"\n",(0,r.jsx)(n.admonition,{title:"Important",type:"info",children:(0,r.jsxs)(n.p,{children:["This macro must reside in a ",(0,r.jsx)(n.code,{children:"public"})," section of the Component's header file."]})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"class_name"})," (class) The name of the Component class. This is not a string."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"library"})," (string) The name of the library that this Component belongs to. If the library name does not exist, it will be created."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"name"})," (string) The name that will be used to instantiate this Component in the simulation input configuration. It can be the same as the class_name but does not need to be. The full name of the Component will be ",(0,r.jsx)(n.code,{children:"library.name"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"SST_ELI_ELEMENT_VERSION(major, minorX, minorY)"})," This is a macro that specifies the version of a Component. ",(0,r.jsx)(n.code,{children:"major"}),", ",(0,r.jsx)(n.code,{children:"minorX"}),", and ",(0,r.jsx)(n.code,{children:"minorY"})," are integers that form a version number major.minorX.minorY. For example: SST_ELI_ELEMENT_VERSION(3, 0, 9) yields a version of 3.0.9. Versions are not checked by SST, this is provided for developers to version and manage their libraries."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"description"})," (string) A description of the component"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"CATEGORY"})," (CATEGORY) One of a few built-in component categories. This is provided to help users search for components of interest. Options are:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"COMPONENT_CATEGORY_UNCATEGORIZED"}),"\n",(0,r.jsx)(n.li,{children:"COMPONENT_CATEGORY_PROCESSOR"}),"\n",(0,r.jsx)(n.li,{children:"COMPONENT_CATEGORY_MEMORY"}),"\n",(0,r.jsx)(n.li,{children:"COMPONENT_CATEGORY_NETWORK"}),"\n",(0,r.jsx)(n.li,{children:"COMPONENT_CATEGORY_SYSTEM"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'class example1 : public SST::Component\n{\npublic:\n\n    SST_ELI_REGISTER_COMPONENT(\n        example1,                           // Component class\n        "simpleElementExample",             // Component library (for Python/library lookup)\n        "example1",                         // Component name (for Python/library lookup)\n        SST_ELI_ELEMENT_VERSION(1,0,0),     // Version of the component (not related to SST version)\n        "Example #2, statistics & RNG",     // Description\n        COMPONENT_CATEGORY_UNCATEGORIZED    // Category\n    )\n\n/* Rest of class */\n};\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"#include <src/sst/component.h>\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(96540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);