import React from 'react';
import { FaRocket } from 'react-icons/fa';

const OurMission = () => {
  return (
    <section id="our-mission" className="py-20 px-4 md:px-10 bg-gray-100 text-[#0d4f9e]">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-[#0d4f9e] text-white p-4 rounded-full shadow-lg">
            <FaRocket size={40} />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Our mission is to deliver high-performance, cost-effective, and reliable solutions that exceed client expectations.
          We strive to build long-term partnerships by offering personalized service, cutting-edge technologies, and a
          commitment to continuous improvement and excellence.
        </p>
      </div>
    </section>
  );
};

export default OurMission;
