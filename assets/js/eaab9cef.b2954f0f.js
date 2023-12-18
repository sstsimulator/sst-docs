"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9798],{75335:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var r=s(85893),i=s(11151);const d={title:"WriteResp"},t=void 0,l={id:"core/iface/StandardMem/req/writeresp",title:"WriteResp",description:"Response Type None  &nbsp;",source:"@site/../docs/core/iface/StandardMem/req/writeresp.md",sourceDirName:"core/iface/StandardMem/req",slug:"/core/iface/StandardMem/req/writeresp",permalink:"/sst-docs/docs/core/iface/StandardMem/req/writeresp",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/iface/StandardMem/req/writeresp.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"WriteResp"},sidebar:"core",previous:{title:"Write",permalink:"/sst-docs/docs/core/iface/StandardMem/req/write"},next:{title:"ReadLock",permalink:"/sst-docs/docs/core/iface/StandardMem/req/readlock"}},c={},a=[{value:"Member variables",id:"member-variables",level:2},{value:"Member functions",id:"member-functions",level:2},{value:"Defined in <code>Request</code> base class",id:"defined-in-request-base-class",level:3},{value:"Virtual functions inherited from the <code>Request</code> base class",id:"virtual-functions-inherited-from-the-request-base-class",level:3},{value:"makeResponse",id:"makeresponse",level:4},{value:"needsResponse",id:"needsresponse",level:4},{value:"convert",id:"convert",level:4},{value:"handle",id:"handle",level:4},{value:"getString",id:"getstring",level:4},{value:"Header",id:"header",level:2}];function o(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"// Constructor\nSST::Interfaces::StandardMem::WriteResp(id_t id, Addr pAddr, uint64_t size, flags_t flags = 0,\n    Addr vAddr = 0, Addr iPtr = 0, uint32_t tid = 0);\nSST::Interfaces::StandardMem::WriteResp(Write* writeEv);\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Response Type"})," None  \xa0",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Needs Response"})," ",(0,r.jsx)(n.code,{children:"false"}),"  \xa0",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Corresponding request types"})," ",(0,r.jsx)(n.a,{href:"write",children:"StandardMem::Write"}),", ",(0,r.jsx)(n.a,{href:"writeunlock",children:"StandardMem::WriteUnlock"}),", ",(0,r.jsx)(n.a,{href:"storeconditional",children:"StandardMem::StoreConditional"}),", ",(0,r.jsx)(n.a,{href:"movedata",children:"StandardMem::MoveData"})]}),"\n",(0,r.jsx)(n.p,{children:"The StandardMem::WriteResp request class defines a response to a memory write. All fields are copied from the corresponding Write request although if the corresponding write request was conditional, the WriteResp may have the F_FAIL flag set if the write failed."}),"\n",(0,r.jsx)(n.h2,{id:"member-variables",children:"Member variables"}),"\n",(0,r.jsxs)(n.p,{children:["Including those inherited from the ",(0,r.jsx)(n.code,{children:"StandardMem::Request"})," base class, ",(0,r.jsx)(n.code,{children:"StandardMem::WriteResp"})," includes the following member variables."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"id"})," (id_t) A request or response identifier. This id matches that of the corresponding Write request."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"flags"})," (flags_t) A 32-bit vector indicating any special flags added to the request"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"pAddr"})," (Addr) The physical starting address for the bytes written"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"vAddr"})," (Addr) The virtual (if any) starting address for the bytes written"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"size"})," (uint64_t) The number of bytes that were requested to be written"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"iPtr"})," (Addr) An instruction pointer. This is optional metadata."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"tid"})," (uint32_t) An optional thread ID, can be used by memory systems if needed"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"member-functions",children:"Member functions"}),"\n",(0,r.jsxs)(n.h3,{id:"defined-in-request-base-class",children:["Defined in ",(0,r.jsx)(n.a,{href:"class",children:(0,r.jsx)(n.code,{children:"Request"})})," base class"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"getId"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"setNoncacheable"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"unsetNoncacheable"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"getNoncacheable"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"setSuccess"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"unsetSuccess"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"getSuccess"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"setFail"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"unsetFail"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"getFail"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"setTrace"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"unsetTrace"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"getTrace"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"setFlag"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"unsetFlag"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"getFlag"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"clearAllFlags"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"getAllFlags"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"getFlagString"})}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"virtual-functions-inherited-from-the-request-base-class",children:["Virtual functions inherited from the ",(0,r.jsx)(n.a,{href:"class",children:(0,r.jsx)(n.code,{children:"Request"})})," base class"]}),"\n",(0,r.jsx)(n.h4,{id:"makeresponse",children:"makeResponse"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"Request* makeResponse();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Returns ",(0,r.jsx)(n.code,{children:"nullptr"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"needsresponse",children:"needsResponse"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"bool needsResponse();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Returns ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"convert",children:"convert"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"SST::Event* convert(RequestConverter* converter);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Invokes ",(0,r.jsx)(n.code,{children:"convert()"})," on the supplied ",(0,r.jsx)(n.code,{children:"converter"})," visitor class to return an SST::Event in an implementation-specific format."]}),"\n",(0,r.jsx)(n.h4,{id:"handle",children:"handle"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"virtual void handle(RequestHandler* handler) =0;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Invokes ",(0,r.jsx)(n.code,{children:"handle()"})," on the supplied ",(0,r.jsx)(n.code,{children:"handler"})," visitor class to handle the event according to type."]}),"\n",(0,r.jsx)(n.h4,{id:"getstring",children:"getString"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"virtual std::string getString() =0;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns a formatted string listing all fields of the WriteResp."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"Example Output:\nID: 817, Type: WriteResp, Flags: [], PhysAddr: 0x13240, VirtAddr: 0x13240, Size: 4, InstPtr: 0x10ed8, ThreadID: 0\n"})}),"\n",(0,r.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/interfaces/stdMem.h>\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>t});var r=s(67294);const i={},d=r.createContext(i);function t(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);