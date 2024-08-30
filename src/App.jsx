import React from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Showcase from "./Components/Showcase";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";


function App() {
  return (
    <div className="bg-slate-100">
      <Router>
        <Header />
        {/* Correct component usage */}
        <div className="mx-10">
          <Routes>
            {/* Define the routes for different components */}
            <Route path="/" element={<Showcase />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
     
        <div className="mt-10">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
