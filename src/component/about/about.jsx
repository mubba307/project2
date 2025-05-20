'use client';

import React from "react";

const About = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 bg-gradient-to-br from-white via-orange-50 to-yellow-100 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 z-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Hello! I'm <span className="font-semibold text-orange-600">Mohd Mubbashir</span>. I'm a MERN Stack Developer and DevOps Engineer with a passion for building modern
            web applications that are both functional and visually engaging.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mt-4 leading-relaxed">
            I have experience working on more than 10 projects, ranging from dynamic websites to scalable backend systems. I'm constantly exploring new technologies and
            believe in continuous learning. When I'm not coding, I enjoy mentoring, experimenting with open source, and leveling up my skill set.  
          </p>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/my pic.jpg"
            alt="Mohd Mubbashir"
            className="w-[350px] h-[350px] rounded-2xl shadow-2xl object-cover border-4 border-orange-500 hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default About;