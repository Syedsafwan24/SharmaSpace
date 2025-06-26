import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Portfolio from '@/components/PortfolioSection';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/BlogSection';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<div>
			<Navigation />
			<main>
				<Hero />
				<AboutSection />
				<Services />
				<Process />
				<Portfolio />
				<Testimonials />
				<Blog />
			</main>
			<Footer />
		</div>
	);
}
