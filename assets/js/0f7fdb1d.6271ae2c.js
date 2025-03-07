"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18395],{28453:(t,e,s)=>{s.d(e,{R:()=>o,x:()=>r});var n=s(96540);const i={},a=n.createContext(i);function o(t){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:o(t.components),n.createElement(a.Provider,{value:e},t.children)}},64891:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"config/stats/group/addStatistic","title":"addStatistic","description":"\x3c!---","source":"@site/../docs/config/stats/group/addStatistic.md","sourceDirName":"config/stats/group","slug":"/config/stats/group/addStatistic","permalink":"/sst-docs/docs/config/stats/group/addStatistic","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/config/stats/group/addStatistic.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1684522150000,"frontMatter":{"id":"addStatistic","title":"addStatistic"},"sidebar":"config","previous":{"title":"addComponent","permalink":"/sst-docs/docs/config/stats/group/addComponent"},"next":{"title":"setFrequency","permalink":"/sst-docs/docs/config/stats/group/setFrequency"}}');var i=s(74848),a=s(28453);const o={id:"addStatistic",title:"addStatistic"},r=void 0,c={},d=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Import",id:"import",level:2}];function l(t){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Adds a statistic to the group. The specified statistic names must exist in all components that are part of the group."}),"\n",(0,i.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"group.addStatistic(stat, stat_params_dict)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"stat"})," (type: string) Name of statistic to add to the group"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"stat_params_dict"})," (type: dict) Python dictionary that specifies the statistic parameters"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'import sst\n\ncomponent0 = sst.Component("c0", "simpleElementExample.example1")\n\nstatGroup = sst.StatisticGroup("StatGroup")\nstatGroup.addComponent(component0)\n#highlight-next-line\nstatGroup.addStatistic("EventSizeReceived")\n'})}),"\n",(0,i.jsx)(e.h2,{id:"import",children:"Import"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"import sst\n"})})]})}function p(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(l,{...t})}):l(t)}}}]);