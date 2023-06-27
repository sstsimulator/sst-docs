"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6117],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return t?o.createElement(f,i(i({ref:n},p),{},{components:t})):o.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},35012:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const a={title:"findComponentByName"},i=void 0,s={unversionedId:"config/general/findComponentByName",id:"config/general/findComponentByName",title:"findComponentByName",description:"In many cases, Components and SubComponents will be created using library functions and the user will not have direct access to their handles. In some instances, the provided python modules will have accessor functions that can provide handles to these elements. If this is not provided by the library, the user can call the findComponentByName() function to get a handle to the desired element. The function can find handles for both Components and SubComponents. The use of this function presupposes a knowledge of the naming convention of the elements in the build functions of the library.",source:"@site/../docs/config/general/findComponentByName.md",sourceDirName:"config/general",slug:"/config/general/findComponentByName",permalink:"/sst-docs/docs/config/general/findComponentByName",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/config/general/findComponentByName.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"findComponentByName"},sidebar:"config",previous:{title:"exit",permalink:"/sst-docs/docs/config/general/exit"},next:{title:"Component and SubComponent Classes",permalink:"/sst-docs/docs/config/component/classes"}},l={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Import",id:"import",level:2}],p={toc:c},m="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In many cases, Components and SubComponents will be created using library functions and the user will not have direct access to their handles. In some instances, the provided python modules will have accessor functions that can provide handles to these elements. If this is not provided by the library, the user can call the findComponentByName() function to get a handle to the desired element. The function can find handles for both Components and SubComponents. The use of this function presupposes a knowledge of the naming convention of the elements in the build functions of the library. "),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"sst.findComponentByName(name)\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name")," (type: string) name of the Component or SubComponent to find. The name for SubComponents is described above. Slot indexes are optional in cases where only on SubComponent has been added to a slot, but you can also use ","[0]"," in all cases, even when the actual name will not display this way. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"returns")," the function will return a handle to the Component/SubComponent with the provided name, or None if the name is not found. ")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import sst\n\nsst.Component("c0", "simpleElementExample.example0") # Name is \'c0\'\ncomp = sst.findComponentByName("c0")\n')),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import sst\n")))}d.isMDXComponent=!0}}]);