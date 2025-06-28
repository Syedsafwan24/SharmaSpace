import React from 'react';

const DashboardHeader = ({ user }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-[#1C1C1C] mb-2">
        Dashboard
        {user && <span className="text-lg font-normal text-gray-600 ml-2">- Welcome, {user.name}</span>}
        }
      </h1>
      <p className="text-gray-600">Overview of your website content and analytics</p>
    </div>
  );
};

export default DashboardHeader;