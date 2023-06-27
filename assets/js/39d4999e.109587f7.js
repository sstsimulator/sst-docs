"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9625],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),c=a,f=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},67227:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"SST v8.0.0 Released",author:"SST Development Team",authorFBID:""},l=void 0,i={permalink:"/sst-docs/blog/2018/05/31/v8.0.0-released",source:"@site/blog/2018-05-31-v8.0.0-released.md",title:"SST v8.0.0 Released",description:"SST v8.0.0 is now available and can be downloaded here",date:"2018-05-31T00:00:00.000Z",formattedDate:"May 31, 2018",tags:[],readingTime:1.32,hasTruncateMarker:!0,authors:[{name:"SST Development Team"}],frontMatter:{title:"SST v8.0.0 Released",author:"SST Development Team",authorFBID:""},prevItem:{title:"SST Tutorial (July 2018) Available",permalink:"/sst-docs/blog/2018/08/13/new-tutorial"},nextItem:{title:"SST v7.2.0 Released",permalink:"/sst-docs/blog/2017/12/11/v7.2.0-released"}},s={authorsImageUrls:[void 0]},p=[],u={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"SST v8.0.0 is now available and can be downloaded ",(0,a.kt)("a",{parentName:"p",href:"http://sst-simulator.org/SSTPages/SSTMainDownloads"},"here")),(0,a.kt)("p",null,"The SST 8.0.0 release follows the standard release process of having our point releases provide improved performance and stability. In this release, we have focused on many under the hood fixes to address bugs as well as improving predictive accuracy and simulation speed."),(0,a.kt)("p",null,"A selection of the improvement highlights are:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SST-Core:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added ability to use custom time vortex modules for optimizing event delivery and simulation performance"),(0,a.kt)("li",{parentName:"ul"},"Added max/min fields for statistics in the core"),(0,a.kt)("li",{parentName:"ul"},"Fixed a bug handling self-partitioning"),(0,a.kt)("li",{parentName:"ul"},"Issue warnings for zero latency links")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SST-Elements:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added the Kingsley network-on-chip mesh model"),(0,a.kt)("li",{parentName:"ul"},"Added support for Ramulator"),(0,a.kt)("li",{parentName:"ul"},"Ariel can now forward application data into simulated memory subsystems"),(0,a.kt)("li",{parentName:"ul"},"Added HyperX topology to Merlin"),(0,a.kt)("li",{parentName:"ul"},"Fixes several bugs in Ariel memory allocation and page mapping"),(0,a.kt)("li",{parentName:"ul"},"Added Stake simulation core to Miranda for RISC-V simulation"),(0,a.kt)("li",{parentName:"ul"},"Added OpenSHMEM model support in Ember motifs"),(0,a.kt)("li",{parentName:"ul"},"Added new communication pattern motifs for Ember"),(0,a.kt)("li",{parentName:"ul"},"Several fixes for MPI operations and timing in Ember/FireFly"),(0,a.kt)("li",{parentName:"ul"},"Improved performance for large-scale network simulations"),(0,a.kt)("li",{parentName:"ul"},"Fixed an alignment issue with Juno memory operations"),(0,a.kt)("li",{parentName:"ul"},"Fixes to Samba TLB model for scalable simulation")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SST-Macro:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bug fixes and performance improvements"),(0,a.kt)("li",{parentName:"ul"},"Improved auto-skeletonization support"),(0,a.kt)("li",{parentName:"ul"},"Additional topologies and routing algorithms, including Dragonfly+ and progressive adaptive routing"),(0,a.kt)("li",{parentName:"ul"},"Integration of fcontext, no more Boost dependencies"),(0,a.kt)("li",{parentName:"ul"},"Defined hierarchy of congestion models for trading off accuracy/speed of simulation")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Current release information can be found ",(0,a.kt)("a",{parentName:"p",href:"http://sst-simulator.org/SSTPages/SSTmicroReleaseV8dot0dot0/"},"here")),(0,a.kt)("p",null,"We look forward to hearing your successes with the latest release!"))}d.isMDXComponent=!0}}]);