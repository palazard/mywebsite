import React from 'react';
import WrapContainer from '../wrappers/WrapContainer';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import SkillColumn from './SkillColumn/SkillColumn';
import './Skills.css';


function Skills({title, dataTechnologies, dataHumanSkills, dataLanguages}) {

    const numberSkills = dataTechnologies.length;

    //3 columns:
    const numberSkillsByColumn = Math.ceil(numberSkills/3);

    //divide the array of technologies skills in 3 array, one for each column 
    const arraySkill1 = dataTechnologies.slice(0,numberSkillsByColumn);
    const arraySkill2 = dataTechnologies.slice(numberSkillsByColumn, numberSkillsByColumn*2);
    const arraySkill3 = dataTechnologies.slice(numberSkillsByColumn*2);

    return (
        <WrapContainer title={title}>
            <Row>
                <h3>Technologies</h3>
            </Row>
            <Row>
                <SkillColumn arrayOfSkills = {arraySkill1} />
                <SkillColumn arrayOfSkills = {arraySkill2} />
                <SkillColumn arrayOfSkills = {arraySkill3} />
            </Row>
            <div className='custom-buffer-large'></div>
            <Row>
                <Col sm={12} md={4}>
                    <h3>Human Skills</h3>
                    <Container as="ul">
                        {dataHumanSkills.map((skill,i)=>
                            { return(
                                <li className="p-3" key={i}>
                                    {skill.quality}
                                </li>
                            )}
                        )}
                    </Container>        
                </Col>
                <Col sm={12} md={8}>
                    <h3>Languages</h3>
                    <Container as="ul">
                        {dataLanguages.map((skill,i)=>
                            { 
                                return(
                                <Row key={i}>
                                    <Col xm={4} sm={4} md={3} className="p-2 pe-2 d-flex justify-content-start align-items-center">
                                        <img src={skill.flag} alt="" width="90x"></img>
                                    </Col>
                                    <Col xm={8} sm={8} md={9} className="p-2 d-flex flex-column justify-content-center">
                                        <p>{skill.language}</p>
                                        <ProgressBar animated variant="info" now={skill.pourcentage} className="w-100"/>
                                    </Col>
                                    <div className='custom-buffer-small'></div>
                                </Row>
                            )}
                        )}
                    </Container>
                </Col>
            </Row>
        </WrapContainer>
    );
}

export default Skills;