"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7511],{26074:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=t(85893),c=t(11151);const s={title:"addRecvLatency"},d=void 0,i={id:"core/link/addRecvLatency",title:"addRecvLatency",description:"Set additional latency to be added to all events that come in on this link.",source:"@site/../docs/core/link/addRecvLatency.md",sourceDirName:"core/link",slug:"/core/link/addRecvLatency",permalink:"/sst-docs/docs/core/link/addRecvLatency",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/link/addRecvLatency.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"addRecvLatency"},sidebar:"core",previous:{title:"addSendLatency",permalink:"/sst-docs/docs/core/link/addSendLatency"},next:{title:"getDefaultTimeBase",permalink:"/sst-docs/docs/core/link/getDefaultTimeBase"}},r={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function o(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"void addRecvLatency(int cycles, const std::string& timebase);\nvoid addRecvLatency(SimTime_t cycles, TimeConverter* timebase);\n"})}),"\n",(0,a.jsx)(n.p,{children:"Set additional latency to be added to all events that come in on this link."}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"cycles"})," (int or SimTime_t) number of cycles of latency to add"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"timebase"})," (std::string or TimeConverter*) Base units for cycles"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:'// Configure a link connected to a port named \'port\' \nSST::Link* link = configureLink("port", new Event::Handler<example>(this, &example::handleEvent));\n\n// Add 20ns of latency\nlink->addRecvLatency(1, "20ns");\n\n// Add 4*1ns = 4ns of latency\nlink->addRecvLatency(4, "1GHz");\n\n// Total latency will be 20ns + 4ns + <amount configured on link in input file> \n'})}),"\n",(0,a.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/link.h>\n"})})]})}function m(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>d});var a=t(67294);const c={},s=a.createContext(c);function d(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);