"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5232],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8878:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={title:"SST v7.1.0 Released",author:"SST Development Team",authorFBID:""},s=void 0,p={permalink:"/docs/blog/2017/06/08/v7.1.0-released",source:"@site/blog/2017-06-08-v7.1.0-released.md",title:"SST v7.1.0 Released",description:"SST v7.1.0 is now available and can be downloaded here",date:"2017-06-08T00:00:00.000Z",formattedDate:"June 8, 2017",tags:[],readingTime:1.055,hasTruncateMarker:!0,authors:[{name:"SST Development Team"}],frontMatter:{title:"SST v7.1.0 Released",author:"SST Development Team",authorFBID:""},prevItem:{title:"SST v7.2.0 Released",permalink:"/docs/blog/2017/12/11/v7.2.0-released"},nextItem:{title:"SST v7.0.0 Released",permalink:"/docs/blog/2017/05/10/v7.0.0-released"}},u={authorsImageUrls:[void 0]},c=[],m={toc:c},d="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"SST v7.1.0 is now available and can be downloaded ",(0,o.kt)("a",{parentName:"p",href:"http://sst-simulator.org/SSTPages/SSTMainDownloads"},"here")),(0,o.kt)("p",null,"The SST v7.1.0 release follows the standard release process of having our point releases provide improved performance and stability. In this release, we have focused on many under the hood fixes to address bugs as well as improving predictive accuracy and simulation speed."),(0,o.kt)("p",null,"A selection of the improvement highlights are:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SST-Core:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Updates to SST Element component information definitions including version information and additional documentation. These changes lay the foundation for more better component support into SST 8.0 and beyond"),(0,o.kt)("li",{parentName:"ul"},"Changes to support compile and link flags for external elements on Linux and Mac OS-X"),(0,o.kt)("li",{parentName:"ul"},"Updates to autoconf to support modern use of tar utility")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SST-Elements:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fix for crashes that can occasionally occur in Ariel/memHierarchy"),(0,o.kt)("li",{parentName:"ul"},"Updates to autoconf to support modern use of tar utility")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SST-Macro:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DUMPI configuration fixes, particularly for deprecated MPI-2 functions in MPI-3"),(0,o.kt)("li",{parentName:"ul"},"Added compiler support for static function and C++ static member variables in skeleton apps"),(0,o.kt)("li",{parentName:"ul"},"Linker fixes for generating skeleton app element libraries. Updates to new ELI interface."),(0,o.kt)("li",{parentName:"ul"},"Improved parallel partitioning on top of sst-core"),(0,o.kt)("li",{parentName:"ul"},"Documentation updates")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Current release information can be found ",(0,o.kt)("a",{parentName:"p",href:"http://sst-simulator.org/SSTPages/SSTmicroReleaseV7dot1dot0/"},"here")),(0,o.kt)("p",null,"We look forward to hearing your successes with the latest release!"))}f.isMDXComponent=!0}}]);