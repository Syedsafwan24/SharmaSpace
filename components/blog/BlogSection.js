import React from 'react';

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
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold leading-tight text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-base leading-relaxed text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights from our interior design experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-600">
                Blog Image
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-600 mb-3">
                  {post.author} • {post.date}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-left">
                  {post.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <button className="bg-transparent text-red-600 border-none text-base font-medium cursor-pointer hover:text-red-700 transition-colors duration-300">
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