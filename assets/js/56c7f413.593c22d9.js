"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5324],{29139:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>r});var i=s(85893),n=s(11151);const l={title:"SST_ELI_DOCUMENT_STATISTICS",sidebar_label:"Statistics"},a=void 0,c={id:"core/eli/document/sst_eli_document_statistics",title:"SST_ELI_DOCUMENT_STATISTICS",description:"Availability: Components, SubComponents",source:"@site/../docs/core/eli/document/sst_eli_document_statistics.md",sourceDirName:"core/eli/document",slug:"/core/eli/document/sst_eli_document_statistics",permalink:"/sst-docs/docs/core/eli/document/sst_eli_document_statistics",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/eli/document/sst_eli_document_statistics.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"SST_ELI_DOCUMENT_STATISTICS",sidebar_label:"Statistics"},sidebar:"core",previous:{title:"Profile points",permalink:"/sst-docs/docs/core/eli/document/sst_eli_document_profile_points"},next:{title:"SubComponent Slots",permalink:"/sst-docs/docs/core/eli/document/sst_eli_document_subcomponent_slots"}},o={},r=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Header",id:"header",level:2}];function d(e){const t={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",children:'#define SST_ELI_DOCUMENT_STATISTICS( \n    { "stat_0", "description", "units", enable_level },\n    { "stat_1", "description", "units", enable_level },\n    ...\n    { "stat_x", "description", "units", enable_level }\n)\n'})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"Availability:"})," Components, SubComponents"]}),"\n",(0,i.jsx)(t.admonition,{title:"Important",type:"info",children:(0,i.jsxs)(t.p,{children:["This macro must reside in a ",(0,i.jsx)(t.code,{children:"public"})," section of the object's header file."]})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"stat_x"})," (string) Name of the statistic"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"description"})," (string) Description of the statistic. This value is displayed when sst-info is run at the command line."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"units"})," (string) Units for the statistic's value. For example 'cycles' or 'MB'. This value is displayed when sst-info is run at the command line."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"enable_level"})," (int) Integer between 1 and 7. The statistic will be generated if the user configures the simulation enable level to be greater than or equal to this number."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.h3,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/example1.h"',children:'SST_ELI_DOCUMENT_STATISTICS( \n    {"EventSizeReceived", "Records the payload size of each event received", "bytes", 1}\n)\n'})}),"\n",(0,i.jsx)(t.h3,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/basicStatistics.h"',children:'SST_ELI_DOCUMENT_STATISTICS(\n    {"UINT32_statistic", "Statistic that records unsigned 32-bit values", "unitless", 1},\n    {"UINT32_statistic_duplicate", "Statistic that records unsigned 32-bit values. Multiple stats record values to this statistic.", "unitless", 1},\n    {"UINT64_statistic", "Statistic that records unsigned 64-bit values", "unitless", 2},\n    {"INT32_statistic",  "Statistic that records signed 32-bit values", "unitless", 3},\n    {"INT64_statistic",  "Statistic that records signed 64-bit values", "unitless", 3},\n    {"SUBID_statistic", "Statistic to demonstrate SubIDs to obtain multiple instances of the same statistic name. Type is double.", "unitless", 4},\n)\n'})}),"\n",(0,i.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h>\n"})})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>a});var i=s(67294);const n={},l=i.createContext(n);function a(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);