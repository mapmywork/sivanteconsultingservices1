import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    id: 1,
    title: 'CLIENTS',
    value: '200+',
    description: 'Over 200 satisfied clients trust our expertise and exceptional services.',
  },
  {
    id: 2,
    title: 'PROJECTS',
    value: '300+',
    description: "We've successfully completed over 300 projects, delivering outstanding results every time.",
  },
  {
    id: 3,
    title: 'HAPPY CLIENTS',
    value: '100%',
    description: 'Our focus on client satisfaction ensures a 100% happiness rate with our services.',
  },
  {
    id: 4,
    title: 'COMMITMENT',
    value: '110%',
    description: 'With our unwavering dedication, we give 110% commitment to every project we undertake.',
  },
  {
    id: 5,
    title: 'FOLLOWERS',
    value: '1 Mio',
    description: 'Join our community of 1 million loyal followers and be part of something extraordinary.',
  },
  {
    id: 6,
    title: 'TEAM',
    value: '20+',
    description: 'Each member is a driving force, contributing unique skills, expertise, and passion to our journey.',
  },
];

const Stats = () => {
  return (
    <div className="bg-[#0A0A0A] py-24 sm:py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id} 
              className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="border-b border-gray-800 pb-3 mb-8">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono">
                  {stat.title}
                </span>
              </div>
              <div className="text-5xl font-light text-white mb-4 tracking-tight">
                {stat.value}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
