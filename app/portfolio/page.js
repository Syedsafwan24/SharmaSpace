import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Interior Design Portfolio - Bangalore Projects",
  description: "Explore our portfolio of 150+ interior design projects in Bangalore. Residential, commercial, and hospitality spaces transformed by Sharma Space.",
};

export default function Portfolio() {
  return (
    <div className="bg-gray-50">
      <Navigation />
      <main className="min-h-[60vh] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Coming soon - Explore our completed projects showcasing innovative interior design solutions.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}