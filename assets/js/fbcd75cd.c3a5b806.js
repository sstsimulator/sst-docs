"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1768],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4200:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),s=["components"],a={title:"setup"},c=void 0,l={unversionedId:"core/component/lifecycle/setup",id:"core/component/lifecycle/setup",title:"setup",description:"\x3c!---",source:"@site/../docs/core/component/lifecycle/setup.md",sourceDirName:"core/component/lifecycle",slug:"/core/component/lifecycle/setup",permalink:"/docs/docs/core/component/lifecycle/setup",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/component/lifecycle/setup.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"setup"},sidebar:"Core API",previous:{title:"init",permalink:"/docs/docs/core/component/lifecycle/init"},next:{title:"complete",permalink:"/docs/docs/core/component/lifecycle/complete"}},p={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Header",id:"header",level:2}],d={toc:u},m="wrapper";function f(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)(m,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"virtual void setup();\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Availability:")," Component, SubComponent, ComponentExtension"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"setup()")," function is called by SST after the ",(0,i.kt)("inlineCode",{parentName:"p"},"init()")," phase is finished and just prior to simulation begin. SST calls this function once on all components. It is an opportunity for components to enqueue initial events for after simulation begins if needed and do any last internal setup prior to simulation."),(0,i.kt)("admonition",{title:"Important",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This function is called by SSTCore on Components only. Components, SubComponents, and ComponentExtensions must in turn manually call ",(0,i.kt)("inlineCode",{parentName:"p"},"setup()")," on their SubComponents and ComponentExtensions. This allows developers to control both whether those objects participate in the Setup phase, and the order in which they participate. ")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"returns")," none")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"example-1"},"Example 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"/********* basicSimLifeCycle.h **********/\n#include <sst/core/component.h>\n#include <sst/core/link.h>\n\nclass basicSimLifeCycle : public SST::Component {\n  public:\n    \n    /** ELI removed for brevity, would be here **/\n\n    basicSimLifeCycle(SST::ComponentId_t id, SST::Params& params);\n    ~basicSimLifeCycle();\n\n    virtual void setup() override;\n\n    /** Other public functions here */\n\n  private:\n    // Parameters\n    unsigned eventsToSend;\n    bool verbose;\n\n    // Component state\n    unsigned eventsReceived;                // Number of events we've received\n    unsigned eventsForwarded;               // Number of events we've forwarded\n    unsigned eventsSent;                    // Number of events we've sent (initiated)\n    std::set<std::string> neighbors;        // Set of all neighbors on the ring\n    std::set<std::string>::iterator iter;   // Next component to send to in the eventRequests map \n\n    // Additional state reported during finish\n    std::string leftMsg, rightMsg;\n\n    // SST Output object, for printing, error messages, etc.\n    SST::Output* out;\n\n    // Links\n    SST::Link* leftLink;\n    SST::Link* rightLink;\n}\n\n/********* basicSimLifeCycle.cc *********/\n#include \"sst_config.h\"\n#include \"basicSimLifeCycle.h\"\n\nvoid basicSimLifeCycle::setup() {\n    // Use the average of each components' eventsToSend parameter to agree on eventsToSend\n    // Then, total events to send during simulation is our neighbors * events to each\n    eventsToSend /= (neighbors.size() + 1); // Plus one since I am not in the neighbor list\n    eventsToSend *= neighbors.size(); // Total number of events to send\n\n    // Sanity check\n    if (neighbors.empty() || eventsToSend == 0) {\n        primaryComponentOKToEndSim();\n        return;\n    }\n\n    // Since all the sets are ordered the same, stagger the starting neighbor\n    iter = neighbors.upper_bound(getName());\n    if (iter == neighbors.end()) iter = neighbors.begin();\n\n    // Send first event\n    leftLink->send(new basicLifeCycleEvent(*iter));\n    \n    // Record that we sent this event\n    eventsSent++;\n\n    // Update iter to prepare for next send\n    iter++;\n    if (iter == neighbors.end()) iter = neighbors.begin();\n}\n")),(0,i.kt)("h2",{id:"header"},"Header"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n")))}f.isMDXComponent=!0}}]);