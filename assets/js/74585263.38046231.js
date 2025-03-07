"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9081],{28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const r={},c=s.createContext(r);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:n},e.children)}},41759:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"core/events/constructor","title":"constructor","description":"Constructor for event. Returns a new SST::Event.","source":"@site/../docs/core/events/constructor.md","sourceDirName":"core/events","slug":"/core/events/constructor","permalink":"/sst-docs/docs/core/events/constructor","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/events/constructor.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1684522150000,"frontMatter":{"title":"constructor"},"sidebar":"core","previous":{"title":"SST::Event::Handler","permalink":"/sst-docs/docs/core/events/event_handler"},"next":{"title":"destructor","permalink":"/sst-docs/docs/core/events/destructor"}}');var r=t(74848),c=t(28453);const o={title:"constructor"},a=void 0,l={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function i(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"Event();\n"})}),"\n",(0,r.jsx)(n.p,{children:"Constructor for event. Returns a new SST::Event."}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/basicEvent.h"',children:"#include <sst/core/event.h>\n\nnamespace SST {\nnamespace simpleElementExample {\n\n// Example event that include a vector<char> payload \n// and a boolean value called 'last'\nclass basicEvent : public SST::Event\n{\npublic:\n    // Constructor\n    // Serializable events need a default constructor\n    //highlight-next-line\n    basicEvent() : SST::Event(), last(false) { }\n    \n    // Example data members\n    std::vector<char> payload;\n    bool last;\n\n    /** Rest of class here */\n};\n\n} // namespace simpleElementExample\n} // namespace SST\n"})}),"\n",(0,r.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/event.h>\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}}}]);