"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5945],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=l,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},876:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),l=r(3366),a=(r(7294),r(3905)),o=["components"],i={id:"registerClock",title:"registerClock()"},c=void 0,s={unversionedId:"cpp/component/registerClock",id:"cpp/component/registerClock",title:"registerClock()",description:"Fully Qualified Name",source:"@site/../docs/cpp/component/registerClock.md",sourceDirName:"cpp/component",slug:"/cpp/component/registerClock",permalink:"/sst-website/docs/cpp/component/registerClock",draft:!1,editUrl:"https://github.com/sstsimulator/sst-website/edit/master/docs/../docs/cpp/component/registerClock.md",tags:[],version:"current",lastUpdatedBy:"Ryan Ledbetter",lastUpdatedAt:1540311330,formattedLastUpdatedAt:"Oct 23, 2018",frontMatter:{id:"registerClock",title:"registerClock()"},sidebar:"C++",previous:{title:"registerAsPrimaryComponent()",permalink:"/sst-website/docs/cpp/component/registerAsPrimaryComponent"},next:{title:"registerStatistic()",permalink:"/sst-website/docs/cpp/component/registerStatistic"}},p={},u=[{value:"Fully Qualified Name",id:"fully-qualified-name",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Example 3",id:"example-3",level:3},{value:"See Also",id:"see-also",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"fully-qualified-name"},"Fully Qualified Name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"SST::BaseComponent::registerClock()\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"This sets up a function to be called at regular intervals. Often, these Clock::Handler functions are where a good portion of the work is done."),(0,a.kt)("p",null,"Tasks that are often performed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Handle data queued by event handlers."),(0,a.kt)("li",{parentName:"ul"},"Send events."),(0,a.kt)("li",{parentName:"ul"},"Simulate the next step.")),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/component.h>\n")),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"TimeConverter* registerClock (const UnitAlgebra &freq, Clock::HandlerBase *handler, bool regAll=true)\n\nTimeConverter* registerClock (std::string freq, Clock::HandlerBase *handler, bool regAll=true)\n\n// reactivates an existing Clock and Handler, returns the next time clock handler will fire\nCycle_t reregisterClock (TimeConverter *freq, Clock::HandlerBase *handler)\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"freq"),' - How often the handler should be called. This can be either the time between calls ("50ms") or a frequency ("1GHz").'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"handler")," - A Clock::HandlerBase that wraps a function to be called."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"regAll")," (optional) - If true this clock period will be used as the default time base for all of the links connected to this component."),(0,a.kt)("h2",{id:"return-value"},"Return Value"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TimeConverter")," - An object to convert between the component's view of time and the simulation's view of time."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cycle_t")," - the next time the handler will fire"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"example-1"},"Example 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'std::string clockFreq = params.find<std::string>("delay", "60s");\n\nregisterClock(clockFreq, new SST::Clock::Handler<carGenerator>(this, &carGenerator::clockTick));\n')),(0,a.kt)("h3",{id:"example-2"},"Example 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'TimeConverter *tc = registerClock(params.find<std::string>("clockRate", "1 GHz"),\n   new Clock::Handler<DMAEngine>(this, &DMAEngine::clock));\n')),(0,a.kt)("h3",{id:"example-3"},"Example 3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'std::string cpu_clock = params.find<std::string>("clock", "1GHz");\nregisterClock( cpu_clock, new Clock::Handler<Opal>(this, &Opal::tick ) );\n')),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sst-website/docs/cpp/clock/clock_handler"},"Clock::Handler"))))}d.isMDXComponent=!0}}]);