'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/admin/Sidebar";
import TopNavbar from "@/components/admin/TopNavbar";
import TestimonialHeader from "@/components/admin/testimonials/TestimonialHeader";
import TestimonialSearchFilter from "@/components/admin/testimonials/TestimonialSearchFilter";
import TestimonialCard from "@/components/admin/testimonials/TestimonialCard";
import EditTestimonialModal from "@/components/admin/testimonials/EditTestimonialModal";
import EditTestimonialForm from "@/components/admin/testimonials/EditTestimonialForm";
import { PlusCircle } from 'lucide-react';
import { testimonials } from '@/app/data';

export default function AdminTestimonials() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [testimonialsData, setTestimonialsData] = useState(testimonials);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      router.push('/login');
      return;
    }
    
    try {
      const userData = JSON.parse(currentUser);
      setUser(userData);
    } catch (error) {
      router.push('/login');
      return;
    }
    
    setLoading(false);
  }, [router]);

  const filteredTestimonials = testimonialsData.filter(
    (testimonial) =>
      testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditTestimonial = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsEditModalOpen(true);
  };

  const handleAddTestimonial = () => {
    setSelectedTestimonial(null);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedTestimonial(null);
  };

  const handleDelete = (id) => {
    console.log('Delete testimonial with ID:', id);
    setTestimonialsData(testimonialsData.filter((t) => t.id !== id));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E63946] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
      <TopNavbar user={user} />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-4 lg:p-8 pt-20 lg:pt-8 pb-20 lg:pb-8">
          <TestimonialHeader onAddTestimonialClick={handleAddTestimonial} />
          <TestimonialSearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {filteredTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                onEdit={handleEditTestimonial}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={handleAddTestimonial}
        className="fixed bottom-4 right-4 bg-[#E63946] hover:bg-[#D62828] text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition-colors duration-200 shadow-lg lg:hidden z-50"
      >
        <PlusCircle size={24} />
        Add New Testimonial
      </button>

      <EditTestimonialModal isOpen={isEditModalOpen} onClose={handleCloseEditModal}>
        {selectedTestimonial ? (
          <EditTestimonialForm testimonial={selectedTestimonial} onClose={handleCloseEditModal} />
        ) : (
          <EditTestimonialForm onClose={handleCloseEditModal} />
        )}
      </EditTestimonialModal>
    </div>
  );
}