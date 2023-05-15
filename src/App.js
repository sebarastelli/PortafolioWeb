import HeaderNav from './componentes/HeaderNav';
import About from './componentes/About';
import Projects from './componentes/Projects';
import Skills from './componentes/Skills';
import Contact from './componentes/Contact';
import Footer from './componentes/Footer';
import './App.css';
import React from 'react';

function App() {
  return (
    <main className="App">
      <HeaderNav/>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
