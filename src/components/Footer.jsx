
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer component
 * @reference {Design Doc} Footer - 4-column responsive layout
 * @reference {SEO Doc} Section 4 - NAP consistency requirements
 */
const Footer = () => {
  const quickLinks = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'];
  const services = [
    'Residential Design',
    'Commercial Design', 
    'Hospitality Design',
    'Space Planning',
    'Furniture Selection',
    'Renovation Consultation'
  ];

  const contactInfo = [
    '123 Design Avenue, Mumbai, Maharashtra, India 400001',
    '+91 98765 43210',
    'info@sharmaspace.com',
    'Mon-Sat: 10 AM - 7 PM'
  ];

  const legalLinks = ['Privacy Policy', 'Terms of Service', 'Sitemap'];

  return (
    <footer 
      style={{
        backgroundColor: '#1C1C1C',
        color: '#FFFFFF',
        padding: '80px 0 40px 0'
      }}
    >
      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}
      >
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '48px',
            marginBottom: '48px'
          }}
        >
          {/* Company Info */}
          <div>
            <h3 
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '16px'
              }}
            >
              Sharma Space
            </h3>
            <p 
              style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#EDEDED',
                marginBottom: '24px'
              }}
            >
              Interior design studio specializing in functional, personalized spaces blending aesthetics with practicality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '16px'
              }}
            >
              Quick Links
            </h4>
            <ul 
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}
            >
              {quickLinks.map((link, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    style={{
                      color: '#EDEDED',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#E63946'}
                    onMouseLeave={(e) => e.target.style.color = '#EDEDED'}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 
              style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '16px'
              }}
            >
              Services
            </h4>
            <ul 
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}
            >
              {services.map((service, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>
                  <span
                    style={{
                      color: '#EDEDED',
                      fontSize: '1rem'
                    }}
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 
              style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '16px'
              }}
            >
              Contact Us
            </h4>
            <ul 
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}
            >
              {contactInfo.map((info, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <span
                    style={{
                      color: '#EDEDED',
                      fontSize: '1rem',
                      lineHeight: '1.4'
                    }}
                  >
                    {info}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div 
          style={{
            borderTop: '1px solid #4A4A4A',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <p 
            style={{
              color: '#EDEDED',
              fontSize: '0.875rem',
              margin: 0
            }}
          >
            © 2025 Sharma Space. All rights reserved.
          </p>
          
          <div 
            style={{
              display: 'flex',
              gap: '24px'
            }}
          >
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                style={{
                  color: '#EDEDED',
                  textDecoration: 'none',
                  fontSize: '0.875rem'
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
