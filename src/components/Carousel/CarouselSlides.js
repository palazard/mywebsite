import Carousel from 'react-bootstrap/Carousel';
import React, { useState, useEffect } from 'react';
import './CarouselSlides.css';
import { Row } from 'react-bootstrap';
import CarouselItem from './CarouselItem';

function CarouselSlide ({data}) {

    const [indicatorsState, setIndicatorsState] = useState(undefined);
    const [controlsState, setControlsState] = useState(undefined);

    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        if (window.innerWidth <= 596){
          setIndicatorsState(true);
          setControlsState(false);
        } else {
          setIndicatorsState(false);
          setControlsState(true);
        }
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount


    return (
      <Row>
        <Carousel interval={2000} indicators={indicatorsState} controls={controlsState} className='p-0'>
          {data.map((item,i)=>
              { return(
                <Carousel.Item key={i}>
                    <CarouselItem item={item}/>
                </Carousel.Item>
              )}
          )}       
        </Carousel>
      </Row>
    );
}

export default CarouselSlide;