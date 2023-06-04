import React from 'react';
import WrapContainer from '../wrappers/WrapContainer';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';


function Contact({title, data}) {

  const numberColumns = data.length;
  const unitColumns = 12/numberColumns;

  return (
    <WrapContainer title={title}>
        <Row >
          {data.map((contact,i)=>
            { return(
              <Col sm={6} lg={unitColumns} className="d-flex align-items-center justify-content-evenly p-2">
                <ScrollAnimation animateIn="animate__bounceInRight" animateOnce={true}>
                  <div className="anim-bounce card d-flex align-items-center justify-content-center pt-4 pb-3" style={{width: "250px"}} >
                    <i style={{fontSize: "80px", color: "#4f84b5", paddingRight:"10px"}} className={contact.icon}/>
                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                        <p style={{color: "#4f84b5"}} className="card-text">{contact.title}</p>
                        <a target="blank" href={contact.link} className="btn btn-primary">{contact.button}</a>
                    </div>
                  </div>
                </ScrollAnimation>
              </Col>
            )}
          )}
        </Row>
    </WrapContainer>
  );
}

export default Contact;