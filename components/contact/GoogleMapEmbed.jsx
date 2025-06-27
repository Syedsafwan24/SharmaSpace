// components/contact/GoogleMapEmbed.jsx
import React from 'react';

const GoogleMapEmbed = ({ mapSrc }) => {
	// Default map source if none is provided
	const defaultMapSrc =
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082.910355153216!2d72.87224215!3d19.07598465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d6487d!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin';

	return (
		<div className='bg-white rounded-xl shadow-lg overflow-hidden h-72 lg:h-96 w-full'>
			<iframe
				src={mapSrc || defaultMapSrc} // Use provided mapSrc or default
				width='100%'
				height='100%'
				style={{ border: 0 }}
				allowFullScreen=''
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
				title='Sharma Space Office Location'
			></iframe>
		</div>
	);
};

export default GoogleMapEmbed;
