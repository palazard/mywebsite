import React from 'react';
import Row from 'react-bootstrap/Row';
import CarouselSlides from '../CarouselSlides';
import CarouselItem from '../CarouselItem';


function SectionSlider({data}) {
  return (
    <Row>
        <CarouselSlides renderComponent={(item)=><CarouselItem item={item}/>} data={data}/>
    </Row>
  );
}

export default SectionSlider;