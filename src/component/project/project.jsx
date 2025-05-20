'use client'

import React from 'react';

const Project = () => {
    return (
        <section id="projects" className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-white via-orange-50 to-yellow-100 overflow-hidden">
             {/* Background blobs */}
      <div className="absolute top-0 -left-16 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 -right-16 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
        
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl text-gray-800 font-bold mb-2">My Projects</h2>
                <div className="h-1 w-20 bg-indigo-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover-up">
                    <img src="e-com.jpeg" alt="Project 1" className="w-full h-56 object-cover"/>
                    <div className="p-6">
                        <h3 className="text-xl text-gray-800 font-bold mb-2">E-commerce Website</h3>
                        <p className="text-gray-600 mb-4">A full-featured online store with product listings, user authentication, and payment processing.</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded">React</span>
                            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded">Node.js</span>
                            <span className="bg-indigo-100 textr-indigo-800 text-xs font-medium px-2 py-1 rounded">MongoDB</span>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition font-medium">View Live</a>
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 transtion font-medium">Source Code</a>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover-up">
                    <img src="social.jpg" alt="Project 1" className="w-full h-56 object-cover"/>
                    
                    <div className="p-6">
                        <h3 className="text-xl text-gray-800 font-bold mb-2">Social Media Dashboard</h3>
                        <p className="text-gray-600 mb-4">A comprehensive dashboard for monitoring and managing social media accounts and analytics.</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded">Vue.js</span>
                            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded">Express</span>
                            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded">Chart.js</span>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition font-medium">View Live</a>
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition font-medium">Source Code</a>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover-up">
                    <img src="task.png" alt="Project 1" className="w-full h-56 object-cover"/>
                    
                    <div className="p-6">
                        <h3 className="text-xl text-gray-800 font-bold mb-2">Task Management App</h3>
                        <p className="text-gray-600 mb-4">A Kanban-style task management application with drag-and-drop functionality and team collaboration.</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded">React</span>
                            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded">Firebase</span>
                            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded">Redux</span>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition">View Live</a>
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition">Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
};

export default Project;