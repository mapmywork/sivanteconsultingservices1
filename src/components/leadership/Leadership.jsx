import React from 'react';
import { motion } from 'framer-motion';

const Leadership = () => {
  const leaders = [
    {
      name: 'Joginder Singh',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Visionary leader focused on strategic growth and building long-lasting corporate partnerships that drive our core business forward.',
    },
    {
      name: 'Anam Khan',
      role: 'Managing Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Proactive organizer and communicator, driving project success and operational excellence through meticulous planning and coordination.',
    },
    {
      name: 'Eram Khan',
      role: 'Co-Founder & Associate Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Expert in talent acquisition and human capital management, ensuring we bring in the best minds to transform client organizations.',
    }
  ];

  return (
    <section id="leadership" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-xs font-bold tracking-widest text-primary uppercase mb-3">Our People</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">
            Leadership <span className="text-primary">Team</span>
          </h2>
          <div className="w-12 h-1 bg-primary mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.05] hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-white/10">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover" 
                />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 text-center">
                {leader.name}
              </h3>
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4 text-center">
                {leader.role}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed text-center">
                {leader.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
