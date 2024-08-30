import React from "react";

// Sample images for each project
import kbuHubImage from "../assets/kbu-hub.png";
import portfolioImage from "../assets/portfolio.png";
import netflixCloneImage from "../assets/netflix-clone.jpg";
import hotelManagementImage from "../assets/hotel-management.png";

const Projects = () => {
  return (
    <div className="mt-12">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">My Projects</h1>
        <p className="text-gray-600 mt-2">Here are some of the projects I have worked on:</p>
      </div>

      {/* Projects Grid */}
      <div className="flex flex-wrap gap-8 justify-center">
        {/* Project 1: Kbu Hub */}
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="w-full overflow-hidden rounded-lg">
              <img src={kbuHubImage} alt="Kbu Hub" className="w-full h-48 object-cover rounded-lg shadow-md" />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-2xl font-semibold text-gray-800">Kbu Hub</h2>
              <p className="text-gray-600 mt-2">A social media platform for students and the university to connect.</p>
              <a href="https://github.com/yourusername/kbu-hub" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 inline-block">View on GitHub</a>
            </div>
          </div>
        </div>

        {/* Project 2: Portfolio Website */}
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="w-full overflow-hidden rounded-lg">
              <img src={portfolioImage} alt="Portfolio Website" className="w-full h-48 object-cover rounded-lg shadow-md" />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-2xl font-semibold text-gray-800">Portfolio Website</h2>
              <p className="text-gray-600 mt-2">A personal portfolio website to showcase my projects and skills.</p>
              <a href="https://github.com/yourusername/portfolio-website" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 inline-block">View on GitHub</a>
            </div>
          </div>
        </div>

        {/* Project 3: Netflix Clone */}
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="w-full overflow-hidden rounded-lg">
              <img src={netflixCloneImage} alt="Netflix Clone" className="w-full h-48 object-cover rounded-lg shadow-md" />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-2xl font-semibold text-gray-800">Netflix Clone</h2>
              <p className="text-gray-600 mt-2">A clone of the Netflix web application with features like movie browsing and streaming.</p>
              <a href="https://github.com/yourusername/netflix-clone" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 inline-block">View on GitHub</a>
            </div>
          </div>
        </div>

        {/* Project 4: Hotel Management System */}
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="w-full overflow-hidden rounded-lg">
              <img src={hotelManagementImage} alt="Hotel Management System" className="w-full h-48 object-cover rounded-lg shadow-md" />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-2xl font-semibold text-gray-800">Hotel Management System</h2>
              <p className="text-gray-600 mt-2">A hotel management system with features for booking, room management, and customer service.</p>
              <a href="https://github.com/yourusername/hotel-management-system" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 inline-block">View on GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
