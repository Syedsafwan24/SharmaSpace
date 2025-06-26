import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us - Interior Designers in Bangalore",
  description: "Learn about Sharma Space's 10+ years of interior design expertise in Bangalore. 150+ projects completed, 500+ happy clients across residential and commercial spaces.",
};

export default function About() {
  return (
    <div className="bg-gray-50">
      <Navigation />
      <main className="min-h-[60vh] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About Sharma Space
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Coming soon - Learn about our journey, team, and mission to transform spaces across Bangalore and beyond.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}