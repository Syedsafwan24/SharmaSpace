// components/contact/ContactForm.jsx
'use client'; // This component needs client-side interactivity (useState, form handling)

import React, { useState } from 'react';

const ContactForm = () => {
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		phone: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// In a real application, you would send this formData to your backend API
		console.log('Form Data Submitted:', formData);
		alert('Thank you for your message! We will get back to you shortly.');
		// Optionally reset form after submission
		setFormData({
			fullName: '',
			email: '',
			phone: '',
			message: '',
		});
	};

	return (
		<div className='bg-white p-8 rounded-xl shadow-lg'>
			<h2 className='text-2xl font-bold text-gray-900 mb-6'>
				Send Us a Message
			</h2>
			<form onSubmit={handleSubmit} className='space-y-6'>
				<div>
					<label
						htmlFor='fullName'
						className='block text-sm font-medium text-gray-700 mb-2'
					>
						Full Name
					</label>
					<input
						type='text'
						id='fullName'
						name='fullName'
						value={formData.fullName}
						onChange={handleChange}
						placeholder='Your name'
						className='w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150 ease-in-out'
						required
					/>
				</div>
				<div>
					<label
						htmlFor='email'
						className='block text-sm font-medium text-gray-700 mb-2'
					>
						Email Address
					</label>
					<input
						type='email'
						id='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						placeholder='Your email'
						className='w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150 ease-in-out'
						required
					/>
				</div>
				<div>
					<label
						htmlFor='phone'
						className='block text-sm font-medium text-gray-700 mb-2'
					>
						Phone Number
					</label>
					<input
						type='tel'
						id='phone'
						name='phone'
						value={formData.phone}
						onChange={handleChange}
						placeholder='Your phone number'
						className='w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150 ease-in-out'
					/>
				</div>
				<div>
					<label
						htmlFor='message'
						className='block text-sm font-medium text-gray-700 mb-2'
					>
						Message
					</label>
					<textarea
						id='message'
						name='message'
						value={formData.message}
						onChange={handleChange}
						rows='5'
						placeholder='Tell us about your project'
						className='w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150 ease-in-out'
						required
					></textarea>
				</div>
				<button
					type='submit'
					className='w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
				>
					Send Message
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
