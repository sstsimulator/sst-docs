"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4217],{52912:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(74848),i=t(28453);const s={title:"Handler"},a=void 0,o={id:"core/iface/SimpleNetwork/handler",title:"Handler",description:"The above function signatures should be used for SimpleNetwork handlers that are registered with a SimpleNetwork interface using the setNotifyOnReceive and setNotifyOnSend calls. The function is passed a virtual network on which the interface has event ready to be received or on which an event has just been sent. The return value dictates whether the interface should keep this callback function for the next event or discard it.",source:"@site/../docs/core/iface/SimpleNetwork/handler.md",sourceDirName:"core/iface/SimpleNetwork",slug:"/core/iface/SimpleNetwork/handler",permalink:"/sst-docs/docs/core/iface/SimpleNetwork/handler",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/iface/SimpleNetwork/handler.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:169594075e4,frontMatter:{title:"Handler"},sidebar:"core",previous:{title:"spaceToSend",permalink:"/sst-docs/docs/core/iface/SimpleNetwork/spaceToSend"},next:{title:"NetworkInspector",permalink:"/sst-docs/docs/core/iface/SimpleNetwork/NetworkInspector"}},l={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Defining a handler function in an endpoint",id:"example-1-defining-a-handler-function-in-an-endpoint",level:3},{value:"Example 2: Invoking a registered handler from a SimpleNetwork interface",id:"example-2-invoking-a-registered-handler-from-a-simplenetwork-interface",level:3},{value:"Header",id:"header",level:2}];function d(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"bool func(int vn);\nbool func(int vn, dataT data);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The above function signatures should be used for SimpleNetwork handlers that are registered with a SimpleNetwork interface using the ",(0,r.jsx)(n.a,{href:"setNotifyOnReceive",children:"setNotifyOnReceive"})," and ",(0,r.jsx)(n.a,{href:"setNotifyOnSend",children:"setNotifyOnSend"})," calls. The function is passed a virtual network on which the interface has event ready to be received or on which an event has just been sent. The return value dictates whether the interface should keep this callback function for the next event or discard it."]}),"\n",(0,r.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Network interface"})," \xa0",(0,r.jsx)(n.br,{}),"\n","Network interfaces must support the use of handlers."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Endpoint"})," \xa0",(0,r.jsx)(n.br,{}),"\n","Use of handlers is optional. If not used, endpoint must poll the link regularly (e.g., during a clock handler)."]}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"vn"})," (int) Which virtual network the notification pertains to"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"data"})," (dataT) A constant returned with the call. This can be used, for example, to differentiate which interface called the handler, when the same handler is used for multiple interfaces."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"returns"})," (bool) Whether to keep the handler registered for a future event or unregister it. Unregistering the handler does not cause it to be deleted."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.h3,{id:"example-1-defining-a-handler-function-in-an-endpoint",children:"Example 1: Defining a handler function in an endpoint"}),"\n",(0,r.jsxs)(n.p,{children:["The following shows a handler used inside memHierarchy's memNIC SubComponent. The memNIC sends memory traffic over the a network using SimpleNetwork. The SimpleNetwork interface is a subcomponent stored in the ",(0,r.jsx)(n.code,{children:"link_control"})," variable."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/memHierarchy/memNIC.cc"',children:"/*\n * Called by link control when an event is ready to be received\n * Returns whether to keep or discard the handler \n */\nbool MemNIC::recvNotify(int) {\n    // 'doRecv' calls linkcontrol->recv(0) to obtain the event that\n    // this callback is notifying about. It then gets the MemRtrEvent payload\n    // from the SimpleNetwork::Request, deletes the request, and returns the MemRtrEvent.\n    MemRtrEvent* mre = doRecv(link_control); // link_control is a SimpleNetwork interface\n\n    if (mre) {\n        MemEventBase* ev = mre->event; // Extract the event wrapped in a MemEventBase\n        if (ev) {\n            /* Some debug code here */\n            (*recvHandler)(ev); // Pass received event to MemNIC's parent\n        }\n    }\n    return true; // Tell SimpleNetwork to keep using this handler\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"example-2-invoking-a-registered-handler-from-a-simplenetwork-interface",children:"Example 2: Invoking a registered handler from a SimpleNetwork interface"}),"\n",(0,r.jsxs)(n.p,{children:["This example shows how Merlin's LinkControl subcomponent, which implements the SimpleNetwork interface, triggers callbacks using a handler with the specified signature. The function shown, ",(0,r.jsx)(n.code,{children:"handle_input"}),", is a callback handler registered on the LinkControl's Link into the network and is called when the Link delivers an SST Event."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc"',children:"void LinkControl::handle_input(Event* ev)\n{\n    /* Determine if the LinkControl has received a credit, control, or data packet event*/\n    BaseRtrEvent* base_event = static_cast<BaseRtrEvent*>(ev);\n\n    if ( base_event->getType() == BaseRtrEvent::CREDIT ) {\n        /* A credit event, the LinkControl handles this and deletes the Event */\n    }\n    else if ( baseEvent->getType() == BaseRtrEvent::CTRL ) {\n        /* A control packet, the LinkControl handles this and deletes the Event */\n    }\n    else {\n        /* A data packet, this should be delivered to the endpoint */\n        RtrEvent* event = static_cast<RtrEvent*>(ev);\n        int vn = event->getLogicalVN();\n\n        input_queues[vn].push(event);\n\n        /* Some statistics updates and trace output code is here, removed for brevity */\n\n        // Invoke the receive functor if one was registered with this interface\n        // Remove or keep the functor depending on the functor's return value\n        if (receiveFunctor != nullptr ) {\n            //highlight-next-line\n            bool keep = (*receiveFunctor)(vn);\n            if ( !keep ) receiveFunctor = nullptr;\n        }\n\n    }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/interfaces/simpleNetwork.h>\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);