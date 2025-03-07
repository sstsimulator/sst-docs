"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49040],{28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var s=n(96540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}},75949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"core/link/getDefaultTimeBase","title":"getDefaultTimeBase","description":"Parameters","source":"@site/../docs/core/link/getDefaultTimeBase.md","sourceDirName":"core/link","slug":"/core/link/getDefaultTimeBase","permalink":"/sst-docs/docs/core/link/getDefaultTimeBase","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/link/getDefaultTimeBase.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1716583959000,"frontMatter":{"title":"getDefaultTimeBase"},"sidebar":"core","previous":{"title":"addRecvLatency","permalink":"/sst-docs/docs/core/link/addRecvLatency"},"next":{"title":"setDefaultTimeBase","permalink":"/sst-docs/docs/core/link/setDefaultTimeBase"}}');var r=n(74848),a=n(28453);const i={title:"getDefaultTimeBase"},l=void 0,o={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const t={code:"code",h2:"h2",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"TimeConverter* getDefaultTimeBase();\nconst TimeConverter* getDefaultTimeBase() const;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"returns"})," A TimeConverter* representing the default time base"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"// Configure a link connected to a port named 'port' \nSST::Link* link = configureLink(\"port\", new Event::Handler2<example,&example::handleEvent>(this));\n\n//highlight-next-line\nTimeConverter* tc = link->getDefaultTimeBase();\nOutput* out = getSimulationOutput();\nout->output(\"The link connected to 'port' has a default time base of %s\\n\", tc->getPeriod().toStringBestSI().c_str());\n"})}),"\n",(0,r.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/link.h>\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);