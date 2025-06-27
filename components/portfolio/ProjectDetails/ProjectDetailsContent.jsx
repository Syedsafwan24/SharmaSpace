const ProjectDetailsContent = ({ project }) => {
	return (
		<section className='max-w-4xl mx-auto mb-16'>
			<h2 className='text-3xl font-bold mb-8'>Project Details</h2>
			<p className='text-lg mb-8 leading-relaxed'>{project.description}</p>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
				<div>
					<h3 className='text-xl font-semibold mb-4'>Client:</h3>
					<p>{project.client}</p>
				</div>
				<div>
					<h3 className='text-xl font-semibold mb-4'>Location:</h3>
					<p>{project.location}</p>
				</div>
				<div>
					<h3 className='text-xl font-semibold mb-4'>Area:</h3>
					<p>{project.area}</p>
				</div>
				<div>
					<h3 className='text-xl font-semibold mb-4'>Completed:</h3>
					<p>{project.completedDate}</p>
				</div>
			</div>
		</section>
	);
};

export default ProjectDetailsContent;
