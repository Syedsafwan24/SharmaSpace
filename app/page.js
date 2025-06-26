import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Portfolio from '@/components/PortfolioSection';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/BlogSection';
import Footer from '@/components/Footer';
import TransformSpaceHero from '@/components/Transform';

export default function Home() {
	return (
		<div>
			<Navigation />
			<main>
				<Hero />
				<AboutSection />
				<Services />
				<Process />
				{/* Our Partner Brands Section */}
				<section className='bg-gray-100 py-16'>
					<div className='max-w-6xl mx-auto px-6 text-center'>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>
							Our Partner Brands
						</h2>
						<p className='text-gray-600 mb-10 text-lg'>
							We collaborate with premium brands to ensure quality and
							excellence in every project.
						</p>
						<div className='flex flex-wrap justify-center gap-x-12 gap-y-6'>
							{[
								'ASIAN PAINTS',
								'HAFELE',
								'JAQUAR',
								'GODREJ',
								'SAINT-GOBAIN',
								'KOHLER',
							].map((brand) => (
								<span
									key={brand}
									className='text-lg md:text-xl font-semibold text-gray-400 tracking-wider uppercase'
									style={{ letterSpacing: '0.08em' }}
								>
									{brand}
								</span>
							))}
						</div>
					</div>
				</section>
				<Portfolio />
				<Testimonials />
				<Blog />
				<TransformSpaceHero />
			</main>
			<Footer />
		</div>
	);
}
