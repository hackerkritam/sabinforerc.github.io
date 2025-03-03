import React from 'react';
import { ChevronDown, Vote } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://portal.tu.edu.np/medias/bg_gallery_2023_08_21_10_53_01.jpg')",
          opacity: 0.3,
        }}
      ></div>

      <div className="container mx-auto px-4 z-10 text-center">
       
        <div className="mb-8">
          
          <h3 className="text-xl md:text-2xl font-semibold mt-2">IOE Purwanchal Campus, Dharan</h3>
        </div>
        <div className="animate-bounce inline-block mb-6 p-3 rounded-full bg-blue-600">
          <Vote className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Sabin Dhital</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Candidate for FSU President
        </h2>
        <p className="text-xl md:text-2xl mb-8">
          Free Student Union Elections 2025
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <button
            onClick={() => {
              const visionSection = document.getElementById('vision');
              if (visionSection) {
                window.scrollTo({
                  top: visionSection.offsetTop - 80,
                  behavior: 'smooth',
                });
              }
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            My Vision
          </button>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                window.scrollTo({
                  top: contactSection.offsetTop - 80,
                  behavior: 'smooth',
                });
              }
            }}
            className="bg-transparent hover:bg-white hover:text-blue-700 text-white font-bold py-3 px-8 rounded-full border-2 border-white transition-colors"
          >
            Contact Me
          </button>
        </div>
        <div className="animate-pulse">
          <p className="text-lg mb-2">Learn More</p>
          <button
            onClick={scrollToAbout}
            className="inline-block text-white"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;