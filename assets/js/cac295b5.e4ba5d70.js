"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93601],{9744:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"config/unitalgebra/precision","title":"precision","description":"Returns a string of the UnitAlgebra with the option of specifying how many digits to round to.","source":"@site/../docs/config/unitalgebra/precision.md","sourceDirName":"config/unitalgebra","slug":"/config/unitalgebra/precision","permalink":"/sst-docs/docs/config/unitalgebra/precision","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/config/unitalgebra/precision.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1716583959000,"frontMatter":{"title":"precision"},"sidebar":"config","previous":{"title":"isValueZero","permalink":"/sst-docs/docs/config/unitalgebra/isValueZero"}}');var s=t(74848),r=t(28453);const o={title:"precision"},a=void 0,l={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Import",id:"import",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Returns a string of the UnitAlgebra with the option of specifying how many digits to round to."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"str_value = ua.precision()\nstr_value = ua.precision(digits)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"digits"})," (type: int) optional, number of digits to round to. Default is 6. If ",(0,s.jsx)(n.code,{children:"digits <= 0"}),", no rounding is performed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"returns"})," a string representation of the UnitAlgebra"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from sst import UnitAlgebra\n\nua = UnitAlgebra("1MiB")\nprint("Full precision ", ua)\nprint("Precision(4) ", ua.precision(4))\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Output"',children:"Full precision  104857600 B\nPrecision(4)  1.049e+08 B\n"})}),"\n",(0,s.jsx)(n.h2,{id:"import",children:"Import"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from sst import UnitAlgebra\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);