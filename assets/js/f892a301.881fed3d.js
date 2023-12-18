"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6844],{50040:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var s=a(85893),n=a(11151);const d={title:"addData"},i=void 0,c={id:"core/statistics/addData",title:"addData",description:"Adds data to a statistic. This call also increments the number of times data has been added to the statistic by one.",source:"@site/../docs/core/statistics/addData.md",sourceDirName:"core/statistics",slug:"/core/statistics/addData",permalink:"/sst-docs/docs/core/statistics/addData",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/statistics/addData.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"addData"},sidebar:"core",previous:{title:"SST::Statistic",permalink:"/sst-docs/docs/core/statistics/class"},next:{title:"addDataNTimes",permalink:"/sst-docs/docs/core/statistics/addDataNTimes"}},r={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Example 3",id:"example-3",level:3},{value:"Example 4",id:"example-4",level:3},{value:"Example 5",id:"example-5",level:3},{value:"Header",id:"header",level:2}];function o(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"template <class... InArgs>\nvoid addData(InArgs&&... args);\n"})}),"\n",(0,s.jsx)(t.p,{children:"Adds data to a statistic. This call also increments the number of times data has been added to the statistic by one."}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"args"})," (Varies) The data to add to the Statistic. Type matches the Statistic type which is set when the statistic is registered."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.h3,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"stat_GetXReqReceived->addData(1);\n"})}),"\n",(0,s.jsx)(t.h3,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"stat_MSHROccupancy->addData(mshr->getSize());\n"})}),"\n",(0,s.jsx)(t.h3,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"m_evStat->addData( time - m_issueTime );\n"})}),"\n",(0,s.jsx)(t.h3,{id:"example-4",children:"Example 4"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"if ( issue( req ) ) {\n    stat_cyclesWithIssue->addData(1);\n} else {\n    stat_cyclesAttemptIssueButRejected->addData(1);\n    break;\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"example-5",children:"Example 5"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"if( !memSystem->getStats( &tbandwidth, TOTAL_BANDWIDTH ) ){\nTBandwidth->addData(tbandwidth);\n}\n\nif( !memSystem->getStats( &bytes_transferred, TOTAL_BYTES_TRANSFERRED ) ){\nBytesTransferred->addData(bytes_transferred);\n}\n\nif( !memSystem->getStats( &total_reads, TOTAL_READS ) ){\nTotalReads->addData(total_reads);\n}\n\nif( !memSystem->getStats( &total_writes, TOTAL_WRITES ) ){\nTotalWrites->addData(total_writes);\n}\n\nif( !memSystem->getStats( &total_xactions, TOTAL_TRANSACTIONS ) ){\nTotalXactions->addData(total_xactions);\n}\n\nif( !memSystem->getStats( &pending_reads, PENDING_READ_TRANSACTIONS ) ){\nPendingReads->addData(pending_reads);\n}\n\nif( !memSystem->getStats( &pending_rtns, PENDING_RTN_TRANSACTIONS ) ){\nPendingRtns->addData(pending_rtns);\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,s.jsx)(t.p,{children:"The statistic header file is included with any SST object that supports statistics."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n"})})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>c,a:()=>i});var s=a(67294);const n={},d=s.createContext(n);function i(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);