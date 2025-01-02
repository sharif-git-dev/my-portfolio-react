import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { useState } from 'react';
import sorcero from '../assets/Project_img/sorcero.jpg';
import Adeptia from '../assets/Project_img/Adeptia.jpg';
import SOLBooks from '../assets/Project_img/Solbooks.jpg';
import YHH from '../assets/Project_img/YHH.png';
import Ekhtibary from '../assets/Project_img/Ekhtibary.jpg';
import {Row , Col} from 'react-bootstrap';
import { color } from 'framer-motion';

const Services = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const projects = [
    {
      title: "Sorcero",
      description: "Sorcero transforms scattered medical data into high-quality insights, providing teams with instant access to information that improves and saves patient lives.",
      image: sorcero,
      link: "/Sorcero",
    },
    {
      title: "Adeptia",
      description: "Adeptia offers a no-code platform that simplifies data integration and process automation, allowing organizations to connect applications and streamline workflows effectively.",
      image: Adeptia,
      link: "/Adeptia",
    },
  ];

  return (
    <div className="container pt-5 pb-5">
      <h1 className="Question3 text-white text-start">Featured Works</h1>
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
      <Link to="portfolio">

                        <button type="button" class="btn btn-dark m-2">See More.</button>
                    </Link>
    </div>
  );
};

export default Services;
