"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9712],{12104:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>r});var s=n(85893),a=n(11151);const o={id:"enableStatisticsForComponentName",title:"enableStatisticsForComponentName"},i=void 0,l={id:"config/stats/enableStatisticsForComponentName",title:"enableStatisticsForComponentName",description:"\x3c!---",source:"@site/../docs/config/stats/enableStatisticsForComponentName.md",sourceDirName:"config/stats",slug:"/config/stats/enableStatisticsForComponentName",permalink:"/sst-docs/docs/config/stats/enableStatisticsForComponentName",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/config/stats/enableStatisticsForComponentName.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{id:"enableStatisticsForComponentName",title:"enableStatisticsForComponentName"},sidebar:"config",previous:{title:"enableStatisticForComponentName",permalink:"/sst-docs/docs/config/stats/enableStatisticForComponentName"},next:{title:"enableStatisticForComponentType",permalink:"/sst-docs/docs/config/stats/enableStatisticForComponentType"}},c={},r=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Import",id:"import",level:2}];function d(t){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"Enables a list of statistics for the component on which the call is made."}),"\n",(0,s.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"sst.enableStatisticsForComponentName(name, stat_list, stat_params_dict, apply_to_children=False)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"name"})," (type: string) name of the Component or SubComponent on which to enable specified statistics. The name for SubComponents is described above. Slot indexes are optional in cases where only on SubComponent has been added to a slot, but you can also use [0] in all cases, even when the actual name will not display this way. If component with the provided name not found, the function will call fatal()."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"stat_list"})," (type: list of strings) list of statistics to be enabled. If only one stat is to be enabled, you may pass a single string instead of a list."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"stat_params_dict"})," (type: dict) OPTIONAL. Python dictionary that specified the statistic parameters"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"apply_to_children"})," (type: bool) OPTIONAL. If set to True, will recursively enable specified statistic on all SubComponent descendants."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'import sst\n\nsst.Component("c0", "simpleElementExample.basicStatistics")\n\nstats = ["UINT32_statistic", "UINT64_statistic", "INT32_statistic"]\nsst.enableStatisticsForComponentName("c0", stats)\n'})}),"\n",(0,s.jsx)(e.h2,{id:"import",children:"Import"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"import sst\n"})})]})}function p(t={}){const{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>l,a:()=>i});var s=n(67294);const a={},o=s.createContext(a);function i(t){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:i(t.components),s.createElement(o.Provider,{value:e},t.children)}}}]);