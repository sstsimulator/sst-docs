"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7693],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>d});var o=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function m(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=o.createContext({}),i=function(n){var e=o.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},p=function(n){var e=i(n.components);return o.createElement(c.Provider,{value:e},n.children)},l="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},b=o.forwardRef((function(n,e){var t=n.components,a=n.mdxType,r=n.originalType,c=n.parentName,p=m(n,["components","mdxType","originalType","parentName"]),l=i(t),b=a,d=l["".concat(c,".").concat(b)]||l[b]||u[b]||r;return t?o.createElement(d,s(s({ref:e},p),{},{components:t})):o.createElement(d,s({ref:e},p))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=t.length,s=new Array(r);s[0]=b;var m={};for(var c in e)hasOwnProperty.call(e,c)&&(m[c]=e[c]);m.originalType=n,m[l]="string"==typeof n?n:a,s[1]=m;for(var i=2;i<r;i++)s[i]=t[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}b.displayName="MDXCreateElement"},68915:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>m,toc:()=>i});var o=t(87462),a=(t(67294),t(3905));const r={title:"SST::SubComponent"},s=void 0,m={unversionedId:"core/component/subcomponent/class",id:"core/component/subcomponent/class",title:"SST::SubComponent",description:"A SubComponent is a modular piece of functionality that can be dynamically loaded into a Component or another SubComponent. SubComponents can be declared in the SST configuration input file (i.e., a user subcomponent) or can be loaded directly by a (sub)component such that the user may not have control over which component is loaded (i.e., an anonymous subcomponent). A parent (sub)Component interacts directly with its loaded subcomponent via function calls. SubComponents and their parents are always co-located when SST is running in parallel.",source:"@site/../docs/core/component/subcomponent/class.md",sourceDirName:"core/component/subcomponent",slug:"/core/component/subcomponent/class",permalink:"/sst-docs/docs/core/component/subcomponent/class",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/subcomponent/class.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"SST::SubComponent"},sidebar:"core",previous:{title:"primaryComponentOKToEndSim",permalink:"/sst-docs/docs/core/component/component/primaryComponentOKToEndSim"},next:{title:"constructor",permalink:"/sst-docs/docs/core/component/subcomponent/constructor"}},c={},i=[{value:"User versus Anonymous SubComponents",id:"user-versus-anonymous-subcomponents",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}],p={toc:i},l="wrapper";function u(n){let{components:e,...t}=n;return(0,a.kt)(l,(0,o.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A SubComponent is a modular piece of functionality that can be dynamically loaded into a Component or another SubComponent. SubComponents can be declared in the SST configuration input file (i.e., a ",(0,a.kt)("em",{parentName:"p"},"user")," subcomponent) or can be loaded directly by a (sub)component such that the user may not have control over which component is loaded (i.e., an ",(0,a.kt)("em",{parentName:"p"},"anonymous")," subcomponent). A parent (sub)Component interacts directly with its loaded subcomponent via function calls. SubComponents and their parents are always co-located when SST is running in parallel. "),(0,a.kt)("p",null,"SubComponents must inherit from a SubComponent API which must in turn inherit from the SST::SubComponent class. This allows SST to load any SubComponent that inherits from a given API into a slot designed for that API. "),(0,a.kt)("h2",{id:"user-versus-anonymous-subcomponents"},"User versus Anonymous SubComponents"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"User"),(0,a.kt)("th",{parentName:"tr",align:null},"Anonymous"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Defined in the simulation input file"),(0,a.kt)("td",{parentName:"tr",align:null},"Defined by the (sub)component that loads it")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Parameters come from simulation input"),(0,a.kt)("td",{parentName:"tr",align:null},"Parameters come from parent (sub)component")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Can have links"),(0,a.kt)("td",{parentName:"tr",align:null},"Can only use its parent's links")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Excerpt from src/sst/elements/simpleElementExample/basicSubComponent_subcomponent.cc"',title:'"Excerpt',from:!0,'src/sst/elements/simpleElementExample/basicSubComponent_subcomponent.cc"':!0},'#include <sst/core/subcomponent.h>\n\n// SubComponent API - define an API for a type of subcomponent\nclass basicSubComponentAPI : public SST::SubComponent \n{\npublic:\n    // Tell SST that this class is a SubComponent API\n    SST_ELI_REGISTER_SUBCOMPONENT_API(SST::simpleElementExample::basicSubComponentAPI)\n\n    basicSubComponentAPI(ComponentId_t id, Params& params) : SubComponent(id) {}\n    virtual ~basicSubComponentAPI() {}\n\n    virtual int compute (int num) =0;\n    virtual std::string compute (std::string comp) =0;\n};\n\n// This is a subcomponent that implements the API defined above\nclass basicSubComponentIncrement : public basicSubComponentAPI \n{\npublic:\n    SST_ELI_REGISTER_SUBCOMPONENT(\n        basicSubComponentIncrement,     // Class name\n        "simpleElementExample",         // Library name, the \'lib\' in SST\'s lib.name format\n        "basicSubComponentIncrement",   // Name used to refer to this subcomponent, the \'name\' in SST\'s lib.name format\n        SST_ELI_ELEMENT_VERSION(1,0,0), // A version number\n        "SubComponent that increments a value", // Description\n        SST::simpleElementExample::basicSubComponentAPI) // Fully qualified name of the API this subcomponent implements\n\n    // Other ELI macros as needed for parameters, ports, statistics, and subcomponent slots\n    SST_ELI_DOCUMENT_PARAMS( { "amount", "Amount to increment by", "1" } )\n\n    basicSubComponentIncrement(ComponentId_t id, Params& params);\n    ~basicSubComponentIncrement();\n\n    // Implement the API functions\n    int compute( int num) override;\n    std::string compute( std::string comp ) override;\n\nprivate:\n    int amount;\n};\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Excerpt from src/sst/elements/simpleElementExample/basicSubComponent_subcomponent.h"',title:'"Excerpt',from:!0,'src/sst/elements/simpleElementExample/basicSubComponent_subcomponent.h"':!0},'#include <sst_config.h>\n#include <basicSubComponent_subcomponent.h>\n\nbasicSubComponentIncrement::basicSubComponentIncrement(ComponentId_t id, Params& params) :\n    basicSubComponentAPI(id, params) \n{\n    amount = params.find<int>("amount",  1);\n}\n\nbasicSubComponentIncrement::~basicSubComponentIncrement() { }\n\nint basicSubComponentIncrement::compute( int num )\n{\n    return num + amount;\n}\n\nstd::string basicSubComponentIncrement::compute ( std::string comp )\n{\n    return "(" + comp + ")" + " + " + std::to_string(amount);\n}\n')),(0,a.kt)("h2",{id:"header"},"Header"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/subcomponent.h>\n")))}u.isMDXComponent=!0}}]);