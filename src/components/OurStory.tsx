import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

interface OurStoryProps {
  onOpenStoryModal: () => void;
}

export const OurStory: React.FC<OurStoryProps> = ({ onOpenStoryModal }) => {
  return (
    <section 
      id="story" 
      aria-label="Our Story and Philosophy"
      className="py-20 md:py-28 bg-[#F5EFEB] text-[#241812] border-b border-[#DFD3C3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Solid Offset Layer */}
              <div 
                className="absolute -bottom-3 -left-3 w-full h-full bg-[#DFD3C3] border border-[#C4976E]/40 rounded-lg -z-0" 
                aria-hidden="true"
              />

              {/* Authentic Photography */}
              <div className="relative z-10 rounded-lg overflow-hidden border border-[#DFD3C3] bg-[#EBE2D8] shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
                  alt="Roast & Cocoa coffee shop interior with natural wooden coffee counter, warm light, and barista craft"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center"
                  loading="lazy"
                />

                {/* Roaster Quality Seal Stamp */}
                <div className="absolute top-4 left-4 bg-[#1B120C] text-[#FBF9F5] px-3.5 py-2 rounded border border-[#3A281E]">
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-[#C4976E] block">
                    Established 2018
                  </span>
                  <span className="font-serif text-xs font-bold text-[#FBF9F5]">
                    Independent Roastery
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-[#EBE2D8] text-[#593E2B] px-3 py-1 rounded w-fit text-xs font-semibold uppercase tracking-wider">
              <span>Our Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#241812] leading-tight">
              Honoring the Bean. <br />
              Respecting the Craft.
            </h2>

            <p className="text-base sm:text-lg text-[#593E2B] leading-relaxed">
              Roast &amp; Cocoa began with a simple counter, a cast-iron sample roaster, and a stubborn belief: that coffee should never be a mindless transaction.
            </p>

            <p className="text-sm sm:text-base text-[#593E2B] leading-relaxed">
              We travel directly to origin to shake hands with the farmers in Nariño, Huila, and Guji. We roast gently to accentuate harvest terroir rather than cover it up with smoke. And we grind our cacao from raw single-estate nibs, celebrating the symbiotic connection between two of nature’s greatest fermented treasures.
            </p>

            {/* Three Micro Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#EBE2D8] flex items-center justify-center text-[#8C5E3C] shrink-0 border border-[#DFD3C3]">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#241812]">100% Direct Trade</h4>
                  <p className="text-xs text-[#7D5836]">Paying 40% above Fair Trade minimums.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#EBE2D8] flex items-center justify-center text-[#8C5E3C] shrink-0 border border-[#DFD3C3]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#241812]">Zero Artificial Flavor</h4>
                  <p className="text-xs text-[#7D5836]">Only single-estate cacao and spices.</p>
                </div>
              </div>
            </div>

            {/* Simple Discover Link / Trigger */}
            <div className="pt-2">
              <button
                id="discover-story-btn"
                type="button"
                onClick={onOpenStoryModal}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#8C5E3C] hover:text-[#593E2B] group transition-colors focus:outline-none focus:ring-2 focus:ring-[#8C5E3C] py-2 px-1"
              >
                <span className="border-b-2 border-[#8C5E3C] pb-0.5 group-hover:border-[#593E2B]">
                  Discover Our Story &amp; Origins
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
