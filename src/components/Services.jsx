
import React from 'react';

/**
 * Services section component - Pixel-perfect recreation
 * @reference {Design Doc} Homepage.services - Service items structure
 * @reference {Design Doc} Layout.card - Card styling specifications
 */
const Services = () => {
  return (
    <section 
      style={{
        backgroundColor: '#F8F9FA',
        padding: '120px 0'
      }}
    >
      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              lineHeight: '1.2',
              color: '#1C1C1C',
              marginBottom: '24px'
            }}
          >
            Our Services
          </h2>
          <p 
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.6',
              color: '#4A4A4A',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            We offer comprehensive design solutions tailored to your specific needs and aspirations.
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
            marginBottom: '60px'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div 
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#E63946',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto',
                fontSize: '2rem',
                color: '#FFFFFF'
              }}
            >
              🛋️
            </div>
            <h3 
              style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1C1C1C',
                marginBottom: '16px'
              }}
            >
              Residential Design
            </h3>
            <p 
              style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#4A4A4A',
                marginBottom: '24px'
              }}
            >
              Tailored interiors for homes that reflect your personality.
            </p>
            <button
              style={{
                backgroundColor: 'transparent',
                color: '#E63946',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                margin: '0 auto'
              }}
            >
              Learn More →
            </button>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div 
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#E63946',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto',
                fontSize: '2rem',
                color: '#FFFFFF'
              }}
            >
              🏢
            </div>
            <h3 
              style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1C1C1C',
                marginBottom: '16px'
              }}
            >
              Commercial Design
            </h3>
            <p 
              style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#4A4A4A',
                marginBottom: '24px'
              }}
            >
              Functional and inspiring workspaces for businesses.
            </p>
            <button
              style={{
                backgroundColor: 'transparent',
                color: '#E63946',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                margin: '0 auto'
              }}
            >
              Learn More →
            </button>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div 
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#E63946',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto',
                fontSize: '2rem',
                color: '#FFFFFF'
              }}
            >
              🏨
            </div>
            <h3 
              style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1C1C1C',
                marginBottom: '16px'
              }}
            >
              Hospitality Design
            </h3>
            <p 
              style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#4A4A4A',
                marginBottom: '24px'
              }}
            >
              Creating memorable experiences for hotels and restaurants.
            </p>
            <button
              style={{
                backgroundColor: 'transparent',
                color: '#E63946',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                margin: '0 auto'
              }}
            >
              Learn More →
            </button>
          </div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <button
            style={{
              backgroundColor: '#D62828',
              color: '#FFFFFF',
              padding: '16px 32px',
              borderRadius: '4px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
