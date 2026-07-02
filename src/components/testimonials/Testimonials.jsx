import React from 'react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative w-full h-screen min-h-[600px] flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 w-full h-full">
        {/* Dark gradient overlay that is solid black on the left and fades out to the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[#0A1A16]/30 z-10 mix-blend-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Employee discussion" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">
        
        {/* Main Content Area */}
        <div className="max-w-3xl flex-1 flex flex-col justify-center pt-20">
          
          <div className="mb-6">
            <span className="text-6xl text-gray-400 font-serif leading-none opacity-80 block mb-2">"</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-[54px] text-white mb-12 leading-tight font-light">
            I love the collaborative<br />
            spirit, innovation & growth<br />
            opportunities here.
          </h2>

          <div className="flex items-center gap-4">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
              alt="Elena Rodriguez" 
              className="w-12 h-12 rounded-full object-cover border border-white/20"
            />
            <div>
              <h4 className="text-white text-base">Elena Rodriguez</h4>
              <p className="text-gray-400 text-[10px] font-mono tracking-widest uppercase mt-1">
                MARKETING SPECIALIST
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Button */}
        <div className="pb-12 pt-8">
          <Link 
            to="/careers" 
            className="inline-block px-5 py-2.5 border border-white/30 text-gray-300 rounded hover:bg-white hover:text-black hover:border-white transition-colors text-sm"
          >
            Find open jobs
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
