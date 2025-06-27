import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

type NavbarProps = {
  currentPage: 'home' | 'pricing' | 'about' | 'products' | 'contact';
};

const Navbar: React.FC<NavbarProps> = ({ currentPage = 'home' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-[#0E0E0E] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="flex justify-between items-center h-20">
          <div className="flex md:hidden items-center space-x-4">
            <button 
              className="text-[#FFFFFF]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link to="/" className="flex items-center space-x-3">
              <img src="/autoeve-logo.png" alt="Eve Logo" className="w-8 h-8" />
              <span className="text-xl font-normal font-comfortaa text-[#FFFFFF]">Eve</span>
            </Link>
          </div>

          {/* Desktop Logo */}
          <Link to="/" className="hidden md:flex items-center space-x-3 focus-visible:ring-2 focus-visible:ring-[#0E1593] rounded">
            <img src="/autoeve-logo.png" alt="Eve Logo" className="w-8 h-8" />
            <span className="text-xl font-normal font-comfortaa text-[#FFFFFF]">Eve</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${currentPage === 'home' ? 'text-[#FFFFFF] font-bold' : 'text-[#FFFFFF]/70'} hover:text-[#FFFFFF] transition-colors font-inter`}
            >
              Home
            </Link>
            <Link 
              to="/pricing" 
              className={`${currentPage === 'pricing' ? 'text-[#FFFFFF] font-bold' : 'text-[#FFFFFF]/70'} hover:text-[#FFFFFF] transition-colors font-inter`}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className={`${currentPage === 'contact' ? 'text-[#FFFFFF] font-bold' : 'text-[#FFFFFF]/70'} hover:text-[#FFFFFF] transition-colors font-inter`}
            >
              Contact
            </Link>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => { window.location.href = 'https://app.witheve.ai/'; }}
                className="bg-gradient-to-r from-[#0E1593] to-[#04062D] border border-[rgba(216,217,236,0.5)] text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#0E1593]/20 font-inter text-sm"
              >
                Log in
              </button>
              <button
                onClick={() => { window.location.href = 'https://app.witheve.ai/signup'; }}
                className="text-[#FFFFFF] border border-[rgba(216,217,236,0.5)] px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-[#FFFFFF]/10 font-inter text-sm"
              >
                Sign up
              </button>
            </div>
          </div>

          {/* Mobile Login Button */}
          <button 
            className="md:hidden bg-gradient-to-r from-[#0E1593] to-[#04062D] border border-[rgba(216,217,236,0.5)] text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#0E1593]/20 font-inter text-sm"
            onClick={() => { window.location.href = 'https://app.witheve.ai/'; }}
          >
            Login
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-[#0E0E0E] backdrop-blur-sm">
          <div className="px-6 py-4 space-y-3">
            <Link 
              to="/" 
              className={`block py-2 ${currentPage === 'home' ? 'text-[#FFFFFF] font-bold' : 'text-[#FFFFFF]/70'} hover:text-[#FFFFFF] font-inter`}
            >
              Home
            </Link>
            <Link 
              to="/pricing" 
              className={`block py-2 ${currentPage === 'pricing' ? 'text-[#FFFFFF] font-bold' : 'text-[#FFFFFF]/70'} hover:text-[#FFFFFF] font-inter`}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className={`block py-2 ${currentPage === 'contact' ? 'text-[#FFFFFF] font-bold' : 'text-[#FFFFFF]/70'} hover:text-[#FFFFFF] font-inter`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 