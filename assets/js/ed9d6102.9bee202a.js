"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13174],{28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}},45753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"core/iface/SimpleNetwork/NetworkInspector","title":"NetworkInspector","description":"A NetworkInspector is a SubComponent that can be used to inspect events that are in-flight throughout a network. A library that sends Requests through a network, which wrap an Event type custom to that library, can implement a NetworkInspector capable of returning information about the Request and the wrapped custom Event.","source":"@site/../docs/core/iface/SimpleNetwork/NetworkInspector.md","sourceDirName":"core/iface/SimpleNetwork","slug":"/core/iface/SimpleNetwork/NetworkInspector","permalink":"/sst-docs/docs/core/iface/SimpleNetwork/NetworkInspector","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/iface/SimpleNetwork/NetworkInspector.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1684522150000,"frontMatter":{"title":"NetworkInspector"},"sidebar":"core","previous":{"title":"Handler","permalink":"/sst-docs/docs/core/iface/SimpleNetwork/handler"},"next":{"title":"Request","permalink":"/sst-docs/docs/core/iface/SimpleNetwork/Request"}}');var s=n(74848),o=n(28453);const i={title:"NetworkInspector"},c=void 0,a={},p=[{value:"Requirements",id:"requirements",level:2},{value:"NetworkInspector",id:"networkinspector",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Supporting NetworkInspectors in a network",id:"example-1-supporting-networkinspectors-in-a-network",level:3},{value:"Example 2: Implementing a NetworkInspector",id:"example-2-implementing-a-networkinspector",level:3},{value:"Header",id:"header",level:2}];function l(e){const t={br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"class NetworkInspector : public SubComponent\n{\npublic:\n    SST_ELI_REGISTER_SUBCOMPONENT_ELI(SST::Interfaces::SimpleNetwork::NetworkInspector, std::string)\n\n    NetworkInspector(ComponentId_t id) : SubComponent(id) {}\n\n    virtual ~NetworkInspector() {}\n\n    virtual void inspectNetworkData(Request* req) = 0;\n};\n"})}),"\n",(0,s.jsx)(t.p,{children:"A NetworkInspector is a SubComponent that can be used to inspect events that are in-flight throughout a network. A library that sends Requests through a network, which wrap an Event type custom to that library, can implement a NetworkInspector capable of returning information about the Request and the wrapped custom Event."}),"\n",(0,s.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Network interface"})," \xa0",(0,s.jsx)(t.br,{}),"\n","Networks that support the SimpleNetwork API are not required to support inspection. If they do, they should use this SubComponent API. To support NetworkInspector, network components (e.g., SimpleNetwork interfaces, routers) throughout the network should support loading NetworkInspector SubComponents, and should call the ",(0,s.jsx)(t.code,{children:"inspectNetworkData()"})," function when a Request is encountered."]}),"\n",(0,s.jsx)(t.h3,{id:"networkinspector",children:"NetworkInspector"}),"\n",(0,s.jsxs)(t.p,{children:["Perform some inspection when the ",(0,s.jsx)(t.code,{children:"inspectNetworkData"})," function is called. For example, update a statistic or generate output. Do not modify the Request."]}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.h3,{id:"example-1-supporting-networkinspectors-in-a-network",children:"Example 1: Supporting NetworkInspectors in a network"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/merlin/interfaces/portControl.h"',children:'#include <sst/core/interfaces/simpleNetwork.h>\n\nclass PortControl : public PortInterface {\npublic:\n    \n    /* ELI macros */\n\n    SST_ELI_DOCUMENT_SUBCOMPONENT_SLOTS(\n        //highlight-next-line\n        {"inspector_slot", "Network inspectors", "SST::Interfaces::SimpleNetwork::NetworkInspector"}\n        /* Other subcomponent slots */\n    )\n\nprivate:\n    /* Class members */\n    //highlight-next-line\n    std::vector<SST::Interfaces::SimpleNetwork::NetworkInspector*> network_inspectors;\n};\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/merlin/interfaces/portControl.cc"',children:'PortControl::PortControl(ComponentId_t cid, Params& params, /* Other function parameters */) :\n    PortInterface(cid), /* Other variable initialization */ {\n        /* Other constructor code */\n\n        // Create any NetworkInspectors\n        for ( unsigned int i = 0; i < inspector_names.size(); i++ ) {\n            Params empty;\n            //highlight-next-line\n            SimpleNetwork::NetworkInspector* ni = loadAnonymousSubComponent<SimpleNetwork::NetworkInspector>\n                (inspector_names[i], "inspector_slot", i, ComponentInfo::INSERT_STATS, empty, port_name);\n            if ( ni == NULL ) {\n                merlin_abort.fatal(CALL_INFO, 1, "NetworkInspector: %s, not found.\\n", inspector_names[i].c_str());\n            }\n            network_inspectors.push_back(ni);\n        }\n\n        /* More constructor code */\n}\n\n/* handle_output is called when an event is ready to be sent on the PortControl\'s link */\nint PortControl::handle_output(Event* ev) {\n    /* Code to locate the event to send, \'send_event\' and prepare it */\n\n    // Also send the request to all registered NetworkInspectors\n    for ( unsigned int i = 0; i < network_inspectors.size(); i++ ) {\n        //highlight-next-line\n        network_inspectors[i]->inspectNetworkData(send_event->inspectRequest());\n    }\n\n    /* Code to send the event */\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"example-2-implementing-a-networkinspector",children:"Example 2: Implementing a NetworkInspector"}),"\n",(0,s.jsxs)(t.p,{children:["This inspector counts the number of packets sent on a link. Each time the network calls ",(0,s.jsx)(t.code,{children:"inspectNetworkData"}),", it increments a statistic."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/merlin/inspectors/testInspector.h"',children:'#include <sst/core/interfaces/simpleNetwork.h>\n\nclass TestNetworkInspector : public SimpleNetwork::NetworkInspector {\npublic:\n    SST_ELI_REGISTER_SUBCOMPONENT(\n        TestNetworkInspector,\n        "merlin",\n        "test_network_inspector",\n        SST_ELI_ELEMENT_VERSION(1,0,0),\n         "Used to test NetworkInspector functionality.  Duplicates send_packet_count in hr_router.",\n        SST::Interfaces::SimpleNetwork::NetworkInspector)\n\n    SST_ELI_DOCUMENT_STATISTICS(\n        { "test_count", "Count number of packets sent on link", "packets", 1}\n    )\n\nprivate:\n    Statistic<uint64_t>* test_count;\npublic:\n    TestNetworkInspector(ComponentId_t id, Params& params, const std::string& sub_id);\n\n    void inspectNetworkData(SimpleNetwork::Request* req);\n};\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/merlin/inspectors/testInspector.cc"',children:' TestNetworkInspector::TestNetworkInspector(ComponentId_t id, Params& params, const std::string& sub_id) :\n        SimpleNetwork::NetworkInspector(id)\n{\n    test_count = registerStatistic<uint64_t>("test_count", sub_id);\n}\n\nvoid TestNetworkInspector::inspectNetworkData(SimpleNetwork::Request* req) {\n    test_count->addData(1);\n}\n\n'})}),"\n",(0,s.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/interfaces/simpleNetwork.h>\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}}}]);