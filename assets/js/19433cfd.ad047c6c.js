"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9009],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},l=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:e},l),{},{components:r})):n.createElement(f,i({ref:e},l))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[u]="string"==typeof t?t:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5157:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"Statistics Groups"},i=void 0,s={unversionedId:"config/stats/group/statisticGroup",id:"config/stats/group/statisticGroup",title:"Statistics Groups",description:"\x3c!---",source:"@site/../docs/config/stats/group/statisticGroup.md",sourceDirName:"config/stats/group",slug:"/config/stats/group/statisticGroup",permalink:"/sst-docs/docs/config/stats/group/statisticGroup",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/config/stats/group/statisticGroup.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"Statistics Groups"},sidebar:"config",previous:{title:"addParams",permalink:"/sst-docs/docs/config/stats/output/addParams"},next:{title:"addComponent",permalink:"/sst-docs/docs/config/stats/group/addComponent"}},p={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Import",id:"import",level:2}],l={toc:c},u="wrapper";function d(t){let{components:e,...r}=t;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The StatisticGroup object is used to group Statistics objects together to be written to the same StatisticOutput object."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The StatisticGroup object had limited use in the past and is evolving to include new functionality. This is the proposed functionality of the class and may not be the final API for the object. ")),(0,a.kt)("p",null,"A StatisticGroup is creating using the following ",(0,a.kt)("inlineCode",{parentName:"p"},"StatisticGroup()")," function."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"sst.StatisticGroup(name)\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name")," (type: string) Name of the group specified as a string."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"returns")," Created StatisticGroup object ")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import sst\n\nstatGroup = sst.StatisticGroup("StatGroup")\n')),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import sst\n")))}d.isMDXComponent=!0}}]);