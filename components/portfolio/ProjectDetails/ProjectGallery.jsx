'use client';

import { useState } from 'react';
import Image from 'next/image';

const ProjectGallery = ({ images }) => {
	const [activeTab, setActiveTab] = useState('walkthrough');

	return (
		<section className='mb-16'>
			{/* Tab Navigation */}
			<div className='flex space-x-1 mb-8'>
				<button
					onClick={() => setActiveTab('walkthrough')}
					className={`px-6 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
						activeTab === 'walkthrough'
							? 'bg-gray-100 text-gray-900'
							: 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
					}`}
				>
					Walkthrough Video
				</button>
				<button
					onClick={() => setActiveTab('renders')}
					className={`px-6 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
						activeTab === 'renders'
							? 'bg-gray-100 text-gray-900'
							: 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
					}`}
				>
					3D Renders
				</button>
			</div>

			{/* Tab Content */}
			{activeTab === 'walkthrough' && (
				<div className='relative aspect-video rounded-lg overflow-hidden bg-gray-900'>
					{/* Video placeholder with Rick Roll reference as shown in your image */}
					<div className='absolute inset-0 flex items-center justify-center'>
						<div className='text-center text-white'>
							<div className='w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-4 mx-auto'>
								<svg
									className='w-8 h-8'
									fill='currentColor'
									viewBox='0 0 20 20'
								>
									<path
										fillRule='evenodd'
										d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
										clipRule='evenodd'
									/>
								</svg>
							</div>
							<h3 className='text-xl font-semibold mb-2'>
								Project Walkthrough
							</h3>
							<p className='text-gray-300'>Click to play the video tour</p>
						</div>
					</div>

					{/* Overlay for the Rick Roll reference */}
					<div className='absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm'>
						Rick Astley - Never Gonna Give You Up (Official Music Video)
					</div>

					<div className='absolute bottom-4 right-4 flex space-x-2'>
						<button className='bg-black bg-opacity-50 text-white p-2 rounded'>
							<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
								<path
									fillRule='evenodd'
									d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
									clipRule='evenodd'
								/>
							</svg>
						</button>
						<button className='bg-black bg-opacity-50 text-white p-2 rounded'>
							<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
								<path
									fillRule='evenodd'
									d='M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 9.5H17a1 1 0 110 2h-5.586l4.293 4.293a1 1 0 010 1.414z'
									clipRule='evenodd'
								/>
							</svg>
						</button>
					</div>
				</div>
			)}

			{activeTab === 'renders' && (
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{images?.slice(0, 6).map((img, index) => (
						<div
							key={index}
							className='relative aspect-square rounded-lg overflow-hidden group cursor-pointer'
						>
							<Image
								src={img}
								alt={`3D Render ${index + 1}`}
								fill
								className='object-cover transition-transform duration-300 group-hover:scale-105'
							/>
							<div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center'>
								<div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
									<div className='w-12 h-12 bg-white rounded-full flex items-center justify-center'>
										<svg
											className='w-6 h-6 text-gray-900'
											fill='currentColor'
											viewBox='0 0 20 20'
										>
											<path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
											<path
												fillRule='evenodd'
												d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
												clipRule='evenodd'
											/>
										</svg>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</section>
	);
};

export default ProjectGallery;
