import React from 'react';
import '../CarouselSlides.css';

function CarouselProjectsItem ({item}) {

    // console.log(project);

    return (

        <div className=" w-100 custom-bg-carousel d-flex flex-column justify-content-center align-items-center text-center">
            <img className="custom-image-carousel" src={item.image} alt=""/>
            <div className='custom-buffer-medium'></div>
            <h4><a href={item.link} target='blanc'>{item.title}</a></h4>
            <p>{item.description}</p>
        </div>

    );
}

export default CarouselProjectsItem;