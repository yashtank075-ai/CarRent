import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Car, MapPin } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import { BUSINESS_INFO } from '../utils/whatsapp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu upon navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Refined scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Fleet', path: '/fleet' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top micro bar for location awareness */}
      <div className="bg-[#F0EEE7] border-b border-[#E7E3DA] py-1.5 sm:py-2 px-3 sm:px-4 text-[11px] sm:text-xs text-[#646B76]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-[#17243A] truncate">
            <MapPin className="w-3.5 h-3.5 text-[#C9A85C] shrink-0" />
            <span className="font-medium truncate">Serving {BUSINESS_INFO.location}</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-4 shrink-0 text-[11px] sm:text-xs">
            <span className="hidden sm:inline">Direct Helpline:</span>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="text-[#17243A] font-semibold hover:text-[#C9A85C] transition-colors"
            >
              {BUSINESS_INFO.displayPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E7E3DA] shadow-sm py-2.5 sm:py-3.5'
            : 'bg-white/90 backdrop-blur-sm border-b border-[#E7E3DA] py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Wordmark */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F0EEE7] border border-[#C9A85C]/40 flex items-center justify-center text-[#C9A85C] shadow-sm group-hover:border-[#C9A85C] group-hover:bg-[#C9A85C]/10 transition-all shrink-0">
              <Car className="w-4 h-4 sm:w-5 sm:h-5 text-[#17243A]" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-heading font-extrabold text-base sm:text-xl tracking-tight text-[#17243A] group-hover:text-[#C9A85C] transition-colors truncate">
                Dwarkadhish
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-widest uppercase text-[#C9A85C] font-bold truncate">
                Car Rent • Surat
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links (Visible from lg: 1024px upwards to prevent overlapping at intermediate sizes) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 xl:px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-[#C9A85C] bg-[#F8F6F0] border border-[#E7E3DA] shadow-xs'
                      : 'text-[#17243A] hover:text-[#C9A85C] hover:bg-[#F8F6F0]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action on Desktop */}
          <div className="hidden lg:flex items-center shrink-0">
            <WhatsAppButton
              text="WhatsApp Enquiry"
              size="md"
              variant="dark"
            />
          </div>

          {/* Mobile & Tablet Hamburger Button (Visible below lg: 1024px) */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-xl bg-[#F8F6F0] text-[#17243A] hover:text-[#C9A85C] border border-[#E7E3DA] focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer shadow-xs active:scale-95 transition-transform"
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#C9A85C]" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-[#17243A]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation: Responsive overlay + body lock + smooth touch list */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-x-0 top-[88px] sm:top-[96px] bottom-0 z-40 bg-white/98 backdrop-blur-xl border-b border-[#E7E3DA] p-5 sm:p-6 lg:hidden flex flex-col justify-between overflow-y-auto shadow-2xl animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <nav className="space-y-2.5 sm:space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between p-3.5 sm:p-4 rounded-xl text-base font-semibold transition-all min-h-[48px] ${
                    isActive
                      ? 'text-[#C9A85C] bg-[#F8F6F0] border border-[#E7E3DA]'
                      : 'text-[#17243A] hover:text-[#C9A85C] hover:bg-[#F8F6F0]'
                  }`
                }
              >
                <span>{link.name}</span>
              </NavLink>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#E7E3DA] space-y-4 pb-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#646B76]">
              <MapPin className="w-4 h-4 text-[#C9A85C] shrink-0" />
              <span>Surat, Gujarat, India</span>
            </div>
            <WhatsAppButton
              text="Enquire on WhatsApp"
              variant="dark"
              className="w-full py-3.5 text-base font-bold min-h-[48px]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
