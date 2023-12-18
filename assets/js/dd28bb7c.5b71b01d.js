"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7693],{25341:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var o=t(85893),s=t(11151);const a={title:"SST::SubComponent"},c=void 0,i={id:"core/component/subcomponent/class",title:"SST::SubComponent",description:"A SubComponent is a modular piece of functionality that can be dynamically loaded into a Component or another SubComponent. SubComponents can be declared in the SST configuration input file (i.e., a user subcomponent) or can be loaded directly by a (sub)component such that the user may not have control over which component is loaded (i.e., an anonymous subcomponent). A parent (sub)Component interacts directly with its loaded subcomponent via function calls. SubComponents and their parents are always co-located when SST is running in parallel.",source:"@site/../docs/core/component/subcomponent/class.md",sourceDirName:"core/component/subcomponent",slug:"/core/component/subcomponent/class",permalink:"/sst-docs/docs/core/component/subcomponent/class",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/subcomponent/class.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"SST::SubComponent"},sidebar:"core",previous:{title:"primaryComponentOKToEndSim",permalink:"/sst-docs/docs/core/component/component/primaryComponentOKToEndSim"},next:{title:"constructor",permalink:"/sst-docs/docs/core/component/subcomponent/constructor"}},r={},m=[{value:"User versus Anonymous SubComponents",id:"user-versus-anonymous-subcomponents",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function p(n){const e={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["A SubComponent is a modular piece of functionality that can be dynamically loaded into a Component or another SubComponent. SubComponents can be declared in the SST configuration input file (i.e., a ",(0,o.jsx)(e.em,{children:"user"})," subcomponent) or can be loaded directly by a (sub)component such that the user may not have control over which component is loaded (i.e., an ",(0,o.jsx)(e.em,{children:"anonymous"})," subcomponent). A parent (sub)Component interacts directly with its loaded subcomponent via function calls. SubComponents and their parents are always co-located when SST is running in parallel."]}),"\n",(0,o.jsx)(e.p,{children:"SubComponents must inherit from a SubComponent API which must in turn inherit from the SST::SubComponent class. This allows SST to load any SubComponent that inherits from a given API into a slot designed for that API."}),"\n",(0,o.jsx)(e.h2,{id:"user-versus-anonymous-subcomponents",children:"User versus Anonymous SubComponents"}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"User"}),(0,o.jsx)(e.th,{children:"Anonymous"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"Defined in the simulation input file"}),(0,o.jsx)(e.td,{children:"Defined by the (sub)component that loads it"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"Parameters come from simulation input"}),(0,o.jsx)(e.td,{children:"Parameters come from parent (sub)component"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"Can have links"}),(0,o.jsx)(e.td,{children:"Can only use its parent's links"})]})]})]}),"\n",(0,o.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-cpp",metastring:'title="Excerpt from src/sst/elements/simpleElementExample/basicSubComponent_subcomponent.cc"',children:'#include <sst/core/subcomponent.h>\n\n// SubComponent API - define an API for a type of subcomponent\nclass basicSubComponentAPI : public SST::SubComponent \n{\npublic:\n    // Tell SST that this class is a SubComponent API\n    SST_ELI_REGISTER_SUBCOMPONENT_API(SST::simpleElementExample::basicSubComponentAPI)\n\n    basicSubComponentAPI(ComponentId_t id, Params& params) : SubComponent(id) {}\n    virtual ~basicSubComponentAPI() {}\n\n    virtual int compute (int num) =0;\n    virtual std::string compute (std::string comp) =0;\n};\n\n// This is a subcomponent that implements the API defined above\nclass basicSubComponentIncrement : public basicSubComponentAPI \n{\npublic:\n    SST_ELI_REGISTER_SUBCOMPONENT(\n        basicSubComponentIncrement,     // Class name\n        "simpleElementExample",         // Library name, the \'lib\' in SST\'s lib.name format\n        "basicSubComponentIncrement",   // Name used to refer to this subcomponent, the \'name\' in SST\'s lib.name format\n        SST_ELI_ELEMENT_VERSION(1,0,0), // A version number\n        "SubComponent that increments a value", // Description\n        SST::simpleElementExample::basicSubComponentAPI) // Fully qualified name of the API this subcomponent implements\n\n    // Other ELI macros as needed for parameters, ports, statistics, and subcomponent slots\n    SST_ELI_DOCUMENT_PARAMS( { "amount", "Amount to increment by", "1" } )\n\n    basicSubComponentIncrement(ComponentId_t id, Params& params);\n    ~basicSubComponentIncrement();\n\n    // Implement the API functions\n    int compute( int num) override;\n    std::string compute( std::string comp ) override;\n\nprivate:\n    int amount;\n};\n'})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-cpp",metastring:'title="Excerpt from src/sst/elements/simpleElementExample/basicSubComponent_subcomponent.h"',children:'#include <sst_config.h>\n#include <basicSubComponent_subcomponent.h>\n\nbasicSubComponentIncrement::basicSubComponentIncrement(ComponentId_t id, Params& params) :\n    basicSubComponentAPI(id, params) \n{\n    amount = params.find<int>("amount",  1);\n}\n\nbasicSubComponentIncrement::~basicSubComponentIncrement() { }\n\nint basicSubComponentIncrement::compute( int num )\n{\n    return num + amount;\n}\n\nstd::string basicSubComponentIncrement::compute ( std::string comp )\n{\n    return "(" + comp + ")" + " + " + std::to_string(amount);\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"header",children:"Header"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-cpp",children:"#include <sst/core/subcomponent.h>\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>i,a:()=>c});var o=t(67294);const s={},a=o.createContext(s);function c(n){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),o.createElement(a.Provider,{value:e},n.children)}}}]);