// import React from 'react';
import { ArrowRight } from 'lucide-react';
import x from '../assets/hero.jpg'

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 flex items-center">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-[4rem] leading-none font-bold text-white" style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              fontFamily: "'Anton', sans-serif",
              letterSpacing: '1px',
            }}>
              INSPIRING THE
              <br />
              <span className="text-blue-500">ENTREPRENEUR</span>
              <br />
              IN YOU
            </h1>
            
            <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
              Encapsulates the essence of sparking ambition, innovation, and drive within individuals to pursue their startup dreams. It signifies the beginning of a journey filled with passion, determination, and creativity.
            </p>
            
            {/* <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition group">
              Join Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button> */}
          </div>
          
          <div className="relative">
            {/* Main image */}
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
              <img
                src={x}
                alt="Startup presentation"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;