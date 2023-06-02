import React from 'react';
import './CarouselSlides.css';

function CarouselItem ({item}) {

    // console.log(item);

    return (

        <div className=" w-100 custom-bg-carousel d-flex flex-column justify-content-center align-items-center text-center">
            {!(!item.logo) && <img className="custom-logo-carousel img-fluid" src={item.logo} alt=""/>}
            {!(!item.image) && <img className="custom-image-carousel img-fluid" src={item.image} alt=""/>}
            <div className='custom-buffer-medium'></div>
            {!(!item.date) && <h4>{item.title}</h4>}
            {!(!item.date) && <p>{item.date}<br/>{item.school}</p>}
            {!(!item.link) && <h4><a href={item.link} target='blanc'>{item.title}</a></h4>}
            {!(!item.description) && <p>{item.description}</p>}
            <div className='custom-buffer-medium'></div>
        </div>

    );
}

export default CarouselItem;