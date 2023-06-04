import React from 'react';
import WrapContainer from '../wrappers/WrapContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselSlides from '../Carousel/CarouselSlides';
import ScrollAnimation from 'react-animate-on-scroll';
import './About.css';


function About({title, dataAbout, data}) {

  return (
    <WrapContainer title={title}>
        <Row>
            <Col xs={{number:12, order: 1}} lg={{number:5, order: 1}} xxl={{number:4, order: 1}} className="d-flex justify-content-center custom-column align-items-center">
                <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
                    <div className="">    
                        <p className="custom-text-about">
                            After obtaining a general engineering degree and working for three years in advanced technologies, I studied digital marketing and web analysis to become a webmaster. However, I couldn't ignore the new possibilities that programming offered, so I gave in to temptation and started several bootcamps, spending my days learning and experimenting with coding.<br></br><br></br>
                            Being very curious, creative and perfectionist by nature, I don't stop at what I know, I'm always researching to achieve my project goals. With my background I consider myself a problem solver!!<br></br><br></br>
                            I strongly believe that life is all about balance - mind, body and soul must be healthy and in harmony to achieve our goals. My passions, such as surfing, yoga, meditation, and reading… help me to move forward on my path and be unstoppable!
                            {/* {dataAbout[0].description} */}
                        </p>
                    </div>
                </ScrollAnimation>
            </Col>
            <Col xs={{number:12, order: 2}} lg={7} xxl={8} className="p-0 d-flex justify-content-center custom-column align-items-center">
                <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
                    <img className="anim-bounce custom-image-about" src={dataAbout[0].image} title="" alt=""/>
                </ScrollAnimation>
            </Col>
        </Row>
        <div className='custom-buffer-medium'></div>
        <ScrollAnimation duration={1.5} animateIn="animate__fadeIn" animateOnce={true}>
            <Row>
                <h3>Education</h3>
                <div className='custom-buffer-small'></div>
                <CarouselSlides data={data}/>
            </Row>
        </ScrollAnimation>
    </WrapContainer>
  );
}

export default About;