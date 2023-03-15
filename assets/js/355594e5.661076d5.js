"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9922],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>O});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var i=n.createContext({}),l=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):u(u({},e),t)),r},c=function(t){var e=l(t.components);return n.createElement(i.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),s=l(r),m=o,O=s["".concat(i,".").concat(m)]||s[m]||d[m]||a;return r?n.createElement(O,u(u({ref:e},c),{},{components:r})):n.createElement(O,u({ref:e},c))}));function O(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,u=new Array(a);u[0]=m;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[s]="string"==typeof t?t:o,u[1]=p;for(var l=2;l<a;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4563:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>O,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),u=["components"],p={title:"setOutputLocation"},i=void 0,l={unversionedId:"core/output/setOutputLocation",id:"core/output/setOutputLocation",title:"setOutputLocation",description:"Set the location the output will print to. Options are Output::NONE.",source:"@site/../docs/core/output/setOutputLocation.md",sourceDirName:"core/output",slug:"/core/output/setOutputLocation",permalink:"/sst-docs/docs/core/output/setOutputLocation",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/output/setOutputLocation.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"setOutputLocation"},sidebar:"Core API",previous:{title:"getOutputLocation",permalink:"/sst-docs/docs/core/output/getOutputLocation"},next:{title:"setFileName",permalink:"/sst-docs/docs/core/output/setFileName"}},c={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Header",id:"header",level:2}],d={toc:s},m="wrapper";function O(t){var e=t.components,r=(0,o.Z)(t,u);return(0,a.kt)(m,(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void setOutputLocation(output_location_t location);\n")),(0,a.kt)("p",null,"Set the location the output will print to. Options are ",(0,a.kt)("inlineCode",{parentName:"p"},"Output::STDOUT"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Output::STDERR"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Output::FILE"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Output::NONE"),"."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"location")," (output_location_t) Location for output"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"returns")," none")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"example-1"},"Example 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"out->setOutputLocation(Output::FILE);\n")),(0,a.kt)("h2",{id:"header"},"Header"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/output.h>\n")))}O.isMDXComponent=!0}}]);