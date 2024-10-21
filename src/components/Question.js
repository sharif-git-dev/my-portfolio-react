// src/components/FirstSection.js

import { useRef } from "react";
import React, { useState } from 'react';

import './Style.css';
import { Container, Row, } from 'react-bootstrap';
import { motion, useTransform, useScroll, clamp } from "framer-motion";
import { useInView } from 'react-intersection-observer';  



const Question = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  const TargetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll ({
    target: TargetRef,
  })

  const x = useTransform(scrollYProgress, [0, 0.8], ["35%", "-235%"], );
  const z = useTransform(scrollYProgress, [0, 0.8], ["35%", "-235%"], );


  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation once
    threshold: 0.7, // 70% of the element needs to be visible
  });


  return (
    <section className='bg-white rounded-top-5 me-lg-2 ms-lg-2  ' >
      
      <div className="">
            {isMobileView ? (
                    <div className="p-5">
                  <div className="qh2s text-start text-black">
                 
                  Is your website failing to reflect your <b c>brand?</b> 
         
                  </div>
                  <h1 className='text-start Question3'>LOOK NO FURTHER. </h1>
       <h5 className='qh4 text-start text-black'>I specialize in crafting premium web experiences that not only captivate but also elevate your business. By diving deep into your goals, passions, and unique details, I bring your vision to life in ways that truly <b>stand out.</b></h5>
       <div className='text-start pt-5'>
       
       <div>
       <svg width="40" height="94" viewBox="0 0 40 94" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9997 67.0352L23.9306 67.5964L24.4959 67.5964L35.4602 67.5964C38.921 67.5964 40.7889 71.7442 38.4797 74.3921L23.0196 92.1202C21.4152 93.9599 18.5848 93.9599 16.9804 92.1202L1.52026 74.3921C-0.788905 71.7442 1.07896 67.5963 4.53983 67.5964L15.5041 67.5964L16.0694 67.5964L16.0003 67.0352C15.9797 66.8676 15.969 66.6966 15.969 66.5229L15.969 45.8778C15.969 43.6143 17.7796 41.7901 20 41.7901C22.2204 41.7901 24.031 43.6143 24.031 45.8778L24.031 66.5229C24.031 66.6966 24.0203 66.8676 23.9997 67.0352ZM15.969 4.58778C15.969 2.32427 17.7796 0.499999 20 0.499999C22.2204 0.499999 24.031 2.32427 24.031 4.58778L24.031 6.88168C24.031 9.14519 22.2204 10.9695 20 10.9695C17.7796 10.9695 15.969 9.14519 15.969 6.88168L15.969 4.58778ZM15.969 22.9389C15.969 20.6754 17.7796 18.8511 20 18.8511C22.2204 18.8511 24.031 20.6754 24.031 22.9389L24.031 29.8206C24.031 32.0841 22.2204 33.9084 20 33.9084C17.7796 33.9084 15.969 32.0841 15.969 29.8206L15.969 22.9389Z" stroke="#202024"/></svg>
       </div>
       </div>
                  </div>
            ) : (
              <div>
              <div  className='position-relative section1 ' > 
              <div className='position-sticky top-0 overflow-hidden'>
                  <motion.div style={{ x }}  className='d-flex text-nowrap Question1 '>
                  Is your website failing to reflect your brand?
                  </motion.div>
              </div>
            </div>
            <div className='full-section container'> 
    <motion.div 
      ref={ref}
      initial={{ opacity: 0}} 
      animate={inView ? { opacity: 1,} : { opacity: 0 }} 
      transition={{ duration: 1 ,ease: "easeOut",  }}
      >
          <h1 className='text-center Question2'>LOOK NO FURTHER. </h1>
       <h5 className='p-4 Question3 text-center'>I specialize in crafting premium web experiences that not only captivate but also elevate your business. By diving deep into your goals, passions, and unique details, I bring your vision to life in ways that truly <b>stand out.</b></h5>
       <div className='text-center pt-5'>
       
       <div>
       <svg width="40" height="94" viewBox="0 0 40 94" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9997 67.0352L23.9306 67.5964L24.4959 67.5964L35.4602 67.5964C38.921 67.5964 40.7889 71.7442 38.4797 74.3921L23.0196 92.1202C21.4152 93.9599 18.5848 93.9599 16.9804 92.1202L1.52026 74.3921C-0.788905 71.7442 1.07896 67.5963 4.53983 67.5964L15.5041 67.5964L16.0694 67.5964L16.0003 67.0352C15.9797 66.8676 15.969 66.6966 15.969 66.5229L15.969 45.8778C15.969 43.6143 17.7796 41.7901 20 41.7901C22.2204 41.7901 24.031 43.6143 24.031 45.8778L24.031 66.5229C24.031 66.6966 24.0203 66.8676 23.9997 67.0352ZM15.969 4.58778C15.969 2.32427 17.7796 0.499999 20 0.499999C22.2204 0.499999 24.031 2.32427 24.031 4.58778L24.031 6.88168C24.031 9.14519 22.2204 10.9695 20 10.9695C17.7796 10.9695 15.969 9.14519 15.969 6.88168L15.969 4.58778ZM15.969 22.9389C15.969 20.6754 17.7796 18.8511 20 18.8511C22.2204 18.8511 24.031 20.6754 24.031 22.9389L24.031 29.8206C24.031 32.0841 22.2204 33.9084 20 33.9084C17.7796 33.9084 15.969 32.0841 15.969 29.8206L15.969 22.9389Z" stroke="#202024"/></svg>
       </div>
       </div>
      </motion.div>
    </div> 
            </div>
        
            )}
          </div>

   
     
          
    </section>
  );
};

export default Question;

