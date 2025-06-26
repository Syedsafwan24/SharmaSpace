import React from 'react';
import { MessageCircle } from 'lucide-react';
import './css/Hero.css';

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="hero-background" style={{ backgroundImage: "url('/images/Hero-Background.webp')" }}></div>
      
      {/* Dark Overlay */}
      <div className="hero-overlay"></div>
      
      {/* Main Content */}
      <div className="hero-container">
        <div className="hero-content">
          {/* Main Heading */}
          <h1 className="hero-title">
            Crafting<br />
            Spaces<br />
            That<br />
            Reflect<br />
            You
          </h1>
          
          {/* Subtitle */}
          <p className="hero-subtitle">
            Elevate your surroundings with custom interiors designed to enhance both aesthetics and functionality.
          </p>
          
          {/* CTA Button */}
          <button className="hero-cta-button">
            Book a Free Consultation
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-indicator" onClick={scrollToNext}>
        <div className="scroll-text">Discover More</div>
        <div className="scroll-arrow">↓</div>
      </div>

      {/* Floating Social Icons */}
      <div className="social-icons">
        {/* WhatsApp */}
        <a
          href="https://wa.me/+919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon whatsapp-icon"
        >
          <MessageCircle size={26} />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/sharmaspace"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram-icon"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;