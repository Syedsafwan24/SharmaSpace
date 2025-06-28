import React from 'react';
import { companyStats, companyInfo } from '@/app/data';

const OurJourney = () => {
  // Get stats from centralized data
  const projectsCompleted = companyStats.find(s => s.id === 'projects-completed')?.displayValue || '150+';
  const yearsExperience = companyStats.find(s => s.id === 'years-experience')?.displayValue || '10+';
  const happyClients = companyStats.find(s => s.id === 'happy-clients')?.displayValue || '500+';

  return (
    <div className="bg-[#F8F9FA] py-20 w-full min-h-[600px]">
      <div className="max-w-[1400px] mx-auto px-20 flex items-center gap-16">
        {/* Text Content */}
        <div className="flex-1 max-w-[600px]">
          <h2 className="text-5xl font-bold text-[#1C1C1C] mb-8 leading-tight tracking-tight">
            Our Journey
          </h2>
          
          <p className="text-lg text-[#666666] leading-relaxed mb-6 font-normal">
            Founded in {companyInfo?.founded || '2013'}, Sharma Space has been at the forefront of innovative 
            interior design. Our mission is to create spaces that inspire and delight 
            while reflecting the unique personality of each client.
          </p>
          
          <p className="text-lg text-[#666666] leading-relaxed mb-6 font-normal">
            What began as a small studio has grown into a full-service design firm 
            with a portfolio spanning residential, commercial, and hospitality 
            projects across India.
          </p>
          
          <p className="text-lg text-[#666666] leading-relaxed mb-12 font-normal">
            Our team combines creativity with technical expertise, ensuring that 
            each design is not only aesthetically pleasing but also functional and 
            sustainable.
          </p>
          
          {/* Stats Section */}
          <div className="flex gap-16 items-start">
            <div className="flex flex-col items-start">
              <div className="text-5xl font-bold text-[#E63946] leading-none mb-2 tracking-tight">
                {projectsCompleted}
              </div>
              <div className="text-lg text-[#666666] font-normal leading-tight">
                Projects Completed
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="text-5xl font-bold text-[#E63946] leading-none mb-2 tracking-tight">
                {yearsExperience}
              </div>
              <div className="text-lg text-[#666666] font-normal leading-tight">
                Years of Experience
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="text-5xl font-bold text-[#E63946] leading-none mb-2 tracking-tight">
                {happyClients}
              </div>
              <div className="text-lg text-[#666666] font-normal leading-tight">
                Happy Clients
              </div>
            </div>
          </div>
        </div>
        
        {/* Image Content */}
        <div className="flex-1 max-w-[600px]">
          <div className="w-full  rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/images/AboutPage/our-journey.jpg" 
              alt="Two professionals in business attire having a friendly conversation in a modern office setting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;