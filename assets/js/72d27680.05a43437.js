"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9223],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(r),d=a,v=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(v,s(s({ref:t},c),{},{components:r})):n.createElement(v,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7226:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],l={id:"component",title:"sst.Component()"},p=void 0,i={unversionedId:"projectDriver/sst/component",id:"projectDriver/sst/component",title:"sst.Component()",description:"Remarks",source:"@site/../docs/projectDriver/sst/component.md",sourceDirName:"projectDriver/sst",slug:"/projectDriver/sst/component",permalink:"/sst-website/docs/projectDriver/sst/component",draft:!1,editUrl:"https://github.com/sstsimulator/sst-website/edit/master/docs/../docs/projectDriver/sst/component.md",tags:[],version:"current",lastUpdatedBy:"Ryan Ledbetter",lastUpdatedAt:1537293231,formattedLastUpdatedAt:"Sep 18, 2018",frontMatter:{id:"component",title:"sst.Component()"},sidebar:"ProjectDriver",previous:{title:"Help Us",permalink:"/sst-website/docs/projectDriver/helpUs"},next:{title:"sst.enableAllStatisticsForAllComponents()",permalink:"/sst-website/docs/projectDriver/sst/enableAllStatisticsForAllComponents"}},c={},m=[{value:"Remarks",id:"remarks",level:3},{value:"Requirements",id:"requirements",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 1",id:"example-1-1",level:3},{value:"See Also",id:"see-also",level:2}],u={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"Create a component."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import sst\n")),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'component = sst.Component("componentName", "elementLibrary.componentClass")\n')),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"componentName")," - A string to label this component specifically."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"elementLibrary")," - The element library that contains the Component to create."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"componentClass")," - The Component class within the library to create."),(0,o.kt)("h2",{id:"return-value"},"Return Value"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"component")," - Use this to add params, set sub component, and enable statistics."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'carWashComponent = sst.Component("Main Car Wash", "exC_carWash.carWash")\n')),(0,o.kt)("h3",{id:"example-1-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ariel = sst.Component("ariel0", "ariel.ariel")\n')),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/sst-website/docs/projectDriver/component/addParams"},"addParams")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/sst-website/docs/projectDriver/component/enableAllStatistics"},"enableAllStatistics")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/sst-website/docs/projectDriver/component/setSubComponent"},"setSubComponent"))))}d.isMDXComponent=!0}}]);