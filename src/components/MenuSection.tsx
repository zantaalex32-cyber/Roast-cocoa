import React, { useState } from 'react';
import { MenuCategory, MenuItem } from '../types';
import { FULL_MENU } from '../data/coffeeData';
import { Plus, Eye, Sparkles } from 'lucide-react';

interface MenuSectionProps {
  onSelectProduct: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

const CATEGORIES: MenuCategory[] = ['Coffee', 'Tea', 'Chocolate', 'Pastries', 'Cold Drinks'];

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectProduct,
  onQuickAdd,
}) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('Coffee');

  const filteredItems = FULL_MENU.filter((item) => item.category === activeCategory);

  return (
    <section 
      id="menu" 
      aria-label="Full Drink and Pastry Menu"
      className="py-20 md:py-28 bg-[#FBF9F5] text-[#241812] border-b border-[#EBE2D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#EBE2D8] text-[#593E2B] px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Daily Offerings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#241812] mb-3">
            The Daily Menu
          </h2>
          <p className="text-base text-[#593E2B] leading-relaxed">
            Every beverage is made from seasonal farm harvest, weighed to the tenth of a gram, and served with intention.
          </p>
        </div>

        {/* Interactive Category Tabs */}
        <div className="flex justify-center mb-12">
          <div 
            role="tablist" 
            aria-label="Menu categories"
            className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-[#F5EFEB] rounded-lg border border-[#DFD3C3]"
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  id={`tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#8C5E3C] whitespace-nowrap ${
                    isActive
                      ? 'bg-[#2C1E16] text-[#FBF9F5] shadow-sm'
                      : 'text-[#593E2B] hover:text-[#241812] hover:bg-[#EBE2D8]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`menu-item-${item.id}`}
              className="bg-[#FFFFFF] border border-[#DFD3C3] rounded-lg p-5 flex flex-col justify-between hover:border-[#8C5E3C] transition-colors shadow-sm group"
            >
              <div>
                {/* Photo & Price Header */}
                <div 
                  className="relative h-44 mb-4 rounded-md overflow-hidden bg-[#F5EFEB] cursor-pointer"
                  onClick={() => onSelectProduct(item)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-2.5 right-2.5 bg-[#1B120C] text-[#FBF9F5] text-xs font-semibold px-2.5 py-1 rounded">
                    ${item.price.toFixed(2)}
                  </span>
                  {item.featured && (
                    <span className="absolute top-2.5 left-2.5 bg-[#8C5E3C] text-[#FBF9F5] text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Item Details */}
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 
                    onClick={() => onSelectProduct(item)}
                    className="font-serif text-lg font-bold text-[#241812] group-hover:text-[#8C5E3C] transition-colors cursor-pointer"
                  >
                    {item.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#593E2B] line-clamp-2 leading-relaxed mb-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#F5EFEB] text-[#593E2B] text-[10px] font-medium px-2 py-0.5 rounded border border-[#EBE2D8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-[#F5EFEB] flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => onSelectProduct(item)}
                  className="text-xs text-[#8C5E3C] hover:text-[#593E2B] font-medium flex items-center gap-1 focus:outline-none focus:ring-1 focus:ring-[#8C5E3C] rounded py-1"
                  aria-label={`View full details for ${item.name}`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Details</span>
                </button>

                <button
                  type="button"
                  onClick={() => onQuickAdd(item)}
                  className="inline-flex items-center gap-1.5 bg-[#2C1E16] hover:bg-[#3A281E] text-[#FBF9F5] px-3 py-1.5 rounded text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#8C5E3C]"
                  aria-label={`Add ${item.name} to order`}
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dietary / Origin Transparency Note */}
        <div className="mt-12 p-4 bg-[#F5EFEB] border border-[#DFD3C3] rounded-lg text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#593E2B] leading-relaxed">
            <span className="font-semibold text-[#241812]">Plant Milk Options:</span> Minor Figures Oat Milk, House Almond Cashew Blend, or Organic Whole Cream available on request. All syrups and cacao ganaches prepared in-house.
          </p>
        </div>

      </div>
    </section>
  );
};
