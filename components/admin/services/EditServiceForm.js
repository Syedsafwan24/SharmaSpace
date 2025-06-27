'use client';

import React, { useState } from 'react';
import { Sofa, Building, Hotel, LayoutGrid, Chair, Hammer } from 'lucide-react';

const iconOptions = [
  { value: 'Sofa', label: 'Sofa', icon: Sofa },
  { value: 'Building', label: 'Building', icon: Building },
  { value: 'Hotel', label: 'Hotel', icon: Hotel },
  { value: 'LayoutGrid', label: 'Layout Grid', icon: LayoutGrid },
  { value: 'Chair', label: 'Chair', icon: Chair },
  { value: 'Hammer', label: 'Hammer', icon: Hammer },
];

const EditServiceForm = ({ service, onClose }) => {
  const isEditMode = !!service;
  const [formData, setFormData] = useState({
    title: service?.title || '',
    description: service?.description || '',
    icon: service?.icon || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isEditMode ? 'Form submitted for edit:' : 'Form submitted for add:', formData);
    // Here you would typically send data to your backend
    onClose();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">{isEditMode ? 'Edit Service' : 'Add Service'}</h2>
      <p className="text-gray-600 mb-6">{isEditMode ? 'Update the details for this service.' : 'Fill in the details for the new service.'}</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Service Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946] text-[#1C1C1C]"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946] text-[#1C1C1C] h-32 resize-none"
          ></textarea>
        </div>

        <div className="mb-6">
          <label htmlFor="icon" className="block text-gray-700 text-sm font-bold mb-2">Icon</label>
          <select
            id="icon"
            name="icon"
            value={formData.icon}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946] text-[#1C1C1C]"
          >
            <option value="">Select an icon</option>
            {iconOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-[#E63946] hover:bg-[#D62828] text-white rounded-md transition-colors duration-200"
          >
            {isEditMode ? 'Save Service' : 'Add Service'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditServiceForm;
