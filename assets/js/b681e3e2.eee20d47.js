"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,c=m["".concat(u,".").concat(g)]||m[g]||d[g]||l;return n?a.createElement(c,i(i({ref:t},o),{},{components:n})):a.createElement(c,i({ref:t},o))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],s={id:"MarsagliaRNG",title:"MarsagliaRNG"},u=void 0,p={unversionedId:"cpp/rng/MarsagliaRNG",id:"cpp/rng/MarsagliaRNG",title:"MarsagliaRNG",description:"Fully Qualified Name",source:"@site/../docs/cpp/rng/MarsagliaRNG.md",sourceDirName:"cpp/rng",slug:"/cpp/rng/MarsagliaRNG",permalink:"/sst-website/docs/cpp/rng/MarsagliaRNG",draft:!1,editUrl:"https://github.com/sstsimulator/sst-website/edit/master/docs/../docs/cpp/rng/MarsagliaRNG.md",tags:[],version:"current",lastUpdatedBy:"Nick Fleischmann",lastUpdatedAt:1540350786,formattedLastUpdatedAt:"Oct 24, 2018",frontMatter:{id:"MarsagliaRNG",title:"MarsagliaRNG"},sidebar:"C++",previous:{title:"verbose()",permalink:"/sst-website/docs/cpp/output/verbose"},next:{title:"addData()",permalink:"/sst-website/docs/cpp/statistics/addData"}},o={},d=[{value:"Fully Qualified Name",id:"fully-qualified-name",level:2},{value:"Remarks",id:"remarks",level:3},{value:"Requirements",id:"requirements",level:2},{value:"Functions",id:"functions",level:2},{value:"Constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Return Value",id:"return-value",level:4},{value:"generateNextInt32()",id:"generatenextint32",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Return Value",id:"return-value-1",level:4},{value:"generateNextInt64()",id:"generatenextint64",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Return Value",id:"return-value-2",level:4},{value:"generateNextUInt32()",id:"generatenextuint32",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Return Value",id:"return-value-3",level:4},{value:"generateNextUInt64()",id:"generatenextuint64",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Return Value",id:"return-value-4",level:4},{value:"nextUniform()",id:"nextuniform",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Return Value",id:"return-value-5",level:4},{value:"restart()",id:"restart",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Return Value",id:"return-value-6",level:4},{value:"Examples",id:"examples",level:2},{value:"Example 1: generateNextInt32()",id:"example-1-generatenextint32",level:3},{value:"Example 2: generateNextUInt32()",id:"example-2-generatenextuint32",level:3},{value:"Example 3: generateNextUInt64()",id:"example-3-generatenextuint64",level:3}],m={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"fully-qualified-name"},"Fully Qualified Name"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"SST::RNG::MarsagliaRNG\n")),(0,l.kt)("h3",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"Implements a random number generator using the Marsaglia method."),(0,l.kt)("p",null,"This method is computationally cheap and provides a reasonable distribution of random numbers. If you need additional strength in the random numbers, you may want to consider the Mersenne RNG."),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/rng/marsaglia.h>\n")),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"constructor"},"Constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// #1 - random seeds, NOTE: this will create variation between runs and between platforms.\nMarsagliaRNG::MarsagliaRNG()\n\n// #2 - using defined seeds.\nMarsagliaRNG::MarsagliaRNG(unsigned int initial_z, unsigned int initial_w )\n")),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"initial_z")," - One of two seeds. Using the same seeds will result in the same series of numbers being produced. Change one or both seeds to change the series of numbers."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"initial_w")," - One of two seeds. Using the same seeds will result in the same series of numbers being produced. Change one or both seeds to change the series of numbers."),(0,l.kt)("h4",{id:"return-value"},"Return Value"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"None")),(0,l.kt)("h3",{id:"generatenextint32"},"generateNextInt32()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"int32_t generateNextInt32()\n")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"None")),(0,l.kt)("h4",{id:"return-value-1"},"Return Value"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"int32_t")," - The next signed 32-bit integer."),(0,l.kt)("h3",{id:"generatenextint64"},"generateNextInt64()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"int64_t generateNextInt64()\n")),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"None")),(0,l.kt)("h4",{id:"return-value-2"},"Return Value"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"int64_t")," - The next signed 64-bit integer."),(0,l.kt)("h3",{id:"generatenextuint32"},"generateNextUInt32()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"uint32_t generateNextUInt32()\n")),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"None")),(0,l.kt)("h4",{id:"return-value-3"},"Return Value"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"uint32_t")," - The next unsigned 32-bit integer."),(0,l.kt)("h3",{id:"generatenextuint64"},"generateNextUInt64()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"uint64_t generateNextUInt64()\n")),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"None")),(0,l.kt)("h4",{id:"return-value-4"},"Return Value"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"uint64_t")," - The next unsigned 64-bit integer."),(0,l.kt)("h3",{id:"nextuniform"},"nextUniform()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"double  nextUniform()\n")),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"None")),(0,l.kt)("h4",{id:"return-value-5"},"Return Value"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"double")," - The next double within the range 0 to 1."),(0,l.kt)("h3",{id:"restart"},"restart()"),(0,l.kt)("p",null,"Restart the random number generator with new seeds."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"void restart(unsigned int new_z, unsigned int new_w)\n")),(0,l.kt)("h4",{id:"parameters-6"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"new_z")," - One of two seeds. Using the same seeds will result in the same series of numbers being produced. Change one or both seeds to change the series of numbers."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"new_w")," - One of two seeds. Using the same seeds will result in the same series of numbers being produced. Change one or both seeds to change the series of numbers."),(0,l.kt)("h4",{id:"return-value-6"},"Return Value"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"None")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"example-1-generatenextint32"},"Example 1: generateNextInt32()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"SST::RNG::MarsagliaRNG* rng = new SST::RNG::MarsagliaRNG(11, RandomSeed);\n\nint rndNumber;\nrndNumber = (int)(rng->generateNextInt32());\nrndNumber = (rndNumber & 0x0000FFFF) ^ ((rndNumber & 0xFFFF0000) >> 16);\nrndNumber = abs((int)(rndNumber % 3));\n\n")),(0,l.kt)("h3",{id:"example-2-generatenextuint32"},"Example 2: generateNextUInt32()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"SST::RNG::MarsagliaRNG randomGenerator = new SST::RNG::MarsagliaRNG(11, RandomSeed);\n\nint rndNumber;\nint index = randomGenerator.generateNextUInt32() % (numWays-1);\n")),(0,l.kt)("h3",{id:"example-3-generatenextuint64"},"Example 3: generateNextUInt64()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"SST::RNG::MarsagliaRNG rng = new SST::RNG::MarsagliaRNG(11, 201010101);\n\nuint64_t selectA = (rng.generateNextUInt64() % pageCount);\nuint64_t selectB = (rng.generateNextUInt64() % pageCount);\n")))}g.isMDXComponent=!0}}]);