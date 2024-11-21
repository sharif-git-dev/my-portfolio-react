import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa'; // Importing FaBars icon
import './Navbar.css';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './customcursor/Stylesfor.css';
import {motion } from 'framer-motion'


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
    <motion.div className='bg-black' 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1,}}
    transition={{delay:3.5, duration:2}}
    >
    <div className= {`bg-transparent navbar ${showNavbar ? 'navbar-show' : 'navbar-hide' }`}>
      <Container>

        <Row className='w-100'>
          <Col>
            <div className='logo'>Sharif</div>
          </Col>

          <Col className="text-end">
            {isMobileView ? (
              <div className="navbar-drawer-icon" onClick={toggleDrawer}>
                <FaBars size={24} />
              </div>
            ) : (
              <ul className="navbar-links link_underline">
                <li><Link to="home" smooth duration={500}>Home</Link></li>
                <li><Link to="portfolio" smooth duration={500}>Portfolio</Link></li>
                <li><Link to="about" smooth duration={500}>About</Link></li>
                <li><Link to="contact" smooth duration={500}>Contact</Link></li>
              </ul>
            )}
          </Col>
        </Row>

        {/* Drawer menu for mobile */}
        <div className={`navbar-drawer ${isDrawerOpen ? 'navbar-drawer-open' : ''}`}>
          <ul className="nav-item">
            <li class="nav-link pb-4"><Link to="home" smooth duration={500} onClick={toggleDrawer}>Home</Link></li>
            <li class="nav-link pb-4"><Link to="portfolio" smooth duration={500} onClick={toggleDrawer}>Portfolio</Link></li>
            <li class="nav-link pb-4"><Link to="about" smooth duration={500} onClick={toggleDrawer}>About</Link></li>
            <li class="nav-link pb-4"><Link to="contact" smooth duration={500} onClick={toggleDrawer}>Contact</Link></li>
          </ul>
        </div>
      </Container>
    </div>
    </motion.div>
    
  );
};

export default Navbar;
