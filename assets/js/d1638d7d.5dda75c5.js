"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4614],{99162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=n(85893),o=n(11151);const i={title:"convertFromCoreTime"},c=void 0,s={id:"core/timeconverter/convertFromCoreTime",title:"convertFromCoreTime",description:"This function converts a count from the global view of time to a count in the local view. This",source:"@site/../docs/core/timeconverter/convertFromCoreTime.md",sourceDirName:"core/timeconverter",slug:"/core/timeconverter/convertFromCoreTime",permalink:"/sst-docs/docs/core/timeconverter/convertFromCoreTime",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/timeconverter/convertFromCoreTime.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"convertFromCoreTime"},sidebar:"core",previous:{title:"SST::TimeConverter",permalink:"/sst-docs/docs/core/timeconverter/class"},next:{title:"convertToCoreTime",permalink:"/sst-docs/docs/core/timeconverter/convertToCoreTime"}},a={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function l(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"SimTime_t convertFromCoreTime (SimTime_t time);\n"})}),"\n",(0,r.jsx)(t.p,{children:"This function converts a count from the global view of time to a count in the local view. This\nfunction is used to get elapsed simulation time in the local view. For example, if a\nComponent has a clock frequency of 2GHz, the local time base would be 500ps (period of a 2GHz\nclock). If the clock timeconverter was used to convert a simulation time of 2ms to the local clock\nfrequency, this call would return 4,000 (2ms / 500ps)."}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"time"})," (SimTime_t) Core time to convert to local time"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"returns"})," (SimTime_t) Converted local time"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/memHierarchy/cacheController.cc"',children:'// This function checks if the cache has been stalling an \n// event for too long and may be in a deadlock situation\nvoid Cache::checkTimeout() {\n    MSHREntry* entry = mshr_->getOldestEntry();\n\n    if (entry) {\n        // Get the current simulation time in nano seconds\n        SimTime_t curTime = getCurrentSimTimeNano();\n        // Convert the arrival time for the oldest active event to ns and compute how long it has been waiting in ns\n        //highlight-next-line\n        SimTime_t startTime = getTimeConverter("1ns")->convertFromCoreTime(entry->getStartTime());\n        SimTime_t waitTime = curTime - startTime;\n\n        // If the event has been stalled for more than timeout_ ns, end the simulation with an error\n        if (waitTime > timeout_) {\n            out_->fatal(CALL_INFO, -1, "%s, Error: Maximum cache timeout reached - potential deadlock or other error. Event: %s. Current time: %" PRIu64 "ns. Event start time: %" PRIu64 "ns.\\n",\n                getName().c_str(), entry->getEvent()->getVerboseString().c_str(), curTime, startTime);\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/timeConverter.h\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var r=n(67294);const o={},i=r.createContext(o);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);