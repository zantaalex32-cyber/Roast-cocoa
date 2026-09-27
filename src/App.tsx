import React, { useState, useEffect } from 'react';
import { MenuItem, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCoffee } from './components/FeaturedCoffee';
import { OurStory } from './components/OurStory';
import { MenuSection } from './components/MenuSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Testimonials } from './components/Testimonials';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { OrderDrawer } from './components/OrderDrawer';
import { StoryModal } from './components/StoryModal';
import { PrivacyModal } from './components/PrivacyModal';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('roast_cocoa_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('roast_cocoa_cart', JSON.stringify(cartItems));
    } catch {
      // Storage quota or sandboxed fallback
    }
  }, [cartItems]);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (newItem: CartItem) => {
    setCartItems((prev) => {
      // If same item with identical modifiers exists, increase quantity
      const existingIdx = prev.findIndex(
        (i) =>
          i.menuItem.id === newItem.menuItem.id &&
          i.milkOption === newItem.milkOption &&
          i.temperature === newItem.temperature &&
          i.sweetness === newItem.sweetness
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += newItem.quantity;
        return updated;
      }
      return [...prev, newItem];
    });
  };

  const handleQuickAdd = (menuItem: MenuItem) => {
    const isDrink =
      menuItem.category === 'Coffee' ||
      menuItem.category === 'Tea' ||
      menuItem.category === 'Chocolate' ||
      menuItem.category === 'Cold Drinks';

    const newItem: CartItem = {
      id: `${menuItem.id}-${Date.now()}`,
      menuItem,
      quantity: 1,
      milkOption: isDrink ? 'Whole Milk' : undefined,
      temperature: isDrink ? 'Hot' : undefined,
      sweetness: isDrink ? 'Standard' : undefined,
    };
    handleAddToCart(newItem);
    setIsOrderDrawerOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#241812] flex flex-col selection:bg-[#7D5836] selection:text-[#FBF9F5]">
      
      {/* Sticky Main Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsOrderDrawerOpen(true)}
      />

      {/* Main Page Flow with Natural Scrolling */}
      <main className="flex-1">
        
        {/* 1. Above-the-fold Hero Section */}
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onVisitUs={() => scrollToSection('location')}
        />

        {/* 2. Signature Drinks (Espresso, Cappuccino, Mocha) */}
        <FeaturedCoffee
          onSelectProduct={(item) => setSelectedProduct(item)}
          onQuickAdd={handleQuickAdd}
        />

        {/* 3. Our Brand Story & Sourcing Philosophy */}
        <OurStory
          onOpenStoryModal={() => setIsStoryModalOpen(true)}
        />

        {/* 4. Complete Interactive Menu Preview */}
        <MenuSection
          onSelectProduct={(item) => setSelectedProduct(item)}
          onQuickAdd={handleQuickAdd}
        />

        {/* 5. Coffee Experience Section (Beans, Brewing, Barista, Cup) */}
        <ExperienceSection />

        {/* 6. Authentic Testimonials */}
        <Testimonials />

        {/* 7. Atmosphere & Cafe Space Gallery */}
        <GallerySection />

        {/* 8. Location, Hours, Clickable Phone & Directions */}
        <LocationSection />

        {/* 9. Final Call to Action */}
        <FinalCta
          onVisitClick={() => scrollToSection('location')}
        />
      </main>

      {/* 10. Comprehensive Footer */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
        onOpenStory={() => setIsStoryModalOpen(true)}
      />

      {/* Detailed Product Information Dialog */}
      <ProductModal
        item={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Slide-in Order Interface */}
      <OrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
      />

      {/* Expanded Brand Story Dialog */}
      <StoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
      />

      {/* User Data Security & Privacy Policy Dialog */}
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

    </div>
  );
}
