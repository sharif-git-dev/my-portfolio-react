// src/components/HeroSection.js
import React from 'react';
import './Style.css';
import { Container, Row, Col, Carousel} from 'react-bootstrap';

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import sorcero from '../assets/Project_img/sorcero.jpg';
import Adeptia from '../assets/Project_img/Adeptia.jpg';
import SOLBooks from '../assets/Project_img/Solbooks.jpg';
import YHH from '../assets/Project_img/YHH.png';
import Ekhtibary from '../assets/Project_img/Ekhtibary.jpg';

const Services = ({ isVisible }) => {
  const TargetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll ({
    target: TargetRef,
  })
  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-95%"]);


  const { scrollY } = useScroll();
  const Num = useTransform(scrollY, [0, 1000], [1, 5]);  
  
  const projects = [
    {
        title: "Sorcero",
        description: "Sorcero transforms scattered medical data into high-quality insights, providing teams with instant access to information that improves and saves patient lives.",
        image: sorcero,
        buttons: ["Design", "User Research", "Animations"],
    },
    {
        title: "Adeptia",
        description: "Adeptia offers a no-code platform that simplifies data integration and process automation, allowing organizations to connect applications and streamline workflows effectively.",
        image: Adeptia,
        buttons: ["Design", "User Research", "Animations"],
    },
    {
        title: "SOLBooks",
        description: "SOLBooks is an accounting application designed to help businesses manage their finances efficiently, providing tools for invoicing, expense tracking, and financial reporting.",
        image: SOLBooks,
        buttons: ["Design", "User Research", "Animations"],
    },
    {
        title: "YH&H Project",
        description: "The YH&H Project is a project management website that streamlines team collaboration, task tracking, and project timelines, making it easier for teams to stay organized and meet deadlines.",
        image: YHH, // Replace with actual image URL
        buttons: ["Design", "User Research", "Animations"],
    },
    {
        title: "Ekhtibary",
        description: "Ekhtibary is a platform designed for managing educational assessments, providing tools for students and educators to create, share, and analyze tests and quizzes.",
        image: Ekhtibary, // Replace with actual image URL
        buttons: ["Design", "User Research", "Animations"],
    },
];


  return (
    <Container>
    <Row className='full-section text-center align-content-center'>
      <h1 className='Question2 text-white text-start'>Featured Works</h1>
      <Col>
      <Carousel className=' pe-5 pb-5 i' >
                {projects.map((project, index) => (
                    <Carousel.Item key={index}>
                        <div className='row'>
                            <div className='col '>
                              <div className='text-start'>
                              <h1 className='worknum'>{String(index + 1).padStart(2, '0')}.</h1>
                                <h3 className='Question3 text-white'>{project.title}</h3>
                                {project.buttons.map((button, btnIndex) => (
                                    <button key={btnIndex} className='m-1 p-2 pe-3 ps-3 rounded-5'>
                                        {button}
                                    </button>
                                ))}
                              </div>
                               
                            </div>
                            <div className='col'>
                                <div className="image-container">
                                    <img
                                        src= {project.image}
                                        alt={project.title}
                                        className="img-fluid"
                                    />
                                    <div className="overlay p-5">
                                        <p>{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
      </Col>
            
    </Row>
    </Container>
  );
};

export default Services;



// import React, { useEffect, useState } from 'react';
// import { Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

// const FeaturedWorksCarousel = () => {
//     const projects = [
//         {
//             title: "Sorcero",
//             description: "This is the description text that appears on hover.",
//             image: "https://www.sorcero.com/hubfs/Sorcero-Paltform-screen-2-1.jpg",
//         },
//         {
//             title: "Adeptia",
//             description: "Adeptia project description goes here.",
//             image: "https://example.com/adeptia.jpg", // Replace with actual image URL
//         },
//         {
//             title: "SOLBooks",
//             description: "SOLBooks project description goes here.",
//             image: "https://example.com/solbooks.jpg", // Replace with actual image URL
//         },
//         {
//             title: "YH&H Project",
//             description: "YH&H Project description goes here.",
//             image: "https://example.com/yh-h-project.jpg", // Replace with actual image URL
//         },
//         {
//             title: "Ekhtibary",
//             description: "Ekhtibary project description goes here.",
//             image: "https://example.com/ekhtibary.jpg", // Replace with actual image URL
//         },
//     ];

//     const [activeIndex, setActiveIndex] = useState(0);
//     const carouselRef = React.useRef(null);

//     const snapToSection = () => {
//         if (carouselRef.current) {
//             carouselRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     const handleScroll = (event) => {
//         event.preventDefault(); // Prevent default scroll behavior
//         const delta = Math.sign(event.deltaY);

//         // Change the active index based on scroll direction
//         const newIndex = activeIndex + delta;

//         // Ensure newIndex is within bounds
//         if (newIndex >= 1 && newIndex < projects.length) {
//             setActiveIndex(newIndex);
//         }
//     };

//     useEffect(() => {
//         // Snap to the section once the component mounts
//         snapToSection();

//         const carouselElement = carouselRef.current;
//         if (carouselElement) {
//             carouselElement.addEventListener('wheel', handleScroll, { passive: false });
//         }

//         return () => {
//             if (carouselElement) {
//                 carouselElement.removeEventListener('wheel', handleScroll);
//             }
//         };
//     }, []);

//     return (
//         <div ref={carouselRef} className='position-relative section1 justify-content-center' style={{ height: '350vh' }}>
//             <Container className='position-sticky top-0 overflow-hidden'>
//                 <h1 className='Question2 text-white'>Featured Works</h1>
//                 <div className="carousel">
//                     <div className='row'>
//                         <div className='col'>
//                             <h1 className='worknum'>{String(activeIndex + 1).padStart(2, '0')}.</h1>
//                             <h3 className='Question3 text-white'>{projects[activeIndex].title}</h3>
//                         </div>
//                         <div className='col'>
//                             <div className="image-container">
//                                 <img
//                                     src={projects[activeIndex].image}
//                                     alt={projects[activeIndex].title}
//                                     className="img-fluid"
//                                 />
//                                 <div className="overlay">
//                                     <p>{projects[activeIndex].description}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Container>  
//         </div>
//     );
// };

// export default FeaturedWorksCarousel;
