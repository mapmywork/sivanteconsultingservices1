import React from 'react';
import { motion } from 'framer-motion';

const Ecosystem = () => {
  const entities = [
    {
      name: 'Siavnte Consulting Services',
      role: 'Parent Organization',
      color: 'bg-primary',
      textColor: 'text-primary'
    },
    {
      name: 'Chinnu Car Rentals',
      role: 'Premium Mobility Solutions',
      color: 'bg-success',
      textColor: 'text-success'
    },
    {
      name: 'Brand Mind Pvt. Ltd.',
      role: 'Branding Beyond Creativity',
      color: 'bg-purple',
      textColor: 'text-purple'
    }
  ];

  return (
    <section id="ecosystem" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-4 block">Business Ecosystem</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">A Synergistic Portfolio</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gray-800 -z-10"></div>
          
          {entities.map((entity, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-[#121212] p-8 rounded-2xl shadow-lg border border-gray-800 w-full md:w-1/3 text-center z-10"
            >
              <div className={`w-16 h-16 mx-auto rounded-full ${entity.color} bg-opacity-10 flex items-center justify-center mb-6`}>
                <div className={`w-8 h-8 rounded-full ${entity.color}`}></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{entity.name}</h3>
              <p className={`font-medium ${entity.textColor}`}>{entity.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
