import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import the Link component from Next.js

const BlogSection = () => {
	const blogPosts = [
		{
			title: '5 Trends in Modern Interior Design for 2024',
			author: 'Nisha Sharma',
			date: 'May 15, 2024',
			excerpt:
				'Discover the latest trends shaping modern interior spaces, from sustainable materials to multi-functional furniture.',
			tag: 'TRENDS',
			image: 'https://via.placeholder.com/600x400?text=Blog+Image+1',
			authorImage: 'https://via.placeholder.com/24x24?text=N',
			slug: '5-trends-modern-interior-design-2024', // <-- IMPORTANT: Add the slug here
		},
		{
			title: 'How to Choose the Right Color Palette for Your Home',
			author: 'Vikram Patel',
			date: 'April 28, 2024',
			excerpt:
				"Expert tips on selecting colors that create harmony, reflect your personality, and enhance your home's atmosphere.",
			tag: 'GUIDES',
			image: 'https://via.placeholder.com/600x400?text=Blog+Image+2',
			authorImage: 'https://via.placeholder.com/24x24?text=V',
			slug: 'how-to-choose-color-palette', // <-- IMPORTANT: Add the slug here
		},
		{
			title: 'Maximizing Small Spaces: Tips from the Experts',
			author: 'Meera Kapoor',
			date: 'April 10, 2024',
			excerpt:
				'Learn clever design solutions to make the most of compact living areas without sacrificing style or comfort.',
			tag: 'TIPS',
			image: 'https://via.placeholder.com/600x400?text=Blog+Image+3',
			authorImage: 'https://via.placeholder.com/24x24?text=M',
			slug: 'maximizing-small-spaces', // <-- IMPORTANT: Add the slug here
		},
	];

	return (
		<section className='bg-white py-16'>
			<div className='max-w-7xl mx-auto px-6 lg:px-8'>
				<div className='text-center mb-12'>
					<h2 className='text-4xl font-bold leading-tight text-gray-900 mb-4'>
						Our Latest Articles
					</h2>
					<p className='text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto'>
						Explore our collection of articles on interior design tips, trends,
						and inspiration.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{blogPosts.map((post, index) => (
						// Wrap the entire card with Next.js Link component
						<Link href={`/blog/${post.slug}`} key={index}>
							{/* The div inside Link should not be a button or have onClick */}
							<div
								className='bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer h-full' // Add cursor-pointer and h-full for consistent height
							>
								<div className='relative w-full h-64'>
									<Image
										src={post.image}
										alt={post.title}
										layout='fill'
										objectFit='cover'
										className='rounded-t-xl'
										unoptimized={true}
									/>
									{/* Corrected dynamic tag background coloring */}
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
									{' '}
									{/* Added flex-grow for consistent height */}
									<div>
										<h3 className='text-xl font-semibold text-gray-900 mb-3 text-left leading-snug'>
											{post.title}
										</h3>
										<p className='text-base leading-relaxed text-gray-600 mb-4 line-clamp-3'>
											{' '}
											{/* Added line-clamp-3 for consistent excerpt height */}
											{post.excerpt}
										</p>
									</div>
									<div className='flex items-center justify-between mt-6 pt-4 border-t border-gray-100'>
										<div className='flex items-center'>
											{post.authorImage && (
												<Image
													src={post.authorImage}
													alt={post.author}
													width={24}
													height={24}
													className='rounded-full mr-3'
													unoptimized={true}
												/>
											)}
											<span className='text-sm font-medium text-gray-700'>
												{post.author}
											</span>
										</div>
										<span className='text-sm text-gray-500'>{post.date}</span>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default BlogSection;
