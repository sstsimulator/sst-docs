import React from 'react';
import Layout from '@theme/Layout';

export default function help() {
  return (
    <Layout title="Help" description="SST Help Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
        Link: <a href="https://sst-simulator.org/SSTPages/SSTMainSupport/">Main SST Support Page</a>
        </p>
      </div>
    </Layout>
  );
}
