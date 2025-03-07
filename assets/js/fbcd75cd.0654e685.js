"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53823],{28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}},67889:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"core/component/lifecycle/setup","title":"setup","description":"Availability: Component, SubComponent, ComponentExtension","source":"@site/../docs/core/component/lifecycle/setup.md","sourceDirName":"core/component/lifecycle","slug":"/core/component/lifecycle/setup","permalink":"/sst-docs/docs/core/component/lifecycle/setup","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/lifecycle/setup.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1684522150000,"frontMatter":{"title":"setup"},"sidebar":"core","previous":{"title":"init","permalink":"/sst-docs/docs/core/component/lifecycle/init"},"next":{"title":"complete","permalink":"/sst-docs/docs/core/component/lifecycle/complete"}}');var i=t(74848),o=t(28453);const r={title:"setup"},c=void 0,l={},a=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"virtual void setup();\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Availability:"})," Component, SubComponent, ComponentExtension"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"setup()"})," function is called by SST after the ",(0,i.jsx)(n.code,{children:"init()"})," phase is finished and just prior to simulation begin. SST calls this function once on all components. It is an opportunity for components to enqueue initial events for after simulation begins if needed and do any last internal setup prior to simulation."]}),"\n",(0,i.jsx)(n.admonition,{title:"Important",type:"info",children:(0,i.jsxs)(n.p,{children:["This function is called by SSTCore on Components only. Components, SubComponents, and ComponentExtensions must in turn manually call ",(0,i.jsx)(n.code,{children:"setup()"})," on their SubComponents and ComponentExtensions. This allows developers to control both whether those objects participate in the Setup phase, and the order in which they participate."]})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.h"',children:"#include <sst/core/component.h>\n#include <sst/core/link.h>\n\nclass basicSimLifeCycle : public SST::Component {\n  public:\n\t\n\t/** ELI removed for brevity, would be here **/\n\n\tbasicSimLifeCycle(SST::ComponentId_t id, SST::Params& params);\n\t~basicSimLifeCycle();\n\n  //highlight-next-line\n  virtual void setup() override;\n\n\t/** Other public functions here */\n\n  private:\n\t// Parameters\n    unsigned eventsToSend;\n    bool verbose;\n\n    // Component state\n    unsigned eventsReceived;                // Number of events we've received\n    unsigned eventsForwarded;               // Number of events we've forwarded\n    unsigned eventsSent;                    // Number of events we've sent (initiated)\n    std::set<std::string> neighbors;        // Set of all neighbors on the ring\n    std::set<std::string>::iterator iter;   // Next component to send to in the eventRequests map \n\n    // Additional state reported during finish\n    std::string leftMsg, rightMsg;\n\n    // SST Output object, for printing, error messages, etc.\n    SST::Output* out;\n\n    // Links\n    SST::Link* leftLink;\n    SST::Link* rightLink;\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.h"',children:'#include "sst_config.h"\n#include "basicSimLifeCycle.h"\n\nvoid basicSimLifeCycle::setup() {\n    // Use the average of each components\' eventsToSend parameter to agree on eventsToSend\n    // Then, total events to send during simulation is our neighbors * events to each\n    eventsToSend /= (neighbors.size() + 1); // Plus one since I am not in the neighbor list\n    eventsToSend *= neighbors.size(); // Total number of events to send\n\n    // Sanity check\n    if (neighbors.empty() || eventsToSend == 0) {\n        primaryComponentOKToEndSim();\n        return;\n    }\n\n    // Since all the sets are ordered the same, stagger the starting neighbor\n    iter = neighbors.upper_bound(getName());\n    if (iter == neighbors.end()) iter = neighbors.begin();\n\n    // Send first event\n    leftLink->send(new basicLifeCycleEvent(*iter));\n    \n    // Record that we sent this event\n    eventsSent++;\n\n    // Update iter to prepare for next send\n    iter++;\n    if (iter == neighbors.end()) iter = neighbors.begin();\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);