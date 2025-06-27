import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/blog/${post.slug}`}>
        <Image
          src={post.image}
          alt={post.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">{post.date} • {post.tag}</p>
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-primary-600 transition duration-300">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-700 text-base mb-4">
          {post.excerpt}
        </p>
        <Link href={`/blog/${post.slug}`} className="text-primary-600 hover:text-primary-700 font-medium">
          Read More &rarr;
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
