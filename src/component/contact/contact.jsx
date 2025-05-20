'use client';

import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";


const Contact = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-orange-100 via-white to-pink-100">
      {/* Live animated background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Contact content */}
      <div className="relative z-10 max-w-3xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-8">
          Got a project idea or just want to say hello? Fill out the form below or reach out via email!
        </p>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-gray-900 text-samibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email "
            className="w-full p-3 rounded-lg border border-gray-900 text-samibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-lg border border-gray-900 text-samibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          ></textarea>

          {/* Rainbow Border Button */}
          <div className="relative inline-block px-1 py-1 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 via-yellow-500 via-green-500 via-blue-500 to-indigo-500 animate-gradient">
            <button
              type="submit"
              className="block px-8 py-3 bg-white text-lg rounded-xl text-orange-600 font-semibold hover:bg-gray-100 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="mt-10 text-gray-600">
          <p>
            Email:{" "}
            <a href="mailto:Smubbashir35@gmail.com" className="text-orange-600 hover:underline">
              Smubbashir35@gmail.com
            </a>
          </p>
          <p>Location: Mumbai, India</p>
        </div>
        < div className="mt-8">
        <h3 className="text-xl text-gray-700 font-bold mb-4 justify-center">Follow Me</h3>
        <div className="flex space-x-4">
            <a href="#" className="bg-gray-200 hover:bg-indigo-600 hover:text-white text-black h-10 w-10 rounded-full flex items-center justify-center transition">
                <FaGithub/>
            </a>
            <a href="#" className="bg-gray-200 hover:bg-indigo-600 hover:text-white text-blue-500 w-10 rounded-full flex items-center justify-center transition">
                <FaLinkedin/>
                </a> 
                <a href="# " className="bg-gray-200 hover:bg-indigo-600 hover:text-white text-pink-500 h-10 w-10 rounded-full flex items-center justify-center transition">
                    <FaInstagram/>
                    </a>
                    <a href="# " className="bg-gray-200 hover:bg-indigo-600 hover:text-white text-blue-500 h-10 w-10 rounded-full flex items-center justify-center transition">
                    <FaTwitter/>
                    </a>
                    <a href="# " className="bg-gray-200 hover:bg-indigo-600 hover:text-white text-green-500 h-10 w-10 rounded-full flex items-center justify-center transition">
                    <FaWhatsapp/>
                    </a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;