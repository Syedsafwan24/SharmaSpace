'use client';

import React, { useState, useEffect } from 'react';

const ShareButtons = ({ shareLinks, title }) => {
	const [currentUrl, setCurrentUrl] = useState('');

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setCurrentUrl(window.location.href);
		}
	}, []);

	const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
		currentUrl
	)}`;
	const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
		currentUrl
	)}&text=${encodeURIComponent(title)}`;
	const linkedinShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
		currentUrl
	)}&title=${encodeURIComponent(title)}`;
	const emailShareUrl = `mailto:?subject=${encodeURIComponent(
		title
	)}&body=${encodeURIComponent(currentUrl)}`;

	if (!shareLinks) return null;

	return (
		<div className='max-w-6xl mx-auto px-6 lg:px-8 mt-8 pb-8'>
			<h3 className='text-xl font-bold text-gray-900 mb-4'>Share This Post</h3>
			<div className='flex flex-wrap gap-3'>
				<a
					href={facebookShareUrl}
					target='_blank'
					rel='noopener noreferrer'
					className='flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition-colors duration-200'
				>
					Facebook
				</a>
				<a
					href={twitterShareUrl}
					target='_blank'
					rel='noopener noreferrer'
					className='flex items-center bg-blue-400 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-md transition-colors duration-200'
				>
					Twitter
				</a>
				<a
					href={linkedinShareUrl}
					target='_blank'
					rel='noopener noreferrer'
					className='flex items-center bg-blue-700 hover:bg-blue-800 text-white font-medium px-4 py-2 rounded-md transition-colors duration-200'
				>
					LinkedIn
				</a>
				<a
					href={emailShareUrl}
					className='flex items-center bg-gray-500 hover:bg-gray-600 text-white font-medium px-4 py-2 rounded-md transition-colors duration-200'
				>
					Email
				</a>
			</div>
		</div>
	);
};

export default ShareButtons;
