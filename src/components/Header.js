import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { SplitText } from './SplitText'
import { AnimatePresence, easeIn, easeInOut, easeOut, motion } from 'framer-motion'
import warm from '../assets/warm.webm';


const Header = () => {

  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  return (
    <section className=' full-section'>
      <video loop autoPlay muted  src={warm} type="video/webm" className='bgvideo '/>
      
      <div className="container text-center">
      
      <div className="text-end">
            {isMobileView ? (
              <div>
              <h1  className='qh2s '>Designing Experiences, One Pixel at a Time</h1>
              </div>
            ) : (
            <motion.div className='qh2'
            initial={{ opacity: 1 ,}}
              animate={{ opacity: 1,}}
              exit={{ opacity: 1 }}
              >
              <SplitText
              initial={{ y: '90%' }}
              animate="visible"
              variants={{
                visible: i => ({
                  y: 0,
                  transition: {
                    easeOut: 1,
                    delay: i * 0.15,
                    duration: 1.2,
                  }
                })
              }}>
            Designing  Experiences, One Pixel at a Time        
            </SplitText>
                </motion.div>
            )}
          </div>
       <motion.div 
             initial={{ opacity: 0 }}
              animate={{ opacity: 1,}}
              transition={{delay:3.5, duration:2}}

                className='qh3'>Hi, I’m Sharif Jamo
                </motion.div>
                <motion.p 
             initial={{ opacity: 0 }}
              animate={{ opacity: 1,}}
              transition={{delay:4.0, duration:2}}

                className='qh4'>My job is Crafting Intuitive User Experiences: Blending Creativity and Strategy to Turn Ideas into Seamless Digital Journeys
                </motion.p>
      
                <motion.div 
             initial={{ opacity: 0 }}
              animate={{ opacity: 1,}}
              transition={{delay:4.0, duration:2}}
                  >
                    <a href='#contact'>
        <button type="button" class="btn btn-dark m-2">Get In Touch</button>
                    </a>
                    <a href='#portfolio'>
        <button type="button" class="btn drawer-links text-white m-2">See My Works</button>
                    </a>
        </motion.div>
      </div>
    
  
    </section>
    
  );
};

export default Header;
