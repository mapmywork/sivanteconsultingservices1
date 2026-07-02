import React from 'react';
import { motion } from 'framer-motion';
import Services from '../components/services/Services';

const ServicesPage = () => {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Services Hero */}
      <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[#0A1A16]/70 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent z-20"></div>
          <img 
            src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Crafting Solutions" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 mb-6 text-[10px] font-mono font-bold text-gray-300 uppercase tracking-widest border border-gray-500/50 rounded bg-white/5 backdrop-blur-sm">
              SERVICES
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-light text-white mb-6 leading-tight">
              Crafting Solutions for<br />
              Your Unique Needs
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
              Discover service excellence. We craft tailored solutions to<br />
              meet your unique needs and fuel success.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services List Section */}
      <Services />
    </div>
  );
};

export default ServicesPage;
