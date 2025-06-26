
import React from 'react';

/**
 * Process section component - Pixel-perfect recreation of vertical timeline
 * @reference {Design Doc} Homepage.process - Process steps structure with vertical layout
 */
const Process = () => {
  return (
    <section 
      style={{
        backgroundColor: '#F8F9FA',
        padding: '120px 0',
        position: 'relative'
      }}
    >
      <div 
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative'
        }}
      >
        {/* Central vertical line */}
        <div 
          style={{
            position: 'absolute',
            left: '50%',
            top: '0',
            bottom: '0',
            width: '2px',
            backgroundColor: '#E63946',
            transform: 'translateX(-50%)',
            zIndex: 1
          }}
        />

        {/* Step 1 - Consultation */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '120px',
            position: 'relative'
          }}
        >
          {/* Left content */}
          <div 
            style={{
              width: '45%',
              textAlign: 'right',
              paddingRight: '40px'
            }}
          >
            <div 
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                position: 'relative'
              }}
            >
              <h3 
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1C1C1C',
                  marginBottom: '12px'
                }}
              >
                Consultation
              </h3>
              <p 
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#666666',
                  margin: '0'
                }}
              >
                We understand your vision and requirements.
              </p>
            </div>
          </div>

          {/* Center circle */}
          <div 
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 2
            }}
          >
            <div 
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#E63946',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontSize: '1.5rem',
                fontWeight: '700',
                border: '4px solid #FFFFFF',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              01
            </div>
            {/* Chat icon circle */}
            <div 
              style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                width: '40px',
                height: '40px',
                backgroundColor: '#FFFFFF',
                border: '2px solid #E63946',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#E63946',
                fontSize: '1.2rem'
              }}
            >
              💬
            </div>
          </div>

          {/* Right decorative element */}
          <div 
            style={{
              width: '45%',
              paddingLeft: '40px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div 
              style={{
                width: '120px',
                height: '80px',
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem'
              }}
            >
              📊
            </div>
          </div>
        </div>

        {/* Step 2 - Design */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '120px',
            position: 'relative'
          }}
        >
          {/* Left decorative element */}
          <div 
            style={{
              width: '45%',
              textAlign: 'right',
              paddingRight: '40px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div 
              style={{
                width: '120px',
                height: '80px',
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem'
              }}
            >
              📋
            </div>
          </div>

          {/* Center circle */}
          <div 
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 2
            }}
          >
            <div 
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#E63946',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontSize: '1.5rem',
                fontWeight: '700',
                border: '4px solid #FFFFFF',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              02
            </div>
            {/* Design icon circle */}
            <div 
              style={{
                position: 'absolute',
                top: '-10px',
                left: '-10px',
                width: '40px',
                height: '40px',
                backgroundColor: '#FFFFFF',
                border: '2px solid #E63946',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#E63946',
                fontSize: '1.2rem'
              }}
            >
              ✏️
            </div>
          </div>

          {/* Right content */}
          <div 
            style={{
              width: '45%',
              paddingLeft: '40px'
            }}
          >
            <div 
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                position: 'relative'
              }}
            >
              <h3 
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1C1C1C',
                  marginBottom: '12px'
                }}
              >
                Design
              </h3>
              <p 
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#666666',
                  margin: '0'
                }}
              >
                Our team creates customized design concepts.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 - Execution */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          {/* Left content */}
          <div 
            style={{
              width: '45%',
              textAlign: 'right',
              paddingRight: '40px'
            }}
          >
            <div 
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                position: 'relative'
              }}
            >
              <h3 
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1C1C1C',
                  marginBottom: '12px'
                }}
              >
                Execution
              </h3>
              <p 
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#666666',
                  margin: '0'
                }}
              >
                We bring the design to life with precision.
              </p>
            </div>
          </div>

          {/* Center circle */}
          <div 
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 2
            }}
          >
            <div 
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#E63946',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontSize: '1.5rem',
                fontWeight: '700',
                border: '4px solid #FFFFFF',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              03
            </div>
            {/* Hammer icon circle */}
            <div 
              style={{
                position: 'absolute',
                bottom: '-10px',
                right: '-10px',
                width: '40px',
                height: '40px',
                backgroundColor: '#FFFFFF',
                border: '2px solid #E63946',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#E63946',
                fontSize: '1.2rem'
              }}
            >
              🔨
            </div>
          </div>

          {/* Right decorative element */}
          <div 
            style={{
              width: '45%',
              paddingLeft: '40px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div 
              style={{
                width: '120px',
                height: '80px',
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem'
              }}
            >
              💻
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
