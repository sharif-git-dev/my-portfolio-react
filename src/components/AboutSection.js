import React from 'react';
import { Container, Row, Col, ButtonGroup} from 'react-bootstrap';

const AboutSection = () => {
  return (
    <Container>

          <Row>
            <Col>
            <img src='https://avatars.githubusercontent.com/u/75867199?s=400&u=8132620f56930efbf7b9fe72375abac54865abfa&v=4' class="img-fluid" />
            </Col>
            <Col>
            <h1>About Me</h1>
            <h3>Who am I ------------------------------</h3>
            <p>Hey there! I’m Sharif Jamo, a UX Designer who loves turning cool ideas into awesome digital experiences. I focus on making your brand stand out with designs that are both fun and user-friendly. When I’m not crafting amazing interfaces, you’ll find me geeking out over tech trends or getting lost in video games. Let’s team up and create something fantastic together!</p>
            </Col>
          </Row>

          <h1 className='p-5 m-5 text-center'>Don't Believe Me?</h1>

          <Row>
            <Col>
              <h3>Testimonials</h3>
              <h1>Husam Khankan</h1>
              <h5>Senior .Net Software Engineer | Founder of Speed of Light | Entrepreneur</h5>
              <p>“Sharif is a talented UI/UX designer, a Quick learner and explorer, he was very helpful in delivering better user centric designs to our customers”</p>
            </Col>
            <Col>
              <img src='https://media.licdn.com/dms/image/C4D03AQEFVOm1IJUtvQ/profile-displayphoto-shrink_200_200/0/1572171717344?e=2147483647&v=beta&t=tWUMNpErUt9ZzWjiw9ckG4JytoKXXZbH_CRNWi_c_e4' class="img-fluid" />
            </Col>
          </Row>

          <div className='text-center p-5 m-5'>
            
          <h1>Why Work with Me?</h1>
          <p>As both a designer and developer, I’m committed to delivering exceptional UX design solutions. I ensure timely delivery of projects and create user-centric designs that truly resonate with your audience. Once your project is live, I’ll guide you through managing and updating your site, empowering you to handle your content confidently.
           You can rely on me for ongoing support whenever needed, and I’m always available if you have questions or require additional assistance. I’m dedicated to being a dependable partner throughout our collaboration.</p>
          </div>
    </Container>
            
  );
};

export default AboutSection;
