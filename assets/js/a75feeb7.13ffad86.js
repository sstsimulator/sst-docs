"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[m]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},36877:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const i={title:"finish"},s=void 0,a={unversionedId:"core/component/lifecycle/finish",id:"core/component/lifecycle/finish",title:"finish",description:"Availability: Component, SubComponent, ComponentExtension",source:"@site/../docs/core/component/lifecycle/finish.md",sourceDirName:"core/component/lifecycle",slug:"/core/component/lifecycle/finish",permalink:"/sst-docs/docs/core/component/lifecycle/finish",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/lifecycle/finish.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"finish"},sidebar:"core",previous:{title:"complete",permalink:"/sst-docs/docs/core/component/lifecycle/complete"},next:{title:"emergencyShutdown",permalink:"/sst-docs/docs/core/component/lifecycle/emergencyShutdown"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}],p={toc:l},m="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"virtual void finish();\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Availability:")," Component, SubComponent, ComponentExtension"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"finish()")," function is analagous to the ",(0,o.kt)("inlineCode",{parentName:"p"},"setup()")," function but called after simulation end. It is called once on each component, just prior to simulation destruction. Common uses of this function include generating output, local post-processing, and error-checking."),(0,o.kt)("admonition",{title:"Important",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This function is called by SSTCore on Components only. Components, SubComponents, and ComponentExtensions must in turn manually call ",(0,o.kt)("inlineCode",{parentName:"p"},"finish()")," on their SubComponents and ComponentExtensions. This allows developers to control both whether those objects participate in the Finish phase, and the order in which they participate. ")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"returns")," none")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.h"',title:'"Excerpt',from:!0,'sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.h"':!0},"#include <sst/core/component.h>\n#include <sst/core/link.h>\n\nclass basicSimLifeCycle : public SST::Component {\n  public:\n    \n    /** ELI removed for brevity, would be here **/\n\n    basicSimLifeCycle(SST::ComponentId_t id, SST::Params& params);\n    ~basicSimLifeCycle();\n\n  //highlight-next-line\n  virtual void finish() override;\n\n    /** Other public functions here */\n\n  private:\n    // Parameters\n    unsigned eventsToSend;\n    bool verbose;\n\n    // Component state\n    unsigned eventsReceived;                // Number of events we've received\n    unsigned eventsForwarded;               // Number of events we've forwarded\n    unsigned eventsSent;                    // Number of events we've sent (initiated)\n    std::set<std::string> neighbors;        // Set of all neighbors on the ring\n    std::set<std::string>::iterator iter;   // Next component to send to in the eventRequests map \n\n    // Additional state reported during finish\n    std::string leftMsg, rightMsg;\n\n    // SST Output object, for printing, error messages, etc.\n    SST::Output* out;\n\n    // Links\n    SST::Link* leftLink;\n    SST::Link* rightLink;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.cc"',title:'"Excerpt',from:!0,'sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.cc"':!0},'#include "sst_config.h"\n#include "basicSimLifeCycle.h"\n\nvoid basicSimLifeCycle::finish()\n{\n    out->output("    My name is %s and I sent %u messages. I received %u messages and forwarded %u messages.\\n"\n            "    My left neighbor said: %s\\n"\n            "    My right neighbor said: %s\\n",\n            getName().c_str(), eventsSent, eventsReceived, eventsForwarded,\n            leftMsg.c_str(), rightMsg.c_str());\n}\n')),(0,o.kt)("h2",{id:"header"},"Header"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n")))}u.isMDXComponent=!0}}]);