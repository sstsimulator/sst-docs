"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3769],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),i=c(r),d=a,f=i["".concat(l,".").concat(d)]||i[d]||u[d]||o;return r?n.createElement(f,s(s({ref:t},m),{},{components:r})):n.createElement(f,s({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[i]="string"==typeof e?e:a,s[1]=p;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7610:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>i});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],p={title:"empty"},l=void 0,c={unversionedId:"core/params/empty",id:"core/params/empty",title:"empty",description:"Return True if the Params object is empty (has no local or global parameters).",source:"@site/../docs/core/params/empty.md",sourceDirName:"core/params",slug:"/core/params/empty",permalink:"/sst-docs/docs/core/params/empty",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/params/empty.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1678138197,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{title:"empty"},sidebar:"Core API",previous:{title:"contains",permalink:"/sst-docs/docs/core/params/contains"},next:{title:"is_value_array",permalink:"/sst-docs/docs/core/params/is_value_array"}},m={},i=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Header",id:"header",level:2}],u={toc:i},d="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"bool empty() const;\n")),(0,o.kt)("p",null,"Return True if the Params object is empty (has no local or global parameters)."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"returns")," none")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'// Example Component constructor\n// Based on sst-elements/src/sst/elements/simpleElementExample/example0.cc\nexample0::example0(ComponentId_t id, Params& params) : Component(id) {\n    out = new Output("", 1, 0, Output::STDOUT);\n\n    if (params.empty()) {\n        out->fatal(CALL_INFO, -1, "Error: No parameters were provided to the component named %s\\n", \n                getName().c_str());\n    }\n}\n')),(0,o.kt)("h2",{id:"header"},"Header"),(0,o.kt)("p",null,"The Params header file is included with any SST object that supports Params."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h> // or\n#include <sst/core/params.h> // if not included in base class\n")))}f.isMDXComponent=!0}}]);