"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6844],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,d=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,f=p["".concat(d,".").concat(u)]||p[u]||m[u]||s;return a?n.createElement(f,i(i({ref:t},o),{},{components:a})):n.createElement(f,i({ref:t},o))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},29401:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const s={title:"addData"},i=void 0,l={unversionedId:"core/statistics/addData",id:"core/statistics/addData",title:"addData",description:"Adds data to a statistic. This call also increments the number of times data has been added to the statistic by one.",source:"@site/../docs/core/statistics/addData.md",sourceDirName:"core/statistics",slug:"/core/statistics/addData",permalink:"/sst-docs/docs/core/statistics/addData",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/statistics/addData.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"addData"},sidebar:"core",previous:{title:"SST::Statistic",permalink:"/sst-docs/docs/core/statistics/class"},next:{title:"addDataNTimes",permalink:"/sst-docs/docs/core/statistics/addDataNTimes"}},d={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Example 3",id:"example-3",level:3},{value:"Example 4",id:"example-4",level:3},{value:"Example 5",id:"example-5",level:3},{value:"Header",id:"header",level:2}],o={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"template <class... InArgs>\nvoid addData(InArgs&&... args);\n")),(0,r.kt)("p",null,"Adds data to a statistic. This call also increments the number of times data has been added to the statistic by one."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"args")," (Varies) The data to add to the Statistic. Type matches the Statistic type which is set when the statistic is registered."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"returns")," none")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"example-1"},"Example 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"stat_GetXReqReceived->addData(1);\n")),(0,r.kt)("h3",{id:"example-2"},"Example 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"stat_MSHROccupancy->addData(mshr->getSize());\n")),(0,r.kt)("h3",{id:"example-3"},"Example 3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"m_evStat->addData( time - m_issueTime );\n")),(0,r.kt)("h3",{id:"example-4"},"Example 4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"if ( issue( req ) ) {\n    stat_cyclesWithIssue->addData(1);\n} else {\n    stat_cyclesAttemptIssueButRejected->addData(1);\n    break;\n}\n")),(0,r.kt)("h3",{id:"example-5"},"Example 5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"if( !memSystem->getStats( &tbandwidth, TOTAL_BANDWIDTH ) ){\nTBandwidth->addData(tbandwidth);\n}\n\nif( !memSystem->getStats( &bytes_transferred, TOTAL_BYTES_TRANSFERRED ) ){\nBytesTransferred->addData(bytes_transferred);\n}\n\nif( !memSystem->getStats( &total_reads, TOTAL_READS ) ){\nTotalReads->addData(total_reads);\n}\n\nif( !memSystem->getStats( &total_writes, TOTAL_WRITES ) ){\nTotalWrites->addData(total_writes);\n}\n\nif( !memSystem->getStats( &total_xactions, TOTAL_TRANSACTIONS ) ){\nTotalXactions->addData(total_xactions);\n}\n\nif( !memSystem->getStats( &pending_reads, PENDING_READ_TRANSACTIONS ) ){\nPendingReads->addData(pending_reads);\n}\n\nif( !memSystem->getStats( &pending_rtns, PENDING_RTN_TRANSACTIONS ) ){\nPendingRtns->addData(pending_rtns);\n}\n")),(0,r.kt)("h2",{id:"header"},"Header"),(0,r.kt)("p",null,"The statistic header file is included with any SST object that supports statistics."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n")))}m.isMDXComponent=!0}}]);