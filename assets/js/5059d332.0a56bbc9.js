"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5250],{55544:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var t=r(74848),s=r(28453);const o={title:"Uniform Distribution"},i=void 0,d={id:"core/rng/uniform",title:"Uniform Distribution",description:"This class produces a Uniform distribution across a user specified number of outcomes. Optionally, a random number generator can also be provided for sampling. If a random number generator is not provided, Mersenne will be used.",source:"@site/../docs/core/rng/uniform.md",sourceDirName:"core/rng",slug:"/core/rng/uniform",permalink:"/sst-docs/docs/core/rng/uniform",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/rng/uniform.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:169594075e4,frontMatter:{title:"Uniform Distribution"},sidebar:"core",previous:{title:"Poisson Distribution",permalink:"/sst-docs/docs/core/rng/poisson"},next:{title:"SST::Statistic",permalink:"/sst-docs/docs/core/statistics/class"}},l={},a=[{value:"Constructor",id:"constructor",level:2},{value:"Parameters",id:"parameters",level:4},{value:"getNextDouble",id:"getnextdouble",level:2},{value:"Parameters",id:"parameters-1",level:4},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This class produces a Uniform distribution across a user specified number of outcomes. Optionally, a random number generator can also be provided for sampling. If a random number generator is not provided, ",(0,t.jsx)(n.a,{href:"mersenne",children:"Mersenne"})," will be used."]}),"\n",(0,t.jsx)(n.h2,{id:"constructor",children:"Constructor"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"UniformDistribution(const uint32_t probsCount);\nUniformDistribution(const uint32_t probsCount, SST::RNG::Random* baseRNG);\n"})}),"\n",(0,t.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"probsCount"})," (double) The number of possible outcomes in the distribution."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"baseRNG"})," (SST::RNG::Random*) A random number generator for sampling the distribution"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"getnextdouble",children:"getNextDouble"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"double getNextDouble();\n"})}),"\n",(0,t.jsx)(n.p,{children:"Return the next double in the distribution. This is a double converted from the outcome index."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"returns"})," (double) The next double in the distribution"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"SST::RNG::UniformDistribution* dist = new SST::RNG::UniformDistribution(5.0);\n\ndouble next;\nnext = dist->getNextDouble();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/rng/uniform.h>\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>d});var t=r(96540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);