"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5678],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(t),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return t?o.createElement(f,s(s({ref:n},p),{},{components:t})):o.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[m]="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9704:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),s=["components"],a={title:"SST::Component"},c=void 0,l={unversionedId:"core/component/component/class",id:"core/component/component/class",title:"SST::Component",description:"A Component is the basic unit of simulation in SST. Components communicate with other components via SST Events sent over SST links. Components can load SubComponents and ComponentExtensions for additional functionality.",source:"@site/../docs/core/component/component/class.md",sourceDirName:"core/component/component",slug:"/core/component/component/class",permalink:"/docs/docs/core/component/component/class",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/component/component/class.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"SST::Component"},sidebar:"Core API",previous:{title:"Introduction",permalink:"/docs/docs/core/component/introduction"},next:{title:"Component constructor",permalink:"/docs/docs/core/component/component/constructor"}},p={},m=[{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Header",id:"header",level:2}],u={toc:m},d="wrapper";function f(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)(d,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A Component is the basic unit of simulation in SST. Components communicate with other components via SST Events sent over SST links. Components can load SubComponents and ComponentExtensions for additional functionality."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"example-1"},"Example 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'/********* basicSimLifeCycle.h **********/\n#include <sst/core/component.h>\n#include <sst/core/link.h>\n\nclass basicSimLifeCycle : public SST::Component {\n  public:\n    \n    /** ELI removed for brevity, would be here **/\n\n    basicSimLifeCycle(SST::ComponentId_t id, SST::Params& params);\n    ~basicSimLifeCycle();\n\n    /** Other public functions here */\n\n  private:\n    // Parameters\n    unsigned eventsToSend;\n\n    // Component state\n    unsigned eventsReceived;                // Number of events we\'ve received\n    unsigned eventsForwarded;               // Number of events we\'ve forwarded\n    unsigned eventsSent;                    // Number of events we\'ve sent (initiated)\n    std::set<std::string> neighbors;        // Set of all neighbors on the ring\n    std::set<std::string>::iterator iter;   // Next component to send to in the eventRequests map \n\n    // Additional state reported during finish\n    std::string leftMsg, rightMsg;\n\n    // SST Output object, for printing, error messages, etc.\n    SST::Output* out;\n\n    // Links\n    SST::Link* leftLink;\n    SST::Link* rightLink;\n}\n\n/********* basicSimLifeCycle.cc *********/\n#include "sst_config.h"\n#include "basicSimLifeCycle.h"\n\nbasicSimLifeCycle::basicSimLifeCycle(ComponentId_t, Params& params) : Component(id) {\n    out = new Output("", 1, 0, Output::STDOUT);\n    \n    // Get parameter from the Python input\n    bool found;\n    eventsToSend = params.find<unsigned>("eventsToSend", 0, found);\n\n    if (!found) {\n        out->fatal(CALL_INFO, -1, "Error in %s: the input did not specify \'eventsToSend\' parameter\\n", getName().c_str());\n    }\n\n    // configure our links with a callback function that will be called whenever an event arrives\n    leftLink = configureLink("left", new Event::Handler<basicSimLifeCycle>(this, &basicSimLifeCycle::handleEvent));\n    rightLink = configureLink("right", new Event::Handler<basicSimLifeCycle>(this, &basicSimLifeCycle::handleEvent));\n\n    // Make sure we successfully configured the links\n    // Failure usually means the user didn\'t connect the port in the input file\n    sst_assert(leftLink, CALL_INFO, -1, "Error in %s: Left link configuration failed\\n", getName().c_str());\n    sst_assert(rightLink, CALL_INFO, -1, "Error in %s: Right link configuration failed\\n", getName().c_str());\n\n    // Register as primary and prevent simulation end until we\'ve received all the events we need\n    registerAsPrimaryComponent();\n    primaryComponentDoNotEndSim();\n\n    // Initialize our variables that count events\n    eventsReceived = 0;\n    eventsForwarded = 0;\n    eventsSent = 0;\n}\n\n/* Rest of functions here */\n')),(0,i.kt)("h2",{id:"header"},"Header"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/component.h>\n")))}f.isMDXComponent=!0}}]);