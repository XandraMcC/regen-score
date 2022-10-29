import {Nav, Navbar, Container} from 'react-bootstrap';
import Image from 'next/image'

import Logo from './../../public/logo.png'

function Header({ Component, pageProps, ConnectWallet }) {
    return(
      <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home"><Image width={50} height={50} src={Logo}></Image></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Profile</Nav.Link>
          <Nav.Link href="#pricing">Partners</Nav.Link>
        </Nav>
          <ConnectWallet style={{color: "red"}}/>
      </Container>
    </Navbar>)
}

export default Header
