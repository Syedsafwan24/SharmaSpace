// components/blog/RelatedArticlesSection.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation

const RelatedArticlesSection = ({ articles }) => {
	if (!articles || articles.length === 0) return null;

	return (
		<section className='bg-white py-16'>
			<div className='max-w-7xl mx-auto px-6 lg:px-8'>
				<h2 className='text-3xl font-bold text-gray-900 mb-8'>
					Related Articles
				</h2>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{articles.map((post, index) => (
						<Link href={`/blog/${post.slug}`} key={index}>
							{' '}
							{/* Link to individual blog post */}
							<div className='bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer h-full flex flex-col'>
								<div className='relative w-full h-48'>
									{' '}
									{/* Reduced height for related articles */}
									<Image
										src={post.image}
										alt={post.title}
										layout='fill'
										objectFit='cover'
										className='rounded-t-xl'
										unoptimized={true} // Keep this if using external URLs
									/>
									<span
										className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-white rounded
                    ${post.tag === 'TRENDS' ? 'bg-red-500' : ''}
                    ${post.tag === 'GUIDES' ? 'bg-orange-500' : ''}
                    ${post.tag === 'TIPS' ? 'bg-red-500' : ''}
                  `}
									>
										{post.tag}
									</span>
								</div>
								<div className='p-6 flex flex-col justify-between flex-grow'>
									<div>
										<h3 className='text-lg font-semibold text-gray-900 mb-3 text-left leading-snug'>
											{post.title}
										</h3>
										<p className='text-base leading-relaxed text-gray-600 mb-4 line-clamp-2'>
											{' '}
											{/* Limit excerpt lines */}
											{post.excerpt}
										</p>
									</div>
									<div className='flex items-center justify-between text-sm text-gray-600 mt-4'>
										{/* Author image/name is not present in related articles card in your image */}
										<span>{post.date}</span>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>

				{/* View All Articles Button */}
				<div className='text-center mt-12'>
					<Link href='/blog'>
						<button className='bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-md shadow-md transition duration-300 ease-in-out'>
							View All Articles
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default RelatedArticlesSection;
