// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import router components
// import Services from './components/Services';
// import AboutSection from './components/AboutSection';
// import Contactme from './components/Contactme';
// import Works from './components/Works';
// import Footer from './components/Footer';
// import Question from './components/Question';
// import Navbar from './components/Navbar';
// import Header from './components/Header';
// import CustomCursor from './components/customcursor/customcursors';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles/App.css';
// import { Element } from 'react-scroll';
// import Scrolltest from './components/Scrolltest';

// // Example of a new page component
// const NewPage = () => {
//   return (
//     <div>
//       <h1>Welcome to the New Page!</h1>
//       <p>This is a new page that you can navigate to.</p>
//       <Link to="/">Go back to Home</Link>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <div className="App bgblack">
//         <CustomCursor />
//         <Navbar />
        
//         <Routes>
//           {/* Define routes for pages */}
//           <Route path="/" element={
//             <div className="snap-container">
//               <Element name="home" id="home">
//                 <Header />
//               </Element>
//               <Element name="question" id="question">
//                 <Question />
//               </Element>
//               <Element name="services" id="services">
//                 <Services />
//               </Element>
//               <Element name="portfolio" id="portfolio">
//                 <Works />
//               </Element>
//               <Element name="about" id="about">
//                 <AboutSection />
//               </Element>
//               <Element name="contact" id="contact">
//                 <Contactme />
//               </Element>
//             </div>
//           } />
          
//           {/* Define route for new page */}
//           <Route path="/new-page" element={<NewPage />} />
//         </Routes>

//         {/* Optional Footer */}
//         {/* <Footer /> */}
//       </div>
//     </Router>
//   );
// };

// export default App;






import Navbar from './components/Navbar';
import CustomCursor from './components/customcursor/customcursors';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import {Homepage}  from "./Pages/Home";
import {Sorcero}  from "./Pages/Portifolio/Sorcero";
import {Adeptia}  from "./Pages/Portifolio/Adeptia";
import {SOLbooks}  from "./Pages/Portifolio/SOLbooks";
import {Ekhtibary}  from "./Pages/Portifolio/Ekhtibary";
import {YHHproject}  from "./Pages/Portifolio/YH&Hproject";

const App = () => {
  return (
    <Router>
      <div className="App bgblack">
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/Sorcero" element={<Sorcero/>} />
          <Route path="/Adeptia" element={<Adeptia/>} />
          <Route path="/SOLbooks" element={<SOLbooks/>} />
          <Route path="/Ekhtibary" element={<Ekhtibary/>} />
          <Route path="/Yh-h" element={<YHHproject/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
