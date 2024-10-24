"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6566],{27344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var s=n(74848),o=n(28453);const a={title:"getMemPoolUsage"},i=void 0,l={id:"core/realtime/getMemPoolUsage",title:"getMemPoolUsage",description:"Returns the size of the mem pools via the bytes argument and the total number of active (currently allocated) entries via the active_entries argument. This function queries only the mem pools present on the current rank. Mem pools are shared across threads on a rank.",source:"@site/../docs/core/realtime/getMemPoolUsage.md",sourceDirName:"core/realtime",slug:"/core/realtime/getMemPoolUsage",permalink:"/sst-docs/docs/core/realtime/getMemPoolUsage",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/realtime/getMemPoolUsage.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1729787241e3,frontMatter:{title:"getMemPoolUsage"},sidebar:"core",previous:{title:"getEndSimCycle",permalink:"/sst-docs/docs/core/realtime/getEndSimCycle"},next:{title:"getNumRanks",permalink:"/sst-docs/docs/core/realtime/getNumRanks"}},r={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function c(e){const t={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"void getMemPoolUsage(int64_t& bytes, int64_t& active_entries);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Returns the size of the mem pools via the ",(0,s.jsx)(t.code,{children:"bytes"})," argument and the total number of active (currently allocated) entries via the ",(0,s.jsx)(t.code,{children:"active_entries"})," argument. This function queries only the mem pools present on the ",(0,s.jsx)(t.em,{children:"current rank"}),". Mem pools are shared across threads on a rank."]}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"bytes"})," (int64_t&) The size of the mem pools on the current rank/thread in bytes."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"active_entries"})," (int64_t&) Number of currently allocated entries in the mem pools"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"returns"})," None. Values are return via the parameters."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"In this example, the action collects local (per-rank) mem pool usage and aggregates it to find total usage."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'void\nHeartbeatRealTimeAction::execute()\n{\n    // Skipping irrelevant code\n    ...\n\n    RankInfo rank = getRank();\n    RankInfo numRanks = getNumRanks();\n    int64_t mempool_size = 0;       // Local size of mempools\n    int64_t active_activities = 0;  // Local active entries in mempools\n\n    int64_t global_sum_mempool_size = 0; // Total size of mempools\n    int64_t global_max_mempool_size = 0; // Largest mempool size across all ranks\n    int64_t global_sum_active_activities = 0; // Total active entries in all mempools\n\n    if ( 0 == rank.thread ) { // Only thread 0 counts since threads are shared\n        //highlight-next-line\n        getMemPoolUsage(mempool_size, active_activities);\n\n        // Compute global values\n        if ( num_ranks.rank > 1 ) {\n#ifdef SST_CONFIG_HAVE_MPI\n            MPI_Allreduce(&mempool_size, &global_max_mempool_size, 1, MPI_INT64_T, MPI_MAX, MPI_COMM_WORLD);\n            MPI_Allreduce(&mempool_size, &global_sum_mempool_size, 1, MPI_INT64_T, MPI_SUM, MPI_COMM_WORLD);\n            MPI_Allreduce(&active_activities, &global_sum_active_activities, 1, MPI_INT64_T, MPI_SUM, MPI_COMM_WORLD);\n#endif\n        } else { /* Serial or thread-only simulation */\n            global_max_mempool_size = mempool_size;\n            global_sum_mempool_size = mempool_size;\n            global_sum_active_activities = active_activities;\n        }\n        \n        // Print values - only rank 0 / thread 0 prints\n        if ( rank.rank == 0 ) {\n            std::string ua_str;\n            ua_str = format_string("%" PRIu64 "B", global_max_mempool_size);\n            UnitAlgebra global_max_mempool_size_ua(ua_str);\n\n            ua_str = format_string("%" PRIu64 "B", global_sum_mempool_size);\n            UnitAlgebra global_sum_mempool_size_ua(ua_str);\n\n            Output sim_output = getSimulationOutput();\n            \n            sim_output.output(\n                "\\tMax mempool usage:               %s\\n", global_max_mempool_size_ua.toStringBestSI().c_str());\n            sim_output.output(\n                "\\tGlobal mempool usage:            %s\\n", global_sum_mempool_size_ua.toStringBestSI().c_str());\n            sim_output.output(\n                "\\tGlobal active activities         %" PRIu64 " activities\\n", global_sum_active_activities);\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"header",children:"Header"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"#include <sst/core/realtimeAction.h>\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var s=n(96540);const o={},a=s.createContext(o);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);