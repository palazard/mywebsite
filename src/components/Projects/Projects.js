import React from 'react';
import WrapContainer from '../wrappers/WrapContainer';
import CarouselSlides from '../CarouselSlides';


function Projects({title, data}) {
  return (
    <WrapContainer title={title}>
        <CarouselSlides data={data}/>
    </WrapContainer>
  );
}

export default Projects;