import React from 'react';

const Hero = () => {
  return (
    <section className="max-w-[1920px] mx-auto px-4 md:px-12 py-12 md:py-24">
      <div className="flex flex-col md:flex-row bg-surface-container-lowest">
        <div className="flex-1 flex flex-col justify-center p-12 md:p-24 order-2 md:order-1">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-secondary-fixed-dim"></div>
            <span className="font-body text-secondary tracking-widest text-sm uppercase">OUR BESTSELLERS</span>
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-bold leading-tight mb-8 text-on-surface">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-4 mt-8">
            <a className="font-body text-on-surface font-semibold tracking-widest text-sm uppercase hover:text-primary transition-colors" href="#">SHOP NOW</a>
            <div className="w-12 h-[2px] bg-secondary-fixed-dim"></div>
          </div>
        </div>
        <div className="flex-1 order-1 md:order-2 h-[614px] md:h-auto min-h-[500px]">
          <img 
            alt="Fashion model wearing minimalist luxury clothing" 
            className="w-full h-full object-cover grayscale-[20%]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeOeXjVWbMguk6XYLgfrE3ZopbyVoKrrxwb7LQLUM8_osNaM-TymeLtiJzMEdNimMYyooI6w9j2njCUY2XzJn6nq-3nFKDgnOMh7qgRWmfVft7k9hBm7GvcWsfhFDHzNWTzxbNm8FJw_qVdV1tafUb7jxbMRWI6O1N6Kx6TJvU8JhkCcuEhZpRZJBzgFv74G9bTxvEYExrAaPAJ3B5YzSJ36N1kzhKwgJZoEiP24tYUSZyInNYhROhwx5SXruu5jG2Epr5eI0S2bRa"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
