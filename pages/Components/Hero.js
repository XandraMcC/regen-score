import { ConnectWallet } from "@thirdweb-dev/react";

function Hero({ Component, pageProps }) {
    return(
        <div style={{height : "50vh", textAlign: "center", paddingBottom: "50px"}}>
        <h1>Be the change. Get the badge.</h1>
        <p>Check your onchain contributions to public goods and regenerative finance.</p>
        <p> Connect your wallet to see how you score.</p>
        
        <div style={{width :"200px", margin: "auto"}}>
        <ConnectWallet />
        </div>
        </div>
 )
}

export default Hero