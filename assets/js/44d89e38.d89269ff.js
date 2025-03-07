"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30308],{28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var t=s(96540);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}},48676:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"core/eli/other/sst_eli_element_version","title":"SST_ELI_ELEMENT_VERSION","description":"This macro is used inside some of the SST registration macros to assign a version to SST objects. The version is not checked by SST and does not need to match the SST version. The macro is provided to assist element library developers with versioning and managing compatibility between libraries. The macro takes a triple of numbers which are converted to an X.Y.Z version number.","source":"@site/../docs/core/eli/other/sst_eli_element_version.md","sourceDirName":"core/eli/other","slug":"/core/eli/other/sst_eli_element_version","permalink":"/sst-docs/docs/core/eli/other/sst_eli_element_version","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/eli/other/sst_eli_element_version.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1684522150000,"frontMatter":{"title":"SST_ELI_ELEMENT_VERSION","sidebar_label":"Versioning"},"sidebar":"core","previous":{"title":"Component Categories","permalink":"/sst-docs/docs/core/eli/other/sst_eli_category_info"},"next":{"title":"Export ELI","permalink":"/sst-docs/docs/core/eli/other/sst_eli_export"}}');var o=s(74848),r=s(28453);const i={title:"SST_ELI_ELEMENT_VERSION",sidebar_label:"Versioning"},l=void 0,a={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"SST_ELI_ELEMENT_VERSION(majorX, minorY, minorZ)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This macro is used inside some of the SST registration macros to assign a version to SST objects. The version is ",(0,o.jsx)(n.em,{children:"not"})," checked by SST and does not need to match the SST version. The macro is provided to assist element library developers with versioning and managing compatibility between libraries. The macro takes a triple of numbers which are converted to an X.Y.Z version number."]}),"\n",(0,o.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"majorX"})," (int) The major version number"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"minorY"})," (int) The minor version number"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"minorZ"})," (int) An additional minor version number"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:'class example1 : public SST::Component\n{\npublic:\n\n    SST_ELI_REGISTER_COMPONENT(\n        example1,                           \n        "simpleElementExample",             \n        "example1",                         \n        SST_ELI_ELEMENT_VERSION(1,0,0),     // Version of the component will be "1.0.0"\n        "Example #2, statistics & RNG",     \n        COMPONENT_CATEGORY_UNCATEGORIZED    \n    )\n\n/* Rest of class */\n};\n\n'})}),"\n",(0,o.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/module.h> // or\n#include <sst/core/profiletool.h> // or\n#include <sst/core/module/element_python.h>\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);