"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7500],{3206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=n(74848),s=n(28453);const a={title:"setDefaultTimeBase"},l=void 0,r={id:"core/link/setDefaultTimeBase",title:"setDefaultTimeBase",description:"Sets the default time base for the link. This will be the units of send latency if additional latency is added using send() without specifying units.",source:"@site/../docs/core/link/setDefaultTimeBase.md",sourceDirName:"core/link",slug:"/core/link/setDefaultTimeBase",permalink:"/sst-docs/docs/core/link/setDefaultTimeBase",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/link/setDefaultTimeBase.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:169594075e4,frontMatter:{title:"setDefaultTimeBase"},sidebar:"core",previous:{title:"getDefaultTimeBase",permalink:"/sst-docs/docs/core/link/getDefaultTimeBase"},next:{title:"sendUntimedData",permalink:"/sst-docs/docs/core/link/sendUntimedData"}},o={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",children:"void setDefaultTimeBase(TimeConverter* tc);\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Sets the default time base for the link. This will be the units of send latency if additional latency is added using ",(0,i.jsx)(t.code,{children:"send()"})," without specifying units."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Calls to ",(0,i.jsx)(t.a,{href:"../component/time/registerClock",children:(0,i.jsx)(t.code,{children:"registerClock()"})})," and ",(0,i.jsx)(t.a,{href:"../component/time/registerTimeBase",children:(0,i.jsx)(t.code,{children:"registerTimeBase()"})})," can also affect a (sub)component's default time base."]})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"tc"})," (TimeConverter*) A TimeConverter representing the default units of latency to use on the link"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/kingsley/linkControl.cc"',children:"void LinkControl::init(unsigned int phase)\n{\n    Event* ev;\n    NocInitEvent* init_ev;\n    switch ( init_state ) {\n        case 0:\n            /* Handle case 0 */\n        case 1:\n            ev = rtr_link->recvUntimedData();\n            if ( NULL == ev ) break;\n            init_ev = static_cast<NocInitEvent*>(ev);\n            UnitAlgebra flit_size_ua = init_ev->ua_value;\n            flit_size = flit_size_ua.getRoundedValue();\n\n            // Compute the link timebase based on the link bandwidth\n            UnitAlgebra link_clock = link_bw / flit_size_ua;\n\n            // Set the 'output_timing' link's timebase to match bandwidth\n            TimeConverter* tc = getTimeConverter(link_clock);\n            //highlight-next-line\n            output_timing->setDefaultTimeBase(tc);\n        \n        /* Rest of case handling and init() */\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/link.h>\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var i=n(96540);const s={},a=i.createContext(s);function l(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);