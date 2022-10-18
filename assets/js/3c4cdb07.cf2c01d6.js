"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,_=m["".concat(o,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(_,l(l({ref:t},c),{},{components:n})):r.createElement(_,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),l=["components"],i={id:"sst_eli_register_subcomponent",title:"SST_ELI_REGISTER_SUBCOMPONENT"},o=void 0,p={unversionedId:"cpp/eli/sst_eli_register_subcomponent",id:"cpp/eli/sst_eli_register_subcomponent",title:"SST_ELI_REGISTER_SUBCOMPONENT",description:"Fully Qualified Name",source:"@site/../docs/cpp/eli/sst_eli_register_subcomponent.md",sourceDirName:"cpp/eli",slug:"/cpp/eli/sst_eli_register_subcomponent",permalink:"/sst-website/docs/cpp/eli/sst_eli_register_subcomponent",draft:!1,editUrl:"https://github.com/sstsimulator/sst-website/edit/master/docs/../docs/cpp/eli/sst_eli_register_subcomponent.md",tags:[],version:"current",lastUpdatedBy:"Ryan Ledbetter",lastUpdatedAt:1539909317,formattedLastUpdatedAt:"Oct 19, 2018",frontMatter:{id:"sst_eli_register_subcomponent",title:"SST_ELI_REGISTER_SUBCOMPONENT"},sidebar:"C++",previous:{title:"SST_ELI_REGISTER_COMPONENT",permalink:"/sst-website/docs/cpp/eli/sst_eli_register_component"},next:{title:"StringEvent",permalink:"/sst-website/docs/cpp/events/StringEvent"}},c={},u=[{value:"Fully Qualified Name",id:"fully-qualified-name",level:2},{value:"Remarks",id:"remarks",level:3},{value:"Requirements",id:"requirements",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"See Also",id:"see-also",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"fully-qualified-name"},"Fully Qualified Name"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"#define SST_ELI_REGISTER_SUBCOMPONENT(cls,lib,name,version,desc,interface)\n")),(0,s.kt)("h3",{id:"remarks"},"Remarks"),(0,s.kt)("p",null," This is placed in the public section of a .h to register the subcomponent with SST."),(0,s.kt)("h2",{id:"requirements"},"Requirements"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <sst/core/elementinfo.h>\n")),(0,s.kt)("h2",{id:"syntax"},"Syntax"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'SST_ELI_REGISTER_SUBCOMPONENT(\n    CLASS_NAME,\n    "ELEMENT_LIBRARY",\n    "CLASS_NAME_STRING", \n    SST_ELI_ELEMENT_VERSION( 1, 0, 0 ),\n    "DESCRIPTION",\n    "SUB_COMPONENT_SLOT" \n)\n')),(0,s.kt)("h2",{id:"parameters"},"Parameters"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"CLASS_NAME")," - The name of the class without quotes."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"ELEMENT_LIBRARY")," - The name of the library name."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"CLASS_NAME_STRING")," - The class name as a string."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"SST_ELI_ELEMENT_VERSION( 1, 0, 0 )")," - A version in the form SST_ELI_ELEMENT_VERSION( ","[major]",", ","[minor]",", ","[revision/build]"," )."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"DESCRIPTION")," - A description of this subcomponent."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"SUB_COMPONENT_SLOT")," - The fully qualified class/interface the a subcomponent slot must have to use this subcomponent."),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("h3",{id:"example-1"},"Example 1"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'SST_ELI_REGISTER_SUBCOMPONENT(\n    bay, // class\n    "exC_carWash", // element library\n    "bay", // subcomponent\n    SST_ELI_ELEMENT_VERSION( 1, 0, 0 ),\n    "Bay subcomponent for the carwash",\n    "SST::exC_carWash::carWashBay" // subcomponent slot\n)\n')),(0,s.kt)("h2",{id:"see-also"},"See Also"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/sst-website/docs/cpp/eli/sst_eli_register_subcomponent"},"SST_ELI_REGISTER_COMPONENT")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/sst-website/docs/guides/files/basics_header_files"},"Basics: Header (.h) Files")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/sst-website/docs/guides/files/basics_makefile"},"Basics: Makefile"))))}d.isMDXComponent=!0}}]);