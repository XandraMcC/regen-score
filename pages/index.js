import { useContract, useNFT, ThirdwebNftMedia, ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import {ThemeProvider} from 'react-bootstrap'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Partners from "./Components/Partners"
import Minting from "./Components/Minting"

export default function Home() {
  const address = useAddress();
  const { contract } = useContract("0x6C13d42a2AEa14B86F5Ffc15FD398Ddfe362150C");
  const { data: nft, isLoading } = useNFT(contract, 0);
  return (
    <div className={styles.container}>
      <Header ConnectWallet={ConnectWallet}>

        </Header>
      <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs">

      <main className={styles.main}>

        <Hero ConnectWallet={ConnectWallet} address={address}/>

        <Minting />


        <Partners/>
        <div>
          {/* {!isLoading && nft ? (
            <ThirdwebNftMedia metadata={nft.metadata} />
          ) : (
            <p>Loading...</p>
          )} */}
        </div>

      </main>
      </ThemeProvider>
    </div>
  );
}
