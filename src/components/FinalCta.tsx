import React from 'react';
import { Coffee, ArrowUpRight } from 'lucide-react';

interface FinalCtaProps {
  onVisitClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onVisitClick }) => {
  return (
    <section 
      id="visit-cta" 
      aria-label="Visit Roast & Cocoa Invitation"
      className="py-24 md:py-32 bg-[#1B120C] text-[#FBF9F5] border-b border-[#2C1E16] text-center relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtle Brand Motif */}
        <div className="w-12 h-12 rounded-full bg-[#2C1E16] border border-[#593E2B] mx-auto flex items-center justify-center mb-6 text-[#C4976E]">
          <Coffee className="w-6 h-6" />
        </div>

        {/* Required Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#FBF9F5] mb-4 leading-tight">
          Your Table Is Waiting.
        </h2>

        {/* Required Supporting Text */}
        <p className="text-base sm:text-xl text-[#DFD3C3] max-w-xl mx-auto mb-8 font-normal leading-relaxed">
          Come in, slow down, and enjoy coffee made with care.
        </p>

        {/* Required Button */}
        <div>
          <button
            id="final-visit-btn"
            type="button"
            onClick={onVisitClick}
            className="inline-flex items-center justify-center gap-2.5 bg-[#8C5E3C] hover:bg-[#9E6E45] text-[#FBF9F5] px-8 py-4 rounded-md text-base font-semibold transition-colors border border-[#A86D3B] focus:outline-none focus:ring-2 focus:ring-[#DFD3C3] shadow-md"
          >
            <span>Visit Roast &amp; Cocoa</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Quiet Reassurance */}
        <div className="mt-8 text-xs text-[#9E897B] tracking-wide">
          Walk-ins always welcome · No reservations required · Filter coffee roasted fresh weekly
        </div>

      </div>
    </section>
  );
};
