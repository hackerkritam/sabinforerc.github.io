import React from 'react';
import { Vote, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            
            <span className="text-xl font-bold">Sabin Dhital</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/sabin.dhital.923" className="text-blue-300 hover:text-white transition-colors">
              Facebook
            </a>
            <a href="#" className="text-blue-300 hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="text-blue-300 hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="text-blue-300 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">
              &copy; {currentYear} Sabin Dhital for FSU President. All rights reserved.
            </p>
            <div className="flex items-center">
              <span className="mr-2">Made with</span>
              <Heart className="h-4 w-4 text-red-500 mr-2" />
              <span>for IOE Purwanchal Campus</span>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <div className="animate-pulse inline-block bg-red-600 text-white font-bold py-2 px-4 rounded-full">
              Vote for a Free Candidate | Vote for Change
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;