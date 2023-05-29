import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import './WrapContainer.css';

const WrapContainer = (props) => {
  return (
    <Container fluid="xxl" className="custom-container row p-lg-3 p-md-2 full-screen justify-content-center">
      <Row>
        <h2>{props.title}</h2>
        <div className='custom-buffer-medium'></div>
      </Row>
      {props.children}
      <div className='custom-buffer-large custom-border'></div>
      <div className='custom-buffer-large'></div>
    </Container>
  );
}

export default WrapContainer;