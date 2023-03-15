"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6223],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=i,b=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},422:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={title:"SST::RandomDistribution"},l=void 0,u={unversionedId:"core/rng/distrib",id:"core/rng/distrib",title:"SST::RandomDistribution",description:"In addition to random number generators, SST includes several probability distributions. Like the random number generators, these distributions are deterministic and produce the same output across supported compilers and platforms. The distributions use an SST random number generator to produce a sequence of samples.",source:"@site/../docs/core/rng/distrib.md",sourceDirName:"core/rng",slug:"/core/rng/distrib",permalink:"/sst-docs/docs/core/rng/distrib",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/rng/distrib.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1678138197,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{title:"SST::RandomDistribution"},sidebar:"Core API",previous:{title:"XOR-Shift RNG",permalink:"/sst-docs/docs/core/rng/xorshift"},next:{title:"Constant Distribution",permalink:"/sst-docs/docs/core/rng/constant"}},p={},c=[{value:"API",id:"api",level:2},{value:"Header",id:"header",level:2}],d={toc:c},m="wrapper";function b(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In addition to random number generators, SST includes several probability distributions. Like the random number generators, these distributions are deterministic and produce the same output across supported compilers and platforms. The distributions use an SST random number generator to produce a sequence of samples."),(0,a.kt)("p",null,"Distributions include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Constant"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SST::RNG::ConstantDistribution")),(0,a.kt)("li",{parentName:"ul"},"A distribution which always returns a constant value (provided by user). This can be used in situations where the user ma not want to apply a distribution."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Discrete"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SST::RNG::DiscreteDistribution")),(0,a.kt)("li",{parentName:"ul"},"A discrete distribution that produces the same output across supported platforms and compilers."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Exponential"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SST::RNG::ExponentialDistribution")),(0,a.kt)("li",{parentName:"ul"},"An exponential distribution that produces the same output across supported platforms and compilers."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Gaussian"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SST::RNG::GaussianDistribution")),(0,a.kt)("li",{parentName:"ul"},"A Gaussian (normal) distribution that produces the same output across supported platforms and compilers."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Poisson"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SST::RNG::PoissonDistribution")),(0,a.kt)("li",{parentName:"ul"},"A Poisson distribtuion that produces the same output across supported platforms and compilers."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Uniform"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SST::RNG::UniformDistribution")),(0,a.kt)("li",{parentName:"ul"},"A Uniform distribution that produces the same output across supported platforms and compilers.")))),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,"SST distributions implement a function to return the next double in the distribution as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"virtual double getNextDouble();\n")),(0,a.kt)("h2",{id:"header"},"Header"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/distrib.h>\n")))}b.isMDXComponent=!0}}]);