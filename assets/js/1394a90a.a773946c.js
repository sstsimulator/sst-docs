"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8731],{28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>c});var n=r(96540);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}},33305:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>n,toc:()=>i});const n=JSON.parse('{"id":"core/unitalgebra/complt","title":"operator<","description":"Compare if this object is less than to the argument v.","source":"@site/../docs/core/unitalgebra/complt.md","sourceDirName":"core/unitalgebra","slug":"/core/unitalgebra/complt","permalink":"/sst-docs/docs/core/unitalgebra/complt","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/unitalgebra/complt.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1684522150000,"frontMatter":{"title":"operator<"},"sidebar":"core","previous":{"title":"operator>=","permalink":"/sst-docs/docs/core/unitalgebra/compgteq"},"next":{"title":"operator<=","permalink":"/sst-docs/docs/core/unitalgebra/complteq"}}');var s=r(74848),o=r(28453);const a={title:"operator<"},c=void 0,l={},i=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"bool operator<(const UnitAlgebra& v) const;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Compare if this object is less than to the argument ",(0,s.jsx)(t.code,{children:"v"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"v"})," (UnitAlgebra) Object to compare to"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"returns"})," (bool) Whether this object is less than the argument."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'SST::UnitAlgebra* num0 = new UnitAlgebra("1bps");\nSST::UnitAlgebra* num1 = new UnitAlgebra("2b/s");\n\nsst_assert(num0 < num1, CALL_INFO, -1, "Error: num0 is definitely < num1!!");\n'})}),"\n",(0,s.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/unitalgebra.h>\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);