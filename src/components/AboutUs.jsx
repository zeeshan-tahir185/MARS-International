import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-10 bg-white text-[#0d4f9e]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Us</h2>

        <p className="text-base md:text-lg mb-6 text-gray-700">
          MARS International is a versatile enterprise specializing in diversified industrial, defense, and commercial supply solutions. Headquartered in Rawalpindi, Pakistan, we operate as a trusted supplier, integrator, and technology partner to clients across public and private sectors.
        </p>

        <p className="text-base md:text-lg mb-6 text-gray-700">
          Our areas of expertise include procurement, import-export services, engineering development, and customized project solutions. From critical hardware components to high-tech systems, our reach spans sectors such as telecommunication, electronics, robotics, ICT, defense technologies, and infrastructure support.
        </p>

        <p className="text-base md:text-lg mb-10 text-gray-700">
          In collaboration with national and international partners, MARS International provides tailored solutions aligned with the specific needs of every project—focusing on quality, value, and timely delivery.
        </p>

        <div className="bg-[#0d4f9e] text-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Message from the Director</h3>

          <p className="text-base md:text-lg mb-4">
            At MARS International, our purpose is rooted in driving meaningful progress through innovation, reliability, and excellence. As we continue to partner with government institutions and industry pioneers, our objective remains focused—delivering intelligent solutions that empower organizations and contribute to technological advancement.
          </p>

          <p className="text-base md:text-lg mb-4">
            We are committed to offering solutions that reflect precision, innovation, and a deep understanding of our clients’ unique challenges. With a forward-looking mindset, MARS International aims to foster a culture of excellence, resilience, and customer trust.
          </p>

          <p className="text-base md:text-lg font-medium">
            Thank you for your confidence in MARS International as we continue shaping a more capable and connected future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
