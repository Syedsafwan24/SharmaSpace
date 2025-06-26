import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🛋️',
      title: 'Residential Design',
      description: 'Tailored interiors for homes that reflect your personality.',
    },
    {
      icon: '🏢',
      title: 'Commercial Design',
      description: 'Functional and inspiring workspaces for businesses.',
    },
    {
      icon: '🏨',
      title: 'Hospitality Design',
      description: 'Creating memorable experiences for hotels and restaurants.',
    },
  ];

  return (
    <section className="bg-gray-50 py-20 lg:py-30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold leading-tight text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive design solutions tailored to your specific needs and aspirations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-15">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-6 text-3xl text-white transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-600 mb-6">
                {service.description}
              </p>
              <button className="bg-transparent text-red-600 border-none text-base font-semibold cursor-pointer flex items-center gap-2 mx-auto transition-colors duration-300 hover:text-red-700">
                Learn More →
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-red-700 text-white px-8 py-4 rounded border-none text-base font-semibold cursor-pointer transition-all duration-300 hover:bg-red-800 hover:-translate-y-1">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;