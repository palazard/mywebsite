import React from 'react';
import './App.css';


function Test() {
    return (
        <div class="home-banner">
            <div class="container">
                <div class="row full-screen align-items-center">
                    <div class="col-lg-6">
                        <div class="type-box">
                            <h6>Hello, I am</h6>
                            <h1 class="font-alt">Sergio Gadot</h1>
                            <p class="lead">I Am Passionate <span id="type-it" class="subtitle subtitle-typed">Dev</span><span class="typed-cursor" aria-hidden="true">|</span></p>
                            <p class="desc">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                            <div class="btn-bar"><a class="px-btn px-btn-theme" href="#">Donwload CV</a></div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="hb-img">
                            <img src="static/img/home-banner.png" title="" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Test;