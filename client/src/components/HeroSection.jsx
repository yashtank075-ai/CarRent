import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8F6F0] via-[#F8F6F0] to-[#F0EEE7] py-8 sm:py-12 lg:py-20 border-b border-[#E7E3DA]">
      {/* Decorative subtle ambient warm luxury glow */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#C9A85C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-6 sm:left-10 w-60 sm:w-80 h-60 sm:h-80 bg-[#E7E3DA]/60 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Subtitle & Action CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left min-w-0">
            {/* Location & Status Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white border border-[#E7E3DA] text-xs sm:text-sm text-[#17243A] shadow-xs max-w-full">
              <MapPin className="w-3.5 h-3.5 text-[#C9A85C] shrink-0" />
              <span className="font-semibold text-[#17243A] truncate">Surat, Gujarat</span>
              <span className="text-[#C9A85C]">•</span>
              <span className="text-[#646B76] truncate">Premium Car Rentals</span>
            </div>

            {/* Main Headline with responsive fluid typography */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#17243A] leading-[1.18] sm:leading-[1.14]">
              Find the Right Car for{' '}
              <span className="gold-gradient-text block sm:inline">Every Journey</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#646B76] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Dwarkadhish Car Rent provides sophisticated, dependable car rental options for local city travel, business trips, and outstation drives originating from Surat, Gujarat.
            </p>

            {/* CTA Buttons - Stacks on mobile, inline on sm+ */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2">
              <Link
                to="/fleet"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#17243A] hover:bg-[#223452] text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md shadow-[#17243A]/15 hover:shadow-xl hover:shadow-[#17243A]/25 cursor-pointer active:scale-95 group min-h-[46px]"
              >
                <span>Explore Our Fleet</span>
                <ArrowRight className="w-4 h-4 text-[#C9A85C] group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>

              <WhatsAppButton
                text="Enquire on WhatsApp"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto py-3.5 sm:py-4 px-6 sm:px-8 border-[#C9A85C]/60 hover:border-[#C9A85C] text-[#17243A] bg-white font-semibold text-sm sm:text-base min-h-[46px]"
              />
            </div>

            {/* Transparency Note */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-[#646B76]">
              <ShieldCheck className="w-4 h-4 text-[#C9A85C] shrink-0" />
              <span>Direct WhatsApp confirmation • Verified rates • Transparent terms</span>
            </div>
          </div>

          {/* Right Column: Premium Vehicle Photography */}
          <div className="lg:col-span-5 relative w-full min-w-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Luxury Frame Container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white p-2 sm:p-3 border border-[#E7E3DA] shadow-xl shadow-[#17243A]/8 group">
                <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-[#F0EEE7]">
                  <img
                    src="/images/hyundai-venue-premium.png"
                    alt="Hyundai Venue available for rent from Dwarkadhish Car Rent in Surat"
                    className="w-full h-full object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17243A]/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Luxury Tag on photo */}
                  <div className="absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-4 right-2.5 sm:right-4 p-2.5 sm:p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E7E3DA] shadow-md flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold text-[#C9A85C] block">
                        Featured Vehicle
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#17243A] block truncate">
                        Hyundai Venue Compact SUV
                      </span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[9px] sm:text-[10px] text-[#646B76] block">From</span>
                      <span className="text-xs sm:text-sm font-extrabold text-[#17243A]">
                        ₹2,500 <span className="text-[10px] sm:text-xs font-normal text-[#646B76]">/ 12h</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Luxury Accent Pill */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white border border-[#E7E3DA] rounded-2xl p-2.5 sm:p-3 shadow-lg items-center gap-2 text-xs text-[#17243A] font-medium">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#C9A85C]/15 flex items-center justify-center text-[#C9A85C] shrink-0">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span>Clean & Well-Maintained</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
