// components/blog/BlogPostHero.jsx
import React from 'react';
import Image from 'next/image';

const BlogPostHero = ({ title, date, tag, mainImage }) => {
	return (
		<div className='relative mb-10'>
			<div className='max-w-6xl mx-auto px-6 lg:px-8 pt-8'>
				{' '}
				{/* Adjusted padding-top */}
				<p className='text-gray-600 text-sm mb-2'>
					{date} •{' '}
					<span
						className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded
            ${tag === 'TRENDS' ? 'bg-red-500' : ''}
            ${tag === 'GUIDES' ? 'bg-orange-500' : ''}
            ${tag === 'TIPS' ? 'bg-red-500' : ''}
          `}
					>
						{tag}
					</span>
				</p>
				<h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8'>
					{title}
				</h1>
			</div>

			<div className='max-w-7xl mx-auto px-6 lg:px-8'>
				<div className='relative w-full h-80 sm:h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg'>
					<Image
						src={mainImage}
						alt={title}
						layout='fill'
						objectFit='cover'
						className='rounded-xl'
						unoptimized={true} // Keep this if using external URLs or if you haven't configured domains in next.config.js
					/>
				</div>
			</div>
		</div>
	);
};

export default BlogPostHero;
