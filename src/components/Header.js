
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {

  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  return (
    <section className='container full-section'>

      <div className="my-5 text-center">
      <div className="text-end">
            {isMobileView ? (
              <div>
              <h1  className='qh2s '>Designing Experiences, One Pixel at a Time</h1>
              </div>
            ) : (
              <div>
              <h1  className='qh2 '>Designing Experiences, One Pixel at a Time</h1>
              </div>
            )}
          </div>
       <div className='qh3'>Hi, I’m Sharif Jamo</div>

       <p className='qh4'>My job is Crafting Intuitive User Experiences: Blending Creativity  <p/>
        and Strategy to Turn Ideas into Seamless Digital Journeys</p>
       <div>
        <button type="button" class="btn btn-dark m-2">Get In Touch</button>
        <button type="button" class="btn drawer-links text-white m-2">See My Works</button>
       </div>
      </div>
    
  
    </section>
    
  );
};

export default Header;
