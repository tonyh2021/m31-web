import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import About from "./pages/About";

import aboutimg1 from "./images/imaging.png";
import aboutimg2 from "./images/clinics.png";
import aboutimg3 from "./images/research.png";
import logoimg from "./images/m31logolight.png";

import headshot1 from "./images/headshot_bowang.png";
import headshot2 from "./images/jun_ma.jpeg";
import { Link } from "react-router-dom";
import logo_linkedin from "./images/linkedin_logo.png";
import logo_googlescholar from "./images/google_scholar_logo.png";
import logo_twitter from "./images/twitter_logo.png";
import React, { useEffect, useState } from "react";

// import partner1 from './images/sickkids.png'
// import partner2 from './images/UThealth.png'
// import partner3 from './images/sunnybrook.png'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}
export default App;
