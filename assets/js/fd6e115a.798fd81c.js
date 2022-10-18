"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3631],{3905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>d});var a=s(7294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function l(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?l(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,a,n=function(e,t){if(null==e)return{};var s,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)s=l[a],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)s=l[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),s=t;return e&&(s="function"==typeof e?e(t):r(r({},t),e)),s},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var s=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(s),d=n,_=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return s?a.createElement(_,r(r({ref:t},p),{},{components:s})):a.createElement(_,r({ref:t},p))}));function d(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=s.length,r=new Array(l);r[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var c=2;c<l;c++)r[c]=s[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,s)}m.displayName="MDXCreateElement"},9748:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=s(7462),n=s(3366),l=(s(7294),s(3905)),r=["components"],i={id:"sst_eli_document_statistics",title:"SST_ELI_DOCUMENT_STATISTICS"},o=void 0,c={unversionedId:"cpp/eli/sst_eli_document_statistics",id:"cpp/eli/sst_eli_document_statistics",title:"SST_ELI_DOCUMENT_STATISTICS",description:"Fully Qualified Name",source:"@site/../docs/cpp/eli/sst_eli_document_statistics.md",sourceDirName:"cpp/eli",slug:"/cpp/eli/sst_eli_document_statistics",permalink:"/sst-website/docs/cpp/eli/sst_eli_document_statistics",draft:!1,editUrl:"https://github.com/sstsimulator/sst-website/edit/master/docs/../docs/cpp/eli/sst_eli_document_statistics.md",tags:[],version:"current",lastUpdatedBy:"Joseph Kenny",lastUpdatedAt:1664453450,formattedLastUpdatedAt:"Sep 29, 2022",frontMatter:{id:"sst_eli_document_statistics",title:"SST_ELI_DOCUMENT_STATISTICS"},sidebar:"C++",previous:{title:"SST_ELI_DOCUMENT_PORTS",permalink:"/sst-website/docs/cpp/eli/sst_eli_document_ports"},next:{title:"SST_ELI_DOCUMENT_SUBCOMPONENT_SLOTS",permalink:"/sst-website/docs/cpp/eli/sst_eli_doument_subcomponent_slots"}},p={},u=[{value:"Fully Qualified Name",id:"fully-qualified-name",level:2},{value:"Remarks",id:"remarks",level:3},{value:"Requirements",id:"requirements",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"See Also",id:"see-also",level:2}],m={toc:u};function d(e){var t=e.components,s=(0,n.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"fully-qualified-name"},"Fully Qualified Name"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"#define SST_ELI_DOCUMENT_STATISTICS( ... )\n")),(0,l.kt)("h3",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"Document and register statistics for a component or subcomponent."),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/elementinfo.h>\n")),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'// Statistic name, description, unit, enable level\nSST_ELI_DOCUMENT_STATISTICS(\n    { "stat1_NAME", "stat1_DESCRIPTION", "stat1_UNITS", stat1_ENABLE_LEVEL },\n    { "stat2_NAME", "stat2_DESCRIPTION", "stat2_UNITS", stat2_ENABLE_LEVEL },\n    { "stat3_NAME", "stat3_DESCRIPTION", "stat3_UNITS", stat3_ENABLE_LEVEL },\n    ...\n    { "statN_NAME", "statN_DESCRIPTION", "statN_UNITS", statN_ENABLE_LEVEL }\n)\n')),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"statN_NAME")," - A unique name for the statistic."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"statN_DESCRIPTION")," - A description of the statistic being collected."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"statN_UNITS")," - The plural name for the units the statistic is collecting."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"statN_ENABLE_LEVEL")," - An integer value used to enable/disable statistic collection. You can specify a system statistic load level that will collect all statistics with an enable level less than or equal to the system level. So, if the system statistic load level is 5, then all stats with an enable level 5 or less will be enabled."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"example-1"},"Example 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'SST_ELI_DOCUMENT_STATISTICS(\n    { "carsWashed", "Number of cars washed", "cars", 1 },\n    { "idleTime", "Time spent not washing cars", "ticks", 1 }\n)\n')),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/sst-website/docs/projectDriver/sst/setStatisticLoadLevel"},"sst.setStatisticLoadLevel")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/sst-website/docs/projectDriver/sst/enableAllStatisticsForAllComponents"},"sst.enableAllStatisticsForAllComponents")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/sst-website/docs/projectDriver/component/enableAllStatistics"},"enableAllStatistics"))))}d.isMDXComponent=!0}}]);