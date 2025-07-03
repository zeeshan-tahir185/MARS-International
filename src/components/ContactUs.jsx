import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const contactDetails = [
  {
    icon: <FaPhoneAlt size={22} />,
    label: 'Phone',
    value: '0516161763',
    link: 'tel:0516161763',
  },
  {
    icon: <FaEnvelope size={22} />,
    label: 'Email',
    value: 'info@marsinternational.pk',
    link: 'mailto:info@marsinternational.pk',
  },
  {
    icon: <FaGlobe size={22} />,
    label: 'Website',
    value: 'www.marsinternational.pk',
    link: 'http://www.marsinternational.pk/',
  },
  {
    icon: <FaMapMarkerAlt size={22} />,
    label: 'Location',
    value: 'Office 3, Bostan Khan Road, Alhamd Building, Chaklala Scheme III, Rawalpindi',
    link: 'Office 3, Bostan Khan Road, Alhamd Building, Chaklala Scheme III, Rawalpindi',
  },
];

const ContactUs = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-10 bg-gradient-to-b from-[#f5f9ff] to-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0d4f9e] mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {contactDetails.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl p-6 flex items-center gap-5 border hover:border-[#0d4f9e]"
            >
              <div className="bg-[#0d4f9e] text-white p-3 rounded-full shadow-lg group-hover:scale-110 transition">
                {item.icon}
              </div>
              <div className="text-left">
                <h4 className="text-md font-semibold text-[#0d4f9e]">{item.label}</h4>
                <p className="text-gray-700 text-sm group-hover:text-[#0d4f9e]">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
