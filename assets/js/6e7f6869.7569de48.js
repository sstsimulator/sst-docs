"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6870],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,h=u["".concat(o,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},59156:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"FlushAddr"},i=void 0,s={unversionedId:"core/iface/StandardMem/req/flushaddr",id:"core/iface/StandardMem/req/flushaddr",title:"FlushAddr",description:"Response Type StandardMem::FlushResp  &nbsp;",source:"@site/../docs/core/iface/StandardMem/req/flushaddr.md",sourceDirName:"core/iface/StandardMem/req",slug:"/core/iface/StandardMem/req/flushaddr",permalink:"/sst-docs/docs/core/iface/StandardMem/req/flushaddr",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/iface/StandardMem/req/flushaddr.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"FlushAddr"},sidebar:"core",previous:{title:"StoreConditional",permalink:"/sst-docs/docs/core/iface/StandardMem/req/storeconditional"},next:{title:"FlushResp",permalink:"/sst-docs/docs/core/iface/StandardMem/req/flushresp"}},o={},d=[{value:"Member variables",id:"member-variables",level:2},{value:"Member functions",id:"member-functions",level:2},{value:"Defined in <code>Request</code> base class",id:"defined-in-request-base-class",level:3},{value:"Virtual functions inherited from the <code>Request</code> base class",id:"virtual-functions-inherited-from-the-request-base-class",level:3},{value:"makeResponse",id:"makeresponse",level:4},{value:"needsResponse",id:"needsresponse",level:4},{value:"convert",id:"convert",level:4},{value:"handle",id:"handle",level:4},{value:"getString",id:"getstring",level:4},{value:"Header",id:"header",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Constructor\nSST::Interfaces::StandardMem::FlushAddr(Addr pAddr, uint64_t size, bool inv, uint32_t depth, \n    flags_t flags = 0, Addr vAddr = 0, Addr iPtr = 0, uint32_t tid = 0);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response Type")," ",(0,r.kt)("a",{parentName:"p",href:"flushresp"},"StandardMem::FlushResp"),"  ","\xa0",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Needs Response")," ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("p",null,"The StandardMem::FlushAddr request class defines a request to flush a line from cache by address. An interface that receives this request should return an acknowledgement response. Fields for both a virtual and physical address are available, the interpretation of those fields is up to the underlying memory system model. ",(0,r.kt)("inlineCode",{parentName:"p"},"physAddr")," is however required in the constructor. The ",(0,r.kt)("inlineCode",{parentName:"p"},"inv")," field indicates whether a matching line should also be invalidated from cache as well as written back to memory if dirty. The ",(0,r.kt)("inlineCode",{parentName:"p"},"depth")," field indicates how many components deep the flush should propogate. For example, in a system with an L1, L2, and L3: a value of 1 indicates that the flush should flush data from the L1 only whereas a value of 2 indicates the flush should flush data from both the L1 and L2 caches. "),(0,r.kt)("h2",{id:"member-variables"},"Member variables"),(0,r.kt)("p",null,"Including those inherited from the ",(0,r.kt)("inlineCode",{parentName:"p"},"StandardMem::Request")," base class, ",(0,r.kt)("inlineCode",{parentName:"p"},"StandardMem::FlushAddr")," includes the following member variables."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"id")," (id_t) A request or response identifier. A request and its response contain the same identifier."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"flags")," (flags_t) A 32-bit vector indicating any special flags added to the request"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"pAddr")," (Addr) The physical starting address for the bytes to be read"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"vAddr")," (Addr) The virtual (if any) starting address for the bytes to be read"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"size")," (uint64_t) The number of bytes to read"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inv")," (bool) If ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", the flush should also invalidate the line. If ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", the line can remain in the cache in a clean state."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"depth")," (uint32_t)  How many levels down the memory hierarchy the flush should propogate"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"iPtr")," (Addr) An instruction pointer. This is optional metadata."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tid")," (uint32_t) An optional thread ID, can be used by memory systems if needed")),(0,r.kt)("h2",{id:"member-functions"},"Member functions"),(0,r.kt)("h3",{id:"defined-in-request-base-class"},"Defined in ",(0,r.kt)("a",{parentName:"h3",href:"class"},(0,r.kt)("inlineCode",{parentName:"a"},"Request"))," base class"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setNoncacheable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unsetNoncacheable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getNoncacheable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setSuccess")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unsetSuccess")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getSuccess")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setFail")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unsetFail")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getFail")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setTrace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unsetTrace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getTrace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setFlag")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unsetFlag")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getFlag")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clearAllFlags")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getAllFlags")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getFlagString"))),(0,r.kt)("h3",{id:"virtual-functions-inherited-from-the-request-base-class"},"Virtual functions inherited from the ",(0,r.kt)("a",{parentName:"h3",href:"class"},(0,r.kt)("inlineCode",{parentName:"a"},"Request"))," base class"),(0,r.kt)("h4",{id:"makeresponse"},"makeResponse"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"Request* makeResponse();\n")),(0,r.kt)("p",null,"Creates a ",(0,r.kt)("a",{parentName:"p",href:"flushresp"},"FlushResp")," initialized as a response to this FlushAddr request. If the memory system implementation allows flushes to fail, the memory interface should subsequently set the F_FAIL flag on the response if neccessary."),(0,r.kt)("h4",{id:"needsresponse"},"needsResponse"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"bool needsResponse();\n")),(0,r.kt)("p",null,"Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h4",{id:"convert"},"convert"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"SST::Event* convert(RequestConverter* converter);\n")),(0,r.kt)("p",null,"Invokes ",(0,r.kt)("inlineCode",{parentName:"p"},"convert()")," on the supplied ",(0,r.kt)("inlineCode",{parentName:"p"},"converter")," visitor class to return an SST::Event in an implementation-specific format."),(0,r.kt)("h4",{id:"handle"},"handle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"virtual void handle(RequestHandler* handler) =0;\n")),(0,r.kt)("p",null,"Invokes ",(0,r.kt)("inlineCode",{parentName:"p"},"handle()")," on the supplied ",(0,r.kt)("inlineCode",{parentName:"p"},"handler")," visitor class to handle the event according to type."),(0,r.kt)("h4",{id:"getstring"},"getString"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"virtual std::string getString() =0;\n")),(0,r.kt)("p",null,"Returns a formatted string listing all fields of the FlushAddr."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"Example Outputs:\nID: 133, Type: Read, FlushAddr: [], PhysAddr: 0x13158, VirtAddr: 0x13158, Size: 8, Inv: T, Depth: 2, InstPtr: 0x10176, ThreadID: 0\n")),(0,r.kt)("h2",{id:"header"},"Header"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/interfaces/stdMem.h>\n")))}c.isMDXComponent=!0}}]);