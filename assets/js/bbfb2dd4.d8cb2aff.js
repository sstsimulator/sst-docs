"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6355],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?o.createElement(h,s(s({ref:t},p),{},{components:n})):o.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),s=["components"],i={title:"SST::ComponentExtension"},c=void 0,l={unversionedId:"core/component/componentext/class",id:"core/component/componentext/class",title:"SST::ComponentExtension",description:"A ComponentExtension is a class that shares ELI with a Component. It can be useful when it is convienent to divide a Component class into separate classes but the additional classes do not need to be dynamically loadable or otherwise available to SST users. A ComponentExtension has access to the SST simulation via the Component it is loaded into. In parallel simulations, a ComponentExtension is always co-located with its Component.",source:"@site/../docs/core/component/componentext/class.md",sourceDirName:"core/component/componentext",slug:"/core/component/componentext/class",permalink:"/sst-website/docs/core/component/componentext/class",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/component/componentext/class.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"SST::ComponentExtension"},sidebar:"Core API",previous:{title:"SubComponent destructor",permalink:"/sst-website/docs/core/component/subcomponent/destructor"},next:{title:"constructor",permalink:"/sst-website/docs/core/component/componentext/constructor"}},p={},d=[{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}],m={toc:d},u="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)(u,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ComponentExtension is a class that shares ELI with a Component. It can be useful when it is convienent to divide a Component class into separate classes but the additional classes do not need to be dynamically loadable or otherwise available to SST users. A ComponentExtension has access to the SST simulation via the Component it is loaded into. In parallel simulations, a ComponentExtension is always co-located with its Component."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'/* Source: memHierarchy/mshr.h */\n\n#include <sst/core/componentextension.h>\n\n/* The MSHR is really just a buffer that a cache uses but it is useful to be able to access\n * some of the simulation time functions available to components. We could make this a subcomponent \n * but it doesn\'t need to be available to users to swap dynamically. \n */\nclass MSHR : public SST::ComponentExtension\n{\npublic:\n    // No ELI needed\n\n    // id is passed automatically by SST when loaded, the rest of the args are provided by the Component \n    // that loads this extension\n    MSHR(ComponentId_t id, Output* dbg, int maxSize, std::string cacheName, std::set<Addr> debugAddr);\n    virtual ~MSHR() {}\n\n    int getMaxSize();\n    int getSize();\n\n    /* Rest of class here */\n\n};\n\n/* Source: memHierarchy/mshr.cc */\n#include <sst_config.h>\n#include "mshr.h"\n\nMSHR::MSHR(ComponentId_t id, Output* debug, int maxSize, string cacheName, std::set<Addr> debugAddr) :\n    ComponentExtension(id)\n{\n    /* Constructor here */\n}\n\n/* Rest of functions defined here */\n\n')),(0,a.kt)("h2",{id:"header"},"Header"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/componentExtension.h>\n")))}h.isMDXComponent=!0}}]);