"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5803],{16015:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=i(74848),s=i(28453);const r={title:"initiateInteractive"},a=void 0,c={id:"core/realtime/initiateInteractive",title:"initiateInteractive",description:"Calling this will cause this thread to drop into an interactive console once any pending real time actions finish executing. This only works if a console was specified on the SST command line. Otherwise it is ignored. This function takes a message describing the reason the simulation is entering interactive mode.",source:"@site/../docs/core/realtime/initiateInteractive.md",sourceDirName:"core/realtime",slug:"/core/realtime/initiateInteractive",permalink:"/sst-docs/docs/core/realtime/initiateInteractive",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/realtime/initiateInteractive.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1729787241e3,frontMatter:{title:"initiateInteractive"},sidebar:"core",previous:{title:"getTimeVortexMaxDepth",permalink:"/sst-docs/docs/core/realtime/getTimeVortexMaxDepth"},next:{title:"simulationCheckpoint",permalink:"/sst-docs/docs/core/realtime/simulationCheckpoint"}},o={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"void initiateInteractive(const std::string& msg);\n"})}),"\n",(0,n.jsx)(t.p,{children:"Calling this will cause this thread to drop into an interactive console once any pending real time actions finish executing. This only works if a console was specified on the SST command line. Otherwise it is ignored. This function takes a message describing the reason the simulation is entering interactive mode."}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"mgs"})," (std::string) Reason that interactive console was activated."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:'initiateInteractive("A signal was received\\n");\n'})}),"\n",(0,n.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/realtimeAction.h>\n"})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>c});var n=i(96540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);