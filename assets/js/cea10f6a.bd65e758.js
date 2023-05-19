"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i={title:"Introduction"},r=void 0,s={unversionedId:"core/component/introduction",id:"core/component/introduction",title:"Introduction",description:"The fundamental building block of an SST simulation is a Component. A Component is a C++ class that implements some part of the simulated system and interacts with other Components via Events sent on Links. Component functionality can be dynamically extended using SubComponents and ComponentExtensions. These three objects, Components, SubComponents, and ComponentExtensions, share a common API defined in the SST::BaseComponent class. The classes also each have their own class-specific functions. The common APIs as well as the class-specific ones are described in this section.",source:"@site/../docs/core/component/introduction.md",sourceDirName:"core/component",slug:"/core/component/introduction",permalink:"/sst-docs/docs/core/component/introduction",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/introduction.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"Introduction"},sidebar:"core",previous:{title:"Clock Handlers",permalink:"/sst-docs/docs/core/clock/clock_handler"},next:{title:"SST::Component",permalink:"/sst-docs/docs/core/component/component/class"}},l={},c=[{value:"Headers",id:"headers",level:2},{value:"Virtual Component API",id:"virtual-component-api",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Class-Specific APIs",id:"class-specific-apis",level:3},{value:"Common API",id:"common-api",level:3},{value:"Header",id:"header",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The fundamental building block of an SST simulation is a ",(0,a.kt)("em",{parentName:"p"},"Component"),". A Component is a C++ class that implements some part of the simulated system and interacts with other Components via Events sent on Links. Component functionality can be dynamically extended using SubComponents and ComponentExtensions. These three objects, Components, SubComponents, and ComponentExtensions, share a common API defined in the SST::BaseComponent class. The classes also each have their own class-specific functions. The common APIs as well as the class-specific ones are described in this section.  "),(0,a.kt)("h2",{id:"headers"},"Headers"),(0,a.kt)("p",null,"Components should include the ",(0,a.kt)("inlineCode",{parentName:"p"},"<sst/core/component.h>")," header, SubComponents the ",(0,a.kt)("inlineCode",{parentName:"p"},"<sst/core/subcomponent.h>")," header, and ComponentExtensions the ",(0,a.kt)("inlineCode",{parentName:"p"},"<sst/core/componentExtension.h>"),". The BaseComponent header should not be included directly. "),(0,a.kt)("h2",{id:"virtual-component-api"},"Virtual Component API"),(0,a.kt)("p",null,"In addition to constructors and destrctors, these functions should be implemented as needed by SST Components, SubComponents, and ComponentExtensions. The Core will call these functions during different stages of simulation. These stages are also referred to as the ",(0,a.kt)("em",{parentName:"p"},"SST LifeCycle"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"lifecycle/init"},"init")," Called during the init() simulation phase."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"lifecycle/setup"},"setup")," Called during the setup() simulation phase."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"lifecycle/complete"},"complete")," Called during the complete() simulation phase."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"lifecycle/finish"},"finish")," Called during the finish() simulation phase."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"lifecycle/emergencyShutdown"},"emergencyShutdown")," Called during abnormal shutdown."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"lifecycle/printStatus"},"printStatus")," Called when SST receives certain SIGUSER signals.")),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("p",null,"Alongside the above virtual API, the API includes a number of functions that grant access to SST Core features including clocks, events, links, output, debug, and statistics. Because the API is large, the functions are organized into the following categories."),(0,a.kt)("h3",{id:"class-specific-apis"},"Class-Specific APIs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"component/class"},"Component")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"subcomponent/class"},"SubComponent")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"componentext/class"},"ComponentExtension"))),(0,a.kt)("h3",{id:"common-api"},"Common API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"lifecycle/init"},"LifeCycle")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"time/registerClock"},"Time and Clocks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"link/configureLink"},"Links")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"load/loadUserSubComponent"},"Loadable Objects (Components, SubComponents, Modules, etc)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"stat/registerStatistic"},"Statistics")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"output/getSimulationOutput"},"Output and Error Handling"))),(0,a.kt)("h2",{id:"header"},"Header"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n")))}u.isMDXComponent=!0}}]);