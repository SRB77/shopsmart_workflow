import React from 'react';
import Newsletter from '../components/Newsletter';

const About = () => {
  return (
    <div className="flex-grow pt-24">
      {/* Header Section */}
      <div className="text-center pt-24 pb-12 flex justify-center items-center gap-4">
        <h1 className="text-3xl font-['Noto_Serif'] tracking-wide text-zinc-800 uppercase flex items-center gap-4">
          <span className="font-normal text-gray-500">ABOUT</span> <span className="font-bold">US</span>
          <div className="w-16 h-[2px] bg-zinc-800"></div>
        </h1>
      </div>

      {/* Hero Section */}
      <section className="w-full max-w-[1200px] mx-auto px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="w-full">
          <img alt="Curated collection of clothes and accessories" className="w-full h-auto object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjz1i_B1fVRwLGxv3rTu_QHVqRCwNF3a42Yg6xzcP3ULkVJ-nU9eNNMrZ-MiwRxbQTh0CAHDCxunDLASjTxXg0fpckc-GvISXSgo294lKmqtExPoSBWH8cnRmZHGit_7jCQF3LLakTVgnjAOGxDcrWDpHCpyToKe7G4RM9Tc3Wlbp5gTJm_bzo289OQhSyWWZa3BG_RikJtnfP7O5RIlCvNuCmsNCIcSqCpnGyi1C7m1S14rzQV7LEXjDQWTGW3gi-dvvBYePt6-TN"/>
        </div>
        <div className="flex flex-col gap-6 font-['Plus_Jakarta_Sans'] text-gray-600 text-[15px] leading-relaxed">
          <p>
              Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
          </p>
          <p>
              Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
          </p>
          <h3 className="font-bold text-gray-900 text-lg mt-4">Our Mission</h3>
          <p>
              Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full max-w-[1200px] mx-auto px-12 py-24">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-2xl font-['Noto_Serif'] tracking-wide text-zinc-800 uppercase flex items-center gap-4">
            <span className="font-normal text-gray-500">WHY</span> <span className="font-bold">CHOOSE US</span>
            <div className="w-16 h-[2px] bg-zinc-800"></div>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200">
          {/* Feature 1 */}
          <div className="flex flex-col items-start gap-4 p-12 border-b md:border-b-0 md:border-r border-gray-200">
            <h3 className="font-bold text-gray-900 text-[15px]">Quality Assurance:</h3>
            <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600 leading-relaxed">
                We meticulously select and vet each product to ensure it meets our stringent quality standards.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-start gap-4 p-12 border-b md:border-b-0 md:border-r border-gray-200">
            <h3 className="font-bold text-gray-900 text-[15px]">Convenience:</h3>
            <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600 leading-relaxed">
                With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-start gap-4 p-12">
            <h3 className="font-bold text-gray-900 text-[15px]">Exceptional Customer Service:</h3>
            <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600 leading-relaxed">
                Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </section>
      
      <Newsletter />
    </div>
  );
};

export default About;
