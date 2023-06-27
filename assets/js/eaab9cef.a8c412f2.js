"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9798],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,k=c["".concat(o,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"WriteResp"},l=void 0,s={unversionedId:"core/iface/StandardMem/req/writeresp",id:"core/iface/StandardMem/req/writeresp",title:"WriteResp",description:"Response Type None  &nbsp;",source:"@site/../docs/core/iface/StandardMem/req/writeresp.md",sourceDirName:"core/iface/StandardMem/req",slug:"/core/iface/StandardMem/req/writeresp",permalink:"/sst-docs/docs/core/iface/StandardMem/req/writeresp",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/iface/StandardMem/req/writeresp.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"WriteResp"},sidebar:"core",previous:{title:"Write",permalink:"/sst-docs/docs/core/iface/StandardMem/req/write"},next:{title:"ReadLock",permalink:"/sst-docs/docs/core/iface/StandardMem/req/readlock"}},o={},p=[{value:"Member variables",id:"member-variables",level:2},{value:"Member functions",id:"member-functions",level:2},{value:"Defined in <code>Request</code> base class",id:"defined-in-request-base-class",level:3},{value:"Virtual functions inherited from the <code>Request</code> base class",id:"virtual-functions-inherited-from-the-request-base-class",level:3},{value:"makeResponse",id:"makeresponse",level:4},{value:"needsResponse",id:"needsresponse",level:4},{value:"convert",id:"convert",level:4},{value:"handle",id:"handle",level:4},{value:"getString",id:"getstring",level:4},{value:"Header",id:"header",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Constructor\nSST::Interfaces::StandardMem::WriteResp(id_t id, Addr pAddr, uint64_t size, flags_t flags = 0,\n    Addr vAddr = 0, Addr iPtr = 0, uint32_t tid = 0);\nSST::Interfaces::StandardMem::WriteResp(Write* writeEv);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Response Type")," None  ","\xa0",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Needs Response")," ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"  ","\xa0",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Corresponding request types")," ",(0,a.kt)("a",{parentName:"p",href:"write"},"StandardMem::Write"),", ",(0,a.kt)("a",{parentName:"p",href:"writeunlock"},"StandardMem::WriteUnlock"),", ",(0,a.kt)("a",{parentName:"p",href:"storeconditional"},"StandardMem::StoreConditional"),", ",(0,a.kt)("a",{parentName:"p",href:"movedata"},"StandardMem::MoveData")),(0,a.kt)("p",null,"The StandardMem::WriteResp request class defines a response to a memory write. All fields are copied from the corresponding Write request although if the corresponding write request was conditional, the WriteResp may have the F_FAIL flag set if the write failed."),(0,a.kt)("h2",{id:"member-variables"},"Member variables"),(0,a.kt)("p",null,"Including those inherited from the ",(0,a.kt)("inlineCode",{parentName:"p"},"StandardMem::Request")," base class, ",(0,a.kt)("inlineCode",{parentName:"p"},"StandardMem::WriteResp")," includes the following member variables."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"id")," (id_t) A request or response identifier. This id matches that of the corresponding Write request."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"flags")," (flags_t) A 32-bit vector indicating any special flags added to the request"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"pAddr")," (Addr) The physical starting address for the bytes written"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"vAddr")," (Addr) The virtual (if any) starting address for the bytes written"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"size")," (uint64_t) The number of bytes that were requested to be written"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"iPtr")," (Addr) An instruction pointer. This is optional metadata."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tid")," (uint32_t) An optional thread ID, can be used by memory systems if needed")),(0,a.kt)("h2",{id:"member-functions"},"Member functions"),(0,a.kt)("h3",{id:"defined-in-request-base-class"},"Defined in ",(0,a.kt)("a",{parentName:"h3",href:"class"},(0,a.kt)("inlineCode",{parentName:"a"},"Request"))," base class"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getId")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setNoncacheable")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unsetNoncacheable")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getNoncacheable")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setSuccess")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unsetSuccess")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getSuccess")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setFail")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unsetFail")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getFail")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setTrace")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unsetTrace")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getTrace")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setFlag")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unsetFlag")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getFlag")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clearAllFlags")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getAllFlags")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getFlagString"))),(0,a.kt)("h3",{id:"virtual-functions-inherited-from-the-request-base-class"},"Virtual functions inherited from the ",(0,a.kt)("a",{parentName:"h3",href:"class"},(0,a.kt)("inlineCode",{parentName:"a"},"Request"))," base class"),(0,a.kt)("h4",{id:"makeresponse"},"makeResponse"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"Request* makeResponse();\n")),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"nullptr"),"."),(0,a.kt)("h4",{id:"needsresponse"},"needsResponse"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"bool needsResponse();\n")),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("h4",{id:"convert"},"convert"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"SST::Event* convert(RequestConverter* converter);\n")),(0,a.kt)("p",null,"Invokes ",(0,a.kt)("inlineCode",{parentName:"p"},"convert()")," on the supplied ",(0,a.kt)("inlineCode",{parentName:"p"},"converter")," visitor class to return an SST::Event in an implementation-specific format."),(0,a.kt)("h4",{id:"handle"},"handle"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"virtual void handle(RequestHandler* handler) =0;\n")),(0,a.kt)("p",null,"Invokes ",(0,a.kt)("inlineCode",{parentName:"p"},"handle()")," on the supplied ",(0,a.kt)("inlineCode",{parentName:"p"},"handler")," visitor class to handle the event according to type."),(0,a.kt)("h4",{id:"getstring"},"getString"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"virtual std::string getString() =0;\n")),(0,a.kt)("p",null,"Returns a formatted string listing all fields of the WriteResp."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"Example Output:\nID: 817, Type: WriteResp, Flags: [], PhysAddr: 0x13240, VirtAddr: 0x13240, Size: 4, InstPtr: 0x10ed8, ThreadID: 0\n")),(0,a.kt)("h2",{id:"header"},"Header"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/interfaces/stdMem.h>\n")))}m.isMDXComponent=!0}}]);