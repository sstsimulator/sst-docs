"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9980],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),i=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},s=function(t){var e=i(t.components);return n.createElement(l.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),u=i(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,p(p({ref:e},s),{},{components:r})):n.createElement(f,p({ref:e},s))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,p=new Array(a);p[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[u]="string"==typeof t?t:o,p[1]=c;for(var i=2;i<a;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97779:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={title:"performGlobalStatisticOutput"},p=void 0,c={unversionedId:"core/component/stat/performGlobalStatisticOutput",id:"core/component/stat/performGlobalStatisticOutput",title:"performGlobalStatisticOutput",description:"Availability: Component, SubComponent, ComponentExtension",source:"@site/../docs/core/component/stat/performGlobalStatisticOutput.md",sourceDirName:"core/component/stat",slug:"/core/component/stat/performGlobalStatisticOutput",permalink:"/sst-docs/docs/core/component/stat/performGlobalStatisticOutput",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/stat/performGlobalStatisticOutput.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"performGlobalStatisticOutput"},sidebar:"core",previous:{title:"isStatisticShared",permalink:"/sst-docs/docs/core/component/stat/isStatisticShared"},next:{title:"performStatisticOutput",permalink:"/sst-docs/docs/core/component/stat/performStatisticOutput"}},l={},i=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}],s={toc:i},u="wrapper";function m(t){let{components:e,...r}=t;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"void performGlobalStatisticOutput();\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Availability:")," Component, SubComponent, ComponentExtension"),(0,o.kt)("p",null,"Trigger the output of all enabled statistics for all Components on this (Sub)Component's rank/thread. "),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"returns")," None")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"performGlobalStatisticOutput();\n")),(0,o.kt)("h2",{id:"header"},"Header"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n")))}m.isMDXComponent=!0}}]);