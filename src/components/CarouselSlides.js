import Carousel from 'react-bootstrap/Carousel';
import React, { useState, useEffect } from 'react';
import './CarouselSlides.css';

function CarouselSlide ({renderComponent, data, theme}) {

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
      <Carousel interval={2000} indicators={indicatorsState} controls={controlsState}>
        {data.map((item,i)=>
            { return(
              <Carousel.Item key={i}>
                  {renderComponent(item)}
              </Carousel.Item>
            )}
        )}       
      </Carousel>
    );
}

export default CarouselSlide;