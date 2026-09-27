import React, { useState, useEffect } from 'react';
import { MenuItem, CartItem } from '../types';
import { X, Plus, Minus, Check, Sparkles, AlertCircle } from 'lucide-react';

interface ProductModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (cartItem: CartItem) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  item,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [milkOption, setMilkOption] = useState('Whole Milk');
  const [temperature, setTemperature] = useState<'Hot' | 'Iced'>('Hot');
  const [sweetness, setSweetness] = useState('Standard');
  const [addedNotice, setAddedNotice] = useState(false);

  useEffect(() => {
    // Reset selections on item change
    setQuantity(1);
    setMilkOption(item?.allergens?.some(a => a.includes('Dairy')) ? 'Whole Milk' : 'Standard');
    setTemperature('Hot');
    setSweetness('Standard');
    setAddedNotice(false);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, onClose]);

  if (!item) return null;

  const isDrink = item.category === 'Coffee' || item.category === 'Tea' || item.category === 'Chocolate' || item.category === 'Cold Drinks';

  const handleAdd = () => {
    const newCartItem: CartItem = {
      id: `${item.id}-${Date.now()}`,
      menuItem: item,
      quantity,
      milkOption: isDrink ? milkOption : undefined,
      temperature: isDrink ? temperature : undefined,
      sweetness: isDrink ? sweetness : undefined,
    };
    onAddToCart(newCartItem);
    setAddedNotice(true);
    setTimeout(() => {
      setAddedNotice(false);
      onClose();
    }, 1200);
  };

  return (
    <div 
      id="product-details-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B120C]/80"
      onClick={onClose}
    >
      <div 
        className="bg-[#FFFFFF] border border-[#DFD3C3] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-product-modal"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-[#1B120C] text-[#FBF9F5] hover:bg-[#2C1E16] p-2 rounded-full border border-[#3A281E] focus:outline-none focus:ring-2 focus:ring-[#8C5E3C]"
          aria-label="Close product details dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <div className="relative h-64 sm:h-72 w-full bg-[#EBE2D8] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-3 left-4 bg-[#1B120C] text-[#FBF9F5] px-3 py-1 rounded text-sm font-semibold">
            ${item.price.toFixed(2)}
          </div>
          {item.origin && (
            <div className="absolute top-4 left-4 bg-[#1B120C] text-[#DFD3C3] px-3 py-1 rounded text-xs border border-[#3A281E]">
              {item.origin}
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs uppercase font-semibold text-[#8C5E3C] tracking-wider">
                {item.category}
              </span>
              {item.featured && (
                <span className="bg-[#EBE2D8] text-[#593E2B] text-[10px] font-semibold uppercase px-2 py-0.5 rounded flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  House Signature
                </span>
              )}
            </div>
            
            <h2 id="modal-product-title" className="font-serif text-2xl sm:text-3xl font-bold text-[#241812]">
              {item.name}
            </h2>
            
            <p className="text-sm text-[#593E2B] leading-relaxed mt-2">
              {item.detailedDescription || item.description}
            </p>
          </div>

          {/* Tasting Notes */}
          {item.tastingNotes && item.tastingNotes.length > 0 && (
            <div className="p-4 bg-[#F5EFEB] rounded-lg border border-[#DFD3C3]">
              <span className="text-xs uppercase font-semibold tracking-wider text-[#7D5836] block mb-2">
                Flavor Profile &amp; Sensory Notes
              </span>
              <div className="flex flex-wrap gap-2">
                {item.tastingNotes.map((note) => (
                  <span
                    key={note}
                    className="bg-[#FFFFFF] text-[#241812] text-xs font-medium px-2.5 py-1 rounded border border-[#DFD3C3]"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Customization Options (if beverage) */}
          {isDrink && (
            <div className="space-y-4 pt-2 border-t border-[#F5EFEB]">
              
              {/* Temperature */}
              <div>
                <label className="text-xs font-semibold text-[#593E2B] uppercase tracking-wider block mb-1.5">
                  Temperature
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(['Hot', 'Iced'] as const).map((temp) => (
                    <button
                      key={temp}
                      type="button"
                      onClick={() => setTemperature(temp)}
                      className={`py-2 px-3 text-xs font-medium rounded border transition-colors ${
                        temperature === temp
                          ? 'bg-[#2C1E16] text-[#FBF9F5] border-[#2C1E16]'
                          : 'bg-[#FFFFFF] text-[#593E2B] border-[#DFD3C3] hover:bg-[#F5EFEB]'
                      }`}
                    >
                      {temp}
                    </button>
                  ))}
                </div>
              </div>

              {/* Milk Option */}
              <div>
                <label className="text-xs font-semibold text-[#593E2B] uppercase tracking-wider block mb-1.5">
                  Milk Preference
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Whole Milk', 'Oat Milk', 'Almond Milk', 'No Milk'].map((milk) => (
                    <button
                      key={milk}
                      type="button"
                      onClick={() => setMilkOption(milk)}
                      className={`py-2 px-2 text-xs font-medium rounded border transition-colors ${
                        milkOption === milk
                          ? 'bg-[#2C1E16] text-[#FBF9F5] border-[#2C1E16]'
                          : 'bg-[#FFFFFF] text-[#593E2B] border-[#DFD3C3] hover:bg-[#F5EFEB]'
                      }`}
                    >
                      {milk}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sweetness */}
              <div>
                <label className="text-xs font-semibold text-[#593E2B] uppercase tracking-wider block mb-1.5">
                  Sweetness
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Unsweetened', 'Standard', 'Extra Sweet'].map((sw) => (
                    <button
                      key={sw}
                      type="button"
                      onClick={() => setSweetness(sw)}
                      className={`py-2 px-2 text-xs font-medium rounded border transition-colors ${
                        sweetness === sw
                          ? 'bg-[#2C1E16] text-[#FBF9F5] border-[#2C1E16]'
                          : 'bg-[#FFFFFF] text-[#593E2B] border-[#DFD3C3] hover:bg-[#F5EFEB]'
                      }`}
                    >
                      {sw}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* Allergens & Nutrition info */}
          <div className="flex flex-wrap items-center justify-between text-xs text-[#7D5836] pt-3 border-t border-[#F5EFEB]">
            <div className="flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-[#8C5E3C]" />
              <span>Allergens: {item.allergens && item.allergens.length > 0 ? item.allergens.join(', ') : 'None'}</span>
            </div>
            {item.calories && (
              <span>Approx. {item.calories} calories</span>
            )}
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-[#DFD3C3] flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Quantity Stepper */}
            <div className="flex items-center border border-[#DFD3C3] rounded-md bg-[#FBF9F5]">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2.5 text-[#593E2B] hover:text-[#241812] hover:bg-[#EBE2D8] transition-colors focus:outline-none"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center text-sm font-bold text-[#241812]">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="p-2.5 text-[#593E2B] hover:text-[#241812] hover:bg-[#EBE2D8] transition-colors focus:outline-none"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Add to Order Button */}
            <button
              id="confirm-add-to-cart"
              type="button"
              onClick={handleAdd}
              disabled={addedNotice}
              className={`w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#8C5E3C] ${
                addedNotice
                  ? 'bg-green-800 text-white'
                  : 'bg-[#8C5E3C] hover:bg-[#9E6E45] text-[#FBF9F5] border border-[#A86D3B]'
              }`}
            >
              {addedNotice ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Your Order!</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add to Order — ${(item.price * quantity).toFixed(2)}</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
