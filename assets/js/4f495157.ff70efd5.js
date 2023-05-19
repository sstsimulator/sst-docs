"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[141],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),i=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):u(u({},e),t)),r},l=function(t){var e=i(t.components);return n.createElement(c.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),s=i(r),m=o,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return r?n.createElement(f,u(u({ref:e},l),{},{components:r})):n.createElement(f,u({ref:e},l))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,u=new Array(a);u[0]=m;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p[s]="string"==typeof t?t:o,u[1]=p;for(var i=2;i<a;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56914:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={title:"getOutputLocation"},u=void 0,p={unversionedId:"core/output/getOutputLocation",id:"core/output/getOutputLocation",title:"getOutputLocation",description:"Return the Output's output location. outputlocationt is an enum type with this definition:",source:"@site/../docs/core/output/getOutputLocation.md",sourceDirName:"core/output",slug:"/core/output/getOutputLocation",permalink:"/sst-docs/docs/core/output/getOutputLocation",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/output/getOutputLocation.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"getOutputLocation"},sidebar:"core",previous:{title:"flush",permalink:"/sst-docs/docs/core/output/flush"},next:{title:"setOutputLocation",permalink:"/sst-docs/docs/core/output/setOutputLocation"}},c={},i=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}],l={toc:i},s="wrapper";function d(t){let{components:e,...r}=t;return(0,o.kt)(s,(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"output_location_t getOutputLocation() const;\n")),(0,o.kt)("p",null,"Return the Output's ",(0,o.kt)("a",{parentName:"p",href:"class"},"output location"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"output_location_t")," is an ",(0,o.kt)("inlineCode",{parentName:"p"},"enum")," type with this definition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"    enum output_location_t {\n        NONE,   /*!< No output */\n        STDOUT, /*!< Print to stdout */\n        STDERR, /*!< Print to stderr */\n        FILE    /*!< Print to a file */\n    };\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"returns")," (output_location_t) The output location")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"output_location_t location = out->getOutputLocation();\n")),(0,o.kt)("h2",{id:"header"},"Header"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/output.h>\n")))}d.isMDXComponent=!0}}]);