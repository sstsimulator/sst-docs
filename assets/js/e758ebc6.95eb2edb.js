"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34034],{26456:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"core/component/component/class","title":"SST::Component","description":"A Component is the basic unit of simulation in SST. Components communicate with other components via SST Events sent over SST links. Components can load SubComponents and ComponentExtensions for additional functionality.","source":"@site/../docs/core/component/component/class.md","sourceDirName":"core/component/component","slug":"/core/component/component/class","permalink":"/sst-docs/docs/core/component/component/class","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/component/class.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1716583959000,"frontMatter":{"title":"SST::Component"},"sidebar":"core","previous":{"title":"Introduction","permalink":"/sst-docs/docs/core/component/introduction"},"next":{"title":"constructor","permalink":"/sst-docs/docs/core/component/component/constructor"}}');var o=t(74848),i=t(28453);const r={title:"SST::Component"},c=void 0,a={},l=[{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"A Component is the basic unit of simulation in SST. Components communicate with other components via SST Events sent over SST links. Components can load SubComponents and ComponentExtensions for additional functionality."}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",metastring:'title="sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.h"',children:"#include <sst/core/component.h>\n#include <sst/core/link.h>\n\nclass basicSimLifeCycle : public SST::Component {\n  public:\n\t\n\t/** ELI removed for brevity, would be here **/\n\n\tbasicSimLifeCycle(SST::ComponentId_t id, SST::Params& params);\n\t~basicSimLifeCycle();\n\n\t/** Other public functions here */\n\n  private:\n\t// Parameters\n    unsigned eventsToSend;\n\n    // Component state\n    unsigned eventsReceived;                // Number of events we've received\n    unsigned eventsForwarded;               // Number of events we've forwarded\n    unsigned eventsSent;                    // Number of events we've sent (initiated)\n    std::set<std::string> neighbors;        // Set of all neighbors on the ring\n    std::set<std::string>::iterator iter;   // Next component to send to in the eventRequests map \n\n    // Additional state reported during finish\n    std::string leftMsg, rightMsg;\n\n    // SST Output object, for printing, error messages, etc.\n    SST::Output* out;\n\n    // Links\n    SST::Link* leftLink;\n    SST::Link* rightLink;\n}\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",metastring:'title="sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.cc"',children:'#include "sst_config.h"\n#include "basicSimLifeCycle.h"\n\nbasicSimLifeCycle::basicSimLifeCycle(ComponentId_t, Params& params) : Component(id) {\n    out = new Output("", 1, 0, Output::STDOUT);\n    \n    // Get parameter from the Python input\n    bool found;\n    eventsToSend = params.find<unsigned>("eventsToSend", 0, found);\n\n    if (!found) {\n        out->fatal(CALL_INFO, -1, "Error in %s: the input did not specify \'eventsToSend\' parameter\\n", getName().c_str());\n    }\n\n    // configure our links with a callback function that will be called whenever an event arrives\n    leftLink = configureLink("left", new Event::Handler2<basicSimLifeCycle,&basicSimLifeCycle::handleEvent>(this));\n    rightLink = configureLink("right", new Event::Handler2<basicSimLifeCycle,&basicSimLifeCycle::handleEvent>(this));\n\n    // Make sure we successfully configured the links\n    // Failure usually means the user didn\'t connect the port in the input file\n    sst_assert(leftLink, CALL_INFO, -1, "Error in %s: Left link configuration failed\\n", getName().c_str());\n    sst_assert(rightLink, CALL_INFO, -1, "Error in %s: Right link configuration failed\\n", getName().c_str());\n\n    // Register as primary and prevent simulation end until we\'ve received all the events we need\n    registerAsPrimaryComponent();\n    primaryComponentDoNotEndSim();\n\n    // Initialize our variables that count events\n    eventsReceived = 0;\n    eventsForwarded = 0;\n    eventsSent = 0;\n}\n\n/* Rest of functions here */\n'})}),"\n",(0,o.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/component.h>\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(96540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);