"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1102],{56249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=n(74848),o=n(28453);const s={title:"simulationSignalShutdown"},a=void 0,r={id:"core/realtime/simulationSignalShutdown",title:"simulationSignalShutdown",description:'Inform the simulation that it should end when any pending actions finish executing. The abnormal parameter controls whether the shutdown is an "emergency" and SST should immediately terminate or whether it should continue to its normal complete/finish/destruction stages.',source:"@site/../docs/core/realtime/simulationSignalShutdown.md",sourceDirName:"core/realtime",slug:"/core/realtime/simulationSignalShutdown",permalink:"/sst-docs/docs/core/realtime/simulationSignalShutdown",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/realtime/simulationSignalShutdown.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1729787241e3,frontMatter:{title:"simulationSignalShutdown"},sidebar:"core",previous:{title:"simulationPrintStatus",permalink:"/sst-docs/docs/core/realtime/simulationPrintStatus"},next:{title:"Shared Objects",permalink:"/sst-docs/docs/core/sharedobj/overview"}},l={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function c(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",children:"void simulationSignalShutdown(bool abnormal);\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Inform the simulation that it should end when any pending actions finish executing. The ",(0,i.jsx)(t.code,{children:"abnormal"}),' parameter controls whether the shutdown is an "emergency" and SST should immediately terminate or whether it should continue to its normal complete/finish/destruction stages.']}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"abnormal"})," (bool) Whether to terminate immediately (true) or proceed to the end of simulation stages (false)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"The exit-after action causes SST to end simulation after a certain amount of time has passed."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",children:'void\nExitCleanRealTimeAction::execute()\n{\n    Output   sim_output = getSimulationOutput();\n    RankInfo rank       = getRank();\n    \n    sim_output.output("EXIT-AFTER TIME REACHED; SHUTDOWN (%u,%u)!\\n", rank.rank, rank.thread);\n    sim_output.output("# Simulated time:                  %s\\n", getElapsedSimTime().toStringBestSI().c_str());\n    //highlight-next-line\n    simulationSignalShutdown(false); /* Not an abnormal shutdown */\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/realtimeAction.h>\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);