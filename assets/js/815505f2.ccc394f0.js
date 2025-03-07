"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17313],{4700:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"guides/files/basics_makefile","title":"Basics: Makefile","description":"This page has not been reviewed recently to ensure that it is up-to-date with the latest SST specification. It is possible the information is out of date.","source":"@site/../docs/guides/files/basics_makefile.md","sourceDirName":"guides/files","slug":"/guides/files/basics_makefile","permalink":"/sst-docs/docs/guides/files/basics_makefile","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/guides/files/basics_makefile.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1702928554000,"frontMatter":{"id":"basics_makefile","title":"Basics: Makefile"}}');var i=n(74848),l=n(28453);const a={id:"basics_makefile",title:"Basics: Makefile"},o=void 0,r={},c=[{value:"Remarks",id:"remarks",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Overview",id:"overview",level:3},{value:"Breakdown",id:"breakdown",level:3},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"See Also",id:"see-also",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsx)(s.p,{children:"This page has not been reviewed recently to ensure that it is up-to-date with the latest SST specification. It is possible the information is out of date."})}),"\n",(0,i.jsx)(s.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsx)(s.p,{children:"This is intended only to give a general idea of what is required in a makefile for an SST Element. This is not meant to be an introduction to makefiles in general."}),"\n",(0,i.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(s.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(s.p,{children:"Content you need to replace appears in double brackets - for example: [[some label]]."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-makefile",children:"CXX=$(shell sst-config --CXX)\nCXXFLAGS=$(shell sst-config --ELEMENT_CXXFLAGS)\nLDFLAGS=$(shell sst-config --ELEMENT_LDFLAGS)\n\nall: [[library name]].so install\n\n[[library name]].so: [[space separated list of C++ files]]\n\t$(CXX) $(CXXFLAGS) $(LDFLAGS) -o $@ $^\n\ninstall:\n\tsst-register [[element name]] [[element name]]_LIBDIR=$(CURDIR)\n\nclean:\n\trm -f *.o tests/*.dot tests/*.jpg [[library name]].so\n\n"})}),"\n",(0,i.jsx)(s.h3,{id:"breakdown",children:"Breakdown"}),"\n",(0,i.jsx)(s.p,{children:"The top line gets the compiler and flags that are used to compile SST and its elements"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-makefile",children:"CXX=$(shell sst-config --CXX)\nCXXFLAGS=$(shell sst-config --ELEMENT_CXXFLAGS)\nLDFLAGS=$(shell sst-config --ELEMENT_LDFLAGS)\n"})}),"\n",(0,i.jsx)(s.p,{children:"Compile and register the element with SST."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-makefile",children:"all: [[library name]].so install\n\n[[library name]].so: [[space separated list of C++ files]]\n\t$(CXX) $(CXXFLAGS) $(LDFLAGS) -o $@ $^\n\ninstall:\n\tsst-register [[element name]] [[element name]]_LIBDIR=$(CURDIR)\n"})}),"\n",(0,i.jsx)(s.p,{children:"The last couple of lines are tasks to do before doing a clean compile."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-makefile",children:"clean:\n\trm -f *.o tests/*.dot tests/*.jpg [[library name]].so\n"})}),"\n",(0,i.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(s.h3,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-makefile",children:"CXX=$(shell sst-config --CXX)\nCXXFLAGS=$(shell sst-config --ELEMENT_CXXFLAGS)\nLDFLAGS=$(shell sst-config --ELEMENT_LDFLAGS)\n\nall: libexC_carWash.so install\n\nlibexC_carWash.so: carWash.cc carGenerator.cc bay.cc\n\t$(CXX) $(CXXFLAGS) $(LDFLAGS) -o $@ $^\n\ninstall:\n\tsst-register exC_carWash exC_carWash_LIBDIR=$(CURDIR)\n\nclean:\n\trm -f *.o tests/*.dot tests/*.jpg libexC_carWash.so\n"})}),"\n",(0,i.jsx)(s.h2,{id:"see-also",children:"See Also"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/sst-docs/docs/tools/commandLine/sst-config",children:"sst-config"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/sst-docs/docs/tools/commandLine/sst-register",children:"sst-register"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>o});var t=n(96540);const i={},l=t.createContext(i);function a(e){const s=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);