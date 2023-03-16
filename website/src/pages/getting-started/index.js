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
      <p>This quick start guide is intended to get the user up and running with SST as quickly as possible.   It is intended for users with intermediate knowledge in the operation of  Unix/Linux/OSX environments.</p>

       <p>The SST 12.1.x <a href="http://sst-simulator.org/SSTPages/SSTmicroRelease_V12dot1dot0">Release Notes</a> identify what operating systems, compiler, and external component combinations have been tested and proven to work with this version of SST.</p>

            <p><strong>NOTE: Using combinations other than what is identified in the <a href="http://sst-simulator.org/SSTPages/SSTmicroRelease_V12dot1dot0">Release Notes</a> may cause build failures and/or unexpected results.</strong></p>

            <p>A detailed list of elements provided with the SST distribution are available at <a href="http://sst-simulator.org/SSTPages/SSTDeveloperElementSummaryInfo">SST Element Summary</a> and  <a href="http://sst-simulator.org/SSTPages/SSTElementReleaseMatrix">SST Element Release Matrix</a>.</p>

            <p>If you encounter difficulties, refer to the <a href="http://sst-simulator.org/SSTPages/SSTBuildAndInstall12dot1dot0SeriesDetailedBuildInstructions">Detailed SST Build and Install Instructions</a> or go to the <a href="http://sst-simulator.org/SSTPages/SSTMainSupport">SST Support</a> page</p>

            <h2>Introduction</h2>
            <iframe width="800" height="450" src="https://www.youtube.com/embed/videoseries?list=PLgehegDe4T2y1badxrxcuvIsX42V64t2x" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
  </Layout>
  );
}

