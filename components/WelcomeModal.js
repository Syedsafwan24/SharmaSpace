'use client'; // This component will use client-side hooks like useState and useEffect

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Phone, Mail } from 'lucide-react'; // X for close, Phone for call, Mail for email

const WelcomeModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		// Check localStorage to see if the modal has been dismissed permanently
		const hasDismissed = localStorage.getItem('sharmaspace_modal_dismissed');
		// Check if the modal has been shown in this session (simple session check)
		const hasShownThisSession = sessionStorage.getItem(
			'sharmaspace_modal_shown_session'
		);

		// Show the modal only if it hasn't been dismissed permanently and not shown this session
		if (!hasDismissed && !hasShownThisSession) {
			const timer = setTimeout(() => {
				setIsOpen(true);
				sessionStorage.setItem('sharmaspace_modal_shown_session', 'true'); // Mark as shown for this session
			}, 500); // Reduced delay to 500ms (0.5 seconds) - adjust as needed
			return () => clearTimeout(timer); // Cleanup timeout if component unmounts
		}
	}, []); // Run only once on component mount

	// Effect to manage body scrolling when modal opens/closes
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'; // Lock scrolling
		} else {
			document.body.style.overflow = ''; // Unlock scrolling
		}

		// Cleanup function: This runs when the component unmounts OR when isOpen changes
		// and before the effect runs again. It ensures scrolling is re-enabled if the
		// modal is somehow dismissed or the component is removed from the DOM.
		return () => {
			document.body.style.overflow = ''; // Always unlock scrolling on unmount
		};
	}, [isOpen]); // Re-run this effect whenever isOpen state changes

	const handleClose = () => {
		setIsOpen(false);
	};

	const handleMaybeLater = () => {
		setIsOpen(false);
		// No action needed for sessionStorage if you want it to reappear next session
	};

	const handleDontShowAgain = () => {
		setIsOpen(false);
		localStorage.setItem('sharmaspace_modal_dismissed', 'true'); // Permanently dismiss
	};

	if (!isOpen) return null; // Don't render anything if not open

	return (
		<div className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999] p-4 animate-simple-fade-in'>
			<div className='bg-white rounded-lg shadow-2xl max-w-lg w-full mx-auto relative transform scale-100 opacity-100 transition-all duration-300 ease-out animate-modal-slide-up'>
				{/* Close Button */}
				<button
					onClick={handleClose}
					className='absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition-colors duration-200'
					aria-label='Close Welcome Message'
				>
					<X size={24} />
				</button>

				{/* Header */}
				<div className='bg-red-600 text-white p-6 rounded-t-lg text-center'>
					<h2 className='text-3xl font-bold mb-2'>Welcome to Sharma Space!</h2>
					<p className='text-lg'>
						Transform Your Space Into Something Extraordinary
					</p>
				</div>

				{/* Body */}
				<div className='p-6 text-center text-gray-800'>
					<p className='text-base md:text-lg mb-6'>
						Ready to create your dream interior? Get a free consultation with
						our expert designers.
					</p>
					<div className='mb-6'>
						<Link
							href='#' // Replace with your actual consultation/contact page link or direct call/email action
							onClick={handleClose} // Close modal on click
							className='inline-flex items-center justify-center w-full bg-red-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-red-700 transition-colors duration-300 text-lg shadow-md'
						>
							<Phone size={20} className='mr-2' /> Get Free Consultation
						</Link>
					</div>

					<div className='flex justify-center gap-4 text-sm md:text-base mb-6'>
						<button
							onClick={handleMaybeLater}
							className='text-gray-600 hover:underline transition-colors duration-200'
						>
							Maybe Later
						</button>
						<button
							onClick={handleDontShowAgain}
							className='text-gray-600 hover:underline transition-colors duration-200'
						>
							Don't Show Again
						</button>
					</div>
				</div>

				{/* Footer Contact Info */}
				<div className='border-t border-gray-200 p-4 flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-700 text-sm'>
					<a
						href='tel:+919876543210'
						className='flex items-center hover:text-red-600 transition-colors duration-200'
					>
						<Phone size={16} className='mr-2' /> +91 98765 43210
					</a>
					<a
						href='mailto:info@sharmaspace.com'
						className='flex items-center hover:text-red-600 transition-colors duration-200'
					>
						<Mail size={16} className='mr-2' /> info@sharmaspace.com
					</a>
				</div>
			</div>
		</div>
	);
};

export default WelcomeModal;
