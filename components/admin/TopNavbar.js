'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, Mail, LogOut, Globe } from 'lucide-react';
import { signOut } from 'next-auth/react';

const TopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white p-4 flex items-center justify-between shadow-md lg:hidden">
      <h1 className="text-xl font-bold text-[#1C1C1C]">Dashboard</h1>
      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-[#E63946]">
          <Mail size={24} />
        </button>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-[#E63946]">
          <Menu size={24} />
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-md p-4 z-50">
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-700 hover:text-[#E63946]"
                onClick={() => setIsMenuOpen(false)}
              >
                <Globe size={20} />
                Back to Website
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  signOut({ callbackUrl: '/login' });
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-2 text-gray-700 hover:text-[#E63946] w-full text-left"
              >
                <LogOut size={20} />
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TopNavbar;
