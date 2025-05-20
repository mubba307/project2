'use client';

import React from 'react';

import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt,
} from 'react-icons/fa';
import {
  SiNextdotjs, SiMongodb, SiTailwindcss, SiFirebase,
} from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-blue-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
];

const Skills = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-white via-orange-50 to-yellow-100 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 -left-16 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 -right-16 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Main Content */}
      <div className="relative max-w-5xl w-full text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 mb-10">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white/30 backdrop-blur-lg rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105 border border-white/20"
            >
              <div className="text-5xl mb-3 transition-transform duration-300 hover:rotate-6">
                {skill.icon}
              </div>
              <p className="text-lg font-semibold text-gray-800">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;