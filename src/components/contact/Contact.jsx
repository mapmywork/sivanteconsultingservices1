import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

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
