"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79533],{28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>a});var r=n(96540);const d={},t=r.createContext(d);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(t.Provider,{value:s},e.children)}},40417:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"core/iface/StandardMem/req/movedata","title":"MoveData","description":"Response Type StandardMem::WriteResp  &nbsp;","source":"@site/../docs/core/iface/StandardMem/req/movedata.md","sourceDirName":"core/iface/StandardMem/req","slug":"/core/iface/StandardMem/req/movedata","permalink":"/sst-docs/docs/core/iface/StandardMem/req/movedata","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/iface/StandardMem/req/movedata.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1684522150000,"frontMatter":{"title":"MoveData"},"sidebar":"core","previous":{"title":"FlushResp","permalink":"/sst-docs/docs/core/iface/StandardMem/req/flushresp"},"next":{"title":"InvNotify","permalink":"/sst-docs/docs/core/iface/StandardMem/req/invnotify"}}');var d=n(74848),t=n(28453);const i={title:"MoveData"},a=void 0,l={},c=[{value:"Member variables",id:"member-variables",level:2},{value:"Member functions",id:"member-functions",level:2},{value:"Defined in <code>Request</code> base class",id:"defined-in-request-base-class",level:3},{value:"Virtual functions inherited from the <code>Request</code> base class",id:"virtual-functions-inherited-from-the-request-base-class",level:3},{value:"makeResponse",id:"makeresponse",level:4},{value:"needsResponse",id:"needsresponse",level:4},{value:"convert",id:"convert",level:4},{value:"handle",id:"handle",level:4},{value:"getString",id:"getstring",level:4},{value:"Header",id:"header",level:2}];function o(e){const s={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-cpp",children:"// Constructor\nSST::Interfaces::StandardMem::MoveData(Addr pSrcAddr, Addr pDstAddr, uint64_t size, bool posted = false,\n    flags_t flags = 0, Addr vSrcAddr = 0, Addr vDstAddr = 0, Addr iPtr = 0, uint32_t tid = 0);\n"})}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Response Type"})," ",(0,d.jsx)(s.a,{href:"writeresp",children:"StandardMem::WriteResp"}),"  \xa0",(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.strong,{children:"Needs Response"})," Depends on the value of the ",(0,d.jsx)(s.code,{children:"posted"})," variable"]}),"\n",(0,d.jsxs)(s.p,{children:["The StandardMem::MoveData request class defines a request to move and/or copy data from a source address to a destination address. An example use case would be moving data into a scratchpad by copying data from a source memory address to a destination scratchpad address. Whether the data is migrated (moved) or copied is up to the underlying memory system implementation. An interface that receives this request should return a response containing the requested data if the ",(0,d.jsx)(s.code,{children:"posted"})," field is ",(0,d.jsx)(s.code,{children:"false"}),". Fields for both virtual and physical addresses are available, the interpretation of those fields is up to the underlying memory system model. A physical address is however required in the constructor for both the source and destination locations."]}),"\n",(0,d.jsx)(s.h2,{id:"member-variables",children:"Member variables"}),"\n",(0,d.jsxs)(s.p,{children:["Including those inherited from the ",(0,d.jsx)(s.code,{children:"StandardMem::Request"})," base class, ",(0,d.jsx)(s.code,{children:"StandardMem::MoveData"})," includes the following member variables."]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"id"})," (id_t) A request or response identifier. A request and its response contain the same identifier."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"flags"})," (flags_t) A 32-bit vector indicating any special flags added to the request"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"pSrcAddr"})," (Addr) The physical starting address for the bytes to move"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"pDstAddr"})," (Addr) The physical starting address of where to move the bytes to"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"vSrcAddr"})," (Addr) The virtual (if any) starting address for the bytes to move"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"vAddr"})," (Addr) The virtual (if any) starting address of where to move the bytes to"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"size"})," (uint64_t) The number of bytes to read"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"posted"})," (bool) Whether the write is posted (does not require a response)"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"iPtr"})," (Addr) An instruction pointer. This is optional metadata."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"tid"})," (uint32_t) An optional thread ID, can be used by memory systems if needed"]}),"\n"]}),"\n",(0,d.jsx)(s.h2,{id:"member-functions",children:"Member functions"}),"\n",(0,d.jsxs)(s.h3,{id:"defined-in-request-base-class",children:["Defined in ",(0,d.jsx)(s.a,{href:"class",children:(0,d.jsx)(s.code,{children:"Request"})})," base class"]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"getId"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"setNoncacheable"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"unsetNoncacheable"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"getNoncacheable"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"setSuccess"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"unsetSuccess"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"getSuccess"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"setFail"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"unsetFail"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"getFail"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"setTrace"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"unsetTrace"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"getTrace"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"setFlag"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"unsetFlag"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"getFlag"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"clearAllFlags"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"getAllFlags"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"getFlagString"})}),"\n"]}),"\n",(0,d.jsxs)(s.h3,{id:"virtual-functions-inherited-from-the-request-base-class",children:["Virtual functions inherited from the ",(0,d.jsx)(s.a,{href:"class",children:(0,d.jsx)(s.code,{children:"Request"})})," base class"]}),"\n",(0,d.jsx)(s.h4,{id:"makeresponse",children:"makeResponse"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-cpp",children:"Request* makeResponse();\n"})}),"\n",(0,d.jsxs)(s.p,{children:["Creates a ",(0,d.jsx)(s.a,{href:"writeresp",children:"WriteResp"})," initialized as a response to this MoveData request.\nInitializes the ",(0,d.jsx)(s.code,{children:"data"})," field in the response to be ",(0,d.jsx)(s.code,{children:"size"})," bytes with value ",(0,d.jsx)(s.code,{children:"0"}),"."]}),"\n",(0,d.jsx)(s.h4,{id:"needsresponse",children:"needsResponse"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-cpp",children:"bool needsResponse();\n"})}),"\n",(0,d.jsxs)(s.p,{children:["Returns ",(0,d.jsx)(s.code,{children:"true"}),"."]}),"\n",(0,d.jsx)(s.h4,{id:"convert",children:"convert"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-cpp",children:"SST::Event* convert(RequestConverter* converter);\n"})}),"\n",(0,d.jsxs)(s.p,{children:["Invokes ",(0,d.jsx)(s.code,{children:"convert()"})," on the supplied ",(0,d.jsx)(s.code,{children:"converter"})," visitor class to return an SST::Event in an implementation-specific format."]}),"\n",(0,d.jsx)(s.h4,{id:"handle",children:"handle"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-cpp",children:"virtual void handle(RequestHandler* handler) =0;\n"})}),"\n",(0,d.jsxs)(s.p,{children:["Invokes ",(0,d.jsx)(s.code,{children:"handle()"})," on the supplied ",(0,d.jsx)(s.code,{children:"handler"})," visitor class to handle the event according to type."]}),"\n",(0,d.jsx)(s.h4,{id:"getstring",children:"getString"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-cpp",children:"virtual std::string getString() =0;\n"})}),"\n",(0,d.jsx)(s.p,{children:"Returns a formatted string listing all fields of the MoveData."}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-sh",children:"Example Output:\nID: 12, Type: MoveData, Flags: [], SrcPhysAddr: 0x141a40, SrcVirtAddr: 0x0, DstPhysAddr: 0x5b00, DstVirtAddr: 0x0, Size: 32, Posted: F, InstPtr: 0x0, ThreadID: 0\n"})}),"\n",(0,d.jsx)(s.h2,{id:"header",children:"Header"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-cpp",children:"#include <sst/core/interfaces/stdMem.h>\n"})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}}}]);