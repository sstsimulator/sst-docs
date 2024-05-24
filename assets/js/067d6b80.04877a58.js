"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3048],{41719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(74848),o=n(28453);const r={title:"SST_ELI_DOCUMENT_PORTS",sidebar_label:"Ports"},i=void 0,c={id:"core/eli/document/sst_eli_document_ports",title:"SST_ELI_DOCUMENT_PORTS",description:"Availability: Component, SubComponent",source:"@site/../docs/core/eli/document/sst_eli_document_ports.md",sourceDirName:"core/eli/document",slug:"/core/eli/document/sst_eli_document_ports",permalink:"/sst-docs/docs/core/eli/document/sst_eli_document_ports",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/eli/document/sst_eli_document_ports.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:168452215e4,frontMatter:{title:"SST_ELI_DOCUMENT_PORTS",sidebar_label:"Ports"},sidebar:"core",previous:{title:"Parameters",permalink:"/sst-docs/docs/core/eli/document/sst_eli_document_params"},next:{title:"Profile points",permalink:"/sst-docs/docs/core/eli/document/sst_eli_document_profile_points"}},l={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function a(e){const t={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'#define SST_ELI_DOCUMENT_PORTS( \n    { "port_0", "description", { "list_of_event_types_accepted"} },\n    { "port_1", "description", { "list_of_event_types_accepted"} },\n    ...\n    { "port_X", "description", { "list_of_event_types_accepted"} }\n)\n'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Availability:"})," Component, SubComponent"]}),"\n",(0,s.jsx)(t.p,{children:"Document and register ports that can be connected on a (sub)component. SST will not allow links to be configured on undocumented ports."}),"\n",(0,s.jsx)(t.admonition,{title:"Important",type:"info",children:(0,s.jsxs)(t.p,{children:["This macro must reside in a ",(0,s.jsx)(t.code,{children:"public"})," section of the object's header file."]})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"port_X"})," (string) Name for the port"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"description"})," (string) Description of the purpose or use of the port. This value is displayed when sst-info is run at the command line."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"list_of_event_types_accepted"})," (list of strings) Event types that the port can handle. This value is displayed when sst-info is run at the command line."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'SST_ELI_DOCUMENT_PORTS(\n{ "port", "Port on which cars are sent", {"sst.Interfaces.StringEvent"}}\n)\n'})}),"\n",(0,s.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h>\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var s=n(96540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);