"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[483],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),p=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},v=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),i=p(r),v=n,m=i["".concat(u,".").concat(v)]||i[v]||d[v]||a;return r?o.createElement(m,l(l({ref:t},c),{},{components:r})):o.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=v;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[i]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<a;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}v.displayName="MDXCreateElement"},15617:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={title:"setVerboseLevel"},l=void 0,s={unversionedId:"core/output/setVerboseLevel",id:"core/output/setVerboseLevel",title:"setVerboseLevel",description:"Sets the Output's verboselevel for debug() and verbose(). Output object will only output the message if those calls' outputlevel parameter are less than or equal to the Output's verbose_level.",source:"@site/../docs/core/output/setVerboseLevel.md",sourceDirName:"core/output",slug:"/core/output/setVerboseLevel",permalink:"/sst-docs/docs/core/output/setVerboseLevel",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/output/setVerboseLevel.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"setVerboseLevel"},sidebar:"core",previous:{title:"getVerboseLevel",permalink:"/sst-docs/docs/core/output/getVerboseLevel"},next:{title:"getVerboseMask",permalink:"/sst-docs/docs/core/output/getVerboseMask"}},u={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}],c={toc:p},i="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(i,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void setVerboseLevel(uint32_t verbose_level);\n")),(0,n.kt)("p",null,"Sets the Output's verbose_level for ",(0,n.kt)("a",{parentName:"p",href:"debug"},(0,n.kt)("inlineCode",{parentName:"a"},"debug()"))," and ",(0,n.kt)("a",{parentName:"p",href:"verbose"},(0,n.kt)("inlineCode",{parentName:"a"},"verbose()")),". Output object will only output the message if those calls' ",(0,n.kt)("inlineCode",{parentName:"p"},"output_level")," parameter are less than or equal to the Output's verbose_level."),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"verbose_level")," (uint32_t) The level to set the Output's verbose_level to"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"returns")," none")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"out->setVerboseLevel(8); // Calls to out->debug() or out->verbose() with level > 8 will not be printed\n")),(0,n.kt)("h2",{id:"header"},"Header"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/output.h>\n")))}d.isMDXComponent=!0}}]);