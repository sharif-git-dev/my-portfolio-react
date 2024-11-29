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
      <Row className='full-section text-center align-content-center'>
        <h1 className='Question2 text-white text-start'>Featured Works</h1>
        <Col>
          <Carousel className=' pe-lg-5- pb-lg-5'>
            {projects.map((project, index) => (
              <Carousel.Item key={index}>
                <div>
                  {isMobileView ? (
                    <div>
                      <div className='text-start'>
                        <h1 className='Question2 text-white'>{String(index + 1).padStart(2, '0')}.</h1>
                        <h3 className='Question3 text-white'>{project.title}</h3>
                      </div>
                      <div className="image-container">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="img-fluid"
                        />
                        <div className="overlay">
                          <p>{project.description}</p>
                          <Link to={project.link}>Learn More</Link> {/* Button to navigate to the project page */}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className='row'>
                      <div className='col'>
                        <div className='text-start'>
                          <h1 className='worknum'>{String(index + 1).padStart(2, '0')}.</h1>
                          <h3 className='Question3 text-white'>{project.title}</h3>
                          <Link to={project.link}>
                            <button className='m-1 p-2 pe-3 ps-3 rounded-5'>
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                      <div className='col'>
                        <div className="image-container">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="img-fluid"
                          />
                          <div className="overlay p-5">
                            <p>{project.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
    );
  };
  
  export default Portfolio;
  