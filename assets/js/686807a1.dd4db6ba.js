"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5658],{53250:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=s(85893),r=s(11151);const i={title:"debugPrefix"},o=void 0,c={id:"core/output/debugPrefix",title:"debugPrefix",description:"This function is the same as debug() except that instead of prepending the Output's prefix, it prepends the provided prefix.",source:"@site/../docs/core/output/debugPrefix.md",sourceDirName:"core/output",slug:"/core/output/debugPrefix",permalink:"/sst-docs/docs/core/output/debugPrefix",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/output/debugPrefix.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1695940750,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"debugPrefix"},sidebar:"core",previous:{title:"debug",permalink:"/sst-docs/docs/core/output/debug"},next:{title:"flush",permalink:"/sst-docs/docs/core/output/flush"}},u={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"void debugPrefix(const char* tempPrefix, uint32_t line, const char* file, const char* func, uint32_t output_level, uint32_t output_bits, const char* format, ...) const;\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This function is the same as ",(0,n.jsx)(t.a,{href:"debug",children:(0,n.jsx)(t.code,{children:"debug()"})})," except that instead of prepending the Output's prefix, it prepends the provided prefix."]}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"tempPrefix"})," (const char*) Prefix to prepend message with instead of the Output's configured one"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"line"})," (uint32_t) Line number of calling function (use CALL_INFO macro)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"file"})," (const char*) File name of calling function (use CALL_INFO macro)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"func"})," (const char*) Name of calling function (use CALL_INFO macro)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"output_level"})," (uint32_t) For output to occur, output_level must be less than or equal to the Output's verbose_level"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"output_bits"})," (uint32_t) For output to occur, all bits set in this parameter must also be set in the Output's verbose_mask. It uses this logic: if (",(0,n.jsx)(t.code,{children:"~verbose_mask & output_bits == 0"}),"), then output is enabled."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"format"})," (const char*) Format string. All valid formats for printf are available"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"..."})," (variable) Arguments for format string"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:'schedout.debugPrefix("DEBUG_1", CALL_INFO, 1, 0, "Initializing MBSAllocator:");\n'})}),"\n",(0,n.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/output.h>\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>o});var n=s(67294);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);