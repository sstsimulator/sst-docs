"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2163],{18300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=n(74848),r=n(28453);const s={title:"fatal"},a=void 0,c={id:"core/component/output/fatal",title:"fatal",description:"Availability: Component, SubComponent, ComponentExtension",source:"@site/../docs/core/component/output/fatal.md",sourceDirName:"core/component/output",slug:"/core/component/output/fatal",permalink:"/sst-docs/docs/core/component/output/fatal",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/output/fatal.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:169594075e4,frontMatter:{title:"fatal"},sidebar:"core",previous:{title:"Output",permalink:"/sst-docs/docs/category/output"},next:{title:"sst_assert",permalink:"/sst-docs/docs/core/component/output/sst_assert"}},i={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const t={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cpp",children:"void fatal(uint32_t line, const char* file, const char* func, int exit_code, const char* format, ...) const __attribute__((format(printf, 6, 7)));\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"Availability:"})," Component, SubComponent, ComponentExtension"]}),"\n",(0,o.jsx)(t.p,{children:"Convenience function for reporting fatal error conditions. The function creates a new Output() object\nand calls fatal() using the supplied parameters. Before calling fatal(), the function will also print information\nabout the (sub)component that called fatal as well as general simulation state."}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"line"})," (uint32_t) Line number of calling function (use CALL_INFO macro)"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"file"})," (char*) File name of calling function (use CALL_INFO macro)"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"func"})," (char*) Name of function that called fatal (use CALL_INFO macro)"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"exit_code"})," (int) Exit code to terminate with. This will be passed to MPI_Abort()."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"format"})," (string) Format string for error message. All valid formats for printf() are available."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"..."})," (Variable) Arguments for format"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"returns"})," None"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cpp",children:'if (fatal_error_condition)\n    fatal(CALL_INFO, -1, "Error, something terrible happened to component %s.\\n", getName().c_str());\n'})}),"\n",(0,o.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var o=n(96540);const r={},s=o.createContext(r);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);