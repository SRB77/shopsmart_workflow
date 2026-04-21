import React from 'react';
import ProductCard from './ProductCard';

const collectionsData = [
  { id: 1, title: 'Structured Wool Blazer', price: '$340.00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO76EbuiXaImMWjElD2iR4_gk2QsUR9-igDIjNAAAWDXj1rjI1tn61ukd6tDqCrqN4tdWknlVPXW4zALplBstlb46M2nz9QdKdcniXrLVpbcO_CgBag0NqVGAg7g4Itz-jkFevScYxBAlwKucVFf_Ap8LtXL5QvxdISIfOAlsWAk6cQ-UOZe-hiogcQPYm09RKLZ0OhCP_YnsLaweNdjmr1HkgqvNRNDVJOkEX0bF6K-FXIVR8BvjojVoYxSqErtYutktg2j4elgjE' },
  { id: 2, title: 'Architectural Overcoat', price: '$480.00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdJL4XPcm01W5-C5ro66xxpRZbpKh8p-43O11XuRqt8sajD_0e-fa9S5ip9MDCjigTzywKs8b92KxlmGQlNAt1rfGXZMTYfhYMcRxGqJWZYoy_wo2vk5a3nzK3smd9WtlBLAJrFmYslX0sCOZ6Sd_hKj9jG_VdkxAvxwn7y7qcBrFrRwmbjtq6Z4stJ8-ptmD4QFrWLvCnmJU7sPkoDtmNUacP4r4cYrDcTW45OZv6aIEOJjeS4AwBFLyF4u8lVOfF5gnjUdeK55vZ' },
  { id: 3, title: 'Pleated Volume Trousers', price: '$220.00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtQnC6j080jO_t8uCiqmMG6MOsX2eeJtNbyHnfFnou7EuUHzrDMSd7Y7D0gl_W8UtdI-otMcNfXhCwiT319Lct6dxBfzMBelV3daJ6x5eVnRZzZFbKEVVcDwofHY4X0-xqyYAKD216dg6uRXnG8W5ObQjWGwt_U5GVf273PZ9yZ5Bild2UV9IdgiWl5evuVl2F7ta5ne4A-6K8LqnKpwQ_45m8NDmqz2TvfOwRpvQvpfhCTxMJpQ9iV-52igU7iFiBfZ4kiiZWTQLc' },
  { id: 4, title: 'Oversized Silk Shirt', price: '$185.00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTqzu7S7PC6BFe6hZSkzbn4cw2wS9HQ_wbsdkwqcWu1Pk63x-gtBhZvmB-GKWJZS4E1yhIbXx1Y8vPcxoQw2bv6eNK8B1y-LJaudlBR2yUq5XEWZoYURnefG2zZsXGR7QoEPrcH6I3EoV2KtLW1s9vlBqtsG6vUgJIngcRBEuqzCPiGGooS5JIgf64igpsDCZlrNxpQv-3V2CtPS-RBkCeunag6fie4j6d3pZRfyYRUKhzKEipf975MnwsOyV_OtGAJOzUIU6wu3y0' },
  { id: 5, title: 'Asymmetric Knit Sweater', price: '$260.00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDph33t8qGqiiwCTJM_CUyqDMHDHSeERW3tM5XqwqPox7QAhw2aeHjidg79_JdC1u32dU-yzoQpl9wilXGta5KGpk3D-yBsPRN2C-VpRF_sNwEYbyfgLl85EqQKY1HgVccyBRR24BpOilxKA0Oy_ZYwOVdcoQGJ4rd3OT83avNv4M2RnOyuw4ugEaXoUv86TtoQWyujCa0y4cYjWl-M8poN7UDizCz7qW1QvnMfjgag8qFP62lSIXEl7zLWgYjsqCvLbHF8GoW9etYC' },
  { id: 6, title: 'Structured Leather Tote', price: '$550.00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWirgYgjJ496Wse38AJu07-QnlbSIHMxEdNXZWbylmmBxPfRKlF_wCkLwwreyEMPSOlLkU1xNqTMucv0SOVHCVAesPO9m5bDQRe8GKZnQ_rGLWIC_h4BfVdPNNJXDcRwhNAsd-TJYfG_raQG08ikwg4BCqoWSW-QtkIwAntvUk8HZF7DWNszpeDKHdqFj2SdjZxwPZ94mhz4ws8i4ev8hHRqixGGndo3OpovygX5fkGL2haLUMSbi3ml-MzTMicmS2LvaHM_rZbLer' },
  { id: 7, title: 'Tailored Wool Vest', price: '$195.00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7CRQsdl8g--pPykTs_bVZfGJ8KfOak7YrTpE9PeP2TabNN25t55CK5cqj4sw2jzJGZco3CO0Aw7yCN67Kt5EZ5PuAKfkMdnGCCuCOQmVXF4-CJMQxClFYc4eDvEya1PGL38e5zo_y_uunc_3MvTetvsGSLMuhD1oXXyGTDgLi6tjixRaSJbdYavZn9cVPtmI8VQv04eHVHIfVKKhHqa_vWT3E2knfnXZsYXxHr69kGd2e3eSsDGjRjXnHsYvwQCSC3xzh3iP9j9gE' },
  { id: 8, title: 'Geometric Gold Earrings', price: '$140.00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCHPS2xgDI1O1dciqR6K3GZGwVtxb0RwfVuJbWxlqOEM5NLl87_-FSWwINGUrP5vchHVU1N-aYgKscw9LPgECEL8jBSt98GqjYhqupxpn9034yxHAPu1ASzN5PPO8h2DGsLeT8_XvWC_N6VSU0y1lucPoDjTiRCE2KlxG2GNIdEVjVaJO1quUZ2v7u5vsWB5Z5TtUGqZiYU58_Ew2xEtYkwkCaFBx8EuOUX564Yh9AieVaHl55BK_35LE6vHraa90fjU2S_QHCuEsu' },
];

const Collections = () => {
  return (
    <section className="max-w-[1920px] mx-auto px-4 md:px-12 py-24 bg-surface-container-low">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl font-bold mb-4 text-on-surface">LATEST COLLECTIONS</h2>
        <p className="font-body text-secondary max-w-2xl mx-auto">Curated architectural pieces designed for the modern aesthetic. Explore our newest arrivals embodying sharp minimalism.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {collectionsData.map(product => (
          <ProductCard key={product.id} image={product.image} title={product.title} price={product.price} />
        ))}
      </div>
    </section>
  );
};

export default Collections;
