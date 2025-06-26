
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

/**
 * Portfolio page placeholder
 * @reference {SEO Doc} Section 2 - Page-level SEO checklist
 */
const Portfolio = () => {
  useEffect(() => {
    document.title = "Interior Design Portfolio - Bangalore Projects | Sharma Space";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our portfolio of 150+ interior design projects in Bangalore. Residential, commercial, and hospitality spaces transformed by Sharma Space.');
    }
  }, []);

  return (
    <div style={{ backgroundColor: '#F8F9FA' }}>
      <Navigation />
      <main style={{ minHeight: '60vh', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1C1C1C', marginBottom: '24px' }}>
            Our Portfolio
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#4A4A4A', maxWidth: '600px', margin: '0 auto' }}>
            Coming soon - Explore our completed projects showcasing innovative interior design solutions.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
