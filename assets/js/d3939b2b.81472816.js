"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8059],{13664:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var n=s(85893),i=s(11151);const r={title:"init"},o=void 0,l={id:"core/output/init",title:"init",description:"Initialize an Output object. This function is required if the default constructor was used to create the Output object.",source:"@site/../docs/core/output/init.md",sourceDirName:"core/output",slug:"/core/output/init",permalink:"/sst-docs/docs/core/output/init",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/output/init.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"init"},sidebar:"core",previous:{title:"destructor",permalink:"/sst-docs/docs/core/output/destructor"},next:{title:"fatal",permalink:"/sst-docs/docs/core/output/fatal"}},c={},a=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:'void init(const std::string& prefix, uint32_t verbose_level, uint32_t verbose_mask, \n        output_location_t location, const std::string& localoutputfilename = "");\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Initialize an Output object. This function is required if the default ",(0,n.jsx)(t.a,{href:"constructor",children:"constructor"})," was used to create the Output object."]}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"prefix"})," (std::string) Prefix to be prepended to all strings emitted by calls to ",(0,n.jsx)(t.a,{href:"debug",children:(0,n.jsx)(t.code,{children:"debug()"})}),", ",(0,n.jsx)(t.a,{href:"verbose",children:(0,n.jsx)(t.code,{children:"verbose()"})}),", ",(0,n.jsx)(t.a,{href:"fatal",children:(0,n.jsx)(t.code,{children:"fatal()"})})," and ",(0,n.jsx)(t.a,{href:"../output",children:(0,n.jsx)(t.code,{children:"output()"})})," (depends on which variant of ",(0,n.jsx)(t.code,{children:"output()"})," is used). No space will be inserted between the prepended prefix string and the normal output string. The following escape codes may be used in prefixes:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"\\@f"})," Name of the file in which output call was made."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"\\@l"})," Line number in the file in which output call was made."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"\\@p"})," Name of the function from which output call was made."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"\\@r"})," MPI rank of the calling process.  Will be empty if MPI_COMM_WORLD size is 1."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"\\@R"})," MPI rank of the calling process.  Will be 0 if MPI_COMM_WORLD size is 1."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"\\@i"})," Thread Id of the calling process.  Will be empty if number of threads is 1."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"\\@I"})," Thread Id of the calling process.  Will be 0 if number of threads is 1."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"\\@x"})," Rank information of the calling process.  Will be empty if number of MPI ranks and number of threads are both 1. Same as [",(0,n.jsx)(t.code,{children:"\\@r:\\@i"}),"]"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"\\@X"})," Rank information of the calling process.  Will be [0.0] if number of MPI ranks and number of threads are both 1. Same as [",(0,n.jsx)(t.code,{children:"\\@R:\\@I"}),"]"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"\\@t"})," Simulation time.  Will be the raw simulation cycle time."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"verbose_level"})," (uint32_t) Debugging output level. Calls to debug() and verbose() are only output if their output_level parameter is less than or equal to the verbose_level currently set for the object."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"verbose_mask"})," (uint32_t) Bitmask of allowed message types for debug() and verbose(). The Output object will only output the message if the set bits of the output_bits parameter are set in the verbose_mask of the object. It uses this logic: if (",(0,n.jsx)(t.code,{children:"~verbose_mask & output_bits == 0"}),") then output is enabled."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"location"}),"  (output_location_t) Output location. Output can be directed to STDOUT, STDERR, FILE, or NONE.  If FILE output is selected, the output will be directed to the file defined by the --debug-file runtime parameter, or to the file 'sst_output' if the --debug-file parameter is not defined.  If the size of MPI_COMM_WORLD is > 1, then the rank process will be appended to the file name."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"localoutputfilename"})," (std::string) If not an empty string and the location parameter is set to FILE, send the output of this object to this file instead of SST's default file. If the size of MPI_COMM_WORLD is > 1, then the rank process will be appended to the file name."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"returns"})," An SST::Output object"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:'// Use default constructor\n// Initialize with a prefix of "CPU "\nSST::Output* out1 = new Output();\n\nout1->init("CPU ", 4, 0, Output::STDERR);\n'})}),"\n",(0,n.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/output.h>\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>o});var n=s(67294);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);