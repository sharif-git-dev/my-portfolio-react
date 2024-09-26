// src/components/HeroSection.js
import React from 'react';
import './Style.css';
import { Container, Row, Col, ButtonGroup} from 'react-bootstrap';

const Services = ({ isVisible }) => {
  return (
    <Container className='full-section'>
   <Row>
   <Col>
   <h1>Featured Works</h1>
   <h1>01.</h1>
   <h3>Sorcero</h3>
   <ButtonGroup>
   <button className='m-1 p-2'>
   Design 
      </button>
      <button className='m-1 p-2'>
      User Research 
    </button>
    <button className='m-1 p-2'>
    Animations
    </button>
   </ButtonGroup>
   </Col>
   <Col>
   <img src='https://www.sorcero.com/hubfs/Sorcero-Paltform-screen-2-1.jpg' class="img-fluid" />
   </Col>
   </Row>
    </Container>
  );
};

export default Services;
