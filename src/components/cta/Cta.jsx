import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ctaBg from '../../assets/cta-bg.png';

const Cta = () => {
  return (
    <div className="relative w-full py-32 flex items-center justify-center overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[#061814]/80 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-20"></div>
        <img 
          src={ctaBg} 
          alt="Call to Action Background" 
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-[10px] font-mono font-bold text-gray-300 uppercase tracking-widest border border-gray-500/50 rounded bg-black/20 backdrop-blur-sm">
            FOR BUSINESSES
          </span>
          
          <h2 className="text-4xl md:text-6xl font-playfair text-white mb-6 leading-tight">
            <span className="text-gray-300">Action Now:</span> Propel Your<br />
            Journey to Success
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Seize the moment. Click now to propel your journey and unlock the door to success.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/#contact" 
              className="w-full sm:w-auto px-8 py-3 bg-white text-[#0A0A0A] text-sm font-medium rounded hover:bg-gray-200 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              to="/#about" 
              className="w-full sm:w-auto px-8 py-3 bg-white/5 text-white text-sm font-medium rounded border border-white/20 hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              About Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cta;
