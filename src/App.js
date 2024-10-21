// src/App.js
import React from 'react';
import Services from './components/Services';
import AboutSection from './components/AboutSection';
import Contactme from './components/Contactme';
import Works from './components/Works';
import Footer from './components/Footer';
import Question from './components/Question';
import Navbar from './components/Navbar';
import Header from './components/Header';
import CustomCursor from './components/customcursor/customcursors';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import { Link, Element } from 'react-scroll';
import Scrolltest from './components/Scrolltest';
const App = () => {

  return (
    <div className="App bg-black ">
    <CustomCursor />
      {/* <Scrolltest/> */}
      <Navbar />
      <div className="snap-container">
        <Element name="home" id="home">
          <Header />
        </Element>
        <Element name="question" id="question">
          <Question />
        </Element>
        <Element name="services" id="services">
          <Services />
        </Element>
        <Element name="portfolio" id="portfolio">
          <Works />
        </Element>
        <Element name="about" id="about">
          <AboutSection />
        </Element>
        <Element name="contact" id="contact">
          <Contactme />
        </Element>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
