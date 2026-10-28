import React from 'react';
import { Link } from 'react-router-dom';
import { Car, MapPin, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../utils/whatsapp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070c15] border-t border-slate-800 text-slate-300 text-sm w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#111C2E] border border-[#C9A85C]/40 flex items-center justify-center text-[#C9A85C] shrink-0">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-white block">
                  Dwarkadhish
                </span>
                <span className="text-xs tracking-widest uppercase text-[#C9A85C] font-semibold block">
                  Car Rent
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Car rental services serving Surat and surrounding Gujarat regions. Reliable vehicles and personal assistance for your travel requirements.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-200">
              <MapPin className="w-4 h-4 text-[#C9A85C] shrink-0" />
              <span>Surat, Gujarat, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold font-heading text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-300 hover:text-[#C9A85C] transition-colors inline-block py-0.5">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="text-slate-300 hover:text-[#C9A85C] transition-colors inline-block py-0.5">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-[#C9A85C] transition-colors inline-block py-0.5">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-[#C9A85C] transition-colors inline-block py-0.5">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Business & Enquiry Process */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold font-heading text-sm uppercase tracking-wider">
              Rental Process
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-[#C9A85C] font-bold shrink-0">•</span>
                <span>Select desired car option</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A85C] font-bold shrink-0">•</span>
                <span>Enquire directly via WhatsApp</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A85C] font-bold shrink-0">•</span>
                <span>Confirm terms, document requirements & booking</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold font-heading text-sm uppercase tracking-wider">
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A85C] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="hover:text-[#C9A85C] text-slate-100 font-medium transition-colors"
                >
                  {BUSINESS_INFO.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#C9A85C] shrink-0" />
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C9A85C] text-slate-100 font-medium transition-colors"
                >
                  WhatsApp: +91 {BUSINESS_INFO.phone}
                </a>
              </div>
              <p className="text-xs text-slate-400 pt-1">
                Please message or call for custom hourly or full-day bookings.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar with dynamic year */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-slate-400 text-center sm:text-left">
          <p>© {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p className="text-slate-400 sm:text-right">
            Based in Surat, Gujarat • Direct business confirmation
          </p>
        </div>
      </div>
    </footer>
  );
}
