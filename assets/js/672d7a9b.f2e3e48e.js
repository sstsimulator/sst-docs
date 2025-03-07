"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48249],{28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>c});var t=o(96540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}},63134:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"core/component/load/doesSubComponentExist","title":"doesSubComponentExist","description":"Availability: Component, SubComponent, ComponentExtension","source":"@site/../docs/core/component/load/doesSubComponentExist.md","sourceDirName":"core/component/load","slug":"/core/component/load/doesSubComponentExist","permalink":"/sst-docs/docs/core/component/load/doesSubComponentExist","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/load/doesSubComponentExist.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1684522150000,"frontMatter":{"title":"doesSubComponentExist"},"sidebar":"core","previous":{"title":"isSubComponentLoadableUsingAPI","permalink":"/sst-docs/docs/core/component/load/isSubComponentLoadableUsingAPI"},"next":{"title":"loadComponentExtension","permalink":"/sst-docs/docs/core/component/load/loadComponentExtension"}}');var s=o(74848),r=o(28453);const i={title:"doesSubComponentExist"},c=void 0,l={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function a(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"bool doesSubComponentExist(const std::string& type);\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Availability:"})," Component, SubComponent, ComponentExtension"]}),"\n",(0,s.jsx)(n.p,{children:"Determine whether a SubComponent of the specified type is known to SST."}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"type"})," (string) Type of SST SubComponent in ",(0,s.jsx)(n.code,{children:"lib.type"})," format"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"returns"})," (bool) True if SubComponent exists, otherwise false"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'if (doesSubComponentExist("simpleElementExample.basicSubComponentIncrement")) {\n    // load this one\n} else {\n    // maybe error, or load a default that we know exists instead\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}}}]);