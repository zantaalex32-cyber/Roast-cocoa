import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data/coffeeData';
import { Camera, X } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{ url: string; title: string; caption: string } | null>(null);

  return (
    <section 
      id="gallery" 
      aria-label="Coffee Shop Gallery"
      className="py-20 bg-[#FBF9F5] text-[#241812] border-b border-[#EBE2D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#EBE2D8] text-[#593E2B] px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>The Space &amp; Atmosphere</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#241812] mb-3">
            Glimpses of Roast &amp; Cocoa
          </h2>
          <p className="text-base text-[#593E2B] leading-relaxed">
            Designed with natural ash wood, honest brick, and quiet acoustics for working, reading, and savoring.
          </p>
        </div>

        {/* 4 Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_PHOTOS.map((photo, i) => (
            <div
              key={i}
              id={`gallery-item-${i}`}
              onClick={() => setSelectedPhoto(photo)}
              className="group cursor-pointer bg-[#FFFFFF] border border-[#DFD3C3] rounded-lg overflow-hidden shadow-sm hover:border-[#8C5E3C] transition-colors"
            >
              <div className="relative h-64 overflow-hidden bg-[#EBE2D8]">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#1B120C]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-medium text-[#FBF9F5] bg-[#1B120C] px-2.5 py-1 rounded shadow">
                    View Photo
                  </span>
                </div>
              </div>
              <div className="p-4 bg-[#FFFFFF]">
                <h3 className="font-serif font-bold text-sm text-[#241812] mb-0.5">
                  {photo.title}
                </h3>
                <p className="text-xs text-[#7D5836]">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          id="gallery-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B120C]/80"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="bg-[#1B120C] border border-[#3A281E] rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 z-10 bg-[#2C1E16] text-[#DFD3C3] hover:text-white p-2 rounded-full border border-[#593E2B]"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="w-full max-h-[70vh] object-cover rounded-lg mb-3"
            />
            <div className="p-2 text-left">
              <h4 className="font-serif text-lg font-bold text-[#FBF9F5]">{selectedPhoto.title}</h4>
              <p className="text-sm text-[#DFD3C3]">{selectedPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
