"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7719],{49368:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var r=t(85893),s=t(11151);const a={title:"Handler"},i=void 0,d={id:"core/iface/StandardMem/handler",title:"Handler",description:"StandardMem passes requests back to an endpoint using a handler. Handlers should use one of the above function signatures and are passed to the interface in its constructor. Calling this function denotes a transfer of responsibility for a Request from the interface to the endpoint. Once called, the interface should no longer access the request and the endpoint is responsible for subsequently deleteing the request if necessary.",source:"@site/../docs/core/iface/StandardMem/handler.md",sourceDirName:"core/iface/StandardMem",slug:"/core/iface/StandardMem/handler",permalink:"/sst-docs/docs/core/iface/StandardMem/handler",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/iface/StandardMem/handler.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1695940750,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"Handler"},sidebar:"core",previous:{title:"RequestHandler",permalink:"/sst-docs/docs/core/iface/StandardMem/reqhandler"},next:{title:"StringEvent",permalink:"/sst-docs/docs/core/iface/StringEvent/class"}},l={},o=[{value:"Requirements",id:"requirements",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Defining a handler function in an endpoint",id:"example-1-defining-a-handler-function-in-an-endpoint",level:3},{value:"Example 2: Invoking a registered handler from a SimpleMem interface",id:"example-2-invoking-a-registered-handler-from-a-simplemem-interface",level:3},{value:"Header",id:"header",level:2}];function c(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"void func(StandardMem::Request* request);\nvoid func(StandardMem::Request* request, dataT data);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["StandardMem passes requests back to an endpoint using a handler. Handlers should use one of the above function signatures and are passed to the interface in its constructor. Calling this function denotes a transfer of responsibility for a Request from the interface to the endpoint. Once called, the interface should no longer access the ",(0,r.jsx)(n.code,{children:"request"})," and the endpoint is responsible for subsequently ",(0,r.jsx)(n.code,{children:"delete"}),"ing the ",(0,r.jsx)(n.code,{children:"request"})," if necessary."]}),"\n",(0,r.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Memory interface"})," \xa0",(0,r.jsx)(n.br,{}),"\n","Memory interface must support the use of handlers."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Endpoint"})," \xa0",(0,r.jsx)(n.br,{}),"\n","Use of handlers is optional. If not used, endpoint must poll the interface regularly (e.g., during a clock handler)."]}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"request"})," (StandardMem::Request*) The event being passed from the interface to the endpoint"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"data"})," (dataT) A constant returned with the call. This can be used, for example, to differentiate which interface called the handler, when the same handler is used for multiple interfaces."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.h3,{id:"example-1-defining-a-handler-function-in-an-endpoint",children:"Example 1: Defining a handler function in an endpoint"}),"\n",(0,r.jsxs)(n.p,{children:["The following shows a handler used inside miranda's BaseCPU Component. The handler determines which request corresponds the response, does some bookkeeping updates, handles the response, and then deletes it. The ",(0,r.jsx)(n.code,{children:"stdMemHandlers"})," variable is an instance of Miranda's ",(0,r.jsx)(n.code,{children:"StdMemHandler"})," class which inherits from StandardMem's ",(0,r.jsx)(n.a,{href:"reqhandler",children:(0,r.jsx)(n.code,{children:"RequestHandler"})})," visitor class."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/miranda/mirandaCPU.cc"',children:'/*\n * Called by memory interface to return an event to Miranda\n */\nvoid RequestGenCPU::handleEvent( Interfaces::StandardMem::Request* ev )\n{\n\tout->verbose(CALL_INFO, 2, 0, "Recv event for processing from interface\\n");\n\n    // Match this response to its request, using ID\n    Interfaces::StandardMem::Request::id_t reqID = ev->getID();\n\tstd::map<Interfaces::StandardMem::Request::id_t, CPURequest*>::iterator reqFind = requestsInFlight.find(reqID);\n\n\tif(reqFind == requestsInFlight.end()) {\n\t\tout->fatal(CALL_INFO, -1, "Unable to find request %" PRIu64 " in request map.\\n", reqID);\n\t} else{\n\n        /* Some bookkeeping updates, statistics tracking, output, etc here */\n\n        // Handle the response according to type\n        ev->handle(stdMemHandlers);\n\n        /* Some clean up for bookkeeping here */\n\n\t\tdelete ev;\n\t}\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"example-2-invoking-a-registered-handler-from-a-simplemem-interface",children:"Example 2: Invoking a registered handler from a SimpleMem interface"}),"\n",(0,r.jsxs)(n.p,{children:["This example shows how MemHierarchy's StandardInterface subcomponent, which implements the StandardMem interface, triggers callbacks using a handler with the specified signature. The function shown, ",(0,r.jsx)(n.code,{children:"receive"}),", is a callback handler registered on the StandardInterface's Link to the memory subsystem and is called when the Link delivers an SST Event."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",metastring:'title="Excerpt from memHierarchy/standardInterface.cc"',children:'void StandardInterface::receive(SST::Event* ev)\n{\n    // MemEventBase is the memHierarchy library\'s internal event type\n    MemEventBase *me = static_cast<MemEventBase*>(ev);\n    StandardMem::Request* deliverReq = nullptr;\n    \n    /* \n     * Some logic to generate \'deliverReq\' which is the StandardMem::Request that should be passed \n     * back to the endpoint \n     */\n\n    delete me;\n\n    if (deliverReq) {\n#ifdef __SST_DEBUG_OUTPUT__\n        debug.debug(_L5_, "E: %-40" PRIu64 "  %-20s Req:Deliver   (%s)\\n", getCurrentSimCycle(), getName().c_str(), deliverReq->getString().c_str());\n#endif\n// highlight-next-line\n        (*recvHandler_)(deliverReq);\n    }\n\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/interfaces/stdMem.h>\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>i});var r=t(67294);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);