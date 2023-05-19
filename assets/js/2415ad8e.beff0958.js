"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,m=p["".concat(s,".").concat(u)]||p[u]||h[u]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Handler"},o=void 0,l={unversionedId:"core/iface/SimpleNetwork/handler",id:"core/iface/SimpleNetwork/handler",title:"Handler",description:"The above function signatures should be used for SimpleNetwork handlers that are registered with a SimpleNetwork interface using the setNotifyOnReceive and setNotifyOnSend calls. The function is passed a virtual network on which the interface has event ready to be received or on which an event has just been sent. The return value dictates whether the interface should keep this callback function for the next event or discard it.",source:"@site/../docs/core/iface/SimpleNetwork/handler.md",sourceDirName:"core/iface/SimpleNetwork",slug:"/core/iface/SimpleNetwork/handler",permalink:"/sst-docs/docs/core/iface/SimpleNetwork/handler",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/iface/SimpleNetwork/handler.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"Handler"},sidebar:"core",previous:{title:"spaceToSend",permalink:"/sst-docs/docs/core/iface/SimpleNetwork/spaceToSend"},next:{title:"NetworkInspector",permalink:"/sst-docs/docs/core/iface/SimpleNetwork/NetworkInspector"}},s={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Defining a handler function in an endpoint",id:"example-1-defining-a-handler-function-in-an-endpoint",level:3},{value:"Example 2: Invoking a registered handler from a SimpleNetwork interface",id:"example-2-invoking-a-registered-handler-from-a-simplenetwork-interface",level:3},{value:"Header",id:"header",level:2}],d={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"bool func(int vn);\nbool func(int vn, dataT data);\n")),(0,a.kt)("p",null,"The above function signatures should be used for SimpleNetwork handlers that are registered with a SimpleNetwork interface using the ",(0,a.kt)("a",{parentName:"p",href:"setNotifyOnReceive"},"setNotifyOnReceive")," and ",(0,a.kt)("a",{parentName:"p",href:"setNotifyOnSend"},"setNotifyOnSend")," calls. The function is passed a virtual network on which the interface has event ready to be received or on which an event has just been sent. The return value dictates whether the interface should keep this callback function for the next event or discard it."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Network interface")," ","\xa0",(0,a.kt)("br",{parentName:"p"}),"\n","Network interfaces must support the use of handlers."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Endpoint")," ","\xa0",(0,a.kt)("br",{parentName:"p"}),"\n","Use of handlers is optional. If not used, endpoint must poll the link regularly (e.g., during a clock handler)."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"vn")," (int) Which virtual network the notification pertains to"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," (dataT) A constant returned with the call. This can be used, for example, to differentiate which interface called the handler, when the same handler is used for multiple interfaces."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"returns")," (bool) Whether to keep the handler registered for a future event or unregister it. Unregistering the handler does not cause it to be deleted.")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"example-1-defining-a-handler-function-in-an-endpoint"},"Example 1: Defining a handler function in an endpoint"),(0,a.kt)("p",null,"The following shows a handler used inside memHierarchy's memNIC SubComponent. The memNIC sends memory traffic over the a network using SimpleNetwork. The SimpleNetwork interface is a subcomponent stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"link_control")," variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/memHierarchy/memNIC.cc"',title:'"Excerpt',from:!0,'sst-elements/src/sst/elements/memHierarchy/memNIC.cc"':!0},"/*\n * Called by link control when an event is ready to be received\n * Returns whether to keep or discard the handler \n */\nbool MemNIC::recvNotify(int) {\n    // 'doRecv' calls linkcontrol->recv(0) to obtain the event that\n    // this callback is notifying about. It then gets the MemRtrEvent payload\n    // from the SimpleNetwork::Request, deletes the request, and returns the MemRtrEvent.\n    MemRtrEvent* mre = doRecv(link_control); // link_control is a SimpleNetwork interface\n\n    if (mre) {\n        MemEventBase* ev = mre->event; // Extract the event wrapped in a MemEventBase\n        if (ev) {\n            /* Some debug code here */\n            (*recvHandler)(ev); // Pass received event to MemNIC's parent\n        }\n    }\n    return true; // Tell SimpleNetwork to keep using this handler\n}\n")),(0,a.kt)("h3",{id:"example-2-invoking-a-registered-handler-from-a-simplenetwork-interface"},"Example 2: Invoking a registered handler from a SimpleNetwork interface"),(0,a.kt)("p",null,"This example shows how Merlin's LinkControl subcomponent, which implements the SimpleNetwork interface, triggers callbacks using a handler with the specified signature. The function shown, ",(0,a.kt)("inlineCode",{parentName:"p"},"handle_input"),", is a callback handler registered on the LinkControl's Link into the network and is called when the Link delivers an SST Event."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc"',title:'"Excerpt',from:!0,'sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc"':!0},"void LinkControl::handle_input(Event* ev)\n{\n    /* Determine if the LinkControl has received a credit, control, or data packet event*/\n    BaseRtrEvent* base_event = static_cast<BaseRtrEvent*>(ev);\n\n    if ( base_event->getType() == BaseRtrEvent::CREDIT ) {\n        /* A credit event, the LinkControl handles this and deletes the Event */\n    }\n    else if ( baseEvent->getType() == BaseRtrEvent::CTRL ) {\n        /* A control packet, the LinkControl handles this and deletes the Event */\n    }\n    else {\n        /* A data packet, this should be delivered to the endpoint */\n        RtrEvent* event = static_cast<RtrEvent*>(ev);\n        int vn = event->getLogicalVN();\n\n        input_queues[vn].push(event);\n\n        /* Some statistics updates and trace output code is here, removed for brevity */\n\n        // Invoke the receive functor if one was registered with this interface\n        // Remove or keep the functor depending on the functor's return value\n        if (recieveFunctor != nullptr ) {\n            //highlight-next-line\n            bool keep = (*receiveFunctor)(vn);\n            if ( !keep ) receiveFunctor = nullptr;\n        }\n\n    }\n}\n")),(0,a.kt)("h2",{id:"header"},"Header"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/interfaces/simpleNetwork.h>\n")))}h.isMDXComponent=!0}}]);