import React from 'react';
import WrapContainer from '../wrappers/WrapContainer';
import Row from 'react-bootstrap/Row';
import CarouselSlides from '../CarouselSlides';
import data from "../../contentList.json";
import CarouselItem from '../CarouselItem';


function Cms() {
  return (
    <WrapContainer>
        <Row>
            <div className="">
                <h2>Coding Projects</h2>
            </div>
        </Row>

        <Row as="li">

            <CarouselSlides renderComponent={(item)=><CarouselItem item={item}/>} data={data.cms} theme="cms"/>

        </Row>

        <div className='custom-buffer-small custom-border'></div>
        <div className='custom-buffer-medium'></div>
    </WrapContainer>
  );
}

export default Cms;