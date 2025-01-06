// YH&H Project 
import sorcero from '../assets/Project_img/sorcero.jpg';
import Adeptia from '../assets/Project_img/Adeptia.jpg';
import SOLBooks from '../assets/Project_img/Solbooks.jpg';
import YHH from '../assets/Project_img/YHH.png';
import Ekhtibary from '../assets/Project_img/Ekhtibary.jpg';
import React from 'react';
import '../components/Style.css';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { useState } from 'react';
import { motion } from 'framer-motion'
import { SplitText } from '../components/SplitText'


export function Portfolio () {

  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

    const projects = [
        {
          title: "Sorcero",
          description: "Sorcero transforms scattered medical data into high-quality insights, providing teams with instant access to information that improves and saves patient lives.",
          image: sorcero,
          link: "/Sorcero", // Link to the Sorcero project page
        },
        {
          title: "Adeptia",
          description: "Adeptia offers a no-code platform that simplifies data integration and process automation, allowing organizations to connect applications and streamline workflows effectively.",
          image: Adeptia,
          link: "/Adeptia", // Link to the Adeptia project page
        },
        {
          title: "SOLBooks",
          description: "SOLBooks is an accounting application designed to help businesses manage their finances efficiently, providing tools for invoicing, expense tracking, and financial reporting.",
          image: SOLBooks,
          link: "/SOLBooks", // Link to the SOLBooks project page
        },
        {
          title: "YH&H Project",
          description: "The YH&H Project is a project management website that streamlines team collaboration, task tracking, and project timelines.",
          image: YHH,
          link: "/Yh-h", // Add the link for the YH&H project
        },
        {
          title: "Ekhtibary",
          description: "Ekhtibary is a platform designed for managing educational assessments.",
          image: Ekhtibary,
          link: "/Ekhtibary", // Link to the Ekhtibary project page
        },
      ];
    
    return (
     <Container>
      <Row className=' text-start align-content-center'>
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
                P o r t f o l i o        
                </SplitText>
                </motion.div>
                </div>
                <div className="container pt-5 pb-5">
      <h1 className="Question3 text-white text-start">Previous Works</h1>
      <div className="row row-cols-1 row-cols-lg-2">
        {projects.map((project, index) => (
          <div className='col'>
          {isMobileView ? (
            
             <div key={index} className=" pb-5">
              
             <Link to={project.link} className="widget-content ">
             <div className="widget-content  ">
                   <h3 className=" Question3  text-white">{project.title}</h3>
                   <div className="text-start">
                     <p className=" text-white">
                       {project.description}
                     </p>
                   </div>
                 </div>
             <div className='bg-black position-absolute blackoverlay '>asdsas</div>
               <div
                 className="widget-mobile "
                 style={{ backgroundImage: `url(${project.image})`, color: 'white'}}
               >
                
               </div>
             </Link>
           </div>
          ) : (
            <div key={index} className="col pt-5 pb-5 pe-5 text-center">
            <Link to={project.link} className="widget-content">
                  <h3 className="text-start text-white Question3 ">{project.title}</h3>
              <div
                className="widget"
                style={{ backgroundImage: `url(${project.image})` }}
              >
               <div className="widget-overlay">
                    <p className="widget-description text-white text-center">
                      {project.description}
                    </p>
                  </div>
              </div>
             
            </Link>
          </div>
          )}
        </div>
        ))}
      </div>
    </div>
      </Row>
    </Container>
    );
  };
  
  export default Portfolio;
  