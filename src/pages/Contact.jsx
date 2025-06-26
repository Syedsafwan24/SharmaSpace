
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

/**
 * Contact page placeholder
 * @reference {SEO Doc} Section 4 - NAP consistency requirements
 * @reference {SEO Doc} Section 4 - LocalBusiness schema requirements
 */
const Contact = () => {
  useEffect(() => {
    document.title = "Contact Interior Designers in Bangalore | Free Consultation - Sharma Space";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Sharma Space for interior design consultation in Bangalore. Call +91 98765 43210 or visit us at 123 Design Avenue, Mumbai. Free consultation available.');
    }
  }, []);

  return (
    <div style={{ backgroundColor: '#F8F9FA' }}>
      <Navigation />
      <main style={{ minHeight: '60vh', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1C1C1C', marginBottom: '24px' }}>
            Contact Us
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#4A4A4A', maxWidth: '600px', margin: '0 auto' }}>
            Coming soon - Get in touch for your interior design consultation. We're here to help transform your space.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
