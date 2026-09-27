import React from 'react';
import { Coffee, Phone, MapPin, Clock, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenStory: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenStory }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Our Story', href: '#story' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#location' },
  ];

  return (
    <footer 
      id="main-footer"
      aria-label="Footer"
      className="bg-[#140D07] text-[#DFD3C3] border-t border-[#2C1E16] pt-16 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#2C1E16]">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#2C1E16] border border-[#593E2B] rounded-md flex items-center justify-center text-[#C4976E]">
                <Coffee className="w-4 h-4" />
              </div>
              <span className="font-serif text-2xl font-bold text-[#FBF9F5]">
                Roast &amp; Cocoa
              </span>
            </div>
            
            <p className="text-sm text-[#9E897B] leading-relaxed max-w-sm">
              Artisanal micro-roastery and single-estate bean-to-bar cacao atelier. Crafted for unhurried appreciation and intentional coffee culture.
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase font-mono text-[#A86D3B] tracking-wider block mb-2">
                Connect With Our Baristas
              </span>
              <div className="flex items-center space-x-3 text-xs text-[#DFD3C3]">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white px-2.5 py-1 bg-[#1B120C] rounded border border-[#2C1E16] transition-colors"
                >
                  Instagram
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white px-2.5 py-1 bg-[#1B120C] rounded border border-[#2C1E16] transition-colors"
                >
                  Facebook
                </a>
                <a 
                  href="https://x.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white px-2.5 py-1 bg-[#1B120C] rounded border border-[#2C1E16] transition-colors"
                >
                  X (Twitter)
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C4976E] font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onOpenStory}
                  className="hover:text-white transition-colors text-left"
                >
                  Brand Heritage
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Opening Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C4976E] font-mono flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#A86D3B]" />
              <span>Opening Hours</span>
            </h4>
            <div className="space-y-2 text-sm text-[#DFD3C3]">
              <div>
                <span className="text-[#9E897B] block text-xs">Monday – Friday</span>
                <span className="font-mono text-xs">7:00 AM – 7:00 PM</span>
              </div>
              <div>
                <span className="text-[#9E897B] block text-xs">Saturday – Sunday</span>
                <span className="font-mono text-xs">8:00 AM – 8:00 PM</span>
              </div>
              <p className="text-[11px] text-[#7D5836] pt-1">
                Roasting drum fires every Tuesday and Thursday morning.
              </p>
            </div>
          </div>

          {/* Col 4: Contact & Phone (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C4976E] font-mono flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#A86D3B]" />
              <span>Contact Us</span>
            </h4>
            <div className="space-y-2 text-sm">
              <p className="text-sm text-[#DFD3C3]">
                42 Artisan Way, Central Quarter
              </p>
              <div className="pt-1">
                <span className="text-xs text-[#9E897B] block">Direct Telephone:</span>
                <a
                  id="footer-phone-link"
                  href="tel:0114488963"
                  className="font-mono text-base font-bold text-[#C4976E] hover:text-white transition-colors inline-flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-[#A86D3B] rounded"
                  aria-label="Call Roast & Cocoa at 0114488963"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>0114488963</span>
                </a>
              </div>
              <p className="text-[11px] text-[#9E897B]">
                hello@roastandcocoa.craft
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E897B]">
          <div>
            &copy; {new Date().getFullYear()} Roast &amp; Cocoa. All rights reserved. Craft roasted with care.
          </div>

          <div className="flex items-center space-x-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-white underline-offset-4 hover:underline transition-colors focus:outline-none focus:ring-1 focus:ring-[#A86D3B] rounded"
            >
              Privacy &amp; Data Security
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#A86D3B] rounded p-1"
              aria-label="Back to top of page"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
