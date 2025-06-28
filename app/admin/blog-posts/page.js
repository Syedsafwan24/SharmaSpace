'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/admin/Sidebar";
import TopNavbar from "@/components/admin/TopNavbar";
import BlogHeader from "@/components/admin/blog-posts/BlogHeader";
import BlogSearchFilter from "@/components/admin/blog-posts/BlogSearchFilter";
import BlogCard from "@/components/admin/blog-posts/BlogCard";
import EditBlogModal from "@/components/admin/blog-posts/EditBlogModal";
import EditBlogForm from "@/components/admin/blog-posts/EditBlogForm";
import { PlusCircle } from 'lucide-react';
import { blogPosts } from '@/app/data';

export default function AdminBlogPostsPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      router.push('/login');
      return;
    }
    
    try {
      const userData = JSON.parse(currentUser);
      setUser(userData);
    } catch (error) {
      router.push('/login');
      return;
    }
    
    setLoading(false);
  }, [router]);

  // Convert blog posts to admin format
  const blogPostsData = blogPosts.map((post, index) => ({
    id: index + 1,
    image: post.image,
    category: post.tag || post.category,
    date: post.date,
    title: post.title,
    description: post.excerpt,
    author: post.author?.name || 'Sharma Space Team',
    authorImage: post.author?.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
  }));

  const filteredBlogPosts = blogPostsData.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      activeFilter === 'all' ||
      post.category.toLowerCase() === activeFilter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const handleEditBlogPost = (post) => {
    setSelectedBlogPost(post);
    setIsEditModalOpen(true);
  };

  const handleAddBlogPost = () => {
    setSelectedBlogPost(null);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedBlogPost(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E63946] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
      <TopNavbar user={user} />
      <div className="flex flex-1">
        <div className="hidden lg:block fixed top-0 left-0 h-full w-64 z-20 bg-white border-r">
          <Sidebar />
        </div>
        <div className="flex-1 p-4 lg:p-8 pt-20 lg:pt-8 pb-20 lg:pb-8 lg:ml-64">
          <BlogHeader onAddBlogPostClick={handleAddBlogPost} />
          <BlogSearchFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogPosts.map((post) => (
              <BlogCard key={post.id} post={post} onEdit={handleEditBlogPost} />
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={handleAddBlogPost}
        className="fixed bottom-4 right-4 bg-[#E63946] hover:bg-[#D62828] text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition-colors duration-200 shadow-lg lg:hidden z-50"
      >
        <PlusCircle size={24} />
        New Blog Post
      </button>

      <EditBlogModal isOpen={isEditModalOpen} onClose={handleCloseEditModal}>
        {selectedBlogPost ? (
          <EditBlogForm
            blogPost={selectedBlogPost}
            onClose={handleCloseEditModal}
          />
        ) : (
          <EditBlogForm onClose={handleCloseEditModal} />
        )}
      </EditBlogModal>
    </div>
  );
}