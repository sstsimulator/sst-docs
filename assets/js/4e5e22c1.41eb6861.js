"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2668],{11702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(74848),s=n(28453);const r={title:"ariel"},a=void 0,o={id:"elements/ariel/intro",title:"ariel",description:"The ariel library models a multicore CPU using a dynamic application trace. The CPU models memory accesses in detail and non-memory accesses as a single cycle operation. Instruction dependencies are not tracked. The ariel library divides the simulation into two parts: a frontend that provides a trace, and a CPU simulation model that consumes the trace and provides the modeling itself. The included frontend leverages Pin to dynamically trace a natively executing x86 application. This frontend supports threaded applications but not MPI applications. Ariel supports memory models that use the StandardMem interface.",source:"@site/../docs/elements/ariel/intro.md",sourceDirName:"elements/ariel",slug:"/elements/ariel/intro",permalink:"/sst-docs/docs/elements/ariel/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/elements/ariel/intro.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1716583959e3,frontMatter:{title:"ariel"},sidebar:"elements",previous:{title:"Overview",permalink:"/sst-docs/docs/elements/intro"},next:{title:"balar",permalink:"/sst-docs/docs/elements/balar/intro"}},l={},d=[{value:"Required dependencies",id:"required-dependencies",level:3},{value:"Optional dependencies",id:"optional-dependencies",level:3}];function c(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.em,{children:"ariel"})," library models a multicore CPU using a dynamic application trace. The CPU models memory accesses in detail and non-memory accesses as a single cycle operation. Instruction dependencies are not tracked. The ariel library divides the simulation into two parts: a frontend that provides a trace, and a CPU simulation model that consumes the trace and provides the modeling itself. The included frontend leverages Pin to dynamically trace a natively executing x86 application. This frontend supports threaded applications but not MPI applications. Ariel supports memory models that use the ",(0,i.jsx)(t.a,{href:"/sst-docs/docs/core/iface/StandardMem/class",children:"StandardMem"})," interface."]}),"\n",(0,i.jsx)(t.admonition,{title:"At a Glance",type:"note",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Source Code:"})," ",(0,i.jsx)(t.a,{href:"https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/ariel",children:"sst-elements/.../ariel"})," \xa0",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"SST Name:"})," ",(0,i.jsx)(t.code,{children:"ariel"})," \xa0",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Maturity Level:"})," Mature (3) \xa0",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Development Path:"})," Active \xa0",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Last Released:"})," SST 14.0"]})}),"\n",(0,i.jsx)(t.h3,{id:"required-dependencies",children:"Required dependencies"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Pin"})," Required for the built-in Pintool tracer. Note that the ariel CPU model will build without Pin but it is required for the included frontend tracer."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"optional-dependencies",children:"Optional dependencies"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"zlib"})," Enables generating a compressed execution trace"]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);