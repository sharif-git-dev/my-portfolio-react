// src/components/HeroSection.js
import React from 'react';
import './Style.css';
import { Container, Row, Col} from 'react-bootstrap';

const Services = ({ isVisible }) => {
  return (
    <Container className='full-section'>

      <div>

      <h1 className='inline'>Services  </h1>  
      <h5 className='inline'>How I help</h5>  
       
      <Row>
      <Col className='p-2'>
        <h3>UI/UX Web and Mobile</h3>
        <p>Creating custom website that's fits your customers needs using research and designs processes</p>
       </Col>
       <Col className='p-2'>
        <h3>UI/UX Web and Mobile</h3>
        <p>Creating custom website that's fits your customers needs using research and designs processes</p>
       </Col>
       <Col className='p-2'>
        <h3>UI/UX Web and Mobile</h3>
        <p>Creating custom website that's fits your customers needs using research and designs processes</p>
       </Col>
       <Col className='p-2'>
        <h3>UI/UX Web and Mobile</h3>
        <p>Creating custom website that's fits your customers needs using research and designs processes</p>
       </Col>
       <Col className='p-2'>
        <h3>UI/UX Web and Mobile</h3>
        <p>Creating custom website that's fits your customers needs using research and designs processes</p>
       </Col>
      </Row>
       
      </div>


    </Container>
  );
};

export default Services;
