"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6539],{55620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(74848),s=n(28453);const i={title:"print"},a=void 0,o={id:"core/unitalgebra/print",title:"print",description:"Print the UnitAlgebra to the argument stream.",source:"@site/../docs/core/unitalgebra/print.md",sourceDirName:"core/unitalgebra",slug:"/core/unitalgebra/print",permalink:"/sst-docs/docs/core/unitalgebra/print",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/unitalgebra/print.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1716583959e3,frontMatter:{title:"print"},sidebar:"core",previous:{title:"isValueZero",permalink:"/sst-docs/docs/core/unitalgebra/isValueZero"},next:{title:"printWithBestSI",permalink:"/sst-docs/docs/core/unitalgebra/printWithBestSI"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"void print(std::ostream& stream, int32_t precision = 6);\n"})}),"\n",(0,r.jsx)(t.p,{children:"Print the UnitAlgebra to the argument stream."}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"stream"})," (std::ostream&) Where to print the UnitAlgebra"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"precision"})," (int32_t) Number of digits to round output to. If ",(0,r.jsx)(t.code,{children:"precision <= 0"}),", does not round."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:'SST::UnitAlgebra num("4KiB");\nnum.print(std::stdout);\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",metastring:'title="Output"',children:"4096 B\n"})}),"\n",(0,r.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/unitalgebra.h>\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);