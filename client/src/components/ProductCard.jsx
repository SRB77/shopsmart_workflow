import React from 'react';

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[3/4] bg-surface-container-lowest overflow-hidden mb-8">
        <img 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          src={image}
        />
      </div>
      <h3 className="font-body font-medium text-lg text-on-surface mb-2">{title}</h3>
      <p className="font-body text-secondary">{price}</p>
    </div>
  );
};

export default ProductCard;
