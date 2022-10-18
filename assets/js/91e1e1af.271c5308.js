"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3602],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(f,p(p({ref:t},s),{},{components:a})):n.createElement(f,p({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var u=2;u<l;u++)p[u]=a[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1235:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),p=["components"],i={id:"fatal",title:"fatal()"},o=void 0,u={unversionedId:"cpp/output/fatal",id:"cpp/output/fatal",title:"fatal()",description:"Fully Qualified Name",source:"@site/../docs/cpp/output/fatal.md",sourceDirName:"cpp/output",slug:"/cpp/output/fatal",permalink:"/sst-website/docs/cpp/output/fatal",draft:!1,editUrl:"https://github.com/sstsimulator/sst-website/edit/master/docs/../docs/cpp/output/fatal.md",tags:[],version:"current",lastUpdatedBy:"Ryan Ledbetter",lastUpdatedAt:1539909317,formattedLastUpdatedAt:"Oct 19, 2018",frontMatter:{id:"fatal",title:"fatal()"},sidebar:"C++",previous:{title:"debug()",permalink:"/sst-website/docs/cpp/output/debug"},next:{title:"init()",permalink:"/sst-website/docs/cpp/output/init"}},s={},c=[{value:"Fully Qualified Name",id:"fully-qualified-name",level:2},{value:"Remarks",id:"remarks",level:3},{value:"Requirements",id:"requirements",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"See Also",id:"see-also",level:2}],m={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"fully-qualified-name"},"Fully Qualified Name"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"SST::Output::fatal()\n")),(0,l.kt)("h3",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"Output the fatal message with formatting as specified by the format parameter and ",(0,l.kt)("strong",{parentName:"p"},"end the simulation"),"."),(0,l.kt)("p",null,"The message will be sent to the output location and to stderr. The output will be prepended with the expanded prefix set in the call to the ",(0,l.kt)("a",{parentName:"p",href:"/sst-website/docs/cpp/output/init"},"init function"),". "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NOTE"),": fatal() will call MPI_Abort(exit_code) to terminate simulation."),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,"Main definition"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/output.h>\n")),(0,l.kt)("p",null,"Also included in the following"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/simulation.h>\n#include <sst/core/component.h>\n")),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"void SST::Output::fatal(uint32_t line, const char* file, const char* func, uint32_t exit_code, const char* format, ... )\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"line")," - Line number of calling function (use CALL_INFO macro)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"file")," - File name calling function (use CALL_INFO macro)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"func")," - Function name calling function (use CALL_INFO macro)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"exit_code")," - The exit code used for termination of simulation. Will be passed to MPI_Abort()."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"format")," - Format string. All valid formats for printf are available."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"...")," - Argument for format."),(0,l.kt)("h2",{id:"return-value"},"Return Value"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"None")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"example-1"},"Example 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'this->out.fatal(CALL_INFO,-1, "Unknown phase!\\n");\n')),(0,l.kt)("h3",{id:"example-2"},"Example 2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'output->fatal(CALL_INFO, -1, "Opal: address :%lld requested with fileId:%d has no space left\\n", vAddress, fileID);\n')),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/sst-website/docs/cpp/output/init"},"init()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/sst-website/docs/cpp/output/"},"output()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/sst-website/docs/cpp/output/debug"},"debug()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/sst-website/docs/cpp/output/verbose"},"verbose()"))))}d.isMDXComponent=!0}}]);