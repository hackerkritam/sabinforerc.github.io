import React from 'react';
import { 
  Lightbulb, 
  Droplet, 
  Building2, 
  GraduationCap, 
  Briefcase, 
  FileText, 
  ShieldCheck, 
  Wifi 
} from 'lucide-react';

const Vision = () => {
  const visionItems = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
      title: "Transparent Administration",
      description: "Ensure fair accounting of student funds with regular public audits and transparent decision-making processes."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-blue-600" />,
      title: "Internship & Job Opportunities",
      description: "Establish partnerships with industry leaders to provide internship and job placement opportunities for students."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-blue-600" />,
      title: "Improved Lighting",
      description: "Install adequate lighting throughout campus for safety and to facilitate evening study sessions."
    },
    {
      icon: <Droplet className="h-10 w-10 text-blue-600" />,
      title: "Clean Drinking Water",
      description: "Ensure access to clean drinking water with filtered water stations across campus."
    },
    {
      icon: <Building2 className="h-10 w-10 text-blue-600" />,
      title: "Better Facilities",
      description: "Renovate toilets, improve canteen quality, and enhance common areas for student comfort."
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-blue-600" />,
      title: "Academic Excellence",
      description: "Advocate for improved teaching methods, updated curriculum, and better laboratory equipment."
    },
    {
      icon: <FileText className="h-10 w-10 text-blue-600" />,
      title: "Streamlined Administration",
      description: "Simplify administrative processes for students, reducing bureaucracy and wait times."
    },
    {
      icon: <Wifi className="h-10 w-10 text-blue-600" />,
      title: "Better Internet",
      description: "Upgrade campus WiFi infrastructure for reliable, high-speed internet access throughout campus."
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">My Vision</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          My plan for transforming IOE Purwanchal Campus focuses on practical improvements that will enhance student life and academic experience.
        </p>
      </div>
 

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {visionItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <div className="flex justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-2 text-center">{item.title}</h3>
            <p className="text-gray-600 text-center">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-blue-800 text-white rounded-lg shadow-xl p-8">
        <h3 className="text-2xl font-bold mb-4 text-center">My Commitment to You</h3>
        <p className="mb-6 text-center">
          As your FSU President, I pledge to work tirelessly to implement these improvements and be a strong advocate for student rights and welfare. My administration will be characterized by:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-700 rounded-lg p-6">
            <h4 className="text-xl font-bold mb-2 text-center">Transparency</h4>
            <p className="text-center">
              Regular updates on FSU activities, financial reports, and decision-making processes will be made available to all students.
            </p>
          </div>
          <div className="bg-blue-700 rounded-lg p-6">
            <h4 className="text-xl font-bold mb-2 text-center">Accountability</h4>
            <p className="text-center">
              I will take personal responsibility for the success of our initiatives and be answerable to the student body.
            </p>
          </div>
          <div className="bg-blue-700 rounded-lg p-6">
            <h4 className="text-xl font-bold mb-2 text-center">Inclusivity</h4>
            <p className="text-center">
              Every student's voice matters. I will ensure that all decisions consider the diverse needs of our student community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;