import React from 'react';
import { FaLightbulb } from 'react-icons/fa';

const OurVision = () => {
  return (
    <section id="our-vision" className="py-20 px-4 md:px-10 bg-white text-[#0d4f9e]">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-[#0d4f9e] text-white p-4 rounded-full shadow-lg">
            <FaLightbulb size={40} />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          To emerge as a leading force in transforming Pakistan’s technological landscape through the provision of advanced
          equipment, engineered systems, and collaborative innovation — empowering industries and supporting national self-sufficiency.
        </p>
      </div>
    </section>
  );
};

export default OurVision;
