"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7919],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),p=u(n),k=r,g=p["".concat(o,".").concat(k)]||p[k]||d[k]||l;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[p]="string"==typeof t?t:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},93127:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"AutoTesting"},i=void 0,s={unversionedId:"guides/dev/autotest",id:"guides/dev/autotest",title:"AutoTesting",description:'SST employs automatic testing (or "AutoTesting") for both pull-requests prior to allowing merge and on all devel and master branches in nightly regression jobs. Pull-request testing is run on a subset of SST runtime variants and supported platforms whereas the nightly testing covers all supported platforms and several variants (e.g., serial, parallel) on each.',source:"@site/../docs/guides/dev/autotest.md",sourceDirName:"guides/dev",slug:"/guides/dev/autotest",permalink:"/sst-docs/docs/guides/dev/autotest",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/guides/dev/autotest.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"AutoTesting"},sidebar:"guides",previous:{title:"Development",permalink:"/sst-docs/docs/category/development"},next:{title:"SST Test Framework",permalink:"/sst-docs/docs/guides/dev/testing"}},o={},u=[{value:"SST-Core Pull Request Testing",id:"sst-core-pull-request-testing",level:2},{value:"SST-Elements Pull Request Testing",id:"sst-elements-pull-request-testing",level:2},{value:"Local Testing and other Notes",id:"local-testing-and-other-notes",level:2}],m={toc:u},p="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'SST employs automatic testing (or "AutoTesting") for both pull-requests prior to allowing merge and on all devel and master branches in nightly regression jobs. Pull-request testing is run on a subset of SST runtime variants and supported platforms whereas the nightly testing covers all supported platforms and several variants (e.g., serial, parallel) on each. '),(0,r.kt)("p",null,"Terms used in this guide:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"test")," A single configuration file that is run through SST "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"testsuite")," A collection of tests, generally tied to a particular element library"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"test framework")," The python-based framework SST uses to find and run testsuites on Core and any installed element libraries"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"job")," A particular platform, SST execution variant (e.g., threaded), and set of testsuites that is run to determine whether the code is working as expected")),(0,r.kt)("p",null,"SST pull-request testing is integrated with GitHub such that once a pull request has been reviewed appropriately, it automatically runs a number of test jobs. If all jobs pass, the request is approved for merging. SST Core requests require an additional manual merge action while SST Elements requests merge automatically if testing passes. The extra manual step on SST Core exists to allow pull request testing prior to full code review. "),(0,r.kt)("p",null,"Nightly testing is also integrated with GitHub, and controls whether the devel branch is merged into the master branch. When all nightly jobs pass, the AutoTesting infrastructure merges the devel branches of all SST repositories (SST Core, Elements, Macro, Juno, ExternalElementExample, SQE) into their respective master branches."),(0,r.kt)("h2",{id:"sst-core-pull-request-testing"},"SST-Core Pull Request Testing"),(0,r.kt)("p",null,"Pull requests on SST Core first go throught a Clang-format check. This is run using GitHub Actions and runners. Once the request has both been reviewed and the format check passes, the request is automatically enqueued for testing. The results (PASS/FAIL) for each job are published to the pull request as comments. The following jobs are run on each Core pull request. If in doubt on the version of a particular library, use the version specified in the ",(0,r.kt)("a",{parentName:"p",href:"http://sst-simulator.org/SSTPages/SSTElementReleaseMatrix/"},"SST Release Matrix")," for the most recent release. For non-Core repositories, the ",(0,r.kt)("inlineCode",{parentName:"p"},"devel")," branch is used."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"OS")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Compiler")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Python")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"OpenMPI")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Other libraries")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Run Variant")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"SST Repositories")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Test Framework(s)")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rocky 8"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Clang-format v12"),(0,r.kt)("td",{parentName:"tr",align:null},"Format"),(0,r.kt)("td",{parentName:"tr",align:null},"Core"),(0,r.kt)("td",{parentName:"tr",align:null},"sst-core/scripts/clang-format-test.sh")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rocky 8"),(0,r.kt)("td",{parentName:"tr",align:null},"GCC 8.5.0"),(0,r.kt)("td",{parentName:"tr",align:null},"3.6.8"),(0,r.kt)("td",{parentName:"tr",align:null},"4.0.5"),(0,r.kt)("td",{parentName:"tr",align:null},"Pin 3.17"),(0,r.kt)("td",{parentName:"tr",align:null},"Serial"),(0,r.kt)("td",{parentName:"tr",align:null},"Core, Elements, Juno, ExternalElementExample"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sst-test-core -k"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"sst-test-elements -k"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rocky 8"),(0,r.kt)("td",{parentName:"tr",align:null},"GCC 8.5.0"),(0,r.kt)("td",{parentName:"tr",align:null},"3.6.8"),(0,r.kt)("td",{parentName:"tr",align:null},"4.0.5"),(0,r.kt)("td",{parentName:"tr",align:null},"Pin 3.17"),(0,r.kt)("td",{parentName:"tr",align:null},"Threads = 2"),(0,r.kt)("td",{parentName:"tr",align:null},"Core, Elements, Juno, ExternalElementExample"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sst-test-core -k -t 2"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"sst-test-elements -k -t 2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rocky 8"),(0,r.kt)("td",{parentName:"tr",align:null},"GCC 8.5.0"),(0,r.kt)("td",{parentName:"tr",align:null},"3.6.8"),(0,r.kt)("td",{parentName:"tr",align:null},"4.0.5"),(0,r.kt)("td",{parentName:"tr",align:null},"Pin 3.17"),(0,r.kt)("td",{parentName:"tr",align:null},"Ranks = 2"),(0,r.kt)("td",{parentName:"tr",align:null},"Core, Elements, Juno, ExternalElementExample"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sst-test-core -k -r 2"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"sst-test-elements -k -r 2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rocky 8"),(0,r.kt)("td",{parentName:"tr",align:null},"GCC 8.5.0"),(0,r.kt)("td",{parentName:"tr",align:null},"3.6.8"),(0,r.kt)("td",{parentName:"tr",align:null},"4.0.5"),(0,r.kt)("td",{parentName:"tr",align:null},"Pin 3.17"),(0,r.kt)("td",{parentName:"tr",align:null},"Make dist"),(0,r.kt)("td",{parentName:"tr",align:null},"Core, Elements, Juno, ExternalElementExample"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sst-test-core -k"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"sst-test-elements -k"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rocky 8"),(0,r.kt)("td",{parentName:"tr",align:null},"GCC 8.5.9"),(0,r.kt)("td",{parentName:"tr",align:null},"3.6.8"),(0,r.kt)("td",{parentName:"tr",align:null},"4.0.5"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Macro"),(0,r.kt)("td",{parentName:"tr",align:null},"Core, Macro"),(0,r.kt)("td",{parentName:"tr",align:null},"In Macro, ",(0,r.kt)("inlineCode",{parentName:"td"},"make -j4 check")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"make -j4 installcheck"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OSX 14.2"),(0,r.kt)("td",{parentName:"tr",align:null},"Xcode 14"),(0,r.kt)("td",{parentName:"tr",align:null},"3.11"),(0,r.kt)("td",{parentName:"tr",align:null},"4.1.2"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Serial"),(0,r.kt)("td",{parentName:"tr",align:null},"Core, Elements, Juno, ExternalElementExample"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sst-test-core -k"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"sst-test-elements -k"))))),(0,r.kt)("p",null,'Note that the "make dist" job first configures and runs make dist on the repositories under test and then runs the test framework on the generated distributions.'),(0,r.kt)("h2",{id:"sst-elements-pull-request-testing"},"SST-Elements Pull Request Testing"),(0,r.kt)("p",null,"Pull requests on SST Elements are not format checked, as formatting guidelines are left to individual library developers. Like Core, once Element pull requests have been reviewed, they are automatically tested. If the jobs pass, the pull request merges without further intervention. The AutoTester jobs are listed below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"OS")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Compiler")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Python")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"OpenMPI")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Other libraries")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Run Variant")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"SST Repositories")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Test Framework(s)")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rocky 8"),(0,r.kt)("td",{parentName:"tr",align:null},"GCC 8.5.0"),(0,r.kt)("td",{parentName:"tr",align:null},"3.6.8"),(0,r.kt)("td",{parentName:"tr",align:null},"4.0.5"),(0,r.kt)("td",{parentName:"tr",align:null},"Pin 3.17"),(0,r.kt)("td",{parentName:"tr",align:null},"Serial"),(0,r.kt)("td",{parentName:"tr",align:null},"Core, Elements, Juno, ExternalElementExample"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sst-test-core -k"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"sst-test-elements"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rocky 8"),(0,r.kt)("td",{parentName:"tr",align:null},"GCC 8.5.0"),(0,r.kt)("td",{parentName:"tr",align:null},"3.6.8"),(0,r.kt)("td",{parentName:"tr",align:null},"4.0.5"),(0,r.kt)("td",{parentName:"tr",align:null},"Pin 3.17"),(0,r.kt)("td",{parentName:"tr",align:null},"Threads = 2"),(0,r.kt)("td",{parentName:"tr",align:null},"Core, Elements, Juno, ExternalElementExample"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sst-test-core -k -t 2"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"sst-test-elements -t 2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rocky 8"),(0,r.kt)("td",{parentName:"tr",align:null},"GCC 8.5.0"),(0,r.kt)("td",{parentName:"tr",align:null},"3.6.8"),(0,r.kt)("td",{parentName:"tr",align:null},"4.0.5"),(0,r.kt)("td",{parentName:"tr",align:null},"Pin 3.17"),(0,r.kt)("td",{parentName:"tr",align:null},"Ranks = 2"),(0,r.kt)("td",{parentName:"tr",align:null},"Core, Elements, Juno, ExternalElementExample"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sst-test-core -k -r 2"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"sst-test-elements -r 2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rocky 8"),(0,r.kt)("td",{parentName:"tr",align:null},"GCC 8.5.0"),(0,r.kt)("td",{parentName:"tr",align:null},"3.6.8"),(0,r.kt)("td",{parentName:"tr",align:null},"4.0.5"),(0,r.kt)("td",{parentName:"tr",align:null},"Pin 3.17"),(0,r.kt)("td",{parentName:"tr",align:null},"Make dist"),(0,r.kt)("td",{parentName:"tr",align:null},"Core, Elements, Juno, ExternalElementExample"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sst-test-core -k"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"sst-test-elements"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OSX 14.2"),(0,r.kt)("td",{parentName:"tr",align:null},"Xcode 14"),(0,r.kt)("td",{parentName:"tr",align:null},"3.11"),(0,r.kt)("td",{parentName:"tr",align:null},"4.1.2"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Serial"),(0,r.kt)("td",{parentName:"tr",align:null},"Core, Elements, Juno, ExternalElementExample"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sst-test-core -k"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"sst-test-elements"))))),(0,r.kt)("p",null,'See the SST-Core section above for a description of "make dist" testing.'),(0,r.kt)("h2",{id:"local-testing-and-other-notes"},"Local Testing and other Notes"),(0,r.kt)("p",null,"The test environment can be replicated by replicating a build environment above, building and installing the lsited Core and element libraries, and running the test frameworks as listed. See ","[SST Testing]"," for more information about the SST test framework."),(0,r.kt)("p",null,"Additionally, note that any tests or testsuites added to the SST test framework in the branch under test will automatically run as part of the AutoTester. There are no additional steps needed to update testing."))}d.isMDXComponent=!0}}]);