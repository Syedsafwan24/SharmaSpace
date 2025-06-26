
import React from 'react';

/**
 * Portfolio section component - Pixel-perfect recreation
 * @reference {Design Doc} Components.projectCards - 3-column grid layout
 * @reference {Design Doc} ContentSamples.projectDescriptions - Sample content
 */
const PortfolioSection = () => {
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
            Featured Projects
          </h2>
          <p 
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.6',
              color: '#4A4A4A',
              maxWidth: '700px',
              margin: '0 auto'
            }}
          >
            Browse through our portfolio of meticulously crafted spaces designed to inspire.
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
            marginBottom: '24px'
          }}
        >
          {/* Project 1 - Modern Living Room */}
          <div
            style={{
              position: 'relative',
              height: '400px',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                padding: '40px 32px 32px 32px',
                color: '#FFFFFF'
              }}
            >
              <h3 
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '12px'
                }}
              >
                Modern Apartment in Bangalore
              </h3>
              <p 
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.5',
                  marginBottom: '16px',
                  opacity: 0.9
                }}
              >
                A sleek, minimalist design with functionality at its core. The renovation involved removing walls and creating an open-plan apartment into a sophisticated living space with clean lines and thoughtful touches throughout.
              </p>
              <button
                style={{
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                View Project →
              </button>
            </div>
          </div>

          {/* Project 2 - Office Space */}
          <div
            style={{
              position: 'relative',
              height: '400px',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                padding: '40px 32px 32px 32px',
                color: '#FFFFFF'
              }}
            >
              <h3 
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '12px'
                }}
              >
                Co-Working Space in Whitefield
              </h3>
              <p 
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.5',
                  marginBottom: '16px',
                  opacity: 0.9
                }}
              >
                A vibrant, collaborative workspace designed for productivity and creativity. This modern co-working facility provides a dynamic environment for professionals from various fields in Bangalore's tech hub.
              </p>
              <button
                style={{
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                View Project →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom row with 3 smaller projects */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px'
          }}
        >
          <div
            style={{
              height: '200px',
              borderRadius: '8px',
              backgroundImage: `url('https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: '600',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
            }}>
              Kitchen Design
            </div>
          </div>
          <div
            style={{
              height: '200px',
              borderRadius: '8px',
              backgroundImage: `url('https://images.unsplash.com/photo-1571508601792-53c25e4fe732?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: '600',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
            }}>
              Bedroom Suite
            </div>
          </div>
          <div
            style={{
              height: '200px',
              borderRadius: '8px',
              backgroundImage: `url('https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: '600',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
            }}>
              Dining Area
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
