'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Sidebar from '@/components/admin/Sidebar';
import TopNavbar from '@/components/admin/TopNavbar';
import BlogHeader from '@/components/admin/blog-posts/BlogHeader';
import BlogSearchFilter from '@/components/admin/blog-posts/BlogSearchFilter';
import BlogCard from '@/components/admin/blog-posts/BlogCard';
import EditBlogModal from '@/components/admin/blog-posts/EditBlogModal';
import EditBlogForm from '@/components/admin/blog-posts/EditBlogForm';
import { PlusCircle } from 'lucide-react';

const blogPostsData = [
	{
		id: 1,
		image: '/images/Desgin-Insights/10.webp',
		category: 'TRENDS',
		date: 'May 15, 2024',
		title: '5 Trends in Modern Interior Design for 2024',
		description:
			'Discover the latest trends shaping modern interior spaces, from sustainable materials to multi-functional furniture.',
		author: 'Nisha Sharma',
		authorImage:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
	},
	{
		id: 2,
		image: '/images/Desgin-Insights/home-interior-decor-trends-2024.jpg',
		category: 'GUIDES',
		date: 'April 28, 2024',
		title: 'How to Choose the Right Color Palette for Your Home',
		description:
			"Expert tips on selecting colors that create harmony, reflect your personality, and enhance your home's atmosphere.",
		author: 'Vikram Patel',
		authorImage:
			'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
	},
	{
		id: 3,
		image:
			'/images/Desgin-Insights/How_To_Choose_The_Perfect_Colour_Palette_For_Your_Home.png',
		category: 'TIPS',
		date: 'April 20, 2024',
		title: 'Maximizing Small Spaces: Tips from the Experts',
		description:
			'Learn clever design strategies to make the most of compact living areas without compromising on style or comfort.',
		author: 'Priya Singh',
		authorImage:
			'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
	},
	{
		id: 4,
		image: '/images/Desgin-Insights/istockphoto-1386479313-612x612.jpg',
		category: 'TRENDS',
		date: 'March 10, 2024',
		title: 'Sustainable Interior Design: Eco-Friendly Choices',
		description:
			'Explore environmentally conscious design options, from recycled materials to energy-efficient solutions for a greener home.',
		author: 'Rahul Sharma',
		authorImage:
			'https://images.unsplash.com/photo-1494790108755-2616b612b977?auto=format&fit=crop&w=100&q=80',
	},
];

export default function AdminBlogPostsPage() {
	const { data: session, status } = useSession();
	const router = useRouter();
	const [searchQuery, setSearchQuery] = useState('');
	const [activeFilter, setActiveFilter] = useState('all');
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [selectedBlogPost, setSelectedBlogPost] = useState(null);

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

	useEffect(() => {
		if (status === 'unauthenticated') {
			router.push('/login');
		}
	}, [status, router]);

	if (status === 'loading') {
		return (
			<div className='min-h-screen flex items-center justify-center bg-[#F8F9FA]'>
				Loading...
			</div>
		);
	}

	return (
		<div className='flex flex-col min-h-screen bg-[#F8F9FA]'>
			<TopNavbar />
			<div className='flex flex-1'>
				<div className='hidden lg:block fixed top-0 left-0 h-full w-64 z-20 bg-white border-r'>
					<Sidebar />
				</div>
				<div className='flex-1 p-4 lg:p-8 pt-20 lg:pt-8 pb-20 lg:pb-8 lg:ml-64'>
					<BlogHeader onAddBlogPostClick={handleAddBlogPost} />
					<BlogSearchFilter
						searchQuery={searchQuery}
						setSearchQuery={setSearchQuery}
						activeFilter={activeFilter}
						setActiveFilter={setActiveFilter}
					/>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
						{filteredBlogPosts.map((post) => (
							<BlogCard key={post.id} post={post} onEdit={handleEditBlogPost} />
						))}
					</div>
				</div>
			</div>
			<button
				onClick={handleAddBlogPost}
				className='fixed bottom-4 right-4 bg-[#E63946] hover:bg-[#D62828] text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition-colors duration-200 shadow-lg lg:hidden z-50'
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
