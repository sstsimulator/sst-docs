"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8638],{69677:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var n=s(74848),o=s(28453);const i={title:"SST_ELI_DELETE_STAT",sidebar_label:"Statistics"},r=void 0,c={id:"core/eli/delete/sst_eli_delete_stat",title:"SST_ELI_DELETE_STAT",description:"Use this macro inside an SSTELIDOCUMENTSTATISTICS macro to remove a statistic from the object's ELI. This can be useful when an object has inherited ELI that it doesn't support.",source:"@site/../docs/core/eli/delete/sst_eli_delete_stat.md",sourceDirName:"core/eli/delete",slug:"/core/eli/delete/sst_eli_delete_stat",permalink:"/sst-docs/docs/core/eli/delete/sst_eli_delete_stat",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/eli/delete/sst_eli_delete_stat.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:168452215e4,frontMatter:{title:"SST_ELI_DELETE_STAT",sidebar_label:"Statistics"},sidebar:"core",previous:{title:"Profile points",permalink:"/sst-docs/docs/core/eli/delete/sst_eli_delete_profile_point"},next:{title:"SubComponent Slots",permalink:"/sst-docs/docs/core/eli/delete/sst_eli_delete_subcomponent_slot"}},l={},a=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:'SST_ELI_DELETE_STAT("stat")\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Use this macro inside an ",(0,n.jsx)(t.a,{href:"../document/sst_eli_document_statistics",children:(0,n.jsx)(t.code,{children:"SST_ELI_DOCUMENT_STATISTICS"})})," macro to remove a statistic from the object's ELI. This can be useful when an object has inherited ELI that it doesn't support."]}),"\n",(0,n.jsx)(t.admonition,{title:"Important",type:"info",children:(0,n.jsxs)(t.p,{children:["This macro must reside in a ",(0,n.jsx)(t.code,{children:"public"})," section of the object's header file."]})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"stat"})," (string) The name of a statistic to remove"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:'/* This object only counts sent messages, not received ones */\nSST_ELI_DOCUMENT_STATISTICS(\n    SST_ELI_DELETE_STAT("numRecv"),\n    {"numSent", "# of messages sent", "", 1}\n)\n'})}),"\n",(0,n.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h>\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>c});var n=s(96540);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);