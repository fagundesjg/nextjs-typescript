import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Olá NextJS</main>

      <footer></footer>
    </div>
  );
};

export default Home;
