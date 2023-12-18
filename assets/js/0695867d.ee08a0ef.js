"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9866],{48114:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=t(85893),s=t(11151);const r={title:"loadAnonymousSubComponent"},a=void 0,i={id:"core/component/load/loadAnonymousSubComponent",title:"loadAnonymousSubComponent",description:"Availability: Component, SubComponent, ComponentExtension",source:"@site/../docs/core/component/load/loadAnonymousSubComponent.md",sourceDirName:"core/component/load",slug:"/core/component/load/loadAnonymousSubComponent",permalink:"/sst-docs/docs/core/component/load/loadAnonymousSubComponent",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/load/loadAnonymousSubComponent.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1695940750,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"loadAnonymousSubComponent"},sidebar:"core",previous:{title:"loadUserSubComponent",permalink:"/sst-docs/docs/core/component/load/loadUserSubComponent"},next:{title:"getSubComponentSlotInfo",permalink:"/sst-docs/docs/core/component/load/getSubComponentSlotInfo"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function m(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"template <class T, class... ARGS>\nT* loadAnonymousSubComponent(const std::string& type, const std::string slot_name,\n    int slot_num, uint64_t share_flags, Params& params, ARGS... args);\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"Availability:"})," Component, SubComponent, ComponentExtension"]}),"\n",(0,o.jsx)(n.p,{children:"Load an SST SubComponent anonymously, that is, not via the simulation configuration file."}),"\n",(0,o.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"type"})," (string) SubComponent type in ",(0,o.jsx)(n.code,{children:"lib.name"})," format"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"slot_name"})," (string) Name of the slot to load into"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"slot_num"})," (int) Index in the slot to load into"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"share_flags"})," (uint64_t) SST flags that indicate how statistics, ports, and other ELI properties should be shared between parent (Sub)Component and child SubComponent"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"params"})," (Params) Set of parameters to pass to the SubComponent's constructor"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"args"})," (ARGS) Additional SubComponent API-specific arguments for the SubComponent's constructor"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"returns"})," (bool) A pointer to the newly-created SubComponent"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/miranda/mirandaCPU.cc"',children:'RequestGenCPU::RequestGenCPU(ComponentId_t id, Params& params) : Component(id) {\n    /** Configuration here */\n\n    // Load a StandardMem memory interface to translate our memory requests for the attached memory subsystem\n    std::string interfaceName = params.find<std::string>("memoryinterface", "memHierarchy.standardInterface");\n    Params interfaceParams = params.get_scoped_params("memoryinterfaceparams");\n    interfaceParams.insert("port", "cache_link"); // The interface will share our port named \'cache_link\'\n\n    //highlight-start\n    cache_link = loadAnonymousSubComponent<SST::Interfaces::StandardMem>(interfaceName, "memory", 0,\n        ComponentInfo::SHARE_PORTS | ComponentInfo::INSERT_STATS, interfaceParams, timeConverter, \n        new Interfaces::StandardMem::Handler<RequestGenCPU>(this, &RequestGenCPU::handleEvent));\n    //highlight-end\n\n    sst_assert(cache_link, CALL_INFO, -1, "%s, Error loading memory interface\\n", getName().c_str());\n\n    /** Rest of configuration here */\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var o=t(67294);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);