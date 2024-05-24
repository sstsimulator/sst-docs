"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9425],{43625:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(74848),s=t(28453);const i={title:"SST::Random"},a=void 0,l={id:"core/rng/rng",title:"SST::Random",description:"SST includes a few random number generators (RNGs) that can be used by SST objects. These generators produce identical and deterministic output across all platforms and compilers that SST supports. The RNGs have a shared API.",source:"@site/../docs/core/rng/rng.md",sourceDirName:"core/rng",slug:"/core/rng/",permalink:"/sst-docs/docs/core/rng/",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/rng/rng.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:169594075e4,frontMatter:{title:"SST::Random"},sidebar:"core",previous:{title:"print_all_params",permalink:"/sst-docs/docs/core/params/print_all_params"},next:{title:"Marsaglia RNG",permalink:"/sst-docs/docs/core/rng/marsaglia"}},d={},c=[{value:"API",id:"api",level:2},{value:"nextUniform",id:"nextuniform",level:3},{value:"generateNextUInt32",id:"generatenextuint32",level:3},{value:"generateNextUInt64",id:"generatenextuint64",level:3},{value:"generateNextInt32",id:"generatenextint32",level:3},{value:"generateNextInt64",id:"generatenextint64",level:3},{value:"Header",id:"header",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"SST includes a few random number generators (RNGs) that can be used by SST objects. These generators produce identical and deterministic output across all platforms and compilers that SST supports. The RNGs have a shared API."}),"\n",(0,r.jsx)(n.p,{children:"Generators include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Marsaglia"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"SST::RNG::MarsagliaRNG"})}),"\n",(0,r.jsx)(n.li,{children:"An RNG using the Marsaglia method. This is computationally cheap and provides a reasonable distribution of random numbers. The Mersenne RNG is an alternative for a stronger distribution."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Mersenne"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"SST::RNG::MersenneRNG"})}),"\n",(0,r.jsx)(n.li,{children:'A Mersenne-based RNG. This provides better "randomness" compared to Marsaglia but is more computationally expensive.'}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"XOR-Shift"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"SST::RNG::XORShift"})}),"\n",(0,r.jsxs)(n.li,{children:["A lightweight and computationally inexpensive RNG based on xor-shift operations. Implements the algorithm described ",(0,r.jsx)(n.a,{href:"http://en.wikipedia.org/wiki/Xorshift",children:"here"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,r.jsx)(n.p,{children:"Random number generators implement the following API:"}),"\n",(0,r.jsx)(n.h3,{id:"nextuniform",children:"nextUniform"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"virtual double nextUniform();\n"})}),"\n",(0,r.jsx)(n.p,{children:"Return the next random number in the range[0,1)."}),"\n",(0,r.jsx)(n.h3,{id:"generatenextuint32",children:"generateNextUInt32"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"virtual uint32_t generateNextUint32();\n"})}),"\n",(0,r.jsx)(n.p,{children:"Generate the next random number as a 32-bit unsigned integer."}),"\n",(0,r.jsx)(n.h3,{id:"generatenextuint64",children:"generateNextUInt64"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"virtual uint64_t generateNextUint64();\n"})}),"\n",(0,r.jsx)(n.p,{children:"Generate the next random number as a 64-bit unsigned integer."}),"\n",(0,r.jsx)(n.h3,{id:"generatenextint32",children:"generateNextInt32"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"virtual int32_t generateNextInt32();\n"})}),"\n",(0,r.jsx)(n.p,{children:"Generate the next random number as a 32-bit signed integer."}),"\n",(0,r.jsx)(n.h3,{id:"generatenextint64",children:"generateNextInt64"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"virtual int64_t generateNextInt64();\n"})}),"\n",(0,r.jsx)(n.p,{children:"Generate the next random number as a 64-bit signed integer."}),"\n",(0,r.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/rng.h>\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);