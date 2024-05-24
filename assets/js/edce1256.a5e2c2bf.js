"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[620],{80041:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(74848),l=r(28453);const a={title:"operator*="},i=void 0,s={id:"core/unitalgebra/operatormul",title:"operator*=",description:"Multiply this UnitAlgebra by the argument. The units will also be multiplied if the argument is a UnitAlgebra, otherwise only the value is multiplied.",source:"@site/../docs/core/unitalgebra/operatormul.md",sourceDirName:"core/unitalgebra",slug:"/core/unitalgebra/operatormul",permalink:"/sst-docs/docs/core/unitalgebra/operatormul",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/unitalgebra/operatormul.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:168452215e4,frontMatter:{title:"operator*="},sidebar:"core",previous:{title:"operator-=",permalink:"/sst-docs/docs/core/unitalgebra/operatorsub"},next:{title:"operator/=",permalink:"/sst-docs/docs/core/unitalgebra/operatordiv"}},o={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function u(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"UnitAlgebra& operator*=(const UnitAlgebra& v);\ntemplate <typename T> UnitAlgebra& operator*= (const T& v);\n"})}),"\n",(0,n.jsx)(t.p,{children:"Multiply this UnitAlgebra by the argument. The units will also be multiplied if the argument is a UnitAlgebra, otherwise only the value is multiplied."}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"v"})," (UnitAlgebra) value to multiply by."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"v"})," (typename T) value to multiply by"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"returns"})," (UnitAlgebra&) This UnitAlgebra after the multiplication operation."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:'// Convert from bytes (B) to bits (b)\nSST::UnitAlgebra num0("100B");\nnum0 *= UnitAlgebra("8b/B");\n// num0 = 800b\n'})}),"\n",(0,n.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/unitalgebra.h>\n"})})]})}function d(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var n=r(96540);const l={},a=n.createContext(l);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);