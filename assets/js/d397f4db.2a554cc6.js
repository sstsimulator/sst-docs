"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77508],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>m});var o=t(96540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function m(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}},37058:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>m,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"core/component/component/primaryComponentDoNotEndSim","title":"primaryComponentDoNotEndSim","description":"Availability: Component","source":"@site/../docs/core/component/component/primaryComponentDoNotEndSim.md","sourceDirName":"core/component/component","slug":"/core/component/component/primaryComponentDoNotEndSim","permalink":"/sst-docs/docs/core/component/component/primaryComponentDoNotEndSim","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/component/primaryComponentDoNotEndSim.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1684522150000,"frontMatter":{"title":"primaryComponentDoNotEndSim"},"sidebar":"core","previous":{"title":"registerAsPrimaryComponent","permalink":"/sst-docs/docs/core/component/component/registerAsPrimaryComponent"},"next":{"title":"primaryComponentOKToEndSim","permalink":"/sst-docs/docs/core/component/component/primaryComponentOKToEndSim"}}');var r=t(74848),i=t(28453);const s={title:"primaryComponentDoNotEndSim"},m=void 0,a={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"void primaryComponentDoNotEndSim();\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Availability"}),": Component"]}),"\n",(0,r.jsxs)(n.p,{children:["A primary component that has previous registered using ",(0,r.jsx)(n.a,{href:"registerAsPrimaryComponent",children:"registerAsPrimaryComponent()"})," calls this function to let the simulation know that simulation should not end until this component changes its state using ",(0,r.jsx)(n.a,{href:"primaryComponentOKToEndSim",children:"primaryComponentOKToEndSim()"}),". Simulation will not end while any component has used this function to indicate that they are not ready for simulation end."]}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"returns"})," None"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",metastring:'title="sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.cc"',children:"basicSimLifeCycle::basicSimLifeCycle( SST::ComponentId_t id, SST::Params& params ) : SST::Component(id) \n{\n\t// Register as primary and prevent simulation end until we've received all the events we need\n\tregisterAsPrimaryComponent();\n\tprimaryComponentDoNotEndSim();\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/component.h>\n"})})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);