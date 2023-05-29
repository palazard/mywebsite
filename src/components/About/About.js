import React from 'react';
import AboutPauline from './about-pauline.png';
import WrapContainer from '../wrappers/WrapContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselSlides from '../CarouselSlides';
import './About.css';


function About({title, data}) {
  return (
    <WrapContainer title={title}>
        <Row>
            <Col  xs={{number:12, order: 1}} lg={{number:5, order: 1}} xxl={{number:4, order: 1}} className="d-flex justify-content-center custom-column align-items-center">
                <div className="">    
                    <p className="custom-text-about">
                        After obtaining a general engineering degree and working for three years in advanced technologies, I studied digital marketing and web analysis to become a webmaster. However, I couldn't ignore the new possibilities that programming offered, so I gave in to temptation and started several bootcamps, spending my days learning and experimenting with coding.<br></br><br></br>
                        Being very curious, creative and perfectionist by nature, I don't stop at what I know, I'm always researching to achieve my project goals. With my background I consider myself a problem solver!!<br></br><br></br>
                        I strongly believe that life is all about balance - mind, body and soul must be healthy and in harmony to achieve our goals. My passions, such as surfing, yoga, meditation, and reading… help me to move forward on my path and be unstoppable!
                    </p>
                </div>
            </Col>
            <Col xs={{number:12, order: 2}} lg={7} xxl={8} className="d-flex justify-content-center custom-column align-items-center">
                <div className="">
                    <img className="custom-image-about" src={AboutPauline} title="" alt=""/>
                </div>
            </Col>
        </Row>
        <div className='custom-buffer-medium'></div>
        <Row>
            <div className="">
                <h3>Education</h3>
            </div>
        </Row>

        <CarouselSlides data={data}/>

    </WrapContainer>
  );
}

export default About;