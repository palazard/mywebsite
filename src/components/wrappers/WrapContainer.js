import React from 'react';
import Container from 'react-bootstrap/Container';

import './WrapContainer.css';

const WrapContainer = (props) => {
  return (
    <Container fluid="xxl" className="custom-container row p-lg-3 p-md-2 full-screen align-items-center justify-content-evenly">
      {props.children}
    </Container>
  );
}

export default WrapContainer;