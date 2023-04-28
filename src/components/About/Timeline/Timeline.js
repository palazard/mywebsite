import React from 'react';
import Icam from './icam.png';
import Ztm from './ztm.png';
import Neetwork from './neetwork-blanco.png';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import './Timeline.css';

function Timeline() {
  return (
        <div id="custom-timeline">
            <ul id="custom-dates">
                <li><a href="#1900" className="custom-date">1900</a></li>
                <li><a href="#1930" className="custom-date">1930</a></li>
                <li><a href="#1944" className="custom-date">1944</a></li>
            </ul>
            {/* <ul id="custom-issues">
                <li id="1900" class="selected">
                    <img className="custom-logo-about" src={Icam} alt=''/>
                    <h4 className="custom-date-title">1900</h4>
                    <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                </li>
                <li id="1930">
                    <img className="custom-logo-about" src={Neetwork} alt='' />
                    <h4 className="custom-date-title">1930</h4>
                    <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                </li>
                <li id="1944">
                    <img className="custom-logo-about" src={Ztm} alt=''/>
                    <h4 className="custom-date-title">1944</h4>
                    <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                </li>
            </ul> */}
            <Container id="custom-issues" fluid="xxl" className="flex align-items-center">
                {/* <Row id="1900">
                    <Col lg >
                        <div>
                        <img className="custom-logo-about" src={Icam} alt=''/>
                        </div>
                    </Col>
                    <Col lg >
                        <Row >
                            <Col lg={12}>
                                <div>
                                <h4 className="custom-date-title">1900</h4>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div>
                                <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row> */}
                <div id="1900" className='text-center'>
                    <img className="custom-logo-about" src={Icam} alt=''/>
                    <h4 className="custom-date-title">1944</h4>
                    <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                </div>
                <div id="1930" className='text-center'>
                    <img className="custom-logo-about" src={Neetwork} alt=''/>
                    <h4 className="custom-date-title">1944</h4>
                    <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                </div>
                <div id="1944" className='text-center'>
                    <img className="custom-logo-about" src={Ztm} alt=''/>
                    <h4 className="custom-date-title">1944</h4>
                    <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                </div>
            </Container>
            {/* <div id="grad_top"></div>
            <div id="grad_bottom"></div> */}
            {/* <a href="#" id="next">+</a>
            <a href="#" id="prev">-</a> */}
        </div>
  );
}

export default Timeline;