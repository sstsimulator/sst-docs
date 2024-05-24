"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6710],{48503:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=o(74848),r=o(28453);const s={title:"loadModule"},a=void 0,l={id:"core/component/load/loadModule",title:"loadModule",description:"Availability: Component, SubComponent, ComponentExtension",source:"@site/../docs/core/component/load/loadModule.md",sourceDirName:"core/component/load",slug:"/core/component/load/loadModule",permalink:"/sst-docs/docs/core/component/load/loadModule",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/load/loadModule.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:169594075e4,frontMatter:{title:"loadModule"},sidebar:"core",previous:{title:"loadComponentExtension",permalink:"/sst-docs/docs/core/component/load/loadComponentExtension"},next:{title:"registerProfilePoint",permalink:"/sst-docs/docs/core/component/load/registerProfilePoint"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function i(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"template <class T, class... ARGS>\nT* loadModule(const std::string& type, Params& params, ARGS... args);\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Availability:"})," Component, SubComponent, ComponentExtension"]}),"\n",(0,t.jsx)(n.p,{children:"Load an SST Module."}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"type"})," (string) Module type"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"params"})," (Params) Set of parameters to pass to the module's constructor"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"args"})," (ARGS) Additional module-specific arguments for the module's constructor"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"returns"})," (bool) A pointer to the newly-created module"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/ariel/arielcore.cc"',children:'ArielCore::ArielCore(ComponentId_t id, Params& params) : Component(id) {\n    /** Configuration here */\n\n    std::string traceGenName = params.find<std::string>("tracegen", "");\n    enableTrace = ("" != traceGenName);\n\n    if (enableTracing) {\n        Params interfaceParams = params.get_scoped_params("tracer");\n        //highlight-next-line\n        traceGen = loadModule<ArielTraceGenerator>(traceGenName, interfaceParams);\n\n        sst_assert(traceGen, CALL_INFO, -1, "Unable to load tracing module: \\"%s\\"\\n", traceGenName.c_str());\n\n    /** Rest of configuration here */\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>l});var t=o(96540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);