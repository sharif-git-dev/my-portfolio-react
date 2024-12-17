// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Ensure this file exists

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Sharif Jamo. All rights reserved.</p>
      <p>
        Follow me on
        <a href="https://twitter.com/sharifjamo" target="_blank" rel="noopener noreferrer">Twitter</a> |
        <a href="https://linkedin.com/in/sharifjamo" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </footer>
  );
};

export default Footer; 
