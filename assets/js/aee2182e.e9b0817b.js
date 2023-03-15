"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7586],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=i,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var m=2;m<a;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>m,toc:()=>u});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={title:"QuickStart Motif Guide"},s=void 0,m={unversionedId:"elements/ember/QuickStart",id:"elements/ember/QuickStart",title:"QuickStart Motif Guide",description:"What is an Ember motif?",source:"@site/../docs/elements/ember/QuickStart.md",sourceDirName:"elements/ember",slug:"/elements/ember/QuickStart",permalink:"/sst-docs/docs/elements/ember/QuickStart",draft:!1,editUrl:"https://github.com/sstsimulator/docs/edit/master/docs/../docs/elements/ember/QuickStart.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1675712938,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"QuickStart Motif Guide"},sidebar:"elements",next:{title:"Creating Motifs",permalink:"/sst-docs/docs/elements/ember/CreatingMotifs"}},p={},u=[{value:"What is an Ember motif?",id:"what-is-an-ember-motif",level:2},{value:"Quick Start Guide",id:"quick-start-guide",level:2}],c={toc:u},d="wrapper";function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-an-ember-motif"},"What is an Ember motif?"),(0,a.kt)("p",null,"Ember Motifs are a high-level represenation of a workload's communication patterns. They are used to estimate performance on hardware at scale in SST simulations.\nThis guide provides a directions on how to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Implement a empty motif."),(0,a.kt)("li",{parentName:"ul"},"Create and run motif in a SST simulation.")),(0,a.kt)("p",null,"Implementing and running Ember Motifs requires three different files:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"../../config/"},"Configuration")),(0,a.kt)("p",{parentName:"li"},"A python file that provides information on the hardware to be simulated when running an Ember Motif\nThis directs SST on the available hardware components and how they are set up.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"C++ file"),(0,a.kt)("p",{parentName:"li"},"Decides how the computation is structured and computed.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"C++ header file"),(0,a.kt)("p",{parentName:"li"},"The header file contains primarily naming information"))),(0,a.kt)("h2",{id:"quick-start-guide"},"Quick Start Guide"),(0,a.kt)("p",null,"This guide gives a simple example of how to create and run a simple Motif."),(0,a.kt)("p",null,"First ensure SST-core and SST-elements are properly installed on your machine. For download and installation see ",(0,a.kt)("a",{parentName:"p",href:"http://sst-simulator.org/SSTPages/SSTMainDownloads/"},"SST-Downloads"),"."),(0,a.kt)("p",null,"Navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"sst-elements/src/elements/ember")," inside the sst-elements library.\nFirst, create a new directory to hold our example Motif."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mkdir ExampleMotif")),(0,a.kt)("p",null,"Next, create a ",(0,a.kt)("inlineCode",{parentName:"p"},"ExampleMotif/exampleMotif.h")," file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'    #ifndef _H_EMBER_EXAMPLE\n    #define _H_EMBER_EXAMPLE\n\n    #include "../../mpi/embermpigen.h"\n\n    namespace SST {\n    namespace Ember {\n\n    class ExampleGenerator : public EmberMessagePassingGenerator {\n       public:\n\n        SST_ELI_REGISTER_SUBCOMPONENT_DERIVED(\n          Example,\n          "ember",\n          "ExampleMotif",\n           SST_ELI_ELEMENT_VERSION(1,0,0),\n          "Performs an idle on the node, no traffic can be generated.",\n          SST::Ember::EmberGenerator\n    );\n\n        SST_ELI_DOCUMENT_PARAMS(\n        );\n\n        SST_ELI_DOCUMENT_STATISTICS(\n          { "time-Init", "Time spent in Init event",             "ns", 0},\n          { "time-Finalize", "Time spent in Finalize event",     "ns", 0},\n          { "time-Rank", "Time spent in Rank event",             "ns", 0},\n          { "time-Size", "Time spent in Size event",             "ns", 0},\n          { "time-Send", "Time spent in Recv event",             "ns", 0},\n          { "time-Recv", "Time spent in Recv event",             "ns", 0},\n          { "time-Irecv", "Time spent in Irecv event",           "ns", 0},\n          { "time-Isend", "Time spent in Isend event",           "ns", 0},\n          { "time-Wait", "Time spent in Wait event",             "ns", 0},\n          { "time-Waitall", "Time spent in Waitall event",       "ns", 0},\n          { "time-Waitany", "Time spent in Waitany event",       "ns", 0},\n          { "time-Compute", "Time spent in Compute event",       "ns", 0},\n          { "time-Barrier", "Time spent in Barrier event",       "ns", 0},\n          { "time-Alltoallv", "Time spent in Alltoallv event",   "ns", 0},\n          { "time-Alltoall", "Time spent in Alltoall event",     "ns", 0},\n          { "time-Allreduce", "Time spent in Allreduce event",   "ns", 0},\n          { "time-Reduce", "Time spent in Reduce event",         "ns", 0},\n          { "time-Bcast", "Time spent in Bcast event",           "ns", 0},\n          { "time-Gettime", "Time spent in Gettime event",       "ns", 0},\n          { "time-Commsplit", "Time spent in Commsplit event",   "ns", 0},\n          { "time-Commcreate", "Time spent in Commcreate event", "ns", 0},\n        );\n\n        \n    };\n    }\n    }\n\n    #endif /* _H_EMBER_EXAMPLE */\n')),(0,a.kt)("p",null,"This creates a Motif generator class called ExampleGenerator that inherits from EmberMessagePassingGenerator. The Python code we provide later creates and invokes the generate function.\nThe SST Document Statistics provides tracking for initialization and various MPI function calls."),(0,a.kt)("p",null,"Motifs are executed as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The motif generator is initialized (the contructor)."),(0,a.kt)("li",{parentName:"ol"},"The generate function is invoked and returns either true or false."),(0,a.kt)("li",{parentName:"ol"},"The events on the eventQueue are processed."),(0,a.kt)("li",{parentName:"ol"},"If the generate function in step 2 returned false, return to step 2, otherwise the motif is complete.")),(0,a.kt)("p",null,"Here is a motif that returns without doing any additional work."),(0,a.kt)("p",null,"Then we create a file ",(0,a.kt)("inlineCode",{parentName:"p"},"ExampleMotif/Example.cc")," with the contents:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'    #include <sst_config.h>\n    #include "Example.h"\n\n    using namespace SST:Ember;\n    \n    ExampleGenerator::ExampleGenerator(SST::ComponentId_t id, Params& params) :\n            EmberMessagePassingGenerator(id, params, "Null" )\n    {\n    }\n\n    bool ExampleGenerator::generate( std::queue<EmberEvent*>& evQ)\n    { \n        // Code here is repeated until true is returned. \n        return true;\n    }\n')),(0,a.kt)("p",null,"Motifs are intended to be ran as a 'job submission'.\nThe generate function models an entire iteration of an application. The event queue allows the motif to mix compute and MPI operations in every iteration."),(0,a.kt)("p",null,"The C++ file loads the SST:Ember namespace giving it access to other Motifs and EmberEvents.\nEach Motif generator has an constructor and generate function. "),(0,a.kt)("p",null,"Then we add the ",(0,a.kt)("inlineCode",{parentName:"p"},".cc")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".h")," file to ",(0,a.kt)("inlineCode",{parentName:"p"},"Makefile.am")),(0,a.kt)("p",null,"i.e."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"     embermemoryev.h \\\n     ExampleMotif/example.h \\\n     ExampleMotif/example.cc \\\n     libs/emberLib.h \\\n")),(0,a.kt)("p",null,"Finally, a python file, ",(0,a.kt)("inlineCode",{parentName:"p"},"example.py"),", needs to be created:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'    from email.mime import base\n    import sst\n    from sst.merlin.base import *\n    from sst.merlin.endpoint import *\n    from sst.merlin.interface import *\n    from sst.merlin.topology import *\n\n    from sst.ember import *\n\n    def example():\n        PlatformDefinition.setCurrentPlatform("firefly-defaults")\n\n        ### Setup the topology\n        topo = topoDragonFly()\n        topo.hosts_per_router = 2\n        topo.routers_per_group = 4\n        topo.intergroup_links = 2\n        topo.num_groups = 4\n        topo.algorithm = ["minimal","adaptive-local"]\n\n        # Set up the routers\n        router = hr_router()\n        router.link_bw = "4GB/s"\n        router.flit_size = "8B"\n        router.xbar_bw = "6GB/s"\n        router.input_latency = "20ns"\n        router.output_latency = "20ns"\n        router.input_buf_size = "4kB"\n        router.output_buf_size = "4kB"\n        router.num_vns = 2\n        router.xbar_arb = "merlin.xbar_arb_lru"\n\n        topo.router = router\n        topo.link_latency = "20ns"\n\n        ### set up the endpoint\n        networkif = ReorderLinkControl()\n        networkif.link_bw = "4GB/s"\n        networkif.input_buf_size = "1kB"\n        networkif.output_buf_size = "1kB"\n\n        ep = EmberMPIJob(0,topo.getNumNodes())\n        ep.network_interface = networkif\n        ep.addMotif("Example")\n        ep.nic.nic2host_lat= "100ns"\n\n        system = System()\n        system.setTopology(topo)\n        system.allocateNodes(ep,"linear")\n\n        system.build()\n\n    if __name__ == "__main__":\n        example()\n')),(0,a.kt)("p",null,'This follows common python syntax.\nThe hardware variables (topology, router and network interface) are created through assignment of a constructor\nThe fields of the variables are accessed using a dot operator.\nTopology, router, and network interface variables need to be created for a simulation. More detailed descriptions of configuration options is in RunningMotifs.md.\nNext an endpoint is created and given the motif to be used using a ep.addMotif("MotifName") call\nNote multiple motifs can be added the same endpoint. The intended use for each motif to simulate an entire application. The event queue is used to simulate MPI events and computational workloads. Adding multiple motifs is useful for simulating workflows of a series of applications. '),(0,a.kt)("p",null,"Finally, a system variable is created and 'built'"),(0,a.kt)("p",null,"Remake SST-elements."),(0,a.kt)("p",null,"To run the python script"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sst example.py\n")))}f.isMDXComponent=!0}}]);