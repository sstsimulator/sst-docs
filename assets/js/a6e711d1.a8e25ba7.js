"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4344],{90656:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(85893),t=n(11151);const i={title:"prospero"},o=void 0,c={id:"elements/prospero/intro",title:"prospero",description:"Prospero is a trace-based core model. The core models memory instructions only. Multiple Prospero cores can be used in the same simulation, each running independent trace files, to model a multicore architecture. A Pintool for collecting traces from x86 binaries is included. Prospero interfaces with memory via the SST::StandardMem interface.",source:"@site/../docs/elements/prospero/intro.md",sourceDirName:"elements/prospero",slug:"/elements/prospero/intro",permalink:"/sst-docs/docs/elements/prospero/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/elements/prospero/intro.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1702490631,formattedLastUpdatedAt:"Dec 13, 2023",frontMatter:{title:"prospero"},sidebar:"elements",previous:{title:"osseous",permalink:"/sst-docs/docs/elements/osseous/intro"},next:{title:"rdmaNic",permalink:"/sst-docs/docs/elements/rdmaNic/intro"}},d={},l=[{value:"Required dependencies: None",id:"required-dependencies-none",level:3},{value:"Optional dependencies: None",id:"optional-dependencies-none",level:3},{value:"Trace Format",id:"trace-format",level:2},{value:"Text",id:"text",level:3},{value:"Binary",id:"binary",level:3},{value:"Compressed",id:"compressed",level:3}];function a(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"Prospero"})," is a trace-based core model. The core models memory instructions only. Multiple Prospero cores can be used in the same simulation, each running independent trace files, to model a multicore architecture. A Pintool for collecting traces from x86 binaries is included. Prospero interfaces with memory via the ",(0,r.jsx)(s.a,{href:"../../core/iface/StandardMem/class",children:"SST::StandardMem"})," interface."]}),"\n",(0,r.jsx)(s.admonition,{title:"At a Glance",type:"note",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Source Code:"})," ",(0,r.jsx)(s.a,{href:"https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/prospero",children:"sst-elements/.../prospero"})," \xa0",(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:"SST Name:"})," ",(0,r.jsx)(s.code,{children:"prospero"})," \xa0",(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:"Maturity Level:"})," Prototype (2) \xa0",(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:"Development Path:"})," Active \xa0",(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:"Last Released:"})," SST 13.1"]})}),"\n",(0,r.jsx)(s.h3,{id:"required-dependencies-none",children:"Required dependencies: None"}),"\n",(0,r.jsx)(s.h3,{id:"optional-dependencies-none",children:"Optional dependencies: None"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Pin"})," If available, the included Pintool can be used to generate a trace for simulation, otherwise a trace must be acquired separately."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"zlib"})," Enables reading and/or generating a compressed execution trace"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"trace-format",children:"Trace Format"}),"\n",(0,r.jsx)(s.h3,{id:"text",children:"Text"}),"\n",(0,r.jsxs)(s.p,{children:["Each line of a text trace represents a separate memory access. The format is ",(0,r.jsx)(s.code,{children:"cycles type address length"})," where:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"cycles"})," Minimum cycle count at which the request can be issued"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"type"})," ",(0,r.jsx)(s.code,{children:"R"})," (read) or ",(0,r.jsx)(s.code,{children:"W"})," (write). Not case-sensitive."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"address"})," Memory address"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"length"})," Number of bytes to read or write"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"binary",children:"Binary"}),"\n",(0,r.jsxs)(s.p,{children:["Each record in a binary trace consists of the same four fields as the text trace, except that they are represented as a byte array (",(0,r.jsx)(s.code,{children:"char*"}),"). There is no separator between records and the size of each field is:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"cycles"})," ",(0,r.jsx)(s.code,{children:"uint64_t"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"type"})," ",(0,r.jsx)(s.code,{children:"char"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"address"})," ",(0,r.jsx)(s.code,{children:"uint64_t"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"length"})," ",(0,r.jsx)(s.code,{children:"uint32_t"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"compressed",children:"Compressed"}),"\n",(0,r.jsx)(s.p,{children:"If zlib is available, use of compressed text or binary traces is supported."})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>o});var r=n(67294);const t={},i=r.createContext(t);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);