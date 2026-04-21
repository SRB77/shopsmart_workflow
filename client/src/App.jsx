import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import BestSellers from './components/BestSellers';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24">
        <Hero />
        <Collections />
        <BestSellers />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default App;
