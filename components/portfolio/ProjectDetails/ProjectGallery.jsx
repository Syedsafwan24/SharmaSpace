'use client';

import Image from 'next/image';

const ProjectGallery = ({ images }) => {
	return (
		<section className='mb-16'>
			<h2 className='text-3xl font-bold mb-8'>Gallery</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{images.map((img, index) => (
					<div
						key={index}
						className='relative aspect-square rounded-lg overflow-hidden'
					>
						<Image
							src={img}
							alt={`Project gallery ${index + 1}`}
							fill
							className='object-cover'
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default ProjectGallery;
