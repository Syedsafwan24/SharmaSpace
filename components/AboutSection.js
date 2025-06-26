'use client';
import React, { useEffect, useRef } from 'react';

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
		<div className='bg-white'>
			<section id='about-section' className='py-20 lg:py-28 relative'>
				<div className='max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative'>
					{/* Text Section */}
					<div ref={sectionRef} className='space-y-8'>
						<h2 className='text-4xl font-bold text-gray-900'>
							About Sharma Space
						</h2>
						<div className='space-y-6'>
							<p className='text-lg text-gray-600'>
								At Sharma Space, we believe in creating interiors that are not
								just beautiful but also functional. With over 10 years of
								experience, we've transformed 150+ spaces into dream homes and
								offices.
							</p>
							<p className='text-lg text-gray-600'>
								Our design philosophy centers around understanding your unique
								needs and preferences, then translating them into spaces that
								reflect your personality while enhancing your everyday life.
							</p>
						</div>

						{/* Stats */}
						<div
							ref={statsRef}
							className='grid grid-cols-2 gap-x-10 gap-y-6 pt-6'
						>
							{[
								{ value: '150+', label: 'Projects Completed' },
								{ value: '10+', label: 'Years Experience' },
								{ value: '500+', label: 'Happy Clients' },
							].map((stat, idx) => (
								<div key={idx}>
									<div className='text-4xl font-bold text-red-600'>
										{stat.value}
									</div>
									<div className='text-base text-gray-500'>{stat.label}</div>
								</div>
							))}
						</div>
					</div>

					{/* Image */}
					<div ref={imageRef} className='relative w-full h-[500px]'>
						<div className='w-full h-full overflow-hidden rounded-2xl shadow-xl'>
							<img
								src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
								alt='Modern orange sofa - Sharma Space'
								className='w-full h-full object-cover'
							/>
						</div>
					</div>

					{/* Year Established Card - Outside Image */}
					<div className='absolute left-1/2 lg:left-auto lg:right-[calc(50%-350px)] bottom-[3rem] transform -translate-x-1/2 lg:translate-x-0 bg-white shadow-xl rounded-xl px-6 py-4 text-center z-10'>
						<div className='text-3xl font-bold text-red-600'>2013</div>
						<div className='text-gray-600 text-sm'>Year Established</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutSection;
