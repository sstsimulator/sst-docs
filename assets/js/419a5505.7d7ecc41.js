"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4261],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={id:"setStatisticLoadLevel",title:"setStatisticLoadLevel"},l=void 0,i={unversionedId:"config/component/setStatisticLoadLevel",id:"config/component/setStatisticLoadLevel",title:"setStatisticLoadLevel",description:"\x3c!---",source:"@site/../docs/config/component/setStatisticLoadLevel.md",sourceDirName:"config/component",slug:"/config/component/setStatisticLoadLevel",permalink:"/sst-docs/docs/config/component/setStatisticLoadLevel",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/config/component/setStatisticLoadLevel.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{id:"setStatisticLoadLevel",title:"setStatisticLoadLevel"},sidebar:"config",previous:{title:"setStatistic",permalink:"/sst-docs/docs/config/component/setStatistic"},next:{title:"enableAllStatistics",permalink:"/sst-docs/docs/config/component/enableAllStatistics"}},s={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Import",id:"import",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Sets the load level for this component. This overrides the default or global load level. Load levels are not used for statistics that are explicitly enabled (i.e., does not use one of the "All" variants for enabling statistics). This function applies to both Components and SubComponents.'),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"component.setStatisticLoadLevel(level, include_children=False)\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"level")," (type: int) statistic load level for the component "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"include_children")," (type: bool) If set to True, will recursively set the specified load level on all currently instanced SubComponent descendants. SubComponents created after this call will not have their load level set. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"returns")," none")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import sst\n\ncomponent0 = sst.Component("c0", "simpleElementExample.example1")\ncomponent0.setStatisticLoadLevel(4, include_children=True)\n\n')),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import sst\n")))}m.isMDXComponent=!0}}]);