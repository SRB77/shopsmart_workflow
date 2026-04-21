import React from 'react';

const Newsletter = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 md:px-12 py-32 text-center">
      <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-on-surface">Subscribe now & get 20% off</h2>
      <p className="font-body text-secondary mb-12">Join our curatorial list to receive updates on new collections and exclusive access.</p>
      <form className="flex flex-col md:flex-row max-w-xl mx-auto">
        <input 
          className="flex-grow bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-4 py-4 font-body text-on-surface placeholder-secondary-fixed-dim transition-colors outline-none" 
          placeholder="Enter your email" 
          type="email"
        />
        <button 
          className="bg-black text-white font-body font-bold tracking-[2px] uppercase px-12 py-4 mt-6 md:mt-0 hover:bg-primary-container transition-colors duration-300" 
          type="button"
        >
          SUBSCRIBE
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
