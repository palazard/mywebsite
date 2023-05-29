import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function SkillRow({skill, i}) {
  console.log(skill);
  return (
      <Row as="li" key={i}>
          <Col xm={12} md={4} xxl={4} className="p-2 d-flex justify-content-center align-items-center"> 
              <img className="skill-img" src={skill.image} alt=""></img>
          </Col>
          <Col xm={12} md={8} xxl={8} className="p-2 d-flex justify-content-center align-items-center">
              <h5>{skill.skill}</h5>
          </Col>
          {/* <Col xm={12} md={7} xxl={7} className="p-2 d-flex justify-content-center align-items-center">
              <ProgressBar animated variant="info" now={skill.pourcentage} className="w-100"/>
          </Col> */}
      </Row>
  );
}

export default SkillRow;