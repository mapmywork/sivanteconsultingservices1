import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, MapPin, Clock, IndianRupee, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { getJob } from '../services/api';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    getJob(id)
      .then((data) => setJob(data))
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center pt-24">
        <div className="w-8 h-8 border-2 border-[#FFD700] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Not found state
  if (notFound || !job) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center pt-24 px-4 text-center">
        <h1 className="text-3xl font-playfair text-white mb-4">Job Not Found</h1>
        <p className="text-gray-400 mb-8">We couldn't find the position you were looking for.</p>
        <Link to="/careers" className="px-6 py-2 bg-primary text-white rounded-full hover:bg-secondary transition-colors inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Careers
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <Link
          to="/careers"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to Open Positions
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 mb-6">
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs font-mono font-medium rounded-md uppercase tracking-wider border border-gray-700/50"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6 leading-tight">
            {job.title}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl border-l-2 border-primary pl-4">
            {job.description}
          </p>
          
          <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-gray-800">
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={18} className="text-primary" />
              <span>{job.details?.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Clock size={18} className="text-primary" />
              <span>{job.details?.type}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <IndianRupee size={18} className="text-primary" />
              <span>{job.details?.salary}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 font-playfair">Role Overview</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              {job.longDescription}
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 font-playfair">Key Responsibilities</h2>
            <ul className="space-y-4">
              {job.responsibilities?.map((req, idx) => (
                <li key={idx} className="flex gap-4 text-gray-400 items-start">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 font-playfair">Qualifications</h2>
            <ul className="space-y-4">
              {job.qualifications?.map((req, idx) => (
                <li key={idx} className="flex gap-4 text-gray-400 items-start">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 font-playfair">Benefits</h2>
            <ul className="space-y-4">
              {job.benefits?.map((req, idx) => (
                <li key={idx} className="flex gap-4 text-gray-400 items-start">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6 font-playfair">Ready to Join Us?</h2>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-2xl">
              If you're passionate about making an impact and meet the requirements above, we'd love to hear from you.
              Please submit your application, including your resume and a brief cover letter.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-end bg-black/20 p-6 rounded-xl border border-gray-800">
              <button 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: job.title,
                      url: window.location.href
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Link copied to clipboard!");
                  }
                }}
                className="w-full sm:w-auto px-8 py-3 border border-gray-600 text-white font-bold rounded-full hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Share2 size={18} />
                Share
              </button>
              <a 
                href="https://forms.gle/uBWvKHzS2dNQuYgJ9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3 bg-primary text-black font-bold rounded-full hover:bg-secondary transition-colors hover:scale-105 transform inline-block text-center"
              >
                Apply Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JobDetails;
