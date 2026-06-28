import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const cards = [
    { title: 'Parent Organization', desc: 'Leading a diverse portfolio.' },
    { title: 'Strategic Growth', desc: 'Sustainable business scaling.' },
    { title: 'Multi Industry Expertise', desc: 'Cross-domain knowledge.' },
    { title: 'Future Focused', desc: 'Innovation-driven approaches.' }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-4 block">About Us</span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-6">
              More Than Consulting.<br />We Build Businesses.
            </h2>
            <p className="text-lg text-muted mb-6 leading-relaxed">
              Founded in 2025 in India, Siavnte Consulting Services was established with a clear vision: to bridge the gap between potential and performance. 
            </p>
            <p className="text-lg text-muted leading-relaxed">
              We operate at the intersection of strategy and execution. Our business philosophy is rooted in long-term partnerships, where we align our expertise with your strategic goals to deliver measurable, sustainable growth.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-card p-8 group hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl mb-6 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{card.title}</h3>
                <p className="text-muted">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
