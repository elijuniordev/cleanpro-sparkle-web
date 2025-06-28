
import React from 'react';
import { Home, Car, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Upholstery Cleaning",
      description: "Professional cleaning for sofas, chairs, and all fabric furniture to restore their original beauty and freshness."
    },
    {
      icon: Home,
      title: "Mattress Cleaning",
      description: "Deep cleaning and sanitization of mattresses to ensure a healthy and comfortable sleeping environment."
    },
    {
      icon: Home,
      title: "Carpet & Rug Cleaning",
      description: "Thorough carpet cleaning using advanced techniques to remove stains, odors, and allergens effectively."
    },
    {
      icon: Car,
      title: "Automotive Interior Cleaning",
      description: "Complete car interior detailing including seats, carpets, and dashboard for a fresh driving experience."
    },
    {
      icon: Home,
      title: "General Residential Cleaning",
      description: "Comprehensive home cleaning services covering all areas to maintain a spotless living environment."
    },
    {
      icon: Users,
      title: "Commercial Cleaning",
      description: "Professional office and commercial space cleaning to maintain a productive and hygienic workplace."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Comprehensive Cleaning Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential to commercial spaces, we provide specialized cleaning solutions 
            tailored to meet your specific needs with professional excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-6 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
