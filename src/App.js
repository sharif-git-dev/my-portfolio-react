// src/App.js
import React from 'react';
import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import Footer from './components/Footer';
import FirstSection from './components/FirstSection';
import Navbar from './components/Navbar';
import ResponsiveGrid from './components/ResponsiveGrid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';


const App = () => {
  return (
    <div className="App " >
      <Navbar />

      <ResponsiveGrid />


      <FirstSection />

      
      {/* Hero Section */}
      <HeroSection />


      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
