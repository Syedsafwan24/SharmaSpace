'use client';

import { useState } from 'react';
import Image from 'next/image';

const ProjectDetailsContent = ({ project }) => {
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);

	return (
		<div className='grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16'>
			{/* Left Column - Images */}
			<div className='lg:col-span-2'>
				{/* Main Image */}
				<div className='relative aspect-[4/3] rounded-lg overflow-hidden mb-6'>
					<Image
						src={project.galleryImages[selectedImageIndex]}
						alt={project.title}
						fill
						className='object-cover'
					/>
				</div>

				{/* Thumbnail Gallery */}
				<div className='grid grid-cols-4 gap-4'>
					{project.galleryImages.map((image, index) => (
						<button
							key={index}
							onClick={() => setSelectedImageIndex(index)}
							className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
								selectedImageIndex === index
									? 'border-red-600 ring-2 ring-red-600 ring-opacity-50'
									: 'border-gray-200 hover:border-gray-300'
							}`}
						>
							<Image
								src={image}
								alt={`Gallery ${index + 1}`}
								fill
								className='object-cover'
							/>
						</button>
					))}
				</div>
			</div>

			{/* Right Column - Project Details */}
			<div className='lg:col-span-1'>
				<div className='bg-white p-8 rounded-lg shadow-sm border border-gray-200 sticky top-8'>
					<h2 className='text-2xl font-bold text-gray-900 mb-6'>
						Project Details
					</h2>

					<p className='text-gray-600 mb-8 leading-relaxed'>
						{project.description}
					</p>

					<div className='space-y-6 mb-8'>
						<div>
							<h3 className='text-sm font-semibold text-gray-900 mb-2'>
								Client:
							</h3>
							<p className='text-gray-600'>{project.client}</p>
						</div>

						<div>
							<h3 className='text-sm font-semibold text-gray-900 mb-2'>
								Location:
							</h3>
							<p className='text-gray-600'>{project.location}</p>
						</div>

						<div>
							<h3 className='text-sm font-semibold text-gray-900 mb-2'>
								Area:
							</h3>
							<p className='text-gray-600'>{project.area}</p>
						</div>

						<div>
							<h3 className='text-sm font-semibold text-gray-900 mb-2'>
								Completed:
							</h3>
							<p className='text-gray-600'>{project.completedDate}</p>
						</div>
					</div>

					<button className='w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200'>
						Request Similar Project
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetailsContent;
