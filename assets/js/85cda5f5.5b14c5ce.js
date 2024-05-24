"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7758],{67413:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=s(74848),t=s(28453);const i={title:"Gaussian Distribution"},a=void 0,d={id:"core/rng/gaussian",title:"Gaussian Distribution",description:"This class produces Gaussian or normal distribution with a user-provided mean and standard deviation. Optionally, a random number generator can also be provided for sampling. If a random number generator is not provided, Mersenne will be used.",source:"@site/../docs/core/rng/gaussian.md",sourceDirName:"core/rng",slug:"/core/rng/gaussian",permalink:"/sst-docs/docs/core/rng/gaussian",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/rng/gaussian.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:168452215e4,frontMatter:{title:"Gaussian Distribution"},sidebar:"core",previous:{title:"Exponential Distribution",permalink:"/sst-docs/docs/core/rng/expon"},next:{title:"Poisson Distribution",permalink:"/sst-docs/docs/core/rng/poisson"}},o={},l=[{value:"Constructor",id:"constructor",level:2},{value:"Parameters",id:"parameters",level:4},{value:"getNextDouble",id:"getnextdouble",level:2},{value:"Parameters",id:"parameters-1",level:4},{value:"getMean",id:"getmean",level:2},{value:"Parameters",id:"parameters-2",level:4},{value:"getStandardDev",id:"getstandarddev",level:2},{value:"Parameters",id:"parameters-3",level:4},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["This class produces Gaussian or normal distribution with a user-provided mean and standard deviation. Optionally, a random number generator can also be provided for sampling. If a random number generator is not provided, ",(0,r.jsx)(n.a,{href:"mersenne",children:"Mersenne"})," will be used."]}),"\n",(0,r.jsx)(n.h2,{id:"constructor",children:"Constructor"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"GaussianDistribution(double mn, double sd);\nGaussianDistribution(double mn, double sd, SST::RNG::Random* baseRNG);\n"})}),"\n",(0,r.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"mn"})," (double) The mean of the distribution"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"sd"})," (double) The standard deviation of the distribution"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"baseRNG"})," (SST::RNG::Random*) A random number generator for sampling the distribution"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"getnextdouble",children:"getNextDouble"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"double getNextDouble();\n"})}),"\n",(0,r.jsx)(n.p,{children:"Return the next double in the distribution."}),"\n",(0,r.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"returns"})," (double) The next double in the distribution"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"getmean",children:"getMean"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"double getMean();\n"})}),"\n",(0,r.jsx)(n.p,{children:"Return the mean of the distribution."}),"\n",(0,r.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"returns"})," (double) The mean of the distribution"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"getstandarddev",children:"getStandardDev"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"double getStandardDev();\n"})}),"\n",(0,r.jsx)(n.p,{children:"Return the standard deviation of the distribution."}),"\n",(0,r.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"returns"})," (double) The mean of the distribution"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"SST::RNG::GaussianDistribution* dist = new SST::RNG::GaussianDistribution(22.5, 1.1);\n\ndouble next;\nnext = dist->getNextDouble();\n"})}),"\n",(0,r.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/rng/gaussian.h>\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>d});var r=s(96540);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);