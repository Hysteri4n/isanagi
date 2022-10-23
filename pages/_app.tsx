import '../styles/globals.css';
import Head from 'next/head';
import LayOut from '../components/basic/LayOut';

// @ts-ignore
function MyApp({ Component, pageProps }) {
  return (
    <LayOut>
      <Head>
        <title>Isanagi - Self publishing comics market</title>
        <meta name="description" content="self publishing comics market" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="../../icons/logo-main.png" />
      </Head>
      <Component {...pageProps} />
    </LayOut>
  );
}

export default MyApp;
