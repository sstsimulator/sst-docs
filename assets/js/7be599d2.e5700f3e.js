"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9102],{81276:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(74848),t=n(28453);const i={title:"SST_ELI_REGISTER_PYTHON_MODULE",sidebar_label:"Python Module"},l=void 0,s={id:"core/eli/register/sst_eli_register_python_module",title:"SST_ELI_REGISTER_PYTHON_MODULE",description:"Libraries can implement python modules to assist with, for example, configuration. Such modules use this macro to register with the SST Core. Modules will be available as submodules in the 'sst' python module.",source:"@site/../docs/core/eli/register/sst_eli_register_python_module.md",sourceDirName:"core/eli/register",slug:"/core/eli/register/sst_eli_register_python_module",permalink:"/sst-docs/docs/core/eli/register/sst_eli_register_python_module",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/eli/register/sst_eli_register_python_module.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:168452215e4,frontMatter:{title:"SST_ELI_REGISTER_PYTHON_MODULE",sidebar_label:"Python Module"},sidebar:"core",previous:{title:"Profile Tool",permalink:"/sst-docs/docs/core/eli/register/sst_eli_register_profiletool"},next:{title:"Document",permalink:"/sst-docs/docs/category/document"}},a={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function m(e){const r={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-cpp",children:'SST_ELI_REGISTER_PYTHON_MODULE(class_name, "library", SST_ELI_ELEMENT_VERSION(major, minorX, minorY) )\n'})}),"\n",(0,o.jsx)(r.p,{children:"Libraries can implement python modules to assist with, for example, configuration. Such modules use this macro to register with the SST Core. Modules will be available as submodules in the 'sst' python module."}),"\n",(0,o.jsx)(r.admonition,{title:"Important",type:"info",children:(0,o.jsxs)(r.p,{children:["This macro must reside in a ",(0,o.jsx)(r.code,{children:"public"})," section of the module's C++ class declaration."]})}),"\n",(0,o.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"class_name"})," (class) The name of the Component class. This is not a string."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"library"})," (string) The name of the library that this Component belongs to. If the library name does not exist, it will be created."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"SST_ELI_ELEMENT_VERSION(major, minorX, minorY)"})," This is a macro that specifies the version of a Component. ",(0,o.jsx)(r.code,{children:"major"}),", ",(0,o.jsx)(r.code,{children:"minorX"}),", and ",(0,o.jsx)(r.code,{children:"minorY"})," are integers that form a version number major.minorX.minorY. For example: SST_ELI_ELEMENT_VERSION(3, 0, 9) yields a version of 3.0.9. Versions are not checked by SST, this is provided for developers to version and manage their libraries."]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(r.p,{children:"This example comes from SST's Merlin element library."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-cpp",children:'namespace SST {\nnamespace Merlin {\n\nclass MerlinPyModule : public SSTElementPythonModule {\npublic:\n\n    //highlight-start\n    SST_ELI_REGISTER_PYTHON_MODULE(\n        SST::Merlin::MerlinPyModule,    // Module class\n        "merlin",                       // Library name\n        SST_ELI_ELEMENT_VERSION(1,0,0)  // Module version\n    )\n    //highlight-end\n\n    /* Required for certain compilers because this class is not declared in a header file */\n    SST_ELI_EXPORT(SST::Merlin::MerlinPyModule)\n\n    /* Constructor, add the Python modules to SST */\n    MerlinPyModule(std::string library) :\n    SSTElementPythonModule(library)\n    {\n        auto primary_module = createPrimaryModule(pymerlin, "pymerlin.py");\n        primary_module->addSubModule("base",pymerlin_base,"pymerlin-base.py");\n        primary_module->addSubModule("endpoint",pymerlin_endpoint,"pymerlin-endpoint.py");\n        primary_module->addSubModule("router",pymerlin_router,"pymerlin-router.py");\n        primary_module->addSubModule("interface",pymerlin_interface,"interfaces/pymerlin-interface.py");\n        primary_module->addSubModule("targetgen",pymerlin_targetgen,"interfaces/pymerlin-targetgen.py");\n        primary_module->addSubModule("topology",pymerlin_topo_dragonfly,"topology/pymerlin-topo-dragonfly.py");\n        primary_module->addSubModule("topology",pymerlin_topo_hyperx,"topology/pymerlin-topo-hyperx.py");\n        primary_module->addSubModule("topology",pymerlin_topo_fattree,"topology/pymerlin-topo-fattree.py");\n        primary_module->addSubModule("topology",pymerlin_topo_mesh,"topology/pymerlin-topo-mesh.py");        \n    }\n};\n\n} } /* namespaces */\n'})}),"\n",(0,o.jsx)(r.h2,{id:"header",children:"Header"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-cpp",children:"#include <sst/core/module/element_python.h>\n"})})]})}function c(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>s});var o=n(96540);const t={},i=o.createContext(t);function l(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);