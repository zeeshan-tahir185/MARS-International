import React from 'react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage:
          'url(/img1.avif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0d4f9e]/70"></div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-10 max-w-5xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Welcome to MARS International
        </h1>

        <p className="text-lg md:text-xl mb-8">
          MARS International is proud to stand at the intersection of reliability and innovation. Whether you're a public sector entity, private enterprise, or defense organization—our team is here to support your mission.
        </p>

        <p className="text-md md:text-lg text-gray-100">
          MARS International is a registered private enterprise based in Rawalpindi, specializing in advanced engineering solutions, specialized procurement, and integrated systems for defense, telecom, and industrial sectors. We provide a full suite of services from equipment sourcing to end-to-end technical project execution. Our strategic alliances with international OEMs and technical partners enable us to deliver localized innovation at global standards.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
