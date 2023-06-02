import React from 'react';
import WrapContainer from '../wrappers/WrapContainer';
import CarouselSlides from '../Carousel/CarouselSlides';


function Projects({title, data}) {
  return (
    <WrapContainer title={title}>
        <CarouselSlides data={data}/>
    </WrapContainer>
  );
}

export default Projects;