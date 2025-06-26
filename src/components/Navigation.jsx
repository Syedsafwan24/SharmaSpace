
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

/**
 * Navigation component - Pixel-perfect recreation
 * @reference {Design Doc} Navigation - Minimalist horizontal style
 * @reference {Design Doc} Navigation - 24px spacing between items
 */
const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(248, 249, 250, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '20px 0',
        zIndex: 1000,
        borderBottom: '1px solid rgba(237, 237, 237, 0.3)',
        transition: 'all 0.3s ease'
      }}
    >
      <div 
        style={{ 
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Link 
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#E63946',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontSize: '1.2rem',
              fontWeight: '700'
            }}
          >
            S
          </div>
          <span
            style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#1C1C1C'
            }}
          >
            Sharma Space
          </span>
        </Link>
        
        <ul style={{ 
          display: 'flex',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          gap: '32px'
        }}>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                style={{
                  color: isActive(item.path) ? '#E63946' : '#1C1C1C',
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  fontSize: '1rem',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#E63946';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = isActive(item.path) ? '#E63946' : '#1C1C1C';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        
        {/* Social icons */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <div 
            style={{ 
              color: '#1C1C1C', 
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: '4px'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#E63946';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#1C1C1C';
              e.target.style.transform = 'scale(1)';
            }}
          >
            <Instagram size={20} />
          </div>
          <div 
            style={{ 
              color: '#1C1C1C', 
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: '4px'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#E63946';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#1C1C1C';
              e.target.style.transform = 'scale(1)';
            }}
          >
            <Facebook size={20} />
          </div>
          <div 
            style={{ 
              color: '#1C1C1C', 
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: '4px'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#E63946';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#1C1C1C';
              e.target.style.transform = 'scale(1)';
            }}
          >
            <Youtube size={20} />
          </div>
          <div 
            style={{ 
              color: '#1C1C1C', 
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: '4px'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#E63946';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#1C1C1C';
              e.target.style.transform = 'scale(1)';
            }}
          >
            <Twitter size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
