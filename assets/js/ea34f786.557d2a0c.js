"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7],{43893:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=s(74848),r=s(28453);const l={title:"AutoTesting"},d=void 0,i={id:"guides/dev/autotest",title:"AutoTesting",description:'SST employs automatic testing (or "AutoTesting") for both pull-requests prior to allowing merge and on all devel and master branches in nightly regression jobs. Pull-request testing is run on a subset of SST runtime variants and supported platforms whereas the nightly testing covers all supported platforms and several variants (e.g., serial, parallel) on each.',source:"@site/../docs/guides/dev/autotest.md",sourceDirName:"guides/dev",slug:"/guides/dev/autotest",permalink:"/sst-docs/docs/guides/dev/autotest",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/guides/dev/autotest.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1727462588e3,frontMatter:{title:"AutoTesting"},sidebar:"guides",previous:{title:"Development",permalink:"/sst-docs/docs/category/development"},next:{title:"Running SST tests",permalink:"/sst-docs/docs/guides/dev/testing"}},o={},c=[{value:"SST-Core Pull Request Testing",id:"sst-core-pull-request-testing",level:2},{value:"SST-Elements Pull Request Testing",id:"sst-elements-pull-request-testing",level:2},{value:"Local Testing and Other Notes",id:"local-testing-and-other-notes",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:'SST employs automatic testing (or "AutoTesting") for both pull-requests prior to allowing merge and on all devel and master branches in nightly regression jobs. Pull-request testing is run on a subset of SST runtime variants and supported platforms whereas the nightly testing covers all supported platforms and several variants (e.g., serial, parallel) on each.'}),"\n",(0,n.jsx)(t.p,{children:"Terms used in this guide:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"test"})," A single configuration file that is run through SST"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"testsuite"})," A collection of tests, generally tied to a particular element library"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"test framework"})," The Python-based framework SST uses to find and run test suites on Core and any installed element libraries"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"job"})," A particular platform, SST execution variant (e.g., threaded), and set of test suites that is run to determine whether the code is working as expected"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"SST pull-request testing is integrated with GitHub such that once a pull request has been reviewed appropriately, it automatically runs a number of test jobs. If all jobs pass, the request is approved for merging. SST Core requests require an additional manual merge action while SST Elements requests merge automatically if testing passes. The extra manual step on SST Core exists to allow pull request testing prior to full code review."}),"\n",(0,n.jsx)(t.p,{children:"Nightly testing is also integrated with GitHub, and controls whether the devel branch is merged into the master branch. When all nightly jobs pass, the AutoTesting infrastructure merges the devel branches of all SST repositories (SST Core, Elements, Macro, Juno, ExternalElementExample, SQE) into their respective master branches."}),"\n",(0,n.jsx)(t.h2,{id:"sst-core-pull-request-testing",children:"SST-Core Pull Request Testing"}),"\n",(0,n.jsxs)(t.p,{children:["Pull requests on SST Core first go through a Clang-format check. This is run using GitHub Actions and runners. Once the request has both been reviewed and the format check passes, the request is automatically enqueued for testing. The results (PASS/FAIL) for each job are published to the pull request as comments. The following jobs are run on each Core pull request. If in doubt on the version of a particular library, use the version specified in the ",(0,n.jsx)(t.a,{href:"http://sst-simulator.org/SSTPages/SSTElementReleaseMatrix/",children:"SST Release Matrix"})," for the most recent release. For non-Core repositories, the ",(0,n.jsx)(t.code,{children:"devel"})," branch is used."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"OS"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Compiler"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Python"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"OpenMPI"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Other libraries"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Run Variant"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"SST Repositories"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Test Framework(s)"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Rocky 8"}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"Clang-format v12"}),(0,n.jsx)(t.td,{children:"Format"}),(0,n.jsx)(t.td,{children:"Core"}),(0,n.jsx)(t.td,{children:"sst-core/scripts/clang-format-test.sh"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Rocky 8"}),(0,n.jsx)(t.td,{children:"GCC 8.5.0"}),(0,n.jsx)(t.td,{children:"3.6.8"}),(0,n.jsx)(t.td,{children:"4.1.4"}),(0,n.jsx)(t.td,{children:"Pin 3.30"}),(0,n.jsx)(t.td,{children:"Serial"}),(0,n.jsx)(t.td,{children:"Core, Elements, Juno, ExternalElementExample"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"sst-test-core -k"}),", ",(0,n.jsx)(t.code,{children:"sst-test-elements -k"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Rocky 8"}),(0,n.jsx)(t.td,{children:"GCC 8.5.0"}),(0,n.jsx)(t.td,{children:"3.6.8"}),(0,n.jsx)(t.td,{children:"4.1.4"}),(0,n.jsx)(t.td,{children:"Pin 3.30"}),(0,n.jsx)(t.td,{children:"Threads = 2"}),(0,n.jsx)(t.td,{children:"Core, Elements, Juno, ExternalElementExample"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"sst-test-core -k -t 2"}),", ",(0,n.jsx)(t.code,{children:"sst-test-elements -k -t 2"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Rocky 8"}),(0,n.jsx)(t.td,{children:"GCC 8.5.0"}),(0,n.jsx)(t.td,{children:"3.6.8"}),(0,n.jsx)(t.td,{children:"4.1.4"}),(0,n.jsx)(t.td,{children:"Pin 3.30"}),(0,n.jsx)(t.td,{children:"Ranks = 2"}),(0,n.jsx)(t.td,{children:"Core, Elements, Juno, ExternalElementExample"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"sst-test-core -k -r 2"}),", ",(0,n.jsx)(t.code,{children:"sst-test-elements -k -r 2"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Rocky 8"}),(0,n.jsx)(t.td,{children:"GCC 8.5.0"}),(0,n.jsx)(t.td,{children:"3.6.8"}),(0,n.jsx)(t.td,{children:"4.1.4"}),(0,n.jsx)(t.td,{children:"Pin 3.30"}),(0,n.jsx)(t.td,{children:"Make dist"}),(0,n.jsx)(t.td,{children:"Core, Elements, Juno, ExternalElementExample"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"sst-test-core -k"}),", ",(0,n.jsx)(t.code,{children:"sst-test-elements -k"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Rocky 8"}),(0,n.jsx)(t.td,{children:"GCC 8.5.0"}),(0,n.jsx)(t.td,{children:"3.6.8"}),(0,n.jsx)(t.td,{children:"4.1.4"}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"Macro"}),(0,n.jsx)(t.td,{children:"Core, Macro"}),(0,n.jsxs)(t.td,{children:["In Macro, ",(0,n.jsx)(t.code,{children:"make -j4 check"})," and ",(0,n.jsx)(t.code,{children:"make -j4 installcheck"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"OSX 14"}),(0,n.jsx)(t.td,{children:"Xcode 14"}),(0,n.jsx)(t.td,{children:"3.10"}),(0,n.jsx)(t.td,{children:"4.1.4"}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"Serial"}),(0,n.jsx)(t.td,{children:"Core, Elements, Juno, ExternalElementExample"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"sst-test-core -k"}),", ",(0,n.jsx)(t.code,{children:"sst-test-elements -k"})]})]})]})]}),"\n",(0,n.jsx)(t.p,{children:'Note that the "make dist" job first configures and runs make dist on the repositories under test and then runs the test framework on the generated distributions.'}),"\n",(0,n.jsx)(t.h2,{id:"sst-elements-pull-request-testing",children:"SST-Elements Pull Request Testing"}),"\n",(0,n.jsx)(t.p,{children:"Pull requests on SST Elements are not format checked, as formatting guidelines are left to individual library developers. Like Core, once Element pull requests have been reviewed, they are automatically tested. If the jobs pass, the pull request merges without further intervention. The AutoTester jobs are listed below."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"OS"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Compiler"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Python"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"OpenMPI"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Other libraries"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Run Variant"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"SST Repositories"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Test Framework(s)"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Rocky 8"}),(0,n.jsx)(t.td,{children:"GCC 8.5.0"}),(0,n.jsx)(t.td,{children:"3.6.8"}),(0,n.jsx)(t.td,{children:"4.1.4"}),(0,n.jsx)(t.td,{children:"Pin 3.30"}),(0,n.jsx)(t.td,{children:"Serial"}),(0,n.jsx)(t.td,{children:"Core, Elements, Juno, ExternalElementExample"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"sst-test-core -k"}),", ",(0,n.jsx)(t.code,{children:"sst-test-elements"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Rocky 8"}),(0,n.jsx)(t.td,{children:"GCC 8.5.0"}),(0,n.jsx)(t.td,{children:"3.6.8"}),(0,n.jsx)(t.td,{children:"4.1.4"}),(0,n.jsx)(t.td,{children:"Pin 3.30"}),(0,n.jsx)(t.td,{children:"Threads = 2"}),(0,n.jsx)(t.td,{children:"Core, Elements, Juno, ExternalElementExample"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"sst-test-core -k -t 2"}),", ",(0,n.jsx)(t.code,{children:"sst-test-elements -t 2"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Rocky 8"}),(0,n.jsx)(t.td,{children:"GCC 8.5.0"}),(0,n.jsx)(t.td,{children:"3.6.8"}),(0,n.jsx)(t.td,{children:"4.1.4"}),(0,n.jsx)(t.td,{children:"Pin 3.30"}),(0,n.jsx)(t.td,{children:"Ranks = 2"}),(0,n.jsx)(t.td,{children:"Core, Elements, Juno, ExternalElementExample"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"sst-test-core -k -r 2"}),", ",(0,n.jsx)(t.code,{children:"sst-test-elements -r 2"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Rocky 8"}),(0,n.jsx)(t.td,{children:"GCC 8.5.0"}),(0,n.jsx)(t.td,{children:"3.6.8"}),(0,n.jsx)(t.td,{children:"4.1.4"}),(0,n.jsx)(t.td,{children:"Pin 3.30"}),(0,n.jsx)(t.td,{children:"Make dist"}),(0,n.jsx)(t.td,{children:"Core, Elements, Juno, ExternalElementExample"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"sst-test-core -k"}),", ",(0,n.jsx)(t.code,{children:"sst-test-elements"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"OSX 14"}),(0,n.jsx)(t.td,{children:"Xcode 14"}),(0,n.jsx)(t.td,{children:"3.10"}),(0,n.jsx)(t.td,{children:"4.1.4"}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"Serial"}),(0,n.jsx)(t.td,{children:"Core, Elements, Juno, ExternalElementExample"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"sst-test-core -k"}),", ",(0,n.jsx)(t.code,{children:"sst-test-elements"})]})]})]})]}),"\n",(0,n.jsx)(t.p,{children:'See the SST-Core section above for a description of "make dist" testing.'}),"\n",(0,n.jsx)(t.h2,{id:"local-testing-and-other-notes",children:"Local Testing and Other Notes"}),"\n",(0,n.jsxs)(t.p,{children:["The test environment can be replicated by replicating a build environment above, building and installing the listed Core and element libraries, and running the test frameworks as listed. See ",(0,n.jsx)(t.a,{href:"testing",children:"SST Testing"})," for more information about the SST test framework."]}),"\n",(0,n.jsx)(t.p,{children:"Additionally, note that any tests or test suites added to the SST test framework in the branch under test will automatically run as part of the AutoTester. There are no additional steps needed to update testing."})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>i});var n=s(96540);const r={},l=n.createContext(r);function d(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);