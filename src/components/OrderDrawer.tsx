import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, Clock, ShieldCheck, CheckCircle, ArrowRight, Coffee } from 'lucide-react';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onOpenPrivacy: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOpenPrivacy,
}) => {
  const [pickupTime, setPickupTime] = useState('15 mins');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [paymentOption, setPaymentOption] = useState<'counter' | 'applepay'>('counter');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState<{
    orderId: string;
    pickupTime: string;
    total: number;
    itemsCount: number;
  } | null>(null);
  const [formError, setFormError] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.menuItem.price * item.quantity,
    0
  );
  const tax = subtotal * 0.085; // 8.5% local sales tax
  const total = subtotal + tax;

  // Input Sanitization & Validation (Security requirement)
  const sanitizeInput = (text: string) => {
    return text.replace(/[<>'"/\\;]/g, '').trim();
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    const cleanName = sanitizeInput(customerName);
    const cleanPhone = sanitizeInput(customerPhone).replace(/\D/g, '');

    if (!cleanName || cleanName.length < 2) {
      setFormError('Please enter a valid pickup name (at least 2 characters).');
      return;
    }
    if (!cleanPhone || cleanPhone.length < 7 || cleanPhone.length > 15) {
      setFormError('Please enter a valid phone number for order status SMS.');
      return;
    }

    setIsSubmitting(true);
    // Simulate confidential processing without transmitting raw secrets
    setTimeout(() => {
      const generatedId = `RC-${Math.floor(1000 + Math.random() * 9000)}`;
      setOrderConfirmation({
        orderId: generatedId,
        pickupTime,
        total,
        itemsCount: cartItems.reduce((acc, i) => acc + i.quantity, 0),
      });
      setIsSubmitting(false);
      onClearCart();
    }, 600);
  };

  const handleCloseConfirmation = () => {
    setOrderConfirmation(null);
    setCustomerName('');
    setCustomerPhone('');
    onClose();
  };

  return (
    <div 
      id="order-drawer-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-drawer-title"
      className="fixed inset-0 z-50 flex justify-end bg-[#1B120C]/70"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-lg bg-[#FFFFFF] h-full shadow-2xl flex flex-col border-l border-[#DFD3C3] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Drawer Header */}
        <div className="p-5 bg-[#1B120C] text-[#FBF9F5] border-b border-[#2C1E16] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Coffee className="w-5 h-5 text-[#C4976E]" />
            <h2 id="order-drawer-title" className="font-serif text-lg font-bold text-[#FBF9F5]">
              {orderConfirmation ? 'Order Confirmed' : 'Your Coffee Order'}
            </h2>
          </div>
          <button
            id="close-order-drawer"
            type="button"
            onClick={orderConfirmation ? handleCloseConfirmation : onClose}
            className="p-1.5 rounded text-[#DFD3C3] hover:text-white hover:bg-[#2C1E16] transition-colors focus:outline-none focus:ring-1 focus:ring-[#8C5E3C]"
            aria-label="Close order drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* If Order is Placed: Confirmation Screen */}
        {orderConfirmation ? (
          <div className="p-8 flex-1 flex flex-col items-center justify-center text-center space-y-6 bg-[#FBF9F5]">
            <div className="w-16 h-16 rounded-full bg-[#EBE2D8] border border-[#C4976E] flex items-center justify-center text-[#8C5E3C]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#7D5836] font-mono block mb-1">
                Order Reference
              </span>
              <h3 className="font-mono text-3xl font-bold text-[#241812] tracking-wider">
                {orderConfirmation.orderId}
              </h3>
            </div>

            <div className="bg-[#FFFFFF] border border-[#DFD3C3] rounded-lg p-5 w-full text-left space-y-3 shadow-sm">
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#593E2B]">Estimated Ready In:</span>
                <span className="font-bold text-[#241812]">{orderConfirmation.pickupTime}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#593E2B]">Pickup Location:</span>
                <span className="font-medium text-[#241812]">42 Artisan Way</span>
              </div>
              <div className="flex justify-between items-center text-sm pt-2 border-t border-[#F5EFEB]">
                <span className="text-[#593E2B]">Total ({orderConfirmation.itemsCount} items):</span>
                <span className="font-bold text-[#241812]">${orderConfirmation.total.toFixed(2)}</span>
              </div>
            </div>

            <p className="text-xs text-[#7D5836] leading-relaxed max-w-sm">
              Your barista has received the ticket. Payment will be processed upon pickup at the counter or via contactless terminal.
            </p>

            <button
              type="button"
              onClick={handleCloseConfirmation}
              className="w-full bg-[#2C1E16] hover:bg-[#3A281E] text-[#FBF9F5] py-3 rounded-md text-sm font-medium transition-colors border border-[#593E2B]"
            >
              Done &amp; Return to Menu
            </button>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cartItems.length === 0 ? (
                <div className="py-16 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#F5EFEB] border border-[#DFD3C3] mx-auto flex items-center justify-center text-[#8C5E3C]">
                    <Coffee className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#241812]">
                    Your order is empty
                  </h3>
                  <p className="text-xs text-[#593E2B] max-w-xs mx-auto">
                    Explore our single-origin coffees, artisan teas, and house pastries to add items to your tray.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 p-3 bg-[#FBF9F5] border border-[#DFD3C3] rounded-lg"
                    >
                      <img
                        src={item.menuItem.image}
                        alt={item.menuItem.name}
                        className="w-16 h-16 object-cover rounded-md bg-[#EBE2D8] shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between">
                          <h4 className="font-serif font-bold text-sm text-[#241812] truncate">
                            {item.menuItem.name}
                          </h4>
                          <span className="font-mono text-xs font-semibold text-[#241812] ml-2">
                            ${(item.menuItem.price * item.quantity).toFixed(2)}
                          </span>
                        </div>

                        {/* Modifiers info */}
                        <div className="text-[11px] text-[#7D5836] flex flex-wrap gap-1 mt-0.5">
                          {item.temperature && <span>{item.temperature}</span>}
                          {item.milkOption && <span>· {item.milkOption}</span>}
                          {item.sweetness && item.sweetness !== 'Standard' && (
                            <span>· {item.sweetness}</span>
                          )}
                        </div>

                        {/* Quantity controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 rounded text-[#593E2B] hover:bg-[#EBE2D8] border border-[#DFD3C3]"
                            aria-label={`Decrease quantity of ${item.menuItem.name}`}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold w-5 text-center text-[#241812]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 rounded text-[#593E2B] hover:bg-[#EBE2D8] border border-[#DFD3C3]"
                            aria-label={`Increase quantity of ${item.menuItem.name}`}
                          >
                            <Plus className="w-3 h-3" />
                          </button>

                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.id)}
                            className="ml-auto text-[#8C5E3C] hover:text-red-700 p-1"
                            aria-label={`Remove ${item.menuItem.name}`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Checkout Form */}
              {cartItems.length > 0 && (
                <form id="order-form" onSubmit={handlePlaceOrder} className="pt-4 border-t border-[#DFD3C3] space-y-4">
                  
                  {/* Pickup Scheduling */}
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#7D5836] block mb-1.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#8C5E3C]" />
                      <span>Estimated Pickup Time</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['15 mins', '30 mins', '45 mins'].map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setPickupTime(time)}
                          className={`py-2 text-xs font-medium rounded border transition-colors ${
                            pickupTime === time
                              ? 'bg-[#2C1E16] text-[#FBF9F5] border-[#2C1E16]'
                              : 'bg-[#FBF9F5] text-[#593E2B] border-[#DFD3C3] hover:bg-[#EBE2D8]'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Customer Information (Minimal, Confidential, Validated) */}
                  <div className="space-y-2.5">
                    <div>
                      <label htmlFor="customer-name" className="text-xs font-semibold text-[#593E2B] block mb-1">
                        Your Name (for barista cup label)
                      </label>
                      <input
                        id="customer-name"
                        type="text"
                        required
                        maxLength={50}
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="e.g. Jordan"
                        className="w-full text-xs sm:text-sm px-3 py-2 border border-[#DFD3C3] rounded-md bg-[#FBF9F5] text-[#241812] focus:outline-none focus:ring-2 focus:ring-[#8C5E3C]"
                      />
                    </div>

                    <div>
                      <label htmlFor="customer-phone" className="text-xs font-semibold text-[#593E2B] block mb-1">
                        Phone Number (for pickup ready SMS)
                      </label>
                      <input
                        id="customer-phone"
                        type="tel"
                        required
                        maxLength={15}
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="e.g. 0114488963"
                        className="w-full text-xs sm:text-sm px-3 py-2 border border-[#DFD3C3] rounded-md bg-[#FBF9F5] text-[#241812] focus:outline-none focus:ring-2 focus:ring-[#8C5E3C]"
                      />
                    </div>
                  </div>

                  {/* Payment Method Option */}
                  <div>
                    <span className="text-xs font-semibold text-[#593E2B] block mb-1.5">
                      Payment Choice
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <button
                        type="button"
                        onClick={() => setPaymentOption('counter')}
                        className={`p-2.5 rounded border text-left flex flex-col gap-1 transition-colors ${
                          paymentOption === 'counter'
                            ? 'bg-[#2C1E16] text-[#FBF9F5] border-[#2C1E16]'
                            : 'bg-[#FBF9F5] text-[#593E2B] border-[#DFD3C3]'
                        }`}
                      >
                        <span className="font-bold">Pay at Counter</span>
                        <span className={`text-[10px] ${paymentOption === 'counter' ? 'text-[#DFD3C3]' : 'text-[#7D5836]'}`}>
                          Card or cash upon pickup
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentOption('applepay')}
                        className={`p-2.5 rounded border text-left flex flex-col gap-1 transition-colors ${
                          paymentOption === 'applepay'
                            ? 'bg-[#2C1E16] text-[#FBF9F5] border-[#2C1E16]'
                            : 'bg-[#FBF9F5] text-[#593E2B] border-[#DFD3C3]'
                        }`}
                      >
                        <span className="font-bold">Contactless Express</span>
                        <span className={`text-[10px] ${paymentOption === 'applepay' ? 'text-[#DFD3C3]' : 'text-[#7D5836]'}`}>
                          Scan terminal on arrival
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Error Notification */}
                  {formError && (
                    <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded">
                      {formError}
                    </div>
                  )}

                  {/* Privacy & Security reassurance note */}
                  <div className="flex items-start gap-2 text-[11px] text-[#7D5836] p-2 bg-[#F5EFEB] rounded border border-[#DFD3C3]">
                    <ShieldCheck className="w-4 h-4 text-[#8C5E3C] shrink-0 mt-0.5" />
                    <span>
                      Zero card data stored. Information is collected solely for order preparation and never shared. Read our{' '}
                      <button
                        type="button"
                        onClick={onOpenPrivacy}
                        className="underline text-[#8C5E3C] font-semibold"
                      >
                        Privacy Policy
                      </button>.
                    </span>
                  </div>

                </form>
              )}
            </div>

            {/* Bottom Summary & Submit */}
            {cartItems.length > 0 && (
              <div className="p-5 bg-[#F5EFEB] border-t border-[#DFD3C3] space-y-3">
                <div className="space-y-1 text-xs text-[#593E2B]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-mono">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (8.5%)</span>
                    <span className="font-mono">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-[#241812] pt-1.5 border-t border-[#DFD3C3]">
                    <span>Total Due</span>
                    <span className="font-mono text-base">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  id="submit-pickup-order"
                  type="submit"
                  form="order-form"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#8C5E3C] hover:bg-[#9E6E45] text-[#FBF9F5] py-3.5 rounded-md text-sm font-semibold transition-colors border border-[#A86D3B] focus:outline-none focus:ring-2 focus:ring-[#DFD3C3] disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Sending Ticket to Barista...</span>
                  ) : (
                    <>
                      <span>Place Pickup Order (${total.toFixed(2)})</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
};
