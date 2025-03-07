import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Suraj Sharma",
    role: "MERN Stack Developer",
    github: "https://github.com/Suraj-Sharma001",
    linkedin: "https://www.linkedin.com/in/suraj-sharma-99ab95270/",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFPgUFF49MmQA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721472990504?e=1746662400&v=beta&t=UPNsK6ReN5HXFHSrZM8AK7vGc67tPlHtdk45xST-iRI"
  },
  {
    name: "Bhavesh Tripathi",
    role: "Front End Developer",
    github: "https://github.com/bhaveshTripathi3112",
    linkedin: "https://www.linkedin.com/in/bhavesh-tripathi-a69483309/",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGCkwKo2G5c-g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1728062604762?e=1746662400&v=beta&t=eAvAw-mUt4OommBSMS_vSA8YVAHaxuircC5kfADOjek"
  },
  {
    name: "Sourabh Singh",
    role: "AI & ML",
    github: "https://github.com/Graphical27",
    linkedin: "https://www.linkedin.com/in/sourabh-singh-76651028a/",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQFj4IR2lOrZJw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1712159052103?e=1746662400&v=beta&t=v8mArr5BGQJMaz1SfK7zKLvrbcW_Rl47TUZ5TsAP3EI"
  },
  {
    name: "Kartikey Wariyal",
    role: "Front End Developer",
    github: "https://github.com/kartikeywariyal",
    linkedin: "https://www.linkedin.com/in/kartikey-wariyal-20630b273/",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGtEQ_wriLYSw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1681906131507?e=1746662400&v=beta&t=FZjqbbowS3WNO3LsZm7giOvSG5q1a4EXiQaULrL92fM"
  },
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-orange-600 mb-6 relative inline-block">
            About Us
            <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-400 rounded"></div>
          </h1>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Welcome to <span className="font-semibold text-orange-600">QuickBite</span>. We are passionate about transforming how you experience food delivery, connecting you with exceptional restaurants and mouth-watering cuisine from around your city.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl shadow-xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-orange-200 rounded-lg mr-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              To revolutionize food ordering by creating a seamless, enjoyable experience for everyone. We believe great food should be accessible with just a few taps, whether you're craving a quick bite or planning a gourmet dinner.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-xl shadow-xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-orange-200 rounded-lg mr-4">
                <span className="text-3xl">💫</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              To be the most trusted food delivery platform that brings joy to millions through exceptional service, innovative technology, and fostering meaningful connections between restaurants and food lovers.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-3">The Talented Team Behind QuickBite</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our dedicated developers who make it all happen
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="h-48 overflow-hidden bg-gradient-to-r from-orange-400 to-amber-500 relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-20 object-cover border-4 border-white shadow-lg"
                  style={{ top: "calc(100% - 64px)" }}
                />
              </div>
              
              <div className="pt-16 pb-6 px-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-orange-500 font-medium mb-4">{member.role}</p>
                
                <div className="flex justify-center space-x-4">
                  <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    title="GitHub"
                  >
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    title="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default About;
