import React from "react";
import profile from "../assets/profile.jpg";
import Testmonials from "./Testmonials";  // Ensure correct import path

const Showcase = () => {
  return (
    <div className="mt-20 bg-gray-50">
      {/* Showcase Content */}
      <div className="flex flex-wrap sm:flex-nowrap items-center space-x-5 justify-around p-10 sm:px-6 lg:px-8">
        {/* left */}
        <div className="text-center sm:text-left max-w-lg mb-8 sm:mb-0">
          <p className="text-gray-600 mb-2">This is me</p>
          <h1 className="text-4xl font-bold mb-4">SUSAN ABDULLAHI</h1>
          <p className="text-xl text-gray-700 mb-6">SOFTWARE ENGINEER</p>
          <div>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
              Discover Now
            </button>
          </div>
        </div>

        {/* right */}
        <div className="flex-shrink-0 mt-8 sm:mt-0 sm:ml-12">
          <img
            src={profile}
            alt="Susan Abdullah"
            className="w-96 h-96 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-16">
        <Testmonials />
      </div>
    </div>
  );
};

export default Showcase;
