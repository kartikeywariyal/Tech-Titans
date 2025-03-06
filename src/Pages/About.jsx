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
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <motion.div
        className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-orange-500 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to Food Court! We are committed to bringing you the best dining
          experience by connecting you with top restaurants and delicious meals.
          Our platform ensures quick ordering, seamless transactions, and real-time
          tracking for a hassle-free food experience.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          To make food ordering effortless, convenient, and enjoyable for everyone.
          Whether you're craving a quick bite or a gourmet meal, we've got you covered!
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
        <div className="space-y-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col items-center">
              <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <div className="mt-2">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mr-4"
                >
                  GitHub
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
