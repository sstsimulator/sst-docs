"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2077],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>f});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},s=Object.keys(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),u=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},l="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,s=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),l=u(a),m=n,f=l["".concat(p,".").concat(m)]||l[m]||d[m]||s;return a?r.createElement(f,i(i({ref:e},c),{},{components:a})):r.createElement(f,i({ref:e},c))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[l]="string"==typeof t?t:n,i[1]=o;for(var u=2;u<s;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},726:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=a(7462),n=a(3366),s=(a(7294),a(3905)),i=["components"],o={id:"statisticOutput",title:"Statistics Output"},p=void 0,u={unversionedId:"config/stats/output/statisticOutput",id:"config/stats/output/statisticOutput",title:"Statistics Output",description:"\x3c!---",source:"@site/../docs/config/stats/output/statisticOutput.md",sourceDirName:"config/stats/output",slug:"/config/stats/output/statisticOutput",permalink:"/sst-docs/docs/config/stats/output/statisticOutput",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/config/stats/output/statisticOutput.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{id:"statisticOutput",title:"Statistics Output"},sidebar:"Configuration",previous:{title:"addParams",permalink:"/sst-docs/docs/config/stats/object/addParams"},next:{title:"addParam",permalink:"/sst-docs/docs/config/stats/output/addParam"}},c={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Import",id:"import",level:2}],d={toc:l},m="wrapper";function f(t){var e=t.components,a=(0,n.Z)(t,i);return(0,s.kt)(m,(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The StatisticOutput object is used to configure the output type and options for statistics and is for use with StatisticGroup. For the global statistics output, see the global functions:\n",(0,s.kt)("a",{parentName:"p",href:"../setStatisticOutput"},(0,s.kt)("inlineCode",{parentName:"a"},"setStatisticOutput()")),",\n",(0,s.kt)("a",{parentName:"p",href:"../setStatisticOutputOption"},(0,s.kt)("inlineCode",{parentName:"a"},"setStatisticOutputOption()"))," and\n",(0,s.kt)("a",{parentName:"p",href:"../setStatisticOutputOptions"},(0,s.kt)("inlineCode",{parentName:"a"},"setStatisticOutputOptions()")),". "),(0,s.kt)("p",null,"The StatisticOutput object is created using the following constructor."),(0,s.kt)("h2",{id:"syntax"},"Syntax"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"sst.StatisticOutput(type, params=None)\n")),(0,s.kt)("h2",{id:"parameters"},"Parameters"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"params")," (type: dict) A Python dict of key, value pairs.\nSee the ",(0,s.kt)("a",{parentName:"li",href:"addParam"},(0,s.kt)("inlineCode",{parentName:"a"},"addParam()"))," description for information about how key and value are used. "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"returns")," none")),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("h3",{id:"example-1"},"Example 1"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'import sst\n\nstatOutput = sst.StatisticOutput("sst.StatOutputCSV")\n\nparams = { "filepath" : "sim_output.csv", "separator" : ", " }\n\nstatOutput.addParams(params)\n')),(0,s.kt)("h2",{id:"import"},"Import"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"import sst\n")))}f.isMDXComponent=!0}}]);