"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9750],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(f,l(l({ref:t},s),{},{components:a})):r.createElement(f,l({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9427:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),l=["components"],i={title:"fatal"},p=void 0,c={unversionedId:"core/output/fatal",id:"core/output/fatal",title:"fatal",description:"Output the fatal message with formatting as specified by the format parameter and end the simulation. This will call MPIAbort with the exitcode specified in the call. The message will be sent to both the output location and to stderr. The output will be prepended with the Output's prefix.",source:"@site/../docs/core/output/fatal.md",sourceDirName:"core/output",slug:"/core/output/fatal",permalink:"/sst-website/docs/core/output/fatal",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/output/fatal.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"fatal"},sidebar:"Core API",previous:{title:"init",permalink:"/sst-website/docs/core/output/init"},next:{title:"output",permalink:"/sst-website/docs/core/output/"}},s={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Header",id:"header",level:2}],m={toc:u},d="wrapper";function f(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)(d,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"void fatal(uint32_t line, const char* file, const char* func, int exit_code, const char* format, ...) const;\n")),(0,o.kt)("p",null,"Output the fatal message with formatting as specified by the format parameter and ",(0,o.kt)("strong",{parentName:"p"},"end the simulation"),". This will call MPI_Abort with the exit_code specified in the call. The message will be sent to both the output location and to stderr. The output will be prepended with the Output's prefix."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Calling this function invokes SST's emergency shutdown procedure which calls ",(0,o.kt)("a",{parentName:"p",href:"../component/lifecycle/emergencyShutdown"},"emergencyShutdown()"),", cleans up state, and calls MPI_Abort to terminate the simulation.")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"line")," (uint32_t) Line number of calling function (use CALL_INFO macro)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"file")," (const char*) File name of calling function (use CALL_INFO macro)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"func")," (const char*) Name of calling function (use CALL_INFO macro)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"exit_code")," (int) Exit code to exit the application with"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"format")," (const char*) Format string. All valid formats for printf are available"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"...")," (variable) Arguments for format string"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"returns")," none")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'out.fatal(CALL_INFO,-1, "Unknown phase!\\n");\n')),(0,o.kt)("h3",{id:"example-2"},"Example 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'output->fatal(CALL_INFO, -1, "Opal: address :%lld requested with fileId:%d has no space left\\n", vAddress, fileID);\n')),(0,o.kt)("h2",{id:"header"},"Header"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/output.h>\n")))}f.isMDXComponent=!0}}]);