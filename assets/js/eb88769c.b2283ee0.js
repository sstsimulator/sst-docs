"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5843],{25843:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=s(85893),n=s(11151);const r={title:"Community"},o=void 0,a={id:"community/index",title:"Community",description:"Many community SST developers maintain additional element libraries and tools. We've collected a list of them here.",source:"@site/../docs/community/index.md",sourceDirName:"community",slug:"/community/",permalink:"/sst-docs/docs/community/",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/community/index.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1696261951,formattedLastUpdatedAt:"Oct 2, 2023",frontMatter:{title:"Community"}},l={},c=[{value:"Element Libraries",id:"element-libraries",level:2},{value:"BE-SST",id:"be-sst",level:3},{value:"REV",id:"rev",level:3},{value:"SST-STONNE",id:"sst-stonne",level:3},{value:"Tools",id:"tools",level:2},{value:"AHP Graphs for SST",id:"ahp-graphs-for-sst",level:3},{value:"sst-containers",id:"sst-containers",level:3},{value:"sst-dbg",id:"sst-dbg",level:3},{value:"sst-viz",id:"sst-viz",level:3},{value:"Contribute",id:"contribute",level:2}];function d(e){const t={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Many community SST developers maintain additional element libraries and tools. We've collected a list of them here."}),"\n",(0,i.jsx)(t.h2,{id:"element-libraries",children:"Element Libraries"}),"\n",(0,i.jsx)(t.h3,{id:"be-sst",children:(0,i.jsx)(t.a,{href:"https://github.com/SHREC-DOE-UF/BE-SST",title:"BE-SST Github",children:"BE-SST"})}),"\n",(0,i.jsx)(t.p,{children:"BE-SST is a coarse-grained parallel discrete-event simulator, developed at the PSAAP II Center for Compressible Multiphase Turbulence at the University of Florida, used for system-level modeling and simulation of existing and notional HPC systems."}),"\n",(0,i.jsx)(t.h3,{id:"rev",children:(0,i.jsx)(t.a,{href:"https://github.com/tactcomplabs/rev",title:"Rev GitHub",children:"REV"})}),"\n",(0,i.jsx)(t.p,{children:"The Rev SST component is designed to provide cycle-based simulation capabilities of an arbitrary RISC-V core or cores."}),"\n",(0,i.jsx)(t.h3,{id:"sst-stonne",children:(0,i.jsx)(t.a,{href:"https://github.com/stonne-simulator/sst-elements-with-stonne",title:"SST-STONNE GitHub",children:"SST-STONNE"})}),"\n",(0,i.jsx)(t.p,{children:"STONNE is a cycle-level microarchitectural simulator for flexible DNN inference accelerators. STONNE models all the major components required to build  next-generation flexible DNN accelerators like MAERI or SIGMA. All the on-chip components are interconnected by using a three-tier network fabric composed of a Distribution Network(DN), a Multiplier Network (MN), and a Reduce Network(RN), inspired by the taxonomy of on-chip communication flows within DNN accelerators. STONNE has been integrated as a component called sstStonne in SST. sstStonne connects to memHierarchy component to faithfully model the memory hierarchy of the accelerator. The STONNE-MemHierarchy integration allows to run four main operations: CONVOLUTION, GEMM (Dense matrix multiplication), sparse-sparse GEMM operation where the matrices are encoded using a bitmat format, and sparse-dense matrix multiplication (spMM) where the sparse matrix in encoded in CSR format. The simulator is configurable to support different architectural parameters and different memory hiearchy organizations. Basic installation/usage instructions can be found in the additional external elements section of the current SST release documentation."}),"\n",(0,i.jsx)(t.h2,{id:"tools",children:"Tools"}),"\n",(0,i.jsx)(t.h3,{id:"ahp-graphs-for-sst",children:(0,i.jsx)(t.a,{href:"https://github.com/lpsmodsimteam/ahp_graph",children:"AHP Graphs for SST"})}),"\n",(0,i.jsx)(t.p,{children:"Attributed Hierarchical Port Graphs for SST."}),"\n",(0,i.jsx)(t.h3,{id:"sst-containers",children:(0,i.jsx)(t.a,{href:"https://github.com/tactcomplabs/sst-containers",children:"sst-containers"})}),"\n",(0,i.jsx)(t.p,{children:"Build scripts for SST containers."}),"\n",(0,i.jsx)(t.h3,{id:"sst-dbg",children:(0,i.jsx)(t.a,{href:"https://github.com/tactcomplabs/sst-dbg",children:"sst-dbg"})}),"\n",(0,i.jsx)(t.p,{children:"A debug library for SST components."}),"\n",(0,i.jsx)(t.h3,{id:"sst-viz",children:(0,i.jsx)(t.a,{href:"https://github.com/tactcomplabs/sst-viz",children:"sst-viz"})}),"\n",(0,i.jsx)(t.p,{children:"A web-based viz tool."}),"\n",(0,i.jsx)(t.h2,{id:"contribute",children:"Contribute"}),"\n",(0,i.jsxs)(t.p,{children:["Have an SST element, tool, or other resource to share? Fork the sst-docs ",(0,i.jsx)(t.a,{href:"https://github.com/sstsimulator/sst-docs",children:"repository"})," and submit a pull request to add it.\nRequests should:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Include a link to the resource"}),"\n",(0,i.jsx)(t.li,{children:"Include a short description"}),"\n",(0,i.jsx)(t.li,{children:"Be added to the list in alphabetical order by resource name"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>o});var i=s(67294);const n={},r=i.createContext(n);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);