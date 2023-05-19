"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1216],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?a.createElement(b,l(l({ref:t},u),{},{components:r})):a.createElement(b,l({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32441:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"operator-="},l=void 0,i={unversionedId:"core/unitalgebra/operatorsub",id:"core/unitalgebra/operatorsub",title:"operator-=",description:"Subtract something from this UnitAlgebra. If the argument is a UnitAlgebra and the units do not match, an error will occur. Otherwise, if the value is unitless (e.g., an int), it will be subtracted from the value of this UnitAlgebra.",source:"@site/../docs/core/unitalgebra/operatorsub.md",sourceDirName:"core/unitalgebra",slug:"/core/unitalgebra/operatorsub",permalink:"/sst-docs/docs/core/unitalgebra/operatorsub",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/unitalgebra/operatorsub.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"operator-="},sidebar:"core",previous:{title:"operator+=",permalink:"/sst-docs/docs/core/unitalgebra/operatoradd"},next:{title:"operator*=",permalink:"/sst-docs/docs/core/unitalgebra/operatormul"}},s={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"UnitAlgebra& operator-=(const UnitAlgebra& v);\ntemplate <typename T> UnitAlgebra& operator-= (const T& v);\n")),(0,n.kt)("p",null,"Subtract something from this UnitAlgebra. If the argument is a UnitAlgebra and the units do not match, an error will occur. Otherwise, if the value is unitless (e.g., an ",(0,n.kt)("inlineCode",{parentName:"p"},"int"),"), it will be subtracted from the value of this UnitAlgebra."),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"v")," (UnitAlgebra) value to subtract"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"v")," (typename T) value to subtract"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"returns")," (UnitAlgebra&) This UnitAlgebra after the subtraction operation.")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'SST::UnitAlgebra num0("8s");\nSST::UnitAlgebra num1("5s");\nnum0 -= num1;\n// num0 = 3s\n')),(0,n.kt)("h2",{id:"header"},"Header"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/unitalgebra.h>\n")))}m.isMDXComponent=!0}}]);