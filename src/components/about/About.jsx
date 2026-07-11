import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../../about.webp';

const About = () => {

  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-4 block">About Us</span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              More Than Consulting.<br />We Build Businesses.
            </h2>
            <p className="text-lg text-muted mb-6 leading-relaxed">
              Founded in 2025 in India, Siavnte Consulting Services was established with a clear vision: to bridge the gap between potential and performance. 
            </p>
            <p className="text-lg text-muted leading-relaxed">
              We operate at the intersection of strategy and execution. Our business philosophy is rooted in long-term partnerships, where we align our expertise with your strategic goals to deliver measurable, sustainable growth.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden glass-card aspect-[4/3] group shadow-2xl"
          >
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
            <img 
              src={aboutImage} 
              alt="Siavnte Consulting Board Meeting" 
              className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
