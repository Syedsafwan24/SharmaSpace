"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      sectionRef.current.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      text: "Exceptional service from concept to completion. The designers at Sharma Space have an incredible eye for detail and truly understood our vision for our home.",
      name: "Vikram P.",
      location: "Hyderabad",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      text: "Our hotel renovation was handled with utmost care and creativity. The result has been praised by all our guests, driving up our bookings significantly.",
      name: "Deepika R.",
      location: "Chennai",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 lg:py-30">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 mb-30">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-10 shadow-lg relative transition-transform duration-300 hover:-translate-y-1 group"
            >
              {/* Large decorative quote */}
              <div className="text-8xl text-red-50 absolute -top-2 left-8 leading-none font-serif">
                "
              </div>
              
              <div className="flex mb-5 mt-5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg mr-0.5">★</span>
                ))}
              </div>
              
              <p className="text-lg leading-relaxed text-gray-600 italic mb-8 relative z-10">
                {testimonial.text}
              </p>
              
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name} - Client testimonial`}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-base text-gray-500">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Brands Section */}
        <div className="text-center">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Our Partner Brands
          </h3>
          <p className="text-lg text-gray-500 mb-15 max-w-2xl mx-auto">
            We collaborate with premium brands to ensure quality and excellence in every project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;