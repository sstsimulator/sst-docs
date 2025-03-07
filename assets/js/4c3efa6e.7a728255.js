"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44220],{28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}},80093:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"core/iface/StandardMem/getLineSize","title":"getLineSize","description":"Return a line size, in bytes from the memory system. The memory system should provide this and it should be valid after SST\'s init() phase is complete. Endpoints can safely call this function during setup(). A return value of 0 indicates that either the memory system doesn\'t support line sizes or it isn\'t relevant. Otherwise, it can be used by endpoints as needed to meet a particular memory system\'s alignment and request size requirements.","source":"@site/../docs/core/iface/StandardMem/getLineSize.md","sourceDirName":"core/iface/StandardMem","slug":"/core/iface/StandardMem/getLineSize","permalink":"/sst-docs/docs/core/iface/StandardMem/getLineSize","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/iface/StandardMem/getLineSize.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1684522150000,"frontMatter":{"title":"getLineSize"},"sidebar":"core","previous":{"title":"finish","permalink":"/sst-docs/docs/core/iface/StandardMem/finish"},"next":{"title":"poll","permalink":"/sst-docs/docs/core/iface/StandardMem/poll"}}');var i=t(74848),r=t(28453);const a={title:"getLineSize"},d=void 0,l={},o=[{value:"Requirements",id:"requirements",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Implementing getLineSize() in a StandardMem interface",id:"example-1-implementing-getlinesize-in-a-standardmem-interface",level:3},{value:"Example 2: Using getLineSize() from an endpoint",id:"example-2-using-getlinesize-from-an-endpoint",level:3},{value:"Header",id:"header",level:2}];function c(e){const n={br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"virtual Addr getLineSize() = 0;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Return a line size, in bytes from the memory system. The memory system should provide this and it should be valid after SST's ",(0,i.jsx)(n.code,{children:"init()"})," phase is complete. Endpoints can safely call this function during ",(0,i.jsx)(n.code,{children:"setup()"}),". A return value of 0 indicates that either the memory system doesn't support line sizes or it isn't relevant. Otherwise, it can be used by endpoints as needed to meet a particular memory system's alignment and request size requirements."]}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Memory interface"})," \xa0",(0,i.jsx)(n.br,{}),"\n","Ensure this function returns valid information as soon as ",(0,i.jsx)(n.code,{children:"init()"})," finishes. If line size is not relevant to a memory system implementation, can return 0."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Endpoint"})," \xa0",(0,i.jsx)(n.br,{}),"\n","Do not call this function prior to SST's ",(0,i.jsx)(n.code,{children:"setup()"})," phase."]}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"returns"})," (Addr) The number of bytes in a cache line or other unit of memory access used by the memory system. A return value of 0 indicates the value is not relevant or not used."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.h3,{id:"example-1-implementing-getlinesize-in-a-standardmem-interface",children:"Example 1: Implementing getLineSize() in a StandardMem interface"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/memHierarchy/standardInterface.h"',children:"virtual Addr getLineSize() override\n{\n    return lineSize_;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"example-2-using-getlinesize-from-an-endpoint",children:"Example 2: Using getLineSize() from an endpoint"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/memHierarchy/testcpu/standardCPU.cc"',children:"void standardCPU::setup()\n{\n    memory->setup();\n    lineSize = memory->getLineSize();\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/interfaces/stdMem.h>\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);