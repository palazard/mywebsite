import React from 'react';
import WrapContainer from '../wrappers/WrapContainer';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import SkillRow from './SkillRow/SkillRow';
import ProgressBar from 'react-bootstrap/ProgressBar';
import data from './skillList.json';
import './Skills.css';


function Skills() {
  return (
    <WrapContainer>
        <Row>
            <h2>Skills</h2>
            <div className='custom-buffer-medium'></div>
        </Row>
        <Row>
            <Col>
                <h3>Technologies</h3>
                <Container as='ul' className='custom-skill-container'>
                    {data.technologies.map((skill,i)=>
                        { return(
                            <Row as="li" key={i}>
                                <Col xm={12} md={1} xxl={1} className="p-2 d-flex justify-content-center align-items-center"> 
                                    <img className="skill-img" src={skill.image} alt=""></img>
                                </Col>
                                <Col xm={12} md={3} xxl={3} className="p-2 d-flex justify-content-center align-items-center">
                                    <h5>{skill.skill}</h5>
                                </Col>
                                <Col xm={12} md={7} xxl={7} className="p-2 d-flex justify-content-center align-items-center">
                                    <ProgressBar animated variant="info" now={skill.pourcentage} className="w-100"/>
                                </Col>
                            </Row>
                        )}
                    )}           
                </Container>
            </Col>
            <Col>
                <Row>
                    <h3>Human Skills</h3>
                    <Container as="ul">
                        {data.human.map((skill,i)=>
                            { return(
                                <li key={i}>
                                    {skill.quality}
                                </li>
                            )}
                        )}
                    </Container>
                </Row>
                <Row>
                    <h3>Languages</h3>
                    <Container as="ul">
                        {data.languages.map((skill,i)=>
                            { 
                                return(
                                <Col key={i}>
                                    <div style={{
                                            backgroundImage: `url(${skill.flag})`,
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center',
                                            height: '50px',
                                        }}>
                                        <p>{skill.language}</p>
                                    </div>
                                </Col>
                            )}
                        )}
                    </Container>
                </Row>
            </Col>
        </Row>
        {/* <Container as='ul' className='custom-skill-container'>
            {data.map(skill=>
                { return(
                    <Row as="li">
                        <Col xm={12} md={1} xxl={1} className="p-2 d-flex justify-content-center align-items-center"> 
                            <img className="skill-img" src={skill.image} alt=""></img>
                        </Col>
                        <Col xm={12} md={3} xxl={3} className="p-2 d-flex justify-content-center align-items-center">
                            <h5>{skill.skill}</h5>
                        </Col>
                        <Col xm={12} md={7} xxl={7} className="p-2 d-flex justify-content-center align-items-center">
                            <ProgressBar animated variant="info" now={skill.pourcentage} className="w-100"/>
                        </Col>
                    </Row>
                )}
            )}           
        </Container> */}
        <div className='custom-buffer-small custom-border'></div>
        <div className='custom-buffer-medium'></div>
    </WrapContainer>
  );
}

export default Skills;