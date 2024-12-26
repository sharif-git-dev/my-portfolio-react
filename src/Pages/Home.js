// src/App.js
import React from 'react';
import Services from '../components/Services';
import AboutSection from '../components/AboutSection';
import Contactme from '../components/Contactme';
import Works from '../components/Works';
import Question from '../components/Question';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import { Element } from 'react-scroll';


import 'bootstrap/dist/css/bootstrap.min.css';

export function Homepage () {
  return (
      <div className="App bgblack">
            <div className="snap-container">
              <Element name="home" id="home">
                <Header />
              </Element>
              <Element name="question" id="question">
                <Question />
              </Element>
              <Element name="portfolio" id="portfolio">
                <Works />
                </Element>
              <Element name="services" id="services">
                <Services />
              </Element>
              <Element name="about" id="about">
                <AboutSection />
              </Element>
              <Element name="contact" id="contact">
                <Contactme />
              </Element>
            </div>
      </div>
  );
};

export default Homepage;
