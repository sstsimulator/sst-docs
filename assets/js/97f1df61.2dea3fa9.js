"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"SST_ELI_CATEGORY_INFO",sidebar_label:"Component Categories"},i=void 0,s={unversionedId:"core/eli/other/sst_eli_category_info",id:"core/eli/other/sst_eli_category_info",title:"SST_ELI_CATEGORY_INFO",description:"Component categories are a set of common categories that architectural components fall in. Each component must have a category assigned in SSTELIREGISTERCOMPONENT. These categories are used to help document components and are displayed when running sst-info. The available categories are shown above.",source:"@site/../docs/core/eli/other/sst_eli_category_info.md",sourceDirName:"core/eli/other",slug:"/core/eli/other/sst_eli_category_info",permalink:"/sst-docs/docs/core/eli/other/sst_eli_category_info",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/eli/other/sst_eli_category_info.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"SST_ELI_CATEGORY_INFO",sidebar_label:"Component Categories"},sidebar:"core",previous:{title:"Other",permalink:"/sst-docs/docs/category/other"},next:{title:"Versioning",permalink:"/sst-docs/docs/core/eli/other/sst_eli_element_version"}},c={},l=[{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}],p={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#define COMPONENT_CATEGORY_UNCATEGORIZED    0x00\n#define COMPONENT_CATEGORY_PROCESSOR        0x01\n#define COMPONENT_CATEGORY_MEMORY           0x02\n#define COMPONENT_CATEGORY_NETWORK          0x04\n#define COMPONENT_CATEGORY_SYSTEM           0x08\n")),(0,o.kt)("p",null,"Component categories are a set of common categories that architectural components fall in. Each component must have a category assigned in ",(0,o.kt)("a",{parentName:"p",href:"../register/sst_eli_register_component"},(0,o.kt)("inlineCode",{parentName:"a"},"SST_ELI_REGISTER_COMPONENT")),". These categories are used to help document components and are displayed when running ",(0,o.kt)("inlineCode",{parentName:"p"},"sst-info"),". The available categories are shown above."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'class example1 : public SST::Component\n{\npublic:\n\n    SST_ELI_REGISTER_COMPONENT(\n        example1,                           // Component class\n        "simpleElementExample",             // Component library (for Python/library lookup)\n        "example1",                         // Component name (for Python/library lookup)\n        SST_ELI_ELEMENT_VERSION(1,0,0),     // Version of the component (not related to SST version)\n        "Example #2, statistics & RNG",     // Description\n        COMPONENT_CATEGORY_UNCATEGORIZED    // Category - uncategorized because this is an example, not an architectural component\n    )\n\n/* Rest of class */\n};\n\n')),(0,o.kt)("h2",{id:"header"},"Header"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <src/sst/component.h>\n")))}u.isMDXComponent=!0}}]);