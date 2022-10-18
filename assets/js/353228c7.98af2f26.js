"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1318],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var p=2;p<l;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var o=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],a={id:"gui",title:"GUI"},s=void 0,p={unversionedId:"tools/applications/gui",id:"tools/applications/gui",title:"GUI",description:"Requirements",source:"@site/../docs/tools/applications/gui.md",sourceDirName:"tools/applications",slug:"/tools/applications/gui",permalink:"/sst-website/docs/tools/applications/gui",draft:!1,editUrl:"https://github.com/sstsimulator/sst-website/edit/master/docs/../docs/tools/applications/gui.md",tags:[],version:"current",lastUpdatedBy:"Ryan Ledbetter",lastUpdatedAt:1538684864,formattedLastUpdatedAt:"Oct 4, 2018",frontMatter:{id:"gui",title:"GUI"},sidebar:"Tools",previous:{title:"Help Us",permalink:"/sst-website/docs/tools/helpUs"},next:{title:"sst-config",permalink:"/sst-website/docs/tools/commandLine/sst-config"}},u={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Video Tour",id:"video-tour",level:2},{value:"Example",id:"example",level:2},{value:"See Also",id:"see-also",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,"TODO: Link file on GitHub that contains requirements coming soon. Most likely it will be the README in the root directory of the project."),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"This is the SST Model Creation Tool. It will assist you in developing:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"New Components"),(0,l.kt)("li",{parentName:"ul"},"New Subcomponents"),(0,l.kt)("li",{parentName:"ul"},"Project Drivers"),(0,l.kt)("li",{parentName:"ul"},"Graphs from a project driver file.")),(0,l.kt)("p",null,"The GUI will give you a jump start in development. It provides the skeleton and you will need to edit the files. The GUI will automatically open generated files."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Components / Subcomponents",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Fill in the body of function generated by the template"),(0,l.kt)("li",{parentName:"ul"},"Write any functions/handlers you need."),(0,l.kt)("li",{parentName:"ul"},"Add any variables you need."))),(0,l.kt)("li",{parentName:"ul"},"Project Drivers",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Change params if you want something other than the default."),(0,l.kt)("li",{parentName:"ul"},"Finish link setup. The GUI does only writes the code to link to the first port, you'll need to connect it to the second. You'll also likely want to edit the delays as well.")))),(0,l.kt)("p",null,"There is additional help in the GUI itself. Click the Help menu in the upper-left corner, then click on a subject you want to know more about. It will print the information in the bottom panel."),(0,l.kt)("h2",{id:"video-tour"},"Video Tour"),(0,l.kt)("p",null,"TODO: Link to watch the video coming soon."),(0,l.kt)("p",null,"The video tour has a section on the GUI."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 sstGUI.py\n")),(0,l.kt)("h2",{id:"see-also"},"See Also"))}m.isMDXComponent=!0}}]);