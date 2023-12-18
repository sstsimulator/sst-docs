"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1951],{7414:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=t(85893),s=t(11151);const a={title:"SST_ELI_CATEGORY_INFO",sidebar_label:"Component Categories"},r=void 0,i={id:"core/eli/other/sst_eli_category_info",title:"SST_ELI_CATEGORY_INFO",description:"Component categories are a set of common categories that architectural components fall in. Each component must have a category assigned in SSTELIREGISTERCOMPONENT. These categories are used to help document components and are displayed when running sst-info. The available categories are shown above.",source:"@site/../docs/core/eli/other/sst_eli_category_info.md",sourceDirName:"core/eli/other",slug:"/core/eli/other/sst_eli_category_info",permalink:"/sst-docs/docs/core/eli/other/sst_eli_category_info",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/eli/other/sst_eli_category_info.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"SST_ELI_CATEGORY_INFO",sidebar_label:"Component Categories"},sidebar:"core",previous:{title:"Other",permalink:"/sst-docs/docs/category/other"},next:{title:"Versioning",permalink:"/sst-docs/docs/core/eli/other/sst_eli_element_version"}},c={},l=[{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"#define COMPONENT_CATEGORY_UNCATEGORIZED    0x00\n#define COMPONENT_CATEGORY_PROCESSOR        0x01\n#define COMPONENT_CATEGORY_MEMORY           0x02\n#define COMPONENT_CATEGORY_NETWORK          0x04\n#define COMPONENT_CATEGORY_SYSTEM           0x08\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Component categories are a set of common categories that architectural components fall in. Each component must have a category assigned in ",(0,o.jsx)(n.a,{href:"../register/sst_eli_register_component",children:(0,o.jsx)(n.code,{children:"SST_ELI_REGISTER_COMPONENT"})}),". These categories are used to help document components and are displayed when running ",(0,o.jsx)(n.code,{children:"sst-info"}),". The available categories are shown above."]}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:'class example1 : public SST::Component\n{\npublic:\n\n    SST_ELI_REGISTER_COMPONENT(\n        example1,                           // Component class\n        "simpleElementExample",             // Component library (for Python/library lookup)\n        "example1",                         // Component name (for Python/library lookup)\n        SST_ELI_ELEMENT_VERSION(1,0,0),     // Version of the component (not related to SST version)\n        "Example #2, statistics & RNG",     // Description\n        COMPONENT_CATEGORY_UNCATEGORIZED    // Category - uncategorized because this is an example, not an architectural component\n    )\n\n/* Rest of class */\n};\n\n'})}),"\n",(0,o.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"#include <src/sst/component.h>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var o=t(67294);const s={},a=o.createContext(s);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);