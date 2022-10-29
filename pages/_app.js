import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import Head from "next/head";
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp
