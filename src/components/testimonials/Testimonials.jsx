import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const testimonialsData = [
  {
    id: 1,
    name: "Iram Khan",
    text: "I am currently associated with Siavnte Consulting Organization and have had a very positive experience. The team maintains high professionalism. I would like to sincerely appreciate Joginder Singh for his consistent support and commitment.",
    role: "Candidate"
  },
  {
    id: 2,
    name: "Kashish",
    text: "I am writing to express my sincere gratitude for your exceptional support throughout the recruitment process. Your prompt responses and guidance were instrumental in helping me secure this position. Thank you for making the entire experience smooth and professional. I truly appreciate your efforts.",
    role: "Candidate"
  },
  {
    id: 3,
    name: "Aniruddh Bhoj",
    text: "I would like to extend my heartfelt thanks to all of you for your support and guidance during my recruitment process. Your quick communication and constant help made a big difference in my journey to joining the company. I am very grateful for all your efforts!",
    role: "Candidate"
  },
  {
    id: 4,
    name: "Akshat Arora",
    text: "Very nice consultant with awesome behavior and strong knowledge. To be honest, they were extremely helpful in helping me secure my job at Transcom India.",
    role: "Placed at Transcom India"
  },
  {
    id: 5,
    name: "Nitin Patyal",
    text: "If you are looking for a job...so it is a best consultancy. They don't charge a single penny. They provide a job with immediate joining and attractive salary packages ✨✨",
    role: "Candidate"
  },
  {
    id: 6,
    name: "Diwakar Bhardwaj",
    text: "Nice staff and providing best placement in pan india got the placement from siavnte thanks a lot meghna mam for briefing and help me for the interview.",
    role: "Placed Candidate"
  },
  {
    id: 7,
    name: "Ashish Tomar",
    text: "I had a great experience with this consultancy. They guided me throughout the hiring process, shared relevant opportunities, and helped me secure a job quickly. The team was supportive, professional, and always available for queries. Highly recommended for job seekers.",
    role: "Candidate"
  },
  {
    id: 8,
    name: "Syed Vihaj Geelani",
    text: "I had a really great experience with Siavnte Consulting Services. The team is highly professional, supportive, and genuinely focused on helping candidates grow. They guided me properly at every step and made the whole process smooth and stress-free. What I liked the most is their clear communication and quick response. I would definitely recommend Siavnte Consulting Services to anyone looking for genuine career opportunities.",
    role: "Candidate"
  },
  {
    id: 9,
    name: "Ana",
    text: "Working with Siavnte Consulting Organization has been a rewarding experience. The company fosters a professional and collaborative environment that encourages growth and learning. I would especially like to thank Joginder Singh for his constant support, mentorship, and commitment to helping the team succeed.",
    role: "Candidate"
  },
  {
    id: 10,
    name: "Joy",
    text: "My experience with Siavnte Consulting Organization has been very positive. The organization maintains a professional work culture and values teamwork and transparency. It has been a rewarding journey, and I look forward to achieving more together.",
    role: "Candidate"
  }
];

const logoModules = import.meta.glob('../../logo/*.jpeg', { eager: true });
const logos = Object.values(logoModules).map((module) => module.default);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
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
        <div className="max-w-4xl flex-1 flex flex-col justify-center pt-20">
          
          <div className="mb-6">
            <span className="text-6xl text-gray-400 font-serif leading-none opacity-80 block mb-2">"</span>
          </div>
          
          <div className="h-[280px] md:h-[220px] lg:h-[200px] relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-white mb-8 leading-relaxed font-light italic">
                  {currentTestimonial.text}
                </h2>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white text-xl font-medium">
                    {currentTestimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white text-base font-medium">{currentTestimonial.name}</h4>
                    <p className="text-gray-400 text-[10px] font-mono tracking-widest uppercase mt-1">
                      {currentTestimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Slider Dots */}
          <div className="flex gap-2 mt-8 md:mt-4">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Bottom Section with Button and Logos */}
        <div className="mt-12 pb-12 w-full flex flex-col items-center">
          <Link 
            to="/careers" 
            className="inline-block px-5 py-2.5 mb-12 border border-white/30 text-gray-300 rounded hover:bg-white hover:text-black hover:border-white transition-colors text-sm"
          >
            Find open jobs
          </Link>

          {/* Company Logos Slider */}
          <div className="w-full overflow-hidden border-t border-white/10 pt-8 mt-auto">
            <p className="text-gray-400 text-sm font-medium tracking-widest uppercase mb-6 text-center">Our Alumni Work At</p>
            <div className="relative flex overflow-x-hidden w-full max-w-[100vw]">
              <div className="animate-marquee whitespace-nowrap flex items-center gap-16 min-w-max">
                {logos.map((logo, index) => (
                  <img key={`logo-1-${index}`} src={logo} alt={`Company logo ${index}`} className="h-12 w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 rounded-md mix-blend-screen" />
                ))}
                {/* Duplicate for seamless infinite scrolling */}
                {logos.map((logo, index) => (
                  <img key={`logo-2-${index}`} src={logo} alt={`Company logo dup ${index}`} className="h-12 w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 rounded-md mix-blend-screen" />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

