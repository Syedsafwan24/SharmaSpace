// components/blog/AuthorBio.jsx
import React from 'react';
import Image from 'next/image';

const AuthorBio = ({ author }) => {
	if (!author) return null; // Handle cases where author data might be missing

	return (
		<div className='max-w-6xl mx-auto px-6 lg:px-8 py-8 border-b border-gray-100 mb-8'>
			<div className='flex items-center'>
				{author.image && (
					<Image
						src={author.image}
						alt={author.name}
						width={48} // Larger size for author profile image
						height={48}
						className='rounded-full mr-4'
						unoptimized={true} // Keep this if using external URLs
					/>
				)}
				<div>
					<p className='text-lg font-semibold text-gray-800'>
						Written by {author.name}
					</p>
					<p className='text-sm text-gray-500'>{author.specialization}</p>
				</div>
			</div>
		</div>
	);
};

export default AuthorBio;
