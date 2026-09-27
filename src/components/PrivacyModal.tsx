import React, { useEffect } from 'react';
import { X, ShieldCheck, Lock, EyeOff, FileText, CheckCircle2 } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
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
      id="privacy-policy-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B120C]/80"
      onClick={onClose}
    >
      <div 
        className="bg-[#FFFFFF] border border-[#DFD3C3] rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-privacy-modal"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-[#1B120C] text-[#FBF9F5] hover:bg-[#2C1E16] p-2 rounded-full border border-[#3A281E] focus:outline-none focus:ring-2 focus:ring-[#8C5E3C]"
          aria-label="Close privacy policy dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-[#1B120C] text-[#FBF9F5] border-b border-[#2C1E16]">
          <div className="flex items-center gap-2 text-[#C4976E] text-xs uppercase font-mono tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Confidentiality &amp; Compliance</span>
          </div>
          <h2 id="privacy-modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-[#FBF9F5]">
            Privacy Policy &amp; Data Security
          </h2>
          <p className="text-xs text-[#DFD3C3] mt-1">
            Last Updated: September 2026 · Compliant with GDPR &amp; CCPA Principles
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 text-[#241812] text-sm leading-relaxed">
          
          <div className="p-4 bg-[#F5EFEB] border border-[#DFD3C3] rounded-lg space-y-1">
            <h3 className="font-serif font-bold text-base text-[#241812]">
              Our Core Data Pledge
            </h3>
            <p className="text-xs text-[#593E2B]">
              At Roast &amp; Cocoa, your personal information is treated as strictly confidential. We collect only the absolute minimum data required to prepare your beverage and hold your table. We never sell, monetize, or broker customer data.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#7D5836] flex items-center gap-2">
              <EyeOff className="w-4 h-4 text-[#8C5E3C]" />
              1. Data Minimization &amp; What We Collect
            </h4>
            <p className="text-xs sm:text-sm text-[#593E2B]">
              When you place a pickup order or inquiry with us:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-[#593E2B]">
              <li><strong>Pickup Name:</strong> Used solely by baristas to label your ceramic mug or cup.</li>
              <li><strong>Contact Telephone:</strong> Used exclusively to deliver your one-time SMS notification when your order is poured and ready.</li>
              <li><strong>Order Preferences:</strong> Item selections, milk preference, and temperature.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#7D5836] flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#8C5E3C]" />
              2. Payment &amp; Financial Security
            </h4>
            <p className="text-xs sm:text-sm text-[#593E2B]">
              We do not collect, process, or store raw credit card numbers, CVVs, or bank credentials. All financial transactions occur either in-person at our physical counter terminal using PCI-DSS Level 1 certified payment processors, or through tokenized end-to-end encrypted contactless gateways.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#7D5836] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#8C5E3C]" />
              3. Protection Against Attacks &amp; Input Validation
            </h4>
            <p className="text-xs sm:text-sm text-[#593E2B]">
              All inputs on this website undergo client and server validation and sanitization to defend against Cross-Site Scripting (XSS), SQL/NoSQL injections, spam bots, and unauthorized data extraction. No sensitive credentials or API keys are exposed within frontend scripts.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#7D5836] flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#8C5E3C]" />
              4. User Rights Under GDPR &amp; CCPA
            </h4>
            <p className="text-xs sm:text-sm text-[#593E2B]">
              You have the right to request the inspection, rectification, or complete deletion of any submitted order ticket or contact record at any time. Because we retain zero permanent customer tracking logs, transient pickup records expire automatically after completion.
            </p>
            <div className="text-xs text-[#593E2B] bg-[#FBF9F5] p-3 rounded border border-[#DFD3C3]">
              To exercise any privacy rights, reach our Data Privacy Officer via phone at{' '}
              <a href="tel:0114488963" className="font-bold text-[#8C5E3C] underline">
                0114488963
              </a>{' '}
              or in person at 42 Artisan Way.
            </div>
          </div>

          <div className="pt-4 border-t border-[#DFD3C3] flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-[#2C1E16] hover:bg-[#3A281E] text-[#FBF9F5] px-6 py-2.5 rounded-md text-sm font-medium transition-colors border border-[#593E2B]"
            >
              I Understand
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
