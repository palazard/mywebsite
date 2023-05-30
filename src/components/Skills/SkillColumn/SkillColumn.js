import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';


function SkillColumn({arrayOfSkills}) {
  console.log(arrayOfSkills);
  return (
    <Col>
        <Container as='ul' className='custom-skill-container'>
            {arrayOfSkills.map((skill,i)=>
                { return(
                    <Row as="li" key={i}>
                        <Col xm={12} md={4} xxl={4} className="p-2 d-flex justify-content-center align-items-center"> 
                            <img className="skill-img" src={skill.image} alt=""></img>
                        </Col>
                        <Col xm={12} md={8} xxl={8} className="p-2 d-flex justify-content-center align-items-center">
                            <h5>{skill.skill}</h5>
                        </Col>
                    </Row>
                )}
            )}           
        </Container>
    </Col>
  );
}

export default SkillColumn;