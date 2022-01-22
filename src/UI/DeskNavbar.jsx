import 'bootstrap/dist/css/bootstrap.min.css';

import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'

import "../Css/navbar.css";
const Navigation = () => {
    return (
 <Navbar collapseOnSelect expand="lg" style={{"backgroundColor":"var(--navbar-bg-color)", "color":'black'}}  id="desktop-navbar">
  <Container>
  <Navbar.Brand href="#home">Tea</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      <NavDropdown title="Drinks" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#drinks">Drinks</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#delivery">Delivery</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
      <NavDropdown title="Delivery" id="collasible-nav-dropdown-2">
        <NavDropdown.Item href="#">Drinks</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Delivery</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
 </Navbar>

    )
}

export default Navigation; 
