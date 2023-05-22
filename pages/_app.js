import Head from "next/head";
import { ThirdwebProvider, activeChain } from '@thirdweb-dev/react';
import { Provider } from "react-redux";
import store from "../src/redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Provider store={store}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href=""
            rel="stylesheet"
          />
          {/* !Google Font */}
          {/* Styles */}
          <link
            type="text/css"
            rel="stylesheet"
            href="/css/plugins.css?ver=4.1"
          />
          <link type="text/css" rel="stylesheet" href="/css/style.css?ver=4.1" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </ThirdwebProvider>
  );
}

export default MyApp;
