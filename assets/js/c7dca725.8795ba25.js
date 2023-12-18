"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7518],{53310:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=t(85893),r=t(11151);const s={title:"getCoordinates"},c=void 0,i={id:"core/component/info/getCoordinates",title:"getCoordinates",description:"Availability: Component, SubComponent, ComponentExtension",source:"@site/../docs/core/component/info/getCoordinates.md",sourceDirName:"core/component/info",slug:"/core/component/info/getCoordinates",permalink:"/sst-docs/docs/core/component/info/getCoordinates",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/info/getCoordinates.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1702928554,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{title:"getCoordinates"},sidebar:"core",previous:{title:"requireLibrary",permalink:"/sst-docs/docs/core/component/info/requireLibrary"},next:{title:"getCurrentPriority",permalink:"/sst-docs/docs/core/component/info/getCurrentPriority"}},a={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function l(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"const std::vector<double>& getCoordinates() const;\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"Availability:"})," Component, SubComponent, ComponentExtension"]}),"\n",(0,o.jsx)(n.p,{children:"Returns the X, Y, Z coordinates of the component. For a SubComponent or ComponentExtension, these are the coordinates of the parent Component. These are typically used for visualization."}),"\n",(0,o.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"returns"})," (",(0,o.jsx)(n.code,{children:"std::vector<double>"}),") A vector containing the X, Y, and Z coordinates of the component."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:'#include <sst/core/component.h>\n\n// Example event handler in a component\nvoid example::handleEvent(SST::Event* ev) {\n    //highlight-next-line\n    std::vector<double> location = getCoordinates();\n    out->output("This component is located at X=%d, Y=%d, Z=%d\\n", location[0], location[1], location[2]);\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var o=t(67294);const r={},s=o.createContext(r);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);