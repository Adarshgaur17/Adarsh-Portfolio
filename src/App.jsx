import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";

import Footer from "./Footer";
import Contact from "./Contact";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
