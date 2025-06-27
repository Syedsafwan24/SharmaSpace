// components/blog/RelatedTags.jsx
import React from 'react';

const RelatedTags = ({ tags }) => {
	if (!tags || tags.length === 0) return null;

	return (
		<div className='max-w-6xl mx-auto px-6 lg:px-8 mt-12 pt-8 border-t border-gray-100'>
			<h3 className='text-xl font-bold text-gray-900 mb-4'>Related Tags</h3>
			<div className='flex flex-wrap gap-3'>
				{tags.map((tag, index) => (
					<span
						key={index}
						className='bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-full cursor-pointer hover:bg-gray-200 transition-colors duration-200'
					>
						{tag}
					</span>
				))}
			</div>
		</div>
	);
};

export default RelatedTags;
