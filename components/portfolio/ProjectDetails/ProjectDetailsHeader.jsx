'use client';

import Image from 'next/image';
import Link from 'next/link';

const ProjectDetailsHeader = ({ project }) => {
	return (
		<div className='bg-white border-b border-gray-200'>
			{/* Navigation */}
			<nav className='bg-white shadow-sm'>
				<div className='container mx-auto px-4'>
					<div className='flex items-center justify-between h-16'>
						<div className='flex items-center space-x-8'>
							<Link href='/' className='flex items-center space-x-2'>
								<div className='w-8 h-8 bg-red-600 rounded flex items-center justify-center'>
									<span className='text-white text-sm font-bold'>S</span>
								</div>
								<span className='text-xl font-bold text-gray-900'>
									Sharma Space
								</span>
							</Link>
						</div>
						<div className='hidden md:flex items-center space-x-8'>
							<Link href='/' className='text-gray-700 hover:text-red-600'>
								Home
							</Link>
							<Link href='/about' className='text-gray-700 hover:text-red-600'>
								About
							</Link>
							<Link
								href='/services'
								className='text-gray-700 hover:text-red-600'
							>
								Services
							</Link>
							<Link
								href='/portfolio'
								className='text-gray-700 hover:text-red-600'
							>
								Portfolio
							</Link>
							<Link href='/blog' className='text-gray-700 hover:text-red-600'>
								Blog
							</Link>
							<Link
								href='/contact'
								className='text-gray-700 hover:text-red-600'
							>
								Contact
							</Link>
						</div>
						<div className='flex items-center space-x-4'>
							{/* Social icons */}
							<div className='flex space-x-2'>
								<a href='#' className='text-gray-400 hover:text-gray-600'>
									<svg
										className='w-5 h-5'
										fill='currentColor'
										viewBox='0 0 20 20'
									>
										<path
											fillRule='evenodd'
											d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
											clipRule='evenodd'
										/>
									</svg>
								</a>
								<a href='#' className='text-gray-400 hover:text-gray-600'>
									<svg
										className='w-5 h-5'
										fill='currentColor'
										viewBox='0 0 20 20'
									>
										<path
											fillRule='evenodd'
											d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
											clipRule='evenodd'
										/>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>

			{/* Breadcrumb */}
			<div className='container mx-auto px-4 py-4'>
				<nav className='flex items-center space-x-2 text-sm text-gray-600'>
					<Link href='/portfolio' className='hover:text-red-600'>
						Portfolio
					</Link>
					<span>/</span>
					<span className='text-red-600'>{project.title}</span>
				</nav>
			</div>

			{/* Page Title */}
			<div className='container mx-auto px-4 pb-8'>
				<h1 className='text-4xl font-bold text-gray-900 mb-4'>
					{project.title}
				</h1>
				<div className='flex items-center space-x-4'>
					<span className='bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium'>
						{project.category}
					</span>
					<span className='text-gray-600'>{project.location}</span>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetailsHeader;
