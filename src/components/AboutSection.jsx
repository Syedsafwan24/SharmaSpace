import React, { useEffect, useRef } from 'react';
import '../css/AboutSection.css';

/**
 * About section component - Pixel-perfect recreation of reference image
 * @reference About page design with orange sofa and exact color matching
 */
const AboutSection = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = [sectionRef.current, statsRef.current, imageRef.current];
    elements.forEach((el) => {
      if (el) {
        el.classList.add('about-fade-init');
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-root">
      {/* Main About Section */}
      <section id="about-section" className="about-section">
        <div className="about-container">
          {/* Left Content */}
          <div ref={sectionRef} className="about-content">
            <h1 className="about-title">About Sharma Space</h1>
            <p className="about-desc">
              At Sharma Space, we believe in creating interiors that are not just beautiful but also functional. With over 10 years of experience, we've transformed 150+ spaces into dream homes and offices.
            </p>
            <p className="about-desc">
              Our design philosophy centers around understanding your unique needs and preferences, then translating them into spaces that reflect your personality while enhancing your everyday life.
            </p>
            {/* Stats Grid */}
            <div ref={statsRef} className="about-stats-grid">
              <div>
                <div className="about-stat-number">150+</div>
                <div className="about-stat-label">Projects Completed</div>
              </div>
              <div>
                <div className="about-stat-number">10+</div>
                <div className="about-stat-label">Years Experience</div>
              </div>
              <div>
                <div className="about-stat-number">500+</div>
                <div className="about-stat-label">Happy Clients</div>
              </div>
            </div>
          </div>
          {/* Right Image Section */}
          <div ref={imageRef} className="about-image-wrapper">
            <div className="about-image-card">
              <img 
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern orange sofa with decorative pillows in contemporary living room - Sharma Space interior design showcase"
                className="about-image"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="about-year-card">
              <div className="about-year">2013</div>
              <div className="about-year-label">Year Established</div>
            </div>
          </div>
        </div>
      </section>
      {/* Floating Action Buttons */}
      <div className="about-fab-group">
        {/* WhatsApp */}
        <a
          href="https://wa.me/+919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="about-fab about-fab-whatsapp"
          aria-label="WhatsApp Sharma Space"
        >
          <span role="img" aria-label="WhatsApp">💬</span>
        </a>
        {/* Instagram */}
        <a
          href="https://instagram.com/sharmaspace"
          target="_blank"
          rel="noopener noreferrer"
          className="about-fab about-fab-instagram"
          aria-label="Instagram Sharma Space"
        >
          <span role="img" aria-label="Instagram">📸</span>
        </a>
      </div>
    </div>
  );
};

export default AboutSection;
