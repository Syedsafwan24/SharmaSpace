'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PlusCircle, MinusCircle, X } from 'lucide-react';

const ImageInput = ({ label, imageUrl, onImageUrlChange, onRemove, showRemove = false }) => {
  return (
    <div className="flex items-end gap-2 mb-4">
      <div className="flex-1">
        <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => onImageUrlChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946] text-[#1C1C1C]"
          placeholder="Enter image URL"
        />
      </div>
      {imageUrl && (
        <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border border-gray-200">
          <Image src={imageUrl} alt="Preview" width={80} height={80} className="object-cover w-full h-full" />
        </div>
      )}
      {showRemove && (
        <button
          onClick={onRemove}
          className="p-2 text-gray-500 hover:text-[#E63946] transition-colors duration-200"
        >
          <MinusCircle size={20} />
        </button>
      )}
    </div>
  );
};

const EditBlogForm = ({ blogPost, onClose }) => {
  const isEditMode = !!blogPost;
  const [formData, setFormData] = useState({
    title: blogPost?.title || '',
    category: blogPost?.category || '',
    date: blogPost?.date || '',
    excerpt: blogPost?.excerpt || '',
    content: blogPost?.content || '',
    author: blogPost?.author || '',
    authorImage: blogPost?.authorImage || '',
    image: blogPost?.image || '',
    galleryImages: blogPost?.galleryImages || [],
    ctaTitle: blogPost?.ctaTitle || '',
    ctaButtonText: blogPost?.ctaButtonText || '',
    ctaDescription: blogPost?.ctaDescription || '',
    ctaButtonLink: blogPost?.ctaButtonLink || '',
  });

  const [newGalleryImageUrl, setNewGalleryImageUrl] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddGalleryImage = () => {
    if (newGalleryImageUrl.trim() && !formData.galleryImages.includes(newGalleryImageUrl.trim())) {
      setFormData((prev) => ({
        ...prev,
        galleryImages: [...prev.galleryImages, newGalleryImageUrl.trim()],
      }));
      setNewGalleryImageUrl('');
    }
  };

  const handleRemoveGalleryImage = (imageToRemove) => {
    setFormData((prev) => ({
      ...prev,
      galleryImages: prev.galleryImages.filter((image) => image !== imageToRemove),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isEditMode ? 'Form submitted for edit:' : 'Form submitted for add:', formData);
    // Here you would typically send data to your backend
    onClose();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">{isEditMode ? 'Edit Blog Post' : 'New Blog Post'}</h2>
      <p className="text-gray-600 mb-6">{isEditMode ? 'Update the details for this blog post.' : 'Fill in the details for the new blog post.'}</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
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
          <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946] text-[#1C1C1C]"
          >
            <option value="">Select Category</option>
            <option value="TRENDS">Trends</option>
            <option value="GUIDES">Guides</option>
            <option value="TIPS">Tips</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946] text-[#1C1C1C]"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="excerpt" className="block text-gray-700 text-sm font-bold mb-2">Excerpt</label>
          <textarea
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946] text-[#1C1C1C] h-24 resize-y"
            placeholder="A short summary of the blog post"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946] text-[#1C1C1C] h-48 resize-y"
            placeholder="Full content of the blog post"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 text-sm font-bold mb-2">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946] text-[#1C1C1C]"
          />
        </div>

        <ImageInput
          label="Author Image URL (Optional)"
          imageUrl={formData.authorImage}
          onImageUrlChange={(url) => setFormData((prev) => ({ ...prev, authorImage: url }))}
        />

        <ImageInput
          label="Main Image URL"
          imageUrl={formData.image}
          onImageUrlChange={(url) => setFormData((prev) => ({ ...prev, image: url }))}
        />

        <div className="mb-6 p-4 border border-gray-200 rounded-md bg-gray-50">
          <h3 className="text-lg font-semibold text-[#1C1C1C] mb-4">Gallery Images</h3>
          <p className="text-gray-600 text-sm mb-4">Add multiple images to display in a gallery within the blog post.</p>
          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              value={newGalleryImageUrl}
              onChange={(e) => setNewGalleryImageUrl(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946] text-[#1C1C1C]"
              placeholder="Enter image URL"
            />
            <button
              type="button"
              onClick={handleAddGalleryImage}
              className="px-4 py-2 bg-[#E63946] hover:bg-[#D62828] text-white rounded-md transition-colors duration-200 flex items-center gap-1"
            >
              Add Image
            </button>
          </div>
          {formData.galleryImages.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No gallery images added yet.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {formData.galleryImages.map((image, index) => (
                <div key={index} className="relative w-full h-24 rounded-md overflow-hidden border border-gray-200">
                  <Image src={image} alt={`Gallery image ${index + 1}`} layout="fill" objectFit="cover" />
                  <button
                    type="button"
                    onClick={() => handleRemoveGalleryImage(image)}
                    className="absolute top-1 right-1 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-75 transition-colors duration-200"
                    title="Remove image"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mb-6 p-4 border border-gray-200 rounded-md bg-gray-50">
          <h3 className="text-lg font-semibold text-[#1C1C1C] mb-4">Call-to-Action Box</h3>
          <p className="text-gray-600 text-sm mb-4">Add a custom CTA box that will appear at the end of the blog post.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="ctaTitle" className="block text-gray-700 text-sm font-bold mb-2">CTA Title</label>
              <input
                type="text"
                id="ctaTitle"
                name="ctaTitle"
                value={formData.ctaTitle}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946] text-[#1C1C1C]"
                placeholder="Enter CTA title"
              />
            </div>
            <div>
              <label htmlFor="ctaButtonText" className="block text-gray-700 text-sm font-bold mb-2">Button Text</label>
              <input
                type="text"
                id="ctaButtonText"
                name="ctaButtonText"
                value={formData.ctaButtonText}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946] text-[#1C1C1C]"
                placeholder="Enter button text"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="ctaDescription" className="block text-gray-700 text-sm font-bold mb-2">CTA Description</label>
            <textarea
              id="ctaDescription"
              name="ctaDescription"
              value={formData.ctaDescription}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946] text-[#1C1C1C] h-24 resize-y"
              placeholder="Enter CTA description"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="ctaButtonLink" className="block text-gray-700 text-sm font-bold mb-2">Button Link</label>
            <input
              type="text"
              id="ctaButtonLink"
              name="ctaButtonLink"
              value={formData.ctaButtonLink}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946] text-[#1C1C1C]"
              placeholder="Enter button link (URL)"
            />
          </div>
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
            {isEditMode ? 'Save Blog Post' : 'Add Blog Post'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBlogForm;
