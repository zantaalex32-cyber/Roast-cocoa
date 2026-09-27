import React from 'react';
import { TESTIMONIALS } from '../data/coffeeData';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section 
      id="reviews" 
      aria-label="Customer Testimonials"
      className="py-20 bg-[#F5EFEB] text-[#241812] border-b border-[#DFD3C3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#EBE2D8] text-[#593E2B] px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Community Words</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#241812] mb-3">
            Slow Moments, Shared
          </h2>
          <p className="text-base text-[#593E2B] leading-relaxed">
            Notes from neighbours, regulars, and travelers who visit for clarity and craft.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="bg-[#FFFFFF] border border-[#DFD3C3] rounded-lg p-6 sm:p-8 flex flex-col justify-between shadow-sm relative hover:border-[#8C5E3C] transition-colors"
            >
              <div>
                {/* 5-Star Indicator - Clean Lucide icons (No emojis) */}
                <div className="flex items-center gap-1 mb-4" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#A86D3B] text-[#A86D3B]"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[#241812] leading-relaxed font-serif italic mb-6">
                  "{review.quote}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-[#F5EFEB] flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#241812]">
                    {review.name}
                  </h4>
                  <span className="text-xs text-[#7D5836]">
                    {review.role}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#9E897B] bg-[#F5EFEB] px-2 py-0.5 rounded">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
