import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';



function SkillRow({image, skill, pourcentage}) {
  return (
    <Row as="li">
        <Col xm={12} md={1} xxl={1} className="p-2 d-flex justify-content-center align-items-center"> 
            <img className="skill-img" src={image} alt=""></img>
        </Col>
        <Col xm={12} md={3} xxl={3} className="p-2 d-flex justify-content-center align-items-center">
            <h4>{skill}</h4>
        </Col>
        <Col xm={12} md={7} xxl={7} className="p-2 d-flex justify-content-center align-items-center">
            <ProgressBar animated variant="info" now={pourcentage} className="w-100"/>
        </Col>
    </Row>
  );
}

export default SkillRow;