"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84151],{28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var r=t(96540);const l={},a=r.createContext(l);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(a.Provider,{value:n},e.children)}},75559:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>i});const r=JSON.parse('{"id":"core/link/replaceFunctor","title":"replaceFunctor","description":"Set the callback handler for events arriving on a link. Also deletes the previous handler registered to the link.","source":"@site/../docs/core/link/replaceFunctor.md","sourceDirName":"core/link","slug":"/core/link/replaceFunctor","permalink":"/sst-docs/docs/core/link/replaceFunctor","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/link/replaceFunctor.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1716583959000,"frontMatter":{"title":"replaceFunctor"},"sidebar":"core","previous":{"title":"setFunctor","permalink":"/sst-docs/docs/core/link/setFunctor"},"next":{"title":"addSendLatency","permalink":"/sst-docs/docs/core/link/addSendLatency"}}');var l=t(74848),a=t(28453);const o={title:"replaceFunctor"},s=void 0,c={},i=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"void replaceFunctor(Event::HandlerBase* functor);\n"})}),"\n",(0,l.jsx)(n.p,{children:"Set the callback handler for events arriving on a link. Also deletes the previous handler registered to the link."}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsx)(n.p,{children:"This function cannot be used on a Link that was configured as a polling link (i.e., configured without a handler)."})}),"\n",(0,l.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"functor"})," (Event::HandlerBase*) Event handler to invoke for event arrivals"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"// Configure a link connected to a port named 'port' \nSST::Link* link = configureLink(\"port\", new Event::Handler2<example,&example::handleEvent>(this));\n\n// Change the link to call otherHandleEvent() instead of handleEvent() when an event arrives\n// The original handler will be deleted\nlink->replaceFunctor(new Event::Handler2<example,&example::otherHandleEvent>(this));\n"})}),"\n",(0,l.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/link.h>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);