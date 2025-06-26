'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const AboutSection = () => {
	const sectionRef = useRef(null);
	const statsRef = useRef(null);
	const imageRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('opacity-100', 'translate-y-0');
					}
				});
			},
			{ threshold: 0.1 }
		);

		const elements = [sectionRef.current, statsRef.current, imageRef.current];
		elements.forEach((el) => {
			if (el) {
				el.classList.add(
					'opacity-0',
					'translate-y-12',
					'transition-all',
					'duration-700',
					'ease-out'
				);
				observer.observe(el);
			}
		});

		return () => observer.disconnect();
	}, []);

	return (
		<div className='bg-gray-50'>
			{/* Main About Section */}
			<section
				id='about-section'
				className='bg-gray-50 py-20 lg:py-30 relative'
			>
				<div className='max-w-6xl mx-auto px-6'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
						{/* Left Content */}
						<div ref={sectionRef} className='space-y-8'>
							<h1 className='text-4xl lg:text-5xl font-bold leading-tight text-gray-900 tracking-tight'>
								About Sharma Space
							</h1>
							<div className='space-y-6'>
								<p className='text-lg leading-relaxed text-gray-600'>
									At Sharma Space, we believe in creating interiors that are not
									just beautiful but also functional. With over 10 years of
									experience, we've transformed 150+ spaces into dream homes and
									offices.
								</p>
								<p className='text-lg leading-relaxed text-gray-600'>
									Our design philosophy centers around understanding your unique
									needs and preferences, then translating them into spaces that
									reflect your personality while enhancing your everyday life.
								</p>
							</div>

							{/* Stats Grid */}
							<div ref={statsRef} className='grid grid-cols-2 gap-8 pt-4'>
								<div>
									<div className='text-4xl font-bold text-red-600 mb-2 leading-none'>
										150+
									</div>
									<div className='text-base text-gray-500'>
										Projects Completed
									</div>
								</div>
								<div>
									<div className='text-4xl font-bold text-red-600 mb-2 leading-none'>
										10+
									</div>
									<div className='text-base text-gray-500'>
										Years Experience
									</div>
								</div>
								<div>
									<div className='text-4xl font-bold text-red-600 mb-2 leading-none'>
										500+
									</div>
									<div className='text-base text-gray-500'>Happy Clients</div>
								</div>
								<div>
									<div className='text-4xl font-bold text-red-600 mb-2 leading-none'>
										2013
									</div>
									<div className='text-base text-gray-500'>
										Year Established
									</div>
								</div>
							</div>
						</div>

						{/* Right Image Section */}
						<div ref={imageRef} className='relative'>
							<div className='relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2 hover:scale-105'>
								<Image
									src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
									alt='Modern orange sofa with decorative pillows in contemporary living room - Sharma Space interior design showcase'
									width={800}
									height={600}
									className='w-full h-[500px] object-cover'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Floating Action Buttons */}
			<div className='fixed right-6 bottom-6 flex flex-col gap-3 z-40'>
				{/* WhatsApp */}
				<a
					href='https://wa.me/+919876543210'
					target='_blank'
					rel='noopener noreferrer'
					className='w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-green-500/30'
					aria-label='WhatsApp Sharma Space'
				>
					<span className='text-xl'>💬</span>
				</a>

				{/* Instagram */}
				<a
					href='https://instagram.com/sharmaspace'
					target='_blank'
					rel='noopener noreferrer'
					className='w-14 h-14 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-pink-500/30'
					aria-label='Instagram Sharma Space'
				>
					<span className='text-xl'>📸</span>
				</a>
			</div>
		</div>
	);
};

export default AboutSection;
