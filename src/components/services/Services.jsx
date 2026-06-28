import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Briefcase, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: <Target size={32} />, title: 'Strategic Business Consulting', desc: 'Aligning vision with actionable execution for sustainable growth.' },
    { icon: <Users size={32} />, title: 'Recruitment & Executive Hiring', desc: 'Finding the right leaders to drive your organization forward.' },
    { icon: <Briefcase size={32} />, title: 'HR Outsourcing', desc: 'Streamlining human capital management for maximum efficiency.' },
    { icon: <TrendingUp size={32} />, title: 'Business Process Optimization', desc: 'Enhancing operational workflows to maximize productivity.' },
    { icon: <Lightbulb size={32} />, title: 'Startup Consulting', desc: 'Guiding early-stage companies from ideation to market leadership.' },
    { icon: <ShieldCheck size={32} />, title: 'Corporate Advisory', desc: 'Expert guidance on governance, compliance, and corporate structuring.' },
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-6">Expertise That Drives Results</h2>
          <p className="text-lg text-muted">Comprehensive solutions designed to address complex business challenges and accelerate growth.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-background border border-gray-100 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">{service.title}</h3>
              <p className="text-muted leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
