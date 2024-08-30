import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 bg-gray-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-500">
          SUSAN
        </Link>
        <nav>
          <Link to="/" className="mr-4 text-lg text-blue-500 hover:underline">
            Home
          </Link>
          <Link to="/About" className="mr-4 text-lg text-blue-500 hover:underline">
            About
          </Link>
          <Link to="/Projects" className="mr-4 text-lg text-blue-500 hover:underline">
            Projects
          </Link>
          <Link to="/contact" className="text-lg text-blue-500 hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
