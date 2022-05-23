import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global-style";
import { lightTheme } from "../styles/theme";
import wrapper from "../store/configureStore";
import { PageContainer } from "../common/PageContainer";
import Layout from "../common/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>boilerplate</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <PageContainer>
          <Layout />
          <Component {...pageProps} />
        </PageContainer>
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
