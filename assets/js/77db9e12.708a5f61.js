"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4596],{28501:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var d=n(74848),r=n(28453);const l={title:"FlushResp"},i=void 0,c={id:"core/iface/StandardMem/req/flushresp",title:"FlushResp",description:"Response Type None  &nbsp;",source:"@site/../docs/core/iface/StandardMem/req/flushresp.md",sourceDirName:"core/iface/StandardMem/req",slug:"/core/iface/StandardMem/req/flushresp",permalink:"/sst-docs/docs/core/iface/StandardMem/req/flushresp",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/iface/StandardMem/req/flushresp.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:168452215e4,frontMatter:{title:"FlushResp"},sidebar:"core",previous:{title:"FlushAddr",permalink:"/sst-docs/docs/core/iface/StandardMem/req/flushaddr"},next:{title:"MoveData",permalink:"/sst-docs/docs/core/iface/StandardMem/req/movedata"}},t={},a=[{value:"Member variables",id:"member-variables",level:2},{value:"Member functions",id:"member-functions",level:2},{value:"Defined in <code>Request</code> base class",id:"defined-in-request-base-class",level:3},{value:"Virtual functions inherited from the <code>Request</code> base class",id:"virtual-functions-inherited-from-the-request-base-class",level:3},{value:"makeResponse",id:"makeresponse",level:4},{value:"needsResponse",id:"needsresponse",level:4},{value:"convert",id:"convert",level:4},{value:"handle",id:"handle",level:4},{value:"getString",id:"getstring",level:4},{value:"Header",id:"header",level:2}];function h(e){const s={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-cpp",children:"// Constructor\nSST::Interfaces::StandardMem::FlushResp(id_t id, Addr pAddr, uint64_t size, flags_t flags = 0,\n    Addr vAddr = 0, Addr iPtr = 0, uint32_t tid = 0);\nSST::Interfaces::StandardMem::FlushResp(FlushAddr* fl, flags_t newFlags = 0);\n"})}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Response Type"})," None  \xa0",(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.strong,{children:"Needs Response"})," ",(0,d.jsx)(s.code,{children:"false"}),"  \xa0",(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.strong,{children:"Corresponding request types"})," ",(0,d.jsx)(s.a,{href:"flushaddr",children:"StandardMem::FlushAddr"})]}),"\n",(0,d.jsxs)(s.p,{children:["The StandardMem::FlushResp request class defines a response to a cache flush (",(0,d.jsx)(s.a,{href:"flushaddr",children:"SST::StandardMem::Request::FlushAddr"}),"). The ",(0,d.jsx)(s.code,{children:"id"}),", ",(0,d.jsx)(s.code,{children:"pAddr"}),", ",(0,d.jsx)(s.code,{children:"vAddr"}),", ",(0,d.jsx)(s.code,{children:"size"}),", ",(0,d.jsx)(s.code,{children:"flags"})," and ",(0,d.jsx)(s.code,{children:"tid"})," fields are copied from the corresponding Flush request. In some memory system implementations, flushes can fail. As such, a ",(0,d.jsx)(s.code,{children:"FlushResp"})," may have the ",(0,d.jsx)(s.code,{children:"F_FAIL"})," flag set on it and the endpoint would need to handle that case appropriately. In the constructor above, the ",(0,d.jsx)(s.code,{children:"newFlags"})," field is added to the existing set of flags copied from the flush request (flushEv)."]}),"\n",(0,d.jsx)(s.h2,{id:"member-variables",children:"Member variables"}),"\n",(0,d.jsxs)(s.p,{children:["Including those inherited from the ",(0,d.jsx)(s.code,{children:"StandardMem::Request"})," base class, ",(0,d.jsx)(s.code,{children:"StandardMem::FlushResp"})," includes the following member variables."]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"id"})," (id_t) A request or response identifier. This id matches that of the corresponding flush request."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"flags"})," (flags_t) A 32-bit vector indicating any special flags added to the request"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"pAddr"})," (Addr) The physical byte address for the line being flushed"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"vAddr"})," (Addr) The virtual (if any) address for the line being flushed"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"size"})," (uint64_t) The number of bytes to flush"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"iPtr"})," (Addr) An instruction pointer. This is optional metadata."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"tid"})," (uint32_t) An optional thread ID, can be used by memory systems if needed"]}),"\n"]}),"\n",(0,d.jsx)(s.h2,{id:"member-functions",children:"Member functions"}),"\n",(0,d.jsxs)(s.h3,{id:"defined-in-request-base-class",children:["Defined in ",(0,d.jsx)(s.a,{href:"class",children:(0,d.jsx)(s.code,{children:"Request"})})," base class"]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"getId"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"setNoncacheable"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"unsetNoncacheable"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"getNoncacheable"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"setSuccess"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"unsetSuccess"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"getSuccess"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"setFail"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"unsetFail"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"getFail"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"setTrace"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"unsetTrace"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"getTrace"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"setFlag"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"unsetFlag"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"getFlag"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"clearAllFlags"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"getAllFlags"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"getFlagString"})}),"\n"]}),"\n",(0,d.jsxs)(s.h3,{id:"virtual-functions-inherited-from-the-request-base-class",children:["Virtual functions inherited from the ",(0,d.jsx)(s.a,{href:"class",children:(0,d.jsx)(s.code,{children:"Request"})})," base class"]}),"\n",(0,d.jsx)(s.h4,{id:"makeresponse",children:"makeResponse"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-cpp",children:"Request* makeResponse();\n"})}),"\n",(0,d.jsxs)(s.p,{children:["Returns ",(0,d.jsx)(s.code,{children:"nullptr"}),"."]}),"\n",(0,d.jsx)(s.h4,{id:"needsresponse",children:"needsResponse"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-cpp",children:"bool needsResponse();\n"})}),"\n",(0,d.jsxs)(s.p,{children:["Returns ",(0,d.jsx)(s.code,{children:"false"}),"."]}),"\n",(0,d.jsx)(s.h4,{id:"convert",children:"convert"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-cpp",children:"SST::Event* convert(RequestConverter* converter);\n"})}),"\n",(0,d.jsxs)(s.p,{children:["Invokes ",(0,d.jsx)(s.code,{children:"convert()"})," on the supplied ",(0,d.jsx)(s.code,{children:"converter"})," visitor class to return an SST::Event in an implementation-specific format."]}),"\n",(0,d.jsx)(s.h4,{id:"handle",children:"handle"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-cpp",children:"virtual void handle(RequestHandler* handler) =0;\n"})}),"\n",(0,d.jsxs)(s.p,{children:["Invokes ",(0,d.jsx)(s.code,{children:"handle()"})," on the supplied ",(0,d.jsx)(s.code,{children:"handler"})," visitor class to handle the event according to type."]}),"\n",(0,d.jsx)(s.h4,{id:"getstring",children:"getString"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-cpp",children:"virtual std::string getString() =0;\n"})}),"\n",(0,d.jsx)(s.p,{children:"Returns a formatted string listing all fields of the FlushResp."}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-sh",children:"Example Outputs:\nID: 112, Type: FlushResp, Flags: [F_FAIL] PhysAddr: 0x13158, VirtAddr: 0x13158, Size: 8, InstPtr: 0x10176, ThreadID: 0\nID: 112, Type: FlushResp, Flags: [] PhysAddr: 0x13158, VirtAddr: 0x13158, Size: 8, InstPtr: 0x10176, ThreadID: 0\n"})}),"\n",(0,d.jsx)(s.h2,{id:"header",children:"Header"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-cpp",children:"#include <sst/core/interfaces/stdMem.h>\n"})})]})}function o(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>c});var d=n(96540);const r={},l=d.createContext(r);function i(e){const s=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(l.Provider,{value:s},e.children)}}}]);