import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [, updateLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => updateLoad(false), 1200);
  }, []);

  return (
    <div className="App">
    <Navbar />
    <section id="home">
      <Home />
    </section>
    <section id="skills">
      <Skills />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <Footer />
  </div>
  );
}

export default App;
