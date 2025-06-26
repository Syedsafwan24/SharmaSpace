import React from 'react';
import Image from 'next/image';

const PortfolioSection = () => {
  const mainProjects = [
    {
      title: 'Modern Apartment in Bangalore',
      description: 'A sleek, minimalist design with functionality at its core. The renovation involved removing walls and creating an open-plan apartment into a sophisticated living space with clean lines and thoughtful touches throughout.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Co-Working Space in Whitefield',
      description: 'A vibrant, collaborative workspace designed for productivity and creativity. This modern co-working facility provides a dynamic environment for professionals from various fields in Bangalore\'s tech hub.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const smallerProjects = [
    {
      title: 'Kitchen Design',
      image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Bedroom Suite',
      image: 'https://images.unsplash.com/photo-1571508601792-53c25e4fe732?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Dining Area',
      image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="bg-gray-50 py-20 lg:py-30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold leading-tight text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
            Browse through our portfolio of meticulously crafted spaces designed to inspire.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {mainProjects.map((project, index) => (
            <div
              key={index}
              className="relative h-96 lg:h-[400px] rounded-lg overflow-hidden group cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 opacity-90">
                  {project.description}
                </p>
                <button className="bg-transparent text-white border-none text-base font-medium cursor-pointer flex items-center gap-2 transition-colors duration-300 hover:text-gray-300">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row with 3 smaller projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {smallerProjects.map((project, index) => (
            <div
              key={index}
              className="h-48 rounded-lg relative overflow-hidden group cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white text-base font-semibold drop-shadow-lg">
                {project.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;