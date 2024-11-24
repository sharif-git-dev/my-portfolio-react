import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./Style.css";

const Contactme = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle the mailto link
  const handleSendEmail = () => {
    const subject = encodeURIComponent("Project Inquiry");
    const body = encodeURIComponent(`Message: ${message}\n\nContact Email: ${email}`);
    window.location.href = `mailto:sharefjammoo@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <Container> 
      <Row className='full-section text-end p-lg-5 m-lg-5 '>
        <Col>
          <h1 className='text-center Question2 text-white'>Let’s Talk</h1>
          <div className="mb-5 mt-5 text-start">
            <label htmlFor="exampleFormControlTextarea1" className="form-label text-white">What are you looking for?</label>
            <textarea
              className="form-control bg-transparent text-white"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Describe your project"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-5 mt-5 text-start">
            <label htmlFor="exampleFormControlInput1" className="form-label text-white">Email address</label>
            <input
              type="email"
              className="form-control bg-transparent text-white"
              id="exampleFormControlInput1"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button  onClick={handleSendEmail} type="button" class="btn btn-dark m-2 px-5 py-2">Send Email</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Contactme;