'use client';
import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Akash Sharma',
    title: 'Founder & Principal Designer',
    description: 'With over 15 years of experience, Akash leads our team with his innovative vision and passion for transformative design.',
    image: '/images/Desgin-Insights/10.webp',
  },
  {
    name: 'Priya Malhotra',
    title: 'Senior Interior Designer',
    description: 'Priya specializes in residential design with an eye for detail and a talent for creating harmonious living spaces.',
    image: '/images/Desgin-Insights/istockphoto-1386479313-612x612.jpg',
  },
  {
    name: 'Vikram Mehta',
    title: 'Commercial Design Specialist',
    description: 'Vikram brings his expertise in commercial and hospitality design, creating functional and impressive spaces for businesses.',
    image: '/images/Desgin-Insights/E12KS1G65-W0168RE00G7-133faf432639-512.jpeg',
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6">
              <div className="w-64 h-64 mb-6 rounded-lg overflow-hidden">
                <Image src={member.image} alt={member.name} width={256} height={256} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">{member.name}</h3>
              <div className="text-red-600 font-medium mb-2 text-center">{member.title}</div>
              <p className="text-gray-700 text-base text-center">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 