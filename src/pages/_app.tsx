import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default MyApp;
