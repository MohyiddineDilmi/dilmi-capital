import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Portfolio from '../sections/Portfolio';
import Contact from '../sections/Contact';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { PAGE_SEO } from '../utils/seoConfig';

const HomePage = () => {
  return (
    <>
      <SEO {...PAGE_SEO.home} />
      <StructuredData type="organization" />
      <StructuredData type="localBusiness" />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
};

export default HomePage; 