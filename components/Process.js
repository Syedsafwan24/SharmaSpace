import React from 'react';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We understand your vision and requirements.',
      icon: '💬',
      decorativeIcon: '📊',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Our team creates customized design concepts.',
      icon: '✏️',
      decorativeIcon: '📋',
    },
    {
      number: '03',
      title: 'Execution',
      description: 'We bring the design to life with precision.',
      icon: '🔨',
      decorativeIcon: '💻',
    },
  ];

  return (
    <section className="bg-gray-50 py-20 lg:py-30 relative">
      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Central vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-red-600 transform -translate-x-1/2 z-10" />

        {steps.map((step, index) => (
          <div key={index} className={`flex items-center mb-30 relative ${index === steps.length - 1 ? 'mb-0' : ''}`}>
            {/* Left content for odd steps, right for even */}
            <div className={`w-2/5 ${index % 2 === 0 ? 'text-right pr-10' : 'order-2 pl-10'}`}>
              <div className="bg-white p-8 rounded-xl shadow-lg relative">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-600 m-0">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Center circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-white text-xl font-bold border-4 border-white shadow-lg">
                {step.icon}
              </div>
              {/* Icon circle */}
              {/* <div className={`absolute ${index % 2 === 0 ? '-top-2 -right-2' : '-bottom-2 -left-2'} w-10 h-10 bg-white border-2 border-red-600 rounded-full flex items-center justify-center text-red-600 text-lg`}>
                {step.number}
              </div> */}
            </div>

            {/* Right decorative element for odd steps, left for even */}
            <div className={`w-2/5 ${index % 2 === 0 ? 'order-2 pl-10' : 'pr-10'} flex justify-center`}>
              <div className="w-30 h-20 bg-white rounded-lg shadow-md flex items-center justify-center text-3xl">
                {step.decorativeIcon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;