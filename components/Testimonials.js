'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
	const testimonials = [
		{
			text: `Sharma Space transformed our home into a dream! Their attention to detail is unmatched. Every corner now reflects our personality while maintaining functionality.`,
			name: 'Priya S.',
			location: 'Mumbai',
			image:
				'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
		},
		{
			text: `They created a workspace that inspires creativity. The team understood our needs perfectly.`,
			name: 'Rahul M.',
			location: 'Delhi',
			image:
				'https://images.unsplash.com/photo-1494790108755-2616b612b977?auto=format&fit=crop&w=100&q=80',
		},
		{
			text: `Delivered within budget, exceeded expectations with final result.`,
			name: 'Ananya K.',
			location: 'Bangalore',
			image:
				'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
		},
		{
			text: `Exceptional service from start to finish. Highly recommend Sharma Space.`,
			name: 'Vikram P.',
			location: 'Hyderabad',
			image:
				'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
		},
		{
			text: `Our guests love the new look. Elegant, modern, and inviting.`,
			name: 'Deepika R.',
			location: 'Chennai',
			image:
				'https://images.unsplash.com/photo-1571508601792-53c25e4fe732?auto=format&fit=crop&w=800&q=80',
		},
	];

	const isCarousel = testimonials.length > 3;

	const containerRef = useRef(null);
	const [maxHeight, setMaxHeight] = useState(0);

	useEffect(() => {
		if (containerRef.current) {
			const cardEls =
				containerRef.current.querySelectorAll('.testimonial-card');
			let max = 0;
			cardEls.forEach((el) => {
				max = Math.max(max, el.offsetHeight);
			});
			setMaxHeight(max);
		}
	}, []);

	const [sliderRef, instanceRef] = useKeenSlider({
		loop: true,
		slides: {
			perView: 3,
			spacing: 24,
		},
		breakpoints: {
			'(max-width: 1024px)': {
				slides: {
					perView: 2,
					spacing: 20,
				},
			},
			'(max-width: 640px)': {
				slides: {
					perView: 1,
					spacing: 16,
				},
			},
		},
	});

	// Autoplay
	useEffect(() => {
		let interval;
		if (instanceRef.current && isCarousel) {
			interval = setInterval(() => {
				instanceRef.current.next();
			}, 4000);
		}
		return () => clearInterval(interval);
	}, [instanceRef, isCarousel]);

	return (
		<section className='bg-white py-20'>
			<div className='max-w-6xl mx-auto px-6'>
				<div className='text-center mb-12'>
					<h2 className='text-4xl font-bold text-gray-900 mb-2'>
						Client Testimonials
					</h2>
					<p className='text-lg text-gray-600'>
						Hear what our clients have to say about working with us.
					</p>
				</div>

				{isCarousel ? (
					<div className='relative' ref={containerRef}>
						<div ref={sliderRef} className='keen-slider py-8'>
							{testimonials.map((testimonial, index) => (
								<div
									key={index}
									className='keen-slider__slide testimonial-card bg-white rounded-xl shadow-md p-8 flex flex-col justify-between'
									style={{ minHeight: `${maxHeight}px` }}
								>
									<div className='absolute top-6 right-6 flex'>
										{[...Array(5)].map((_, i) => (
											<span key={i} className='text-yellow-400 text-lg ml-0.5'>
												★
											</span>
										))}
									</div>
									<FaQuoteLeft className='text-red-100 text-3xl mb-4' />
									<p className='text-left italic text-gray-700 leading-relaxed mb-6'>
										“{testimonial.text}”
									</p>
									<div className='flex items-center gap-4 mt-auto'>
										<div className='w-12 h-12 rounded-full overflow-hidden'>
											<Image
												src={testimonial.image}
												alt={testimonial.name}
												width={48}
												height={48}
												className='w-full h-full object-cover'
											/>
										</div>
										<div>
											<div className='font-semibold text-gray-900'>
												{testimonial.name}
											</div>
											<div className='text-sm text-gray-500'>
												{testimonial.location}
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className='flex justify-center gap-4 mt-8'>
							<button
								onClick={() => instanceRef.current?.prev()}
								className='bg-[#E63946] hover:bg-[#c82e3b] text-white p-2 rounded-full shadow transition'
							>
								<ChevronLeft size={24} />
							</button>
							<button
								onClick={() => instanceRef.current?.next()}
								className='bg-[#E63946] hover:bg-[#c82e3b] text-white p-2 rounded-full shadow transition'
							>
								<ChevronRight size={24} />
							</button>
						</div>
					</div>
				) : (
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
						{testimonials.map((testimonial, index) => (
							<div
								key={index}
								className='testimonial-card bg-white rounded-xl shadow-md p-8 flex flex-col justify-between'
								style={{ minHeight: `${maxHeight}px` }}
							>
								<div className='absolute top-6 right-6 flex'>
									{[...Array(5)].map((_, i) => (
										<span key={i} className='text-yellow-400 text-lg ml-0.5'>
											★
										</span>
									))}
								</div>
								<FaQuoteLeft className='text-red-100 text-3xl mb-4' />
								<p className='text-left italic text-gray-700 leading-relaxed mb-6'>
									“{testimonial.text}”
								</p>
								<div className='flex items-center gap-4 mt-auto'>
									<div className='w-12 h-12 rounded-full overflow-hidden'>
										<Image
											src={testimonial.image}
											alt={testimonial.name}
											width={48}
											height={48}
											className='w-full h-full object-cover'
										/>
									</div>
									<div>
										<div className='font-semibold text-gray-900'>
											{testimonial.name}
										</div>
										<div className='text-sm text-gray-500'>
											{testimonial.location}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default Testimonials;
