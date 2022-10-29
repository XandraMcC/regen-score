
import {Button} from 'react-bootstrap'

import {React, useState} from 'react';

function Hero({ Component, pageProps, ConnectWallet, address, getImpactMarketStatus, 
    hasImpactMarket,
    hasChecked,
     }) {

    var [startChecking, setStartChecking ] = useState(false)

    const responseText = hasImpactMarket ? "yay you have impact market": "no you dont"
    return(
        <div style={{height : "50vh", textAlign: "center", paddingBottom: "50px"}}>
        <h1>Be the change. Get the badge.</h1>
        <p>Check your onchain contributions to public goods and regenerative finance.</p>
        <p> Connect your wallet to see how you score.</p>
<<<<<<< HEAD
        
        <div style={{width :"200px", margin: "auto"}}>
       {hasChecked ? responseText :(!address ? <ConnectWallet />: (!startChecking ? (<Button onClick={()=>{  setStartChecking(true); return getImpactMarketStatus(address.toLowerCase())}} variant="primary">Check Status</Button>): "checking"))}
        </div>
=======
>>>>>>> 821cfb6 (added components)
        </div>
 )
}

export default Hero
