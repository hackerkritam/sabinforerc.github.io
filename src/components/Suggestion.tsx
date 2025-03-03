import React, { useState } from 'react';
import { Send, ThumbsUp } from 'lucide-react';

const Suggestion = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real application, you would send the form data to a server here
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Suggestions</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Your ideas matter! Share your suggestions for improving our campus and student life at IOE Purwanchal.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {!submitted ? (
          <>
            <h3 className="text-2xl font-bold text-blue-800 mb-6">Submit Your Suggestion</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="department" className="block text-gray-700 font-medium mb-2">
                  Department
                </label>
                <select
                  id="department"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select your department</option>
                  <option value="civil">Civil Engineering</option>
                  <option value="electrical">Electrical Engineering</option>
                  <option value="mechanical">Mechanical Engineering</option>
                  <option value="computer">Computer Engineering</option>
                  <option value="electronics">Electronics & Communication</option>
                  <option value="architecture">Architecture</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
                  Suggestion Category
                </label>
                <select
                  id="category"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select a category</option>
                  <option value="academic">Academic Improvement</option>
                  <option value="facilities">Campus Facilities</option>
                  <option value="administration">Administration</option>
                  <option value="extracurricular">Extracurricular Activities</option>
                  <option value="career">Career Development</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="suggestion" className="block text-gray-700 font-medium mb-2">
                  Your Suggestion
                </label>
                <textarea
                  id="suggestion"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Share your ideas for improving our campus..."
                  required
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">Submit anonymously</span>
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Submit Suggestion
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <ThumbsUp className="h-16 w-16 text-green-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h3>
            <p className="text-gray-700 mb-6">
              Your suggestion has been submitted successfully. I appreciate your input and will consider it as part of my plan to improve our campus.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Submit Another Suggestion
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Suggestion;