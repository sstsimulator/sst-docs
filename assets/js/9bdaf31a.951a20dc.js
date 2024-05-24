"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4816],{82617:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=o(74848),s=o(28453);const a={title:"isUserSubComponentLoadableUsingAPI"},i=void 0,r={id:"core/component/load/isUserSubComponentLoadableUsingAPI",title:"isUserSubComponentLoadableUsingAPI",description:"Availability: Component, SubComponent, ComponentExtension",source:"@site/../docs/core/component/load/isUserSubComponentLoadableUsingAPI.md",sourceDirName:"core/component/load",slug:"/core/component/load/isUserSubComponentLoadableUsingAPI",permalink:"/sst-docs/docs/core/component/load/isUserSubComponentLoadableUsingAPI",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/load/isUserSubComponentLoadableUsingAPI.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:168452215e4,frontMatter:{title:"isUserSubComponentLoadableUsingAPI"},sidebar:"core",previous:{title:"getSubComponentSlotInfo",permalink:"/sst-docs/docs/core/component/load/getSubComponentSlotInfo"},next:{title:"isSubComponentLoadableUsingAPI",permalink:"/sst-docs/docs/core/component/load/isSubComponentLoadableUsingAPI"}},l={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Header",id:"header",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"template <class T>\nbool isUserSubComponentLoadableUsingAPI(const std::string& slot_name);\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Availability:"})," Component, SubComponent, ComponentExtension"]}),"\n",(0,t.jsxs)(n.p,{children:["Check to see if the user-loaded SubComponent (i.e., loaded in the simulation configuration file) that was loaded into the named SubComponent slot is loadable using the API specified by the template parameter. Note this only checks slot index 0. If any other index needs to be checked, use the SubComponentSlotInfo and ",(0,t.jsx)(n.a,{href:"isSubComponentLoadableUsingAPI",children:"isSubComponentLoadableUsingAPI"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"slot_name"})," (string) Name of the SubComponent slot"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"returns"})," (bool) Whether the SubComponent is loadable using the template API"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>r});var t=o(96540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);