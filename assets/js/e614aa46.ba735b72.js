"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9606],{18623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=n(85893),r=n(11151);const a={title:"count"},o=void 0,c={id:"core/params/count",title:"count",description:"Finds the number of elements with a given key. Because duplicate keys are not allowed, this function returns at most one. Note this is the case even if a key exists in both the local and global params.",source:"@site/../docs/core/params/count.md",sourceDirName:"core/params",slug:"/core/params/count",permalink:"/sst-docs/docs/core/params/count",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/params/count.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"count"},sidebar:"core",previous:{title:"clear",permalink:"/sst-docs/docs/core/params/clear"},next:{title:"contains",permalink:"/sst-docs/docs/core/params/contains"}},i={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"size_t count(const std::string& key) const;\n"})}),"\n",(0,s.jsx)(t.p,{children:"Finds the number of elements with a given key. Because duplicate keys are not allowed, this function returns at most one. Note this is the case even if a key exists in both the local and global params."}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"key"})," (std::string) The key to search for"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"returns"})," (size_t) The number of times the key exists in the Params (0 or 1)"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/example0.cc"',children:'// Example Component constructor\nexample0::example0(ComponentId_t id, Params& params) : Component(id) {\n    int key_found = params.count("eventsToSend");\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,s.jsx)(t.p,{children:"The Params header file is included with any SST object that supports Params."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h> // or\n#include <sst/core/params.h> // if not included in base class\n"})})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var s=n(67294);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);