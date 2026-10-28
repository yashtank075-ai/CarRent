import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Fuel, Gauge, ArrowRight, Info, AlertCircle } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import { getCarWhatsAppLink } from '../utils/whatsapp';

export default function CarCard({ car }) {
  if (!car) return null;

  const {
    name,
    category,
    images = [],
    rentalPackages = [],
    specs = {},
    slug,
    isDemo = false,
  } = car;

  const defaultImage = images[0] || '/images/hyundai-venue-premium.png';

  const hasPackages = rentalPackages && rentalPackages.length > 0;
  const whatsappUrl = getCarWhatsAppLink(car);

  return (
    <div className="group relative flex flex-col h-full w-full max-w-full rounded-2xl sm:rounded-3xl bg-white border border-[#E7E3DA] overflow-hidden hover:border-[#C9A85C] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#17243A]/6 min-w-0">
      {/* Sample/Demo Badge if explicitly marked */}
      {isDemo && (
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 bg-amber-500 text-white font-bold text-[10px] sm:text-xs uppercase px-2.5 sm:px-3 py-1 rounded-md shadow-md flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>Demo Layout</span>
        </div>
      )}

      {/* Image container: consistent 4:3 aspect ratio, object-cover with top-centered alignment */}
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#F0EEE7]">
        <img
          src={defaultImage}
          alt={`${name} available for rent from Dwarkadhish Car Rent in Surat`}
          loading="lazy"
          className="w-full h-full object-cover object-[center_35%] transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 pointer-events-none" />
        
        {/* Category tag */}
        {category && (
          <span className="absolute top-3 sm:top-4 right-3 sm:right-4 text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#17243A] border border-[#E7E3DA] shadow-xs">
            {category}
          </span>
        )}
      </div>

      {/* Content area with responsive padding - flex-1 flex flex-col justify-between to anchor footer buttons */}
      <div className="p-4 sm:p-6 lg:p-7 flex-1 flex flex-col justify-between min-w-0">
        <div className="flex-1 flex flex-col justify-between min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2 sm:mb-3">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#17243A] group-hover:text-[#C9A85C] transition-colors truncate">
              {name}
            </h3>
          </div>

          {/* Specs list with readable font sizes & high contrast icons */}
          {(specs.seating || specs.fuelType || specs.transmission) && (
            <div className="grid grid-cols-2 gap-2 sm:gap-3 py-3 border-y border-[#E7E3DA] my-3 sm:my-4 text-xs sm:text-sm text-[#17243A]">
              {specs.seating && (
                <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#F8F6F0] flex items-center justify-center text-[#C9A85C] shrink-0 border border-[#E7E3DA]">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium text-[#17243A] truncate">{specs.seating}</span>
                </div>
              )}
              {specs.fuelType && (
                <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#F8F6F0] flex items-center justify-center text-[#C9A85C] shrink-0 border border-[#E7E3DA]">
                    <Fuel className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium text-[#17243A] truncate">{specs.fuelType}</span>
                </div>
              )}
              {specs.transmission && (
                <div className="flex items-center gap-2 sm:gap-2.5 col-span-2 pt-0.5 min-w-0">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#F8F6F0] flex items-center justify-center text-[#C9A85C] shrink-0 border border-[#E7E3DA]">
                    <Gauge className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium text-[#17243A] truncate">{specs.transmission}</span>
                </div>
              )}
            </div>
          )}

          {/* Rental Package Pricing Display */}
          <div className="my-3 mt-auto">
            {hasPackages ? (
              <div className="space-y-1.5 sm:space-y-2 bg-[#F8F6F0] p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-[#E7E3DA]">
                <div className="text-[11px] sm:text-xs uppercase tracking-wider text-[#646B76] font-semibold">
                  Confirmed Rental Packages:
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-1">
                  {rentalPackages.map((pkg, idx) => (
                    <div key={idx} className="flex flex-col min-w-0">
                      <span className="text-[11px] sm:text-xs text-[#646B76] font-medium truncate">{pkg.duration}</span>
                      <span className="text-base sm:text-lg lg:text-xl font-bold text-[#17243A]">
                        ₹{pkg.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#F8F6F0] border border-[#E7E3DA] text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-[#17243A] font-semibold">
                  <Info className="w-4 h-4 text-[#C9A85C] shrink-0" />
                  <span>Contact for Price</span>
                </div>
                <span className="text-[11px] sm:text-xs text-[#646B76]">On Enquiry</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons: Stacks cleanly on very small screens, flex-row on sm+ */}
        <div className="pt-3 sm:pt-4 mt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
          <WhatsAppButton
            text="Book on WhatsApp"
            variant="dark"
            className="flex-1 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold min-h-[44px]"
            onClick={(e) => {
              e.preventDefault();
              window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
            }}
          />
          <Link
            to={`/cars/${slug}`}
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold border border-[#E7E3DA] hover:border-[#C9A85C] text-[#17243A] hover:bg-[#F8F6F0] transition-all min-h-[44px] shadow-xs shrink-0"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9A85C]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
