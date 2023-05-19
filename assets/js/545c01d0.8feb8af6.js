"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2562],{3905:(t,e,a)=>{a.d(e,{Zo:()=>l,kt:()=>f});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),u=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},l=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),c=u(a),m=n,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return a?r.createElement(f,s(s({ref:e},l),{},{components:a})):r.createElement(f,s({ref:e},l))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[c]="string"==typeof t?t:n,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},50435:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const o={id:"addParams",title:"addParams"},s=void 0,i={unversionedId:"config/stats/output/addParams",id:"config/stats/output/addParams",title:"addParams",description:"\x3c!---",source:"@site/../docs/config/stats/output/addParams.md",sourceDirName:"config/stats/output",slug:"/config/stats/output/addParams",permalink:"/sst-docs/docs/config/stats/output/addParams",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/config/stats/output/addParams.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{id:"addParams",title:"addParams"},sidebar:"config",previous:{title:"addParam",permalink:"/sst-docs/docs/config/stats/output/addParam"},next:{title:"Statistics Groups",permalink:"/sst-docs/docs/config/stats/group/statisticGroup"}},p={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Import",id:"import",level:2}],l={toc:u},c="wrapper";function d(t){let{components:e,...a}=t;return(0,n.kt)(c,(0,r.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Adds multiple parameters to the Params object for the StatisticOutput."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"statOutput.addParam(params)\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"params")," (type: dict) a Python dict of key, value pairs. See the ",(0,n.kt)("a",{parentName:"li",href:"addParam"},(0,n.kt)("inlineCode",{parentName:"a"},"addParam()"))," description for information about how key and value are used. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"returns")," none")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import sst\n\nstatOutput = sst.StatisticOutput("sst.StatOutputCSV")\nstatOutput.addParam("filepath", "sim_output.csv")\n')),(0,n.kt)("h2",{id:"import"},"Import"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import sst\n")))}d.isMDXComponent=!0}}]);