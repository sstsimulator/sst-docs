"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17595],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}},96080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"core/link/getId","title":"getId","description":"Returns the unique ID assigned to the Link. LinkIdt is a uint32t.","source":"@site/../docs/core/link/getId.md","sourceDirName":"core/link","slug":"/core/link/getId","permalink":"/sst-docs/docs/core/link/getId","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/link/getId.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1716583959000,"frontMatter":{"title":"getId"},"sidebar":"core","previous":{"title":"recvUntimedData","permalink":"/sst-docs/docs/core/link/recvUntimedData"},"next":{"title":"SST::Output","permalink":"/sst-docs/docs/core/output/class"}}');var r=n(74848),i=n(28453);const o={title:"getId"},c=void 0,d={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function a(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"LinkId_t getId();\n"})}),"\n",(0,r.jsx)(t.p,{children:"Returns the unique ID assigned to the Link. LinkId_t is a uint32_t."}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"returns"})," The ID assigned to the Link."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"// Configure a link connected to a port named 'port' \nSST::Link* link = configureLink(\"port\", new Event::Handler2<example,&example::handleEvent>(this));\n\nOutput* out = getSimulationOutput();\n//highlight-next-line\nout->output(\"The link connected to 'port' has id %u\\n\", link->getId());\n"})}),"\n",(0,r.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/link.h>\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}}}]);