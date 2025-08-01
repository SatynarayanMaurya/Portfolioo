import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#333333] text-white py-10  border-t border-gray-700 shadow-inner">
      <div className="w-[90%] mx-auto flex flex-col items-center gap-6 text-center">
        {/* Gradient Line */}
        <div className="w-24 h-1 rounded-full bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500"></div>

        {/* Name & Tagline */}
        <h2 className="text-2xl font-bold tracking-wide">Satynarayan Maurya</h2>
        <p className="text-sm text-gray-400 max-w-[400px]">
          Passionate Full Stack Developer | MERN | JavaScript | Problem Solver
        </p>

        {/* Social Icons */}
        <div className="flex gap-5 text-2xl mt-2">
          <a
            href="https://github.com/SatynarayanMaurya"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/satynarayan-maurya-114335246/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:satynarayanmaurya989@gmail.com"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} Satynarayan Maurya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
