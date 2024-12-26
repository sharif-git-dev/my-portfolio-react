// YH&H Project 

import React from 'react';
import { motion } from 'framer-motion'
import { SplitText } from '../components/SplitText'

export function Services () {
    return (
        <div className='servicesbg me-lg-2 ms-lg-2 rounded-bottom-5 bg-black'>
        <div className='container'>
            <div > 
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
                S e r v i c e s        
                </SplitText>
                </motion.div>
                </div>
              <h5 className='inline Question3 '>How I help</h5>   
              <div>
                  <div className='pb-5'>
                  <div className='p-4 descriptionwidmob'>
                  <h3>UI/UX Web and Mobile</h3>
                  <h5 className='descriptiontxt'>Creating custom website that's fits your customers needs using research and designs processes</h5>
                  
                </div>
                <div className='p-4 descriptionwidmob'>
                  <h3>Animations </h3>
                  <h5 className='descriptiontxt '>Developing engaging animations for web and mobile applications to capture user attention and enhance interaction.</h5>
                </div>
                <div className='p-4 descriptionwidmob'>
                  <h3>Consulting and Strategy</h3>
                  <h5 className='descriptiontxt'>Offering expert advice on user experience strategy, design best practices, and project planning to achieve successful outcomes.</h5>
                </div>
                <div className='p-4 descriptionwidmob'>
                  <h3>Front-End Development</h3>
                  <h5 className='descriptiontxt'>Building responsive web and mobile applications using technologies such as Flutter and Dart, and providing custom HTML/CSS solutions. Experience with WordPress for content </h5>              </div>
                <div className='p-4  descriptionwidmob'>
                  <h3 className=''>Brand Identity</h3>
                  <h5 className='descriptiontxt '>Designing logos, style guides, and visual assets to establish a strong brand presence and enhance your company’s visual identity.</h5>
                </div>
                    </div>
                </div> 
                  </div>
                </div>
      </div>
      </div>
    );
  };
  
  export default Services;
  