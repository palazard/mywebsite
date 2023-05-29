import React from 'react';
import '../../CarouselSlides.css';

function CarouselEducationItem ({item}) {

    // console.log(school);

    return (

        <div className=" w-100 custom-bg-carousel d-flex flex-column justify-content-center align-items-center text-center">
            <img className="custom-logo-carousel" src={item.logo} alt=""/>
            <div className='custom-buffer-medium'></div>
            <h4>{item.title}</h4>
            <p>{item.date}<br/>
            {item.school}</p>
        </div>

    );
}

export default CarouselEducationItem;