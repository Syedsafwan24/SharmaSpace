import React from 'react';

const RecentMessages = () => {
  const messages = [
    {
      sender: 'Aditya Sharma',
      time: 'May 8, 10:22 AM',
      text: "We're looking to renovate our living room and kitchen space. Would love to schedule a...",
    },
    {
      sender: 'Priya Mehta',
      time: 'May 8, 10:22 AM',
      text: "I'm interested in your commercial design services for my new office space in Bandra. Please share some...",
    },
    {
      sender: 'Rajesh Kumar',
      time: 'May 8, 10:22 AM',
      text: "We recently purchased a 3BHK apartment in South Mumbai and are looking for interior design service...",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">Recent Messages</h2>
      <p className="text-gray-600 text-sm mb-6">Latest inquiries from your clients</p>
      <div className="space-y-6">
        {messages.map((message, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
            <div className="flex justify-between items-center mb-1">
              <p className="font-semibold text-gray-800">{message.sender}</p>
              <p className="text-xs text-gray-500">{message.time}</p>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{message.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentMessages;
