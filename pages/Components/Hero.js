
import {Button} from 'react-bootstrap'

import {React, useState} from 'react';
import Image from 'next/image'
import Loading from "./../../public/loading.gif"
import Celobrate from "./../../public/celebrate.gif"
import SadFace from "./../../public/sadface.gif"

function Hero({ Component, pageProps, ConnectWallet, address, getImpactMarketStatus, 
    hasImpactMarket,
    hasChecked,
     }) {

    var [startChecking, setStartChecking ] = useState(false)

    const responseText = hasImpactMarket ? (<> <p>Congrats, you have donated to Impact Market - mint your NFT</p>
    <Image src={Celobrate}/></>): (<> <p>Please donate to Impact Market to be eligible for a REGEN HOUSE membership</p>
    <Image src={SadFace}/></>)

    // const  loading = <Image src={Loading}/>
    return(
        <div style={{height : "50vh", textAlign: "center", paddingBottom: "50px"}}>
        <h1>Be the change. Get the badge.</h1>
        <p>Check your onchain contributions to public goods and regenerative finance.</p>
        <p> Connect your wallet to see how you score.</p>
        
        <div style={{width :"200px", margin: "auto"}}>
       {hasChecked ? responseText :(!address ? <ConnectWallet />: (!startChecking ? (<Button onClick={()=>{  setStartChecking(true); return getImpactMarketStatus(address.toLowerCase())}} variant="primary">Check Status</Button>): <Image src={Loading}/>))}
        </div>
        </div>
 )
}

export default Hero