"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5642],{7765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=n(74848),o=n(28453);const r={title:"sst_assert"},i=void 0,c={id:"core/component/output/sst_assert",title:"sst_assert",description:"Availability: Component, SubComponent, ComponentExtension",source:"@site/../docs/core/component/output/sst_assert.md",sourceDirName:"core/component/output",slug:"/core/component/output/sst_assert",permalink:"/sst-docs/docs/core/component/output/sst_assert",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/output/sst_assert.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:169594075e4,frontMatter:{title:"sst_assert"},sidebar:"core",previous:{title:"initiateInteractive",permalink:"/sst-docs/docs/core/component/output/initiateInteractive"},next:{title:"Serialization",permalink:"/sst-docs/docs/category/serialization"}},a={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"void sst_assert(bool condition, uint32_t line, const char* file, const char* func, \n    int exit_code, const char* format, ...) const __attribute__((format(printf, 6, 7)));\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Availability:"})," Component, SubComponent, ComponentExtension"]}),"\n",(0,s.jsxs)(t.p,{children:["Convenience function for testing and reporting fatal error conditions. If the condition holds, ",(0,s.jsx)(t.a,{href:"fatal",children:"fatal()"})," will be called."]}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"condition"})," (bool) Condition on which to call fatal() if false"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"line"})," (uint32_t) Line number of calling function (use CALL_INFO macro)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"file"})," (char*) File name of calling function (use CALL_INFO macro)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"func"})," (char*) Name of function that called fatal (use CALL_INFO macro)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"exit_code"})," (int) Exit code to terminate with. This will be passed to MPI_Abort()."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"format"})," (string) Format string for error message. All valid formats for printf() are available."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"..."})," (Variable) Arguments for format"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"returns"})," None"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'sst_assert(fatal_error_condition, CALL_INFO, -1, "Error, something terrible happened to component %s.\\n", \n    getName().c_str());\n'})}),"\n",(0,s.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var s=n(96540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);