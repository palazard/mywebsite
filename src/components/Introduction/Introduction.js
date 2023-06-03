import React from 'react';
import Button from 'react-bootstrap/Button';
import WrapContainer from '../wrappers/WrapContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Introduction.css';

function Introduction({data}) {

  return (
    <WrapContainer>
        <Row>
            <Col xs={12} lg={6} className="d-flex justify-content-center custom-column align-items-center">
                <div className="">
                    <img className="anim-grow custom-image-intro" src={data[0].image} title="" alt=""/>
                </div>
            </Col>
            <Col xs={12} lg={6} className="d-flex justify-content-center custom-column align-items-center">
                <div className="">
                    <h5>Hello, I am</h5>
                    <h1 className="pb-2">{data[0].name}</h1>
                    <p className='lead'>{data[0].resume}</p>
                    <p className="custom-text-intro">{data[0].description}</p>
                    <Button className="anim-bounce btn btn-primary custom-button"><a download="" href={data[0].cv}>Donwload CV</a></Button>
                </div>
            </Col>
        </Row>
    </WrapContainer>
  );
}

export default Introduction;