import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/app/data';

const BlogSection = () => {
	// Get the first 3 blog posts
	const featuredPosts = blogPosts.slice(0, 3);

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
					{featuredPosts.map((post, index) => (
						<Link href={`/blog/${post.slug}`} key={post.id || index}>
							<div className='bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer h-full'>
								<div className='relative w-full h-64'>
									<Image
										src={post.image?.url || post.image}
										alt={post.title}
										layout='fill'
										objectFit='cover'
										className='rounded-t-xl'
										unoptimized={true}
									/>
									<span
										className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-white rounded
                      ${post.category === 'TRENDS' || post.tag === 'TRENDS' ? 'bg-red-500' : ''}
                      ${post.category === 'GUIDES' || post.tag === 'GUIDES' ? 'bg-orange-500' : ''}
                      ${post.category === 'TIPS' || post.tag === 'TIPS' ? 'bg-red-500' : ''}
                    `}
									>
										{post.category || post.tag}
									</span>
								</div>
								<div className='p-6 flex flex-col justify-between flex-grow'>
									<div>
										<h3 className='text-xl font-semibold text-gray-900 mb-3 text-left leading-snug'>
											{post.title}
										</h3>
										<p className='text-base leading-relaxed text-gray-600 mb-4 line-clamp-3'>
											{post.excerpt}
										</p>
									</div>
									<div className='flex items-center justify-between mt-6 pt-4 border-t border-gray-100'>
										<div className='flex items-center'>
											{post.author?.image && (
												<Image
													src={post.author.image}
													alt={post.author.name}
													width={24}
													height={24}
													className='rounded-full mr-3'
													unoptimized={true}
												/>
											)}
											<span className='text-sm font-medium text-gray-700'>
												{post.author?.name || 'Sharma Space Team'}
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