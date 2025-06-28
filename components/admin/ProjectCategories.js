import React from 'react';
import { portfolioProjects } from '@/app/data';

const ProjectCategories = () => {
  // Calculate category distribution from actual data
  const totalProjects = portfolioProjects.length;
  const categoryCount = portfolioProjects.reduce((acc, project) => {
    acc[project.category] = (acc[project.category] || 0) + 1;
    return acc;
  }, {});

  const categories = Object.entries(categoryCount).map(([name, count]) => ({
    name,
    percentage: Math.round((count / totalProjects) * 100),
    color: '#E63946'
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">Project Categories</h2>
      <p className="text-gray-600 text-sm mb-6">Distribution of projects by category</p>
      <div className="space-y-4">
        {categories.map((category, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-1">
              <p className="text-gray-800 font-medium">{category.name}</p>
              <p className="text-sm text-gray-600">{category.percentage}%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full"
                style={{ width: `${category.percentage}%`, backgroundColor: category.color }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCategories;