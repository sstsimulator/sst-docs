"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9697],{19146:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var o=t(85893),s=t(11151);const c={title:"connect"},r=void 0,i={id:"config/link/connect",title:"connect",description:"\x3c!---",source:"@site/../docs/config/link/connect.md",sourceDirName:"config/link",slug:"/config/link/connect",permalink:"/sst-docs/docs/config/link/connect",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/config/link/connect.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1695940750,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"connect"},sidebar:"config",previous:{title:"Link",permalink:"/sst-docs/docs/config/link/"},next:{title:"setNoCut",permalink:"/sst-docs/docs/config/link/setNoCut"}},l={},a=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Import",id:"import",level:2}];function p(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Connects two ports using the link object."}),"\n",(0,o.jsx)(n.p,{children:"Actual parameters are two tuples representing the information for the ports to be connected. The fields in the tuple are (comp, port, latency) as describe in the parameter description."}),"\n",(0,o.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"port_tuple_1 = (component_handle_1, port_name_1, latency_1=default)\nport_tuple_2 = (component_handle_2, port_name_2, latency_2=default)\nlink_handle.connect( port_tuple_1, port_tuple_2 )\n"})}),"\n",(0,o.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"comp"})," (type: Component or SubComponent) Component or SubComponent object that the port belongs to."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"port"})," (type: string) Port to connect to."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"latency"})," (type: string or UnitAlgebra) Latency of link from the perspective of the corresponding Component/SubComponent sending an event. This is optional, and if not specified, the default latency of the link will be used. If no latency is set, either in the call or as a default, the call will fatal."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import sst\n\ncomponent0 = sst.Component("c0", "simpleElementExample.example0")\ncomponent1 = sst.Component("c1", "simpleElementExample.example0")\n\nlink = sst.Link("component_link")\n# Connect components via their ports which are named \'port\'\n#highlight-next-line\nlink.connect( (component0, "port", "1ns"), (component1, "port", "1ns") )\n'})}),"\n",(0,o.jsx)(n.h2,{id:"import",children:"Import"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"import sst\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var o=t(67294);const s={},c=o.createContext(s);function r(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);