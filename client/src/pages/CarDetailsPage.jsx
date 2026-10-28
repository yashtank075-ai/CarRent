import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Users,
  Fuel,
  Gauge,
  AlertCircle,
  MapPin,
} from 'lucide-react';
import { FLEET_DATA } from '../data/cars';
import CarGallery from '../components/CarGallery';
import RentalPackage from '../components/RentalPackage';
import CarCard from '../components/CarCard';
import EmptyState from '../components/EmptyState';
import { getCarWhatsAppLink } from '../utils/whatsapp';

export default function CarDetailsPage() {
  const { slug } = useParams();
  const car = FLEET_DATA.find((c) => c.slug === slug || c.id === slug);

  // If car is not found, render proper not found state with link back to fleet
  if (!car) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-20">
        <EmptyState
          title="Vehicle Not Found"
          message="The requested car details could not be found or may have been updated in our system."
          actionLink="/fleet"
          actionText="Back to Fleet"
        />
      </div>
    );
  }

  const {
    name,
    category,
    images = [],
    rentalPackages = [],
    specs = {},
    description,
  } = car;

  const whatsappUrl = getCarWhatsAppLink(car);

  // Related vehicles (excluding current)
  const relatedCars = FLEET_DATA.filter((c) => c.slug !== car.slug).slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-16 space-y-8 sm:space-y-12">
      {/* Breadcrumb / Back button */}
      <div>
        <Link
          to="/fleet"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#646B76] hover:text-[#C9A85C] transition-colors p-1 -ml-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Fleet</span>
        </Link>
      </div>

      {/* Main Grid: Gallery on left, Specs & packages on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Gallery & Description */}
        <div className="lg:col-span-7 space-y-6 w-full min-w-0">
          <CarGallery images={images} name={name} />

          {/* Description section */}
          {description && (
            <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-[#E7E3DA] shadow-xs">
              <h3 className="text-base sm:text-lg font-bold text-[#17243A] mb-2 sm:mb-3 font-heading">
                About this Vehicle
              </h3>
              <p className="text-sm sm:text-base text-[#646B76] leading-relaxed">
                {description}
              </p>
            </div>
          )}

          {/* Direct verification notice */}
          <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-amber-900 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-amber-950 mb-0.5">Booking & Availability Notice:</span>
              Please note that sending an enquiry via WhatsApp initiates direct communication with Dwarkadhish Car Rent. Availability, security deposit, driving license validation, and handover time are directly confirmed before a booking is finalized.
            </div>
          </div>
        </div>

        {/* Right Column: Title, Specs, Packages, CTA */}
        <div className="lg:col-span-5 space-y-5 sm:space-y-6 w-full min-w-0">
          {/* Header Info */}
          <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-[#E7E3DA] shadow-xs space-y-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider text-[#C9A85C] font-bold">
                  {category || 'Automobile'}
                </span>
                <span className="text-[#E7E3DA]">•</span>
                <span className="text-xs text-[#646B76] flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C9A85C]" /> Surat, Gujarat
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#17243A] mt-1.5 break-words">
                {name}
              </h1>
            </div>

            {/* Known Specs List */}
            <div className="pt-3 border-t border-[#E7E3DA] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#646B76]">
                Specifications
              </h4>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm">
                {specs.seating && (
                  <div className="flex items-center gap-2.5 text-[#17243A] min-w-0">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#F8F6F0] border border-[#E7E3DA] flex items-center justify-center text-[#C9A85C] shrink-0">
                      <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-[11px] text-[#646B76] block">Capacity</span>
                      <span className="font-semibold truncate block">{specs.seating}</span>
                    </div>
                  </div>
                )}

                {specs.fuelType && (
                  <div className="flex items-center gap-2.5 text-[#17243A] min-w-0">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#F8F6F0] border border-[#E7E3DA] flex items-center justify-center text-[#C9A85C] shrink-0">
                      <Fuel className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-[11px] text-[#646B76] block">Fuel Type</span>
                      <span className="font-semibold truncate block">{specs.fuelType}</span>
                    </div>
                  </div>
                )}

                {specs.transmission && (
                  <div className="flex items-center gap-2.5 text-[#17243A] col-span-2 pt-1 min-w-0">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#F8F6F0] border border-[#E7E3DA] flex items-center justify-center text-[#C9A85C] shrink-0">
                      <Gauge className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-[11px] text-[#646B76] block">Transmission</span>
                      <span className="font-semibold truncate block">{specs.transmission}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Rental Packages */}
          <RentalPackage packages={rentalPackages} />

          {/* Primary Action Button */}
          <div className="space-y-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center text-center gap-2 py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl bg-[#17243A] hover:bg-[#223452] text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md shadow-[#17243A]/15 hover:shadow-xl hover:shadow-[#17243A]/25 cursor-pointer active:scale-95 border border-transparent hover:border-[#C9A85C] min-h-[46px]"
            >
              <span className="break-words">Enquire for {name} on WhatsApp</span>
            </a>
            <p className="text-center text-xs text-[#646B76]">
              Direct connection with Dwarkadhish Car Rent in Surat
            </p>
          </div>
        </div>
      </div>

      {/* Related Vehicles Section */}
      {relatedCars.length > 0 && (
        <div className="pt-8 sm:pt-12 border-t border-[#E7E3DA]">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#17243A] mb-6 font-heading">
            Other Vehicles You May Consider
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedCars.map((related) => (
              <CarCard key={related.id} car={related} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
