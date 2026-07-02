import React from 'react';
import About from '../components/about/About';
import Stats from '../components/stats/Stats';
import Testimonials from '../components/testimonials/Testimonials';
import Leadership from '../components/leadership/Leadership';

const AboutPage = () => {
  return (
    <div className="w-full">
      {/* Custom About Hero */}
      <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[#0A1A16]/80 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent z-20"></div>
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Colleagues discussing" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32">
          <div className="inline-block px-3 py-1 mb-6 text-[10px] font-mono font-bold text-gray-300 uppercase tracking-widest border border-gray-500/50 rounded bg-white/5 backdrop-blur-sm">
            ABOUT
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair text-white mb-6 leading-tight">
            A Journey of <span className="font-bold">Passion</span><br />
            and <span className="font-bold">Dedication</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A journey fueled by passion and dedication, shaping meaningful experiences and success.
          </p>
        </div>
      </div>

      {/* Sections */}
      <About />
      <Stats />
      <Testimonials />
      <Leadership />
    </div>
  );
};

export default AboutPage;
