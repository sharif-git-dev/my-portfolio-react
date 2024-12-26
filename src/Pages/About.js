// adeptia

import React from 'react';
import AboutSection from '../components/AboutSection';
import { motion } from 'framer-motion'
import { SplitText } from '../components/SplitText'

export function About () {
  return (
    <div>
      <div className='full-page text-center align-content-center'>
                <motion.div className='inline Servicestxt '
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
                        delay: i * 0.05,
                        duration: 1.0,
                      }
                    })
                  }}>
                A b o u t        
                </SplitText>
                </motion.div>
                </div>
      <AboutSection/>
    </div>
  );
};

export default About;
