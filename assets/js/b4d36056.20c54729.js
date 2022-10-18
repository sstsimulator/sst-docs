"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},l=Object.keys(e);for(s=0;s<l.length;s++)n=l[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)n=l[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=s.createContext({}),c=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return s.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},f=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),f=c(n),u=a,d=f["".concat(i,".").concat(u)]||f[u]||m[u]||l;return n?s.createElement(d,o(o({ref:t},p),{},{components:n})):s.createElement(d,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var c=2;c<l;c++)o[c]=n[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var s=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],r={id:"sst-config",title:"sst-config"},i=void 0,c={unversionedId:"tools/commandLine/sst-config",id:"tools/commandLine/sst-config",title:"sst-config",description:"Remarks",source:"@site/../docs/tools/commandLine/sst-config.md",sourceDirName:"tools/commandLine",slug:"/tools/commandLine/sst-config",permalink:"/sst-website/docs/tools/commandLine/sst-config",draft:!1,editUrl:"https://github.com/sstsimulator/sst-website/edit/master/docs/../docs/tools/commandLine/sst-config.md",tags:[],version:"current",lastUpdatedBy:"Ryan Ledbetter",lastUpdatedAt:1537293231,formattedLastUpdatedAt:"Sep 18, 2018",frontMatter:{id:"sst-config",title:"sst-config"},sidebar:"Tools",previous:{title:"Help Us",permalink:"/sst-website/docs/tools/helpUs"},next:{title:"sst-info",permalink:"/sst-website/docs/tools/commandLine/sst-info"}},p={},m=[{value:"Remarks",id:"remarks",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"All config values",id:"all-config-values",level:3},{value:"C++ compiler",id:"c-compiler",level:3},{value:"C++ compiler flags",id:"c-compiler-flags",level:3},{value:"C++ LD flags",id:"c-ld-flags",level:3},{value:"In a makefile",id:"in-a-makefile",level:3},{value:"See Also",id:"see-also",level:2}],f={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,s.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"The command line utility, sst-config, retrieves information on how the SST Core was compiled. "),(0,l.kt)("p",null,"Most often it is used when compiling elements. It is called in the makefile to get the correct compiler and flags to use."),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sst-config\nsst-config --<KEY>\nsst-config <GROUP> <KEY>\n\n<GROUP>    Name of group to which the key belongs\n           (e.g. DRAMSim group contains all DRAMSim\n           KEY=VALUE settings).\n<KEY>      Name of the setting key to find.\n           If <GROUP> not specified this is found in\n           the 'SSTCore' default group.\n\n")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"all-config-values"},"All config values"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sst-config\n")),(0,l.kt)("h3",{id:"c-compiler"},"C++ compiler"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sst-config --CXX\n")),(0,l.kt)("h3",{id:"c-compiler-flags"},"C++ compiler flags"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sst-config --ELEMENT_CXXFLAGS\n")),(0,l.kt)("h3",{id:"c-ld-flags"},"C++ LD flags"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sst-config --ELEMENT_LDFLAGS\n")),(0,l.kt)("h3",{id:"in-a-makefile"},"In a makefile"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-makefile"},"CXX=$(shell sst-config --CXX)\nCXXFLAGS=$(shell sst-config --ELEMENT_CXXFLAGS)\nLDFLAGS=$(shell sst-config --ELEMENT_LDFLAGS)\n")),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/sst-website/docs/guides/files/basics_makefile"},"Basics: Makefile"))))}u.isMDXComponent=!0}}]);