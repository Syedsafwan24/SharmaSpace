import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Interior Design Blog - Tips & Trends",
  description: "Interior design blog with latest trends, tips, and insights from Bangalore experts. Home decor ideas, design guides, and industry updates.",
};

export default function Blog() {
  return (
    <div className="bg-gray-50">
      <Navigation />
      <main className="min-h-[60vh] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Design Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Coming soon - Latest trends, tips, and insights from our interior design experts.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}