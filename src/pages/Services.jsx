
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

/**
 * Services page placeholder
 * @reference {SEO Doc} Section 1 - Tier-C service keywords
 */
const Services = () => {
  useEffect(() => {
    document.title = "Interior Design Services in Bangalore | Modular Kitchen & Wardrobe - Sharma Space";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive interior design services in Bangalore: modular kitchens, wardrobes, residential & commercial design. Expert space planning and furniture selection.');
    }
  }, []);

  return (
    <div style={{ backgroundColor: '#F8F9FA' }}>
      <Navigation />
      <main style={{ minHeight: '60vh', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1C1C1C', marginBottom: '24px' }}>
            Our Services
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#4A4A4A', maxWidth: '600px', margin: '0 auto' }}>
            Coming soon - Detailed information about our residential, commercial, and hospitality design services.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
