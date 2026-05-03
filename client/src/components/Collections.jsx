import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const Collections = ({ hideTitle = false }) => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    fetch('http://localhost:5001/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching collections:", err));
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <section className={`max-w-[1920px] mx-auto px-4 md:px-12 ${hideTitle ? 'pb-24' : 'py-24'} bg-surface-container-low`}>
      {!hideTitle && (
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold mb-4 text-on-surface">LATEST COLLECTIONS</h2>
          <p className="font-body text-secondary max-w-2xl mx-auto">Curated architectural pieces designed for the modern aesthetic. Explore our newest arrivals embodying sharp minimalism.</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.slice(0, visibleCount).map(product => (
          <ProductCard key={product.id} image={product.image} title={product.title} price={`$${product.price.toFixed(2)}`} />
        ))}
      </div>
      
      {visibleCount < products.length && (
        <div className="mt-16 flex justify-center">
          <button 
            onClick={handleLoadMore}
            className="bg-black text-white font-body font-bold tracking-[2px] uppercase px-12 py-4 hover:bg-primary-container transition-colors duration-300"
          >
            LOAD MORE
          </button>
        </div>
      )}
    </section>
  );
};

export default Collections;
