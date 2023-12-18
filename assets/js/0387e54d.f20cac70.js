"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4654],{61024:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var d=n(85893),r=n(11151);const i={title:"ReadResp"},t=void 0,c={id:"core/iface/StandardMem/req/readresp",title:"ReadResp",description:"Response Type None  &nbsp;",source:"@site/../docs/core/iface/StandardMem/req/readresp.md",sourceDirName:"core/iface/StandardMem/req",slug:"/core/iface/StandardMem/req/readresp",permalink:"/sst-docs/docs/core/iface/StandardMem/req/readresp",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/iface/StandardMem/req/readresp.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1702928554,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{title:"ReadResp"},sidebar:"core",previous:{title:"Read",permalink:"/sst-docs/docs/core/iface/StandardMem/req/read"},next:{title:"Write",permalink:"/sst-docs/docs/core/iface/StandardMem/req/write"}},l={},a=[{value:"Member variables",id:"member-variables",level:2},{value:"Member functions",id:"member-functions",level:2},{value:"Defined in <code>Request</code> base class",id:"defined-in-request-base-class",level:3},{value:"Virtual functions inherited from the <code>Request</code> base class",id:"virtual-functions-inherited-from-the-request-base-class",level:3},{value:"makeResponse",id:"makeresponse",level:4},{value:"needsResponse",id:"needsresponse",level:4},{value:"convert",id:"convert",level:4},{value:"handle",id:"handle",level:4},{value:"getString",id:"getstring",level:4},{value:"Header",id:"header",level:2}];function o(e){const s={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-cpp",children:"// Constructor\nSST::Interfaces::StandardMem::ReadResp(id_t id, Addr pAddr, uint64_t size, \n    std::vector<uint8_t> data, flags_t flags = 0, Addr vAddr = 0, Addr iPtr = 0, uint32_t tid = 0);\nSST::Interfaces::StandardMem::ReadResp(Read* readEv, std::vector<uint8_t> data);\n"})}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Response Type"})," None  \xa0",(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.strong,{children:"Needs Response"})," ",(0,d.jsx)(s.code,{children:"false"}),"  \xa0",(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.strong,{children:"Corresponding request types"})," ",(0,d.jsx)(s.a,{href:"read",children:"StandardMem::Read"}),", ",(0,d.jsx)(s.a,{href:"readlock",children:"StandardMem::ReadLock"}),", ",(0,d.jsx)(s.a,{href:"loadlink",children:"StandardMem::LoadLink"})]}),"\n",(0,d.jsxs)(s.p,{children:["The StandardMem::ReadResp request class defines a response to memory reads. The ",(0,d.jsx)(s.code,{children:"id"}),", ",(0,d.jsx)(s.code,{children:"pAddr"}),", ",(0,d.jsx)(s.code,{children:"vAddr"}),", ",(0,d.jsx)(s.code,{children:"size"}),", ",(0,d.jsx)(s.code,{children:"flags"})," and ",(0,d.jsx)(s.code,{children:"tid"})," fields are copied from the corresponding request."]}),"\n",(0,d.jsx)(s.h2,{id:"member-variables",children:"Member variables"}),"\n",(0,d.jsxs)(s.p,{children:["Including those inherited from the ",(0,d.jsx)(s.code,{children:"StandardMem::Request"})," base class, ",(0,d.jsx)(s.code,{children:"StandardMem::ReadResp"})," includes the following member variables."]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"id"})," (id_t) A request or response identifier. This id matches that of the corresponding Read request."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"flags"})," (flags_t) A 32-bit vector indicating any special flags added to the request"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"pAddr"})," (Addr) The physical starting address for the bytes returned by this response"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"vAddr"})," (Addr) The virtual (if any) starting address for the bytes read"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"size"})," (uint64_t) The number of bytes read, equivalent to the size of the data field."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"iPtr"})," (Addr) An instruction pointer. This is optional metadata."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"tid"})," (uint32_t) An optional thread ID, can be used by memory systems if needed"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"data"})," (std::vector<uint8_t>) A vector containing the read data"]}),"\n"]}),"\n",(0,d.jsx)(s.h2,{id:"member-functions",children:"Member functions"}),"\n",(0,d.jsxs)(s.h3,{id:"defined-in-request-base-class",children:["Defined in ",(0,d.jsx)(s.a,{href:"class",children:(0,d.jsx)(s.code,{children:"Request"})})," base class"]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"getId"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"setNoncacheable"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"unsetNoncacheable"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"getNoncacheable"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"setSuccess"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"unsetSuccess"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"getSuccess"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"setFail"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"unsetFail"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"getFail"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"setTrace"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"unsetTrace"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"getTrace"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"setFlag"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"unsetFlag"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"getFlag"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"clearAllFlags"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"getAllFlags"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"getFlagString"})}),"\n"]}),"\n",(0,d.jsxs)(s.h3,{id:"virtual-functions-inherited-from-the-request-base-class",children:["Virtual functions inherited from the ",(0,d.jsx)(s.a,{href:"class",children:(0,d.jsx)(s.code,{children:"Request"})})," base class"]}),"\n",(0,d.jsx)(s.h4,{id:"makeresponse",children:"makeResponse"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-cpp",children:"Request* makeResponse();\n"})}),"\n",(0,d.jsxs)(s.p,{children:["Returns ",(0,d.jsx)(s.code,{children:"nullptr"}),"."]}),"\n",(0,d.jsx)(s.h4,{id:"needsresponse",children:"needsResponse"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-cpp",children:"bool needsResponse();\n"})}),"\n",(0,d.jsxs)(s.p,{children:["Returns ",(0,d.jsx)(s.code,{children:"false"}),"."]}),"\n",(0,d.jsx)(s.h4,{id:"convert",children:"convert"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-cpp",children:"SST::Event* convert(RequestConverter* converter);\n"})}),"\n",(0,d.jsxs)(s.p,{children:["Invokes ",(0,d.jsx)(s.code,{children:"convert()"})," on the supplied ",(0,d.jsx)(s.code,{children:"converter"})," visitor class to return an SST::Event in an implementation-specific format."]}),"\n",(0,d.jsx)(s.h4,{id:"handle",children:"handle"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-cpp",children:"virtual void handle(RequestHandler* handler) =0;\n"})}),"\n",(0,d.jsxs)(s.p,{children:["Invokes ",(0,d.jsx)(s.code,{children:"handle()"})," on the supplied ",(0,d.jsx)(s.code,{children:"handler"})," visitor class to handle the event according to type."]}),"\n",(0,d.jsx)(s.h4,{id:"getstring",children:"getString"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-cpp",children:"virtual std::string getString() =0;\n"})}),"\n",(0,d.jsx)(s.p,{children:"Returns a formatted string listing all fields of the ReadResp."}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-sh",children:"Example Outputs:\nID: 133, Type: ReadResp, Flags: [] PhysAddr: 0x13158, VirtAddr: 0x13158, Size: 8, InstPtr: 0x10176, ThreadID: 0, Payload: 0xf003010000000000\nID: 206, Type: ReadResp, Flags: [F_TRACE,F_NONCACHEABLE] PhysAddr: 0x7ffffcf0, VirtAddr: 0x7ffffcf0, Size: 8, InstPtr: 0x103e2, ThreadID: 0, Payload: 0x0000000000000000\n"})}),"\n",(0,d.jsx)(s.h2,{id:"header",children:"Header"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-cpp",children:"#include <sst/core/interfaces/stdMem.h>\n"})})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>t});var d=n(67294);const r={},i=d.createContext(r);function t(e){const s=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),d.createElement(i.Provider,{value:s},e.children)}}}]);