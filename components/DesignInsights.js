import React from 'react';
import Image from 'next/image';

const articles = [
  {
    tag: 'TRENDS',
    image: '/images/Desgin-Insights/home-interior-decor-trends-2024.jpg',
    title: '5 Trends in Modern Interior Design for 2024',
    summary: 'Discover the latest trends shaping modern interior spaces, from sustainable materials to...',
    author: { name: 'Nisha Sharma', avatar: '/images/author1.jpg' },
    date: 'May 15, 2024',
  },
  {
    tag: 'GUIDES',
    image: '/images/Desgin-Insights/How_To_Choose_The_Perfect_Colour_Palette_For_Your_Home.png',
    title: 'How to Choose the Right Color Palette for Your Home',
    summary: 'Expert tips on selecting colors that create harmony, reflect your personality, and enhance...',
    author: { name: 'Vikram Patel', avatar: '/images/author2.jpg' },
    date: 'April 28, 2024',
  },
  {
    tag: 'TIPS',
    image: '/images/Desgin-Insights/Maximizing-Small-Spaces-Tips-from-the-Experts.webp',
    title: 'Maximizing Small Spaces: Tips from the Experts',
    summary: 'Learn clever design solutions to make the most of compact living areas without sacrificing sty...',
    author: { name: 'Meera Kapoor', avatar: '/images/author3.jpg' },
    date: 'April 10, 2024',
  },
];

const DesignInsights = () => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-3">Design Insights</h2>
      <p className="text-gray-600 text-center mb-12 text-lg">
        Explore our latest articles for inspiration and expert advice on interior design.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {articles.map((article, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="relative">
              <Image
                src={article.image}
                alt={article.title}
                width={500}
                height={320}
                className="w-full h-56 object-cover"
              />
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded">
                {article.tag}
              </span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className={`text-xl font-bold mb-2 ${article.tag === 'TIPS' ? 'text-red-600' : 'text-gray-900'}`}>{article.title}</h3>
              <p className="text-gray-600 mb-4 flex-1">{article.summary}</p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    width={32}
                    height={32}
                    className="rounded-full w-8 h-8 object-cover"
                  />
                  <span className="text-gray-700 text-sm font-medium">{article.author.name}</span>
                </div>
                <span className="text-gray-400 text-sm">{article.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DesignInsights; 