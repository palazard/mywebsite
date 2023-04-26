import React from 'react';
// import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import PaulineAlazard from '../Introduction/pauline-alazard.png';

import '../Introduction/Introduction.css';

function About() {
  return (
    <div className="custom-container row p-lg-3 p-md-2 full-screen align-items-center justify-content-evenly">
        <div className="col-lg-6 d-flex justify-content-center custom-column">
            <div className="">
                <h5>Hello, I am</h5>
                <h1 className="pb-2">Pauline Alazard</h1>
                <p className="text">Industrial engineer / problems solver who love coding, learning and creating new things and surfing around the world.</p>
                <Button className="btn btn-primary custom-button"><a href="#">Donwload CV</a></Button>
            </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center custom-column">
            <div className="">
                <img className="custom-image" src={PaulineAlazard} title="" alt=""/>
            </div>
        </div>
    </div>
  );
}

export default About;