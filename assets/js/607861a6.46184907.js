"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5503],{98189:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>d,metadata:()=>s,toc:()=>r});var a=t(85893),i=t(11151);const d={title:"send"},l=void 0,s={id:"core/link/send",title:"send",description:"Send an event over the link, optionally, with additional latency added to the minimum latency the link was configured with as well as any other latency added to the link.",source:"@site/../docs/core/link/send.md",sourceDirName:"core/link",slug:"/core/link/send",permalink:"/sst-docs/docs/core/link/send",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/link/send.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1695940750,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"send"},sidebar:"core",previous:{title:"SST::Link",permalink:"/sst-docs/docs/core/link/class"},next:{title:"recv",permalink:"/sst-docs/docs/core/link/recv"}},o={},r=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Using a TimeConverter to add additional latency when sending an event",id:"example-1-using-a-timeconverter-to-add-additional-latency-when-sending-an-event",level:3},{value:"Example 2: Using a Link&#39;s default TimeConverter to add additional latency when sending an event",id:"example-2-using-a-links-default-timeconverter-to-add-additional-latency-when-sending-an-event",level:3},{value:"Example 3: Send an event without additional delay",id:"example-3-send-an-event-without-additional-delay",level:3},{value:"Header",id:"header",level:2}];function c(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"void send(SimTime_t delay, TimeConverter* tc, Event* event);\nvoid send(SimTime_t delay, Event* event);\nvoid send(Event* event);\n"})}),"\n",(0,a.jsx)(n.p,{children:"Send an event over the link, optionally, with additional latency added to the minimum latency the link was configured with as well as any other latency added to the link."}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"delay"})," (SimTime_t) Additional latency to add, specified as a cycle count"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"tc"})," (TimeConverter*) Units of delay. If not specified, the units will be the link's default time base."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"event"})," (Event*) The event to send."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.h3,{id:"example-1-using-a-timeconverter-to-add-additional-latency-when-sending-an-event",children:"Example 1: Using a TimeConverter to add additional latency when sending an event"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:'/* From constructor: nanoTimeConverter = getTimeConverter("1ns"); */\n\nEmberEvent* nextEv = evQueue.front();\nevQueue.pop();\n\n// issue the next event to the engine for deliver later, add nanoDelay * nanoTimeConverter latency\n// Latency: link latency (from input) + (nanoDelay * nanoTimeConverter)\nselfEventLink->send(nanoDelay, nanoTimeConverter, nextEv);\n'})}),"\n",(0,a.jsx)(n.h3,{id:"example-2-using-a-links-default-timeconverter-to-add-additional-latency-when-sending-an-event",children:"Example 2: Using a Link's default TimeConverter to add additional latency when sending an event"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// Latency: default link latency from input file + (1 * link's default TimeConverter)\nport_link->send(1,ev);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"example-3-send-an-event-without-additional-delay",children:"Example 3: Send an event without additional delay"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// Latency: default link latency from input file\nvoid MemLink::send(MemEventBase *ev) \n{\n    link->send(ev);\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/link.h>\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>l});var a=t(67294);const i={},d=a.createContext(i);function l(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);