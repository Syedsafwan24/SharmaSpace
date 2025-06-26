import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Interior Designers in Bangalore | Free Consultation",
  description: "Contact Sharma Space for interior design consultation in Bangalore. Call +91 98765 43210 or visit us at 123 Design Avenue, Mumbai. Free consultation available.",
};

export default function Contact() {
  return (
    <div className="bg-gray-50">
      <Navigation />
      <main className="min-h-[60vh] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Coming soon - Get in touch for your interior design consultation. We're here to help transform your space.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}