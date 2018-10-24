/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href="getting-started.html">Getting Started</Button>
            <Button target="_blank" href="http://sst-simulator.org/SSTPages/SSTMainDownloads/">Downloads</Button>
            <Button href="docs/contribute/get-involved.html">Get Involved</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Welcome = props => (
  <div id="welcome">
    <p>Exploring novel computer system designs involves modification of both programming models and hardware organization. This exploration is frequently made difficult by the lack of compiler tools, well-defined ISA features, or complete microarchitectural definitions. Premature definition of hardware or software limits the flexibility of the other. However, without such assumptions, neither software nor hardware can progress. A key goal is to allow programming models and the underlying hardware to evolve separately, while allowing feedback between them.<br/><br/> The Structural Simulation Toolkit (SST) was developed to explore innovations in highly concurrent systems where the ISA, microarchitecture, and memory interact with the programming model and communications system. The package provides two novel capabilities. The first is a fully modular design that enables extensive exploration of an individual system parameter without the need for intrusive changes to the simulator. The second is a parallel simulation environment based on MPI. This provides a high level of performance and the ability to look at large systems. The framework has been successfully used to model concepts ranging from processing in memory to conventional processors connected by conventional network interfaces or by running MPI.</p>
  </div>
);

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Welcome />
        </div>
      </div>
    );
  }
}

module.exports = Index;
