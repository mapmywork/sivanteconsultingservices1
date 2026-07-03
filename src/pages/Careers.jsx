import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-careers.png';
import { getJobs } from '../services/api';

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getJobs()
      .then((data) => setJobs(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[#0A1A16]/80 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent z-20"></div>
          <img 
            src={heroImage} 
            alt="Careers Hero" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 mb-6 text-[10px] font-mono font-bold text-gray-300 uppercase tracking-widest border border-gray-500/50 rounded bg-white/5 backdrop-blur-sm">
              CAREERS
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair text-white mb-6 leading-tight">
              Join our Team.<br />
              <span className="font-bold">Build Your Future.</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
              Discover a world of possibilities. Elevate your career with us — a place where passion meets purpose.
            </p>
            
            <a href="#open-jobs" className="inline-flex flex-col items-center gap-3 text-xs font-bold tracking-widest text-gray-300 hover:text-white transition-colors group mx-auto">
              VIEW OPEN JOBS
              <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-white transition-colors">
                <ArrowDown size={14} />
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Jobs List Section */}
      <div id="open-jobs" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-12">
          <h2 className="text-3xl font-playfair font-bold text-white mb-4">Open Positions</h2>
          <p className="text-gray-400">Explore our current opportunities and find your next role.</p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="py-8 border-b border-gray-800 animate-pulse">
                <div className="h-6 bg-gray-800 rounded w-1/3 mb-3"></div>
                <div className="h-4 bg-gray-800/60 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="py-12 text-center">
            <p className="text-gray-400 mb-4">Unable to load job listings.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-6 py-2 bg-primary text-black rounded-full font-bold hover:bg-[#E5C200] transition-colors text-sm"
            >
              Retry
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && jobs.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-gray-400">No open positions at the moment. Check back soon!</p>
          </div>
        )}

        {/* Jobs List */}
        {!loading && !error && jobs.length > 0 && (
          <div className="space-y-4">
            {jobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link 
                  to={`/careers/${job.id}`}
                  className="py-8 border-b border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors group cursor-pointer -mx-6 px-6 rounded-lg block"
                >
                  <div className="flex-1 max-w-2xl">
                    <h3 className="text-2xl font-medium text-gray-200 mb-2">{job.title}</h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="flex gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs font-mono font-medium rounded-md uppercase tracking-wider border border-gray-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center text-gray-300 group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Careers;
