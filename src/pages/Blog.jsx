
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

/**
 * Blog page placeholder
 * @reference {SEO Doc} Section 1 - Bi-weekly blog calendar requirements
 */
const Blog = () => {
  useEffect(() => {
    document.title = "Interior Design Blog - Tips & Trends | Sharma Space Bangalore";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Interior design blog with latest trends, tips, and insights from Bangalore experts. Home decor ideas, design guides, and industry updates.');
    }
  }, []);

  return (
    <div style={{ backgroundColor: '#F8F9FA' }}>
      <Navigation />
      <main style={{ minHeight: '60vh', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1C1C1C', marginBottom: '24px' }}>
            Design Blog
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#4A4A4A', maxWidth: '600px', margin: '0 auto' }}>
            Coming soon - Latest trends, tips, and insights from our interior design experts.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
