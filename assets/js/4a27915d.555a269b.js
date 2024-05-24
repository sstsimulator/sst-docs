"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5166],{4193:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=t(74848),o=t(28453);const i={title:"setRank"},r=void 0,a={id:"config/component/setRank",title:"setRank",description:"\x3c!---",source:"@site/../docs/config/component/setRank.md",sourceDirName:"config/component",slug:"/config/component/setRank",permalink:"/sst-docs/docs/config/component/setRank",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/config/component/setRank.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:168452215e4,frontMatter:{title:"setRank"},sidebar:"config",previous:{title:"setCoordinates",permalink:"/sst-docs/docs/config/component/setCoordinates"},next:{title:"setWeight",permalink:"/sst-docs/docs/config/component/setWeight"}},c={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Import",id:"import",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Sets the rank the Component should be assigned to. This information is only used if the partitioner is set to ",(0,s.jsx)(n.code,{children:"sst.self"}),". This function is only available to Components."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"component.setRank(mpi_rank, thread=0)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"mpi_rank"})," (type: int) MPI rank the Component should be assigned to."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"thread"})," (type: int) Thread the Component should be assigned to."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import sst\n\ncomponent0 = sst.Component("c0", "simpleElementExample.example0")\ncomponent0.setRank(1,2) # Assign to rank 1, thread 2\n'})}),"\n",(0,s.jsx)(n.h2,{id:"import",children:"Import"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import sst\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);