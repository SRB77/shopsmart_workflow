import React from 'react';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import BestSellers from '../components/BestSellers';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div className="flex-grow pt-24">
      <Hero />
      <Collections />
      <BestSellers />
      <Newsletter />
    </div>
  );
};

export default Home;
