import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import "../Css/navbar.css";
const MobileNavbar = () => {
    return (
    <Navbar id="mobile-navbar" bg="dark" variant="dark" style={{'padding':'0'}}>
     <Container style={{"color":"red",'padding':'0 1rem'}}>
        <Nav className=" w-100 d-flex justify-content-between align-items-centre">

        <Nav.Link href="#home" style={{"text-decoration":"center"}}>
         <i className="fas fa-home"></i>
         <p className="nav">Home</p> 
        </Nav.Link>

        <Nav.Link href="#features">
         <i className="fas fa-wine-bottle"></i>
         <p>Drinks</p> 
        </Nav.Link>

        <Nav.Link href="#pricing">
         <i className="fas fa-bicycle"></i>
         <p>Delivery</p> 
        </Nav.Link>

        </Nav>
    </Container>
    </Navbar> 
    )
}

export default MobileNavbar
