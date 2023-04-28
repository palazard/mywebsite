import React from 'react';
import WrapContainer from '../wrappers/WrapContainer';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Work.css';


function Work() {
  return (
    <WrapContainer>
        <Row>
            <div className="">
                <h2>Work Projects</h2>
            </div>
        </Row>

        <Row as="li">
            <Col xm={12} md={1} xxl={1} className="p-2 d-flex justify-content-center align-items-center"> 
                
            </Col>
            <Col xm={12} md={3} xxl={3} className="p-2 d-flex justify-content-center align-items-center">
                
            </Col>
            <Col xm={12} md={7} xxl={7} className="p-2 d-flex justify-content-center align-items-center">
                
            </Col>
        </Row>

        <div className='custom-buffer-small custom-border'></div>
        <div className='custom-buffer-medium'></div>
    </WrapContainer>
  );
}

export default Work;