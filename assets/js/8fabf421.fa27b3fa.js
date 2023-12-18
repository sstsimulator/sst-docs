"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6337],{91829:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var i=t(85893),s=t(11151);const o={title:"init"},r=void 0,c={id:"core/component/lifecycle/init",title:"init",description:"Availability: Component, SubComponent, ComponentExtension",source:"@site/../docs/core/component/lifecycle/init.md",sourceDirName:"core/component/lifecycle",slug:"/core/component/lifecycle/init",permalink:"/sst-docs/docs/core/component/lifecycle/init",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/lifecycle/init.md",tags:[],version:"current",lastUpdatedBy:"Dean Chester",lastUpdatedAt:1693559957,formattedLastUpdatedAt:"Sep 1, 2023",frontMatter:{title:"init"},sidebar:"core",previous:{title:"LifeCycle",permalink:"/sst-docs/docs/category/lifecycle"},next:{title:"setup",permalink:"/sst-docs/docs/core/component/lifecycle/setup"}},l={},a=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2},{value:"Header",id:"header-1",level:2}];function d(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"virtual void init(unsigned phase);\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Availability:"})," Component, SubComponent, ComponentExtension"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"init()"})," function is called by SST after all components are constructed but before simulation begins. It is an opportunity to set up state and prepare for simulation. Components may send events during init but must use the special untimed send and receive functions. Event handlers are not yet active so links must be polled. Init occurs in rounds or phases, with events sent in a prior round delivered in the subsequent round. All components participate in all rounds. SST calls ",(0,i.jsx)(n.code,{children:"init()"})," in a loop until there are no events to deliver in the next round."]}),"\n",(0,i.jsx)(n.admonition,{title:"Important",type:"info",children:(0,i.jsxs)(n.p,{children:["This function is called by SSTCore on Components only. Components, SubComponents, and ComponentExtensions must in turn manually call ",(0,i.jsx)(n.code,{children:"init()"})," on their SubComponents and ComponentExtensions. This allows developers to control both whether those objects participate in the Init phase, and the order in which they participate."]})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"phase"})," (unsigned) The phase or round number (i.e., number of times ",(0,i.jsx)(n.code,{children:"init()"})," has been called on all components)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.h"',children:"#include <sst/core/component.h>\n#include <sst/core/link.h>\n\nclass basicSimLifeCycle : public SST::Component {\n  public:\n\t\n\t/** ELI removed for brevity, would be here **/\n\n\tbasicSimLifeCycle(SST::ComponentId_t id, SST::Params& params);\n\t~basicSimLifeCycle();\n\n    //highlight-next-line\n    virtual void init(unsigned int phase) override;\n\n\t/** Other public functions here */\n\n  private:\n\t// Parameters\n    unsigned eventsToSend;\n    bool verbose;\n\n    // Component state\n    unsigned eventsReceived;                // Number of events we've received\n    unsigned eventsForwarded;               // Number of events we've forwarded\n    unsigned eventsSent;                    // Number of events we've sent (initiated)\n    std::set<std::string> neighbors;        // Set of all neighbors on the ring\n    std::set<std::string>::iterator iter;   // Next component to send to in the eventRequests map \n\n    // Additional state reported during finish\n    std::string leftMsg, rightMsg;\n\n    // SST Output object, for printing, error messages, etc.\n    SST::Output* out;\n\n    // Links\n    SST::Link* leftLink;\n    SST::Link* rightLink;\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.cc"',children:'#include "sst_config.h"\n#include "basicSimLifeCycle.h"\n\nvoid basicSimLifeCycle::init(unsigned int phase) {\n\n    // Only send our info on phase 0\n    if (phase == 0) {\n        basicLifeCycleEvent* event = new basicLifeCycleEvent(getName(), eventsToSend);\n        leftLink->sendUntimedData(event);\n    }\n\n    // Check if an event is received. recvUntimedData returns nullptr if no event is available\n    while (SST::Event* ev = rightLink->recvUntimedData()) {\n\n        basicLifeCycleEvent* event = dynamic_cast<basicLifeCycleEvent*>(ev);\n\n        if (event) {\n            if (event->getStr() == getName()) { // Event made it around the ring and back to this component\n                delete event;\n            } else { // Event is from another component\n                neighbors.insert(event->getStr());\n                eventsToSend += event->getNum();\n                leftLink->sendUntimedData(event);\n            }\n\n        } else {\n            out->fatal(CALL_INFO, -1, "Error in %s: Received an event during init() but it is not the expected type\\n", getName().c_str());\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,i.jsx)(n.h2,{id:"header-1",children:"Header"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var i=t(67294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);