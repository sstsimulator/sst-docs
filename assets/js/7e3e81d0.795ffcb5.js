"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28622],{23703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"core/output/class","title":"SST::Output","description":"SST Output objects can be used for both output and debug. Some functions are only available if the Core is configured with the --enable-debug flag. SST objects may create their own Output objects directly or may use the SSTCore output by calling the API function getSimulationOutput().","source":"@site/../docs/core/output/class.md","sourceDirName":"core/output","slug":"/core/output/class","permalink":"/sst-docs/docs/core/output/class","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/output/class.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1695940750000,"frontMatter":{"title":"SST::Output"},"sidebar":"core","previous":{"title":"getId","permalink":"/sst-docs/docs/core/link/getId"},"next":{"title":"constructor","permalink":"/sst-docs/docs/core/output/constructor"}}');var s=n(74848),i=n(28453);const r={title:"SST::Output"},c=void 0,l={},u=[{value:"Output Location",id:"output-location",level:2},{value:"Convenience Macros",id:"convenience-macros",level:2},{value:"Header",id:"header",level:2}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["SST Output objects can be used for both output and debug. Some functions are only available if the Core is configured with the ",(0,s.jsx)(t.code,{children:"--enable-debug"})," flag. SST objects may create their own Output objects directly or may use the SSTCore output by calling the API function ",(0,s.jsx)(t.a,{href:"../component/output/getSimulationOutput",children:(0,s.jsx)(t.code,{children:"getSimulationOutput()"})}),"."]}),"\n",(0,s.jsx)(t.p,{children:"SST Output objects have four major attributes:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Location"})," A location that the output prints to (e.g., stdout or to a file)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Prefix"})," A prefix string that is prepended to output before it is printed"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Verbose Level"})," A level that filters out calls to output where the message level is greater than the verbose level"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Verbose Mask"})," A bit mask that filters out calls to output where the bits set in the message's mask are not all set in the verbose mask"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The verbose level and mask are provided to enable finer-grain control of output. The advantage of using SST output is both the control it grants over what gets printed and also that it prevents interleaving of strings when multiple threads write to output simultaneously."}),"\n",(0,s.jsx)(t.h2,{id:"output-location",children:"Output Location"}),"\n",(0,s.jsxs)(t.p,{children:["SST Output location is controlled by a variable of type ",(0,s.jsx)(t.code,{children:"output_location_t"})," which can be set to the following values:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Output::STDOUT"})," print to stdout"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Output::STDERR"})," print to stderr"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Output::FILE"})," print to a file"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Output::NONE"})," do not print"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"convenience-macros",children:"Convenience Macros"}),"\n",(0,s.jsx)(t.p,{children:"Several output functions take arguments identifying the calling location. To simplify passing these, the Output class provides the following macros:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"CALL_INFO"})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"CALL_INFO_LONG"}),"\nThe definition of these macros is:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"#define CALL_INFO __LINE__, __FILE__, __FUNCTION__\n\n#if defined(__GNUC__) || defined(__clang__)\n#define CALL_INFO_LONG __LINE__, __FILE__, __PRETTY_FUNCTION__\n#else\n#define CALL_INFO_LONG __LINE__, __FILE__, __FUNCTION__\n#endif\n"})}),"\n",(0,s.jsx)(t.admonition,{title:"Speed Check",type:"tip",children:(0,s.jsxs)(t.p,{children:["Frequent use of output (whether SST::Output, printf, or cout) can slow down simulation. Using if statements to limit calls to output during performance-critical sections of simulation or even using ",(0,s.jsx)(t.code,{children:"#ifdef"})," constructs to compile out debug output can have a noticeable impact on simulation performance for long-running simulations."]})}),"\n",(0,s.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/output.h>\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var o=n(96540);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);