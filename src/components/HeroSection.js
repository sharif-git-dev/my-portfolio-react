// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = ({ isVisible }) => {
  return (
    <section className={`section hero-section ${isVisible ? 'slide-in' : 'slide-out'}`}>
      <h1>Welcome to My Portfolio</h1>
      <p>Discover my work and experience as a UX designer.</p>
    </section>
  );
};

export default HeroSection;
