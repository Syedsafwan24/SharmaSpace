// data/blogPosts.js

export const blogPosts = [
	// Export the array directly
	{
		slug: '5-trends-modern-interior-design-2024',
		title: '5 Trends in Modern Interior Design for 2024',
		date: 'May 15, 2024',
		tag: 'TRENDS',
		image: 'https://via.placeholder.com/600x400?text=Blog+Image+1', // Use 'image' for the main listing card
		mainImage: '/images/blog-hero-1.jpg', // Use 'mainImage' for the detailed post hero
		author: {
			name: 'Nisha Sharma',
			specialization: 'Interior Design Specialist',
			image: '/images/author-nisha.png',
		},
		excerpt:
			'Discover the latest trends shaping modern interior spaces, from sustainable materials to multi-functional furniture.',
		content: [
			{
				type: 'paragraph',
				text: 'Interior design is constantly evolving, influenced by cultural shifts, technological advancements, and changing lifestyles. Understanding these trends helps us create spaces that feel current yet timeless.',
			},
			{
				type: 'paragraph',
				text: 'While trends come and go, good design principles remain constant. Balance, proportion, and harmony are essential elements in creating spaces that not only look beautiful but also function well for the people who use them.',
			},
			{ type: 'heading', text: 'Exploring Design Trends' },
			{
				type: 'paragraph',
				text: "In 2024, we're seeing a focus on sustainability, versatility, and personal expression in home design. From minimalist aesthetics to maximalist statements, the key is to create spaces that resonate with individual needs and preferences. Biophilic design continues to gain traction, integrating natural elements to enhance well-being.",
			},
			{ type: 'heading', text: 'Practical Applications' },
			{
				type: 'paragraph',
				text: 'Applying design concepts to real-life situations requires creativity and problem-solving. Each space presents unique challenges and opportunities, from architectural constraints to lighting considerations. Consider how a multi-functional piece of furniture can transform a small living area, or how intelligent lighting can set different moods throughout the day.',
			},
			{ type: 'heading', text: 'Looking Forward' },
			{
				type: 'paragraph',
				text: 'As we look to the future of interior design, sustainability and wellness are increasingly important considerations. Creating environments that support both environmental health and human wellbeing will continue to shape our approach to design.',
			},
		],
		relatedTags: ['Interior Design', 'TRENDS', 'Home Styling', 'Design Tips'],
		socialShare: { facebook: '#', twitter: '#', linkedin: '#', email: '#' },
		relatedArticles: [
			{
				slug: 'how-to-choose-color-palette',
				title: 'How to Choose the Right Color Palette for Your Home',
				date: 'April 28, 2024',
				tag: 'GUIDES',
				image: 'https://via.placeholder.com/600x400?text=Blog+Image+2',
				excerpt:
					'Expert tips on selecting colors that create harmony, reflect your personality...',
			},
			{
				slug: 'maximizing-small-spaces',
				title: 'Maximizing Small Spaces: Tips from the Experts',
				date: 'April 10, 2024',
				tag: 'TIPS',
				image: 'https://via.placeholder.com/600x400?text=Blog+Image+3',
				excerpt:
					'Learn clever design solutions to make the most of compact living areas...',
			},
			{
				slug: 'the-art-of-lighting',
				title: 'The Art of Lighting: Creating Ambiance in Your Home',
				date: 'March 25, 2024',
				tag: 'GUIDES',
				image: 'https://via.placeholder.com/600x400?text=Blog+Image+4',
				excerpt:
					'Discover how proper lighting can transform spaces and set the perfect mood.',
			},
		],
	},
	{
		slug: 'how-to-choose-color-palette',
		title: 'How to Choose the Right Color Palette for Your Home',
		date: 'April 28, 2024',
		tag: 'GUIDES',
		image: 'https://via.placeholder.com/600x400?text=Blog+Image+2',
		mainImage: '/images/blog-hero-2.jpg',
		author: {
			name: 'Vikram Patel',
			specialization: 'Color Expert',
			image: '/images/author-vikram.png',
		},
		excerpt:
			"Expert tips on selecting colors that create harmony, reflect your personality, and enhance your home's atmosphere.",
		content: [
			{
				type: 'paragraph',
				text: 'Choosing the right color palette is crucial for setting the mood and atmosphere of your home. Colors evoke emotions and can significantly impact how a space feels.',
			},
			{
				type: 'paragraph',
				text: 'Understanding color theory and the psychology of colors can help you make informed decisions that resonate with your personal style and create a cohesive look throughout your home.',
			},
			{ type: 'heading', text: 'The Psychology of Color' },
			{
				type: 'paragraph',
				text: 'Warm colors like reds, oranges, and yellows can create a sense of warmth and energy, often used in living rooms and dining areas. Cool colors like blues, greens, and purples tend to be calming and are ideal for bedrooms and bathrooms.',
			},
			{ type: 'heading', text: 'Creating a Cohesive Palette' },
			{
				type: 'paragraph',
				text: 'Start with a dominant color, then choose complementary or analogous colors to build your palette. Consider the natural light in your room and how colors will appear at different times of day.',
			},
		],
		relatedTags: ['Color Palette', 'Home Decor', 'Design Guides', 'DIY'],
		socialShare: { facebook: '#', twitter: '#', linkedin: '#', email: '#' },
		relatedArticles: [
			{
				slug: '5-trends-modern-interior-design-2024',
				title: '5 Trends in Modern Interior Design for 2024',
				date: 'May 15, 2024',
				tag: 'TRENDS',
				image: 'https://via.placeholder.com/600x400?text=Blog+Image+1',
				excerpt: 'Discover the latest trends shaping modern interior spaces...',
			},
			{
				slug: 'maximizing-small-spaces',
				title: 'Maximizing Small Spaces: Tips from the Experts',
				date: 'April 10, 2024',
				tag: 'TIPS',
				image: 'https://via.placeholder.com/600x400?text=Blog+Image+3',
				excerpt:
					'Learn clever design solutions to make the most of compact living areas...',
			},
			{
				slug: 'the-art-of-lighting',
				title: 'The Art of Lighting: Creating Ambiance in Your Home',
				date: 'March 25, 2024',
				tag: 'GUIDES',
				image: 'https://via.placeholder.com/600x400?text=Blog+Image+4',
				excerpt:
					'Discover how proper lighting can transform spaces and set the perfect mood.',
			},
		],
	},
	{
		slug: 'maximizing-small-spaces',
		title: 'Maximizing Small Spaces: Tips from the Experts',
		date: 'April 10, 2024',
		tag: 'TIPS',
		image: 'https://via.placeholder.com/600x400?text=Blog+Image+3',
		mainImage: '/images/blog-hero-3.jpg',
		author: {
			name: 'Meera Kapoor',
			specialization: 'Small Space Solutions',
			image: '/images/author-meera.png',
		},
		excerpt:
			'Learn clever design solutions to make the most of compact living areas without sacrificing style or comfort.',
		content: [
			{
				type: 'paragraph',
				text: "Living in a small space doesn't mean compromising on style or functionality. With smart design choices, you can make any compact area feel spacious and inviting.",
			},
			{
				type: 'paragraph',
				text: 'The key is to think vertically, choose multi-functional furniture, and be strategic about storage. Every inch counts when space is at a premium.',
			},
			{ type: 'heading', text: 'Smart Storage Solutions' },
			{
				type: 'paragraph',
				text: 'Utilize wall-mounted shelves, under-bed storage, and built-in cabinetry. Vertical storage draws the eye upwards, making rooms feel taller. Hidden storage, like ottomans with storage, keeps clutter out of sight.',
			},
			{ type: 'heading', text: 'Multi-Functional Furniture' },
			{
				type: 'paragraph',
				text: 'Invest in pieces that serve more than one purpose, such as a sofa bed, a coffee table with storage, or a dining table that folds down. This maximizes utility without overcrowding the space.',
			},
		],
		relatedTags: [
			'Small Spaces',
			'Apartment Living',
			'Storage Ideas',
			'Design Tips',
		],
		socialShare: { facebook: '#', twitter: '#', linkedin: '#', email: '#' },
		relatedArticles: [
			{
				slug: '5-trends-modern-interior-design-2024',
				title: '5 Trends in Modern Interior Design for 2024',
				date: 'May 15, 2024',
				tag: 'TRENDS',
				image: 'https://via.placeholder.com/600x400?text=Blog+Image+1',
				excerpt: 'Discover the latest trends shaping modern interior spaces...',
			},
			{
				slug: 'how-to-choose-color-palette',
				title: 'How to Choose the Right Color Palette for Your Home',
				date: 'April 28, 2024',
				tag: 'GUIDES',
				image: 'https://via.placeholder.com/600x400?text=Blog+Image+2',
				excerpt:
					'Expert tips on selecting colors that create harmony, reflect your personality...',
			},
			{
				slug: 'the-art-of-lighting',
				title: 'The Art of Lighting: Creating Ambiance in Your Home',
				date: 'March 25, 2024',
				tag: 'GUIDES',
				image: 'https://via.placeholder.com/600x400?text=Blog+Image+4',
				excerpt:
					'Discover how proper lighting can transform spaces and set the perfect mood.',
			},
		],
	},
	{
		slug: 'the-art-of-lighting',
		title: 'The Art of Lighting: Creating Ambiance in Your Home',
		date: 'March 25, 2024',
		tag: 'GUIDES',
		image: 'https://via.placeholder.com/600x400?text=Blog+Image+4',
		mainImage: '/images/blog-hero-4.jpg',
		author: {
			name: 'Ria Mehta',
			specialization: 'Lighting Designer',
			image: '/images/author-ria.png',
		},
		excerpt:
			'Discover how proper lighting can transform spaces and set the perfect mood for every occasion.',
		content: [
			{
				type: 'paragraph',
				text: "Lighting is one of the most powerful elements in interior design, capable of transforming a room's mood, emphasizing features, and impacting overall functionality.",
			},
			{
				type: 'paragraph',
				text: "Beyond just illumination, strategic lighting design contributes significantly to the ambiance and perceived spaciousness of a living area. It's about layering different types of light to achieve depth and visual interest.",
			},
			{ type: 'heading', text: 'Types of Lighting' },
			{
				type: 'paragraph',
				text: 'There are three main types of lighting: ambient (general illumination), task (for specific activities like reading or cooking), and accent (to highlight objects or architectural features). A well-designed space incorporates all three.',
			},
			{ type: 'heading', text: 'Creating Mood and Depth' },
			{
				type: 'paragraph',
				text: 'Use dimmers to control brightness and mood. Warm light temperatures create a cozy atmosphere, while cooler temperatures are better for focus. Consider uplighting to make ceilings appear higher, and downlighting to define specific areas.',
			},
		],
		relatedTags: ['Lighting', 'Ambiance', 'Home Decor', 'Design Tips'],
		socialShare: { facebook: '#', twitter: '#', linkedin: '#', email: '#' },
		relatedArticles: [
			{
				slug: '5-trends-modern-interior-design-2024',
				title: '5 Trends in Modern Interior Design for 2024',
				date: 'May 15, 2024',
				tag: 'TRENDS',
				image: 'https://via.placeholder.com/600x400?text=Blog+Image+1',
				excerpt: 'Discover the latest trends shaping modern interior spaces...',
			},
			{
				slug: 'how-to-choose-color-palette',
				title: 'How to Choose the Right Color Palette for Your Home',
				date: 'April 28, 2024',
				tag: 'GUIDES',
				image: 'https://via.placeholder.com/600x400?text=Blog+Image+2',
				excerpt:
					'Expert tips on selecting colors that create harmony, reflect your personality...',
			},
			{
				slug: 'maximizing-small-spaces',
				title: 'Maximizing Small Spaces: Tips from the Experts',
				date: 'April 10, 2024',
				tag: 'TIPS',
				image: 'https://via.placeholder.com/600x400?text=Blog+Image+3',
				excerpt:
					'Learn clever design solutions to make the most of compact living areas...',
			},
		],
	},
];

export function getBlogPostBySlug(slug) {
	return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs() {
	return blogPosts.map((post) => ({ slug: post.slug }));
}
