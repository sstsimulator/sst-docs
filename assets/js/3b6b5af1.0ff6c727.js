"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69101],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(96540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}},92746:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"core/component/info/getCurrentPriority","title":"getCurrentPriority","description":"Availability: Component, SubComponent, ComponentExtension","source":"@site/../docs/core/component/info/getCurrentPriority.md","sourceDirName":"core/component/info","slug":"/core/component/info/getCurrentPriority","permalink":"/sst-docs/docs/core/component/info/getCurrentPriority","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/info/getCurrentPriority.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1695940750000,"frontMatter":{"title":"getCurrentPriority"},"sidebar":"core","previous":{"title":"getCoordinates","permalink":"/sst-docs/docs/core/component/info/getCoordinates"},"next":{"title":"isSimulationRunModeBoth","permalink":"/sst-docs/docs/core/component/info/isSimulationRunModeBoth"}}');var r=t(74848),i=t(28453);const s={title:"getCurrentPriority"},c=void 0,l={},a=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"int getCurrentPriority() const;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Availability:"})," Component, SubComponent, ComponentExtension"]}),"\n",(0,r.jsx)(n.p,{children:"SST handles activities in the same cycle in a specific priority order. Activities include things like events, clock handlers, synchronization, and simulation stopping points, as well as other SST-internal actions. When called in an event or clock handler, this function returns the priority of the event or clock handler."}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"returns"})," (int) Priority of the current activity"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'output.output("This handler has priority %d\\n", getPriority());\n'})}),"\n",(0,r.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);