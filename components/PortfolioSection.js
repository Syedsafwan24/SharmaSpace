// app/components/PortfolioSection.jsx
'use client';

import Image from 'next/image';
import Link   from 'next/link';
import React  from 'react';

/* -------------------------------------------------------------------------- */
/*  Project data                                                              */
/* -------------------------------------------------------------------------- */

const mainProjects = [
  {
    title: 'Modern Apartment in Bangalore',
    description:
      'A sleek, minimalist design with functionality at its core. The renovation involved removing walls and creating an open-plan apartment transformed into a sophisticated living space with clean lines and thoughtful touches throughout.',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Co-Working Space in Whitefield',
    description:
      'A vibrant, collaborative workspace designed for productivity and creativity. This modern facility provides a dynamic environment for professionals from various fields in Bangalore’s tech hub.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
];

const smallerProjects = [
  {
    title: 'Kitchen Design',
    image:
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Bedroom Suite',
    image: '/images/bedroom-suite.jpg',
  },
  {
    title: 'Dining Area',
    image:
      'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

/* -------------------------------------------------------------------------- */
/*  Card components                                                           */
/* -------------------------------------------------------------------------- */

const HeroCard = ({ project }) => (
  <article className="relative group h-[400px] rounded-2xl overflow-hidden shadow-lg">
    {/* Image */}
    <Image
      src={project.image}
      alt={`${project.title} interior design`}
      fill
      sizes="(min-width: 1024px) 50vw, 100vw"
      priority
      className="object-cover transition duration-300 group-hover:scale-105"
    />

    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

    {/* Caption */}
    <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
      <h3 className="text-2xl font-semibold leading-snug">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed line-clamp-3">{project.description}</p>

      <Link
        href="#"
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium tracking-wide hover:text-[#E63946] transition"
      >
        View Project <span aria-hidden>→</span>
      </Link>
    </div>
  </article>
);

const ThumbCard = ({ project }) => (
  <article className="relative group h-48 rounded-xl overflow-hidden">
    <Image
      src={project.image}
      alt={project.title}
      fill
      sizes="(min-width: 1024px) 20vw, 50vw"
      className="object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-75"
    />

    <h4 className="absolute bottom-3 left-4 z-10 text-white text-base font-medium drop-shadow-sm">
      {project.title}
    </h4>
  </article>
);

/* -------------------------------------------------------------------------- */
/*  Section                                                                   */
/* -------------------------------------------------------------------------- */

const PortfolioSection = () => (
  <section id="portfolio" className="py-24">
    <div className="mx-auto max-w-7xl px-4">
      {/* Section header */}
      <header className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1C1C]">
          Featured Projects
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-neutral-600">
          Browse through our portfolio of meticulously crafted spaces designed to inspire.
        </p>
      </header>

      {/* Main (2-col) grid */}
      <div className="grid gap-8 lg:grid-cols-2 mb-10">
        {mainProjects.map((project) => (
          <HeroCard key={project.title} project={project} />
        ))}
      </div>

      {/* Thumbnails (3-col on lg) */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {smallerProjects.map((project) => (
          <ThumbCard key={project.title} project={project} />
        ))}
      </div>

      {/* CTA button */}
      <div className="text-center">
        <Link
          href="/portfolio"
          className="inline-block rounded border border-[#E63946] px-8 py-3 text-sm font-semibold
                     text-[#E63946] hover:bg-[#E63946] hover:text-white transition"
        >
          View Full Portfolio
        </Link>
      </div>
    </div>
  </section>
);

export default PortfolioSection;
