import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import OurJourney from '@/components/OurJourney';
import OurStory from '@/components/OurStory';
import OurMissionVision from '@/components/OurMissionVision';
import TeamSection from '@/components/TeamSection';
import Cta from '@/components/Cta';

export const metadata = {
	title: 'About Us - Interior Designers in Bangalore',
	description:
		"Learn about Sharma Space's 10+ years of interior design expertise in Bangalore. 150+ projects completed, 500+ happy clients across residential and commercial spaces.",
};

export default function About() {
	return (
		<div className='bg-gray-50'>
			<Navigation />
			<main>
				<OurStory />
				<OurJourney />
				<OurMissionVision />
				<TeamSection />
				<Cta
					title='Ready to Work with Us?'
					description='Contact our team today to discuss your project and how we can help bring your vision to life.'
					buttonText='Get in Touch'
					buttonLink='/contact'
				/>
			</main>
			<Footer />
		</div>
	);
}
