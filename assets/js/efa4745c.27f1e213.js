"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31240],{28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>d});var r=n(96540);const a={},s=r.createContext(a);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(s.Provider,{value:t},e.children)}},84801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"core/iface/StandardMem/destructor","title":"destructor","description":"SST calls the StandardMem destructor prior to exiting. (Sub)Components should not call the StandardMem interface\'s destructor manually. StandardMem interfaces should clean up any state that is not registered with SST (e.g., not a link, clock handler, statistic, etc) in their destructors.","source":"@site/../docs/core/iface/StandardMem/destructor.md","sourceDirName":"core/iface/StandardMem","slug":"/core/iface/StandardMem/destructor","permalink":"/sst-docs/docs/core/iface/StandardMem/destructor","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/iface/StandardMem/destructor.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1684522150000,"frontMatter":{"title":"destructor"},"sidebar":"core","previous":{"title":"constructor","permalink":"/sst-docs/docs/core/iface/StandardMem/constructor"},"next":{"title":"init","permalink":"/sst-docs/docs/core/iface/StandardMem/init"}}');var a=n(74848),s=n(28453);const c={title:"destructor"},d=void 0,i={},o=[{value:"Requirements",id:"requirements",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function l(e){const t={br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"~StandardMem();\n"})}),"\n",(0,a.jsxs)(t.p,{children:["SST calls the StandardMem destructor prior to exiting. (Sub)Components should ",(0,a.jsx)(t.em,{children:"not"})," call the StandardMem interface's destructor manually. StandardMem interfaces should clean up any state that is not registered with SST (e.g., not a link, clock handler, statistic, etc) in their destructors."]}),"\n",(0,a.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Memory interface"})," \xa0",(0,a.jsx)(t.br,{}),"\n","Clean up any internal state that is not registered with SST."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Endpoint"})," \xa0",(0,a.jsx)(t.br,{}),"\n","Do not call this function. SST will destroy SubComponents."]}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/memHierarchy/standardInterface.h"',children:'#include <sst/core/interfaces/stdMem.h>\n\nclass StandardInterface : public SST::Interfaces::StandardMem {\npublic:\n    // Tell SST that this class is a SubComponent API\n    SST_ELI_REGISTER_SUBCOMPONENT(StandardInterface, "memHierarchy", "standardInterface", SST_ELI_ELEMENT_VERSION(1,0,0), "Interface to memory hierarchy between endpoint and cache. COnverts StandardMem requests into MemEventBases.", SST::Interfaces::StandardMem)\n\n    /* Rest of ELI macros */\n\n    StandardInterface(ComponentId_t cid, Params &params, TimeConverter* time, HandlerBase* handler = NULL);\n\n    ~StandardInterface();\n\n    /* Rest of class */\n};\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/memHierarchy/standardInterface.cc"',children:'#include <sst_config.h>\n#include "standardInterface.h"\n\nStandardInterface::StandardInterface(ComponentId_t cid, Params &params, TimeConverter* time, HandlerBase* handler) :\n    StandardMem(id, params, time, handler)\n    {\n        setDefaultTimeBase(time); // Links are required to have a timebase\n\n        /** Rest of constructor implementation **/\n    }\n'})}),"\n",(0,a.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/interfaces/stdMem.h>\n"})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}}}]);