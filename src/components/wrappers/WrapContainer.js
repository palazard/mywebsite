import React from 'react';
import Container from 'react-bootstrap/Container';

import './WrapContainer.css';

const WrapContainer = (props) => {
  return (
    <Container fluid="xxl" className="custom-container row p-lg-3 p-md-2 full-screen justify-content-center">
      {props.children}
    </Container>
  );
}

export default WrapContainer;