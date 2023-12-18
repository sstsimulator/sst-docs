"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5249],{8159:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var t=o(85893),s=o(11151);const r={title:"isAnonymous"},c=void 0,i={id:"core/component/info/isAnonymous",title:"isAnonymous",description:"Availability: Component, SubComponent, ComponentExtension",source:"@site/../docs/core/component/info/isAnonymous.md",sourceDirName:"core/component/info",slug:"/core/component/info/isAnonymous",permalink:"/sst-docs/docs/core/component/info/isAnonymous",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/info/isAnonymous.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"isAnonymous"},sidebar:"core",previous:{title:"getParentComponentName",permalink:"/sst-docs/docs/core/component/info/getParentComponentName"},next:{title:"isUser",permalink:"/sst-docs/docs/core/component/info/isUser"}},a={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"bool isAnonymous();\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Availability:"})," Component, SubComponent, ComponentExtension"]}),"\n",(0,t.jsx)(n.p,{children:"Returns whether the calling SubComponent was loaded anonymously. When called by a Component, the function returns false."}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"returns"})," (bool) Whether the calling (Sub)Component was loaded anonymously"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"if (isAnonymous()) {\n    // Handle something one way if we were loaded anonymously\n} else {\n    // Handle a different way if we were loaded as a user subcomponent\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>c});var t=o(67294);const s={},r=t.createContext(s);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);