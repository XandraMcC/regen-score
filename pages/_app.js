import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import "../styles/globals.css";

const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp
