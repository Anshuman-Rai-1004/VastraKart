
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 brand-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-2xl font-bold">VastraKart</span>
            </div>
            <p className="text-gray-400">
              Your ultimate destination for fashion. Discover trendy clothing from verified vendors.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/products" className="block text-gray-400 hover:text-white transition-colors">
                All Products
              </Link>
              <Link to="/products" className="block text-gray-400 hover:text-white transition-colors">
                Men's Fashion
              </Link>
              <Link to="/products" className="block text-gray-400 hover:text-white transition-colors">
                Women's Fashion
              </Link>
              <Link to="/products" className="block text-gray-400 hover:text-white transition-colors">
                Accessories
              </Link>
            </div>
          </div>

          {/* Vendor Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">For Vendors</h3>
            <div className="space-y-2">
              <Link to="/register" className="block text-gray-400 hover:text-white transition-colors">
                Become a Vendor
              </Link>
              <Link to="/vendor-dashboard" className="block text-gray-400 hover:text-white transition-colors">
                Vendor Dashboard
              </Link>
              <Link to="/login" className="block text-gray-400 hover:text-white transition-colors">
                Vendor Login
              </Link>
            </div>
          </div>

          {/* Customer Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Contact Us
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Returns & Exchanges
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Size Guide
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 VastraKart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
