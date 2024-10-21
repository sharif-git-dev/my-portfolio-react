import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Style.css";

const Contactme = () => {
  return (
   <Container > 
    <Row className='full-section '>
   <Col className=''>
   <h1 className=' text-center Question2 text-white'>Let’s Talk</h1>
        <div class="mb-5 mt-5">
          <label for="exampleFormControlTextarea1" class="form-label text-white">What are you looking for?</label>
          <textarea class="form-control bg-transparent text-white " id="exampleFormControlTextarea1" rows="3" placeholder='Descripe your project'></textarea>
        </div>
        <div class="mb-5 mt-5 ">
          <label for="exampleFormControlInput1" class="form-label text-white">Email address</label>
          <input type="email" class="form-control bg-transparent text-white" id="exampleFormControlInput1" placeholder="example@gmail.com" />
        </div>
   </Col>
  
    </Row>
   </Container>
)
};

export default Contactme;