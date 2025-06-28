'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/admin/Sidebar";
import TopNavbar from "@/components/admin/TopNavbar";
import ProjectHeader from "@/components/admin/projects/ProjectHeader";
import ProjectSearchFilter from "@/components/admin/projects/ProjectSearchFilter";
import ProjectCard from "@/components/admin/projects/ProjectCard";
import EditProjectModal from "@/components/admin/projects/EditProjectModal";
import EditProjectForm from "@/components/admin/projects/EditProjectForm";
import { PlusCircle } from 'lucide-react';
import { portfolioProjects } from '@/app/data';

export default function AdminProjectsPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
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

  const filteredProjects = portfolioProjects.filter((project) => {
    const matchesFilter = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleEditProject = (project) => {
    setSelectedProject(project);
    setIsEditModalOpen(true);
  };

  const handleAddProject = () => {
    setSelectedProject(null);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedProject(null);
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
          <ProjectHeader onAddProjectClick={handleAddProject} />
          <ProjectSearchFilter
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id || index}
                project={project}
                onEdit={handleEditProject}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating add button for mobile */}
      <button
        onClick={handleAddProject}
        className="fixed bottom-20 right-5 bg-[#E63946] hover:bg-[#D62828] text-white font-semibold py-4 px-4 rounded-full flex items-center gap-2 transition-colors duration-200 shadow-lg lg:hidden z-50"
      >
        <PlusCircle size={24} />
      </button>

      {/* Modal */}
      <EditProjectModal isOpen={isEditModalOpen} onClose={handleCloseEditModal}>
        {selectedProject && (
          <EditProjectForm
            project={selectedProject}
            onClose={handleCloseEditModal}
          />
        )}
        {!selectedProject && (
          <EditProjectForm onClose={handleCloseEditModal} />
        )}
      </EditProjectModal>
    </div>
  );
}