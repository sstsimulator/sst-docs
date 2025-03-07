"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53673],{28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>c});var n=s(96540);const r={},o=n.createContext(r);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}},84369:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"core/params/count","title":"count","description":"Finds the number of elements with a given key. Because duplicate keys are not allowed, this function returns at most one. Note this is the case even if a key exists in both the local and global params.","source":"@site/../docs/core/params/count.md","sourceDirName":"core/params","slug":"/core/params/count","permalink":"/sst-docs/docs/core/params/count","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/params/count.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1684522150000,"frontMatter":{"title":"count"},"sidebar":"core","previous":{"title":"clear","permalink":"/sst-docs/docs/core/params/clear"},"next":{"title":"contains","permalink":"/sst-docs/docs/core/params/contains"}}');var r=s(74848),o=s(28453);const a={title:"count"},c=void 0,i={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"size_t count(const std::string& key) const;\n"})}),"\n",(0,r.jsx)(t.p,{children:"Finds the number of elements with a given key. Because duplicate keys are not allowed, this function returns at most one. Note this is the case even if a key exists in both the local and global params."}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"key"})," (std::string) The key to search for"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"returns"})," (size_t) The number of times the key exists in the Params (0 or 1)"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/example0.cc"',children:'// Example Component constructor\nexample0::example0(ComponentId_t id, Params& params) : Component(id) {\n    int key_found = params.count("eventsToSend");\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,r.jsx)(t.p,{children:"The Params header file is included with any SST object that supports Params."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h> // or\n#include <sst/core/params.h> // if not included in base class\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);