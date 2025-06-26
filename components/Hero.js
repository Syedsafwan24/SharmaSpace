'use client';

import React from 'react';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';

const Hero = () => {
	const scrollToNext = () => {
		const nextSection = document.querySelector('#about-section');
		if (nextSection) {
			nextSection.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section className='relative min-h-screen w-full flex items-center overflow-hidden'>
			{/* Background Image */}
			<div className='absolute inset-0 z-0'>
				<Image
					src='/images/Hero-Background.webp'
					alt='Modern interior design showcase'
					fill
					className='object-cover'
					priority
					quality={90}
				/>
			</div>

			{/* Dark Overlay */}
			<div className='absolute inset-0 bg-gray-900/60 z-10' />

			{/* Main Content */}
			<div className='relative z-20 max-w-6xl mx-auto px-6 w-full'>
				<div className='max-w-2xl opacity-0 animate-fade-in [animation-delay:0.5s] [animation-fill-mode:forwards]'>
					{/* Main Heading */}
					<h1 className='text-6xl md:text-6xl font-bold leading-[0.9] text-gray-50 mb-8 text-left tracking-tight'>
						Crafting
						<br />
						Spaces
						<br />
						That
						<br />
						Reflect
						<br />
						You
					</h1>

					{/* Subtitle */}
					<p className='text-lg leading-relaxed text-gray-50 mb-10 text-left opacity-90 max-w-lg'>
						Elevate your surroundings with custom interiors designed to enhance
						both aesthetics and functionality.
					</p>

					{/* CTA Button */}
					<button className='bg-red-700 text-gray-50 px-9 py-4 rounded border-none text-base font-semibold cursor-pointer transition-all duration-300 transform shadow-lg shadow-red-700/30 hover:bg-red-800 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-700/40'>
						Book a Free Consultation
					</button>
				</div>
			</div>

			{/* Scroll Down Indicator */}
			<div
				className='absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center cursor-pointer transition-all duration-300 opacity-0 animate-fade-in [animation-delay:2s] [animation-fill-mode:forwards] z-30 hover:-translate-y-2'
				onClick={scrollToNext}
			>
				<div className='text-gray-50 text-sm mb-3 opacity-80 font-medium tracking-wide'>
					Discover More
				</div>
				<div className='text-gray-50 text-2xl opacity-80 animate-bounce'>↓</div>
			</div>

			{/* Floating Social Icons */}
			<div className='fixed right-6 bottom-6 flex flex-col gap-3 z-50'>
				{/* WhatsApp */}
				<a
					href='https://wa.me/+919876543210'
					target='_blank'
					rel='noopener noreferrer'
					className='w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white no-underline shadow-lg transition-all duration-300 animate-float hover:scale-110 hover:shadow-xl hover:shadow-green-500/30'
				>
					<MessageCircle size={26} />
				</a>

				{/* Instagram */}
				<a
					href='https://instagram.com/sharmaspace'
					target='_blank'
					rel='noopener noreferrer'
					className='w-14 h-14 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center text-white no-underline shadow-lg transition-all duration-300 animate-float [animation-delay:1.5s] hover:scale-110 hover:shadow-xl hover:shadow-pink-500/30'
				>
					<svg width='26' height='26' viewBox='0 0 24 24' fill='currentColor'>
						<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
					</svg>
				</a>
			</div>
		</section>
	);
};

export default Hero;
