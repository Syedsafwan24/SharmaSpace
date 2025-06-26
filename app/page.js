import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import Services from '@/components/Services';
import Process from '@/components/Process';
import PartnerBrands from '@/components/PartnerBrands';
import DesignInsights from '@/components/DesignInsights';
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
				<PartnerBrands />
				<DesignInsights />
				<Portfolio />
				<Testimonials />
				<Blog />
			</main>
			<Footer />
		</div>
	);
}
