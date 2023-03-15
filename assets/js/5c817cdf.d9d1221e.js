"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2956],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),o=["components"],i={title:"enableStatistics"},l=void 0,c={unversionedId:"config/component/enableStatistics",id:"config/component/enableStatistics",title:"enableStatistics",description:"\x3c!---",source:"@site/../docs/config/component/enableStatistics.md",sourceDirName:"config/component",slug:"/config/component/enableStatistics",permalink:"/sst-docs/docs/config/component/enableStatistics",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/config/component/enableStatistics.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"enableStatistics"},sidebar:"Configuration",previous:{title:"enableAllStatistics",permalink:"/sst-docs/docs/config/component/enableAllStatistics"},next:{title:"setCoordinates",permalink:"/sst-docs/docs/config/component/setCoordinates"}},p={},m=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Import",id:"import",level:2}],u={toc:m},d="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Enables a list of statistics for the component on which the call is made. This function applies to both Components and SubComponents."),(0,s.kt)("h2",{id:"syntax"},"Syntax"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"component.enableStatistics(stat_list, stat_params_dict, apply_to_children=False)\n")),(0,s.kt)("h2",{id:"parameters"},"Parameters"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"stat_list")," (type: string or list of strings) List of statistics to be enabled. If only one stat is to be enabled, accepts a single string instead of a list. "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"stat_params_dict")," (type: dict) Python dictionary that specifies the statistic parameters. All statistics in the stat_list will get the same set of parameters."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"include_children")," (type: bool) If set to True, will recursively enable specified statistics on all currently instanced SubComponent descendants. SubComponents created after this call will not have their statistics enabled. "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"returns")," none")),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("h3",{id:"example-1"},"Example 1"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'import sst\n\ncomponent0 = sst.Component("c0", "simpleElementExample.example1")\ncomponent0.enableStatistics("EventSizeReceived")\n')),(0,s.kt)("h3",{id:"example-2"},"Example 2"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'import sst\n\ncomponent0 = sst.Component("c0", "simpleElementExample.basicStatistics")\ncomponent.enableStatistics(["UINT32_statistic", "UINT64_statistic"])\n')),(0,s.kt)("h2",{id:"import"},"Import"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"import sst\n")))}f.isMDXComponent=!0}}]);