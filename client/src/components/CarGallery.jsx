import React, { useState } from 'react';

export default function CarGallery({ images = [], name = 'Hyundai Venue' }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const galleryImages = images.length > 0 ? images : ['/images/hyundai-venue-premium.png'];
  const activeImage = galleryImages[activeIndex] || galleryImages[0];

  return (
    <div className="space-y-4">
      {/* Featured Large View: Suitable aspect ratio showcasing the Venue beautifully */}
      <div className="relative aspect-[16/11] sm:aspect-[16/10] rounded-3xl overflow-hidden bg-white p-2.5 sm:p-3 border border-[#E7E3DA] shadow-md">
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#F0EEE7]">
          <img
            src={activeImage}
            alt={`${name} available for rent from Dwarkadhish Car Rent in Surat`}
            className="w-full h-full object-cover object-[center_35%] transition-all duration-300"
          />
        </div>
      </div>

      {/* Thumbnails if multiple images exist */}
      {galleryImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
          {galleryImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                activeIndex === idx
                  ? 'border-[#C9A85C] scale-105 shadow-sm'
                  : 'border-[#E7E3DA] opacity-70 hover:opacity-100 hover:border-[#C9A85C]/60'
              }`}
            >
              <img
                src={img}
                alt={`${name} view ${idx + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
