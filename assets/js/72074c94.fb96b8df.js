"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6171],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,d=u["".concat(l,".").concat(h)]||u[h]||p[h]||a;return n?i.createElement(d,r(r({ref:t},m),{},{components:n})):i.createElement(d,r({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),r=["components"],s={title:"Time in SST"},l=void 0,c={unversionedId:"guides/concepts/time",id:"guides/concepts/time",title:"Time in SST",description:"\x3c!---",source:"@site/../docs/guides/concepts/time.md",sourceDirName:"guides/concepts",slug:"/guides/concepts/time",permalink:"/docs/docs/guides/concepts/time",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/guides/concepts/time.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"Time in SST"},sidebar:"Guides",next:{title:"Simulation Configuration File",permalink:"/docs/docs/guides/configuration/pythonConfigGuide"}},m={},u=[{value:"Core Time",id:"core-time",level:2},{value:"Local Time",id:"local-time",level:2},{value:"The TimeConverter Object",id:"the-timeconverter-object",level:2},{value:"Default Time Bases",id:"default-time-bases",level:2}],p={toc:u},h="wrapper";function d(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)(h,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Time in SST is represented by a combination of two values: a ",(0,a.kt)("em",{parentName:"p"},"time base")," and a ",(0,a.kt)("em",{parentName:"p"},"count"),". The time\nbase represents a quantum of time and is encapsulated in the ",(0,a.kt)("inlineCode",{parentName:"p"},"TimeConverter")," object. The count\nis the number of these quanta stored as an unsigned 64-bit integer (typedef'd as ",(0,a.kt)("inlineCode",{parentName:"p"},"SimTime t"),"). For\nexample, if the time base is 2ps and the count is 1000, the represented time is 2ns (2ps * 1000).\nThis tuple is for both absolute and relative time. Absolute time is the current simulated time,\nwhereas relative time represents delays, usually based on the current absolute time. There are also\ntwo views of time, core and local."),(0,a.kt)("h2",{id:"core-time"},"Core Time"),(0,a.kt)("p",null,"Core time is the time as viewed by the core and absolute core time that has passed since the beginning\nof the simulation. We simply refer to absolute core time as current time. The core time base is\nthe minimum time interval that is representable in the simulator and defaults to 1ps. It is stored as\na UnitAlgebra object in the core and can be retrieved in Components and SubComponents through\nthe call ",(0,a.kt)("a",{parentName:"p",href:"../../core/component/time/getCoreTimeBase"},(0,a.kt)("inlineCode",{parentName:"a"},"getCoreTimeBase()")),". The current time is tracked\nwith a ",(0,a.kt)("inlineCode",{parentName:"p"},"SimTime_t")," in the core and can be found through the call\n",(0,a.kt)("a",{parentName:"p",href:"../../core/component/time/getCurrentSimCycle"},(0,a.kt)("inlineCode",{parentName:"a"},"getCurrentSimCycle()")),".\nEach Simulation object (which manages all the elements of the simluation for a given partition)\nkeeps track of its own current time. SST uses a conservative lookahead mechanism to synchronize\nacross Simulation objects to ensure that events never occur out of order, even when crossing partitions.\nThe current time is determined by the delivery time of the activity at\nthe head of the core event queue (called the ",(0,a.kt)("inlineCode",{parentName:"p"},"TimeVortex"),") that is currently being delivered/executed."),(0,a.kt)("h2",{id:"local-time"},"Local Time"),(0,a.kt)("p",null,"Local time is an element\u2019s local view of time. The concept of local time allows an element (Component\nor SubComponent) to be written without having to specifically know what absolute timescales\nit is operating at. This allows a component to deal, for example, with clock cycles instead of absolute\ntime. A component need not care what the actual clock frequency is, just that things occur in\na certain number of clock cycles. The mechanisms used for local time ensure that the timings\nrelative to all other components are consistent."),(0,a.kt)("p",null,"The local time base is captured using a TimeConverter object. The TimeConverter stores a factor\nthat represents the number of core time base intervals in the time base represented by the Time-\nConverter. For example, a TimeConverter that represents 1ns would have a factor of 1000 if the\ncore time base was 1ps (1ns / 1ps). The TimeConverter object has two main functions:\n",(0,a.kt)("a",{parentName:"p",href:"../../core/timeconverter/convertToCoreTime"},(0,a.kt)("inlineCode",{parentName:"a"},"convertTooreTime"))," and\n",(0,a.kt)("a",{parentName:"p",href:"../../core/timeconverter/convertFromCoreTime"},(0,a.kt)("inlineCode",{parentName:"a"},"convertFromCoreTime")),". You can also query the\nTimeConverter\u2019s factor using ",(0,a.kt)("a",{parentName:"p",href:"../../core/timeconverter/getFactor"},(0,a.kt)("inlineCode",{parentName:"a"},"getFactor()")),"."),(0,a.kt)("h2",{id:"the-timeconverter-object"},"The TimeConverter Object"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"../../core/timeconverter/class"},"TimeConverter")," object is used to manage the conversion of time\nbetween global time and the various local views of time. "),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"../../core/timeconverter/convertToCoreTime"},(0,a.kt)("inlineCode",{parentName:"a"},"convertToCoreTime()"))," function converts the\ncount from the local view of time to the count in the global view. For\nexample, if the local count is 250 and the local timebase is 1ns, the function would return 250,000\nif the core time base was 1 ps (250ns * 1000 = 250,000ps). This function is used in Links when\nadding extra latency (specified in the local view of time) on an event send."),(0,a.kt)("p",null,"Similarly, the ",(0,a.kt)("a",{parentName:"p",href:"../../core/timeconverter/convertFromCoreTime"},(0,a.kt)("inlineCode",{parentName:"a"},"convertFromCoreTime"))," function\nconverts a count from the global view of time to a count in the local view. This\nfunction are used when getting the elapsed simulation time in the local view. For example, if a\nComponent has a clock frequency of 2GHz, the local time base would be 500ps (period of a 2GHz\nclock). If ",(0,a.kt)("a",{parentName:"p",href:"../../core/component/time/getCurrentSimTime"},(0,a.kt)("inlineCode",{parentName:"a"},"getCurrentSimTime()")),"\nwas called after 2ms of simulation, the call would return 4,000 (2ms / 500ps)."),(0,a.kt)("h2",{id:"default-time-bases"},"Default Time Bases"),(0,a.kt)("p",null,"Components, SubComponents and Links have the concept of a default time base. This is the\nlocal view of time used by the various member functions when a specific TimeConverter object is\nnot supplied. There are various ways to set the default time base. The most direct is to simply\ncall setDefaultTimeBase() on the object. There are also other implicit ways that the default time\nbase can be set, though a call to setDefaultTimeBase will always override the implicit methods.\nA call to ",(0,a.kt)("a",{parentName:"p",href:"../../core/component/time/registerClock"},(0,a.kt)("inlineCode",{parentName:"a"},"registerClock()"))," will, by default, set the\n(Sub)Component\u2019s default time base to be the clock period of the requested clock. It will also set the\ndefault time bases of all the Links in the (Sub)Component to be the same (both links that have already\nbeen configured and those that haven\u2019t). In the case where a default time base has already been explicitly\nor implicitly set, the time base will not be changed to be the clock period. In general, implicitly setting\na default will not overwrite an existing default (implicitly or explicitly set) and explicitly setting a\ndefault will unconditionally overwrite any existing default."))}d.isMDXComponent=!0}}]);