import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function AdminDashboardPage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <p>Welcome, {session?.user?.name || session?.user?.email}!</p>
        <p>This is a protected route.</p>
      </div>
    </div>
  );
}
