// components/contact/SocialFollow.jsx
import React from 'react';
// Import specific icons from react-icons.
// FaInstagram, FaFacebookF, FaYoutube, FaTwitter are common choices.
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';

const SocialFollow = () => {
	return (
		<div className='bg-white p-8 rounded-xl shadow-lg text-center'>
			<h2 className='text-2xl font-bold text-gray-900 mb-6'>Follow Us</h2>
			<div className='flex justify-center space-x-6'>
				{/* Instagram */}
				<a
					href='https://www.instagram.com/'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Follow us on Instagram'
					className='block w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-200'
				>
					<FaInstagram className='h-6 w-6 text-white' />
				</a>

				{/* Facebook */}
				<a
					href='https://www.facebook.com/'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Follow us on Facebook'
					className='block w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-200'
				>
					<FaFacebookF className='h-6 w-6 text-white' />
				</a>

				{/* YouTube */}
				<a
					href='https://www.youtube.com/'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Follow us on YouTube'
					className='block w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-200'
				>
					<FaYoutube className='h-6 w-6 text-white' />
				</a>

				{/* Twitter */}
				<a
					href='https://twitter.com/'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Follow us on Twitter'
					className='block w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-200'
				>
					<FaTwitter className='h-6 w-6 text-white' />
				</a>
			</div>
		</div>
	);
};

export default SocialFollow;
