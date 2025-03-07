"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80581],{11886:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>d,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"core/iface/StandardMem/reqhandler","title":"RequestHandler","description":"In constrast to StandardMem::Requests to handle request by type.","source":"@site/../docs/core/iface/StandardMem/reqhandler.md","sourceDirName":"core/iface/StandardMem","slug":"/core/iface/StandardMem/reqhandler","permalink":"/sst-docs/docs/core/iface/StandardMem/reqhandler","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/iface/StandardMem/reqhandler.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1684522150000,"frontMatter":{"title":"RequestHandler"},"sidebar":"core","previous":{"title":"RequestConverter","permalink":"/sst-docs/docs/core/iface/StandardMem/reqconverter"},"next":{"title":"Handler","permalink":"/sst-docs/docs/core/iface/StandardMem/handler"}}');var s=r(74848),a=r(28453);const d={title:"RequestHandler"},o=void 0,i={},l=[{value:"Member variables",id:"member-variables",level:2},{value:"Constructor/destructor",id:"constructordestructor",level:2},{value:"Virtual functions",id:"virtual-functions",level:2},{value:"Header",id:"header",level:2}];function c(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["In constrast to ",(0,s.jsx)(t.code,{children:"StandardMem::RequestConverter"})," which the StandardMem interface uses to convert a StandardMem::Request to an SST::Event for use on a link, the ",(0,s.jsx)(t.code,{children:"RequestHandler"})," class defines a similar set of functions for handling requests by type at a compute endpoint. The default implementation of the handler for each Request type returns a fatal error indicating that the StandardMem::Request type is not handled. Endpoints should derive from this class, override the handler for any types they support, and call ",(0,s.jsx)(t.code,{children:"handle"})," on incoming StandardMem::Requests to handle request by type."]}),"\n",(0,s.jsx)(t.h2,{id:"member-variables",children:"Member variables"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"RequestHandler"})," class requires access to an SST::Output object which enables it to raise fatal errors for unimplemented handlers. This should be passed to the constructor"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"out"})," (Output*) An SST::Output object"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"constructordestructor",children:"Constructor/destructor"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"RequestConverter(SST::Output* o) : out(o) {}\nvirtual ~RequestConverter() {}\n"})}),"\n",(0,s.jsx)(t.p,{children:"The RequestHandler class constructor takes a pointer to an SST Output object."}),"\n",(0,s.jsx)(t.h2,{id:"virtual-functions",children:"Virtual functions"}),"\n",(0,s.jsx)(t.p,{children:"The following functions are virtual and should be overridden with handlers for each type of request that the endpoint handles. Any function that is not overridden will invoke the base class version which results in a fatal error."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"virtual void handle(Read* request);\nvirtual void handle(ReadResp* request);\nvirtual void handle(Write* request);\nvirtual void handle(WriteResp* request);\nvirtual void handle(FlushAddr* request);\nvirtual void handle(FlushResp* request);\nvirtual void handle(ReadLock* request);\nvirtual void handle(WriteUnlock* request);\nvirtual void handle(LoadLink* request);\nvirtual void handle(StoreConditional* request);\nvirtual void handle(MoveData* request);\nvirtual void handle(CustomReq* request);\nvirtual void handle(CustomResp* request);\nvirtual void handle(InvNotify* request);\n"})}),"\n",(0,s.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/interfaces/stdMem.h>\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>o});var n=r(96540);const s={},a=n.createContext(s);function d(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);