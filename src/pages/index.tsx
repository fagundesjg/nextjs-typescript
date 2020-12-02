import React from 'react';
import Head from 'next/head';

import ReactLogo from '../assets/react-logo.svg';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ReactLogo />
        <h5>Olá NextJS</h5>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
