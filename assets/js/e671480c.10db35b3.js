"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3081],{25984:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var a=t(74848),s=t(28453);const r={title:"recvUntimedData"},i=void 0,d={id:"core/iface/StandardMem/recvUntimedData",title:"recvUntimedData",description:"Receive messages from the interface during SST's init() and complete() phases. A registered callback handler is not used during these phases so the parent must use this function to poll for messages if any are expected.",source:"@site/../docs/core/iface/StandardMem/recvUntimedData.md",sourceDirName:"core/iface/StandardMem",slug:"/core/iface/StandardMem/recvUntimedData",permalink:"/sst-docs/docs/core/iface/StandardMem/recvUntimedData",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/iface/StandardMem/recvUntimedData.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:168452215e4,frontMatter:{title:"recvUntimedData"},sidebar:"core",previous:{title:"poll",permalink:"/sst-docs/docs/core/iface/StandardMem/poll"},next:{title:"send",permalink:"/sst-docs/docs/core/iface/StandardMem/send"}},c={},l=[{value:"Requirements",id:"requirements",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Implementing recvUntimedData() in a StandardMem interface",id:"example-1-implementing-recvuntimeddata-in-a-standardmem-interface",level:3},{value:"Example 2: Using recvUntimedData from an endpoint",id:"example-2-using-recvuntimeddata-from-an-endpoint",level:3},{value:"Header",id:"header",level:2}];function o(e){const n={br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"virtual Request* recvUntimedData() = 0;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Receive messages from the interface during SST's ",(0,a.jsx)(n.code,{children:"init()"})," and ",(0,a.jsx)(n.code,{children:"complete()"})," phases. A registered callback handler is not used during these phases so the parent must use this function to poll for messages if any are expected."]}),"\n",(0,a.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Memory interface"})," \xa0",(0,a.jsx)(n.br,{}),"\n","Facilitate returning messages to an endpoint via this function."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Endpoint"})," \xa0",(0,a.jsx)(n.br,{}),"\n","Use this function to get messages during SST's ",(0,a.jsx)(n.code,{children:"init()"})," and ",(0,a.jsx)(n.code,{children:"complete()"})," phases if needed."]}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"returns"})," (Request*) A pointer to a Request if one is available, otherwise ",(0,a.jsx)(n.code,{children:"nullptr"})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.h3,{id:"example-1-implementing-recvuntimeddata-in-a-standardmem-interface",children:"Example 1: Implementing recvUntimedData() in a StandardMem interface"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"Request* StandardMemClassName::recvUntimedData()\n{\n    if ( !receivedUntimedMessages.empty() )\n    {\n        Request* top = receivedUntimedMessages.front();\n        receivedUntimedMessages.pop():\n        return top;\n    }\n    return nullptr;\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"example-2-using-recvuntimeddata-from-an-endpoint",children:"Example 2: Using recvUntimedData from an endpoint"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"void Endpoint::complete(unsigned int phase)\n{\n    while ( (Request* req = mem_iface->recvUntimedData()) ) {\n        /* Handle request */\n        delete req;\n    }\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/interfaces/stdMem.h>\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var a=t(96540);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);