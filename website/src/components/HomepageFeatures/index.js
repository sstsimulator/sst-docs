import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';


export default function HomepageFeatures() {
  return (
      <div className={styles.indexButton}>
      <Link className="button button--primary" to="/docs/guides/start">
        <Translate>Getting Started</Translate>
      </Link>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <Link className="button button--primary" to="/docs/core/component/introduction">
        <Translate>SST Core</Translate>
      </Link>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <Link className="button button--primary" to="/docs/elements/ember/QuickStart">
        <Translate>SST Elements</Translate>
      </Link>
      </div>
  );
}