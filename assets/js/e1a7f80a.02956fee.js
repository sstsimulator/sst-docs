"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1707],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"send"},s=void 0,o={unversionedId:"core/iface/SimpleNetwork/send",id:"core/iface/SimpleNetwork/send",title:"send",description:"Send a request to the network. The function returns whether the Request can be sent. If it returns false, the Request has been rejected and the endpoint must try again later (e.g., there is not enough buffer space to send). If it returns true, the Request has been accepted by the interface. The interface may buffer the event for some period of time, it is not required to send it immediately.",source:"@site/../docs/core/iface/SimpleNetwork/send.md",sourceDirName:"core/iface/SimpleNetwork",slug:"/core/iface/SimpleNetwork/send",permalink:"/sst-docs/docs/core/iface/SimpleNetwork/send",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/iface/SimpleNetwork/send.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"send"},sidebar:"core",previous:{title:"requestToReceive",permalink:"/sst-docs/docs/core/iface/SimpleNetwork/requestToReceive"},next:{title:"sendInitData",permalink:"/sst-docs/docs/core/iface/SimpleNetwork/sendInitData"}},l={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Implementing send() in a SimpleNetwork interface",id:"example-1-implementing-send-in-a-simplenetwork-interface",level:3},{value:"Example 2: Sending a Request from an endpoint",id:"example-2-sending-a-request-from-an-endpoint",level:3},{value:"Header",id:"header",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"virtual bool send(Request* req, int vn) = 0;\n")),(0,a.kt)("p",null,"Send a request to the network. The function returns whether the Request can be sent. If it returns ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", the Request has been rejected and the endpoint must try again later (e.g., there is not enough buffer space to send). If it returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the Request has been accepted by the interface. The interface may buffer the event for some period of time, it is not required to send it immediately."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Network interface")," ","\xa0",(0,a.kt)("br",{parentName:"p"}),"\n","When this function is called, determine whether the Request ",(0,a.kt)("inlineCode",{parentName:"p"},"req")," can be sent on the virtual network ",(0,a.kt)("inlineCode",{parentName:"p"},"vn"),". If so, accept the request and return ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". If not, do nothing with the request and return ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Endpoint")," ","\xa0",(0,a.kt)("br",{parentName:"p"}),"\n","Use this function to send events during simulation. Must correctly handle rejected requests."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"req")," (Request*) Pointer to Request to send"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"vn")," (int) Which virtual network to send the Request out on"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"returns")," (bool) Whether the event was accepted (",(0,a.kt)("inlineCode",{parentName:"li"},"true"),") or not (",(0,a.kt)("inlineCode",{parentName:"li"},"false"),")")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"example-1-implementing-send-in-a-simplenetwork-interface"},"Example 1: Implementing send() in a SimpleNetwork interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc"',title:'"Excerpt',from:!0,'sst-elements/src/sst/elements/merlin/interfaces/linkControl.cc"':!0},"bool LinkControl::send(SimpleNetwork::Request* req, int vn)\n{\n    // Check to see if the VN is in range\n    if ( vn >= req_vns ) return false;\n    req->vn = vn;\n\n    ...\n    RtrEvent* ev = new RtrEvent(req, id, vn);\n    ev->computeSizeInFlits(flit_size);\n    int flits = ev->getSizeInFlits();\n\n    // Check to see if there are enough credits to send\n    if ( out_handle.credits < flits ) return false;\n\n    // Update credits and enqueue Request\n    out_handle.credits -= flits;\n    out_handle.queue.push(ev);\n\n    /* Update timing, congestion, do tracing here */\n    \n    return true;\n}\n")),(0,a.kt)("h3",{id:"example-2-sending-a-request-from-an-endpoint"},"Example 2: Sending a Request from an endpoint"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'SimpleNetwork::Request *req = new SimpleNetwork::Request();\nSST::Interfaces::StringEvent *strEv = new SST::Interfaces::StringEvent("hi!");\nreq->src = my_endpoint_id;\nreq->dest = a_destination_id;\nreq->size_in_bits = sizeof(strEv->getString()) * 8;\nreq->vn = vn;\nreq->givePayload(strEv);\n\nif (!net_iface->send(req, req->vn))\n{\n    // Try sending later\n    request_buffer.push_back(req);\n}\n')),(0,a.kt)("h2",{id:"header"},"Header"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/interfaces/simpleNetwork.h>\n")))}d.isMDXComponent=!0}}]);