"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2726],{37418:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(74848),s=t(28453);const i={title:"setNotifyOnSend"},a=void 0,l={id:"core/iface/SimpleNetwork/setNotifyOnSend",title:"setNotifyOnSend",description:"An endpoint uses this function to register a functor of the appropriate form. This functor will be called when a Request is sent by the interface.",source:"@site/../docs/core/iface/SimpleNetwork/setNotifyOnSend.md",sourceDirName:"core/iface/SimpleNetwork",slug:"/core/iface/SimpleNetwork/setNotifyOnSend",permalink:"/sst-docs/docs/core/iface/SimpleNetwork/setNotifyOnSend",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/iface/SimpleNetwork/setNotifyOnSend.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:168452215e4,frontMatter:{title:"setNotifyOnSend"},sidebar:"core",previous:{title:"setNotifyOnReceive",permalink:"/sst-docs/docs/core/iface/SimpleNetwork/setNotifyOnReceive"},next:{title:"spaceToSend",permalink:"/sst-docs/docs/core/iface/SimpleNetwork/spaceToSend"}},o={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Registering a callback handler in a SimpleNetwork interface",id:"example-1-registering-a-callback-handler-in-a-simplenetwork-interface",level:3},{value:"Example 2: Registering a callback handler from an Endpoint",id:"example-2-registering-a-callback-handler-from-an-endpoint",level:3},{value:"Header",id:"header",level:2}];function d(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"virtual void setNotifyOnSend(HandlerBase* functor) = 0;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["An endpoint uses this function to register a functor of the appropriate ",(0,r.jsx)(n.a,{href:"handler",children:"form"}),". This functor will be called when a Request is sent by the interface."]}),"\n",(0,r.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Network interface"})," \xa0",(0,r.jsx)(n.br,{}),"\n","Must support registering this functor. If a functor is registered, it must be called when a Request is sent by the interface on its output link. This functor need only be used during SST's simulation run loop and should not be called during SST's ",(0,r.jsx)(n.code,{children:"init()"})," and ",(0,r.jsx)(n.code,{children:"complete()"})," phases."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Endpoint"})," \xa0",(0,r.jsx)(n.br,{}),"\n","May optionally use this function to be notified when a Request is sent by the interface."]}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"functor"})," (HandlerBase*) A ",(0,r.jsx)(n.a,{href:"handler",children:"handler functor"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.p,{children:["These examples show the registration only, for more information see the ",(0,r.jsx)(n.a,{href:"handler",children:"handler"})," documentation."]}),"\n",(0,r.jsx)(n.h3,{id:"example-1-registering-a-callback-handler-in-a-simplenetwork-interface",children:"Example 1: Registering a callback handler in a SimpleNetwork interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"void NetworkInterfaceImplementation::setNotifyOnSend(HandlerBase* functor)\n{\n    // sendFunctor is defined as:\n    // HandlerBase* sendFunctor;\n    sendFunctor = functor;\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"example-2-registering-a-callback-handler-from-an-endpoint",children:"Example 2: Registering a callback handler from an Endpoint"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"// Assuming this is in a class named 'Endpoint' with a HandlerBase function named 'handler'\nnet_iface->setNotifyOnSend(new SST::Interfaces::SimpleNetwork::Handler<Endpoint>(this, &Endpoint::handler));\n"})}),"\n",(0,r.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/interfaces/simpleNetwork.h>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);