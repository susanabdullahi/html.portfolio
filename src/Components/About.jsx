import React from "react";
import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-between mt-19 px-6 sm:px-12 lg:px-24 animate-fade-in">
      {/* Left - Image Section */}
      <div className="w-full sm:w-1/2 lg:w-2/5 mb-8 sm:mb-0 mt-14">
        <img
          src={profile}
          alt="Profile"
          className="rounded-lg shadow-lg w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Right - Text Section */}
      <div className="w-full sm:w-1/2 lg:w-3/5 sm:pl-8 text-center sm:text-left">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">About Me</h1>
        <p className="text-gray-700 leading-relaxed text-MD mb-6">
          Hello! I'm <strong>Susan</strong>, a passionate software engineer with 2 years of experience in designing, developing, and implementing software solutions. I specialize in full-stack development, with a strong foundation in both front-end and back-end technologies.
          <br /><br />
          My journey in tech has been fueled by curiosity and a love for problem-solving. Over the past two years, I've had the opportunity to work on diverse projects ranging from creating responsive web applications to developing complex backend systems.
          <br /><br />
          I am proficient in technologies like <strong>React, Node.js, Python, and MySQL</strong> and have experience working with tools like <strong>Git, Docker, and AWS</strong>. I'm always eager to learn and embrace new challenges, aiming to build solutions that are not only efficient and scalable but also provide a seamless user experience.
          <br /><br />
          Outside of coding, I enjoy reading, exploring new technologies, and collaborating with like-minded individuals to create impactful digital products. Let's connect and build something amazing together!
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default About;
