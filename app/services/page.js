import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Interior Design Services in Bangalore | Modular Kitchen & Wardrobe",
  description: "Comprehensive interior design services in Bangalore: modular kitchens, wardrobes, residential & commercial design. Expert space planning and furniture selection.",
};

export default function Services() {
  return (
    <div className="bg-gray-50">
      <Navigation />
      <main className="min-h-[60vh] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Coming soon - Detailed information about our residential, commercial, and hospitality design services.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}