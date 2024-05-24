"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9053],{97950:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(74848),r=t(28453);const s={title:"recv"},l=void 0,o={id:"core/iface/SimpleNetwork/recv",title:"recv",description:"Receive a Request from the network on the specified virtual network (vn).",source:"@site/../docs/core/iface/SimpleNetwork/recv.md",sourceDirName:"core/iface/SimpleNetwork",slug:"/core/iface/SimpleNetwork/recv",permalink:"/sst-docs/docs/core/iface/SimpleNetwork/recv",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/iface/SimpleNetwork/recv.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:168452215e4,frontMatter:{title:"recv"},sidebar:"core",previous:{title:"isNetworkInitialized",permalink:"/sst-docs/docs/core/iface/SimpleNetwork/isNetworkInitialized"},next:{title:"recvUntimedData",permalink:"/sst-docs/docs/core/iface/SimpleNetwork/recvUntimedData"}},a={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Implementing recv() in a SimpleNetwork interface",id:"example-1-implementing-recv-in-a-simplenetwork-interface",level:3},{value:"Example 2: Polling SimpleNetwork from an endpoint",id:"example-2-polling-simplenetwork-from-an-endpoint",level:3},{value:"Example 3: Using a callback from an endpoint to receive a notification when a request is received",id:"example-3-using-a-callback-from-an-endpoint-to-receive-a-notification-when-a-request-is-received",level:3},{value:"Header",id:"header",level:2}];function d(e){const n={br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"virtual Request* recv(int vn) = 0;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Receive a Request from the network on the specified virtual network (",(0,i.jsx)(n.code,{children:"vn"}),")."]}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Network interface"})," \xa0",(0,i.jsx)(n.br,{}),"\n","Return a Request that was received on virtual network ",(0,i.jsx)(n.code,{children:"vn"}),". If no Request exists, return ",(0,i.jsx)(n.code,{children:"nullptr"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Endpoint"})," \xa0",(0,i.jsx)(n.br,{}),"\n","Call this function to get a request from the network."]}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"vn"})," (int) Virtual network to receive on"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"returns"})," (Request*) Request that has been delivered or ",(0,i.jsx)(n.code,{children:"nullptr"})," if none is available. Caller is responsible for deleting any event returned."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.h3,{id:"example-1-implementing-recv-in-a-simplenetwork-interface",children:"Example 1: Implementing recv() in a SimpleNetwork interface"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc"',children:"\n// Returns nullptr if no event in input_buf[vn]. Otherwise, returns\n// the next event.\nSST::Interfaces::SimpleNetwork::Request* LinkControl::recv(int vn) {\n    if ( input_queues[vn].size() == 0 ) return nullptr; /* No events */\n\n    RtrEvent* event = input_queues[vn].front();\n    input_queues[vn].pop();\n\n    /* Some bookkeeping to manage network credits for this event */\n\n    SST::Interfaces::SimpleNetwork::Request* ret = event->takeRequest();\n    if ( use_nid_map ) ret->dest = logical_nid; /* Merlin is maintaining aliases for network IDs */\n    delete event;\n\n    return ret; /* Return the Request */\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"example-2-polling-simplenetwork-from-an-endpoint",children:"Example 2: Polling SimpleNetwork from an endpoint"}),"\n",(0,i.jsxs)(n.p,{children:["In this example, the endpoint calls ",(0,i.jsx)(n.code,{children:"recv()"})," in a clock handler function to check if anything has been received."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"bool Endpoint::clockTick(SimCycle_t cycle)\n{\n    SST::Interfaces::SimpleNetwork::Request* req = net_iface->recv(0);\n    if (req)\n    {\n        /* Got something - code to handle it here */\n        delete req; /* Delete the request when we're done with it */\n    }\n    return false;\n}\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"example-3-using-a-callback-from-an-endpoint-to-receive-a-notification-when-a-request-is-received",children:"Example 3: Using a callback from an endpoint to receive a notification when a request is received"}),"\n",(0,i.jsxs)(n.p,{children:["In this example, the endpoint registers a callback function, ",(0,i.jsx)(n.code,{children:"requestAvailable()"})," with a SimpleNetwork interface. Inside the callback, the endpoint uses ",(0,i.jsx)(n.code,{children:"recv()"})," to acquire a Request."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"Endpoint::Endpoint( ComponentId_t id, Params& params ) : Component(id)\n{\n    ...\n    net_iface->setNotifyOnRecv(new SimpleNetwork::Handler<Endpoint>(this, &Endpoint::requestAvailable));\n    ...\n}\n\nbool Endpoint::requestAvailable(int vn) {\n    //highlight-next-line\n    SST::Interfaces::SimpleNetwork::Request* req = net_iface->recv(vn);\n    if (req) {\n        /* Got something, code to handle it here */\n        delete req;\n    } else {\n        /* That's strange, we were notified there was a request and it disappeared! */\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/interfaces/simpleNetwork.h>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(96540);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);