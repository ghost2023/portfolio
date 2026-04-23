import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Me from "./components/Me";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Me />
      </main>
      <Contact />
    </div>
  );
}

export default App;
