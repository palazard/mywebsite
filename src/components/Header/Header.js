
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css';

const Header = () => {
const expand = "md";
  return (
    <div className="custom-header">
      {/* <Navbar collapseOnSelect bg="dark" variant="dark" expand="md" className="custom-fixed-left-header">
        <Container className="custom-flex-column custom-container">
            <Navbar.Brand href="#home" className="custom-brand">PAULINE ALAZARD</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="custom-flex-column">
                <Nav className="mr-auto custom-flex-column">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About Me</Nav.Link>
                    <Nav.Link href="#portfolio">Skills</Nav.Link>
                    <Nav.Link href="#portfolio">Work Project</Nav.Link>
                    <Nav.Link href="#portfolio">CMS Websites</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar> */}
            <Navbar key={expand} collapseOnSelect bg="dark" variant="dark" expand={expand} className="custom-fixed-left-header">
                <Container className="fluid custom-flex-column custom-container">
                    <Navbar.Brand href="#home" className="custom-brand">PAULINE ALAZARD</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                PAULINE ALAZARD
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="mr-auto custom-flex-column custom-list">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#about">About Me</Nav.Link>
                                <Nav.Link href="#portfolio">Skills</Nav.Link>
                                <Nav.Link href="#portfolio">Work Project</Nav.Link>
                                <Nav.Link href="#portfolio">CMS Websites</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
    </div>
  );
}

export default Header;