import React from 'react';
import { motion } from 'framer-motion';

const Leadership = () => {
  const leaders = [
    {
      name: 'Joginder Singh',
      role: 'Founder & CEO',
      color: 'from-primary to-blue-900',
      quote: '"Great companies aren\'t built by chance—they\'re built by vision, leadership, and people."',
      focus: 'Strategic Vision'
    },
    {
      name: 'Anam Khan',
      role: 'Managing Director',
      color: 'from-success to-emerald-900',
      quote: '"Leadership is about creating systems where people and businesses grow together."',
      focus: 'Operations & Growth'
    },
    {
      name: 'Eram Khan',
      role: 'Co-Founder & Associate Director',
      color: 'from-purple to-purple-900',
      quote: '"The right talent doesn\'t simply fill positions—it transforms organizations."',
      focus: 'Talent Acquisition'
    }
  ];

  return (
    <section id="leadership" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-4 block">Our People</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-secondary">Leadership Team</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-background rounded-2xl overflow-hidden border border-gray-100 shadow-lg group"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${leader.color}`}></div>
              <div className="p-8">
                <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 mb-6 overflow-hidden">
                  {/* Placeholder for portrait */}
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-secondary mb-1">{leader.name}</h3>
                  <p className="text-primary font-medium">{leader.role}</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 mb-6 relative">
                  <span className="absolute -top-4 left-6 text-4xl text-gray-200 font-playfair">"</span>
                  <p className="text-muted font-playfair italic relative z-10">{leader.quote}</p>
                </div>
                <div className="text-center">
                  <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    {leader.focus}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
