// components/blog/BlogContent.jsx
import React from 'react';

const BlogContent = ({ content }) => {
	return (
		<div className='max-w-6xl mx-auto px-6 lg:px-8'>
			<div className='prose prose-lg max-w-none text-gray-700'>
				{' '}
				{/* Using Tailwind Typography plugin's prose classes */}
				{content.map((block, index) => (
					<React.Fragment key={index}>
						{block.type === 'paragraph' && (
							<p className='mb-6 leading-relaxed text-lg'>{block.text}</p>
						)}
						{block.type === 'heading' && (
							<h2 className='text-3xl font-bold text-gray-900 mt-10 mb-6'>
								{' '}
								{/* Increased margin-top for subheadings */}
								{block.text}
							</h2>
						)}
						{/* Add more block types (e.g., 'image', 'list') as needed */}
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default BlogContent;
