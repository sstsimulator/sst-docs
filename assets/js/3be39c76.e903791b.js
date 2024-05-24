"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2063],{90769:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=n(74848),d=n(28453);const i={title:"Read"},t=void 0,l={id:"core/iface/StandardMem/req/read",title:"Read",description:"Response Type StandardMem::ReadResp  &nbsp;",source:"@site/../docs/core/iface/StandardMem/req/read.md",sourceDirName:"core/iface/StandardMem/req",slug:"/core/iface/StandardMem/req/read",permalink:"/sst-docs/docs/core/iface/StandardMem/req/read",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/iface/StandardMem/req/read.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:168452215e4,frontMatter:{title:"Read"},sidebar:"core",previous:{title:"StandardMem::Request",permalink:"/sst-docs/docs/core/iface/StandardMem/req/class"},next:{title:"ReadResp",permalink:"/sst-docs/docs/core/iface/StandardMem/req/readresp"}},c={},a=[{value:"Member variables",id:"member-variables",level:2},{value:"Member functions",id:"member-functions",level:2},{value:"Defined in <code>Request</code> base class",id:"defined-in-request-base-class",level:3},{value:"Virtual functions inherited from the <code>Request</code> base class",id:"virtual-functions-inherited-from-the-request-base-class",level:3},{value:"makeResponse",id:"makeresponse",level:4},{value:"needsResponse",id:"needsresponse",level:4},{value:"convert",id:"convert",level:4},{value:"handle",id:"handle",level:4},{value:"getString",id:"getstring",level:4},{value:"Header",id:"header",level:2}];function o(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:"// Constructor\nSST::Interfaces::StandardMem::Read(Addr pAddr, uint64_t size, flags_t flags = 0, Addr vAddr = 0, \n    Addr iPtr = 0, uint32_t tid = 0);\n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Response Type"})," ",(0,r.jsx)(s.a,{href:"readresp",children:"StandardMem::ReadResp"}),"  \xa0",(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:"Needs Response"})," ",(0,r.jsx)(s.code,{children:"true"})]}),"\n",(0,r.jsxs)(s.p,{children:["The StandardMem::Read request class defines a memory read. An interface that receives this request should return a response containing the requested data. Fields for both a virtual and physical address are available, the interpretation of those fields is up to the underlying memory system model. ",(0,r.jsx)(s.code,{children:"physAddr"})," is however required in the constructor."]}),"\n",(0,r.jsx)(s.h2,{id:"member-variables",children:"Member variables"}),"\n",(0,r.jsxs)(s.p,{children:["Including those inherited from the ",(0,r.jsx)(s.code,{children:"StandardMem::Request"})," base class, ",(0,r.jsx)(s.code,{children:"StandardMem::Read"})," includes the following member variables."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"id"})," (id_t) A request or response identifier. A request and its response contain the same identifier."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"flags"})," (flags_t) A 32-bit vector indicating any special flags added to the request"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"pAddr"})," (Addr) The physical starting address for the bytes to be read"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"vAddr"})," (Addr) The virtual (if any) starting address for the bytes to be read"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"size"})," (uint64_t) The number of bytes to read"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"iPtr"})," (Addr) An instruction pointer. This is optional metadata."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"tid"})," (uint32_t) An optional thread ID, can be used by memory systems if needed"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"member-functions",children:"Member functions"}),"\n",(0,r.jsxs)(s.h3,{id:"defined-in-request-base-class",children:["Defined in ",(0,r.jsx)(s.a,{href:"class",children:(0,r.jsx)(s.code,{children:"Request"})})," base class"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"getId"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"setNoncacheable"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"unsetNoncacheable"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"getNoncacheable"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"setSuccess"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"unsetSuccess"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"getSuccess"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"setFail"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"unsetFail"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"getFail"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"setTrace"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"unsetTrace"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"getTrace"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"setFlag"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"unsetFlag"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"getFlag"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"clearAllFlags"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"getAllFlags"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"getFlagString"})}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"virtual-functions-inherited-from-the-request-base-class",children:["Virtual functions inherited from the ",(0,r.jsx)(s.a,{href:"class",children:(0,r.jsx)(s.code,{children:"Request"})})," base class"]}),"\n",(0,r.jsx)(s.h4,{id:"makeresponse",children:"makeResponse"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:"Request* makeResponse();\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Creates a ",(0,r.jsx)(s.a,{href:"readresp",children:"ReadResp"})," initialized as a response to this read request.\nInitializes the ",(0,r.jsx)(s.code,{children:"data"})," field in the response to be ",(0,r.jsx)(s.code,{children:"size"})," bytes with value ",(0,r.jsx)(s.code,{children:"0"}),"."]}),"\n",(0,r.jsx)(s.admonition,{title:"Important",type:"info",children:(0,r.jsxs)(s.p,{children:["Interfaces ",(0,r.jsx)(s.em,{children:"must"})," set the ",(0,r.jsx)(s.code,{children:"data"})," field in the response after calling this function if the simulation uses data values. The ",(0,r.jsx)(s.code,{children:"makeResponse()"})," function only initializes the field to 0."]})}),"\n",(0,r.jsx)(s.h4,{id:"needsresponse",children:"needsResponse"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:"bool needsResponse();\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Returns ",(0,r.jsx)(s.code,{children:"true"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"convert",children:"convert"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:"SST::Event* convert(RequestConverter* converter);\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Invokes ",(0,r.jsx)(s.code,{children:"convert()"})," on the supplied ",(0,r.jsx)(s.code,{children:"converter"})," visitor class to return an SST::Event in an implementation-specific format."]}),"\n",(0,r.jsx)(s.h4,{id:"handle",children:"handle"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:"virtual void handle(RequestHandler* handler) =0;\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Invokes ",(0,r.jsx)(s.code,{children:"handle()"})," on the supplied ",(0,r.jsx)(s.code,{children:"handler"})," visitor class to handle the event according to type."]}),"\n",(0,r.jsx)(s.h4,{id:"getstring",children:"getString"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:"virtual std::string getString() =0;\n"})}),"\n",(0,r.jsx)(s.p,{children:"Returns a formatted string listing all fields of the Read."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"Example Outputs:\nID: 133, Type: Read, Flags: [], PhysAddr: 0x13158, VirtAddr: 0x13158, Size: 8, InstPtr: 0x10176, ThreadID: 0\nID: 206, Type: Read, Flags: [F_TRACE,F_NONCACHEABLE], PhysAddr: 0x7ffffcf0, VirtAddr: 0x7ffffcf0, Size: 8, InstPtr: 0x103e2, ThreadID: 0\n"})}),"\n",(0,r.jsx)(s.h2,{id:"header",children:"Header"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:"#include <sst/core/interfaces/stdMem.h>\n"})})]})}function h(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>l});var r=n(96540);const d={},i=r.createContext(d);function t(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);