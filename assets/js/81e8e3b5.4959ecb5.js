"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65346],{4637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"core/unitalgebra/getRoundedValue","title":"getRoundedValue","description":"Return the value portion of the UnitAlgebra as a signed 64-bit integer. This discards the units and returns the value in its base units (without SI prefixes). For example, calling getRoundedValue() on a unit algebra of 4KB will return 4000.","source":"@site/../docs/core/unitalgebra/getRoundedValue.md","sourceDirName":"core/unitalgebra","slug":"/core/unitalgebra/getRoundedValue","permalink":"/sst-docs/docs/core/unitalgebra/getRoundedValue","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/unitalgebra/getRoundedValue.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1684522150000,"frontMatter":{"title":"getRoundedValue"},"sidebar":"core","previous":{"title":"getDoubleValue","permalink":"/sst-docs/docs/core/unitalgebra/getDoubleValue"},"next":{"title":"getValue","permalink":"/sst-docs/docs/core/unitalgebra/getValue"}}');var a=n(74848),s=n(28453);const l={title:"getRoundedValue"},i=void 0,o={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function u(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"int64_t getRoundedValue() const;\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Return the value portion of the UnitAlgebra as a signed 64-bit integer. This discards the units and returns the value in its base units (without SI prefixes). For example, calling ",(0,a.jsx)(t.code,{children:"getRoundedValue()"})," on a unit algebra of ",(0,a.jsx)(t.code,{children:"4KB"})," will return ",(0,a.jsx)(t.code,{children:"4000"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"returns"})," (int64_t) The value portion of the UnitAlgebra as an int64_t."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:'SST::UnitAlgebra* num = new UnitAlgebra("2GHz");\nint64_t hz = num->getRoundedValue();\n// hz = 2000000000\n'})}),"\n",(0,a.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/unitalgebra.h>\n"})})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var r=n(96540);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);