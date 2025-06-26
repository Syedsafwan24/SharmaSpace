
import React from 'react';

/**
 * Blog section component
 * @reference {Design Doc} Components.blogCards - 3-column grid layout
 * @reference {SEO Doc} Section 1 - Bi-weekly blog calendar requirements
 */
const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Art of Lighting: Creating Ambiance in Your Home",
      author: "Sharma Space",
      date: "Jan 15, 2025",
      excerpt: "Discover how proper lighting can transform any space into a welcoming haven. Learn the basics of ambient, task, and accent lighting...",
      cta: "Read More →"
    },
    {
      title: "Sustainable Interior Design: Eco-Friendly Choices",
      author: "Sharma Space",
      date: "Jan 10, 2025",
      excerpt: "Explore eco-friendly materials and sustainable practices that don't compromise on style. Make your home beautiful and environmentally conscious...",
      cta: "Read More →"
    },
    {
      title: "Maximizing Small Spaces: Tips from the Experts",
      author: "Sharma Space",
      date: "Jan 5, 2025",
      excerpt: "Small spaces can be both functional and stylish. Learn professional techniques for making the most of every square foot...",
      cta: "Read More →"
    }
  ];

  return (
    <section 
      style={{
        backgroundColor: '#F8F9FA',
        padding: '80px 0'
      }}
    >
      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 
            style={{
              fontSize: '2rem',
              fontWeight: '600',
              lineHeight: '1.3',
              color: '#1C1C1C',
              marginBottom: '16px'
            }}
          >
            Latest from Our Blog
          </h2>
          <p 
            style={{
              fontSize: '1rem',
              lineHeight: '1.6',
              color: '#4A4A4A',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Stay updated with the latest trends, tips, and insights from our interior design experts.
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '24px'
          }}
        >
          {blogPosts.map((post, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                overflow: 'hidden'
              }}
            >
              <div 
                style={{
                  width: '100%',
                  height: '200px',
                  backgroundColor: '#EDEDED',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#4A4A4A'
                }}
              >
                Blog Image
              </div>
              <div style={{ padding: '24px' }}>
                <div 
                  style={{
                    fontSize: '0.875rem',
                    color: '#4A4A4A',
                    marginBottom: '12px'
                  }}
                >
                  {post.author} • {post.date}
                </div>
                <h3 
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#1C1C1C',
                    marginBottom: '12px',
                    textAlign: 'left'
                  }}
                >
                  {post.title}
                </h3>
                <p 
                  style={{
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: '#4A4A4A',
                    marginBottom: '16px'
                  }}
                >
                  {post.excerpt}
                </p>
                <button
                  style={{
                    backgroundColor: 'transparent',
                    color: '#E63946',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                >
                  {post.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
