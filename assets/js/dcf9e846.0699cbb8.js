"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2782],{41497:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=r(74848),s=r(28453);const a={title:"Mersenne RNG"},i=void 0,l={id:"core/rng/mersenne",title:"Mersenne RNG",description:'The Mersenne generator provides better "randomness" compared to Marsaglia but is also more computationally intensive. The generator uses just one seed compared to Marsaglia\'s two.',source:"@site/../docs/core/rng/mersenne.md",sourceDirName:"core/rng",slug:"/core/rng/mersenne",permalink:"/sst-docs/docs/core/rng/mersenne",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/rng/mersenne.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1678138197e3,frontMatter:{title:"Mersenne RNG"},sidebar:"core",previous:{title:"Marsaglia RNG",permalink:"/sst-docs/docs/core/rng/marsaglia"},next:{title:"XOR-Shift RNG",permalink:"/sst-docs/docs/core/rng/xorshift"}},d={},c=[{value:"Constructor",id:"constructor",level:2},{value:"Parameters",id:"parameters",level:4},{value:"generateNextInt32",id:"generatenextint32",level:2},{value:"Parameters",id:"parameters-1",level:4},{value:"generateNextInt64",id:"generatenextint64",level:2},{value:"Parameters",id:"parameters-2",level:4},{value:"generateNextUInt32",id:"generatenextuint32",level:2},{value:"Parameters",id:"parameters-3",level:4},{value:"generateNextUInt64",id:"generatenextuint64",level:2},{value:"Parameters",id:"parameters-4",level:4},{value:"nextUniform",id:"nextuniform",level:2},{value:"Parameters",id:"parameters-5",level:4},{value:"seed",id:"seed",level:2},{value:"Parameters",id:"parameters-6",level:4},{value:"Examples",id:"examples",level:2},{value:"Example 1: generateNextInt32()",id:"example-1-generatenextint32",level:3},{value:"Example 2: generateNextUInt32()",id:"example-2-generatenextuint32",level:3},{value:"Example 3: generateNextUInt64()",id:"example-3-generatenextuint64",level:3},{value:"Header",id:"header",level:2}];function x(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:'The Mersenne generator provides better "randomness" compared to Marsaglia but is also more computationally intensive. The generator uses just one seed compared to Marsaglia\'s two.'}),"\n",(0,t.jsx)(n.h2,{id:"constructor",children:"Constructor"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"// #1 - use a random seed based on time-of-day\n// NOTE: this will create variation between runs and between platforms.\nMersenneRNG::MersenneRNG();\n\n// #2 - use explicitly defined seed\nMersenneRNG::MersenneRNG(unsigned int seed);\n"})}),"\n",(0,t.jsx)(n.p,{children:"Create a new Mersenne random number generator."}),"\n",(0,t.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"returns"})," None"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"generatenextint32",children:"generateNextInt32"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"int32_t generateNextInt32();\n"})}),"\n",(0,t.jsx)(n.p,{children:"Generate the next signed 32-bit integer."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"returns"})," (int32_t) The next signed 32-bit integer."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"generatenextint64",children:"generateNextInt64"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"int64_t generateNextInt64();\n"})}),"\n",(0,t.jsx)(n.p,{children:"Generate the next signed 64-bit integer."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"returns"})," (int64_t) The next signed 64-bit integer."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"generatenextuint32",children:"generateNextUInt32"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"uint32_t generateNextUInt32();\n"})}),"\n",(0,t.jsx)(n.p,{children:"Generate the next unsigned 32-bit integer."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"returns"})," (uint32_t) The next unsigned 32-bit integer."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"generatenextuint64",children:"generateNextUInt64"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"uint64_t generateNextUInt64();\n"})}),"\n",(0,t.jsx)(n.p,{children:"Generate the next unsigned 64-bit integer."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"returns"})," (uint64_t) The next unsigned 64-bit integer"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"nextuniform",children:"nextUniform"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"double  nextUniform();\n"})}),"\n",(0,t.jsx)(n.p,{children:"Generate the next double within the range [0,1)."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"returns"})," (double) The next double within the range [0,1)."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"seed",children:"seed"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"void seed(uint64_t newSeed);\n"})}),"\n",(0,t.jsx)(n.p,{children:"Re-seed the random number generator."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"newSeed"})," (uint64_t) A seed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"returns"})," None"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.h3,{id:"example-1-generatenextint32",children:"Example 1: generateNextInt32()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"SST::RNG::MersenneRNG* rng = new SST::RNG::MersenneRNG(11);\n\nint rndNumber;\nrndNumber = (int)(rng->generateNextInt32());\nrndNumber = (rndNumber & 0x0000FFFF) ^ ((rndNumber & 0xFFFF0000) >> 16);\nrndNumber = abs((int)(rndNumber % 3));\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"example-2-generatenextuint32",children:"Example 2: generateNextUInt32()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"SST::RNG::MersenneRNG randomGenerator = new SST::RNG::MersenneRNG(11);\n\nint rndNumber;\nint index = randomGenerator.generateNextUInt32() % (numWays-1);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"example-3-generatenextuint64",children:"Example 3: generateNextUInt64()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"SST::RNG::MersenneRNG rng = new SST::RNG::MersenneRNG(11);\n\nuint64_t selectA = (rng.generateNextUInt64() % pageCount);\nuint64_t selectB = (rng.generateNextUInt64() % pageCount);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/rng/mersenne.h>\n"})})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(96540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);