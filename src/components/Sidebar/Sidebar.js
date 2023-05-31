import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import './Sidebar.css';

function Sidebar({name}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="custom-nav-bar">
        <Offcanvas.Title>{name}</Offcanvas.Title>
        <Button variant="primary" className="d-xl-none custom-toggle" onClick={handleShow}>
          <img alt="" src="https://img.icons8.com/ios-glyphs/30/null/menu-rounded.png"/> 
        </Button>
      </div>

      <Offcanvas show={show} onHide={handleClose} responsive="xl">
        <Offcanvas.Body className="custom-vertical">
          <Offcanvas.Title>PAULINE ALAZARD</Offcanvas.Title>
            <Nav className="mr-auto custom-vertical custom-nav">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About Me</Nav.Link>
                <Nav.Link href="#portfolio">Skills</Nav.Link>
                <Nav.Link href="#portfolio">Coding Projects</Nav.Link>
                <Nav.Link href="#portfolio">CMS Websites</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <div className='custom-buffer'></div>
            </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;