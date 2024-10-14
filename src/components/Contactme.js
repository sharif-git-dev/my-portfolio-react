import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contactme = () => {
  return (
   <Container> 
    <h1 className='text-center'>Let’s Talk</h1>
        <div class="mb-5 mt-5">
          <label for="exampleFormControlTextarea1" class="form-label">What are you looking for?</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Descripe your project'></textarea>
        </div>
        <div class="mb-5 mt-5">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="example@gmail.com" />
        </div>
       
   </Container>
)
};

export default Contactme;