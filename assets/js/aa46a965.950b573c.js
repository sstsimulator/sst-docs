"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1478],{14054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"config/general/setProgramOption","title":"setProgramOption","description":"Sets the specified program option for the simulation. These mirror the options available on the sst command line. Parameters set in the python file will be overwritten by options set on the command line. Use sst \u2013help to get a list of available options.","source":"@site/../docs/config/general/setProgramOption.md","sourceDirName":"config/general","slug":"/config/general/setProgramOption","permalink":"/sst-docs/docs/config/general/setProgramOption","draft":false,"unlisted":false,"editUrl":"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/config/general/setProgramOption.md","tags":[],"version":"current","lastUpdatedBy":"grvosku","lastUpdatedAt":1716583959000,"frontMatter":{"title":"setProgramOption"},"sidebar":"config","previous":{"title":"General","permalink":"/sst-docs/docs/category/general"},"next":{"title":"getProgramOptions","permalink":"/sst-docs/docs/config/general/getProgramOptions"}}');var o=n(74848),r=n(28453);const i={title:"setProgramOption"},a=void 0,l={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Import",id:"import",level:2}];function p(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Sets the specified program option for the simulation. These mirror the options available on the sst command line. Parameters set in the python file will be overwritten by options set on the command line. Use ",(0,o.jsx)(t.code,{children:"sst \u2013help"})," to get a list of available options."]}),"\n",(0,o.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"sst.setProgramOption(option, value)\n"})}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"option"})," (type: string) configuration option to set"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"value"})," (type: varies by option) value to set option to"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"returns"})," none"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'import sst\n\nsst.setProgramOption("exit-after", "100ms")\n'})}),"\n",(0,o.jsx)(t.h2,{id:"import",children:"Import"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"import sst\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(96540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);