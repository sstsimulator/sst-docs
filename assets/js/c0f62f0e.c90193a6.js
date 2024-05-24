"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7883],{29324:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=t(74848),s=t(28453);const r={title:"getNumRanks"},a=void 0,c={id:"core/component/info/getNumRanks",title:"getNumRanks",description:"Availability: Component, SubComponent, ComponentExtension",source:"@site/../docs/core/component/info/getNumRanks.md",sourceDirName:"core/component/info",slug:"/core/component/info/getNumRanks",permalink:"/sst-docs/docs/core/component/info/getNumRanks",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/info/getNumRanks.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:168452215e4,frontMatter:{title:"getNumRanks"},sidebar:"core",previous:{title:"getType",permalink:"/sst-docs/docs/core/component/info/getType"},next:{title:"getRank",permalink:"/sst-docs/docs/core/component/info/getRank"}},i={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function l(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"RankInfo getNumRanks() const;\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"Availability:"})," Component, SubComponent, ComponentExtension"]}),"\n",(0,o.jsx)(n.p,{children:"Get the number of ranks and threads-per-rank that SST is using."}),"\n",(0,o.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"returns"})," (RankInfo) The number of ranks and threads used by SST"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:'#include <sst/core/component.h>\n\n// Example event handler in a component\nvoid example::handleEvent(SST::Event* ev) {\n    RankInfo myInfo = getRank();\n    //highlight-next-line\n    RankInfo sstInfo = getNumRanks();\n    output.output("I am located on rank %d of %d. There are %d threads on each rank and I am on thread %d\\n",\n        myInfo.rank, sstInfo.rank, sstInfo.thread, myInfo.thread);\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var o=t(96540);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);