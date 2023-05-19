"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(k,s(s({ref:t},d),{},{components:n})):a.createElement(k,s({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"CustomResp"},s=void 0,i={unversionedId:"core/iface/StandardMem/req/customresp",id:"core/iface/StandardMem/req/customresp",title:"CustomResp",description:"Response Type None  &nbsp;",source:"@site/../docs/core/iface/StandardMem/req/customresp.md",sourceDirName:"core/iface/StandardMem/req",slug:"/core/iface/StandardMem/req/customresp",permalink:"/sst-docs/docs/core/iface/StandardMem/req/customresp",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/iface/StandardMem/req/customresp.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"CustomResp"},sidebar:"core",previous:{title:"CustomReq",permalink:"/sst-docs/docs/core/iface/StandardMem/req/customreq"},next:{title:"CustomData",permalink:"/sst-docs/docs/core/iface/StandardMem/req/customdata"}},o={},p=[{value:"Member variables",id:"member-variables",level:2},{value:"Member functions",id:"member-functions",level:2},{value:"Defined in <code>Request</code> base class",id:"defined-in-request-base-class",level:3},{value:"Virtual functions inherited from the <code>Request</code> base class",id:"virtual-functions-inherited-from-the-request-base-class",level:3},{value:"makeResponse",id:"makeresponse",level:4},{value:"needsResponse",id:"needsresponse",level:4},{value:"convert",id:"convert",level:4},{value:"handle",id:"handle",level:4},{value:"getString",id:"getstring",level:4},{value:"Header",id:"header",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Constructor\nSST::Interfaces::StandardMem::CustomResp(id_t id, CustomData* data, flags_t flags = 0, \n    Addr iPtr = 0, uint32_t tid = 0);\nSST::Interfaces::StandardMem::CustomResp(CustomReq* customReqEv);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response Type")," None  ","\xa0",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Needs Response")," ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"  ","\xa0",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Corresponding request types")," ",(0,r.kt)("a",{parentName:"p",href:"customreq"},"StandardMem::CustomReq")),(0,r.kt)("p",null,"The StandardMem::CustomResp request class defines a response to a custom request (",(0,r.kt)("a",{parentName:"p",href:"customreq"},"CustomReq"),"). "),(0,r.kt)("h2",{id:"member-variables"},"Member variables"),(0,r.kt)("p",null,"Including those inherited from the ",(0,r.kt)("inlineCode",{parentName:"p"},"StandardMem::Request")," base class, ",(0,r.kt)("inlineCode",{parentName:"p"},"StandardMem::CustomResp")," includes the following member variables."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"id")," (id_t) A request or response identifier. This id matches that of the corresponding CustomReq request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"flags")," (flags_t) A 32-bit vector indicating any special flags added to the request"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," (CustomData*) A custom data structure encapsulating any custom fields provided by this custom response"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"iPtr")," (Addr) An instruction pointer. This is optional metadata."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tid")," (uint32_t) An optional thread ID, can be used by memory systems if needed")),(0,r.kt)("h2",{id:"member-functions"},"Member functions"),(0,r.kt)("h3",{id:"defined-in-request-base-class"},"Defined in ",(0,r.kt)("a",{parentName:"h3",href:"class"},(0,r.kt)("inlineCode",{parentName:"a"},"Request"))," base class"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setNoncacheable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unsetNoncacheable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getNoncacheable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setSuccess")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unsetSuccess")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getSuccess")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setFail")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unsetFail")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getFail")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setTrace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unsetTrace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getTrace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setFlag")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unsetFlag")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getFlag")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clearAllFlags")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getAllFlags")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getFlagString"))),(0,r.kt)("h3",{id:"virtual-functions-inherited-from-the-request-base-class"},"Virtual functions inherited from the ",(0,r.kt)("a",{parentName:"h3",href:"class"},(0,r.kt)("inlineCode",{parentName:"a"},"Request"))," base class"),(0,r.kt)("h4",{id:"makeresponse"},"makeResponse"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"Request* makeResponse();\n")),(0,r.kt)("p",null,"Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"nullptr"),"."),(0,r.kt)("h4",{id:"needsresponse"},"needsResponse"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"bool needsResponse();\n")),(0,r.kt)("p",null,"Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h4",{id:"convert"},"convert"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"SST::Event* convert(RequestConverter* converter);\n")),(0,r.kt)("p",null,"Invokes ",(0,r.kt)("inlineCode",{parentName:"p"},"convert()")," on the supplied ",(0,r.kt)("inlineCode",{parentName:"p"},"converter")," visitor class to return an SST::Event in an implementation-specific format."),(0,r.kt)("h4",{id:"handle"},"handle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"virtual void handle(RequestHandler* handler) =0;\n")),(0,r.kt)("p",null,"Invokes ",(0,r.kt)("inlineCode",{parentName:"p"},"handle()")," on the supplied ",(0,r.kt)("inlineCode",{parentName:"p"},"handler")," visitor class to handle the event according to type."),(0,r.kt)("h4",{id:"getstring"},"getString"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"virtual std::string getString() =0;\n")),(0,r.kt)("p",null,"Returns a formatted string listing the fields of the CustomResp request as well as the result of calling ",(0,r.kt)("inlineCode",{parentName:"p"},"getString()")," on the the CustomData object ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'Example Output:\n# In this example, data->getString() returns "atomic increment at addr 0x7ffffcf0"\nID: 133, Type: CustomResp, Flags: [],  atomic increment at addr 0x7ffffcf0, InstPtr: 0x0, ThreadID: 0\n')),(0,r.kt)("h2",{id:"header"},"Header"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/interfaces/stdMem.h>\n")))}u.isMDXComponent=!0}}]);