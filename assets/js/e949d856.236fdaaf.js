"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6837],{48761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(85893),s=n(11151);const r={title:"getDefaultTimeBase"},a=void 0,i={id:"core/component/time/getDefaultTimeBase",title:"getDefaultTimeBase",description:"Availability: Component, SubComponent, ComponentExtension",source:"@site/../docs/core/component/time/getDefaultTimeBase.md",sourceDirName:"core/component/time",slug:"/core/component/time/getDefaultTimeBase",permalink:"/sst-docs/docs/core/component/time/getDefaultTimeBase",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/time/getDefaultTimeBase.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1695940750,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"getDefaultTimeBase"},sidebar:"core",previous:{title:"setDefaultTimeBase",permalink:"/sst-docs/docs/core/component/time/setDefaultTimeBase"},next:{title:"getTimeConverter",permalink:"/sst-docs/docs/core/component/time/getTimeConverter"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function m(e){const t={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cpp",children:"TimeConverter* getDefaultTimeBase();\nconst TimeConverter* getDefaultTimeBase() const;\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"Availability:"})," Component, SubComponent, ComponentExtension"]}),"\n",(0,o.jsx)(t.p,{children:"Return the default time base for the calling (Sub)Component."}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"returns"})," (TimeConverter*) Default time base"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/memHierarchy/standardInterface.cc"',children:'StandardInterface::StandardInterface(SST::ComponentId_t id, Params& params, TimeConverter* time,\n    HandlerBase* handler) : StandardMem(id, params, time, handler)\n{\n    /** Begin configuration code here */\n\n    // Pass our default time base to our child subcomponent\n    //highlight-next-line\n    link_ = loadUserSubComponent<MemLinkBase>("memlink", ComponentInfo::SHARE_NONE, getDefaultTimeBase());\n\n    /** Remaining configuration here */\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var o=n(67294);const s={},r=o.createContext(s);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);