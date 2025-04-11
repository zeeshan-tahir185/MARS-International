import React from 'react';
import {
  FaCogs,
  FaTools,
  FaMicrochip,
  FaRobot,
  FaIndustry,
  FaDraftingCompass,
} from 'react-icons/fa';

const services = [
  {
    title: 'PROCUREMENT & SUPPLY CHAIN SOLUTIONS',
    icon: <FaCogs size={28} />,
    description: `MARS International offers seamless procurement services for industrial, technical, and commercial goods. Our supply includes power and telecommunication cables, IT peripherals, specialized spares, machinery, and lab equipment, catering to sectors like defense`,
  },
  {
    title: 'REPAIR & MAINTENANCE SERVICES',
    icon: <FaTools size={28} />,
    description: `We provide expert repair services for sensitive electronics, industrial equipment, telecom systems, and control panels. Our diagnostics and restoration services ensure extended equipment lifespans and reduced operational downtime.`,
  },
  {
    title: 'MECHANICAL & CUSTOM FABRICATION',
    icon: <FaIndustry size={28} />,
    description: `In partnership with experienced engineers and fabricators, we offer custom mechanical components and small-scale machinery manufacturing. Our solutions support clients like SPD, and other strategic institutions.`,
  },
  {
    title: 'PCB DESIGN & ASSEMBLY',
    icon: <FaMicrochip size={28} />,
    description: `Our advanced PCB services include design, prototyping, and production of multilayer, high-speed, and RF boards for a wide array of applications — from healthcare and aerospace to defense and automation.`,
  },
  {
    title: 'ROBOTICS & SMART SYSTEMS',
    icon: <FaRobot size={28} />,
    description: `MARS International delivers advanced robotics, drones, and automation equipment. We also develop in-house robotic systems via our R&D team, supporting smart surveillance, industrial automation, and reconnaissance missions.`,
  },
  {
    title: 'ENGINEERING & R&D SERVICES',
    icon: <FaDraftingCompass size={28} />,
    description: `Our engineers develop cutting-edge electronic systems, RF modules, embedded platforms, and signal processing solutions. Our R&D spans military, space, commercial, and biomedical applications.`,
  },
];

const OurServices = () => {
  return (
    <section id="our-services" className="py-20 px-4 md:px-10 bg-gradient-to-br from-[#e6f0ff] to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0d4f9e] mb-16">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 flex flex-col items-center text-center h-full border hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
            >
              <div className="mb-5 bg-[#0d4f9e] text-white p-4 rounded-full shadow-md">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#0d4f9e] mb-3">{service.title}</h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
