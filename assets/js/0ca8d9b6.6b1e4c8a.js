"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23554],{28453:(t,s,e)=>{e.d(s,{R:()=>c,x:()=>r});var n=e(96540);const i={},o=n.createContext(i);function c(t){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof t?t(s):{...s,...t}}),[s,t])}function r(t){let s;return s=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:c(t.components),n.createElement(o.Provider,{value:s},t.children)}},37740:(t,s,e)=>{e.r(s),e.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"config/stats/setStatisticOutput","title":"setStatisticOutput","description":"\x3c!---","source":"@site/../docs/config/stats/setStatisticOutput.md","sourceDirName":"config/stats","slug":"/config/stats/setStatisticOutput","permalink":"/sst-docs/docs/config/stats/setStatisticOutput","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/config/stats/setStatisticOutput.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1684522150000,"frontMatter":{"id":"setStatisticOutput","title":"setStatisticOutput"},"sidebar":"config","previous":{"title":"setStatisticLoadLevelForComponentType","permalink":"/sst-docs/docs/config/stats/setStatisticLoadLevelForComponentType"},"next":{"title":"setStatisticOutputOption","permalink":"/sst-docs/docs/config/stats/setStatisticOutputOption"}}');var i=e(74848),o=e(28453);const c={id:"setStatisticOutput",title:"setStatisticOutput"},r=void 0,a={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Import",id:"import",level:2}];function u(t){const s={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Sets the global StatisticOutput to be of the module type specified. Built-in modules include:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"CSV"})," statOutputCSV"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Console"})," statOutputConsole"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Text"})," statOutputTXT"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"JSON"})," statOutputJSON"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"HDF5"})," statOutputhdf5 (if core is configured with HDF5)"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"sst.setStatisticOutput(stat_output_module, options)\n"})}),"\n",(0,i.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"stat_output_module"})," (type: string) name of the stat output module to load in lib.element format."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"options"})," (type: dict) OPTIONAL. contents specify the option as dictionary keys with the options value being specified by the corresponding dictionary value."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:'import sst\n\nsst.setStatisticOutput("sst.statOutputCSV", { "filepath" : "stats.csv", "separator" : "," } )\n'})}),"\n",(0,i.jsx)(s.h2,{id:"import",children:"Import"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"import sst\n"})})]})}function d(t={}){const{wrapper:s}={...(0,o.R)(),...t.components};return s?(0,i.jsx)(s,{...t,children:(0,i.jsx)(u,{...t})}):u(t)}}}]);