"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5687],{97705:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>i});var o=t(74848),s=t(28453);const a={title:"getFullName"},l=void 0,r={id:"config/component/getFullName",title:"getFullName",description:"\x3c!---",source:"@site/../docs/config/component/getFullName.md",sourceDirName:"config/component",slug:"/config/component/getFullName",permalink:"/sst-docs/docs/config/component/getFullName",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/config/component/getFullName.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:168452215e4,frontMatter:{title:"getFullName"},sidebar:"config",previous:{title:"addLink",permalink:"/sst-docs/docs/config/component/addLink"},next:{title:"getType",permalink:"/sst-docs/docs/config/component/getType"}},c={},i=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Import",id:"import",level:2}];function p(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Returns the full name of the Component or SubComponent. For Components, the name is the one supplied by the user at the time the Component was created. For SubComponents, the name is automatically generated from the parent Component and slot name. At each level, the name is generated as the parent\u2019s name plus the slot name, separated by a colon. The slot number is appended in square brackets:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"Parent:slot[index]"})}),"\n",(0,o.jsx)(n.p,{children:"This holds true for SubComponents of SubComponents, the slotname and index are just appended to the parent name:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"Parent:slot[index]:slot[index]"})}),"\n",(0,o.jsx)(n.p,{children:"This function applies to both Components and SubComponents."}),"\n",(0,o.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"component.getFullName()\n"})}),"\n",(0,o.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"returns"})," full name of Component/SubComponent as a string"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import sst\n\ncomponent0 = sst.Component("c0", "simpleElementExample.example0")\nname = component0.getFullName()\n'})}),"\n",(0,o.jsx)(n.h2,{id:"import",children:"Import"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"import sst\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var o=t(96540);const s={},a=o.createContext(s);function l(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);