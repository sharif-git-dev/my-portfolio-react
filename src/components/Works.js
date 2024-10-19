// src/components/HeroSection.js
import React from 'react';
import './Style.css';
import { Container, Row, Col, ButtonGroup} from 'react-bootstrap';
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";


const Services = ({ isVisible }) => {
  const TargetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll ({
    target: TargetRef,
  })
  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-95%"]);


  const { scrollY } = useScroll();
  const Num = useTransform(scrollY, [0, 1000], [1, 5]);  

  return (
    <section className='full-section'>
      <Container>
      {/* <motion.div style={{ x }}  className='d-flex text-nowrap qh1'>
         </motion.div> */}

<div className='row'>
   <div className='col '>
   {/* <motion.div className='worknum sticky'
      style={{
        position: 'sticky',
        top: 0,
        textAlign: 'center',
        fontSize: '2rem',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      }}
    >
      {Num}
    </motion.div> */}
        <h1 className='Question2 text-white '>Featured Works</h1>
        
        <h1 className='worknum'>01.</h1>
      
        <h3 className='Question3 text-white'>Sorcero</h3>
        
        <button className='m-1 p-2 pe-3 ps-3 rounded-5'>Design </button>
        <button className='m-1 p-2 pe-3 ps-3 rounded-5'> User Research </button>
        <button className='m-1 p-2 pe-3 ps-3 rounded-5'>Animations</button>
   </div>

   <div className='col'>
   <img src='https://www.sorcero.com/hubfs/Sorcero-Paltform-screen-2-1.jpg' class="img-fluid" />
   </div>
   </div>
      </Container>
      
 
    </section>
  );
};

export default Services;
