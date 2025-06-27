import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
	const quickLinks = [
		'Home',
		'About',
		'Services',
		'Portfolio',
		'Blog',
		'Contact',
	];
	const services = [
		'Residential Design',
		'Commercial Design',
		'Hospitality Design',
		'Space Planning',
		'Furniture Selection',
		'Renovation Consultation',
	];

	const contactInfo = [
		'123 Design Avenue, Mumbai, Maharashtra, India 400001',
		'+91 98765 43210',
		'info@sharmaspace.in',
		'Mon-Sat: 10 AM - 7 PM',
	];

	const legalLinks = ['Privacy Policy', 'Terms of Service', 'Sitemap'];

	return (
		<footer className='bg-gray-900 text-white py-12 md:py-20'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12'>
					{/* Company Info with Logo */}
					<div className='flex flex-col items-start'>
						<Link
							href='/'
							className='flex items-center gap-2 mb-4 transition-transform duration-300 hover:scale-105'
						>
							<img
								src='/images/icon/SharmaSpace-Logo.png'
								alt='SharmaSpace Logo'
								className='w-9 h-9 rounded'
							/>
							<span className='text-2xl font-bold text-white'>
								Sharma Space
							</span>
						</Link>
						<p className='text-sm leading-relaxed text-gray-300'>
							Interior design studio specializing in functional, personalized
							spaces blending aesthetics with practicality.
						</p>
						{/* Social Icons for Footer */}
						<div className='flex gap-4 mt-6'>
							{[
								{ Icon: Instagram, href: '#' },
								{ Icon: Facebook, href: '#' },
								{ Icon: Youtube, href: '#' },
								{ Icon: Twitter, href: '#' },
							].map(({ Icon, href }, index) => (
								<Link
									key={index}
									href={href}
									aria-label={`Sharma Space on ${Icon.name}`}
								>
									<Icon
										size={24}
										className='text-gray-400 hover:text-red-400 transition-colors duration-300'
									/>
								</Link>
							))}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className='text-xl font-semibold mb-5'>Quick Links</h4>
						<ul className='list-none p-0 m-0 space-y-3'>
							{quickLinks.map((link, index) => (
								<li key={index}>
									<Link
										href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
										className='text-gray-300 no-underline text-base transition-colors duration-300 hover:text-red-400'
									>
										{link}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Services - Now clickable links */}
					<div>
						<h4 className='text-xl font-semibold mb-5'>Services</h4>
						<ul className='list-none p-0 m-0 space-y-3'>
							{services.map((service, index) => (
								<li key={index}>
									{/* Changed span to Link */}
									<Link
										href='/services' // All services links go to the main services page
										className='text-gray-300 no-underline text-base transition-colors duration-300 hover:text-red-400'
									>
										{service}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className='text-xl font-semibold mb-5'>Contact Us</h4>
						<ul className='list-none p-0 m-0 space-y-3'>
							{contactInfo.map((info, index) => (
								<li key={index}>
									<span className='text-gray-300 text-base leading-relaxed'>
										{info}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom Footer */}
				<div className='border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4'>
					<p className='text-gray-300 text-sm m-0'>
						© {new Date().getFullYear()} Sharma Space. All rights reserved.
					</p>

					<div className='flex flex-wrap justify-center md:justify-start gap-4'>
						{legalLinks.map((link, index) => (
							<a
								key={index}
								href='#'
								className='text-gray-300 no-underline text-sm hover:text-white transition-colors duration-300'
							>
								{link}
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
