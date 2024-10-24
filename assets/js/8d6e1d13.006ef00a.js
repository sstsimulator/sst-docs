"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[703],{54140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=n(74848),r=n(28453);const s={title:"getOutputDirectory"},c=void 0,i={id:"core/component/output/getOutputDirectory",title:"getOutputDirectory",description:"Availability: Component, SubComponent, ComponentExtension",source:"@site/../docs/core/component/output/getOutputDirectory.md",sourceDirName:"core/component/output",slug:"/core/component/output/getOutputDirectory",permalink:"/sst-docs/docs/core/component/output/getOutputDirectory",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/component/output/getOutputDirectory.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:168452215e4,frontMatter:{title:"getOutputDirectory"},sidebar:"core",previous:{title:"fatal",permalink:"/sst-docs/docs/core/component/output/fatal"},next:{title:"getSimulationOutput",permalink:"/sst-docs/docs/core/component/output/getSimulationOutput"}},u={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function p(e){const t={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cpp",children:"std::string& getOutputDirectory() const;\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"Availability:"})," Component, SubComponent, ComponentExtension"]}),"\n",(0,o.jsx)(t.p,{children:"The user can ask SST to place output in a specific directory. This call returns that directory, enabling (sub)components to place their outputs in the directory as well."}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"returns"})," (string) Directory in which simulation outputs should be placed. An empty string indicates no directory was requested by the user."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cpp",children:'#include <sst/core/component.h>\n\n// Build a filename for this component\'s outputs\nstd::string filename = getName() + "_output.txt";\nstd::string directory = getOutputDirectory();\nif (directory != "") \n    filename = directory + "/" + filename;\n// Result is <OUTPUT_DIR>/<COMPONENT_NAME>_output.txt\n'})}),"\n",(0,o.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h>\n"})})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var o=n(96540);const r={},s=o.createContext(r);function c(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);