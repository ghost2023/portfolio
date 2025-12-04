import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white">
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
