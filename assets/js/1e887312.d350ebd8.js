"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8982],{34149:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var s=t(74848),o=t(28453);const i=t.p+"assets/images/pythonconfig_guide_ex0_graph_basic-b20245e2e632915a707561acb0e0c281.png",a=t.p+"assets/images/pythonconfig_guide_ex0_graph-c40286ad588b28bcb1ec2d575cfb9072.png",l={title:"Configuring your first simulation"},c=void 0,r={id:"guides/configuration/configTutorial",title:"Configuring your first simulation",description:"This page steps through how to configure a simulation. Prior to trying this tutorial, make sure you have SST installed (both sst-core and sst-elements). You'll also need to be comfortable writing Python scripts, using a text file editor, and using a command line interface.",source:"@site/../docs/guides/configuration/configTutorial.mdx",sourceDirName:"guides/configuration",slug:"/guides/configuration/configTutorial",permalink:"/sst-docs/docs/guides/configuration/configTutorial",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/guides/configuration/configTutorial.mdx",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1736199966e3,frontMatter:{title:"Configuring your first simulation"},sidebar:"guides",previous:{title:"Configuring SST",permalink:"/sst-docs/docs/category/configuring-sst"},next:{title:"Simulation configuration file",permalink:"/sst-docs/docs/guides/configuration/pythonConfigGuide"}},h={},d=[{value:"Components, events, links, ports, what?!",id:"components-events-links-ports-what",level:2},{value:"Components",id:"components",level:3},{value:"Events",id:"events",level:3},{value:"Links",id:"links",level:3},{value:"Ports",id:"ports",level:3},{value:"Putting it together: the SST Graph",id:"putting-it-together-the-sst-graph",level:3},{value:"Step 1: Find out information about the components you want to simulate",id:"step-1-find-out-information-about-the-components-you-want-to-simulate",level:2},{value:"Step 2: Create a file and import the SST module",id:"step-2-create-a-file-and-import-the-sst-module",level:2},{value:"Step 3: Define the components",id:"step-3-define-the-components",level:2},{value:"Step 4: Parameterize the components",id:"step-4-parameterize-the-components",level:2},{value:"Step 5: Connect the components",id:"step-5-connect-the-components",level:2},{value:"Step 6: Run the simulation",id:"step-6-run-the-simulation",level:2},{value:"Next steps",id:"next-steps",level:2}];function m(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This page steps through how to configure a simulation. Prior to trying this tutorial, make sure you have SST installed (both sst-core and sst-elements). You'll also need to be comfortable writing Python scripts, using a text file editor, and using a command line interface."}),"\n",(0,s.jsx)(n.h2,{id:"components-events-links-ports-what",children:"Components, events, links, ports, what?!"}),"\n",(0,s.jsx)(n.p,{children:"Before configuring a simulation, let's review the basic SST building blocks."}),"\n",(0,s.jsx)(n.h3,{id:"components",children:"Components"}),"\n",(0,s.jsxs)(n.p,{children:["A component is a model. While most SST components relate to computer systems (e.g., a processor, network router, or DRAM), a component can be anything. The ",(0,s.jsx)(n.code,{children:"simpleSimulation"})," model in sst-elements, for example, models a car wash. By combining different components (e.g., a processor, cache, and DRAM) in a simulation, we can define a system. When SST runs in parallel, it divides the simulation at a component granularity across different threads and/or ranks."]}),"\n",(0,s.jsx)(n.h3,{id:"events",children:"Events"}),"\n",(0,s.jsx)(n.p,{children:"Components interact with each other by sending Events. What an event contains is up to the components that define it. Events are sent over links (up next)."}),"\n",(0,s.jsx)(n.h3,{id:"links",children:"Links"}),"\n",(0,s.jsx)(n.p,{children:"Links define connectivity between components. Two components can directly exchange events if and only if they have a link between them. This restriction fundamentally enables SST's parallelization mechanisms."}),"\n",(0,s.jsx)(n.h3,{id:"ports",children:"Ports"}),"\n",(0,s.jsx)(n.p,{children:"Ports are defined by components and are attachment points for Links. Ports have names so that components can have multiple ports and differentiate between them. For example, a cache might have two ports, one to an upper level cache and one to a lower level cache."}),"\n",(0,s.jsx)(n.h3,{id:"putting-it-together-the-sst-graph",children:"Putting it together: the SST Graph"}),"\n",(0,s.jsx)(n.p,{children:"The SST configuration file describes the system to be simulated in terms of components and links between those components' ports. If this sounds a little like a graph, that's because it is! SST simulations can be represented as a graph where Components (models) are vertices and Links are edges. In this tutorial, we're going to build a configuration file for the graph shown below."}),"\n","\n",(0,s.jsx)("img",{src:i,alt:"The example graph to simulate",style:{maxWidth:"300px"}}),"\n",(0,s.jsxs)(n.p,{children:["This simulation has two components which send each other messages via the link between them. We will use the ",(0,s.jsx)(n.code,{children:"example0"})," component from ",(0,s.jsx)(n.a,{href:"/sst-docs/docs/elements/intro",children:"sst-elements'"})," ",(0,s.jsxs)(n.a,{href:"/sst-docs/docs/elements/simpleElementExample/intro",children:[(0,s.jsx)(n.code,{children:"simpleElementExample"})," library"]}),". Each ",(0,s.jsx)(n.code,{children:"example0"})," component sends a certain number of events, controlled by a parameter, to the other component and then ends the simulation. The events have a field specifying a size in bytes which can also be changed via a parameter."]}),"\n",(0,s.jsx)(n.h2,{id:"step-1-find-out-information-about-the-components-you-want-to-simulate",children:"Step 1: Find out information about the components you want to simulate"}),"\n",(0,s.jsxs)(n.p,{children:["In the configuration file, we'll need to tell SST which components we want and parameterize the components. Then we'll need to connect the components by creating Links between each component's ports. You can use SST's ",(0,s.jsx)(n.code,{children:"sst-info"})," tool to find out information about a component, such as the names of its ports and what parameters can be set."]}),"\n",(0,s.jsxs)(n.p,{children:["SST uses a ",(0,s.jsx)(n.code,{children:"library.component_name"})," syntax to uniquely identify component types so the full type for ",(0,s.jsx)(n.code,{children:"example0"})," is ",(0,s.jsx)(n.code,{children:"simpleElementExample.example0"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'$ sst-info simpleElementExample.example0\n\nPROCESSED 1 .so (SST ELEMENT) FILES FOUND IN DIRECTORY(s) /Users/user1/sst/build/sst-core/lib/sstcore:/Users/user1/sst/build/sst-elements/lib/sst-elements-library:/Users/user1/sst/sst-elements/src/sst/elements/osseous\nFiltering output on Element = "simpleElementExample.example0"\n================================================================================\nELEMENT LIBRARY 0 = simpleElementExample ()\nComponents (8 total)\n   Component 6: example0\n      Description: A component that sends a specific number of events and then ends simulation\n      ELI version: 0.9.0\n      Compiled on: Jan 22 2024 09:27:15, using file: ./example0.h\n      Category: PROCESSOR COMPONENT\n      Parameters (2 total)\n         eventsToSend: How many events this component should send.  [<required>]\n         eventSize: Payload size for each event, in bytes.  [16]\n      Ports (1 total)\n         port: Link to another component\n      SubComponent Slots (0 total)\n      Statistics (0 total)\n      Profile Points (0 total)\n      Attributes (0 total)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This shows that ",(0,s.jsx)(n.code,{children:"simpleElementExample.example0"})," has two parameters, ",(0,s.jsx)(n.code,{children:"eventsToSend"})," and ",(0,s.jsx)(n.code,{children:"eventSize"}),". We will need to set ",(0,s.jsx)(n.code,{children:"eventsToSend"})," since it is ",(0,s.jsx)(n.code,{children:"[<required]"}),", but eventSize has a default of ",(0,s.jsx)(n.code,{children:"16"})," so we only need to set that if we want a different value. Likewise, when we create a link between our two instances of ",(0,s.jsx)(n.code,{children:"simpleElementExample.example0"}),", we'll connect it to the port named ",(0,s.jsx)(n.code,{children:"port"})," on each component. Given this information, here's a more detailed picture of the configuration we'll create. SST requires each component to have a unique name so we'll use ",(0,s.jsx)(n.code,{children:"c0"})," and ",(0,s.jsx)(n.code,{children:"c1"}),". These names are used by SST when generating statistics and printing output, among other functions."]}),"\n","\n",(0,s.jsx)("img",{src:a,alt:"An example graph to simulate showing ports and names",style:{maxWidth:"300px"}}),"\n",(0,s.jsx)(n.h2,{id:"step-2-create-a-file-and-import-the-sst-module",children:"Step 2: Create a file and import the SST module"}),"\n",(0,s.jsxs)(n.p,{children:["Now that we've defined what to simulate, we need to create an input file. We will use Python. Create a file called ",(0,s.jsx)(n.code,{children:"tutorial.py"})," and then add an import statement to import the ",(0,s.jsx)(n.code,{children:"sst"})," module. This will let us use the SST configuration APIs."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:"title=\"Use the editor of your choice, for example 'vi', to open a new file\"",children:"$ vi tutorial.py\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",metastring:'title="tutorial.py"',children:"import sst\n"})}),"\n",(0,s.jsx)(n.h2,{id:"step-3-define-the-components",children:"Step 3: Define the components"}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.a,{href:"/sst-docs/docs/config/component/",children:"sst.Component()"})," function to create the components, providing the name of the component and its type. This call returns an object that we can use in the rest of the script to refer to the component. Here, component ",(0,s.jsx)(n.code,{children:"c0"})," maps to object ",(0,s.jsx)(n.code,{children:"component0"})," and ",(0,s.jsx)(n.code,{children:"c1"})," maps to object ",(0,s.jsx)(n.code,{children:"component1"}),". SST uses a ",(0,s.jsx)(n.code,{children:"library_name.component_type"})," syntax to identify component types, so both components are of type ",(0,s.jsx)(n.code,{children:"simpleElementExample.example0"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",metastring:'title="tutorial.py"',children:'import sst\n\n# highlight-start\ncomponent0 = sst.Component("c0", "simpleElementExample.example0")\ncomponent1 = sst.Component("c1", "simpleElementExample.example0")\n# highlight-end\n'})}),"\n",(0,s.jsx)(n.h2,{id:"step-4-parameterize-the-components",children:"Step 4: Parameterize the components"}),"\n",(0,s.jsxs)(n.p,{children:["Set the parameters on each component as shown in the figure above. There are a couple ways to do this, we'll do it by passing a dictionary of ",(0,s.jsx)(n.code,{children:"parameter : value"})," pairs to each component we created in step 1. Because we're setting the same parameters on each component, we'll pass the same dictionary to both."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",metastring:'title="tutorial.py"',children:'import sst\n\ncomponent0 = sst.Component("c0", "simpleElementExample.example0")\ncomponent1 = sst.Component("c1", "simpleElementExample.example0")\n\n# highlight-start\nparam_set = { "eventsToSend" : 20, "eventSize" : 32 }\ncomponent0.addParams(param_set)\ncomponent1.addParams(param_set)\n# highlight-end\n'})}),"\n",(0,s.jsx)(n.h2,{id:"step-5-connect-the-components",children:"Step 5: Connect the components"}),"\n",(0,s.jsxs)(n.p,{children:["The last thing we need to do is connect the components so that when ",(0,s.jsx)(n.code,{children:"c0"})," sends an event, it goes to ",(0,s.jsx)(n.code,{children:"c1"})," and vice-versa. To do this, we use SST's ",(0,s.jsx)(n.a,{href:"/sst-docs/docs/config/link/",children:"Link"})," and ",(0,s.jsx)(n.a,{href:"/sst-docs/docs/config/link/connect",children:"connect"})," calls. Before we get to that though, we need to make one more decision: what the latency between the components should be. A few things to consider:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The latency will be the time it takes between when c0 sends an event and c1 receives it and vice-versa. Components can add additional latency when sending events but they cannot reduce the latency beyond what the configuration script defines."}),"\n",(0,s.jsx)(n.li,{children:"The latency does not need to be symmetric - we can use a different latency when sending from c0 to c1 than when sending from c1 to c0."}),"\n",(0,s.jsx)(n.li,{children:"The latency cannot be 0. This is a foundational requirement as SST uses the latency for identifying synchronization intervals in parallel simulations."}),"\n",(0,s.jsx)(n.li,{children:"By default, SST counts time in units of picoseconds. If we use a smaller latency, we'll need to reduce that unit so that we can count at the finer granularity. If we have a much larger (e.g., hours) latency, we will want to increase the unit so that SST's time counter (a 64-bit unsigned integer) doesn't roll over."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'Given those considerations, in this example we\'ll set a symmetric latency of one nanosecond ("1ns") between the components. Create a link with a unique name, and connect each side of the link to one of the components using a tuple that includes the component instance, name of the port to connect to, and the latency from that component to the other side of the link.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",metastring:'title="tutorial.py"',children:'import sst\n\ncomponent0 = sst.Component("c0", "simpleElementExample.example0")\ncomponent1 = sst.Component("c1", "simpleElementExample.example0")\n\nparam_set = { "eventsToSend" : 20, "eventSize" : 32 }\ncomponent0.addParams(param_set)\ncomponent1.addParams(param_set)\n\n# highlight-start\nlink0 = sst.Link("link_c0_c1")\nlink0.connect( (component0, "port", "1ns"), (component1, "port", "1ns") )\n# highlight-end\n'})}),"\n",(0,s.jsx)(n.h2,{id:"step-6-run-the-simulation",children:"Step 6: Run the simulation"}),"\n",(0,s.jsx)(n.p,{children:"Now, run the simulation by passing the Python script you created to sst as shown below. We did not enable any statistics so the only thing SST will return is a statement of how long the simulation took."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"$ sst tutorial.py\nSimulation is complete, simulated time: 22 ns\n"})}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,s.jsxs)(n.p,{children:["Visit the ",(0,s.jsx)(n.a,{href:"pythonConfigGuide",children:"simulation configuration guide"})," and the ",(0,s.jsx)(n.a,{href:"/sst-docs/docs/config/",children:"configuration API documentation"})," for more information about other capabilities."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(96540);const o={},i=s.createContext(o);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);