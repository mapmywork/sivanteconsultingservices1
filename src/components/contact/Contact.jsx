import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

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

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-4 block">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">Let's Build Something Extraordinary Together</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Email Us</h4>
                <a href="mailto:myhr@siavnteconsulting.services" className="text-muted hover:text-primary transition-colors">myhr@siavnteconsulting.services</a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center text-success shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">WhatsApp / Phone</h4>
                <p className="text-muted">+91 9651463572</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Headquarters</h4>
                <p className="text-muted">Metro Station, Mehrauli-Gurgaon Rd, Indian Airlines Pilots Society, Sushant Lok Phase I, Gurugram, Haryana 122009</p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6">
              <h4 className="text-lg font-bold text-white mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/siavnte_consulting?utm_source=qr&igsh=MTh0ZjNvZ3M2dXg0YQ==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-[#0A0A0A] transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://www.linkedin.com/company/sivante-consulting-service/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-[#0A0A0A] transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <form className="bg-black p-8 rounded-2xl border border-white/10 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="john@company.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Company</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Your Company" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-200 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-primary text-white font-semibold rounded-xl hover:bg-secondary transition-colors text-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
