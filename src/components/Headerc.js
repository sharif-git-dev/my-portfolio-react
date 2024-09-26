
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <Container className='full-section'>
      <Row className="my-5 ">
       <h1>Designing Experiences, One Pixel at a Time</h1>
       <h3>Hi, I’m Sharif Jamo</h3>
       <h5>My job is Crafting Intuitive User Experiences: Blending Creativity and Strategy to Turn Ideas into Seamless Digital Journeys</h5>
       <div>
        <button>Get In Touch</button>
        <button>See My Works</button>
       </div>
      </Row>
    </Container>
  );
};

export default Header;
