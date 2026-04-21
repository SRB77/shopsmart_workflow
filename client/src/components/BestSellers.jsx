import React from 'react';
import ProductCard from './ProductCard';

const bestSellersData = [
  { id: 1, title: 'Cashmere Turtleneck', price: '$320.00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8GWRGRCYwE_8mg_ayGYyqgcSMZSAXMEHc0SLSFmRYhQLM8TfKkKeh8LdSSnknCzYSCr40h9Zbcf5rs1uS1-pqtXvxGhfpa1Gtm_lL0ooy4aeid-sPDEUllQPn_7-4uWi1ZCnbnnT5wxOEY-V1Yw2lEezZv8JYDPIrju6tyHiYIXpnDzDAQiGP5u0wq8VeJGHmHAaqaXZPwMML9M35Af7YWXzqvquxHhn0SGceV8tNR2uWyXp8zn4gZSbRU-fFUG1-P_zgvilzlRX1' },
  { id: 2, title: 'High-Waisted Silk Trousers', price: '$285.00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGN6j6Ynfk-F0G3OmoXyiLFsPGYwBQE3ZYXhaKAPHe2IairJRiZK71K5usTTCgCac_7TjNUGpVoTQsk_38HVG-THk2qp2K-u4_m-sZPuGKY7l6jC_Xfmavai3nGc533ijpx3u8Owx1foDgx-f2inzZjBjCsjXoiaLKIzcpTle7QMv0Fityq-1THm3y-RohCVek8_a8QJGieFabsPbNUwfhcqErw9KJtWjnTvIzXbhCpzvPRr67Uw3B5IbggEKpWt_s4D8iOWOaHRst' },
  { id: 3, title: 'Double-Breasted Trench', price: '$650.00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdtvmrQxe6-v_QgWtiHhlGc11oBxZP4SNtGAF4SomrnmsRLhu3V6SkVV2zrUUvuyHgp_pjfq7gmFQqabLeiYWP0_K-LQOfUAq3TnHadVTuAheSk1BCYOermRO7e0ErhtIodj0BJbWTI0IZ-rgdhhG3ztMJUlpgPGxWi9_pssEtVkgzwPmpkGLTvPIJwRbHtQTckW6knKkprC-7pLdqNa_fY4ibYF-Gjb-6xo_GPgw72Q2bXRQOpdna_DI0Hcg6Bog8wewkQOguqQXA' },
  { id: 4, title: 'Leather Chelsea Boots', price: '$420.00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNROK3Dmup5XcwKvEKRpmve76PauIlsdvyNlDOk-w8k9_WVUJloVCyVHjxjmia3CmowsDtRhHuajerN99k7DNgdmDpsZh02HUVoopfwXU4MArEglHurX9v5GXF3U_UqObWfb6vZiboXdL1vZ-zkfdWntkhtZ7CdHg3FPSx3fA_IU2GtNsJG6UejckLB_0XVo7CaPEiozani5X_MVHbJUia1h2MoS2el4UiIbzSEAPKDXRk0IU-Vupao4-MecTr-YtpM90f4i_hDFVN' }
];

const BestSellers = () => {
  return (
    <section className="max-w-[1920px] mx-auto px-4 md:px-12 py-24 bg-surface">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl font-bold mb-4 text-on-surface">BEST SELLERS</h2>
        <p className="font-body text-secondary max-w-2xl mx-auto">Our most sought-after pieces. Signature designs that define the Foreverbuy aesthetic.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {bestSellersData.map(product => (
          <ProductCard key={product.id} image={product.image} title={product.title} price={product.price} />
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
