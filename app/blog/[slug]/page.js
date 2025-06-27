// app/blog/[slug]/page.js
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogPostHero from '@/components/blog/BlogPostHero';
import AuthorBio from '@/components/blog/AuthorBio';
import BlogContent from '@/components/blog/BlogContent';
import RelatedTags from '@/components/blog/RelatedTags';
import ShareButtons from '@/components/blog/ShareButtons';
import RelatedArticlesSection from '@/components/blog/RelatedArticlesSection';
// import NewsletterSection from '@/components/NewsletterSection';

// Import data functions
import { getBlogPostBySlug, getAllBlogSlugs } from '@/data/blogPosts';

export async function generateStaticParams() {
	const slugs = getAllBlogSlugs();
	return slugs;
}

export async function generateMetadata({ params }) {
	const post = getBlogPostBySlug(params.slug);

	if (!post) {
		return {
			title: 'Blog Post Not Found',
			description: 'The requested blog post could not be found.',
		};
	}

	return {
		title: post.title + ' - Sharma Space Blog',
		description: post.excerpt,
	};
}

export default function BlogPostPage({ params }) {
	const { slug } = params;
	const post = getBlogPostBySlug(slug);

	if (!post) {
		return (
			<div className='bg-gray-50 min-h-screen flex flex-col justify-between'>
				<Navigation />
				<main className='flex-grow flex items-center justify-center p-8'>
					<h1 className='text-3xl font-bold text-gray-800'>
						Blog Post Not Found
					</h1>
				</main>
				<Footer />
			</div>
		);
	}

	return (
		<div className='bg-white'>
			<Navigation />
			<main className='pt-20'>
				{' '}
				{/* <--- ADDED or MODIFIED THIS LINE */}
				<BlogPostHero
					title={post.title}
					date={post.date}
					tag={post.tag}
					mainImage={post.mainImage}
				/>
				<AuthorBio author={post.author} />
				<BlogContent content={post.content} />
				<RelatedTags tags={post.relatedTags} />
				<ShareButtons shareLinks={post.socialShare} title={post.title} />
				<div className='py-12'></div>
				<RelatedArticlesSection articles={post.relatedArticles} />
				{/* <div className='mt-16'>
					<NewsletterSection />
				</div> */}
			</main>
			<Footer />
		</div>
	);
}
