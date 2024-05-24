"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9890],{89858:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=r(74848),s=r(28453);const o={title:"operator<="},a=void 0,l={id:"core/unitalgebra/complteq",title:"operator<=",description:"Compare if this object is less than or equal to the argument v.",source:"@site/../docs/core/unitalgebra/complteq.md",sourceDirName:"core/unitalgebra",slug:"/core/unitalgebra/complteq",permalink:"/sst-docs/docs/core/unitalgebra/complteq",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/unitalgebra/complteq.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:168452215e4,frontMatter:{title:"operator<="},sidebar:"core",previous:{title:"operator<",permalink:"/sst-docs/docs/core/unitalgebra/complt"},next:{title:"invert",permalink:"/sst-docs/docs/core/unitalgebra/invert"}},c={},i=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"bool operator<=(const UnitAlgebra& v) const;\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Compare if this object is less than or equal to the argument ",(0,n.jsx)(t.code,{children:"v"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"v"})," (UnitAlgebra) Object to compare to"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"returns"})," (bool) Whether this object is less than the argument."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:'SST::UnitAlgebra* num0 = new UnitAlgebra("1bps");\nSST::UnitAlgebra* num1 = new UnitAlgebra("2b/s");\n\nsst_assert(num0 <= num1, CALL_INFO, -1, "Error: num0 is definitely <= num1!!");\n'})}),"\n",(0,n.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/unitalgebra.h>\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>l});var n=r(96540);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);