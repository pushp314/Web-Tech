import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Laptop } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Laptop className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Web Tech Academy</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
            <Link to="/courses" className="text-gray-600 hover:text-blue-600">Courses</Link>
            <Link to="/projects" className="text-gray-600 hover:text-blue-600">Projects</Link>
            <Link to="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
            <Link to="/#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Contact Us
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/services" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Services</Link>
            <Link to="/courses" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Courses</Link>
            <Link to="/projects" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Projects</Link>
            <Link to="/blog" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Blog</Link>
            <Link to="/#contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}