import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';

import styles from './styles.module.css'

function HomepageHeader() {
    return ( 
      <div className={styles.hero}>
      <div className={styles.heroInner}>
        <Heading as="h1" className={styles.heroProjectTagline}>
        <img
            alt="SST sketched logo"
            className={styles.heroLogo}
            src={useBaseUrl('/img/sst-sketched.png')}
            width="500"
          />
          <span
            className={styles.heroTitleTextHtml}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'homepage.hero.title',
                message:
                  '<b>Fast</b> and <b>scalable</b> system simulation',
                description:
                  'Fast and scalable system simulation',
              }),
            }}
          />
        </Heading>
        <div className={styles.indexCtas}>
          <Link className="button button--main" to="/docs/guides/start">
            <Translate>Get Started</Translate>
          </Link>

          <Link className="button button--main" to="/docs/elements/intro">
            <Translate>Model Libraries</Translate>
          </Link>
          
          <span className={styles.indexCtasGitHubButtonWrapper}>
            <iframe
              className={styles.indexCtasGitHubButton}
              src="https://ghbtns.com/github-btn.html?user=sstsimulator&amp;repo=sst-core&amp;type=star&amp;count=true&amp;size=large"
              width={160}
              height={30}
              title="GitHub Stars"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

function SingleFeature({title, text, icon}) {
  return(
    <div class="row">
      <div class="col col--1">
        <img
            alt={title}
            src={icon}
            width="100"
          />
      </div>
      <div class="col col--8">
        <h2 class="green">{title}</h2>
        <p dangerouslySetInnerHTML={{__html: text}} />
      </div>
    </div>
  );
}

function SSTFeatures() {
  const extensible_title = "Extensible";
  const extensible_text = "Extensiblity is a cornerstone of SST. Integrate new models, wrap existing non-SST models, and even extend the simulation  engine (SST-Core) itself - all without modifications to existing infrastructure. Create your extensions (elements) in a shared library, register it with SST-Core and your extensions are available for use alongside the built-in capabilities.";

  const scale_title = "Multi-scale";
  const scale_text = "Understanding gate-level performance and observing the impact of new scheduling algorithms on system job queues over time require very different timescales. Further, some models are abstract, capturing high-level application or hardware behaviors, while others are cycle-accurate, or at least approximate, simulating individual flits traveling through a network for example. SST supports simulation across all these scales, and even allows mixing scales and models at different levels of abstraction within a single simulation.";
  
  const open_title = "Open-source";
  const open_text = "SST carries a permissive <a href='https://github.com/sstsimulator/sst-core/blob/master/LICENSE.md'>open-source license</a> and is available both from release tarballs and the sstsimulator GitHub repositories.";

  return(
    <div class="container">
    <div class="row margin-top--lg">
      <div class="col col--2 margin-left--lg">
        <div class="styles.mainTagLineText">
          <h1 class="text--light">A modular, scalable,<br></br> cross-platform simulation framework for research, prototyping, and more.</h1>
        </div>
      </div>
      
      <div class="col col--9 col-offset--1 margin-left--lg">
          <SingleFeature title={extensible_title} text={extensible_text} icon={useBaseUrl('/img/icon_plug.svg')}/>
          <SingleFeature title={scale_title} text={scale_text} icon={useBaseUrl('./img/icon_multiscale.png')}/>
          <SingleFeature title={open_title} text={open_text} icon={useBaseUrl('./img/icon_openbox.svg')}/>
      </div>

    </div>
  </div>
  );
}

function ReleaseBar() {
  return(
    <div className={styles.releaseRibbon}>
      <div class="container">
        <div class="row">
        <div class="col col--2 margin-left--lg"></div>
        <div class="col col--9 col-offset--1 margin-left--lg">
      <div className={styles.releaseItems}>
      
      <span className={styles.releaseTitle}>Latest Release:</span>
      
      <Link className="button button--main" to="https://sst-simulator.org/SSTPages/SSTMainDownloads/">
        <Translate>Download SST 15.1</Translate>
      </Link>

      <Link className="button button--main" to="https://sst-simulator.org/SSTPages/SSTmicroRelease_V15dot1dot0/">
        <Translate>Release Notes</Translate>
      </Link>
      </div>
      </div>
      </div>
      </div>
    </div>
);
}

function PlatformDescription() {
  return(
    <div class="container">
      <div class="row margin-top--lg margin-left--lg">
        <h1 class="green">The Platform</h1>
      </div>

      <div class="row margin-left--lg margin-top--sm">
        <h3>SST-Core: <em>a high-performance parallel discrete event simulation engine</em></h3>
  
        <p>
        SST can run serially or in parallel, across hundreds of machines with tens of cores each or on a standalone laptop. 
        Performance evaluations have shown that SST can scale to simulate millions of objects (<em>elements</em> or more specifically,  
          <a href="http://sst-simulator.org/sst-docs/docs/core/component/introduction"> "components"</a> in SST terminology) and operate efficiently across hundreds of CPUs.
        </p>
      </div>
      
      <div class="row margin-left--lg margin-top--sm">
      <h3>SST-Elements: <em>a modular modeling ecosystem for customized simulations</em></h3>
  
      <p>
      In SST, the user defines a simulated system by combining building blocks (elements) from libraries of available models. 
      This makes it possible to create and modify simulations in a piecewise fashion and easily reuse models in many different 
      simulations. While the SST-Core framework itself is domain-agnostic, the set of libraries provided with SST (SST-Elements) 
      is comprised largely of elements for computer architecture modeling. Using these elements, you might simulate a simple 
      single-core processor by combing a CPU element, a cache element, and a memory element. You could also reorganize the same 
      elements but add tens to hundreds of instances of each along with some network routers and buses to model a modern processor. 
      SST Elements are built to be flexible, reusable, and adaptable, enabling simulations of current and future systems with the 
      same building blocks and minimal modification.
      </p>
    </div>
    <div class="row margin--xl">
      <img 
        alt="SST plugin architecture"
        src={useBaseUrl('/img/sst-plugin-arch.png')}
      />
    </div>
  </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The Structural Simulation Toolkit: A parallel discrete-event simulation framework for modeling next-generation computer architectures.">
      <main> 
        <HomepageHeader />

        <SSTFeatures />

        <ReleaseBar />

        <PlatformDescription />

      </main>
    </Layout>
  );
}
