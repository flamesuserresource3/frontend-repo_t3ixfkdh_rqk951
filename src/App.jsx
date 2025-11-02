import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Hero />

      <main>
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
