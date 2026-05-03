import React, { useState, useEffect } from 'react';

const Collection = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  
  // Filter States
  const [selectedCategories, setSelectedCategories] = useState(['women']);
  const [selectedTypes, setSelectedTypes] = useState(['topwear']);
  const [sortOption, setSortOption] = useState('relevant');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = new URLSearchParams();
        if (selectedCategories.length > 0) params.append('category', selectedCategories.join(','));
        if (selectedTypes.length > 0) params.append('type', selectedTypes.join(','));
        if (sortOption !== 'relevant') params.append('sort', sortOption);

        const response = await fetch(`http://localhost:5001/api/products?${params.toString()}`);
        const data = await response.json();
        setProducts(data);
        setVisibleCount(6); // Reset visible count on new filter
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, [selectedCategories, selectedTypes, sortOption]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategories(prev => 
      e.target.checked ? [...prev, value] : prev.filter(c => c !== value)
    );
  };

  const handleTypeChange = (e) => {
    const value = e.target.value;
    setSelectedTypes(prev => 
      e.target.checked ? [...prev, value] : prev.filter(t => t !== value)
    );
  };

  return (
    <div className="flex-grow pt-24 bg-surface text-on-surface font-body antialiased min-h-screen flex flex-col">
      <main className="flex-grow w-full max-w-[1920px] mx-auto px-8 py-12 flex flex-col md:flex-row gap-16">
        
        {/* Sidebar / Filters */}
        <aside className="w-full md:w-64 flex-shrink-0 bg-surface-container-low p-8 rounded-lg">
          <h2 className="font-headline text-lg font-bold mb-8 tracking-tight">FILTERS</h2>
          
          <div className="mb-10">
            <h3 className="font-label text-sm uppercase tracking-widest text-on-surface-variant mb-4">CATEGORIES</h3>
            <div className="space-y-4">
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  value="men"
                  checked={selectedCategories.includes('men')}
                  onChange={handleCategoryChange}
                  className="form-checkbox h-4 w-4 text-primary bg-surface-container-high border-outline-variant/20 rounded-DEFAULT focus:ring-primary focus:ring-offset-surface"
                />
                <span className="font-body text-sm text-on-surface group-hover:text-primary transition-colors">Men</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  value="women"
                  checked={selectedCategories.includes('women')}
                  onChange={handleCategoryChange}
                  className="form-checkbox h-4 w-4 text-primary bg-surface-container-high border-outline-variant/20 rounded-DEFAULT focus:ring-primary focus:ring-offset-surface"
                />
                <span className="font-body text-sm text-on-surface group-hover:text-primary transition-colors">Women</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  value="kids"
                  checked={selectedCategories.includes('kids')}
                  onChange={handleCategoryChange}
                  className="form-checkbox h-4 w-4 text-primary bg-surface-container-high border-outline-variant/20 rounded-DEFAULT focus:ring-primary focus:ring-offset-surface"
                />
                <span className="font-body text-sm text-on-surface group-hover:text-primary transition-colors">Kids</span>
              </label>
            </div>
          </div>
          
          <div>
            <h3 className="font-label text-sm uppercase tracking-widest text-on-surface-variant mb-4">TYPE</h3>
            <div className="space-y-4">
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  value="topwear"
                  checked={selectedTypes.includes('topwear')}
                  onChange={handleTypeChange}
                  className="form-checkbox h-4 w-4 text-primary bg-surface-container-high border-outline-variant/20 rounded-DEFAULT focus:ring-primary focus:ring-offset-surface"
                />
                <span className="font-body text-sm text-on-surface group-hover:text-primary transition-colors">Topwear</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  value="bottomwear"
                  checked={selectedTypes.includes('bottomwear')}
                  onChange={handleTypeChange}
                  className="form-checkbox h-4 w-4 text-primary bg-surface-container-high border-outline-variant/20 rounded-DEFAULT focus:ring-primary focus:ring-offset-surface"
                />
                <span className="font-body text-sm text-on-surface group-hover:text-primary transition-colors">Bottomwear</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  value="winterwear"
                  checked={selectedTypes.includes('winterwear')}
                  onChange={handleTypeChange}
                  className="form-checkbox h-4 w-4 text-primary bg-surface-container-high border-outline-variant/20 rounded-DEFAULT focus:ring-primary focus:ring-offset-surface"
                />
                <span className="font-body text-sm text-on-surface group-hover:text-primary transition-colors">Winterwear</span>
              </label>
            </div>
          </div>
        </aside>

        {/* Product Grid Section */}
        <section className="flex-grow">
          {/* Header & Sort */}
          <div className="flex justify-between items-center mb-10 pb-4">
            <h1 className="font-headline text-3xl font-bold tracking-tight">All Collections</h1>
            <div className="relative">
              <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="appearance-none bg-surface-container-lowest border border-outline-variant/20 text-on-surface text-sm py-2 pl-4 pr-10 rounded-DEFAULT focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body shadow-[0_20px_40px_rgba(18,28,42,0.06)]"
              >
                <option value="relevant">Sort by: Relevant</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            {products.slice(0, visibleCount).map((product) => (
              <article key={product.id} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden bg-surface-container-low mb-4 relative rounded-DEFAULT">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
                  {product.isNew && (
                    <div className="absolute top-4 left-4 bg-surface-bright text-on-surface text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wide">
                      New
                    </div>
                  )}
                </div>
                <h3 className="font-body text-sm text-on-surface font-medium mb-1 truncate">{product.title}</h3>
                <p className="font-body text-sm text-on-surface-variant">${product.price.toFixed(2)}</p>
              </article>
            ))}
            
            {products.length === 0 && (
              <div className="col-span-full py-20 text-center text-on-surface-variant">
                No products found matching your filters.
              </div>
            )}
          </div>

          {/* Load More */}
          {visibleCount < products.length && (
            <div className="mt-20 flex justify-center">
              <button 
                onClick={handleLoadMore}
                className="bg-surface-container-lowest border border-outline-variant/20 text-primary font-label text-sm uppercase tracking-wider px-8 py-3 rounded-lg hover:bg-surface-container-low transition-colors shadow-[0_20px_40px_rgba(18,28,42,0.06)]"
              >
                Load More
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Collection;
