"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5093],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>y});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),p=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=p(n),d=r,y=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(y,s(s({ref:e},c),{},{components:n})):a.createElement(y,s({ref:e},c))}));function y(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l[m]="string"==typeof t?t:r,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59591:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={id:"enableAllStatisticsForComponentType",title:"enableAllStatisticsForComponentType"},s=void 0,l={unversionedId:"config/stats/enableAllStatisticsForComponentType",id:"config/stats/enableAllStatisticsForComponentType",title:"enableAllStatisticsForComponentType",description:"\x3c!---",source:"@site/../docs/config/stats/enableAllStatisticsForComponentType.md",sourceDirName:"config/stats",slug:"/config/stats/enableAllStatisticsForComponentType",permalink:"/sst-docs/docs/config/stats/enableAllStatisticsForComponentType",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/config/stats/enableAllStatisticsForComponentType.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{id:"enableAllStatisticsForComponentType",title:"enableAllStatisticsForComponentType"},sidebar:"config",previous:{title:"enableAllStatisticsForComponentName",permalink:"/sst-docs/docs/config/stats/enableAllStatisticsForComponentName"},next:{title:"enableStatisticForComponentName",permalink:"/sst-docs/docs/config/stats/enableStatisticForComponentName"}},i={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Import",id:"import",level:2}],c={toc:p},m="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Enables all statistics for all previously instanced Components/SubComponents of the type specified in the call. This call works for both Components and SubComponents. "),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"sst.enableAllStatisticsForComponentType(comp_type, stat_params_dict, apply_to_children=False)\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"comp_type")," (type: string) type of the Component or SubComponent on which to enable all statistics. All previously instanced elements of this type will have their statistics enabled. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"stat_params_dict")," (type: dict) OPTIONAL. Python dictionary that specified the statistic parameters. All statistics will get the same set of parameters. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"apply_to_children")," (type: bool) OPTIONAL. If set to True, will recursively enable all statistics on all SubComponent descendants. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"returns")," none")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import sst\n\nsst.Component("c0", "simpleElementExample.basicStatistics")\nsst.enableAllStatisticsForComponentType("simpleElementExample.basicStatistics")\n')),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import sst\n")))}u.isMDXComponent=!0}}]);