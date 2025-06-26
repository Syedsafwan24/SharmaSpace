
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

/**
 * About page placeholder
 * @reference {SEO Doc} Section 2 - Page-level SEO checklist
 * @reference {Design Doc} AboutPage.stats - Statistics structure
 */
const About = () => {
  useEffect(() => {
    document.title = "About Us - Interior Designers in Bangalore | Sharma Space";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Sharma Space\'s 10+ years of interior design expertise in Bangalore. 150+ projects completed, 500+ happy clients across residential and commercial spaces.');
    }
  }, []);

  return (
    <div style={{ backgroundColor: '#F8F9FA' }}>
      <Navigation />
      <main style={{ minHeight: '60vh', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1C1C1C', marginBottom: '24px' }}>
            About Sharma Space
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#4A4A4A', maxWidth: '600px', margin: '0 auto' }}>
            Coming soon - Learn about our journey, team, and mission to transform spaces across Bangalore and beyond.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
