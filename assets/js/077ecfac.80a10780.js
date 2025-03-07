"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25367],{28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}},54585:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"core/component/link/configureLink","title":"configureLink","description":"Availability: Component, SubComponent, ComponentExtension","source":"@site/../docs/core/component/link/configureLink.md","sourceDirName":"core/component/link","slug":"/core/component/link/configureLink","permalink":"/sst-docs/docs/core/component/link/configureLink","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/link/configureLink.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1716583959000,"frontMatter":{"title":"configureLink"},"sidebar":"core","previous":{"title":"Links","permalink":"/sst-docs/docs/category/links"},"next":{"title":"configureSelfLink","permalink":"/sst-docs/docs/core/component/link/configureSelfLink"}}');var r=t(74848),s=t(28453);const o={title:"configureLink"},l=void 0,a={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"Link* configureLink(const std::string& name, TimeConverter* time_base, Event::HandlerBase* handler = nullptr);\nLink* configureLink(const std::string& name, const std::string& time_base, Event::HandlerBase* handler = nullptr);\nLink* configureLink(const std::string& name, const UnitAlgebra& time_base, Event::HandlerBase* handler = nullptr);\nLink* configureLink(const std::string& name, Event::HandlerBase* handler = nullptr);\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Availability:"})," Component, SubComponent, ComponentExtension"]}),"\n",(0,r.jsx)(n.p,{children:"Configure a link. Checks that the named port is connected and optionally registers an event handler to be called on event arrivals. If a handler is not registered, the link must be polled. A time base can also be specified; this can be used in future send calls to add additional send latency. If a time base is not specified, the (Sub)Component's default time base will be used."}),"\n",(0,r.jsx)(n.p,{children:"A return value of nullptr indicates the link could not be configured. A common cause of a nullptr return value is that the port is not connected to a link. (Sub)Components are responsible for detecting and managing any errors."}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"name"})," (string) Name of the port to configure the link on"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"time_base"})," (TimeConverter*, string, UnitAlgebra) The base time units to use with time-related calls on the link."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"handler"})," (Event::HandlerBase*) The event handler to use for event arrivals"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"returns"})," (Link*) A handle to the configured link. A return value of nullptr indicates the link could not be configured."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",metastring:'title="Excerpt from st-elements/src/sst/elements/simpleElementExample/example0.cc"',children:'#include <sst/core/component.h>\n\nexample0::example0(ComponentId_t id, Params& params) : Component(id) \n{\n    /** Other configuration here */\n\n    //higlight-next-line\n    link = configureSelfLink("port", new Event::Handler2<example0, &example0::handleEvent>(this));\n    sst_assert(link, CALL_INFO, -1, "Error in %s: Link configuration failed\\n", getName().c_str());\n\n    /** Other configuration here */\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);