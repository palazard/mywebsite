import React from 'react';
import { Col } from 'react-bootstrap';


function ContactCard ({data}) {
  return (

    <Col className="d-flex align-items-center justify-content-center">
        <div className="card d-flex align-items-center justify-content-center pt-4 pb-3" style={{width: "18rem"}} >
        <i style={{fontSize: "90px", color: "#4f84b5", paddingRight:"10px"}} className="bi bi-envelope custom-icon"/>
        <div className="card-body d-flex flex-column align-items-center justify-content-center">
            <p style={{color: "#4f84b5"}} className="card-text">{data[0].email}</p>
            <a href="mailto:alazard.pauline@gmail.com" className="btn btn-primary">Email me!</a>
        </div>
        </div>
  </Col>

  );
}

export default ContactCard;