"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62855],{21698:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"core/eli/delete/sst_eli_delete_param","title":"SST_ELI_DELETE_PARAM","description":"Availability: Component, SubComponent, Module, ProfilePoint","source":"@site/../docs/core/eli/delete/sst_eli_delete_param.md","sourceDirName":"core/eli/delete","slug":"/core/eli/delete/sst_eli_delete_param","permalink":"/sst-docs/docs/core/eli/delete/sst_eli_delete_param","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/eli/delete/sst_eli_delete_param.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1684522150000,"frontMatter":{"title":"SST_ELI_DELETE_PARAM","sidebar_label":"Parameters"},"sidebar":"core","previous":{"title":"Attributes","permalink":"/sst-docs/docs/core/eli/delete/sst_eli_delete_attribute"},"next":{"title":"Ports","permalink":"/sst-docs/docs/core/eli/delete/sst_eli_delete_port"}}');var r=s(74848),o=s(28453);const l={title:"SST_ELI_DELETE_PARAM",sidebar_label:"Parameters"},i=void 0,a={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:'/* Macro */\nSST_ELI_DELETE_PARAM("param")\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"Availability:"})," Component, SubComponent, Module, ProfilePoint"]}),"\n",(0,r.jsxs)(t.p,{children:["Use this macro inside an ",(0,r.jsx)(t.a,{href:"../document/sst_eli_document_params",children:(0,r.jsx)(t.code,{children:"SST_ELI_DOCUMENT_PARAMS"})})," macro to remove a parameter from the object's ELI. This can be useful when an object has inherited ELI that it doesn't support."]}),"\n",(0,r.jsx)(t.admonition,{title:"Important",type:"info",children:(0,r.jsxs)(t.p,{children:["This macro must reside in a ",(0,r.jsx)(t.code,{children:"public"})," section of the object's header file."]})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"param"})," (string) The name of the parameter to remove."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:'// Assume "clock_period" is part of the object\'s ELI\nSST_ELI_DOCUMENT_PARAMS(\n    SST_ELI_DELETE_PARAM("clock_period"),\n)\n'})}),"\n",(0,r.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/module.h> // or\n#include <sst/core/profiletool.h>\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>i});var n=s(96540);const r={},o=n.createContext(r);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);