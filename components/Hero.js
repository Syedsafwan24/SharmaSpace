'use client';

import React from 'react';
import Image from 'next/image';

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

			
		</section>
	);
};

export default Hero;
