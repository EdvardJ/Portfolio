import React from "react";
import Bio from "./components/Bio";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
/*import Testimonials from "./components/Testimonials";*/

export default function App() {
  return (
    <main className="text-gray-400 bg-green-900 body-font">
      <Navbar />
      <About />
      <Bio />
      <Skills />
      <Projects />
      <Contact />
      {/*<Testimonials />*/}
    </main>
  );
}