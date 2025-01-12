import "./Style.css";
import image from '../assets/image.png';
import husam from '../assets/husam.png';

import {React, useState} from 'react';
import { Container, Row, Col, ButtonGroup} from 'react-bootstrap';

const AboutSection = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  return (
    <div className="mt-5 pt-5">
      <div>
        {
         isMobileView ? (
          <div className='bg-white    rounded-5'>
          <div className='text-center pt-4'>
       
            <img className="rounded-4" src={image} alt="Sharif"/>
           
           <div className="text-start p-4"> 
           <h1>About Me</h1>
            <h3>Who am I.</h3>
            <p>Hey there! I’m Sharif Jamo, a UX Designer who loves turning cool ideas into awesome digital experiences. I focus on making your brand stand out with designs that are both fun and user-friendly. When I’m not crafting amazing interfaces, you’ll find me geeking out over tech trends or getting lost in video games. Let’s team up and create something fantastic together!</p>
           </div>
           
           
          </div>
           </div>
         ) : (
           <div className='bg-white container  p-5 rounded-5'>
          <Row className=' m-5 '>
          <Col className='overflow-hidden  col-6 col-md-4 ' >
            <img className="rounded-4" src={image} alt="Sharif"/>
            </Col>
            <Col className='col-sm-6 col-md-8'>
            <h1>About Me</h1>
            <h3>Who am I ------------------------------</h3>
            <p>Hey there! I’m Sharif Jamo, a UX Designer who loves turning cool ideas into awesome digital experiences. I focus on making your brand stand out with designs that are both fun and user-friendly. When I’m not crafting amazing interfaces, you’ll find me geeking out over tech trends or getting lost in video games. Let’s team up and create something fantastic together!</p>
            </Col>
          </Row>
           </div>
           )}
      </div>
           
          
          <h1 className='p-5 m-5 text-center text-white Question2'>Don't Believe Me?</h1>
          
          

           <div>
        {
         isMobileView ? (
          <div className='bg-white    rounded-5'>
          <div className='text-center pt-4'>
       
          <img className="rounded-4" src={husam} alt="Husam"/>
           
           <div className="text-start p-4"> 
           <h3>Testimonials</h3>
              <h1>Husam Khankan</h1>
              <h5>Senior .Net Software Engineer | Founder of Speed of Light | Entrepreneur</h5>
              <p>“Sharif is a talented UI/UX designer, a Quick learner and explorer, he was very helpful in delivering better user centric designs to our customers”</p>
           </div>
           
           
          </div>
           </div>
         ) : (
          <div className='bg-white container  p-5 rounded-5'>
          <Row className=' m-5 '>        
            <Col className='col-sm-6 col-md-8'>
            <h3>Testimonials</h3>
              <h1>Husam Khankan</h1>
              <h5>Senior .Net Software Engineer | Founder of Speed of Light | Entrepreneur</h5>
              <p>“Sharif is a talented UI/UX designer, a Quick learner and explorer, he was very helpful in delivering better user centric designs to our customers”</p>
            </Col>

            <Col className='overflow-hidden  col-6 col-md-4 ' >
            <img className="rounded-4" src={husam} alt="Husam"/>
            </Col>
          </Row>
           </div>
           )}
      </div>

          <Container className='text-center mt-5 mb-5 p-lg-5 bg-transparent'>
          <h1 className="text-white Question2">Why Work with Me?</h1>
          <h5 className="text-opacity-75 text-white ">As both a designer and developer, I’m committed to delivering exceptional UX design solutions. I ensure timely delivery of projects and create user-centric designs that truly resonate with your audience. Once your project is live, I’ll guide you through managing and updating your site, empowering you to handle your content confidently.
           You can rely on me for ongoing support whenever needed, and I’m always available if you have questions or require additional assistance. I’m dedicated to being a dependable partner throughout our collaboration.</h5>
          </Container>
    </div>
            
  );
};

export default AboutSection;
