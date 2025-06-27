import React from 'react';
import Image from 'next/image';
import { User } from 'lucide-react';

const BlogCard = ({ post, onEdit }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-[#EDEDED] text-[#E63946] text-xs font-medium px-2.5 py-0.5 rounded-full">
            {post.category}
          </span>
          <span className="text-gray-500 text-xs">{post.date}</span>
        </div>
        <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2 line-clamp-2">{post.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.description}</p>
        <div className="flex items-center gap-2 text-gray-700 text-sm mb-4">
          {post.authorImage ? (
            <Image
              src={post.authorImage}
              alt={post.author}
              width={24}
              height={24}
              className="rounded-full object-cover"
            />
          ) : (
            <User size={20} className="text-gray-500" />
          )}
          <span>{post.author}</span>
        </div>
        <div className="flex space-x-4 mt-auto">
          <button onClick={() => onEdit(post)} className="text-[#E63946] hover:text-[#D62828] font-medium text-sm">Edit</button>
          <button className="text-gray-500 hover:text-[#1C1C1C] font-medium text-sm">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
