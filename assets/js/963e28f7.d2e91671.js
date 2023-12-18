"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1047],{74034:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var r=t(85893),c=t(11151);const o={title:"reregisterClock"},l=void 0,i={id:"core/component/time/reregisterClock",title:"reregisterClock",description:"Availability: Component, SubComponent, ComponentExtension",source:"@site/../docs/core/component/time/reregisterClock.md",sourceDirName:"core/component/time",slug:"/core/component/time/reregisterClock",permalink:"/sst-docs/docs/core/component/time/reregisterClock",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/time/reregisterClock.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1695940750,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"reregisterClock"},sidebar:"core",previous:{title:"unregisterClock",permalink:"/sst-docs/docs/core/component/time/unregisterClock"},next:{title:"getNextClockCycle",permalink:"/sst-docs/docs/core/component/time/getNextClockCycle"}},s={},a=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"Cycle_t reregisterClock(TimeConverter* freq, Clock::HandlerBase* handler);\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Availability:"})," Component, SubComponent, ComponentExtension"]}),"\n",(0,r.jsx)(n.p,{children:"Re-register a clock at the specified frequency. On each clock cycle, the associated handler will be called. Calling this function for a clock frequency that was not previously registered will cause an error. The function will return the cycle count (in terms of the clock frequency) at which the clock will next be called."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Note:"})," If called after the simulation run loop (e.g., in ",(0,r.jsx)(n.code,{children:"finish()"})," or ",(0,r.jsx)(n.code,{children:"complete()"}),")), the cycle time returned by this function will be one cycle past the end time of the simulation. Because there can be a small lag between simulation end and detection of simulation end, during which clocks can run a few extra cycles, the return value of this function just prior to simulation end may be greater than the value returned after simulation end."]}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"freq"})," (string, UnitAlgebra, TimeConverter*) Frequency of the clock"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"handler"})," (Clock::HandlerBase*) Clock handler function to invoke each cycle"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"returns"})," (Cycle_t) Cycle count, in terms of clock frequency, that the re-registered clock handler will next be called at"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'/* \n * Example component. Events toggle the clock registration.\n */\nclass Sender : public SST::Component {\npublic:\n    /** ELI removed for brevity */\n\n    Sender(ComponentId_t id, Params& params) : Component(id)\n    {\n        clockOn = true;\n        clockHandler = new Clock::Handler<Sender>(this, &Sender::handleClock);\n        clockTimeConverter = registerClock("1GHz", clockHandler);\n\n        /** Other configuration here */\n    }\n\n    /** Event handler, called when an event arrives */\n    void handleEvent(SST::Event *ev) {\n        if (clockOn) {\n            clockOn = false;\n            unregisterClock(clockTimeConverter, clockHandler);\n        } else {\n            clockOn = true;\n            //highlight-next-line\n            reregisterClock(clockTimeConverter, clockHandler);\n        }\n        delete ev;\n    }\n\n    /** Clock handler */\n    bool handleClock(Cycle_t cycle) {\n        output.output("Clock called at cycle %" PRIu64 "\\n", cycle);\n        return false;\n    }\nprivate:\n    bool clockOn;\n    TimeConverter* clockTimeConverter;\n    Clock::Handler<Sender>* clockHandler;\n    /* Other class members here */\n};\n'})}),"\n",(0,r.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n"})})]})}function m(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var r=t(67294);const c={},o=r.createContext(c);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);