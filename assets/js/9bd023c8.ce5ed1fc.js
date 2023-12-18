"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6472],{248:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var o=t(85893),s=t(11151);const i={title:"emergencyShutdown"},c=void 0,r={id:"core/component/lifecycle/emergencyShutdown",title:"emergencyShutdown",description:"Availability: Component, SubComponent, ComponentExtension",source:"@site/../docs/core/component/lifecycle/emergencyShutdown.md",sourceDirName:"core/component/lifecycle",slug:"/core/component/lifecycle/emergencyShutdown",permalink:"/sst-docs/docs/core/component/lifecycle/emergencyShutdown",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/lifecycle/emergencyShutdown.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"emergencyShutdown"},sidebar:"core",previous:{title:"finish",permalink:"/sst-docs/docs/core/component/lifecycle/finish"},next:{title:"printStatus",permalink:"/sst-docs/docs/core/component/lifecycle/printStatus"}},l={},a=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"virtual void emergencyShutdown();\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"Availability:"})," Component, SubComponent, ComponentExtension"]}),"\n",(0,o.jsx)(n.p,{children:"This function is called by the SSTCore on each Component if SST encounters a SIGINT or SIGTERM. Common uses include cleaning up external state and generating additional error or debug information."}),"\n",(0,o.jsx)(n.admonition,{title:"Important",type:"info",children:(0,o.jsxs)(n.p,{children:["This function is called by SSTCore on Components only. Components, SubComponents, and ComponentExtensions must in turn manually call ",(0,o.jsx)(n.code,{children:"emergencyShutdown()"})," on their SubComponents and ComponentExtensions. This allows developers to control both whether those objects participate in EmergencyShutdown, and the order in which they participate."]})}),"\n",(0,o.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.h"',children:"#include <sst/core/component.h>\n#include <sst/core/link.h>\n\nclass basicSimLifeCycle : public SST::Component {\n  public:\n\t\n\t/** ELI removed for brevity, would be here **/\n\n\tbasicSimLifeCycle(SST::ComponentId_t id, SST::Params& params);\n\t~basicSimLifeCycle();\n\n  //highlight-next-line\n  virtual void emergencyShutdown() override;\n\n\t/** Other public functions here */\n\n  private:\n\n    // Component state\n    unsigned eventsReceived;                // Number of events we've received\n    unsigned eventsForwarded;               // Number of events we've forwarded\n    unsigned eventsSent;                    // Number of events we've sent (initiated)\n\n    // SST Output object, for printing, error messages, etc.\n    SST::Output* out;\n\n    /** Additional private class members here */\n}\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/basicSimLifeCycle.h"',children:'#include "sst_config.h"\n#include "basicSimLifeCycle.h"\n\nvoid basicSimLifeCycle::emergencyShutdown() \n{\n    out->output("Uh-oh, my name is %s and I have to quit. I sent %u messages.\\n", getName().c_str(), eventsSent);\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>c});var o=t(67294);const s={},i=o.createContext(s);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);