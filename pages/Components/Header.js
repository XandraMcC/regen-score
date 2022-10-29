import {Nav, Navbar, Container} from 'react-bootstrap';
import { ConnectWallet } from "@thirdweb-dev/react";

function Header({ Component, pageProps }) {
  {console.log("this", Component, pageProps)}
    return(
      <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Regen House</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Profile</Nav.Link>
          <Nav.Link href="#pricing">Partners</Nav.Link>
        </Nav>
          <ConnectWallet/>
      </Container>
    </Navbar>)
}

export default Header
