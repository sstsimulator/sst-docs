"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2778],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=s,v=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return r?a.createElement(v,n(n({ref:t},p),{},{components:r})):a.createElement(v,n({ref:t},p))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=r.length,n=new Array(l);n[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,n[1]=i;for(var c=2;c<l;c++)n[c]=r[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5558:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=r(7462),s=r(3366),l=(r(7294),r(3905)),n=["components"],i={id:"setStatisticLoadLevel",title:"sst.setStatisticLoadLevel()"},o=void 0,c={unversionedId:"projectDriver/sst/setStatisticLoadLevel",id:"projectDriver/sst/setStatisticLoadLevel",title:"sst.setStatisticLoadLevel()",description:"Remarks",source:"@site/../docs/projectDriver/sst/setStatisticLoadLevel.md",sourceDirName:"projectDriver/sst",slug:"/projectDriver/sst/setStatisticLoadLevel",permalink:"/sst-website/docs/projectDriver/sst/setStatisticLoadLevel",draft:!1,editUrl:"https://github.com/sstsimulator/sst-website/edit/master/docs/../docs/projectDriver/sst/setStatisticLoadLevel.md",tags:[],version:"current",lastUpdatedBy:"Ryan Ledbetter",lastUpdatedAt:1539909317,formattedLastUpdatedAt:"Oct 19, 2018",frontMatter:{id:"setStatisticLoadLevel",title:"sst.setStatisticLoadLevel()"},sidebar:"ProjectDriver",previous:{title:"sst.Link()",permalink:"/sst-website/docs/projectDriver/sst/link"},next:{title:"addParams()",permalink:"/sst-website/docs/projectDriver/component/addParams"}},p={},u=[{value:"Remarks",id:"remarks",level:3},{value:"Requirements",id:"requirements",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"See Also",id:"see-also",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,s.Z)(e,n);return(0,l.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"Set what statistics will be outputted. "),(0,l.kt)("p",null,"An integer value used to enable/disable stat collection. If the load level is 5, then all stats with an enable level 4 or less will be enabled."),(0,l.kt)("p",null,"The statistic's enable level is set using ",(0,l.kt)("a",{parentName:"p",href:"/sst-website/docs/cpp/eli/sst_eli_document_statistics"},"SST_ELI_DOCUMENT_STATISTICS")),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import sst\n")),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"sst.setStatisticLoadLevel(loadLevel)\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"loadLevel")," - An integer value used to enable/disable stat collection. If the load level is 5, then all stats with an enable level 5 or less will be enabled."),(0,l.kt)("h2",{id:"return-value"},"Return Value"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"None")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"example-1"},"Example 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"sst.setStatisticLoadLevel(1)\n")),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/sst-website/docs/projectDriver/sst/enableAllStatisticsForAllComponents"},"sst.enableAllStatisticsForAllComponents()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/sst-website/docs/projectDriver/component/enableAllStatistics"},"enableAllStatistics()"))))}m.isMDXComponent=!0}}]);