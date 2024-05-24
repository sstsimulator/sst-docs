"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6422],{64913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(74848),r=n(28453);const s={title:"SST_ELI_DOCUMENT_PARAMS",sidebar_label:"Parameters"},i=void 0,l={id:"core/eli/document/sst_eli_document_params",title:"SST_ELI_DOCUMENT_PARAMS",description:"Availability: Component, SubComponent, Module, ProfilePoint",source:"@site/../docs/core/eli/document/sst_eli_document_params.md",sourceDirName:"core/eli/document",slug:"/core/eli/document/sst_eli_document_params",permalink:"/sst-docs/docs/core/eli/document/sst_eli_document_params",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/eli/document/sst_eli_document_params.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:168452215e4,frontMatter:{title:"SST_ELI_DOCUMENT_PARAMS",sidebar_label:"Parameters"},sidebar:"core",previous:{title:"Attributes",permalink:"/sst-docs/docs/core/eli/document/sst_eli_document_attributes"},next:{title:"Ports",permalink:"/sst-docs/docs/core/eli/document/sst_eli_document_ports"}},o={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Header",id:"header",level:2}];function m(e){const t={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:'/* Macro */\nSST_ELI_DOCUMENT_PARAMS\t( \n    { "param_name0", "description", "default_value" },\n    { "param_name1", "description", "default_value" },\n    { "param_name2", "description", "default_value" },\n    ...\n    { "param_nameX", "description", "default_value" }\n )\n'})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"Availability:"})," Component, SubComponent, Module, ProfilePoint"]}),"\n",(0,a.jsx)(t.p,{children:"Use this macro to register the parameters that an SST object accepts. The macro accepts a list of triples where each triple contains the name of the parameter, a description of the parameter, and, optionally a default value. All fields are provided as strings."}),"\n",(0,a.jsx)(t.admonition,{title:"Important",type:"info",children:(0,a.jsxs)(t.p,{children:["This macro must reside in a ",(0,a.jsx)(t.code,{children:"public"})," section of the object's header file."]})}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"param_nameX"})," (string) The name of the parameter."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"description"})," (string) Description of the parameter. This value is displayed when sst-info is run at the command line."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"default_value"})," (string) Optional, a default value that the object assigns the parameter if the parameter is not given in the SST configuration file. If a parameter is required, make this NULL or omit it."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.h3,{id:"example-1",children:"Example 1"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/basicParams.h"',children:' SST_ELI_DOCUMENT_PARAMS(\n    { "int_param",      "Integer parameter",    NULL },     // Required parameter\n    { "bool_param",     "Boolean parameter",    "false"},   // Optional parameter\n    { "string_param",   "String parameter",     "hello"},\n    { "uint32_param",   "uint32_t parameter",   "400"},\n    { "double_param",   "double parameter",     "12.5"},\n    { "ua_param",       "UnitAlgebra parameter","2TB/s"},\n    { "example_param",  "ExampleType parameter","key:5"},\n    { "array_param",    "array parameter",      "[]"},\n)\n'})}),"\n",(0,a.jsx)(t.h3,{id:"example-2",children:"Example 2"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/example0"',children:'SST_ELI_DOCUMENT_PARAMS(\n    { "eventsToSend", "How many events this component should send.", NULL},\n    { "eventSize",    "Payload size for each event, in bytes.", "16"}\n)\n'})}),"\n",(0,a.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/module.h> // or\n#include <sst/core/profiletool.h>\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var a=n(96540);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);