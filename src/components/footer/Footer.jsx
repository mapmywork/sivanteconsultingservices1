import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Instagram = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-secondary text-gray-300 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={logo} alt="Siavnte Logo" className="h-12 w-auto mb-6" />
            <p className="text-gray-400 mb-6">Parent Company of Chinnu Car Rentals & Brand Mind Pvt. Ltd.</p>
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">Where Vision Meets Leadership.</p>
            <div className="space-y-2 mb-6">
              <a href="mailto:myhr@siavnteconsulting.services" className="text-gray-400 hover:text-white transition-colors block">
                myhr@siavnteconsulting.services
              </a>
              <a href="tel:+919651463572" className="text-gray-400 hover:text-white transition-colors block">
                +91 9651463572
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/siavnte_consulting?utm_source=qr&igsh=MTh0ZjNvZ3M2dXg0YQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-[#0A0A0A] transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/sivante-consulting-service/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-[#0A0A0A] transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#leadership" className="hover:text-primary transition-colors">Leadership</a></li>
              <li><a href="#values" className="hover:text-primary transition-colors">Core Values</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Business Ecosystem</h4>
            <ul className="space-y-4">
              <li><span className="text-primary font-medium block">Siavnte Consulting Services</span><span className="text-xs text-gray-400">Parent Organization</span></li>
              <li><span className="text-success font-medium block">Chinnu Car Rentals</span><span className="text-xs text-gray-400">Premium Mobility Solutions</span></li>
              <li><span className="text-purple font-medium block">Brand Mind Pvt. Ltd.</span><span className="text-xs text-gray-400">Branding Beyond Creativity</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4">
              <li>Strategic Business Consulting</li>
              <li>Recruitment & Executive Hiring</li>
              <li>HR Outsourcing</li>
              <li>Startup Consulting</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Siavnte Consulting Services. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
