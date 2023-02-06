"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5549],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(n),d=i,b=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var m=2;m<o;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>m,toc:()=>c});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={title:"SST_ELI_REGISTER_SUBCOMPONENT",sidebar_label:"Register SubComponent"},l=void 0,m={unversionedId:"core/eli/sst_eli_register_subcomponent",id:"core/eli/sst_eli_register_subcomponent",title:"SST_ELI_REGISTER_SUBCOMPONENT",description:'All SubComponents must register themselves with SST using this macro. The library and name strings provided in this macro will be used by SST to identify the subcomponent as "library.name". The version, description, and category are displayed by sst-info to document the purpose and version of the SubComponent. The interface declares which SubComponent API this subcomponent implements which is used to check compatibility with SubComponent slots. The interface must also be registered with SST using the SSTELIREGISTERSUBCOMPONENTAPI macro.',source:"@site/../docs/core/eli/sst_eli_register_subcomponent.md",sourceDirName:"core/eli",slug:"/core/eli/sst_eli_register_subcomponent",permalink:"/docs/docs/core/eli/sst_eli_register_subcomponent",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/core/eli/sst_eli_register_subcomponent.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"SST_ELI_REGISTER_SUBCOMPONENT",sidebar_label:"Register SubComponent"},sidebar:"Core API",previous:{title:"Register Component",permalink:"/docs/docs/core/eli/sst_eli_register_component"},next:{title:"Document Parameters",permalink:"/docs/docs/core/eli/sst_eli_document_params"}},p={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3}],u={toc:c},d="wrapper";function b(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'SST_ELI_REGISTER_SUBCOMPONENT(class_name, "library", "name" , SST_ELI_ELEMENT_VERSION(X, Y, Z), "description", interface)\n// Alternative name for the same macro. The macro above is preferred.\nSST_ELI_REGISTER_SUBCOMPONENT_DERIVED(class_name, "library", "name", SST_ELI_ELEMENT_VERSION(X, Y, Z), "description", interface)\n')),(0,o.kt)("p",null,'All SubComponents must register themselves with SST using this macro. The library and name strings provided in this macro will be used by SST to identify the subcomponent as "library.name". The version, description, and category are displayed by sst-info to document the purpose and version of the SubComponent. The interface declares which SubComponent API this subcomponent implements which is used to check compatibility with SubComponent slots. The interface must also be registered with SST using the ',(0,o.kt)("inlineCode",{parentName:"p"},"SST_ELI_REGISTER_SUBCOMPONENT_API")," macro."),(0,o.kt)("admonition",{title:"Important",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This macro must reside in a ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," section of the SubComponent's header file.")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"class_name")," (class) The name of the SubComponent class. This is not a string."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"library")," (string) The name of the library that this SubComponent belongs to. If the library name does not exist, it will be created."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name")," (string) The name that will be used to instantiate this SubComponent in the simulation input configuration. It can be the same as the class_name but does not need to be. The full name of the SubComponent will be ",(0,o.kt)("inlineCode",{parentName:"li"},"library.name"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SST_ELI_ELEMENT_VERSION(X, Y, Z)")," This is a macro that specifies the version of a SubComponent. ",(0,o.kt)("inlineCode",{parentName:"li"},"X"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Y"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"Z")," are integers that form a version number X.Y.Z. For example: ",(0,o.kt)("inlineCode",{parentName:"li"},"SST_ELI_ELEMENT_VERSION(3, 0, 9)")," yields a version of 3.0.9. Versions are not checked by SST, this is provided for developers to version and manage their libraries."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"description")," (string) A description of the SubComponent."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"interface")," (fully qualified class name) This is the API that the SubComponent impelements.")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"// Register this subcomponent with SST and tell SST that it implements the 'basicSubComponentAPI' API\nSST_ELI_REGISTER_SUBCOMPONENT(\n    basicSubComponentIncrement,     // Class name\n    \"simpleElementExample\",         // Library name, the 'lib' in SST's lib.name format\n    \"basicSubComponentIncrement\",   // Name used to refer to this subcomponent, the 'name' in SST's lib.name format\n    SST_ELI_ELEMENT_VERSION(1,0,0), // A version number\n    \"SubComponent that increments a value\", // Description\n    SST::simpleElementExample::basicSubComponentAPI // Fully qualified name of the API this subcomponent implements\n                                                    // A subcomponent can implment an API from any library\n)\n")))}b.isMDXComponent=!0}}]);