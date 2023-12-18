"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8594],{43494:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=t(85893),r=t(11151);const s={title:"getRank"},a=void 0,c={id:"core/component/info/getRank",title:"getRank",description:"Availability: Component, SubComponent, ComponentExtension",source:"@site/../docs/core/component/info/getRank.md",sourceDirName:"core/component/info",slug:"/core/component/info/getRank",permalink:"/sst-docs/docs/core/component/info/getRank",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/info/getRank.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1695940750,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"getRank"},sidebar:"core",previous:{title:"getNumRanks",permalink:"/sst-docs/docs/core/component/info/getNumRanks"},next:{title:"getParentComponentName",permalink:"/sst-docs/docs/core/component/info/getParentComponentName"}},i={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function l(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"RankInfo getRank() const;\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"Availability:"})," Component, SubComponent, ComponentExtension"]}),"\n",(0,o.jsx)(n.p,{children:"Returns the RankInfo structure holding rank and thread information for this Component. For SubComponents, returns the RankInfo structure for their parent Component."}),"\n",(0,o.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"returns"})," (RankInfo) The RankInfo structure containing this component's rank and thread"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:'#include <sst/core/component.h>\n\n//highlight-next-line\nRankInfo info = getRank();\nout->output("I am located on rank %u, thread %u\\n", info.rank, info.thread);\n'})}),"\n",(0,o.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var o=t(67294);const r={},s=o.createContext(r);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);