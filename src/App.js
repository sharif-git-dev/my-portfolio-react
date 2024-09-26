// src/App.js
import React from 'react';
import Services from './components/Services';
import PortfolioSection from './components/PortfolioSection';
import Works from './components/Works';
import Footer from './components/Footer';
import Question from './components/Question';
import Navbar from './components/Navbar';
import Header from './components/Headerc';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';


const App = () => {
  return (
    <div className="App " >
      <Navbar /> 
      {/* Header */}
      <Header />
      {/* question  */}
      <Question />
      {/* services */}
      <Services />
      {/* works */}
      <Works  />
      {/* about me */}
      
      <PortfolioSection />
      {/* Testimonials */}     
      <PortfolioSection />
      {/* why work with me? */}
      <PortfolioSection />
      {/* contact */}
      <Footer />
    </div>
  );
};

export default App;
