"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44719],{777:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"core/rng/marsaglia","title":"Marsaglia RNG","description":"The Marsaglia generator uses the Marsaglia method to generate a reasonable distribution of random numbers with low computational cost. Marsaglia generators use two random seeds, z and w.","source":"@site/../docs/core/rng/marsaglia.md","sourceDirName":"core/rng","slug":"/core/rng/marsaglia","permalink":"/sst-docs/docs/core/rng/marsaglia","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/rng/marsaglia.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1678138197000,"frontMatter":{"title":"Marsaglia RNG"},"sidebar":"core","previous":{"title":"SST::Random","permalink":"/sst-docs/docs/core/rng/"},"next":{"title":"Mersenne RNG","permalink":"/sst-docs/docs/core/rng/mersenne"}}');var a=r(74848),s=r(28453);const i={title:"Marsaglia RNG"},l=void 0,d={},c=[{value:"Constructor",id:"constructor",level:2},{value:"Parameters",id:"parameters",level:4},{value:"generateNextInt32",id:"generatenextint32",level:2},{value:"Parameters",id:"parameters-1",level:4},{value:"generateNextInt64",id:"generatenextint64",level:2},{value:"Parameters",id:"parameters-2",level:4},{value:"generateNextUInt32",id:"generatenextuint32",level:2},{value:"Parameters",id:"parameters-3",level:4},{value:"generateNextUInt64",id:"generatenextuint64",level:2},{value:"Parameters",id:"parameters-4",level:4},{value:"nextUniform",id:"nextuniform",level:2},{value:"Parameters",id:"parameters-5",level:4},{value:"restart",id:"restart",level:2},{value:"Parameters",id:"parameters-6",level:4},{value:"Examples",id:"examples",level:2},{value:"Example 1: generateNextInt32()",id:"example-1-generatenextint32",level:3},{value:"Example 2: generateNextUInt32()",id:"example-2-generatenextuint32",level:3},{value:"Example 3: generateNextUInt64()",id:"example-3-generatenextuint64",level:3},{value:"Header",id:"header",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["The Marsaglia generator uses the Marsaglia method to generate a reasonable distribution of random numbers with low computational cost. Marsaglia generators use two random seeds, ",(0,a.jsx)(n.code,{children:"z"})," and ",(0,a.jsx)(n.code,{children:"w"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["For more information on this algorithm, see the ",(0,a.jsx)(n.a,{href:"http://en.wikipedia.org/wiki/Multiply-with-carry",children:"Multiply-with-carry Random Number Generator"})," article at Wikipedia."]}),"\n",(0,a.jsx)(n.h2,{id:"constructor",children:"Constructor"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// #1 - use random seeds based on time-of-day\n// NOTE: this will create variation between runs and between platforms.\nMarsagliaRNG::MarsagliaRNG();\n\n// #2 - use explicitly defined seeds\nMarsagliaRNG::MarsagliaRNG(unsigned int initial_z, unsigned int initial_w );\n"})}),"\n",(0,a.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"initial_z"})," (unsigned int) One of two seeds."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"initial_w"})," (unsigned int) One of two seeds."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"returns"})," None"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"generatenextint32",children:"generateNextInt32"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"int32_t generateNextInt32();\n"})}),"\n",(0,a.jsx)(n.p,{children:"Generate the next signed 32-bit integer."}),"\n",(0,a.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"returns"})," (int32_t) The next signed 32-bit integer."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"generatenextint64",children:"generateNextInt64"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"int64_t generateNextInt64();\n"})}),"\n",(0,a.jsx)(n.p,{children:"Generate the next signed 64-bit integer."}),"\n",(0,a.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"returns"})," (int64_t) The next signed 64-bit integer."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"generatenextuint32",children:"generateNextUInt32"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"uint32_t generateNextUInt32();\n"})}),"\n",(0,a.jsx)(n.p,{children:"Generate the next unsigned 32-bit integer."}),"\n",(0,a.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"returns"})," (uint32_t) The next unsigned 32-bit integer."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"generatenextuint64",children:"generateNextUInt64"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"uint64_t generateNextUInt64();\n"})}),"\n",(0,a.jsx)(n.p,{children:"Generate the next unsigned 64-bit integer."}),"\n",(0,a.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"returns"})," (uint64_t) The next unsigned 64-bit integer"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"nextuniform",children:"nextUniform"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"double  nextUniform();\n"})}),"\n",(0,a.jsx)(n.p,{children:"Generate the next double within the range [0,1)."}),"\n",(0,a.jsx)(n.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"returns"})," (double) The next double within the range [0,1)."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"restart",children:"restart"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"void restart(unsigned int new_z, unsigned int new_w);\n"})}),"\n",(0,a.jsx)(n.p,{children:"Restart the random number generator with new seeds."}),"\n",(0,a.jsx)(n.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"new_z"})," (unsigned int) One of two seeds."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"new_w"})," (unsigned int) One of two seeds."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"returns"})," None"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.h3,{id:"example-1-generatenextint32",children:"Example 1: generateNextInt32()"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"SST::RNG::MarsagliaRNG* rng = new SST::RNG::MarsagliaRNG(11, RandomSeed);\n\nint rndNumber;\nrndNumber = (int)(rng->generateNextInt32());\nrndNumber = (rndNumber & 0x0000FFFF) ^ ((rndNumber & 0xFFFF0000) >> 16);\nrndNumber = abs((int)(rndNumber % 3));\n\n"})}),"\n",(0,a.jsx)(n.h3,{id:"example-2-generatenextuint32",children:"Example 2: generateNextUInt32()"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"SST::RNG::MarsagliaRNG randomGenerator = new SST::RNG::MarsagliaRNG(11, RandomSeed);\n\nint rndNumber;\nint index = randomGenerator.generateNextUInt32() % (numWays-1);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"example-3-generatenextuint64",children:"Example 3: generateNextUInt64()"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"SST::RNG::MarsagliaRNG rng = new SST::RNG::MarsagliaRNG(11, 201010101);\n\nuint64_t selectA = (rng.generateNextUInt64() % pageCount);\nuint64_t selectB = (rng.generateNextUInt64() % pageCount);\n"})}),"\n",(0,a.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/rng/marsaglia.h>\n"})})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(96540);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);