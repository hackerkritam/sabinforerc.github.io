import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Suggestion from './components/Suggestion';
import Footer from './components/Footer';
import VoteAnimation from './components/VoteAnimation';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeSection={activeSection} />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about" className="py-16">
          <About />
        </section>
        <section id="vision" className="py-16 bg-gray-100">
          <Vision />
        </section>
        <section id="contact" className="py-16">
          <Contact />
        </section>
        <section id="suggestion" className="py-16 bg-gray-100">
          <Suggestion />
        </section>
      </main>
      <Footer />
      <VoteAnimation />
    </div>
  );
}

export default App;