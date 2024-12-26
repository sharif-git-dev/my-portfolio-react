import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Link as Linkto } from 'react-router-dom';
import Contactme from "./Contactmepopup";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScrollTop && currentScroll > 50) {
        setShowNavbar(false); // Hide navbar when scrolling down
      } else {
        setShowNavbar(true); // Show navbar when scrolling up
      }
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
      if (window.innerWidth > 768 && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isDrawerOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsDrawerOpen(false); // Close the drawer if clicked outside
      }
    };

    if (isDrawerOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDrawerOpen]);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
      <div className={`bg-transparent navbar ${showNavbar ? 'navbar-show' : 'navbar-hide'}`}>
        <Container>
          <Row className='align-items-center w-100'>
            <Col>
              <Linkto to='/' className='logo'>Sharif</Linkto>
            </Col>
            <Col className="text-end">
              {isMobileView ? (
                <div className="navbar-drawer-icon" onClick={toggleDrawer}>
                  <FaBars size={24} />
                </div>
              ) : (
                <ul className="navbar-links">
                  <li><Linkto to="/Services" smooth duration={500}>Services</Linkto></li>
                  <li><Linkto to="/Portfolio" smooth duration={500}>Portfolio</Linkto></li>
                  <li><Linkto to="/About" smooth duration={500}>About</Linkto></li>
                  <li  onClick={handleShow}><Linkto>  Contact  </Linkto></li>
                      <Contactme show={showModal} handleClose={handleClose} />                </ul>
              )}
            </Col>
          </Row>

          {/* Drawer menu for mobile */}
          <div className='navsparent'>
            <div
              ref={drawerRef}
              className={`navbar-drawer ${isDrawerOpen ? 'navbar-drawer-open' : ''}`}
            >
              <ul className="drawer-links">
                <li><Linkto to="/Services" smooth duration={500} onClick={toggleDrawer}>Services</Linkto></li>
                <li><Linkto to="/Portfolio" smooth duration={500} onClick={toggleDrawer}>Portfolio</Linkto></li>
                <li><Linkto to="/About" smooth duration={500} onClick={toggleDrawer}>About</Linkto></li>
                <li><Linkto to="/Contact" smooth duration={500} onClick={toggleDrawer}>Contact</Linkto></li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
  );
};

export default Navbar;
