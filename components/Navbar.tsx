
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#001F3F] py-3 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center space-x-2">
          <div className="text-white">
            <h1 className="serif text-xl md:text-2xl font-bold tracking-tight leading-none">AMELIA BRESLIN</h1>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-medium">The Radnor Realtor</p>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {['Home', 'Listings', 'About', 'Services', 'News', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-white text-xs uppercase tracking-widest hover:text-[#D4AF37] transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="flex items-center space-x-2 bg-[#D4AF37] hover:bg-white text-white hover:text-[#001F3F] px-5 py-2 rounded-sm transition-all duration-500 text-xs font-semibold uppercase tracking-widest">
            <User size={14} />
            <span>Client Login</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-[#001F3F] transition-transform duration-500 z-40 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {['Home', 'Listings', 'About', 'Services', 'News', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-white text-2xl serif hover:text-[#D4AF37]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex flex-col space-y-4 pt-8">
            <button className="bg-[#D4AF37] text-white px-10 py-4 rounded-sm">Call Amelia</button>
            <button className="border border-white text-white px-10 py-4 rounded-sm">Search Homes</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
