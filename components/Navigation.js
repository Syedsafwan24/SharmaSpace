'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

const Navigation = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();

	const navItems = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Services', path: '/services' },
		{ name: 'Portfolio', path: '/portfolio' },
		{ name: 'Blog', path: '/blog' },
		{ name: 'Contact', path: '/contact' },
	];

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setIsScrolled(scrollTop > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 py-3 z-50 transition-all duration-500 ease-in-out ${
				isScrolled
					? 'bg-white backdrop-blur-md border-gray-200/30 shadow-sm'
					: 'bg-transparent'
			}`}
		>
			<div className='max-w-6xl mx-auto px-6 flex justify-between items-center'>
				{/* Logo */}
				<div className='flex items-center gap-2 transition-transform duration-300 hover:scale-105 cursor-pointer'>
					<img
						src='/images/icon/SharmaSpace-Logo.png'
						alt='SharmaSpace Logo'
						className='w-10 h-10 rounded'
					/>
					<span
						className={`text-xl font-bold ${
							isScrolled ? 'text-gray-900' : 'text-white'
						}`}
					>
						Sharma Space
					</span>
				</div>

				{/* Navigation Items */}
				<ul className='flex list-none m-0 p-0 gap-8'>
					{navItems.map((item) => (
						<li key={item.name}>
							<Link href={item.path}>
								<span
									className={`${
										isScrolled
											? pathname === item.path
												? 'text-red-600'
												: 'text-gray-900 hover:text-red-600'
											: pathname === item.path
											? 'text-red-600'
											: 'text-white hover:text-red-600'
									} no-underline font-medium transition-all duration-300 text-base relative hover:-translate-y-0.5 bg-transparent border-none cursor-pointer`}
								>
									{item.name}
								</span>
							</Link>
						</li>
					))}
				</ul>

				{/* Social Icons */}
				<div className='flex gap-4'>
					{[
						{ Icon: Instagram, href: '#' },
						{ Icon: Facebook, href: '#' },
						{ Icon: Youtube, href: '#' },
						{ Icon: Twitter, href: '#' },
					].map(({ Icon, href }, index) => (
						<Link key={index} href={href}>
							<Icon
								size={24}
								className={`transition-all duration-300 p-1 hover:scale-110 cursor-pointer ${
									isScrolled
										? 'text-gray-900 hover:text-red-600'
										: 'text-white hover:text-red-600'
								}`}
							/>
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
