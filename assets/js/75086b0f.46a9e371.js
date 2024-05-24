"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5337],{32143:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=r(74848),t=r(28453);const i={title:"serialize_order"},a=void 0,o={id:"core/events/serialize_order",title:"serialize_order",description:"This function is used by SST when events need to be serialized for transmission over non-local Links.",source:"@site/../docs/core/events/serialize_order.md",sourceDirName:"core/events",slug:"/core/events/serialize_order",permalink:"/sst-docs/docs/core/events/serialize_order",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/events/serialize_order.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:168452215e4,frontMatter:{title:"serialize_order"},sidebar:"core",previous:{title:"destructor",permalink:"/sst-docs/docs/core/events/destructor"},next:{title:"clone",permalink:"/sst-docs/docs/core/events/clone"}},l={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function c(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"virtual void serialize_order(SST::Core::Serialization::serializer& ser) override;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This function is used by SST when events need to be serialized for transmission over non-local Links.\nEvents that are serializable ",(0,s.jsx)(n.em,{children:"must"})," implement this function. The function should first call\n",(0,s.jsx)(n.code,{children:"Event::serialize_order(ser)"})," and then append any class members that need to be serialized (generally, all of them)\nto the serializer using the overloaded ",(0,s.jsx)(n.code,{children:"&"})," operation. SST's serializer can serialize POD types, pointers (but not the data pointed to), and many standard containers (e.g., std::vector). Other types may need to be manually serialized."]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ser"})," (SST::Core::Serialization::serializer) serializer to add the event class members to"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"/* simpleElementExample/basicEvent.h */\nclass basicEvent : public SST::Event\n{\npublic:\n    // Constructor\n    basicEvent() : SST::Event(), last(false) { }\n    \n    // Example data members\n    std::vector<char> payload;\n    bool last;\n\n    // Events must provide a serialization function that serializes\n    // all data members of the event\n    //highlight-start\n    void serialize_order(SST::Core::Serialization::serializer &ser)  override {\n        Event::serialize_order(ser);\n        ser & payload;\n        ser & last;\n    }\n    //highlight-end\n\n    // Register this event as serializable\n    ImplementSerializable(SST::simpleElementExample::basicEvent);\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/component.h>\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var s=r(96540);const t={},i=s.createContext(t);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);