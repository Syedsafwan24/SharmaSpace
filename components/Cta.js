// components/HeroBanner.jsx
const Cta = ({
	title = 'Ready to Transform Your Space?',
	description = "Let's collaborate to create a space that perfectly balances aesthetics and functionality.",
	buttonText = 'Get a Free Consultation',
	backgroundColor = 'bg-[#E63946]',
	textColor = 'text-white',
	buttonBgColor = 'bg-white',
	buttonTextColor = 'text-[#E63946]',
	buttonLink = '#',
	maxWidth = 'max-w-2xl',
}) => {
	return (
		<section className={`${backgroundColor} py-12 px-4 sm:py-16`}>
			<div className={`${maxWidth} mx-auto text-center`}>
				<h1 className={`${textColor} text-2xl sm:text-3xl font-bold mb-4`}>
					{title}
				</h1>

				{/* Responsive description - single line only on large screens */}
				<p
					className={`${textColor} text-sm sm:text-base mb-6 mx-auto lg:whitespace-nowrap`}
				>
					{description}
				</p>

				<a
					href={buttonLink}
					className={`${buttonBgColor} ${buttonTextColor} px-6 py-2 text-sm sm:text-base font-medium rounded-full hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md inline-block`}
				>
					{buttonText}
				</a>
			</div>
		</section>
	);
};

export default Cta;
