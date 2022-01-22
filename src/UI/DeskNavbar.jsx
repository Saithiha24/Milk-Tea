import 'bootstrap/dist/css/bootstrap.min.css';

import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'


const Navigation = () => {
    return (
 <Navbar collapseOnSelect
 className='d-none d-md-block'
  id="desktop-navbar">
  <Container>
  <Navbar.Brand href="#home">
    SHO Drinks
  </Navbar.Brand>
  <Navbar.Collapse>
    <Nav className="ms-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      <NavDropdown title="Drinks" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#drinks">Drinks</NavDropdown.Item>
        <NavDropdown.Item href="#delivery">Delivery</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Delivery" id="collasible-nav-dropdown-2">
        <NavDropdown.Item href="#">Drinks</NavDropdown.Item>
        <NavDropdown.Item href="#">Delivery</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
 </Navbar>

    )
}

export default Navigation; 
