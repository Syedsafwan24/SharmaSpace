import { blogPosts, getBlogPostBySlug, getAllBlogSlugs } from "@/app/data/blogPosts";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return getAllBlogSlugs();
}

export default function BlogPostPage({ params }) {
  const { slug } = params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <div>Post not found</div>; // Or a custom 404 page
  }

  return (
    <div className="bg-gray-50">
      <Navigation />
      <main className="py-12 md:py-20">
        <article className="max-w-4xl mx-auto px-6">
          {/* Blog Post Header */}
          <header className="text-center mb-12">
            <p className="text-sm text-gray-500 mb-2">
              {post.date} • {post.tag}
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              {post.title}
            </h1>
            {post.author && (
              <div className="flex items-center justify-center space-x-3 text-gray-700">
                {post.author.image && (
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <span>
                  By <span className="font-semibold">{post.author.name}</span>
                  {post.author.specialization && (
                    <span className="text-gray-500">, {post.author.specialization}</span>
                  )}
                </span>
              </div>
            )}
          </header>

          {/* Main Image */}
          {post.mainImage && (
            <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={post.mainImage}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full object-cover"
              />
            </div>
          )}

          {/* Blog Post Content */}
          <div className="prose prose-lg mx-auto text-gray-800 leading-relaxed">
            {post.content.map((block, index) => (
              <div key={index} className="mb-6">
                {block.type === "paragraph" && <p>{block.text}</p>}
                {block.type === "heading" && (
                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {block.text}
                  </h2>
                )}
                {/* Add more block types as needed, e.g., image, list */}
              </div>
            ))}
          </div>

          {/* Social Share and Related Articles (Optional) */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            {post.socialShare && (
              <div className="flex justify-center space-x-4 mb-8">
                <p className="font-semibold text-gray-700">Share this post:</p>
                {/* Add social share icons/links here */}
                {/* Example: */}
                {/* <Link href={post.socialShare.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700"><FaFacebook size={24} /></Link> */}
              </div>
            )}

            {post.relatedArticles && post.relatedArticles.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Related Articles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {post.relatedArticles.map((article) => (
                    <div key={article.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <Link href={`/blog/${article.slug}`}>
                        <Image
                          src={article.image}
                          alt={article.title}
                          width={400}
                          height={250}
                          className="w-full h-40 object-cover"
                        />
                      </Link>
                      <div className="p-4">
                        <p className="text-sm text-gray-500 mb-1">{article.date}</p>
                        <Link href={`/blog/${article.slug}`}>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2 hover:text-primary-600 transition duration-300">
                            {article.title}
                          </h4>
                        </Link>
                        <p className="text-gray-700 text-sm">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}