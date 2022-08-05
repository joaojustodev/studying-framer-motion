import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Animations with Framer motion</title>
        <meta
          name="description"
          content="Site for trainning animations with framer motion"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />;
      <GlobalStyles />
    </>
  );
}

export default MyApp;
