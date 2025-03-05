import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Contact Me</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Have questions or want to discuss my vision for IOE Purwanchal Campus? I'm always available to hear from fellow students.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">Get in Touch</h3>
          
          <div className="flex items-start mb-6">
            <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">Phone</h4>
              <p className="text-gray-600">+977 9848000615</p>
            </div>
          </div>
          
          <div className="flex items-start mb-6">
            <Mail className="h-6 w-6 text-blue-600 mr-4 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">Email</h4>
              <p className="text-gray-600">077bce068@ioepc.edu.np</p>
            </div>
          </div>
          
          <div className="flex items-start mb-6">
            <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">Location</h4>
              <p className="text-gray-600">IOE Purwanchal Campus, Dharan</p>
            </div>
          </div>
          
                  </div>

        <div className="md:w-1/2 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">Send a Message</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your name"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter subject"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your message"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;