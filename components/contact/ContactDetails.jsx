// components/contact/ContactDetails.jsx
import React from 'react';

const ContactDetails = () => {
	return (
		<div className='bg-white p-8 rounded-xl shadow-lg'>
			<h2 className='text-2xl font-bold text-gray-900 mb-6'>
				Contact Information
			</h2>
			<div className='space-y-6'>
				<div className='flex items-start'>
					{' '}
					{/* Use items-start for multiline text alignment like address */}
					<div className='flex-shrink-0 bg-red-100 text-red-600 rounded-full p-3 mr-4'>
						{/* Location Icon SVG */}
						<svg
							className='h-6 w-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243m10.606-10.606L13.414 4.1a1.998 1.998 0 00-2.828 0L6.343 8.343m10.606 10.606L13.414 15.5a1.998 1.998 0 01-2.828 0l-4.243-4.243m10.606 10.606L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243m10.606-10.606L13.414 4.1a1.998 1.998 0 00-2.828 0L6.343 8.343m10.606 10.606L13.414 15.5a1.998 1.998 0 01-2.828 0l-4.243-4.243M12 6v6m0 0v6'
							></path>
						</svg>
					</div>
					<div>
						<h3 className='text-lg font-medium text-gray-800'>Our Office</h3>
						<p className='text-gray-600'>
							123 Design Avenue, Mumbai, Maharashtra, India 400001
						</p>
					</div>
				</div>
				<div className='flex items-center'>
					<div className='flex-shrink-0 bg-red-100 text-red-600 rounded-full p-3 mr-4'>
						{/* Phone Icon SVG */}
						<svg
							className='h-6 w-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
							></path>
						</svg>
					</div>
					<div>
						<h3 className='text-lg font-medium text-gray-800'>Phone</h3>
						<p className='text-gray-600'>+91 98765 43210</p>
					</div>
				</div>
				<div className='flex items-center'>
					<div className='flex-shrink-0 bg-red-100 text-red-600 rounded-full p-3 mr-4'>
						{/* Email Icon SVG */}
						<svg
							className='h-6 w-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 10a2 2 0 01-2 2H7a2 2 0 01-2-2V8a2 2 0 012-2h10a2 2 0 012 2v10z'
							></path>
						</svg>
					</div>
					<div>
						<h3 className='text-lg font-medium text-gray-800'>Email</h3>
						<p className='text-gray-600'>info@sharmaspace.com</p>
					</div>
				</div>
				<div className='flex items-center'>
					<div className='flex-shrink-0 bg-red-100 text-red-600 rounded-full p-3 mr-4'>
						{/* Clock Icon SVG */}
						<svg
							className='h-6 w-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
							></path>
						</svg>
					</div>
					<div>
						<h3 className='text-lg font-medium text-gray-800'>Working Hours</h3>
						<p className='text-gray-600'>Mon-Sat: 10 AM - 7 PM</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactDetails;
