
import { Search, User, ShoppingBag, Menu, X, Heart } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import UserDropdown from "./UserDropdown";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { getCartItemsCount, getWishlistItemsCount } = useCart();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 brand-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">
              VastraKart
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/products?category=Men" className="text-gray-700 hover:text-brand-600 transition-colors">
              Men
            </Link>
            <Link to="/products?category=Women" className="text-gray-700 hover:text-brand-600 transition-colors">
              Women
            </Link>
            <Link to="/products?category=Kids" className="text-gray-700 hover:text-brand-600 transition-colors">
              Kids
            </Link>
            <Link to="/products?category=Accessories" className="text-gray-700 hover:text-brand-600 transition-colors">
              Accessories
            </Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center relative flex-1 max-w-md mx-8">
            <Input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="pl-10 pr-4 py-2 w-full"
            />
            <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Search className="text-gray-400 w-4 h-4" />
            </button>
          </form>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <UserDropdown />
            ) : (
              <Link to="/login" className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-brand-600 transition-colors">
                <User className="w-5 h-5" />
                <span>Login</span>
              </Link>
            )}
            
            {/* Wishlist */}
            <Link to="/wishlist" className="relative">
              <Heart className="w-6 h-6 text-gray-700 hover:text-brand-600 transition-colors" />
              {getWishlistItemsCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getWishlistItemsCount()}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <ShoppingBag className="w-6 h-6 text-gray-700 hover:text-brand-600 transition-colors" />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <div className="flex flex-col space-y-4">
              <form onSubmit={handleSearch} className="relative mb-4">
                <Input
                  type="text"
                  placeholder="Search for products..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="pl-10 pr-4 py-2 w-full"
                />
                <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Search className="text-gray-400 w-4 h-4" />
                </button>
              </form>
              <Link to="/products?category=Men" className="text-gray-700 hover:text-brand-600 transition-colors">
                Men
              </Link>
              <Link to="/products?category=Women" className="text-gray-700 hover:text-brand-600 transition-colors">
                Women
              </Link>
              <Link to="/products?category=Kids" className="text-gray-700 hover:text-brand-600 transition-colors">
                Kids
              </Link>
              <Link to="/products?category=Accessories" className="text-gray-700 hover:text-brand-600 transition-colors">
                Accessories
              </Link>
              {!isLoggedIn && (
                <Link to="/login" className="flex items-center space-x-1 text-gray-700 hover:text-brand-600 transition-colors">
                  <User className="w-5 h-5" />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
