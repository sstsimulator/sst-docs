"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[351],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),l=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},i=function(e){var r=l(e.components);return a.createElement(c.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=l(t),d=n,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(f,s(s({ref:r},i),{},{components:t})):a.createElement(f,s({ref:r},i))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=d;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p[m]="string"==typeof e?e:n,s[1]=p;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1191:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=t(87462),n=(t(67294),t(3905));const o={title:"operator="},s=void 0,p={unversionedId:"core/params/operatoreq",id:"core/params/operatoreq",title:"operator=",description:"Assignment operator. Copies a Params object, including any references to global parameter sets.",source:"@site/../docs/core/params/operatoreq.md",sourceDirName:"core/params",slug:"/core/params/operatoreq",permalink:"/sst-docs/docs/core/params/operatoreq",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/params/operatoreq.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"operator="},sidebar:"core",previous:{title:"destructor",permalink:"/sst-docs/docs/core/params/destructor"},next:{title:"find",permalink:"/sst-docs/docs/core/params/find"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}],i={toc:l},m="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(m,(0,a.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"Params& operator=(const Params& old);\n")),(0,n.kt)("p",null,"Assignment operator. Copies a Params object, including any references to global parameter sets."),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"old")," (Params) Parameters to copy"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"returns")," (Params) Copied parameters")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"example::example(ComponentId_t id, Params& params) : Component(id)\n{\n    local_copy_of_params = params;\n}\n")),(0,n.kt)("h2",{id:"header"},"Header"),(0,n.kt)("p",null,"The Params header file is included with any SST object that supports Params."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h> // or\n#include <sst/core/params.h> // if not included in base class\n")))}u.isMDXComponent=!0}}]);