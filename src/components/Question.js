// src/components/FirstSection.js
import React from 'react';
import './Style.css';
import { Container, Row, } from 'react-bootstrap';

const Question = () => {
  return (
    <Container className='full-section'>
      <Row className="my-5 ">
       <h1>Are you frustrated with websites that fail to capture the essence of your brand or drive growth?</h1>
       <h3>Look no further. </h3>
       <h5>I specialize in crafting premium web experiences that not only captivate but also elevate your business. By diving deep into your goals, passions, and unique details, I bring your vision to life in ways that truly stand out.</h5>
       
       <button>Scroll</button>
      </Row>
    </Container>
  );
};

export default Question;
