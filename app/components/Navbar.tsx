import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm px-4 md:px-12 py-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold tracking-wide text-indigo-600">
        StudioSpace
      </Link>

      <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-600">
        <li><Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link></li>
        <li><Link href="/studios" className="hover:text-indigo-600 transition-colors">Studios</Link></li>
        <li><Link href="/dashboard" className="hover:text-indigo-600 transition-colors">Dashboard</Link></li>
      </ul>

      <div className="flex items-center gap-3">
        <Link href="/login" className="px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
          Login
        </Link>
        <Link href="/register" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
          Register
        </Link>
      </div>
    </nav>
  );
}