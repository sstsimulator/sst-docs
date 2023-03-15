"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Link"},s=void 0,c={unversionedId:"config/link/link",id:"config/link/link",title:"Link",description:"\x3c!---",source:"@site/../docs/config/link/link.md",sourceDirName:"config/link",slug:"/config/link/",permalink:"/sst-docs/docs/config/link/",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/config/link/link.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"Link"},sidebar:"Configuration",previous:{title:"setWeight",permalink:"/sst-docs/docs/config/component/setWeight"},next:{title:"connect",permalink:"/sst-docs/docs/config/link/connect"}},p={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Import",id:"import",level:2}],m={toc:u},d="wrapper";function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Creates a Link. A Link connects two ports and enables the components on each port to send events across the link."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE"),": This only creates the link. The link must also be connected to ports via ",(0,o.kt)("a",{parentName:"p",href:"link/connect"},"Link.connect()")," or ",(0,o.kt)("a",{parentName:"p",href:"component/addLink"},"(Sub)Component.addLink()"),"."),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"link = sst.Link(name, latency=None)\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name")," (type: string) Unique, user-defined name for the link. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"latency")," (type: string or UnitAlgebra) Default latency for the link. This is optional and will be used if no latency is specified in subsequent calls to Link.connect() or (Sub)Component.addLink()."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"returns")," Link object")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import sst\n\nlink = sst.Link("link0")\n')),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import sst\n")))}k.isMDXComponent=!0}}]);