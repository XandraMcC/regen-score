import { useContract, useNFT, ThirdwebNftMedia, ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import {ThemeProvider} from 'react-bootstrap'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Partners from "./Components/Partners"
import React, { useState } from 'react';
import { request, gql, GraphQLClient } from 'graphql-request'
import Minting from "./Components/Minting"

const endpoint1 = process.env.PREVIEW_EDGE_CH_ENDPOINT;
const endpoint = "https://api.thegraph.com/subgraphs/name/impactmarket/subgraph"
const graphQLClient = new GraphQLClient(endpoint)

export default function Home(props) {
  const [hasChecked, setHasChecked] = useState(false);
  const [hasImpactMarket, setHasImpactMarket] = useState(false);

   const getImpactMarketStatus = async (address) => {
  
    const query = gql`{
      contributorEntity(id: "${address}") {
        id
        contributions
        lastContribution
      }
    }
    `
      console.log(query)
      const data = await graphQLClient.request(query);
      setHasChecked(true)
      setHasImpactMarket(!!data.contributorEntity)
    return {
     data
    };
  
  }
  
  const address = useAddress();
  const { contract } = useContract("0x6C13d42a2AEa14B86F5Ffc15FD398Ddfe362150C");
  const { data: nft, isLoading } = useNFT(contract, 0);

  return (
    <div className={styles.container}>
      <Header ConnectWallet={ConnectWallet} />
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs">
<<<<<<< HEAD

      <main className={styles.main}>
        <Hero 
          ConnectWallet={ConnectWallet} 
          address={address} 
          getImpactMarketStatus={getImpactMarketStatus} 
          hasImpactMarket={hasImpactMarket}
          hasChecked={hasChecked} />
        <Minting />
        <Partners/>
      </main>
=======
        <main className={styles.main}>
          <Hero ConnectWallet={ConnectWallet} address={address}/>
          <Minting />
          <Partners/>
        </main>
>>>>>>> 821cfb6 (added components)
      </ThemeProvider>
    </div>
  );
}
