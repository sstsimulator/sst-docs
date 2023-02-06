"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8554],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),u=s,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8622:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(7462),s=r(3366),a=(r(7294),r(3905)),o=["components"],i={id:"sst-register",title:"sst-register"},l=void 0,c={unversionedId:"tools/commandLine/sst-register",id:"tools/commandLine/sst-register",title:"sst-register",description:"This page has not been reviewed recently to ensure that it is up-to-date with the latest SST specification. It is possible the information is out of date.",source:"@site/../docs/tools/commandLine/sst-register.md",sourceDirName:"tools/commandLine",slug:"/tools/commandLine/sst-register",permalink:"/sst-website/docs/tools/commandLine/sst-register",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/tools/commandLine/sst-register.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{id:"sst-register",title:"sst-register"},sidebar:"Tools",previous:{title:"sst-info",permalink:"/sst-website/docs/tools/commandLine/sst-info"}},p={},d=[{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"See Also",id:"see-also",level:2}],m={toc:d},u="wrapper";function f(e){var t=e.components,r=(0,s.Z)(e,o);return(0,a.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This page has not been reviewed recently to ensure that it is up-to-date with the latest SST specification. It is possible the information is out of date.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'sst-register <Dependency Name> (<VAR>=<VALUE>)*\n\n<Dependency Name>   : Name of the Third Party Dependency\n<VAR>=<VALUE>       : Configuration variable and associated value to add to registry.\n                      If <VAR>=<VALUE> pairs are not provided, the tool will attempt\n                      to auto-register $PWD/include and $PWD/lib to the name\n\n                      Example: sst-register DRAMSim CPPFLAGS="-I$PWD/include"\n')),(0,a.kt)("p",null,"The command line utility, ",(0,a.kt)("inlineCode",{parentName:"p"},"sst-register"),", is used to register an Element Library with the SST Core."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"example-1"},"Example 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sst-register exC_carWash exC_carWash_LIBDIR=$(CURDIR)\n")),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sst-website/docs/guides/files/basics_makefile"},"Basics: Makefile"))))}f.isMDXComponent=!0}}]);