"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7653],{22032:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var t=s(74848),o=s(28453);const i={title:"SST_ELI_REGISTER_COMPONENT_DERIVED_BASE",sidebar_label:"Component Derived Base"},a=void 0,r={id:"core/eli/register/sst_eli_register_component_derived_base",title:"SST_ELI_REGISTER_COMPONENT_DERIVED_BASE",description:"This macro registers the inheritance chain for a class that does not directly inherit from SST::Component and is not itself intended to be an SST Component, but will be the base class for an SST Component. Registering these classes allows SST to identify which ELI information should be inherited by a child Component. The names provided to the macro must be the fully qualified class names. ELI documentation macros declared by this class will be inherited by child classes.",source:"@site/../docs/core/eli/register/sst_eli_register_component_derived_base.md",sourceDirName:"core/eli/register",slug:"/core/eli/register/sst_eli_register_component_derived_base",permalink:"/sst-docs/docs/core/eli/register/sst_eli_register_component_derived_base",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/eli/register/sst_eli_register_component_derived_base.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:168452215e4,frontMatter:{title:"SST_ELI_REGISTER_COMPONENT_DERIVED_BASE",sidebar_label:"Component Derived Base"},sidebar:"core",previous:{title:"Component Base",permalink:"/sst-docs/docs/core/eli/register/sst_eli_register_component_base"},next:{title:"SubComponent",permalink:"/sst-docs/docs/core/eli/register/sst_eli_register_subcomponent"}},l={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"SST_ELI_REGISTER_COMPONENT_DERIVED_BASE(class_name, parent_class_name)\n"})}),"\n",(0,t.jsx)(n.p,{children:"This macro registers the inheritance chain for a class that does not directly inherit from SST::Component and is not itself intended to be an SST Component, but will be the base class for an SST Component. Registering these classes allows SST to identify which ELI information should be inherited by a child Component. The names provided to the macro must be the fully qualified class names. ELI documentation macros declared by this class will be inherited by child classes."}),"\n",(0,t.jsxs)(n.p,{children:["If a class inherits from a class using this macro and that class is an SST Component, it should use the regular ",(0,t.jsx)(n.a,{href:"sst_eli_register_component",children:(0,t.jsx)(n.code,{children:"SST_ELI_REGISTER_COMPONENT"})})," call."]}),"\n",(0,t.jsx)(n.admonition,{title:"Important",type:"info",children:(0,t.jsxs)(n.p,{children:["This macro must reside in a ",(0,t.jsx)(n.code,{children:"public"})," section of the class's header file."]})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"class_name"})," (class) The fully qualified name of the calling class. This is not a string."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"parent_class_name"})," (class) The fully qualified name of the parent class. This API should also be registered with teh SST Core."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"In this example, ComponentBaseClass is not itself an SST Component but it has a parameter to take a clock frequency. ComponentIntermediateClass is also not itself an SST Component but it inherits from ComponentBaseClass. ComponentIntermediateClass also adds a port to the ELI information. MyComponent is an SST Component that inherits from ComponentIntermediateClass and inherits both ComponentBaseClass's parameter and ComponentIntermediateClass's port."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'namespace SST {\nclass ComponentBaseClass : public SST::Component\n{\npublic:\n    SST_ELI_REGISTER_COMPONENT_BASE(SST::ComponentBaseClass)\n\n    SST_ELI_DOCUMENT_PARAMS(\n        { "clockFrequency", "The clock frequency for the component", NULL }\n    )\n\n    /* Rest of class here */\n};\n\nclass ComponentIntermediateClass : public SST::ComponentBaseClass\n{\npublic:\n    SST_ELI_REGISTER_COMPONENT_DERIVED_BASE(SST::ComponentIntermediateClass, SST::ComponentBaseClass)\n\n    SST_ELI_DOCUMENT_PORTS(\n      { "left_link", "Port that connects the left link", {"exampleLibrary.event" } }\n    )\n\n    /* Rest of class */\n};\n\nclass MyComponent : public SST::ComponentIntermediateClass\n{\npublic:\n\n    SST_ELI_REGISTER_COMPONENT(\n        MyComponent,                        // Component class\n        "exampleLibrary",                   // Component library (for Python/library lookup)\n        "mycomponent",                      // Component name (for Python/library lookup)\n        SST_ELI_ELEMENT_VERSION(1,0,0),     // Version of the component (not related to SST version)\n        "Example of ELI inheritance",       // Description\n        COMPONENT_CATEGORY_UNCATEGORIZED    // Category\n    )\n\n/* Rest of class */\n};\n} /* End namespace SST */\n'})}),"\n",(0,t.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"#include <src/sst/component.h>\n"})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var t=s(96540);const o={},i=t.createContext(o);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);