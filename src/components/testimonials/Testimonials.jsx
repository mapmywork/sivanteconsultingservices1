import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajiv Mehta',
      role: 'CEO',
      company: 'NexaTech Solutions',
      text: 'Siavnte Consulting Services completely transformed our operational workflow. Their strategic insights are unmatched in the industry.'
    },
    {
      name: 'Priya Sharma',
      role: 'HR Director',
      company: 'GlobalBPO India',
      text: 'The executive hiring team at Siavnte found us the perfect leadership candidates when we were scaling our operations. Highly recommended.'
    },
    {
      name: 'Ankit Verma',
      role: 'Founder',
      company: 'StartFast Ventures',
      text: 'As a startup, we needed precise guidance on scaling. Siavnte delivered beyond our expectations with actionable, results-driven strategies.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-secondary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-gold uppercase mb-4 block">Client Success</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold">What Our Partners Say</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-10">
            <button onClick={prevTestimonial} className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors">
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 z-10">
            <button onClick={nextTestimonial} className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center px-8 md:px-16"
              >
                <div className="text-gold mb-6 text-2xl tracking-widest">★★★★★</div>
                <p className="text-xl md:text-3xl font-playfair italic text-gray-300 mb-10 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                <div>
                  <h4 className="text-xl font-bold">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-400 mt-1">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
