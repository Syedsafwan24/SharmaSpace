import Link from 'next/link';

const CtaSection = () => {
	return (
		<section className='text-center py-8 border-t border-gray-200'>
			<Link
				href='/contact'
				className='inline-block bg-[#E63946] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#d62c3a] transition-colors'
			>
				Request Similar Project
			</Link>
		</section>
	);
};

export default CtaSection;
