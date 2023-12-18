"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9521],{53733:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var r=n(85893),i=n(11151);const t={title:"Write"},d=void 0,l={id:"core/iface/StandardMem/req/write",title:"Write",description:"Response Type StandardMem::WriteResp  &nbsp;",source:"@site/../docs/core/iface/StandardMem/req/write.md",sourceDirName:"core/iface/StandardMem/req",slug:"/core/iface/StandardMem/req/write",permalink:"/sst-docs/docs/core/iface/StandardMem/req/write",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/iface/StandardMem/req/write.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1702928554,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{title:"Write"},sidebar:"core",previous:{title:"ReadResp",permalink:"/sst-docs/docs/core/iface/StandardMem/req/readresp"},next:{title:"WriteResp",permalink:"/sst-docs/docs/core/iface/StandardMem/req/writeresp"}},c={},a=[{value:"Member variables",id:"member-variables",level:2},{value:"Member functions",id:"member-functions",level:2},{value:"Defined in <code>Request</code> base class",id:"defined-in-request-base-class",level:3},{value:"Virtual functions inherited from the <code>Request</code> base class",id:"virtual-functions-inherited-from-the-request-base-class",level:3},{value:"makeResponse",id:"makeresponse",level:4},{value:"needsResponse",id:"needsresponse",level:4},{value:"convert",id:"convert",level:4},{value:"handle",id:"handle",level:4},{value:"getString",id:"getstring",level:4},{value:"Header",id:"header",level:2}];function o(e){const s={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:"// Constructor\nSST::Interfaces::StandardMem::Write(Addr pAddr, uint64_t size, std::vector<uint8_t> data, \n    bool posted = false, flags_t flags = 0, Addr vAddr = 0, Addr iPtr = 0, uint32_t tid = 0);\n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Response Type"})," ",(0,r.jsx)(s.a,{href:"writeresp",children:"StandardMem::WriteResp"}),"  \xa0",(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:"Needs Response"})," Depends on the value of the ",(0,r.jsx)(s.code,{children:"posted"})," variable"]}),"\n",(0,r.jsxs)(s.p,{children:["The StandardMem::Write request class defines a memory write. An interface that receives this request should return a WriteResp response acknowledging the write completion if the request's ",(0,r.jsx)(s.code,{children:"posted"})," field is ",(0,r.jsx)(s.code,{children:"false"}),". Otherwise, no response is expected. Fields for both a virtual and physical address are available, the interpretation of those fields is up to the underlying memory system model. ",(0,r.jsx)(s.code,{children:"physAddr"})," is however required in the constructor."]}),"\n",(0,r.jsx)(s.h2,{id:"member-variables",children:"Member variables"}),"\n",(0,r.jsxs)(s.p,{children:["Including those inherited from the ",(0,r.jsx)(s.code,{children:"StandardMem::Request"})," base class, ",(0,r.jsx)(s.code,{children:"StandardMem::Write"})," includes the following member variables."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"id"})," (id_t) A request or response identifier. A request and its response contain the same identifier."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"flags"})," (flags_t) A 32-bit vector indicating any special flags added to the request"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"pAddr"})," (Addr) The physical starting byte address to write to"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"vAddr"})," (Addr) The virtual (if any) starting byte address to write the data to"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"size"})," (uint64_t) The number of bytes to write (same as size of data vector)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"data"})," (std::vector<uint8_t>) Bytes to write"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"posted"})," (bool) Whether the write is posted (does not require a response)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"iPtr"})," (Addr) An instruction pointer. This is optional metadata."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"tid"})," (uint32_t) An optional thread ID, can be used by memory systems if needed"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"member-functions",children:"Member functions"}),"\n",(0,r.jsxs)(s.h3,{id:"defined-in-request-base-class",children:["Defined in ",(0,r.jsx)(s.a,{href:"class",children:(0,r.jsx)(s.code,{children:"Request"})})," base class"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"getId"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"setNoncacheable"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"unsetNoncacheable"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"getNoncacheable"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"setSuccess"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"unsetSuccess"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"getSuccess"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"setFail"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"unsetFail"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"getFail"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"setTrace"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"unsetTrace"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"getTrace"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"setFlag"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"unsetFlag"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"getFlag"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"clearAllFlags"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"getAllFlags"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"getFlagString"})}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"virtual-functions-inherited-from-the-request-base-class",children:["Virtual functions inherited from the ",(0,r.jsx)(s.a,{href:"class",children:(0,r.jsx)(s.code,{children:"Request"})})," base class"]}),"\n",(0,r.jsx)(s.h4,{id:"makeresponse",children:"makeResponse"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:"Request* makeResponse();\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Creates a ",(0,r.jsx)(s.a,{href:"writeresp",children:"WriteResp"})," initialized as a response to this write request."]}),"\n",(0,r.jsx)(s.h4,{id:"needsresponse",children:"needsResponse"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:"bool needsResponse();\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Returns ",(0,r.jsx)(s.code,{children:"false"})," if the ",(0,r.jsx)(s.code,{children:"posted"})," field is set to ",(0,r.jsx)(s.code,{children:"true"}),", other ",(0,r.jsx)(s.code,{children:"false"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"convert",children:"convert"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:"SST::Event* convert(RequestConverter* converter);\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Invokes ",(0,r.jsx)(s.code,{children:"convert()"})," on the supplied ",(0,r.jsx)(s.code,{children:"converter"})," visitor class to return an SST::Event in an implementation-specific format."]}),"\n",(0,r.jsx)(s.h4,{id:"handle",children:"handle"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:"virtual void handle(RequestHandler* handler) =0;\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Invokes ",(0,r.jsx)(s.code,{children:"handle()"})," on the supplied ",(0,r.jsx)(s.code,{children:"handler"})," visitor class to handle the event according to type."]}),"\n",(0,r.jsx)(s.h4,{id:"getstring",children:"getString"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:"virtual std::string getString() =0;\n"})}),"\n",(0,r.jsx)(s.p,{children:"Returns a formatted string listing all fields of the Write."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"Example Output:\nID: 817, Type: Write, Flags: [], PhysAddr: 0x13240, VirtAddr: 0x13240, Size: 4, Posted: F, InstPtr: 0x10ed8, ThreadID: 0, Payload: 0x48656c6c\n"})}),"\n",(0,r.jsx)(s.h2,{id:"header",children:"Header"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:"#include <sst/core/interfaces/stdMem.h>\n"})})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>d});var r=n(67294);const i={},t=r.createContext(i);function d(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);