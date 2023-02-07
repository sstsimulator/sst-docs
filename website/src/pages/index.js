import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
    return ( <header> <h1>Welcome to the documentation headquarters for the Structural Simulation Toolkit</h1> </header>);
}

function HomepageText() {
  const {siteConfig} = useDocusaurusContext();
 return (<p>
    The Structural Simulation Toolkit (SST) was developed to explore innovations in highly concurrent systems where the ISA, microarchitecture, and memory interact with the programming model and communications system. The package provides two novel capabilities. The first is a fully modular design that enables extensive exploration of an individual system parameter without the need for intrusive changes to the simulator. The second is a parallel simulation environment based on MPI. This provides a high level of performance and the ability to look at large systems. The framework has been successfully used to model concepts ranging from processing in memory to conventional processors connected by conventional network interfaces and running MPI.
 </p>);
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The Structural Simulation Toolkit: A parallel discrete-event simulation framework for modeling next-generation computer architectures.">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '5%',
        }}>
        <HomepageHeader />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <main>
          <HomepageFeatures />

      </main>
      </div>
      <div
        style={{
            display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '5%',
        }}>
      <HomepageText />
      </div>
    </Layout>
  );
}
