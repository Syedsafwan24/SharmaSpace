"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

const Navigation = () => {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-50/95 backdrop-blur-md py-5 z-50 border-b border-gray-200/30 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link 
          href="/"
          className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
        >
          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white text-lg font-bold">
            S
          </div>
          <span className="text-xl font-bold text-gray-900">
            Sharma Space
          </span>
        </Link>
        
        <ul className="flex list-none m-0 p-0 gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`${
                  isActive(item.path) ? 'text-red-600' : 'text-gray-900'
                } no-underline font-medium transition-all duration-300 text-base relative hover:text-red-600 hover:-translate-y-0.5`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="flex gap-4">
          {[Instagram, Facebook, Youtube, Twitter].map((Icon, index) => (
            <div 
              key={index}
              className="text-gray-900 cursor-pointer transition-all duration-300 p-1 hover:text-red-600 hover:scale-110"
            >
              <Icon size={20} />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;