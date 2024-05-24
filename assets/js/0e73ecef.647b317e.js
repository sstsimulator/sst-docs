"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8565],{3114:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=t(74848),i=t(28453);const s={title:"serialize_order"},a=void 0,l={id:"core/unitalgebra/serialize_order",title:"serialize_order",description:"This function serializes a UnitAlgebra object. It is not called directly by SST Elements, but enables Elements to easily serialize a UnitAlgebra, as shown in the example below.",source:"@site/../docs/core/unitalgebra/serialize_order.md",sourceDirName:"core/unitalgebra",slug:"/core/unitalgebra/serialize_order",permalink:"/sst-docs/docs/core/unitalgebra/serialize_order",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/unitalgebra/serialize_order.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:168452215e4,frontMatter:{title:"serialize_order"},sidebar:"core",previous:{title:"toStringBestSI",permalink:"/sst-docs/docs/core/unitalgebra/toStringBestSI"},next:{title:"Deprecation history",permalink:"/sst-docs/docs/core/deprecations"}},o={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cpp",children:"void serialize_order(SST::Core::Serialization::serializer& ser) override;\n"})}),"\n",(0,n.jsx)(r.p,{children:"This function serializes a UnitAlgebra object. It is not called directly by SST Elements, but enables Elements to easily serialize a UnitAlgebra, as shown in the example below."}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"val"})," (serializer) Serializer to add object to."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cpp",children:'class exampleEvent : public SST::Event\n{\n    public:\n        // Constructor\n        exampleEvent() : SST::Event(), bytes("0B") { }\n\n        // Example data member\n        UnitAlgebra bytes;\n \n        // Events must provide a serialization function that serializes\n        // all data members of the event.\n        void serialize_order(SST::Core::Serialization::serializer &ser)  override {\n            Event::serialize_order(ser);\n            ser & bytes; // Serialize a UnitAlgebra\n        }\n \n        // Register this event as serializable\n       ImplementSerializable(SST::simpleElementExample::exampleEvent);\n\xe5};\n'})}),"\n",(0,n.jsx)(r.h2,{id:"header",children:"Header"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cpp",children:"#include <sst/core/unitalgebra.h>\n"})})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>l});var n=t(96540);const i={},s=n.createContext(i);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);