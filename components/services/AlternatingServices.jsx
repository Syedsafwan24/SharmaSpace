// components/services/AlternatingServices.jsx
import Image from 'next/image';

const AlternatingServices = () => {
	const services = [
		{
			title: 'Residential Design',
			description: [
				'From cozy apartments to sprawling villas, we design homes that feel uniquely yours. Our residential design service covers everything from space planning to furniture selection, creating interiors that reflect your personality and enhance your lifestyle.',
				"We consider how you live, what inspires you, and what functionalities you need, then translate these insights into thoughtfully designed spaces that you'll love coming home to.",
			],
			image: '/images/resident.jpg',
			alt: 'Beautiful residential interior design',
			reverse: false,
		},
		{
			title: 'Commercial Design',
			description: [
				"Creating workspaces that boost productivity and creativity is our specialty. We understand that your office environment affects your team's performance and your brand's perception.",
				'Our commercial design services include office layouts, corporate branding integration, ergonomic workstations, collaborative spaces, and reception areas that make lasting impressions on clients and visitors.',
			],
			image: '/images/commercial.jpg',
			alt: 'Modern commercial office design',
			reverse: true,
		},
		{
			title: 'Hospitality Design',
			description: [
				"Designing hotels and restaurants that leave a lasting impression on guests is an art we've mastered. Our hospitality designs focus on creating memorable experiences through thoughtful spatial planning, lighting, acoustics, and material selection.",
				'We help establish your unique identity in the competitive hospitality industry, creating environments that guests will remember and want to return to again and again.',
			],
			image: '/images/hospital.jpg',
			alt: 'Elegant hospitality space design',
			reverse: false,
		},
	];

	return (
		<section className='py-16 bg-white'>
			<div className='max-w-6xl mx-auto px-6 sm:px-8'>
				{services.map((service, index) => (
					<div
						key={index}
						className={`flex flex-col ${
							service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
						} items-start gap-8 mb-20 last:mb-0`}
					>
						{/* Text Column - Now includes the title */}
						<div className='w-full lg:w-[45%]'>
							<h2 className='text-3xl font-bold text-gray-900 mb-6'>
								{service.title}
							</h2>
							<div className='space-y-5 text-gray-600 text-base leading-relaxed'>
								{service.description.map((paragraph, i) => (
									<p key={i}>{paragraph}</p>
								))}
							</div>
						</div>

						{/* Image Column */}
						<div className='w-full lg:w-[55%] h-80 md:h-96 relative rounded-lg overflow-hidden'>
							<Image
								src={service.image}
								alt={service.alt}
								fill
								className='object-cover'
								sizes='(max-width: 1024px) 100vw, 55vw'
								priority={index === 0}
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default AlternatingServices;
