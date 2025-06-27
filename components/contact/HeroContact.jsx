// components/contact/HeroContact.jsx
import React from 'react';
import ContactHeroText from './ContactHeroText'; // The "Get in Touch" text
import ContactForm from './ContactForm'; // The form on the left
import ContactDetails from './ContactDetails'; // Office, Phone, Email, Working Hours
import GoogleMapEmbed from './GoogleMapEmbed'; // The Google Map
import SocialFollow from './SocialFollow'; // The social media icons (using react-icons)

const HeroContact = () => {
	// IMPORTANT: Replace this with your actual Google Maps embed URL.
	// Go to Google Maps, find your location, click 'Share', then 'Embed a map', and copy the 'src' value.
	// Example: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dXYZ!2dXYZ!3dXYZ!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sYour+Location+Name!5e0!3m2!1sen!2sin!4vYOUR_TIMESTAMP"
	const yourGoogleMapsEmbedUrl =
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082.909503417734!2d72.87118235!3d19.07598485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5dafd802268762a!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1719504899988!5m2!1sen!2sus'; // Placeholder URL

	return (
		<section className='bg-gray-50 py-16 lg:py-24'>
			<div className='max-w-7xl mx-auto px-6 lg:px-8'>
				{/* Top section within this content block: "Get in Touch" heading and description */}
				<ContactHeroText />

				{/* Main content grid: Contact Form on left, Details/Map/Social on right */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start'>
					{/* Left Column: Contact Form */}
					<ContactForm />

					{/* Right Column: Contact Information, Map, and Socials */}
					<div className='space-y-12'>
						<ContactDetails />
						<GoogleMapEmbed mapSrc={yourGoogleMapsEmbedUrl} />
						<SocialFollow />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroContact;
