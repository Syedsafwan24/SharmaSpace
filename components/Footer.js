import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const quickLinks = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'];
  const services = [
    'Residential Design',
    'Commercial Design', 
    'Hospitality Design',
    'Space Planning',
    'Furniture Selection',
    'Renovation Consultation'
  ];

  const contactInfo = [
    '123 Design Avenue, Mumbai, Maharashtra, India 400001',
    '+91 98765 43210',
    'info@sharmaspace.in',
    'Mon-Sat: 10 AM - 7 PM'
  ];

  const legalLinks = ['Privacy Policy', 'Terms of Service', 'Sitemap'];

  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Sharma Space
            </h3>
            <p className="text-base leading-relaxed text-gray-300 mb-6">
              Interior design studio specializing in functional, personalized spaces blending aesthetics with practicality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="list-none p-0 m-0 space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-gray-300 no-underline text-base transition-colors duration-300 hover:text-red-400"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Services
            </h4>
            <ul className="list-none p-0 m-0 space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-base">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="list-none p-0 m-0 space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-base leading-relaxed">
                    {info}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm m-0">
            © 2025 Sharma Space. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-300 no-underline text-sm hover:text-white transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;