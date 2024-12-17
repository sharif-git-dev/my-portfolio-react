import Navbar from './components/Navbar';
import CustomCursor from './components/customcursor/customcursors';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import {Homepage}  from "./Pages/Home";
import {About}  from "./Pages/About";
import {Services}  from "./Pages/Services";
import {Portfolio}  from "./Pages/Portfolio";
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
          <Route path="/About" element={<About/>} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/Portfolio" element={<Portfolio/>} />
          <Route path="/Sorcero" element={<Sorcero/>} />
          <Route path="/Adeptia" element={<Adeptia/>} />
          <Route path="/SOLbooks" element={<SOLbooks/>} />
          <Route path="/Ekhtibary" element={<Ekhtibary/>} />
          <Route path="/Yh-h" element={<YHHproject/>} />
          <Route path="/Yh-h" element={<YHHproject/>} />
          <Route path="/Yh-h" element={<YHHproject/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
