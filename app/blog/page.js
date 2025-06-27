// app/blog/page.js
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogHero from '@/components/blog/BlogHero';
import BlogSection from '@/components/blog/BlogSection';
import NewsletterSection from '@/components/blog/NewsletterSection';

// Import the blogPosts array directly
import { blogPosts } from '@/data/blogPosts';

export const metadata = {
	title: 'Interior Design Blog - Tips & Trends',
	description:
		'Interior design blog with latest trends, tips, and insights from Bangalore experts. Home decor ideas, design guides, and industry updates.',
};

export default function Blog() {
	return (
		<div className='bg-gray-50'>
			<Navigation />
			<main>
				<BlogHero />
				{/* Pass the imported blogPosts array to BlogSection */}
				<BlogSection posts={blogPosts} />
				<NewsletterSection />
			</main>
			<Footer />
		</div>
	);
}
