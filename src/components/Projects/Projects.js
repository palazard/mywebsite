import React from 'react';
import WrapContainer from '../wrappers/WrapContainer';
import CarouselSlides from '../Carousel/CarouselSlides';
import ScrollAnimation from 'react-animate-on-scroll';


function Projects({title, data}) {
  return (
    <WrapContainer title={title}>
      <ScrollAnimation duration={1.5} animateIn="animate__fadeIn" animateOnce={true}>
        <CarouselSlides data={data}/>
      </ScrollAnimation>
    </WrapContainer>
  );
}

export default Projects;