import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ScrollAnimation from 'react-animate-on-scroll';

import './WrapContainer.css';

const WrapContainer = (props) => {
  return (
    <Container fluid="xxl" className="custom-container row p-0 full-screen justify-content-center">
      <Row>
        <ScrollAnimation duration={1.5} animateIn="animate__fadeIn" animateOnce={true}>
          <h2>{props.title}</h2>
        </ScrollAnimation>
        <div className='custom-buffer-medium'></div>
      </Row>
      {props.children}
      <div className='custom-buffer-large custom-border'></div>
      <div className='custom-buffer-large'></div>
    </Container>
  );
}

export default WrapContainer;