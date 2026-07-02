import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-secondary text-gray-300 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={logo} alt="Siavnte Logo" className="h-12 w-auto mb-6" />
            <p className="text-gray-400 mb-6">Parent Company of Chinnu Car Rentals & Brand Mind Pvt. Ltd.</p>
            <p className="text-sm font-medium text-gold uppercase tracking-wider">Where Vision Meets Leadership.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#leadership" className="hover:text-primary transition-colors">Leadership</a></li>
              <li><a href="#values" className="hover:text-primary transition-colors">Core Values</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
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
