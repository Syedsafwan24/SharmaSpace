import AboutSection from '@/components/AboutSection';
import Cta from '@/components/Cta';
import DesignInsights from '@/components/DesignInsights';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import PartnerBrands from '@/components/PartnerBrands';
import Portfolio from '@/components/PortfolioSection';
import Process from '@/components/Process';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';

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
				<Cta />
			</main>
			<Footer />
		</div>
	);
}
