import React from 'react';
import { GraduationCap, Award, Users, Briefcase } from 'lucide-react';
import sabin from "./sabinho.jpg"

const About = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">About Me</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Civil Engineering student with a passion for leadership and improving student life at IOE Purwanchal Campus.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={sabin} alt="Sabin Dhital"
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Sabin Dhital</h3>
              <p className="text-gray-600 mb-4">Civil Engineering Student</p>
              <div className="flex items-center text-gray-700 mb-2">
                <GraduationCap className="h-5 w-5 mr-2" />
                <span>IOE Purwanchal Campus, Dharan</span>
              </div>
              <div className="flex items-center text-gray-700 mb-2">
                <Award className="h-5 w-5 mr-2" />
                <span>FSU Presidential Candidate</span>kritam
              </div>
              <div className="flex items-center text-gray-700 mb-2">
                <Users className="h-5 w-5 mr-2" />
                <span>Student Advocate</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Briefcase className="h-5 w-5 mr-2" />
                <span>Future Civil Engineer</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-2/3">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">My Journey</h3>
            <p className="text-gray-700 mb-4">
              As a dedicated civil engineering student at IOE Purwanchal Campus, I have always been passionate about creating positive change in our college community. My academic journey has equipped me with problem-solving skills and a systematic approach to addressing challenges.
            </p>
            <p className="text-gray-700 mb-4">
              Throughout my time at IOE, I have actively participated in various student activities, volunteered for community service, and collaborated with faculty members on initiatives to improve campus life. These experiences have given me valuable insights into the needs and concerns of our student body.
            </p>
            <p className="text-gray-700 mb-4">
              I believe that a strong Free Student Union (FSU) is essential for representing student interests and ensuring that our voices are heard in administrative decisions. With your support, I aim to lead the FSU with integrity, transparency, and a commitment to making IOE Purwanchal Campus a better place for all students.
            </p>
            <h3 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Why I'm Running</h3>
            <p className="text-gray-700 mb-4">
              I am running for FSU President because I believe in the potential of our campus and our student body. I have witnessed firsthand the challenges we face daily – from inadequate facilities to limited career opportunities – and I am committed to addressing these issues head-on.
            </p>
            <p className="text-gray-700">
              My candidacy represents a fresh perspective and a dedication to practical solutions. I am not just making promises; I am offering a concrete plan to enhance our college experience, improve our learning environment, and prepare us for successful careers in engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;