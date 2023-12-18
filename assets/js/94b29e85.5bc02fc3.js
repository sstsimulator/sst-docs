"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5112],{3427:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=t(85893),r=t(11151);const s={title:"isNetworkInitialized"},a=void 0,o={id:"core/iface/SimpleNetwork/isNetworkInitialized",title:"isNetworkInitialized",description:"This function is used during SST's init() phase to give a network time to initialize itself prior to accepting requests. Once the network is initialized the function should return true. The following must be the case at that point:",source:"@site/../docs/core/iface/SimpleNetwork/isNetworkInitialized.md",sourceDirName:"core/iface/SimpleNetwork",slug:"/core/iface/SimpleNetwork/isNetworkInitialized",permalink:"/sst-docs/docs/core/iface/SimpleNetwork/isNetworkInitialized",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/iface/SimpleNetwork/isNetworkInitialized.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1695940750,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"isNetworkInitialized"},sidebar:"core",previous:{title:"getLinkBW",permalink:"/sst-docs/docs/core/iface/SimpleNetwork/getLinkBW"},next:{title:"recv",permalink:"/sst-docs/docs/core/iface/SimpleNetwork/recv"}},l={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: A network interface using isNetworkInitialized",id:"example-1-a-network-interface-using-isnetworkinitialized",level:3},{value:"Example 2: An endpoint using isNetworkInitialized",id:"example-2-an-endpoint-using-isnetworkinitialized",level:3},{value:"Header",id:"header",level:2}];function c(e){const n={br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"virtual bool isNetworkInitialized() const = 0;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This function is used during SST's ",(0,i.jsx)(n.code,{children:"init()"})," phase to give a network time to initialize itself prior to accepting requests. Once the network is initialized the function should return ",(0,i.jsx)(n.code,{children:"true"}),". The following must be the case at that point:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Any future call to ",(0,i.jsx)(n.code,{children:"isNetworkInitialized()"})," must return ",(0,i.jsx)(n.code,{children:"true"})]}),"\n",(0,i.jsxs)(n.li,{children:["A call to ",(0,i.jsx)(n.code,{children:"getEndpointID()"})," returns an accurate ID"]}),"\n",(0,i.jsxs)(n.li,{children:["A call to ",(0,i.jsx)(n.code,{children:"getLinkBW()"})," returns the correct link bandwidth"]}),"\n",(0,i.jsxs)(n.li,{children:["A call to ",(0,i.jsx)(n.code,{children:"sendUntimedData()"})," successfully sends data on the network"]}),"\n",(0,i.jsxs)(n.li,{children:["A call to ",(0,i.jsx)(n.code,{children:"recvUntimedData()"})," returns Requests if any have arrived"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["During ",(0,i.jsx)(n.code,{children:"init()"}),", endpoints must not call the above functions until this function indicates the network is initialized."]}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Network interface"})," \xa0",(0,i.jsx)(n.br,{}),"\n","May return ",(0,i.jsx)(n.code,{children:"false"})," during early phases of ",(0,i.jsx)(n.code,{children:"init()"}),". As soon as the network is initialized, should return ",(0,i.jsx)(n.code,{children:"true"}),". May not later return ",(0,i.jsx)(n.code,{children:"false"})," after previously returning ",(0,i.jsx)(n.code,{children:"true"}),". When returning ",(0,i.jsx)(n.code,{children:"true"}),", the functions identified above must operate correctly."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Endpoint"})," \xa0",(0,i.jsx)(n.br,{}),"\n","Must use this function during ",(0,i.jsx)(n.code,{children:"init()"})," to wait until the network is initialized prior to calling any of the functions listed above."]}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"returns"})," (bool) Whether the network is initialized"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.h3,{id:"example-1-a-network-interface-using-isnetworkinitialized",children:"Example 1: A network interface using isNetworkInitialized"}),"\n",(0,i.jsxs)(n.p,{children:["In this example, taken from the Merlin element library, the SimpleNetwork interface uses phase numbers 0-2 of ",(0,i.jsx)(n.code,{children:"init()"})," to perform internal initialization and allow network components to agree on network parameters. During those phase numbers, calls to ",(0,i.jsx)(n.code,{children:"isNetworkInitialized()"})," will return ",(0,i.jsx)(n.code,{children:"false"}),". Once the network is ready, ",(0,i.jsx)(n.code,{children:"isNetworkInitialized()"})," returns ",(0,i.jsx)(n.code,{children:"true"}),", allowing the endpoints to do their own ",(0,i.jsx)(n.code,{children:"init()"})," protocols if needed."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/merlin/interfaces/linkControl.h/cc"',children:"#include <sst/core/interfaces/simpleNetwork.h>\n\nLinkControl::LinkControl(...) {\n    ...\n    network_initialized = false;\n    ...\n}\n\nvoid LinkControl::init(unsigned int phase)\n{\n    /* Starting at phase=0 of init(), merlin routers and interfaces perform handshakes to determine\n     * endpoint IDs, agree on link bandwidths, and establish routing information */\n     switch ( phase ) {\n        case 0:\n            /* Start negotiating bandwidth */\n            break;\n        case 1:\n            /* Finish negotiating bandwidth and start setting up mappings for virtual networks */\n            /* Set the endpoint ID */\n            break;\n        case 2:\n            /* Set up mappings for virtual networks; other initialization activities */\n            network_initialized = true;\n            break;\n        default:\n            /* Network is initialized now, handle init() for the endpoints by sending/receiving untimed events */\n            break;\n     }\n}\n\nbool isNetworkInitialized() const { return network_initialized; }\n"})}),"\n",(0,i.jsx)(n.h3,{id:"example-2-an-endpoint-using-isnetworkinitialized",children:"Example 2: An endpoint using isNetworkInitialized"}),"\n",(0,i.jsxs)(n.p,{children:["During each phase of ",(0,i.jsx)(n.code,{children:"init()"}),", an endpoint must call ",(0,i.jsx)(n.code,{children:"init()"})," on a SimpleNetwork interface. It must not call any other functions on the interface until a call to ",(0,i.jsx)(n.code,{children:"isNetworkInitialized()"})," returns ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"void Endpoint::init(unsigned int phase) {\n    net_iface->init(phase);\n\n    //highlight-next-line\n    bool networkReady = net_iface->isNetworkInitialized();\n\n    if (networkReady) {\n        /* Broadcast all the endpoint IDs so the endpoints can send data */\n        SST::Interfaces::SimpleNetwork::Request * req = new SST::Interfaces::SimpleNetwork::Request();\n        req->dest = SST::Interfaces::SimpleNetwork::INIT_BROADCAST_ADDR; /* Broadcast */\n        req->src = net_iface->getEndpointID();\n        \n        // Create an event with this endpoint's name so the other endpoints can map our ID to our name\n        SST::Interfaces::StringEvent* strEv = new SST::Interfaces::StringEvent(getName());\n        req->givePayload(strEv);\n\n        net_iface->sendUntimedData(req); \n\n        while (SST::Interfaces::SimpleNetwork::Request* req = net_iface->recvUntimedData()) {\n            /* set up a mapping table of the other endpoints' names -> IDs */\n            SST::Interfaces::StringEvent* name = static_cast<SST::Interfaces::StringEvent*>(req->takePayload());\n            IDMap.insert(std::make_pair(name->getString(), req->src));\n            delete req;\n            delete name; /* Have to delete separately from req since we used takePayload() to extract it */\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/interfaces/simpleNetwork.h>\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(67294);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);