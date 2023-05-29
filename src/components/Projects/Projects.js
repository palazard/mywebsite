import React from 'react';
import WrapContainer from '../wrappers/WrapContainer';
import Row from 'react-bootstrap/Row';
import CarouselSlides from '../CarouselSlides';
import data from "../../contentList.json";
import CarouselItem from '../CarouselItem';


function Projects(props) {
  return (
    <WrapContainer title={props.title}>
        <Row>
            <CarouselSlides renderComponent={(item)=><CarouselItem item={item}/>} data={data.projects}/>
        </Row>
    </WrapContainer>
  );
}

export default Projects;