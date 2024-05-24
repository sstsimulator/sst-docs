import React from 'react';
import Layout from '@theme/Layout';

export default function GettingStarted() {
  return (
    <Layout title="Getting Started" description="Getting Started Page">
      <div
       style={{
               justifyContent: 'center',
               alignItems: 'center',
               margin: '20px',
       }}>
      <h2>Getting Started</h2>
      <p>
      SST is an open source, cross platform simulation platform that provides a framework to connect multiple simulated hardware objects including CPUs, network, memory, etc. Simulations using the toolkit can be run either on a single node or run on multiple nodes via MPI. The toolkit provides a parallel discrete event core as well as several programming interfaces, including classes to manage random number generation, statistics handling, simulation output, and efficient memory pooling for simulation events. The most recent performance evaluation has shown that SST can scale to simulate beyond 1.5M objects and operate efficiently on simulations up to 128 dual-processor nodes.
      </p>
      <p>This quick start guide is intended to get the user up and running with SST as quickly as possible. It is intended for users with intermediate knowledge in the operation of Unix/Linux/OSX environments.</p>

       <p>The SST 14.0.x <a href="http://sst-simulator.org/SSTPages/SSTmicroRelease_V14dot0dot0">Release Notes</a> identify what operating systems, compiler, and external component combinations have been tested and proven to work with this version of SST.</p>

            <p><strong>NOTE: The versions recommended in <a href="http://sst-simulator.org/SSTPages/SSTmicroRelease_V14dot0dot0">Release Notes</a> are tested regularly with SST; other tool and library versions may not work.</strong></p>

            <p>A detailed list of elements provided with the SST distribution is available at <a href="http://sst-simulator.org/sst-docs/element/intro">SST Elements Documentation</a> and  <a href="http://sst-simulator.org/SSTPages/SSTElementReleaseMatrix">SST Release Matrix</a>.</p>

            <p>If you encounter difficulties, refer to the <a href="http://sst-simulator.org/SSTPages/SSTBuildAndInstall_14dot0dot0_SeriesDetailedBuildInstructions">Detailed SST Build and Install Instructions</a> or go to the <a href="http://sst-simulator.org/SSTPages/SSTMainSupport">SST Support</a> page</p>

            <h2>Introduction</h2>
            
            <p>Don't have SST yet? Take a look at the <a href="http://sst-simulator.org/SSTPages/SSTMainDocumentation/">Getting SST</a> pages.</p>
            
            <p>Installed SST and ready to try it out? Check out these resources for getting started.</p>
            <ul> 
              <li> <a href="http://sst-simulator.org/sst-docs/docs/guides/runningSST">Guide to running SST</a></li>
              <li> <a href="http://sst-simulator.org/sst-docs/docs/guides/configuration/configTutorial">Tutorial: Configuring SST simulations</a></li>
              <li> <a href="https://github.com/sstsimulator/sst-tutorials"> Tutorials repository</a> with slides, example code, and containers from recent tutorial sessions</li>
              <li> <a href="http://sst-simulator.org/sst-docs/docs/guides/concepts/glossary">SST Glossary</a></li>
              <li> <a href="https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/simpleElementExample">Code and configuration examples</a></li>
              <li> <a href="https://github.com/sstsimulator/sst-elements/tree/master/src/sst/elements/simpleSimulation">An element library example</a></li>
              <li> <a href="https://github.com/sstsimulator/sst-external-element">Example of an element library (model) that exists outside the main SST repositories</a></li>
            </ul>
            <p>This video is older and so some aspects it covers are out-of-date, but the general information may be useful.</p>
            <iframe width="800" height="450" src="https://www.youtube.com/embed/videoseries?list=PLgehegDe4T2y1badxrxcuvIsX42V64t2x" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
  </Layout>
  );
}

