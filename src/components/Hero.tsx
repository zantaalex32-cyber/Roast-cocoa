import React from 'react';
import { ArrowDown, ChevronRight, Award, Flame, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onVisitUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onVisitUs }) => {
  return (
    <section 
      id="home"
      aria-label="Hero Introduction"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#1B120C] text-[#FBF9F5] border-b border-[#2C1E16] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 z-10">
            
            {/* Status / Heritage Pill */}
            <div className="inline-flex items-center gap-2 bg-[#2C1E16] border border-[#593E2B] px-3.5 py-1.5 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-[#A86D3B]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#DFD3C3]">
                Micro-Roastery &amp; Cacao Atelier
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#FBF9F5] leading-[1.08]">
              Good Coffee. <br />
              <span className="text-[#C4976E] italic font-normal">Slow Moments.</span>
            </h1>

            {/* Short Supporting Text */}
            <p className="text-base sm:text-lg text-[#DFD3C3] max-w-xl font-normal leading-relaxed">
              We roast single-origin heirloom beans in micro-batches and melt pure single-estate Dominican cacao. Step away from the rush into an unhurried space made for quiet mornings and rich conversation.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-explore-menu-btn"
                type="button"
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-2 bg-[#8C5E3C] hover:bg-[#9E6E45] text-[#FBF9F5] px-7 py-3.5 rounded-md text-base font-medium transition-colors border border-[#A86D3B] focus:outline-none focus:ring-2 focus:ring-[#DFD3C3]"
              >
                <span>Explore Our Menu</span>
                <ChevronRight className="w-4 h-4 text-[#FBF9F5]" />
              </button>

              <button
                id="hero-visit-us-btn"
                type="button"
                onClick={onVisitUs}
                className="inline-flex items-center justify-center gap-2 bg-[#2C1E16] hover:bg-[#3A281E] text-[#DFD3C3] hover:text-white px-7 py-3.5 rounded-md text-base font-medium transition-colors border border-[#593E2B] focus:outline-none focus:ring-2 focus:ring-[#A86D3B]"
              >
                <span>Visit Us</span>
              </button>
            </div>

            {/* Three Pillar Value Chips */}
            <div className="pt-6 grid grid-cols-3 gap-3 border-t border-[#2C1E16] max-w-lg">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#C4976E] mb-1">
                  <Flame className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#DFD3C3]">Direct Trade</span>
                </div>
                <span className="text-xs text-[#9E897B]">Ethical micro-lots</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#C4976E] mb-1">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#DFD3C3]">Cast Iron</span>
                </div>
                <span className="text-xs text-[#9E897B]">Small drum roasted</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#C4976E] mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#DFD3C3]">70% Cacao</span>
                </div>
                <span className="text-xs text-[#9E897B]">Bean-to-bar ganache</span>
              </div>
            </div>

          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Solid Backdrop Accent Layer */}
              <div 
                className="absolute -top-3 -right-3 w-full h-full bg-[#2C1E16] border border-[#593E2B] rounded-lg -z-0"
                aria-hidden="true"
              />

              {/* Main Authentic Photograph */}
              <div className="relative z-10 rounded-lg overflow-hidden border border-[#3A281E] bg-[#140D07]">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
                  alt="Freshly brewed artisanal coffee being prepared with dark roast espresso beans and warm ceramic cup"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center"
                  loading="eager"
                />

                {/* Bottom Overlay Info Banner - Solid color */}
                <div className="bg-[#1B120C] border-t border-[#3A281E] p-4 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#A86D3B] font-semibold block">
                      Today's Featured Pour
                    </span>
                    <span className="font-serif text-sm font-bold text-[#FBF9F5]">
                      Ethiopian Guji Natural Heirloom
                    </span>
                  </div>
                  <span className="bg-[#2C1E16] border border-[#593E2B] text-[#C4976E] text-xs font-medium px-2.5 py-1 rounded">
                    Notes of Bergamot
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Guidance Indicator */}
        <div className="mt-12 pt-6 border-t border-[#2C1E16] flex justify-center">
          <a
            href="#featured"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#9E897B] hover:text-[#C4976E] transition-colors focus:outline-none focus:ring-1 focus:ring-[#A86D3B] px-3 py-1.5 rounded"
            aria-label="Scroll to featured coffee"
          >
            <span>Signature Brews</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#A86D3B]" />
          </a>
        </div>

      </div>
    </section>
  );
};
