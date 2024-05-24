"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5283],{96435:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var s=t(74848),r=t(28453);const a={title:"constructor"},l=void 0,i={id:"core/unitalgebra/constructor",title:"constructor",description:"Create a new UnitAlgebra. The string passed to the constructor should include both the value and the units, for example, 3s. A space between the value and units is optional. If the default constructor is used, UnitAlgebra::init() must be called to initialize the object.",source:"@site/../docs/core/unitalgebra/constructor.md",sourceDirName:"core/unitalgebra",slug:"/core/unitalgebra/constructor",permalink:"/sst-docs/docs/core/unitalgebra/constructor",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/unitalgebra/constructor.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1716583959e3,frontMatter:{title:"constructor"},sidebar:"core",previous:{title:"SST::UnitAlgebra",permalink:"/sst-docs/docs/core/unitalgebra/class"},next:{title:"destructor",permalink:"/sst-docs/docs/core/unitalgebra/destructor"}},c={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Examples of valid format strings",id:"examples-of-valid-format-strings",level:3},{value:"Code Example",id:"code-example",level:3},{value:"Header",id:"header",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"UnitAlgebra(const std::string& val);\nUnitAlgebra();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Create a new UnitAlgebra. The string passed to the constructor should include both the value and the units, for example, ",(0,s.jsx)(n.code,{children:"3s"}),". A space between the value and units is optional. If the default constructor is used, ",(0,s.jsx)(n.a,{href:"init",children:"UnitAlgebra::init()"})," must be called to initialize the object."]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"val"})," (std::string) value. The format must be ",(0,s.jsx)(n.code,{children:"<NUMBER>?<UNITS>"})," where:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"NUMBER      := (-)?[0-9]+(.[0-9]+)?\nUNITS       := UNITGROUP(/UNITGROUP)\nUNITGROUP   := UNIT(-UNIT)*\nUNIT        := (SIPREFIX)?(BASEUNIT|COMPUNIT)\nSIPREFIX    := {a,f,p,n,u,m,[kKMGTPE]i?}\nBASEUNIT    := {s,B,b,events}\nCOMPUNIT    := {Hz,hz,Bps,bps,event}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.h3,{id:"examples-of-valid-format-strings",children:"Examples of valid format strings"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"1s\n3MHz\n-3ms\n24KiB\n5.5GHz\n8b/s\n8bps\n3 events\n90 Thz\n24 s/B\n"})}),"\n",(0,s.jsx)(n.h3,{id:"code-example",children:"Code Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'\nSST::UnitAlgebra* num0 = new UnitAlgebra("200MHz");\nSST::UnitAlgebra* num1 = new UnitAlgebra("20KB/s");\n\n// Use default constructor\nSST::UnitAlgebra* num2 = new UnitAlgebra();\nnum2->init("1us");\n\n// The constructor can be invoked directly from params.find()\nUnitAlgebra num3 = params.find<UnitAlgebra>("clock_frequency", "3GHz");\n'})}),"\n",(0,s.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/unitalgebra.h>\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var s=t(96540);const r={},a=s.createContext(r);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);