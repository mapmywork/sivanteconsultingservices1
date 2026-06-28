import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentBg, setCurrentBg] = React.useState(0);

  const backgrounds = [
    '/hero_bg.png',
    '/hero_bg_2.png',
    '/hero_bg_3.png'
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgrounds.length]);

  const stats = [
    { value: 3, label: 'Business Verticals' },
    { value: 9, suffix: '+', label: 'Years Industry Experience' },
    { value: 0, label: 'Multi Industry Expertise', isText: true, text: 'Multi' },
    { value: 0, label: 'People First Philosophy', isText: true, text: 'People' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-40 overflow-hidden bg-secondary">
      {/* Background Image Slider with reduced opacity */}
      {backgrounds.map((bg, index) => (
        <div 
          key={bg}
          className={`absolute inset-0 bg-cover bg-bottom bg-no-repeat transition-opacity duration-1000 ease-in-out z-0 ${currentBg === index ? 'opacity-40' : 'opacity-0'}`}
          style={{ backgroundImage: `url('${bg}')` }}
        ></div>
      ))}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      {/* Background elements */}
      <div className="absolute inset-0 z-0 mix-blend-overlay">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-gold/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white w-full pb-20 md:pb-24">

        
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          Where Vision Meets <span className="text-gold">Leadership</span>.<br />
          Where <span className="text-gold">Businesses</span> Grow.
        </h1>
        
        <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10">
          At Siavnte Consulting Services, we don't just provide consulting—we build careers, empower businesses, create opportunities, and develop brands that create lasting impact.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="#services" className="px-8 py-4 bg-gold text-secondary font-semibold rounded-full hover:bg-yellow-400 transition-colors w-full sm:w-auto">
            Explore Services
          </a>
          <a href="#contact" className="px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto">
            Talk to Us
          </a>
        </div>

        <div ref={ref} className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-playfair font-bold text-white mb-2">
                {stat.isText ? stat.text : (
                  <span>{inView ? stat.value : 0}</span>
                )}
                {stat.suffix}
              </div>
              <div className="text-sm md:text-base text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
