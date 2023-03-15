"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8599],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:e},p),{},{components:n})):r.createElement(f,o({ref:e},p))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[u]="string"==typeof t?t:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2689:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"SST::Statistic"},c=void 0,l={unversionedId:"core/statistics/class",id:"core/statistics/class",title:"SST::Statistic",description:"SST Statistic objects can be used to track metrics about a (Sub)Component. SST statistic output format/frequency/etc. is controlled by the SST configuration file, whereas statistic collection is handled by (Sub)Components.",source:"@site/../docs/core/statistics/class.md",sourceDirName:"core/statistics",slug:"/core/statistics/class",permalink:"/sst-docs/docs/core/statistics/class",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/statistics/class.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1678138197,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{title:"SST::Statistic"},sidebar:"Core API",previous:{title:"Uniform Distribution",permalink:"/sst-docs/docs/core/rng/uniform"},next:{title:"addData",permalink:"/sst-docs/docs/core/statistics/addData"}},p={},u=[{value:"Header",id:"header",level:2}],d={toc:u},m="wrapper";function f(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)(m,(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"SST Statistic objects can be used to track metrics about a (Sub)Component. SST statistic output format/frequency/etc. is controlled by the ",(0,i.kt)("a",{parentName:"p",href:"../../config/stats/overview"},"SST configuration file"),", whereas statistic collection is handled by (Sub)Components. "),(0,i.kt)("p",null,"(Sub)Components create statistics by using the ",(0,i.kt)("a",{parentName:"p",href:"../component/stat/registerStatistic"},(0,i.kt)("inlineCode",{parentName:"a"},"registerStatistic()"))," function in their APIs. The (sub)component can then add data to the statistic during the simulation using the following functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"addData"},(0,i.kt)("inlineCode",{parentName:"a"},"addData"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"addDataNTimes"},(0,i.kt)("inlineCode",{parentName:"a"},"addDataNTimes")))),(0,i.kt)("p",null,"Statistics are templated on a statistic type which defines the type of the data they collect. The following types are supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"int32_t")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uint32_t")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"int64_t")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uint64_t")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"float")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"double"))),(0,i.kt)("h2",{id:"header"},"Header"),(0,i.kt)("p",null,"The base class for statistics resides in ",(0,i.kt)("inlineCode",{parentName:"p"},"sst-core/src/sst/core/statapi/statbase.h"),", however the class is available through the (Sub)Component API headers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n")))}f.isMDXComponent=!0}}]);