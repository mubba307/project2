import React from "react" ;

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-purple-100 via-white to-orange-100">
      {/* Live animated background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Hero content */}
      <div className="text-center max-w-3xl z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Hi, I'm <span className="text-orange-600">Mohd Mubbashir</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          I'm a passionate Full-Stack Developer crafting beautiful web experiences with{' '}
          <span className="font-semibold text-gray-800">Next.js</span>,{' '}
          <span className="font-semibold text-gray-800">React</span>, and{' '}
          <span className="font-semibold text-gray-800">Tailwind CSS</span>.
        </p>

        {/* Rainbow border button */}
        <a href="#contact" className="relative inline-block px-1 py-1 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 via-yellow-500 via-green-500 via-blue-500 to-indigo-500 animate-gradient">
          <span className="block px-8 py-3 bg-white text-lg rounded-xl text-orange-600 font-semibold hover:bg-gray-100 transition duration-300">
            Let's connect
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;