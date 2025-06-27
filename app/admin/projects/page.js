'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import TopNavbar from "@/components/admin/TopNavbar";
import ProjectHeader from "@/components/admin/projects/ProjectHeader";
import ProjectSearchFilter from "@/components/admin/projects/ProjectSearchFilter";
import ProjectCard from "@/components/admin/projects/ProjectCard";
import EditProjectModal from "@/components/admin/projects/EditProjectModal";
import EditProjectForm from "@/components/admin/projects/EditProjectForm";
import Link from 'next/link';
import { PlusCircle } from 'lucide-react';

const projectsData = [
  {
    title: 'Modern Apartment in Mumbai',
    category: 'Residential',
    image: '/images/resident.jpg',
    description: 'A sleek, minimalist design with neutral tones and contemporary furnishings. This project transformed...',
  },
  {
    title: 'Luxury Villa in Delhi',
    category: 'Residential',
    image: '/images/bedroom-suite.jpg',
    description: 'Opulent interiors with custom furniture and art pieces for a sophisticated living experience. This exclusive...',
  },
  {
    title: 'Co-Working Space in Bangalore',
    category: 'Commercial',
    image: '/images/commercial.jpg',
    description: 'A vibrant, collaborative workspace designed for productivity and creativity. This modern co-working...',
  },
  {
    title: 'Urban Loft Renovation',
    category: 'Residential',
    image: '/images/sofa.jpg',
    description: 'A stylish urban loft renovated with modern amenities and a focus on open-plan living. Features...',
  },
  {
    title: 'Boutique Hotel Design',
    category: 'Hospitality',
    image: '/images/hospital.jpg',
    description: 'An elegant boutique hotel designed to offer a unique and luxurious experience for guests. Blending...',
  },
  {
    title: 'Retail Store Interior',
    category: 'Commercial',
    image: '/images/resident.jpg',
    description: 'A contemporary retail space designed to enhance customer experience and showcase products effectively. Features...',
  },
];

export default function AdminProjectsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter((project) => {
    const matchesFilter = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleEditProject = (project) => {
    setSelectedProject(project);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
      <TopNavbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-4 lg:p-8 pt-20 lg:pt-8 pb-20 lg:pb-8">
          <ProjectHeader />
          <ProjectSearchFilter
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} onEdit={handleEditProject} />
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          setSelectedProject(null);
          setIsEditModalOpen(true);
        }}
        className="fixed bottom-20 right-5 bg-[#E63946] hover:bg-[#D62828] text-white font-semibold py-4 px-4 rounded-full flex items-center gap-2 transition-colors duration-200 shadow-lg lg:hidden z-50"
      >
        <PlusCircle size={24} />
      </button>

      <EditProjectModal isOpen={isEditModalOpen} onClose={handleCloseEditModal}>
        {selectedProject && <EditProjectForm project={selectedProject} onClose={handleCloseEditModal} />}
      </EditProjectModal>
    </div>
  );
}
