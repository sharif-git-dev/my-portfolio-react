import React, { useState } from 'react';

import { SplitText } from './SplitText'
import { motion } from 'framer-motion'
import warm from '../assets/warm.webm';

import Contactme from "./Contactmepopup";
import { Link } from 'react-scroll'; // Import Link from react-scroll


const Header = () => {

  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);


  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

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
              transition={{delay:2.8, duration:2}}

                className='qh3'>Hi, I’m Sharif Jamo
                </motion.div>
                <motion.p 
             initial={{ opacity: 0 }}
              animate={{ opacity: 1,}}
              transition={{delay:3.0, duration:2}}

                className='qh4'>My job is Crafting Intuitive User Experiences: Blending Creativity and Strategy to Turn Ideas into Seamless Digital Journeys
                </motion.p>
      
                <motion.div 
             initial={{ opacity: 0 }}
              animate={{ opacity: 1,}}
              transition={{delay:3.0, duration:2}}>

                      <button   class="btn btn-dark m-2" onClick={handleShow}>Get In Touch</button>
                      <Contactme show={showModal} handleClose={handleClose} />
                    <Link to="portfolio">
                        <button type="button" class="btn drawer-links text-white m-2">See My Works</button>
                    </Link>
        </motion.div>
      </div>
    
  
    </section>
    
  );
};

export default Header;
