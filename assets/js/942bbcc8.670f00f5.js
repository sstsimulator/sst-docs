"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82176],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(96540);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}},51787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"core/iface/overview","title":"SST Library Interfaces","description":"To enable SST Elements to interoperate in a standard way, a couple common interface APIs are declared in the SST Core. One interface, simpleNetwork, defines an interface between a network and an endpoint. A second interface, StandardMem, defines an interface between a memory system and a CPU or other compute-type element. Using these interfaces allows various element libraries to be easily swapped at runtime as well as eliminates inter-element-library dependencies.","source":"@site/../docs/core/iface/overview.md","sourceDirName":"core/iface","slug":"/core/iface/overview","permalink":"/sst-docs/docs/core/iface/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/iface/overview.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1684522150000,"frontMatter":{"title":"SST Library Interfaces"},"sidebar":"core","previous":{"title":"toString","permalink":"/sst-docs/docs/core/events/toString"},"next":{"title":"SST::Interfaces::SimpleNetwork","permalink":"/sst-docs/docs/core/iface/SimpleNetwork/class"}}');var a=n(74848),s=n(28453);const o={title:"SST Library Interfaces"},i=void 0,c={},d=[{value:"SST Standard Events",id:"sst-standard-events",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["To enable SST Elements to interoperate in a standard way, a couple common interface APIs are declared in the SST Core. One interface, ",(0,a.jsx)(t.code,{children:"simpleNetwork"}),", defines an interface between a network and an endpoint. A second interface, ",(0,a.jsx)(t.code,{children:"StandardMem"}),", defines an interface between a memory system and a CPU or other compute-type element. Using these interfaces allows various element libraries to be easily swapped at runtime as well as eliminates inter-element-library dependencies."]}),"\n",(0,a.jsxs)(t.p,{children:["Interfaces in SST are implemented as SubComponents. The library providing an interface provides a SubComponent that inherits from the desired interface. A Component wishing to communicate with that library would then load the interface SubComponent. For example, there are multiple SST Element libraries that provide the SimpleNetwork interface, including merlin, kingsley, and shogun. Each of these libraries has a SubComponent that inherits from ",(0,a.jsx)(t.code,{children:"SST::Interfaces::SimpleNetwork"}),". An endpoint that sits on a network would then create a SubComponent slot that accepts a SubComponent of type ",(0,a.jsx)(t.code,{children:"SST::Interfaces::SimpleNetwork"}),". The endpoint can then be connected to any of the available networks by loading the appropriate network's interface subcomponent into the endpoint's subcomponent slot."]}),"\n",(0,a.jsx)(t.h2,{id:"sst-standard-events",children:"SST Standard Events"}),"\n",(0,a.jsxs)(t.p,{children:['In addition to interfaces, SST Core also defines some standard events. These events are simple and targeted towards development and testing use cases. They are not generally useful for "real" simulations where events are typically more complex. The two events provided by the Core are ',(0,a.jsx)(t.code,{children:"StringEvent"})," and ",(0,a.jsx)(t.code,{children:"TestEvent"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}}}]);