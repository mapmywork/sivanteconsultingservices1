import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-careers.png';

export const jobs = [
  {
    id: 'marketing-specialist',
    title: 'Marketing Specialist',
    description: 'Craft compelling campaigns, drive brand presence, and shape our market position with strategic marketing initiatives.',
    tags: ['FULL TIME', 'REMOTE'],
    longDescription: 'As a Marketing Specialist at Siavnte Consulting Services, you will play a pivotal role in shaping our brand presence and driving impactful marketing campaigns. From conceptualization to execution, you will contribute to our dynamic marketing strategy, ensuring a compelling and consistent narrative across various channels.',
    responsibilities: [
      'Develop and execute innovative marketing campaigns to enhance brand visibility.',
      'Collaborate with cross-functional teams to create engaging content and promotional materials.',
      'Analyze market trends and competitor activities to identify strategic opportunities.',
      'Manage social media presence, optimizing platforms for brand awareness and engagement.',
      'Track and analyze campaign performance, providing insights for continuous improvement.',
      'Collaborate with external agencies and partners to maximize marketing impact.',
      'Stay updated on industry trends and emerging marketing technologies.'
    ],
    qualifications: [
      'Bachelor\'s degree in Marketing, Communications, or a related field.',
      'Proven experience in developing and implementing successful marketing campaigns.',
      'Strong creative and analytical skills, with an eye for detail.',
      'Proficiency in digital marketing platforms and social media management.',
      'Excellent communication and interpersonal skills.',
      'Ability to work collaboratively in a fast-paced, dynamic environment.'
    ],
    benefits: [
      'Competitive salary based on experience and performance.',
      'Health, dental, and vision insurance coverage.',
      'Opportunities for professional development and continued learning.',
      'Collaborative and inclusive work culture.',
      'Flexible work hours and remote work options.',
      'Employee wellness programs and initiatives.'
    ],
    details: {
      location: 'Hamburg, Germany',
      type: 'Full Time',
      salary: '40.000€ - 50.000€'
    },
    contact: {
      name: 'Ava Williams',
      role: 'TEAM MANAGER',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
    }
  },
  {
    id: 'senior-business-analyst',
    title: 'Senior Business Analyst',
    description: 'Analyze complex business problems, define technical requirements, and deliver strategic insights for our diverse clientele.',
    tags: ['FULL TIME', 'HYBRID'],
    longDescription: 'Join our team as a Senior Business Analyst. You will work closely with stakeholders to understand business needs and translate them into actionable technical requirements, driving strategic projects from inception to delivery.',
    responsibilities: [
      'Gather and analyze business requirements from key stakeholders.',
      'Develop comprehensive project documentation and technical specifications.',
      'Facilitate communication between business and IT teams.',
      'Identify process improvements and propose strategic solutions.',
      'Conduct user acceptance testing and ensure quality delivery.'
    ],
    qualifications: [
      'Master\'s or Bachelor\'s degree in Business, Finance, or IT.',
      '5+ years of experience in business analysis or management consulting.',
      'Strong problem-solving skills and critical thinking.',
      'Experience with Agile/Scrum methodologies.',
      'Excellent presentation and stakeholder management skills.'
    ],
    benefits: [
      'Competitive salary and performance bonuses.',
      'Comprehensive health insurance.',
      'Professional certification reimbursement.',
      'Hybrid work model (3 days in office).',
      'Generous paid time off.'
    ],
    details: {
      location: 'London, UK',
      type: 'Full Time',
      salary: '60.000£ - 80.000£'
    },
    contact: {
      name: 'Marcus Chen',
      role: 'RECRUITMENT LEAD',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
    }
  },
  {
    id: 'financial-consultant',
    title: 'Financial Consultant',
    description: 'Provide expert financial advice, develop growth models, and help businesses optimize their economic performance.',
    tags: ['CONTRACT', 'REMOTE'],
    longDescription: 'As a Financial Consultant, you will advise clients on optimizing their financial strategies, conducting risk assessments, and developing sustainable economic growth models tailored to their unique industry challenges.',
    responsibilities: [
      'Conduct detailed financial analysis and risk assessments.',
      'Develop financial models for forecasting and budgeting.',
      'Advise clients on investment strategies and capital allocation.',
      'Prepare comprehensive financial reports and presentations.',
      'Monitor market trends and regulatory changes affecting clients.'
    ],
    qualifications: [
      'CFA, CPA, or Master\'s degree in Finance.',
      'Proven track record in financial consulting or investment banking.',
      'Deep understanding of corporate finance and valuation methods.',
      'Advanced proficiency in financial modeling software.',
      'Exceptional analytical and numerical skills.'
    ],
    benefits: [
      'Highly competitive contract rates.',
      'Fully remote flexibility.',
      'Networking opportunities with top-tier clients.',
      'Access to premium financial research platforms.',
      'Performance-based incentives.'
    ],
    details: {
      location: 'Remote, Global',
      type: 'Contract',
      salary: 'Project Based'
    },
    contact: {
      name: 'Sarah Jenkins',
      role: 'PARTNER',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
    }
  },
];

const Careers = () => {

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
      </div>
    </div>
  );
};

export default Careers;
