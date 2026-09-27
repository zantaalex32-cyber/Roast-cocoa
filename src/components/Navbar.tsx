import React, { useState, useEffect } from 'react';
import { Coffee, ShoppingBag, Menu as MenuIcon, X, Phone, Clock, MapPin } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Our Story', href: '#story' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        isScrolled 
          ? 'bg-[#1B120C] border-b border-[#3A281E] shadow-sm' 
          : 'bg-[#1B120C] border-b border-[#2C1E16]'
      }`}
    >
      {/* Top Announcement Bar */}
      <div className="bg-[#140D07] text-[#DFD3C3] text-xs py-2 px-4 border-b border-[#2C1E16]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#A86D3B]" />
              Mon–Fri 7am–7pm · Sat–Sun 8am–8pm
            </span>
            <span className="hidden md:inline text-[#7D5836]">·</span>
            <span className="hidden md:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#A86D3B]" />
              42 Artisan Way, Central Quarter
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a 
              id="top-call-link"
              href="tel:0114488963" 
              className="flex items-center gap-1.5 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#A86D3B]"
              aria-label="Call Roast & Cocoa at 0114488963"
            >
              <Phone className="w-3 h-3 text-[#A86D3B]" />
              <span>0114488963</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Brand Logo */}
          <a 
            id="brand-logo"
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#A86D3B] rounded-sm p-1"
          >
            <div className="w-9 h-9 bg-[#2C1E16] border border-[#593E2B] rounded-md flex items-center justify-center text-[#DFD3C3]">
              <Coffee className="w-5 h-5 text-[#C4976E]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#FBF9F5]">
                Roast &amp; Cocoa
              </span>
              <span className="text-[10px] tracking-widest text-[#A86D3B] uppercase font-sans">
                Artisanal Coffee &amp; Slow Bar
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-[#DFD3C3] hover:text-[#FFFFFF] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#A86D3B] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Cart */}
          <div className="flex items-center gap-3">
            <button
              id="navbar-order-btn"
              type="button"
              onClick={onOpenCart}
              className="relative inline-flex items-center justify-center gap-2 bg-[#8C5E3C] hover:bg-[#9E6E45] text-[#FBF9F5] px-4 py-2.5 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#DFD3C3] border border-[#A86D3B]"
              aria-label="Order Now, opens order drawer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Order Now</span>
              <span className="sm:hidden">Order</span>
              {cartCount > 0 && (
                <span 
                  id="navbar-cart-badge"
                  className="bg-[#1B120C] text-[#FBF9F5] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border border-[#DFD3C3]"
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[#DFD3C3] hover:text-white hover:bg-[#2C1E16] focus:outline-none focus:ring-2 focus:ring-[#A86D3B]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-dropdown-menu"
          className="lg:hidden bg-[#1B120C] border-b border-[#3A281E] px-4 pt-3 pb-6 space-y-3"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`mobile-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-[#DFD3C3] hover:text-[#FFFFFF] py-2 px-3 rounded-md hover:bg-[#2C1E16] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#2C1E16] flex flex-col gap-2">
            <a
              id="mobile-call-button"
              href="tel:0114488963"
              className="flex items-center justify-center gap-2 bg-[#2C1E16] hover:bg-[#3A281E] text-[#DFD3C3] py-2.5 rounded-md text-sm font-medium border border-[#593E2B]"
            >
              <Phone className="w-4 h-4 text-[#A86D3B]" />
              <span>Call Us: 0114488963</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
