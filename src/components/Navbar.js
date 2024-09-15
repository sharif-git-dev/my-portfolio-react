// src/components/Navbar.js

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa'; // Importing FaBars icon
import './Navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  // Handle scroll for showing/hiding navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScrollTop) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll); // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  // Handle window resize for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
      if (window.innerWidth > 768 && isDrawerOpen) {
        setIsDrawerOpen(false); // Close drawer if switching to desktop view
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDrawerOpen]);

  // Toggle drawer for mobile view
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className={`navbar ${showNavbar ? 'navbar-show' : 'navbar-hide'}`}>

<Container>
<Row className="align-items-center justify-content-between">  

  <Col className="text-left">
    <div className="navbar-brand">Sharif Jamo</div>
  </Col>

  {/* Links or Drawer Icon on the right */}
  <Col  className="text-right">  
    {isMobileView ? (
      <div className="navbar-drawer-icon" onClick={toggleDrawer}>
        <FaBars size={24} />
      </div>
    ) : (
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    )}
  </Col>
</Row>


  {/* Drawer menu for mobile */}
  <div className={`navbar-drawer ${isDrawerOpen ? 'navbar-drawer-open' : ''}`}>
    <ul className="drawer-links">
      <li><a href="#home" onClick={toggleDrawer}>Home</a></li>
      <li><a href="#about" onClick={toggleDrawer}>About</a></li>
      <li><a href="#portfolio" onClick={toggleDrawer}>Portfolio</a></li>
      <li><a href="#contact" onClick={toggleDrawer}>Contact</a></li>
    </ul>
  </div>
</Container>

    </nav>
  );
};

export default Navbar;
