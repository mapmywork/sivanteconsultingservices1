import React from 'react';
import { motion } from 'framer-motion';

const Values = () => {
  const values = [
    'Integrity', 'Leadership', 'Innovation', 'Excellence', 'Collaboration', 'Commitment'
  ];

  return (
    <section id="values" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-4 block">Core Principles</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">Our Values</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-[#0A0A0A] p-8 rounded-2xl shadow-sm border border-white/10 text-center flex items-center justify-center min-h-[160px]"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white">{value}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
