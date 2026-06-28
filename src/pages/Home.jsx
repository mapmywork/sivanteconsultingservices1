import React from 'react';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Services from '../components/services/Services';
import Ecosystem from '../components/ecosystem/Ecosystem';
import Leadership from '../components/leadership/Leadership';
import Values from '../components/values/Values';
import Testimonials from '../components/testimonials/Testimonials';
import Contact from '../components/contact/Contact';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Services />
      <Ecosystem />
      <Leadership />
      <Values />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
