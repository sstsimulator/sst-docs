"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[249],{54570:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=r(74848),s=r(28453);const i={title:"Exponential Distribution"},a=void 0,o={id:"core/rng/expon",title:"Exponential Distribution",description:"This class produces an exponential distribution with a user-provided rate parameter, or lambda. Optionally, a random number generator can also be provided for sampling. If a random number generator is not provided, Mersenne will be used.",source:"@site/../docs/core/rng/expon.md",sourceDirName:"core/rng",slug:"/core/rng/expon",permalink:"/sst-docs/docs/core/rng/expon",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/rng/expon.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:168452215e4,frontMatter:{title:"Exponential Distribution"},sidebar:"core",previous:{title:"Discrete Distribution",permalink:"/sst-docs/docs/core/rng/discrete"},next:{title:"Gaussian Distribution",permalink:"/sst-docs/docs/core/rng/gaussian"}},l={},d=[{value:"Constructor",id:"constructor",level:2},{value:"Parameters",id:"parameters",level:4},{value:"getNextDouble",id:"getnextdouble",level:2},{value:"Parameters",id:"parameters-1",level:4},{value:"getLambda",id:"getlambda",level:2},{value:"Parameters",id:"parameters-2",level:4},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This class produces an exponential distribution with a user-provided rate parameter, or lambda. Optionally, a random number generator can also be provided for sampling. If a random number generator is not provided, ",(0,t.jsx)(n.a,{href:"mersenne",children:"Mersenne"})," will be used."]}),"\n",(0,t.jsx)(n.h2,{id:"constructor",children:"Constructor"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"ExponentialDistribution(const double mn);\nExponentialDistribution(const double mn, SST::RNG::Random* baseRNG);\n"})}),"\n",(0,t.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"mn"})," (double) The lambda value to use in generating the distribution"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"baseRNG"})," (SST::RNG::Random*) A random number generator for sampling the distribution"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"getnextdouble",children:"getNextDouble"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"double getNextDouble();\n"})}),"\n",(0,t.jsx)(n.p,{children:"Return the next double in the distribution."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"returns"})," (double) The next double in the distribution"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"getlambda",children:"getLambda"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"double getMean();\n"})}),"\n",(0,t.jsx)(n.p,{children:"Return the lambda with which the distribution was created."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"returns"})," (double) The distribution's lambda value"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"SST::RNG::ExponentialDistribution* dist = new SST::RNG::ExponentialDistribution(1.5);\n\ndouble next;\nnext = dist->getNextDouble();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/rng/expon.h>\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var t=r(96540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);