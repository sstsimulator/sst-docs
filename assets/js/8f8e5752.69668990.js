"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1858],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),i=p(r),m=n,f=i["".concat(c,".").concat(m)]||i[m]||d[m]||o;return r?a.createElement(f,u(u({ref:t},s),{},{components:r})):a.createElement(f,u({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,u=new Array(o);u[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[i]="string"==typeof e?e:n,u[1]=l;for(var p=2;p<o;p++)u[p]=r[p];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},610:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),u=["components"],l={title:"getDefaultObject"},c=void 0,p={unversionedId:"core/output/getDefaultObject",id:"core/output/getDefaultObject",title:"getDefaultObject",description:"Returns the simulation's default output object.",source:"@site/../docs/core/output/getDefaultObject.md",sourceDirName:"core/output",slug:"/core/output/getDefaultObject",permalink:"/sst-docs/docs/core/output/getDefaultObject",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/output/getDefaultObject.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"getDefaultObject"},sidebar:"Core API",previous:{title:"setVerboseMask",permalink:"/sst-docs/docs/core/output/setVerboseMask"},next:{title:"SST::Params",permalink:"/sst-docs/docs/core/params/class"}},s={},i=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Header",id:"header",level:2}],d={toc:i},m="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,u);return(0,o.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"static Output& getDefaultObject();\n")),(0,o.kt)("p",null,"Returns the simulation's default output object."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"returns")," (Output) The SST Core's default output object")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"Output sst_output = component_output->getDefaultObject();\n")),(0,o.kt)("h2",{id:"header"},"Header"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/output.h>\n")))}f.isMDXComponent=!0}}]);