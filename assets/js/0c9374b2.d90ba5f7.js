"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5784],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=m(r),d=o,v=s["".concat(l,".").concat(d)]||s[d]||u[d]||a;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3319:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>v,frontMatter:()=>c,metadata:()=>m,toc:()=>s});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={title:"getTimeConverter"},l=void 0,m={unversionedId:"core/component/time/getTimeConverter",id:"core/component/time/getTimeConverter",title:"getTimeConverter",description:"Availability: Component, SubComponent, ComponentExtension",source:"@site/../docs/core/component/time/getTimeConverter.md",sourceDirName:"core/component/time",slug:"/core/component/time/getTimeConverter",permalink:"/docs/docs/core/component/time/getTimeConverter",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/component/time/getTimeConverter.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"getTimeConverter"},sidebar:"Core API",previous:{title:"getDefaultTimeBase",permalink:"/docs/docs/core/component/time/getDefaultTimeBase"},next:{title:"getCoreTimeBase",permalink:"/docs/docs/core/component/time/getCoreTimeBase"}},p={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Header",id:"header",level:2}],u={toc:s},d="wrapper";function v(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"TimeConverter* getTimeConverter(const std::string& base);\nTimeConverter* getTimeConverter(const UnitAlgebra& base);\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Availability:")," Component, SubComponent, ComponentExtension"),(0,a.kt)("p",null,"Get a time converter object for the specified time base."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"base")," (string, UnitAlgebra) Time base, with SI units, to generate a time converter for"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"returns")," (TimeConverter*) Handle to the created time converter")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"example-1"},"Example 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'TimeConverter* tc0 = getTimeConverter("200ms");\nUnitAlgebra ua0 = UnitAlgebra("22GHz");\nTimeConverter* tc1 = getTimeConverter(ua0);\n')),(0,a.kt)("h2",{id:"header"},"Header"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n")))}v.isMDXComponent=!0}}]);