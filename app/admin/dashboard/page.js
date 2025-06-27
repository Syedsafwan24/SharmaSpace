'use client';

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Sidebar from "@/components/admin/Sidebar";
import DashboardHeader from "@/components/admin/DashboardHeader";
import StatsCard from "@/components/admin/StatsCard";
import RecentMessages from "@/components/admin/RecentMessages";
import ProjectCategories from "@/components/admin/ProjectCategories";
import RecentProjects from "@/components/admin/RecentProjects";

export default function AdminDashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">Loading...</div>;
  }

  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      <Sidebar />
      <div className="flex-1 p-8">
        <DashboardHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <StatsCard title="Total Projects" value="6" icon="Package" color="#E63946" />
          <StatsCard title="Total Services" value="6" icon="Settings" color="#E63946" />
          <StatsCard title="Testimonials" value="5" icon="MessageSquare" color="#E63946" />
          <StatsCard title="Messages" value="5" icon="Mail" color="#E63946" />
          <StatsCard title="Blog Posts" value="6" icon="Edit" color="#E63946" />
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
  );
}