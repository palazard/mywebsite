import Carousel from 'react-bootstrap/Carousel';
import React, { useState, useEffect } from 'react';
import './CarouselEducation.css';
import Icam from './icam.png';
import Ztm from './ztm.png';
import Neetwork from './neetwork-blanco.png';

function CarouselEducation () {

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
        <Carousel.Item>
            <div className=" w-100 custom-bg-carousel d-flex flex-column justify-content-center align-items-center text-center">
              <img className="custom-logo-carousel" src={Icam} alt="First slide"/>
              <div className='custom-buffer-medium'></div>
              <h4>Industrial Engineering Degree</h4>
              <p>2009-2014<br/>
              Institut Catholique des Arts et Métiers</p>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className=" w-100 custom-bg-carousel d-flex flex-column justify-content-center align-items-center text-center">
              <img className="custom-logo-carousel" src={Neetwork} alt="Second slide"/>
              <div className='custom-buffer-medium'></div>
              <h4>Master in Digital Marketing and Web Analytics</h4>
              <p>2020-2021<br/>
              Neetwork Business School</p>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className=" w-100 custom-bg-carousel d-flex flex-column justify-content-center align-items-center text-center">
              <img className="custom-logo-carousel" src={Ztm} alt="Third slide" />
              <div className='custom-buffer-medium'></div>
              <h4>Full Stack Developement Bootcamps</h4>
              <p>2023<br/>
              Zero to Mastery Academy</p>
            </div>
        </Carousel.Item>
      </Carousel>
    );
}

export default CarouselEducation;