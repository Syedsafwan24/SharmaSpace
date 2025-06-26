
import React, { useEffect, useRef } from 'react';

/**
 * Testimonials component - Pixel-perfect recreation matching reference design
 * @reference {Design Doc} Components.testimonials - Two testimonial cards with profile images
 */
const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      sectionRef.current.style.opacity = '0';
      sectionRef.current.style.transform = 'translateY(30px)';
      sectionRef.current.style.transition = 'all 0.8s ease-out';
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      style={{
        backgroundColor: '#F8F9FA',
        padding: '120px 0'
      }}
    >
      <div 
        ref={sectionRef}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}
      >
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '60px',
            marginBottom: '120px'
          }}
        >
          {/* Testimonial 1 */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              padding: '40px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              position: 'relative',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Large decorative quote */}
            <div 
              style={{
                fontSize: '6rem',
                color: '#FFE5E5',
                position: 'absolute',
                top: '-10px',
                left: '30px',
                lineHeight: 1,
                fontFamily: 'serif'
              }}
            >
              "
            </div>
            
            <div 
              style={{
                display: 'flex',
                marginBottom: '20px',
                marginTop: '20px'
              }}
            >
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#FFD700', fontSize: '1.3rem', marginRight: '2px' }}>★</span>
              ))}
            </div>
            
            <p 
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.7',
                color: '#4A4A4A',
                fontStyle: 'italic',
                marginBottom: '32px',
                position: 'relative',
                zIndex: 2
              }}
            >
              Exceptional service from concept to completion. The designers at Sharma Space have an incredible eye for detail and truly understood our vision for our home.
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="Vikram P. - Client testimonial"
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
              <div>
                <div 
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#1C1C1C',
                    marginBottom: '4px'
                  }}
                >
                  Vikram P.
                </div>
                <div 
                  style={{
                    fontSize: '1rem',
                    color: '#666666'
                  }}
                >
                  Hyderabad
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              padding: '40px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              position: 'relative',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Large decorative quote */}
            <div 
              style={{
                fontSize: '6rem',
                color: '#FFE5E5',
                position: 'absolute',
                top: '-10px',
                left: '30px',
                lineHeight: 1,
                fontFamily: 'serif'
              }}
            >
              "
            </div>
            
            <div 
              style={{
                display: 'flex',
                marginBottom: '20px',
                marginTop: '20px'
              }}
            >
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#FFD700', fontSize: '1.3rem', marginRight: '2px' }}>★</span>
              ))}
            </div>
            
            <p 
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.7',
                color: '#4A4A4A',
                fontStyle: 'italic',
                marginBottom: '32px',
                position: 'relative',
                zIndex: 2
              }}
            >
              Our hotel renovation was handled with utmost care and creativity. The result has been praised by all our guests, driving up our bookings significantly.
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b977?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="Deepika R. - Client testimonial"
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
              <div>
                <div 
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#1C1C1C',
                    marginBottom: '4px'
                  }}
                >
                  Deepika R.
                </div>
                <div 
                  style={{
                    fontSize: '1rem',
                    color: '#666666'
                  }}
                >
                  Chennai
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Brands Section */}
        <div style={{ textAlign: 'center' }}>
          <h3 
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#1C1C1C',
              marginBottom: '16px'
            }}
          >
            Our Partner Brands
          </h3>
          <p 
            style={{
              fontSize: '1.125rem',
              color: '#666666',
              marginBottom: '60px',
              maxWidth: '600px',
              margin: '0 auto 60px'
            }}
          >
            We collaborate with premium brands to ensure quality and excellence in every project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
