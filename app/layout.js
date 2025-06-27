import { Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryProvider } from '@/components/providers/query-provider';
import AuthSessionProvider from '@/components/AuthSessionProvider';
import { MessageCircle, Instagram } from 'lucide-react';
import Link from 'next/link';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'], // Optional: choose the weights you plan to use
	display: 'swap',
});

export const metadata = {
	title: {
		default:
			'Interior Designers in Bangalore | Free 3D Consultation - Sharma Space',
		template: '%s | Sharma Space',
	},
	description:
		"Transform your space with Bangalore's leading interior designers. Custom residential & commercial design solutions. Book free consultation today!",
	keywords: [
		'interior designers bangalore',
		'interior design',
		'home interior design',
		'office interior design',
		'modular kitchen',
		'wardrobe design',
		'residential interior',
		'commercial interior',
	],
	authors: [{ name: 'Sharma Space' }],
	creator: 'Sharma Space',
	publisher: 'Sharma Space',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL('https://sharmaspace.in'),
	alternates: {
		canonical: '/',
	},
	openGraph: {
		title:
			'Interior Designers in Bangalore | Free 3D Consultation - Sharma Space',
			description:
			"Transform your space with Bangalore's leading interior designers. Custom residential & commercial design solutions. Book free consultation today!",
		url: 'https://sharmaspace.in',
		siteName: 'Sharma Space',
		images: [
			{
				url: '/images/Hero-Background.webp',
				width: 1200,
				height: 630,
				alt: 'Sharma Space Interior Design',
			},
		],
		locale: 'en_IN',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title:
			'Interior Designers in Bangalore | Free 3D Consultation - Sharma Space',
			description:
			"Transform your space with Bangalore's leading interior designers. Custom residential & commercial design solutions. Book free consultation today!",
		images: ['/images/Hero-Background.webp'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'LocalBusiness',
							'@id': 'https://sharmaspace.in',
							name: 'Sharma Space',
							description:
								'Interior design studio specializing in functional, personalized spaces blending aesthetics with practicality.',
							address: {
								'@type': 'PostalAddress',
								streetAddress: '123 Design Avenue',
								addressLocality: 'Mumbai',
								addressRegion: 'Maharashtra',
								postalCode: '400001',
								addressCountry: 'IN',
							},
							telephone: '+91 98765 43210',
							email: 'info@sharmaspace.in',
							url: 'https://sharmaspace.in',
							openingHoursSpecification: {
								'@type': 'OpeningHoursSpecification',
								dayOfWeek: [
									'Monday',
									'Tuesday',
									'Wednesday',
									'Thursday',
									'Friday',
									'Saturday',
								],
								opens: '10:00',
								closes: '19:00',
							},
							areaServed: [
								'Bangalore',
								'Whitefield',
								'Indiranagar',
								'Koramangala',
								'HSR Layout',
							],
							geo: {
								'@type': 'GeoCoordinates',
								latitude: '12.9716',
								longitude: '77.5946',
							},
						}),
					}}
				/>
			</head>
			<body className={poppins.className}>
				<AuthSessionProvider>
					<QueryProvider>
						<TooltipProvider>
							{children}
							<Toaster />
							<Sonner />
						</TooltipProvider>
					</QueryProvider>
				</AuthSessionProvider>
				{/* Floating Social Icons */}
				<div className='fixed right-6 bottom-6 flex flex-col gap-3 z-50'>
					{/* WhatsApp */}
					<a
						href='https://wa.me/+919876543210'
						target='_blank'
						rel='noopener noreferrer'
						className='w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white no-underline shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-green-500/30'
					>
						<MessageCircle size={26} />
					</a>

					{/* Instagram */}
					<a
						href='https://instagram.com/sharmaspace'
						target='_blank'
						rel='noopener noreferrer'
						className='w-14 h-14 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center text-white no-underline shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-pink-500/30'
					>
						<Instagram size={26} />
					</a>
				</div>
			</body>
		</html>
	);
}