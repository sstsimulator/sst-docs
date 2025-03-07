"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24627],{28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}},74972:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"core/iface/SimpleNetwork/class","title":"SST::Interfaces::SimpleNetwork","description":"The SimpleNetwork interface defines an interface between a network and an endpoint. A network library should define a SubComponent that implements the SimpleNetwork interface. Endpoints can then load that SimpleNetwork SubComponent to interface with the network library.","source":"@site/../docs/core/iface/SimpleNetwork/class.md","sourceDirName":"core/iface/SimpleNetwork","slug":"/core/iface/SimpleNetwork/class","permalink":"/sst-docs/docs/core/iface/SimpleNetwork/class","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/iface/SimpleNetwork/class.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1695940750000,"frontMatter":{"title":"SST::Interfaces::SimpleNetwork"},"sidebar":"core","previous":{"title":"SST Library Interfaces","permalink":"/sst-docs/docs/core/iface/overview"},"next":{"title":"constructor","permalink":"/sst-docs/docs/core/iface/SimpleNetwork/constructor"}}');var s=t(74848),r=t(28453);const o={title:"SST::Interfaces::SimpleNetwork"},l=void 0,a={},c=[{value:"Types",id:"types",level:2},{value:"Implementing a SimpleNetwork interface",id:"implementing-a-simplenetwork-interface",level:2},{value:"Interfacing with a SimpleNetwork interface",id:"interfacing-with-a-simplenetwork-interface",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The SimpleNetwork interface defines an interface between a network and an endpoint. A network library should define a SubComponent that implements the SimpleNetwork interface. Endpoints can then load that SimpleNetwork SubComponent to interface with the network library."}),"\n",(0,s.jsx)(n.h2,{id:"types",children:"Types"}),"\n",(0,s.jsx)(n.p,{children:"SimpleNetwork defines several types."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"nid_t"})," A network ID. This is a 64-bit int."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"Request",children:(0,s.jsx)(n.strong,{children:"Request"})})," A data structure representing both a network send and receive. Send functions accept requests of this type and receive functions return requests of this type."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"NetworkInspector",children:(0,s.jsx)(n.strong,{children:"NetworkInspector"})})," A subcomponent that can be implemented to allow inspecting network requests as they go through a network."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"handler",children:(0,s.jsx)(n.strong,{children:"Handler"})})," A function to notify the endpoint when the SimpleNetwork sends or receives a packet"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"implementing-a-simplenetwork-interface",children:"Implementing a SimpleNetwork interface"}),"\n",(0,s.jsx)(n.p,{children:"In addition to implementing the functions described in this network interface documentation, SimpleNetwork interfaces must also perform the following tasks."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Assign a unique ID to each network endpoint"})}),"\n",(0,s.jsxs)(n.p,{children:["This ID is returned by the ",(0,s.jsx)(n.a,{href:"getEndpointID",children:(0,s.jsx)(n.code,{children:"getEndpointID"})})," function, and the IDs are used in SimpleNetwork::Request to identify where a request originates from (src) and to where it should be sent (dest)."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"getEndpointID",children:"getEndpointID()"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"Request",children:"Request"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Facilitate untimed data transfer"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["During SST's ",(0,s.jsx)(n.a,{href:"../../component/lifecycle/init",children:"init()"})," and ",(0,s.jsx)(n.a,{href:"../../component/lifecycle/init",children:"complete()"})," phases, events can be sent over links. While a network does not need to use these phases itself (although it may), a network ",(0,s.jsx)(n.em,{children:"should"})," support endpoints sending events over network links during these phases. In addition to routing events to specific endpoints, the network must also support broadcasting of messages during the untimed phases when INIT_BROADCAST_ADDRESS is specified as the destination.  This can be done either by the SimpleNetwork object creating an event for each endpoint in the network, or the network routers can use more intelligent algorithms to guarantee that each end point receives exactly one copy of the event."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Support both polling and interrupt-based event delivery"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["All SimpleNetwork events are delivered via a polling function, ",(0,s.jsx)(n.a,{href:"recv",children:(0,s.jsx)(n.code,{children:"recv"})})," which must be called to get an event from a network. SimpleNetworks should also support registering a callback function to notify an endpoint that an event is available."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Support for notification of event send"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A SimpleNetwork implementation should allow an endpoint to register a callback to be called when an event is sent on the SimpleNetwork's output link.  This allows an endpoint that has been blocked due to full buffers to know when to try sending events again."}),"\n",(0,s.jsx)(n.p,{children:"Additionally, the SimpleNetwork interface supports some features that are not required to be supported but are commonly useful."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Trace requests through the network"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"SimpleNetwork::Request events can be tagged as traceable. Interfaces, and network libraries, can use these fields to return trace information about tagged Requests."}),"\n",(0,s.jsx)(n.h2,{id:"interfacing-with-a-simplenetwork-interface",children:"Interfacing with a SimpleNetwork interface"}),"\n",(0,s.jsx)(n.p,{children:"Endpoints that load a SimpleNetwork SubComponent must support the following actions."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Facilitate SST lifecycle for the SubComponent"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This means that the endpoint must call ",(0,s.jsx)(n.code,{children:"init()"}),", ",(0,s.jsx)(n.code,{children:"setup()"}),", ",(0,s.jsx)(n.code,{children:"complete()"}),", and ",(0,s.jsx)(n.code,{children:"finish()"})," on the interface during its own respective functions."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Allow network initialization prior to network use"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In addition to calling ",(0,s.jsx)(n.code,{children:"init()"})," on the SimpleNetwork during its own ",(0,s.jsx)(n.code,{children:"init()"})," function, the endpoint must wait for the network to be initialized before using the network. See ",(0,s.jsx)(n.a,{href:"isNetworkInitialized",children:"isNetworkInitialized"})," for details."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Use network IDs to address messages on the network"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"As described above, SimpleNetworks assign each endpoint an ID. The endpoints must use these IDs to appropriately set the source and destination fields in a network Request."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);