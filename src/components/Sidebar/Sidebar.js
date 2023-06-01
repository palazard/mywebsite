import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import './Sidebar.css';
import { Link} from 'react-scroll';


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
          <Offcanvas.Title>{name}</Offcanvas.Title>
            <Nav className="mr-auto custom-vertical custom-nav">
              <Link as='Nav.Link' to="home" spy={true} smooth={true} duration={500} offset={-50} onClick={handleClose}>
                <Nav.Link href="#home">Home</Nav.Link>
              </Link>
              <Link to="about" spy={true} smooth={true} duration={500} offset={-50} onClick={handleClose}>
                <Nav.Link href="#about">About Me</Nav.Link>
              </Link>
              <Link to="skills" spy={true} smooth={true} duration={500} offset={-50} onClick={handleClose}>
                <Nav.Link href="#skills">Skills</Nav.Link>
              </Link>
              <Link to="coding" spy={true} smooth={true} duration={500} offset={-50} onClick={handleClose}>
                <Nav.Link href="#coding">Coding Projects</Nav.Link>
              </Link>
              <Link to="cms" spy={true} smooth={true} duration={500} offset={-50} onClick={handleClose}>
                <Nav.Link href="#cms">CMS Websites</Nav.Link>
              </Link>
              <Link to="contact" spy={true} smooth={true} duration={500} offset={-50} onClick={handleClose}>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Link>
              <div className='custom-buffer'></div>
            </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;