"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=o,f=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},66086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={title:"How to Run SST"},r=void 0,l={unversionedId:"guides/runningSST",id:"guides/runningSST",title:"How to Run SST",description:"Running SST",source:"@site/../docs/guides/runningSST.md",sourceDirName:"guides",slug:"/guides/runningSST",permalink:"/sst-docs/docs/guides/runningSST",draft:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/guides/runningSST.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1684522150,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"How to Run SST"},sidebar:"guides",next:{title:"Concepts",permalink:"/sst-docs/docs/category/concepts"}},s={},p=[{value:"Running SST",id:"running-sst",level:2},{value:"Usage",id:"usage",level:3},{value:"SST Options",id:"sst-options",level:3},{value:"Simulation Examples",id:"simulation-examples",level:2},{value:"SimpleElementExample: Example0",id:"simpleelementexample-example0",level:3},{value:"SimpleElementExample: Example1",id:"simpleelementexample-example1",level:3},{value:"Running Example0 in Parallel",id:"running-example0-in-parallel",level:3}],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"running-sst"},"Running SST"),(0,o.kt)("p",null,"Prior to running SST, ensure that SST Core is built and installed, as well as one or more Element libraries (e.g., sst-elements). Refer to the SST ",(0,o.kt)("a",{parentName:"p",href:"http://sst-simulator.org/SSTPages/SSTMainDocumentation"},"Build and Install Instructions"),"."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The SST command line has three parts: the SST binary, options for the binary, and a Python configuration file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ <SST binary> [SST options] <config file>\n")),(0,o.kt)("h3",{id:"sst-options"},"SST Options"),(0,o.kt)("p",null,'Running SST with the "--help" flag prints a help message that includes all of the supported simulator options. Here\'s a snippet:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ sst --help\nUsage: sst [options] config-file\n  Arguments to options contained in [] are optional\n  Options available to be set in the sdl file (input configuration file) are denoted by (S)\n   - Options set on the command line take precedence over options set in the SDL file\n  Notes on flag options (options that take an optional BOOL value):\n   - BOOL values can be expressed as true/false, yes/no, on/off or 1/0\n   - Program default for flags is false\n   - BOOL values default to true if flag is specified but no value is supplied\n\nInformational Options\n-h --help                             Print help message\n-V --version                          Print SST Release Version\n\nBasic Options (most commonly used)\n-v --verbose=[level]              (S) Verbosity level to determine what information about core runtime is printed\n-n --num-threads=NUM              (S) Number of parallel threads to use per rank\n   --num_threads=NUM              (S) [Deprecated] Number of parallel threads to use per rank (deprecated, please use --num-threads or -n instead)\n   --sdl-file=FILE                    Specify SST Configuration file.  Note: this is most often done by just specifying the file without an option.\n   --model-options=STR                Provide options to the python configuration script.  Additionally, any arguments provided after a final '-- ' will be appended to the model options (or used as\n                                      the model options if --model-options was not specified).\n   --print-timing-info=[BOOL]     (S) Print SST timing information\n   --stop-at=TIME                 (S) Set time at which simulation will end execution\n   --stopAtCycle=TIME             (S) [DEPRECATED] Set time at which simulation will end execution (deprecated, please use --stop-at instead)\n   --exit-after=TIME              (S) Set the maximum wall time after which simulation will end execution.  Time is specified in hours, minutes and seconds, with the following formats supported:\n                                      H:M:S, M:S, S, Hh, Mm, Ss (captital letters are the appropriate numbers for that value, lower case letters represent the units and are required for those\n                                      formats).\n   --stopAfter=TIME               (S) [DEPRECATED] Set the maximum wall time after which simulation will exit (deprecated, please use --exit-after instead\n   --partitioner=PARTITIONER      (S) Select the partitioner to be used. <lib.partitionerName>\n   --heartbeat-period=PERIOD      (S) Set time for heartbeats to be published (these are approximate timings, published by the core, to update on progress)\n   --output-directory=DIR         (S) Directory into which all SST output files should reside\n   --output-prefix-core=STR       (S) set the SST::Output prefix for the core\n\nConfiguration Output Options (generates a file that can be used as input for reproducing a run)\n   --output-config=FILE           (S) File to write SST configuration (in Python format)\n   --output-json=FILE             (S) File to write SST configuration graph (in JSON format)\n   --parallel-output=[BOOL]       (S) Enable parallel output of configuration information.  This option is ignored for single rank jobs.  Must also specify an output type (--output-config and/or\n                                      --output-json).  Note: this will also cause partition info to be output if set to true.\n\nGraph Output Options (for outputting graph information for visualization or inspection)\n   --output-dot=FILE              (S) File to write SST configuration graph (in GraphViz format)\n   --dot-verbosity=INT            (S) Amount of detail to include in the dot graph output\n   --output-partition=[FILE]      (S) File to write SST component partitioning information.  When used without an argument and in conjuction with --output-json or --output-config options, will cause\n                                      paritition information to be added to graph output.\n\nAdvanced Options\n   --timebase=TIMEBASE            (S) Set the base time step of the simulation (default: 1ps)\n   --parallel-load=[MODE]             Enable parallel loading of configuration. This option is ignored for single rank jobs.  Optional mode parameters are NONE, SINGLE and MULTI (default).  If NONE\n                                      is specified, parallel-load is turned off. If SINGLE is specified, the same file will be passed to all MPI ranks.  If MULTI is specified, each MPI rank is\n                                      required to have it's own file to load. Note, not all input formats support both types of file loading.\n   --timeVortex=MODULE            (S) Select TimeVortex implementation <lib.timevortex>\n   --interthread-links=[BOOL]     (S) [EXPERIMENTAL] Set whether or not interthread links should be used\n   --cache-align-mempools=[BOOL]  (S) [EXPERIMENTAL] Set whether mempool allocations are cache aligned\n   --debug-file=FILE              (S) File where debug output will go\n   --lib-path=LIBPATH             (S) Component library path (overwrites default)\n   --add-lib-path=LIBPATH         (S) Component library path (appends to main path)\n\nAdvanced Options - Profiling (EXPERIMENTAL)\n   --enable-profiling=POINTS      (S) Enables default profiling for the specified points.  Argument is a semicolon separated list specifying the points to enable.\n   --profiling-output=FILE        (S) Set output location for profiling data [stdout (default) or a filename]\n\nAdvanced Options - Debug\n   --run-mode=MODE                (S) Set run mode [ init | run | both (default)]\n   --output-undeleted-events=FILE (S) file to write information about all undeleted events at the end of simulation (STDOUT and STDERR can be used to output to console)\n   --force-rank-seq-startup           Force startup phases of simulation to execute one rank at a time for debug purposes\n\nAdvanced Options - Environment Setup/Reporting\n   --print-env                        Print environment variables SST will see\n   --disable-signal-handlers          Disable signal handlers\n   --no-env-config                    Disable SST environment configuration\n")),(0,o.kt)("h2",{id:"simulation-examples"},"Simulation Examples"),(0,o.kt)("p",null,'SST contains an example Element library (simpleElementExample) that is made up of a number of very simple components. A few "example" configurations demonstrate simple wire-up, message sending, and other basic features. Other components provide more detailed and specific examples for how to use features of the SST Core (e.g., how to create, update, and output statistics). To run your own input configuration (e.g., ',(0,o.kt)("em",{parentName:"p"},"myConfig.py"),") or one of the example configurations, pass the name of the configuration file to SST as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ sst myConfig.py \n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ sst $SST_ELEMENTS_HOME/sst/elements/simpleElementExample/tests/example0.py\n")),(0,o.kt)("p",null,"The configuration file specifies the simulation setup (refer to ",(0,o.kt)("a",{parentName:"p",href:"configuration/pythonConfigGuide"},"Python Configuration"),").\nNote that parameters can be passed to the input configuration file (",(0,o.kt)("em",{parentName:"p"},"myConfig.py"),") using either the ",(0,o.kt)("inlineCode",{parentName:"p"},"--model-options")," flag or by appending a ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," followed by the options to the end of the command, as in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ sst --model-options="--param0=X --param1=Y" myConfig.py\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ sst myConfig.py -- --param0=X --param1=Y\n")),(0,o.kt)("h3",{id:"simpleelementexample-example0"},"SimpleElementExample: Example0"),(0,o.kt)("p",null,"Within simpleElementExample, the first example, ",(0,o.kt)("em",{parentName:"p"},"example0"),", demonstrates two components each sending to the other a parameterized number of events (e.g., 50 events). The simulation ends when both components receive the expected events. To run this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ cd $SST_ELEMENTS_HOME/src/sst/elements/simpleElementExample/tests\n$ sst example0.py\n")),(0,o.kt)("p",null,"This should produce output that looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"Simulation is complete, simulated time: 52 ns\n")),(0,o.kt)("h3",{id:"simpleelementexample-example1"},"SimpleElementExample: Example1"),(0,o.kt)("p",null,"A second example in simpleElementExample adds a statistic to each Example0 component above. The statistic counts the size of each event received. Additionally, the component uses a random number generator to randomly vary the event size. To run this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ cd $SST_ELEMENTS_HOME/src/sst/elements/simpleElementExample/tests\n$ sst example1.py\n")),(0,o.kt)("p",null,"This will produce output that looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"}," c0.EventSizeReceived : Accumulator : Sum.u64 = 696; SumSQ.u64 = 14110; Count.u64 = 50; Min.u64 = 1; Max.u64 = 31; \n c1.EventSizeReceived : Accumulator : Sum.u64 = 696; SumSQ.u64 = 14110; Count.u64 = 50; Min.u64 = 1; Max.u64 = 31; \nSimulation is complete, simulated time: 52 ns\n")),(0,o.kt)("p",null,"The output shows that component 'c0' received 50 events (Count) and the total size of all events was 696B (Sum). The smallest event received (Min) was 1B and the largest was 31B (Max).\nBecause the random number generator seed is a hardcoded value in the example1 component, the statistics reported by component 'c1' are identical."),(0,o.kt)("h3",{id:"running-example0-in-parallel"},"Running Example0 in Parallel"),(0,o.kt)("p",null,"SST can be run in parallel using MPI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ mpirun -n 2 sst example0.py\n")),(0,o.kt)("p",null,"Using threads:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ sst -n 2 example0.py\n")),(0,o.kt)("p",null,"Or using both, (although the example here has only two components so SST will warn about not using all four threads/ranks):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ mpirun -n 2 sst -n 2 example0.py\n")))}d.isMDXComponent=!0}}]);