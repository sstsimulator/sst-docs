"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7522],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(r),f=a,d=c["".concat(l,".").concat(f)]||c[f]||u[f]||o;return r?n.createElement(d,p(p({ref:t},m),{},{components:r})):n.createElement(d,p({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},671:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),p=["components"],i={id:"popNamePrefix",title:"popNamePrefix"},l=void 0,s={unversionedId:"config/general/popNamePrefix",id:"config/general/popNamePrefix",title:"popNamePrefix",description:"\x3c!---",source:"@site/../docs/config/general/popNamePrefix.md",sourceDirName:"config/general",slug:"/config/general/popNamePrefix",permalink:"/sst-docs/docs/config/general/popNamePrefix",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/config/general/popNamePrefix.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{id:"popNamePrefix",title:"popNamePrefix"},sidebar:"Configuration",previous:{title:"pushNamePrefix",permalink:"/sst-docs/docs/config/general/pushNamePrefix"},next:{title:"exit",permalink:"/sst-docs/docs/config/general/exit"}},m={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Import",id:"import",level:2}],u={toc:c},f="wrapper";function d(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)(f,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pops a prefix from the name stack. See ",(0,o.kt)("a",{parentName:"p",href:"pushNamePrefix"},"pushNamePrefix")," for how name stacks are used. "),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"sst.popNamePrefix()\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"returns")," none")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import sst\n\ncomp0 = sst.Component("c0", "simpleElementExample.example0") # Name is \'c0\'\n\nsst.pushNamePrefix("base")\n\ncomp1 = sst.Component("c1", "simpleElementExample.example0") # Name is \'base.c1\'\n\nsst.popNamePrefix()\n\ncomp2 = sst.Component("c2", "simpleElementExample.example0") # Name is \'c2\'\n')),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import sst\n")))}d.isMDXComponent=!0}}]);