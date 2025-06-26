
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Services from '../components/Services';
import Process from '../components/Process';
import Portfolio from '../components/PortfolioSection';
import Testimonials from '../components/Testimonials';
import Blog from '../components/BlogSection';
import Footer from '../components/Footer';

/**
 * Home page component - Main landing page
 * @reference {Design Doc} Homepage structure
 * @reference {SEO Doc} Section 2 - Page-level SEO checklist
 */
const Home = () => {
  useEffect(() => {
    // SEO meta tags
    document.title = "Interior Designers in Bangalore | Free 3D Consultation - Sharma Space";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your space with Bangalore\'s leading interior designers. Custom residential & commercial design solutions. Book free consultation today!');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Transform your space with Bangalore\'s leading interior designers. Custom residential & commercial design solutions. Book free consultation today!';
      document.head.appendChild(meta);
    }

    // Structured data for LocalBusiness
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://sharmaspace.com",
      "name": "Sharma Space",
      "description": "Interior design studio specializing in functional, personalized spaces blending aesthetics with practicality.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Design Avenue",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400001",
        "addressCountry": "IN"
      },
      "telephone": "+91 98765 43210",
      "email": "info@sharmaspace.com",
      "url": "https://sharmaspace.com",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "19:00"
      },
      "areaServed": ["Bangalore", "Whitefield", "Indiranagar", "Koramangala", "HSR Layout"],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "12.9716",
        "longitude": "77.5946"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div>
      <Navigation />
      <main>
        <Hero />
        <AboutSection />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
