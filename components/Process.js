import React from 'react';

const Process = () => {
	return (
		<section className='bg-white py-20 px-4 relative overflow-hidden'>
			<div className='max-w-6xl mx-auto relative'>
				{/* Central Timeline Line */}
				<div
					className='absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-0.5 z-10'
					style={{ backgroundColor: '#E63946' }}
				></div>

				{/* Step 01 - Consultation */}
				<div className='flex items-center mb-32 relative'>
					{/* Left Side - Content Card with Number */}
					<div className='w-1/2 pr-16 flex justify-end'>
						<div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative w-80'>
							{/* Number Badge */}
							<div
								className='absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg'
								style={{ backgroundColor: '#E63946' }}
							>
								01
							</div>
							<h3
								className='text-2xl font-bold mb-4'
								style={{ color: '#1C1C1C' }}
							>
								Consultation
							</h3>
							<p className='text-gray-600 text-base'>
								We understand your vision and requirements.
							</p>
						</div>
					</div>

					{/* Center Icon Circle */}
					<div className='absolute left-1/2 transform -translate-x-1/2 z-20'>
						<div
							className='w-12 h-12 bg-white border-2 rounded-full flex items-center justify-center shadow-lg'
							style={{ borderColor: '#E63946' }}
						>
							<svg
								className='w-5 h-5'
								style={{ color: '#E63946' }}
								fill='currentColor'
								viewBox='0 0 24 24'
							>
								<path d='M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z' />
							</svg>
						</div>
					</div>

					{/* Right Side - Illustration */}
					<div className='w-1/2 pl-16'>
						<div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100 w-80 h-64 flex items-center justify-center'>
							<div className='relative'>
								{/* Bar Chart */}
								<div className='flex items-end space-x-3'>
									<div
										className='w-6 h-16 rounded-t'
										style={{ backgroundColor: '#7FB3D3' }}
									></div>
									<div
										className='w-6 h-24 rounded-t'
										style={{ backgroundColor: '#5F9ACF' }}
									></div>
									<div
										className='w-6 h-12 rounded-t'
										style={{ backgroundColor: '#7FB3D3' }}
									></div>
									<div
										className='w-6 h-20 rounded-t'
										style={{ backgroundColor: '#5F9ACF' }}
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Step 02 - Design */}
				<div className='flex items-center mb-32 relative'>
					{/* Left Side - Illustration */}
					<div className='w-1/2 pr-16 flex justify-end'>
						<div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100 w-80 h-64 flex items-center justify-center'>
							<div className='relative'>
								{/* Browser/Design Window */}
								<div className='bg-white rounded-lg border-2 border-gray-200 w-40 h-28'>
									<div
										className='h-6 rounded-t-lg flex items-center px-3'
										style={{ backgroundColor: '#EDEDED' }}
									>
										<div className='flex space-x-1.5'>
											<div
												className='w-2.5 h-2.5 rounded-full'
												style={{ backgroundColor: '#E63946' }}
											></div>
											<div className='w-2.5 h-2.5 bg-yellow-400 rounded-full'></div>
											<div className='w-2.5 h-2.5 bg-green-500 rounded-full'></div>
										</div>
									</div>
									<div className='p-3 space-y-2'>
										<div
											className='h-2 rounded'
											style={{ backgroundColor: '#7FB3D3' }}
										></div>
										<div
											className='h-2 w-3/4 rounded'
											style={{ backgroundColor: '#EDEDED' }}
										></div>
										<div
											className='h-2 w-1/2 rounded'
											style={{ backgroundColor: '#7FB3D3' }}
										></div>
									</div>
								</div>
								{/* Design Elements */}
								<div
									className='absolute -bottom-3 -left-3 w-5 h-5 rounded-full'
									style={{ backgroundColor: '#4CAF50' }}
								></div>
								<div
									className='absolute -top-3 -right-3 w-5 h-5 rounded-full'
									style={{ backgroundColor: '#FFC107' }}
								></div>
								<div
									className='absolute bottom-6 -right-6 w-12 h-0.5 rounded transform rotate-45'
									style={{ backgroundColor: '#EDEDED' }}
								></div>
							</div>
						</div>
					</div>

					{/* Center Icon Circle */}
					<div className='absolute left-1/2 transform -translate-x-1/2 z-20'>
						<div
							className='w-12 h-12 bg-white border-2 rounded-full flex items-center justify-center shadow-lg'
							style={{ borderColor: '#E63946' }}
						>
							<svg
								className='w-5 h-5'
								style={{ color: '#E63946' }}
								fill='currentColor'
								viewBox='0 0 24 24'
							>
								<path d='M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1zm0 2c.78 0 1.53.12 2.24.34-.46.44-.74 1.06-.74 1.76 0 1.38 1.12 2.5 2.5 2.5.7 0 1.32-.28 1.76-.74.22.71.34 1.46.34 2.24 0 3.86-3.14 7-7 7s-7-3.14-7-7 3.14-7 7-7z' />
							</svg>
						</div>
					</div>

					{/* Right Side - Content Card with Number */}
					<div className='w-1/2 pl-16'>
						<div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative w-80'>
							{/* Number Badge */}
							<div
								className='absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg'
								style={{ backgroundColor: '#E63946' }}
							>
								02
							</div>
							<h3
								className='text-2xl font-bold mb-4'
								style={{ color: '#1C1C1C' }}
							>
								Design
							</h3>
							<p className='text-gray-600 text-base'>
								Our team creates customized design concepts.
							</p>
						</div>
					</div>
				</div>

				{/* Step 03 - Execution */}
				<div className='flex items-center relative'>
					{/* Left Side - Content Card with Number */}
					<div className='w-1/2 pr-16 flex justify-end'>
						<div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative w-80'>
							{/* Number Badge */}
							<div
								className='absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg'
								style={{ backgroundColor: '#E63946' }}
							>
								03
							</div>
							<h3
								className='text-2xl font-bold mb-4'
								style={{ color: '#1C1C1C' }}
							>
								Execution
							</h3>
							<p className='text-gray-600 text-base'>
								We bring the design to life with precision.
							</p>
						</div>
					</div>

					{/* Center Icon Circle */}
					<div className='absolute left-1/2 transform -translate-x-1/2 z-20'>
						<div
							className='w-12 h-12 bg-white border-2 rounded-full flex items-center justify-center shadow-lg'
							style={{ borderColor: '#E63946' }}
						>
							<svg
								className='w-5 h-5'
								style={{ color: '#E63946' }}
								fill='currentColor'
								viewBox='0 0 24 24'
							>
								<path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z' />
							</svg>
						</div>
					</div>

					{/* Right Side - Illustration */}
					<div className='w-1/2 pl-16'>
						<div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100 w-80 h-64 flex items-center justify-center'>
							<div className='relative'>
								{/* Monitor/Computer */}
								<div className='bg-gray-100 rounded-lg p-4 border border-gray-200'>
									<div className='bg-white rounded w-32 h-20 p-3 border border-gray-200'>
										<div className='flex justify-between items-center mb-2'>
											<div
												className='w-2 h-2 rounded-full'
												style={{ backgroundColor: '#4CAF50' }}
											></div>
											<div
												className='w-2 h-2 rounded-full'
												style={{ backgroundColor: '#4CAF50' }}
											></div>
										</div>
										<div className='space-y-1.5'>
											<div
												className='h-2 w-full rounded'
												style={{ backgroundColor: '#5F9ACF' }}
											></div>
											<div
												className='h-2 w-3/4 rounded'
												style={{ backgroundColor: '#9C27B0' }}
											></div>
											<div
												className='h-2 w-1/2 rounded'
												style={{ backgroundColor: '#4CAF50' }}
											></div>
										</div>
									</div>
								</div>
								<div
									className='h-2 w-28 mx-auto rounded-b'
									style={{ backgroundColor: '#EDEDED' }}
								></div>
								<div
									className='h-1 w-32 mx-auto rounded'
									style={{ backgroundColor: '#EDEDED' }}
								></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
  return (
    <section className="bg-[ededed] py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Central Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-0.5 z-10" 
             style={{ backgroundColor: '#E63946' }}></div>
        
        {/* Step 01 - Consultation */}
        <div className="flex items-center mb-8 relative">
          {/* Left Side - Content Card with Number */}
          <div className="w-1/2 pr-16 flex justify-end">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative w-80">
              {/* Number Badge */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                   style={{ backgroundColor: '#E63946' }}>
                01
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>Consultation</h3>
              <p className="text-gray-600 text-base">We understand your vision and requirements.</p>
            </div>
          </div>
          
          {/* Center Icon Circle */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
            <div className="w-12 h-12 bg-white border-2 rounded-full flex items-center justify-center shadow-lg"
                 style={{ borderColor: '#E63946' }}>
              <svg className="w-5 h-5" style={{ color: '#E63946' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
              </svg>
            </div>
          </div>
          
          {/* Right Side - Illustration */}
          <div className="w-1/2 pl-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 w-80 h-64 flex items-center justify-center">
              <div className="relative">
                {/* Bar Chart */}
                <div className="flex items-end space-x-3">
                  <div className="w-6 h-16 rounded-t" style={{ backgroundColor: '#7FB3D3' }}></div>
                  <div className="w-6 h-24 rounded-t" style={{ backgroundColor: '#5F9ACF' }}></div>
                  <div className="w-6 h-12 rounded-t" style={{ backgroundColor: '#7FB3D3' }}></div>
                  <div className="w-6 h-20 rounded-t" style={{ backgroundColor: '#5F9ACF' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Step 02 - Design */}
        <div className="flex items-center mb-8 relative">
          {/* Left Side - Illustration */}
          <div className="w-1/2 pr-16 flex justify-end">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 w-80 h-64 flex items-center justify-center">
              <div className="relative">
                {/* Browser/Design Window */}
                <div className="bg-white rounded-lg border-2 border-gray-200 w-40 h-28">
                  <div className="h-6 rounded-t-lg flex items-center px-3" style={{ backgroundColor: '#EDEDED' }}>
                    <div className="flex space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#E63946' }}></div>
                      <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="h-2 rounded" style={{ backgroundColor: '#7FB3D3' }}></div>
                    <div className="h-2 w-3/4 rounded" style={{ backgroundColor: '#EDEDED' }}></div>
                    <div className="h-2 w-1/2 rounded" style={{ backgroundColor: '#7FB3D3' }}></div>
                  </div>
                </div>
                {/* Design Elements */}
                <div className="absolute -bottom-3 -left-3 w-5 h-5 rounded-full" style={{ backgroundColor: '#4CAF50' }}></div>
                <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full" style={{ backgroundColor: '#FFC107' }}></div>
                <div className="absolute bottom-6 -right-6 w-12 h-0.5 rounded transform rotate-45" style={{ backgroundColor: '#EDEDED' }}></div>
              </div>
            </div>
          </div>
          
          {/* Center Icon Circle */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
            <div className="w-12 h-12 bg-white border-2 rounded-full flex items-center justify-center shadow-lg"
                 style={{ borderColor: '#E63946' }}>
              <svg className="w-5 h-5" style={{ color: '#E63946' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1zm0 2c.78 0 1.53.12 2.24.34-.46.44-.74 1.06-.74 1.76 0 1.38 1.12 2.5 2.5 2.5.7 0 1.32-.28 1.76-.74.22.71.34 1.46.34 2.24 0 3.86-3.14 7-7 7s-7-3.14-7-7 3.14-7 7-7z"/>
              </svg>
            </div>
          </div>
          
          {/* Right Side - Content Card with Number */}
          <div className="w-1/2 pl-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative w-80">
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                   style={{ backgroundColor: '#E63946' }}>
                02
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>Design</h3>
              <p className="text-gray-600 text-base">Our team creates customized design concepts.</p>
            </div>
          </div>
        </div>
        
        {/* Step 03 - Execution */}
        <div className="flex items-center relative">
          {/* Left Side - Content Card with Number */}
          <div className="w-1/2 pr-16 flex justify-end">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative w-80">
              {/* Number Badge */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                   style={{ backgroundColor: '#E63946' }}>
                03
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>Execution</h3>
              <p className="text-gray-600 text-base">We bring the design to life with precision.</p>
            </div>
          </div>
          
          {/* Center Icon Circle */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
            <div className="w-12 h-12 bg-white border-2 rounded-full flex items-center justify-center shadow-lg"
                 style={{ borderColor: '#E63946' }}>
              <svg className="w-5 h-5" style={{ color: '#E63946' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
              </svg>
            </div>
          </div>
          
          {/* Right Side - Illustration */}
          <div className="w-1/2 pl-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 w-80 h-64 flex items-center justify-center">
              <div className="relative">
                {/* Monitor/Computer */}
                <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                  <div className="bg-white rounded w-32 h-20 p-3 border border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4CAF50' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4CAF50' }}></div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-2 w-full rounded" style={{ backgroundColor: '#5F9ACF' }}></div>
                      <div className="h-2 w-3/4 rounded" style={{ backgroundColor: '#9C27B0' }}></div>
                      <div className="h-2 w-1/2 rounded" style={{ backgroundColor: '#4CAF50' }}></div>
                    </div>
                  </div>
                </div>
                <div className="h-2 w-28 mx-auto rounded-b" style={{ backgroundColor: '#EDEDED' }}></div>
                <div className="h-1 w-32 mx-auto rounded" style={{ backgroundColor: '#EDEDED' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

export default Process ;
