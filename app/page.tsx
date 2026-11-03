import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="max-w-5xl mx-auto px-4 py-20 text-center mt-8 bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Find Your <span className="text-indigo-600">StudioSpace</span>
          </h1>
          <p className="py-6 text-lg text-gray-600">
            Book high-quality creative studios, production spaces, and gear for your next big project effortlessly.
          </p>
          <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow-md hover:bg-indigo-700 transition-colors">
            Explore All Studios
          </button>
        </div>
      </section>
    </main>
  );
}