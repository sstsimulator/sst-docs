"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1505],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3894:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),i=["components"],o={id:"configureLink",title:"configureLink()"},s=void 0,p={unversionedId:"cpp/component/configureLink",id:"cpp/component/configureLink",title:"configureLink()",description:"Fully Qualified Name",source:"@site/../docs/cpp/component/configureLink.md",sourceDirName:"cpp/component",slug:"/cpp/component/configureLink",permalink:"/sst-website/docs/cpp/component/configureLink",draft:!1,editUrl:"https://github.com/sstsimulator/sst-website/edit/master/docs/../docs/cpp/component/configureLink.md",tags:[],version:"current",lastUpdatedBy:"Ryan Ledbetter",lastUpdatedAt:1539909317,formattedLastUpdatedAt:"Oct 19, 2018",frontMatter:{id:"configureLink",title:"configureLink()"},sidebar:"C++",previous:{title:"constructor",permalink:"/sst-website/docs/cpp/component/constructor"},next:{title:"configureSelfLink()",permalink:"/sst-website/docs/cpp/component/configureSelfLink"}},c={},u=[{value:"Fully Qualified Name",id:"fully-qualified-name",level:2},{value:"Remarks",id:"remarks",level:3},{value:"Requirements",id:"requirements",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Examples 1",id:"examples-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Example 3",id:"example-3",level:3},{value:"Examples 4",id:"examples-4",level:3},{value:"See Also",id:"see-also",level:2}],m={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"fully-qualified-name"},"Fully Qualified Name"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"SST::BaseComponent::configureLink()\n")),(0,l.kt)("h3",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"Configure a link that is attached to a port. You must configure the link on both ends. If you want to set up a link from a component to itself use ",(0,l.kt)("a",{parentName:"p",href:"/sst-website/docs/cpp/component/configureSelfLink"},"configureSelfLink"),"."),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/component.h>\n")),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// #1 using a TimeConverter class for time_base\nLink* configureLink(std::string  name, TimeConverter *  time_base, Event::HandlerBase *  handler = NULL)\n\n// #2 using a string for time_base\nLink* configureLink(std::string  name, std::string  time_base, Event::HandlerBase *  handler = NULL)\n\n// #3 Use default time_base, usually set by a call to registerClock()\nLink* SST::BaseComponent::configureLink(std::string  name, Event::HandlerBase *  handler = NULL) \n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"name")," - Port Name on which the link to configure is attached."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"time_base")," - Used to add an additional delay when sending events."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"handler")," (optional) - An Event::Handler to be call when an Event is received."),(0,l.kt)("h2",{id:"return-value"},"Return Value"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Link","*")," - A pointer to the configured link, or NULL if an error occurred."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"examples-1"},"Examples 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'// #1 using a TimeConverter class for time_base\nTimeConverter *tc = registerClock(params.find<std::string>("clockRate", "1 GHz"),\n             new Clock::Handler<DMAEngine>(this, &DMAEngine::clock));\n     commandLink = configureLink("cmdLink", tc, NULL);\n')),(0,l.kt)("h3",{id:"example-2"},"Example 2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'// #2 using a string for time_base\nm_link = configureLink( "memoryHeap", "0ps",\n             new Event::Handler<MemoryHeapLink>(\n                     this,&MemoryHeapLink::eventHandler ) );  \n')),(0,l.kt)("h3",{id:"example-3"},"Example 3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'// #3 Use default time_base, usually set by a call to registerClock()\nlink = configureLink("recvPort",\n             new Event::Handler<SubCompReceiver>(this, &SubCompReceiver::handleEvent));\n')),(0,l.kt)("h3",{id:"examples-4"},"Examples 4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'// #3 Use default time_base, usually set by a call to registerClock()\nnorthBus = configureLink("northBus");\n')),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/sst-website/docs/cpp/component/configureSelfLink"},"SST::Component::configureSelfLink()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/sst-website/docs/cpp/link/send"},"SST::Link::send()"))))}d.isMDXComponent=!0}}]);