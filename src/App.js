import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ConnectWithMe from './components/ConnectWithMe';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <ConnectWithMe />
    </div>
  );
}


export default App;
