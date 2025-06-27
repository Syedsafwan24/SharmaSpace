import React from 'react';
import Image from 'next/image';

const RecentProjects = () => {
  const projects = [
    {
      title: 'Modern Apartment in Mumbai',
      category: 'Residential',
      image: '/images/resident.jpg',
    },
    {
      title: 'Luxury Villa in Delhi',
      category: 'Residential',
      image: '/images/bedroom-suite.jpg',
    },
    {
      title: 'Co-Working Space in Bangalore',
      category: 'Commercial',
      image: '/images/commercial.jpg',
    },
    {
      title: 'Urban Loft Renovation',
      category: 'Residential',
      image: '/images/sofa.jpg',
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">Recent Projects</h2>
      <p className="text-gray-600 text-sm mb-6">Latest projects added to your portfolio</p>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden shadow-sm">
              <Image
                src={project.image}
                alt={project.title}
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="font-semibold text-gray-800">{project.title}</p>
              <p className="text-sm text-gray-500">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
