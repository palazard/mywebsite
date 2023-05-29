import React from 'react';
import WrapContainer from '../wrappers/WrapContainer';
import CarouselSlides from '../CarouselSlides';


function Cms({title, data}) {
  return (
    <WrapContainer title={title}>
        <CarouselSlides data={data}/>
    </WrapContainer>
  );
}

export default Cms;