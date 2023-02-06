"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1099],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var a=n(7294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,a,s=function(t,e){if(null==t)return{};var n,a,s={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,s=t.mdxType,i=t.originalType,l=t.parentName,p=r(t,["components","mdxType","originalType","parentName"]),d=c(n),m=s,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:e},p),{},{components:n})):a.createElement(f,o({ref:e},p))}));function f(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var i=n.length,o=new Array(i);o[0]=m;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=t,r[d]="string"==typeof t?t:s,o[1]=r;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1065:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=n(7462),s=n(3366),i=(n(7294),n(3905)),o=["components"],r={title:"Statistics in the SST Python Module"},l=void 0,c={unversionedId:"config/stats/overview",id:"config/stats/overview",title:"Statistics in the SST Python Module",description:"\x3c!---",source:"@site/../docs/config/stats/overview.md",sourceDirName:"config/stats",slug:"/config/stats/overview",permalink:"/docs/docs/config/stats/overview",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/config/stats/overview.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"Statistics in the SST Python Module"},sidebar:"Configuration",previous:{title:"setNoCut",permalink:"/docs/docs/config/link/setNoCut"},next:{title:"enableAllStatisticsForAllComponents",permalink:"/docs/docs/config/stats/enableAllStatisticsForAllComponents"}},p={},d=[{value:"Statistic load levels",id:"statistic-load-levels",level:2},{value:"Statistic parameters",id:"statistic-parameters",level:2}],u={toc:d},m="wrapper";function f(t){var e=t.components,n=(0,s.Z)(t,o);return(0,i.kt)(m,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"general-notes-on-statistics"},"General Notes on Statistics"),(0,i.kt)("p",null,"There are a number of ways to enable statistics on Components and SubComponents. There are a set of functions that can be called directly on Component/SubComponent handles and a set of functions that are provided by the sst python module that use name or type to find the elements on which to enable statistics. There may also be specific methods provided by element library python modules. "),(0,i.kt)("h2",{id:"statistic-load-levels"},"Statistic load levels"),(0,i.kt)("p",null,"It is possible to set load levels both globally and per Component/SubComponent. Each statistic defined in Components/SubComponents has a load level assigned to it in order to help with finer grained control with using the enableAllStatistics","*"," functions. Load levels only apply to statistics not explicitly enabled. Also, local load levels will override global load levels. "),(0,i.kt)("p",null,"The precedence for enabling statistics is as follows: If a statistic is explicitly enabled (does not use one of the enableAllStatistics","*"," functions), it will be enabled. Else, if the set load level meets the minimum for a statistic and all statistics for the component have been enabled, the statistic will be enabled. The local load level will be used, if set, otherwise the global load level will be used. "),(0,i.kt)("h2",{id:"statistic-parameters"},"Statistic parameters"),(0,i.kt)("p",null,"Statistic parameters are used to pass the parameters to the statistics subsystem and to the the statistics themselves and are specified in a python dictionary. In addition to statistic specific parameters, the following parameters are supported: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type")," type of statistic "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"rate")," collection rate of statistic. Stats will be dumped at this interval. A rate of \u201c0ns\u201d will cause the stats to be dumped only at the end of simulation. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"startat")," Time that statistic should start recording statistics "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"stopat")," Time that statistic should stop recording statistics "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"resetOnRead")," If set to true, statistics will reset when written out. Default is False.")))}f.isMDXComponent=!0}}]);