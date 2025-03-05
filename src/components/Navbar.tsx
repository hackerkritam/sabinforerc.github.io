import React, { useState, useEffect } from 'react';
import { Menu, X, Vote } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
        
          <span className="text-xl font-bold text-white-1100">Sabin Dhital</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['hero', 'about', 'vision', 'contact', 'suggestion'].map((section) => {
            const label = section === 'hero' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1);
            return (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === section
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {label}
              </button>
            );
          })}
          <div className="animate-pulse flex items-center">
            <span className="text-sm font-bold text-red-600 border border-red-600 rounded-full px-3 py-1">
              Vote for Independent
            </span>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {['hero', 'about', 'vision', 'contact', 'suggestion'].map((section) => {
              const label = section === 'hero' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1);
              return (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium py-2 transition-colors ${
                    activeSection === section
                      ? 'text-blue-600 border-l-4 border-blue-600 pl-2'
                      : 'text-gray-700 hover:text-blue-600 pl-3'
                  }`}
                >
                  {label}
                </button>
              );
            })}
            <div className="animate-pulse flex items-center py-2">
              <span className="text-sm font-bold text-red-600 border border-red-600 rounded-full px-3 py-1">
                Vote for Freedom
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;