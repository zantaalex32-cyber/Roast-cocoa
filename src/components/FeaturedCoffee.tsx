import React from 'react';
import { MenuItem } from '../types';
import { SIGNATURE_DRINKS } from '../data/coffeeData';
import { Plus, Eye, Sparkles } from 'lucide-react';

interface FeaturedCoffeeProps {
  onSelectProduct: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

export const FeaturedCoffee: React.FC<FeaturedCoffeeProps> = ({
  onSelectProduct,
  onQuickAdd,
}) => {
  return (
    <section 
      id="featured" 
      aria-label="Signature Drinks"
      className="py-20 bg-[#FBF9F5] text-[#241812] border-b border-[#EBE2D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#EBE2D8] text-[#593E2B] px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#8C5E3C]" />
            Signature Selections
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#241812] mb-3">
            Crafted for the Purest Taste
          </h2>
          <p className="text-base text-[#593E2B] font-normal leading-relaxed">
            Three distinct expressions of our coffee and cacao philosophy. Ground to order and balanced with precision.
          </p>
        </div>

        {/* 3 Drink Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SIGNATURE_DRINKS.map((drink) => (
            <div
              key={drink.id}
              id={`featured-card-${drink.name.toLowerCase()}`}
              className="group bg-[#FFFFFF] border border-[#DFD3C3] rounded-lg overflow-hidden flex flex-col transition-all duration-200 hover:border-[#8C5E3C] shadow-sm"
            >
              {/* Image Container with realistic photography */}
              <div 
                className="relative h-64 bg-[#F5EFEB] overflow-hidden cursor-pointer"
                onClick={() => onSelectProduct(drink)}
              >
                <img
                  src={drink.image}
                  alt={`${drink.name} served in artisan ceramic ware`}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-[#1B120C] text-[#FBF9F5] text-sm font-semibold px-2.5 py-1 rounded">
                  ${drink.price.toFixed(2)}
                </div>

                {/* Quick preview hover badge */}
                <div className="absolute inset-0 bg-[#1B120C]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-[#1B120C] text-[#FBF9F5] text-xs font-medium px-3 py-1.5 rounded flex items-center gap-1.5 shadow">
                    <Eye className="w-3.5 h-3.5" />
                    View Details
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-xl font-bold text-[#241812] group-hover:text-[#8C5E3C] transition-colors">
                      {drink.name}
                    </h3>
                  </div>

                  {/* Tasting Note Chips */}
                  {drink.tastingNotes && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {drink.tastingNotes.map((note) => (
                        <span
                          key={note}
                          className="bg-[#F5EFEB] text-[#593E2B] text-[11px] font-medium px-2 py-0.5 rounded border border-[#EBE2D8]"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-sm text-[#593E2B] leading-relaxed mb-4">
                    {drink.description}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-[#F5EFEB] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectProduct(drink)}
                    className="text-xs font-semibold text-[#8C5E3C] hover:text-[#593E2B] underline-offset-4 hover:underline py-1 focus:outline-none focus:ring-1 focus:ring-[#8C5E3C] rounded"
                    aria-label={`Learn more about ${drink.name}`}
                  >
                    View Story &amp; Origin
                  </button>

                  <button
                    id={`add-drink-${drink.name.toLowerCase()}`}
                    type="button"
                    onClick={() => onQuickAdd(drink)}
                    className="inline-flex items-center gap-1.5 bg-[#2C1E16] hover:bg-[#3A281E] text-[#FBF9F5] px-3.5 py-2 rounded text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#8C5E3C]"
                    aria-label={`Add ${drink.name} to order`}
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add to Order</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
