import {Row, Col} from 'react-bootstrap'
import Encode from './../../public/encode.jpeg'
import ImpactMarket from './../../public/impactmarket.png'
import Gitcoin from './../../public/gitcoin.png'
import Image from 'next/image'


function Partners({ Component, pageProps }) {
    return(
        <div style={{backgroundColor: "#1F9376", width: "100%", textAlign :"center", paddingTop: "20px", color : "white"}}>
        <h2>Partners</h2>
        <Row style={{padding : "50px"}}>
            <Col>
            <Image src={Encode} height={100} width={100} style={{borderRadius: "50px"}} />
            </Col>
            <Col>
            <Image src={ImpactMarket} height={100} width={100} style={{borderRadius: "50px"}} />
            </Col>
            <Col>
            <Image src={Gitcoin} height={100} width={100} style={{borderRadius: "50px"}} />
            </Col>
        </Row>
        </div>
 )
}

export default Partners
