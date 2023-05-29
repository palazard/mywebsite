import React from 'react';
import Button from 'react-bootstrap/Button';
import PaulineAlazard from './pauline-alazard.png';
import WrapContainer from '../wrappers/WrapContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Introduction.css';

function Introduction() {
  return (
    <WrapContainer>
        <Row>
            <Col xs={12} lg={6} className="d-flex justify-content-center custom-column align-items-center">
                <div className="">
                    <img className="custom-image-intro" src={PaulineAlazard} title="" alt=""/>
                </div>
            </Col>
            <Col xs={12} lg={6} className="d-flex justify-content-center custom-column align-items-center">
                <div className="">
                    <h5>Hello, I am</h5>
                    <h1 className="pb-2">Pauline Alazard</h1>
                    <p className='lead'>Industrial engineer / Full Stack Developer / Problems Solver</p>
                    <p className="custom-text-intro">Who love learning or creating new things and surfing around the world...</p>
                    <Button className="btn btn-primary custom-button"><a href="#">Donwload CV</a></Button>
                </div>
            </Col>
        </Row>
    </WrapContainer>
  );
}

export default Introduction;