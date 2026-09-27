import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Check, Copy } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const address = "42 Artisan Way, Central Quarter";
  const phone = "0114488963";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGetDirections = () => {
    // Open directions in maps query
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://maps.google.com/?q=${encodedAddress}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="location" 
      aria-label="Location and Hours"
      className="py-20 md:py-28 bg-[#F5EFEB] text-[#241812] border-b border-[#DFD3C3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#EBE2D8] text-[#593E2B] px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Find Our Sanctuary</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#241812] mb-3">
            Visit Roast &amp; Cocoa
          </h2>
          <p className="text-base text-[#593E2B] leading-relaxed">
            Nestled on the quiet corner of Artisan Way. Bicycles welcome, dogs warmly greeted on the outdoor terrace.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#DFD3C3] rounded-xl p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-8">
              
              {/* Address Block */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#F5EFEB] border border-[#DFD3C3] flex items-center justify-center text-[#8C5E3C] shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs uppercase tracking-wider text-[#7D5836] font-semibold block mb-1">
                    Address
                  </span>
                  <p className="font-serif text-lg font-bold text-[#241812] mb-1">
                    {address}
                  </p>
                  <p className="text-xs text-[#593E2B] mb-2">
                    Corner of 4th Street, historic heritage district
                  </p>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1 text-xs text-[#8C5E3C] hover:text-[#593E2B] transition-colors focus:outline-none focus:ring-1 focus:ring-[#8C5E3C] rounded py-0.5 px-1 -ml-1"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-700" />
                        <span className="text-green-800 font-medium">Copied to clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Hours Block */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#F5EFEB] border border-[#DFD3C3] flex items-center justify-center text-[#8C5E3C] shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#7D5836] font-semibold block mb-1">
                    Opening Hours
                  </span>
                  <div className="space-y-1.5 text-sm text-[#241812]">
                    <div className="flex items-center justify-between gap-6">
                      <span className="font-medium text-[#593E2B]">Monday – Friday</span>
                      <span className="font-mono text-xs font-semibold">7:00 AM – 7:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between gap-6">
                      <span className="font-medium text-[#593E2B]">Saturday – Sunday</span>
                      <span className="font-mono text-xs font-semibold">8:00 AM – 8:00 PM</span>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-[#7D5836]">
                    Kitchen and pastry counter open all day
                  </div>
                </div>
              </div>

              {/* Phone Block with clickable tel: link */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#F5EFEB] border border-[#DFD3C3] flex items-center justify-center text-[#8C5E3C] shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#7D5836] font-semibold block mb-1">
                    Telephone
                  </span>
                  <a
                    id="location-phone-link"
                    href={`tel:${phone}`}
                    className="font-mono text-lg font-bold text-[#8C5E3C] hover:text-[#593E2B] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8C5E3C] rounded inline-block"
                    aria-label={`Call Roast & Cocoa at ${phone}`}
                  >
                    {phone}
                  </a>
                  <p className="text-xs text-[#593E2B] mt-0.5">
                    Click to call for table holds &amp; bean reservations
                  </p>
                </div>
              </div>

            </div>

            {/* Directions Action */}
            <div className="pt-8 mt-6 border-t border-[#F5EFEB]">
              <button
                id="get-directions-btn"
                type="button"
                onClick={handleGetDirections}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#2C1E16] hover:bg-[#3A281E] text-[#FBF9F5] py-3.5 px-6 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#8C5E3C]"
              >
                <Navigation className="w-4 h-4 text-[#C4976E]" />
                <span>Get Directions</span>
              </button>
            </div>
          </div>

          {/* Right Map Area (Architectural & Graphic representation with solid colors) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#DFD3C3] rounded-xl overflow-hidden shadow-sm flex flex-col">
            
            {/* Visual Map Canvas / Area */}
            <div className="relative h-72 sm:h-96 bg-[#EBE2D8] border-b border-[#DFD3C3] overflow-hidden flex items-center justify-center">
              
              {/* Stylized Street Grid (Solid lines and geometric clarity) */}
              <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" aria-hidden="true">
                <defs>
                  <pattern id="street-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#DFD3C3" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#street-grid)" />
              </svg>

              {/* Main Arterials */}
              <div className="absolute top-1/2 left-0 right-0 h-10 bg-[#DFD3C3] -translate-y-1/2 border-y border-[#C4976E]/50 flex items-center px-4">
                <span className="text-[10px] font-mono tracking-widest text-[#593E2B] font-semibold">ARTISAN WAY</span>
              </div>
              <div className="absolute top-0 bottom-0 left-1/2 w-10 bg-[#DFD3C3] -translate-x-1/2 border-x border-[#C4976E]/50 flex items-center justify-center">
                <span className="text-[10px] font-mono tracking-widest text-[#593E2B] font-semibold rotate-90 whitespace-nowrap">4TH STREET</span>
              </div>

              {/* Central Pin Card */}
              <div className="relative z-10 bg-[#1B120C] text-[#FBF9F5] border border-[#3A281E] rounded-lg p-3.5 shadow-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#8C5E3C] flex items-center justify-center text-white shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold font-serif block text-[#FBF9F5]">Roast &amp; Cocoa</span>
                  <span className="text-[11px] text-[#DFD3C3]">42 Artisan Way</span>
                </div>
              </div>

              {/* Surrounding Landmark Markers */}
              <div className="absolute top-6 left-6 bg-[#FFFFFF] border border-[#DFD3C3] px-2.5 py-1 rounded text-[11px] font-medium text-[#593E2B]">
                Heritage Park (2 min walk)
              </div>
              <div className="absolute bottom-6 right-6 bg-[#FFFFFF] border border-[#DFD3C3] px-2.5 py-1 rounded text-[11px] font-medium text-[#593E2B]">
                Central Metro Station (4 min walk)
              </div>
            </div>

            {/* Bottom Map Controls Banner */}
            <div className="p-4 bg-[#FBF9F5] flex flex-wrap items-center justify-between gap-3 text-xs text-[#593E2B]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-600 inline-block" />
                <span className="font-medium text-[#241812]">Currently Open &amp; Seating Available</span>
              </div>
              <button
                type="button"
                onClick={handleGetDirections}
                className="font-semibold text-[#8C5E3C] hover:text-[#241812] flex items-center gap-1 focus:outline-none focus:ring-1 focus:ring-[#8C5E3C]"
              >
                <span>Open in Google Maps</span>
                <Navigation className="w-3 h-3" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
