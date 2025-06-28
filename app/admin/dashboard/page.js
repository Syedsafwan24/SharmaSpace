'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/admin/Sidebar";
import TopNavbar from "@/components/admin/TopNavbar";
import DashboardHeader from "@/components/admin/DashboardHeader";
import StatsCard from "@/components/admin/StatsCard";
import RecentMessages from "@/components/admin/RecentMessages";
import ProjectCategories from "@/components/admin/ProjectCategories";
import RecentProjects from "@/components/admin/RecentProjects";
import { companyStats } from "@/app/data";

export default function AdminDashboardPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
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

  // Get stats from centralized data
  const statsData = [
    {
      title: "Total Projects",
      value: companyStats.find(s => s.id === 'projects-completed')?.value || 150,
      icon: "Package",
      color: "#E63946"
    },
    {
      title: "Total Services",
      value: "6",
      icon: "Settings",
      color: "#E63946"
    },
    {
      title: "Testimonials",
      value: companyStats.find(s => s.id === 'happy-clients')?.value || 500,
      icon: "MessageSquare",
      color: "#E63946"
    },
    {
      title: "Messages",
      value: "5",
      icon: "Mail",
      color: "#E63946"
    },
    {
      title: "Blog Posts",
      value: "6",
      icon: "Edit",
      color: "#E63946"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
      <TopNavbar user={user} />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-4 lg:p-8 pt-20 lg:pt-8 pb-20 lg:pb-8">
          <DashboardHeader user={user} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {statsData.map((stat, index) => (
              <StatsCard 
                key={index}
                title={stat.title} 
                value={stat.value} 
                icon={stat.icon} 
                color={stat.color} 
              />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <RecentMessages />
            </div>
            <div className="lg:col-span-1">
              <ProjectCategories />
            </div>
            <div className="lg:col-span-1">
              <RecentProjects />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}