"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1110],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(t),u=o,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[m]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3353:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={title:"complete"},s=void 0,l={unversionedId:"core/component/lifecycle/complete",id:"core/component/lifecycle/complete",title:"complete",description:"\x3c!---",source:"@site/../docs/core/component/lifecycle/complete.md",sourceDirName:"core/component/lifecycle",slug:"/core/component/lifecycle/complete",permalink:"/docs/docs/core/component/lifecycle/complete",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/component/lifecycle/complete.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"complete"},sidebar:"Core API",previous:{title:"setup",permalink:"/docs/docs/core/component/lifecycle/setup"},next:{title:"finish",permalink:"/docs/docs/core/component/lifecycle/finish"}},p={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Header",id:"header",level:2}],d={toc:m},u="wrapper";function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"virtual void complete(unsigned phase);\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Availability:")," Component, SubComponent, ComponentExtension"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"complete()")," function is analagous to the ",(0,i.kt)("inlineCode",{parentName:"p"},"init()")," function but called after simulation end. Any call to get simulation time during this phase returns the simulation's end time. During this phase, components may send events using the untimed event send and receive functions. As with init, complete occurs in rounds and the phase terminates when there are no events to deliver in a subsequent round. Common uses of this lifecycle phase include post-processing data for analysis, quiescing state, and error checking."),(0,i.kt)("admonition",{title:"Important",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This function is called by SSTCore on Components only. Components, SubComponents, and ComponentExtensions must in turn manually call ",(0,i.kt)("inlineCode",{parentName:"p"},"complete()")," on their SubComponents and ComponentExtensions. This allows developers to control both whether those objects participate in the Complete phase, and the order in which they participate. ")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"phase")," (unsigned) The phase or round number (i.e., number of times complete() has been called on all components)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"returns")," none")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"example-1"},"Example 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'/********* basicSimLifeCycle.h **********/\n#include <sst/core/component.h>\n#include <sst/core/link.h>\n\nclass basicSimLifeCycle : public SST::Component {\n  public:\n    \n    /** ELI removed for brevity, would be here **/\n\n    basicSimLifeCycle(SST::ComponentId_t id, SST::Params& params);\n    ~basicSimLifeCycle();\n\n    virtual void complete(unsigned int phase) override;\n\n    /** Other public functions here */\n\n  private:\n    // Parameters\n    unsigned eventsToSend;\n    bool verbose;\n\n    // Component state\n    unsigned eventsReceived;                // Number of events we\'ve received\n    unsigned eventsForwarded;               // Number of events we\'ve forwarded\n    unsigned eventsSent;                    // Number of events we\'ve sent (initiated)\n    std::set<std::string> neighbors;        // Set of all neighbors on the ring\n    std::set<std::string>::iterator iter;   // Next component to send to in the eventRequests map \n\n    // Additional state reported during finish\n    std::string leftMsg, rightMsg;\n\n    // SST Output object, for printing, error messages, etc.\n    SST::Output* out;\n\n    // Links\n    SST::Link* leftLink;\n    SST::Link* rightLink;\n}\n\n/********* basicSimLifeCycle.cc *********/\n#include "sst_config.h"\n#include "basicSimLifeCycle.h"\n\nvoid basicSimLifeCycle::complete(unsigned phase)\n{\n    if (phase == 0) {\n        std::string goodbye = "Goodbye from " + getName();\n        std::string farewell = "Farewell from " + getName();\n        leftLink->sendUntimedData( new basicLifeCycleEvent(goodbye) );\n        rightLink->sendUntimedData( new basicLifeCycleEvent(farewell) );\n    }\n\n    // Check for an event on the left link\n    while (SST::Event* ev = leftLink->recvUntimedData()) {\n        basicLifeCycleEvent* event = dynamic_cast<basicLifeCycleEvent*>(ev);\n        if (event) {\n            leftMsg = event->getStr();\n            delete event;\n        } else {\n            out->fatal(CALL_INFO, -1, "Error in %s: Received an event during complete() but it is not the expected type\\n", getName().c_str());\n        }\n    }\n\n    // Check for an event on the right link\n    while (SST::Event* ev = rightLink->recvUntimedData()) {\n        basicLifeCycleEvent* event = dynamic_cast<basicLifeCycleEvent*>(ev);\n        if (event) {\n            rightMsg = event->getStr();\n            delete event;\n        } else {\n            out->fatal(CALL_INFO, -1, "Error in %s: Received an event during complete() but it is not the expected type\\n", getName().c_str());\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"header"},"Header"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n")))}f.isMDXComponent=!0}}]);