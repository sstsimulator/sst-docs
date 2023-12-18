"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7522],{57231:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var t=s(85893),a=s(11151);const r={title:"popNamePrefix"},o=void 0,i={id:"config/general/popNamePrefix",title:"popNamePrefix",description:"Pops a prefix from the name stack. See pushNamePrefix for how name stacks are used.",source:"@site/../docs/config/general/popNamePrefix.md",sourceDirName:"config/general",slug:"/config/general/popNamePrefix",permalink:"/sst-docs/docs/config/general/popNamePrefix",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/config/general/popNamePrefix.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"popNamePrefix"},sidebar:"config",previous:{title:"pushNamePrefix",permalink:"/sst-docs/docs/config/general/pushNamePrefix"},next:{title:"exit",permalink:"/sst-docs/docs/config/general/exit"}},l={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Import",id:"import",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Pops a prefix from the name stack. See ",(0,t.jsx)(n.a,{href:"pushNamePrefix",children:"pushNamePrefix"})," for how name stacks are used."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"sst.popNamePrefix()\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import sst\n\ncomp0 = sst.Component("c0", "simpleElementExample.example0") # Name is \'c0\'\n\nsst.pushNamePrefix("base")\n\ncomp1 = sst.Component("c1", "simpleElementExample.example0") # Name is \'base.c1\'\n\n#highlight-next-line\nsst.popNamePrefix()\n\ncomp2 = sst.Component("c2", "simpleElementExample.example0") # Name is \'c2\'\n'})}),"\n",(0,t.jsx)(n.h2,{id:"import",children:"Import"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import sst\n"})})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>o});var t=s(67294);const a={},r=t.createContext(a);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);