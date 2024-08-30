import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-6 flex flex-col items-center">
      <div className="flex space-x-6 mb-4">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transform hover:scale-110 duration-300"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transform hover:scale-110 duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transform hover:scale-110 duration-300"
        >
          <FaTwitter size={24} />
        </a>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} SUSAN ABDULLAHI. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
