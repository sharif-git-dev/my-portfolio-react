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

  
  return (
    <section className='full-section'>
      <Container>
      {/* <motion.div style={{ x }}  className='d-flex text-nowrap qh1'>
         </motion.div> */}

<div className='row'>
   <div className='col'>
        <h1>Featured Works</h1>
        <h1>01.</h1>
        <h3>Sorcero</h3>
        <ButtonGroup>
        <button className='m-1 p-2'>
        Design 
            </button>
            <button className='m-1 p-2'>
            User Research 
          </button>
          <button className='m-1 p-2'>
          Animations
          </button>
        </ButtonGroup>
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
