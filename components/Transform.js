export default function TransformSpaceHero() {
	return (
		<section className='bg-red-500 py-16 px-4 sm:py-20 lg:py-24'>
			<div className='max-w-4xl mx-auto text-center'>
				<h1 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8'>
					Ready to Transform Your Space?
				</h1>

				<p className='text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed'>
					Let's collaborate to create a space that perfectly balances aesthetics
					and functionality, tailored to your unique needs and preferences.
				</p>

				<button className='bg-white text-red-500 px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg font-semibold rounded-md hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform'>
					Get a Free Consultation
				</button>
			</div>
		</section>
	);
}
