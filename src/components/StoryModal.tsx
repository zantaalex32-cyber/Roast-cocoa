import React, { useEffect } from 'react';
import { X, Flame, Sparkles, HeartHandshake, Compass } from 'lucide-react';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      id="brand-story-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="story-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B120C]/80"
      onClick={onClose}
    >
      <div 
        className="bg-[#FFFFFF] border border-[#DFD3C3] rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-story-modal"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-[#1B120C] text-[#FBF9F5] hover:bg-[#2C1E16] p-2 rounded-full border border-[#3A281E] focus:outline-none focus:ring-2 focus:ring-[#8C5E3C]"
          aria-label="Close brand story dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image banner */}
        <div className="relative h-64 sm:h-80 w-full bg-[#140D07] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80"
            alt="Barista carefully calibrating espresso extraction"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#1B120C]/40" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-xs uppercase tracking-widest text-[#C4976E] font-mono block mb-1">
              Our Heritage &amp; Ethos
            </span>
            <h2 id="story-modal-title" className="font-serif text-3xl sm:text-4xl font-bold text-[#FBF9F5]">
              The Story of Roast &amp; Cocoa
            </h2>
          </div>
        </div>

        {/* Story Body */}
        <div className="p-6 sm:p-10 space-y-8 text-[#241812]">
          
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#241812]">
              Why We Slow Down
            </h3>
            <p className="text-base text-[#593E2B] leading-relaxed">
              In a world optimized for speed, disposable cups, and mechanized extraction, we chose the alternative. Roast &amp; Cocoa was founded in 2018 on a simple premise: genuine craftsmanship requires time, deliberate listening, and respect for agricultural origin.
            </p>
            <p className="text-sm sm:text-base text-[#593E2B] leading-relaxed">
              Coffee and cacao are two of humanity’s oldest fermented traditions. Both begin inside tropical fruit. Both require months of tending under canopy shade, patient sun drying, and careful roasting to unlock their aromatic potential. When you taste them side by side, their shared DNA becomes undeniable.
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#F5EFEB]">
            <div className="p-4 bg-[#FBF9F5] border border-[#DFD3C3] rounded-lg space-y-2">
              <div className="w-8 h-8 rounded bg-[#EBE2D8] flex items-center justify-center text-[#8C5E3C]">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <h4 className="font-serif font-bold text-base text-[#241812]">Direct Farm Gate</h4>
              <p className="text-xs text-[#593E2B] leading-relaxed">
                We circumvent commercial brokers to purchase cherry harvests directly from family producers in Colombia, Ethiopia, and the Dominican Republic.
              </p>
            </div>

            <div className="p-4 bg-[#FBF9F5] border border-[#DFD3C3] rounded-lg space-y-2">
              <div className="w-8 h-8 rounded bg-[#EBE2D8] flex items-center justify-center text-[#8C5E3C]">
                <Flame className="w-4 h-4" />
              </div>
              <h4 className="font-serif font-bold text-base text-[#241812]">Drum Roasting</h4>
              <p className="text-xs text-[#593E2B] leading-relaxed">
                We roast on a vintage Probat cast-iron drum. Low thermal convection and high conductive heat yield round sweetness without charred edges.
              </p>
            </div>

            <div className="p-4 bg-[#FBF9F5] border border-[#DFD3C3] rounded-lg space-y-2">
              <div className="w-8 h-8 rounded bg-[#EBE2D8] flex items-center justify-center text-[#8C5E3C]">
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="font-serif font-bold text-base text-[#241812]">Bean-To-Bar</h4>
              <p className="text-xs text-[#593E2B] leading-relaxed">
                Our mochas and hot chocolates don't use powdered syrups. We stone-grind raw cacao with unrefined cane sugar for 48 hours in our workshop.
              </p>
            </div>
          </div>

          <div className="p-6 bg-[#F5EFEB] border border-[#DFD3C3] rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Compass className="w-4 h-4 text-[#8C5E3C]" />
              <span className="text-xs uppercase font-semibold text-[#8C5E3C] tracking-wider">
                Visit Us in Person
              </span>
            </div>
            <p className="text-sm text-[#241812] leading-relaxed font-serif italic">
              "We built our space to be your second living room. Bring your favorite book, take your time, and let us prepare a cup made just for this hour."
            </p>
          </div>

          {/* Footer close */}
          <div className="pt-4 border-t border-[#DFD3C3] flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-[#2C1E16] hover:bg-[#3A281E] text-[#FBF9F5] px-6 py-2.5 rounded-md text-sm font-medium transition-colors border border-[#593E2B]"
            >
              Return to Website
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
