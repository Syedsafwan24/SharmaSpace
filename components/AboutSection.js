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
            entry.target.classList.add("opacity-100", "translate-y-0");
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
					'translate-y-4',
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
			<section
				id='about-section'
				className='py-[150px] lg:py-30 relative bg-gray-50' // <- mb-10 removed here
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
								{[
									{ stat: '150+', label: 'Projects Completed' },
									{ stat: '10+', label: 'Years Experience' },
									{ stat: '500+', label: 'Happy Clients' },
									{ stat: '2013', label: 'Year Established' },
								].map(({ stat, label }, i) => (
									<div key={i}>
										<div className='text-4xl font-bold text-red-600 mb-2 leading-none'>
											{stat}
										</div>
										<div className='text-base text-gray-500'>{label}</div>
									</div>
								))}
							</div>
						</div>

						{/* Right Image Section */}
						<div ref={imageRef} className='relative'>
							<div className='relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2 hover:scale-105'>
								<Image
									src='/images/AboutSection.webp'
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

		</div>
	);
};

export default AboutSection;
