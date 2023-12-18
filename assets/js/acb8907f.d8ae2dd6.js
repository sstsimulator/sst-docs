"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4633],{70321:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var a=s(85893),i=s(11151);const n={title:"addDataNTimes"},c=void 0,o={id:"core/statistics/addDataNTimes",title:"addDataNTimes",description:'Add the same data to a statistic repeatedly (N times). This is often used to more efficiently "catch up" a statistic after a component has been idle. For example, if a component is idle for N clock cycles and needs to record the occupancy of some buffer during that time, it may call this function at the end of the idle period to account for the occupancy during the idle period.',source:"@site/../docs/core/statistics/addDataNTimes.md",sourceDirName:"core/statistics",slug:"/core/statistics/addDataNTimes",permalink:"/sst-docs/docs/core/statistics/addDataNTimes",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/statistics/addDataNTimes.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"addDataNTimes"},sidebar:"core",previous:{title:"addData",permalink:"/sst-docs/docs/core/statistics/addData"},next:{title:"SST::TimeConverter",permalink:"/sst-docs/docs/core/timeconverter/class"}},r={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function l(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"template <class... InArgs>\nvoid addDataNTimes(uint64_t N, InArgs&&... args);\n"})}),"\n",(0,a.jsx)(t.p,{children:'Add the same data to a statistic repeatedly (N times). This is often used to more efficiently "catch up" a statistic after a component has been idle. For example, if a component is idle for N clock cycles and needs to record the occupancy of some buffer during that time, it may call this function at the end of the idle period to account for the occupancy during the idle period.'}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"N"})," (uint64_t) Number of times to add data."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"args"})," (Varies) The data to add to the Statistic. Type matches the Statistic type which is set when the statistic is registered."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"// Add mshr->getSize() to the statistic 20 times\nstat_MSHROccupancy->addData(20, mshr->getSize()); \n"})}),"\n",(0,a.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,a.jsx)(t.p,{children:"The statistic header file is included with any SST object that supports statistics."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>c});var a=s(67294);const i={},n=a.createContext(i);function c(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);