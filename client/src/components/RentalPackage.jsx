import React from 'react';
import { Clock, ShieldCheck, Tag } from 'lucide-react';

export default function RentalPackage({ packages = [] }) {
  if (!packages || packages.length === 0) {
    return (
      <div className="p-6 rounded-2xl bg-white border border-[#E7E3DA] text-center shadow-xs">
        <Tag className="w-8 h-8 text-[#C9A85C] mx-auto mb-2 opacity-90" />
        <h4 className="text-base font-bold text-[#17243A]">Rental Packages on Enquiry</h4>
        <p className="text-sm text-[#646B76] mt-1 max-w-sm mx-auto">
          Specific hourly and daily rates for this vehicle are available directly via WhatsApp enquiry.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-bold uppercase tracking-wider text-[#17243A] flex items-center gap-2">
        <Clock className="w-4 h-4 text-[#C9A85C]" />
        <span>Confirmed Rental Packages</span>
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white border border-[#E7E3DA] hover:border-[#C9A85C] transition-all relative flex flex-col justify-between shadow-xs hover:shadow-md"
          >
            <div>
              <span className="text-xs font-bold px-3 py-1 rounded-md bg-[#F8F6F0] text-[#17243A] border border-[#E7E3DA] inline-block mb-3">
                {pkg.duration}
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#17243A] tracking-tight">
                ₹{pkg.price.toLocaleString('en-IN')}
              </div>
              {pkg.note && (
                <p className="text-sm text-[#646B76] mt-2">{pkg.note}</p>
              )}
            </div>
            <div className="mt-4 pt-3 border-t border-[#E7E3DA] flex items-center gap-2 text-xs text-[#646B76]">
              <ShieldCheck className="w-4 h-4 text-[#C9A85C] shrink-0" />
              <span>Subject to availability & terms</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
