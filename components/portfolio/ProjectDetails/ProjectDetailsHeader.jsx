'use client';

import Image from 'next/image';

const ProjectDetailsHeader = ({ project }) => {
	return (
		<div className='relative h-[60vh] min-h-[500px]'>
			<Image
				src={project.coverImage}
				alt={project.title}
				fill
				className='object-cover'
				priority
			/>
			<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
			<div className='container relative z-10 h-full flex flex-col justify-end pb-16 px-4'>
				<div className='max-w-4xl'>
					<span className='inline-block bg-[#E63946] text-white px-4 py-2 rounded-full text-sm mb-4'>
						{project.category}
					</span>
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
						{project.title}
					</h1>
					<p className='text-xl text-white'>{project.location}</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetailsHeader;
