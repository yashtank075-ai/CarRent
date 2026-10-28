import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import WhatsAppButton from '../components/WhatsAppButton';
import { Phone, MessageCircle, MapPin, Send, Info } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../utils/whatsapp';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carPreference: '',
    dates: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Safely redirect to WhatsApp with filled user inquiry
    const enquiryMsg = `Hello Dwarkadhish Car Rent,\nName: ${formData.name || 'Customer'}\nContact: ${formData.phone || 'Not provided'}\nPreferred Car: ${formData.carPreference || 'Any available'}\nDates / Duration: ${formData.dates || 'Flexible'}\nNote: ${formData.message || 'I would like to enquire about car rental.'}`;
    window.open(getWhatsAppLink(enquiryMsg), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
      {/* Page Heading */}
      <SectionHeading
        tag="Get In Touch"
        title="Contact Dwarkadhish Car Rent"
        subtitle="We are available directly on WhatsApp and phone for car rental enquiries, timing coordination, and package details in Surat."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Contact Information Cards (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E7E3DA] shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-[#17243A] font-heading">
              Direct Contact Details
            </h3>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F8F6F0] border border-[#E7E3DA] flex items-center justify-center text-[#C9A85C] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#646B76] block font-semibold">
                  Direct Call / Phone
                </span>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-base sm:text-lg font-bold text-[#17243A] hover:text-[#C9A85C] transition-colors"
                >
                  {BUSINESS_INFO.displayPhone}
                </a>
                <p className="text-xs text-[#646B76] mt-0.5">
                  Available for rental queries
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F8F6F0] border border-[#E7E3DA] flex items-center justify-center text-[#C9A85C] shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#646B76] block font-semibold">
                  Official WhatsApp
                </span>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-bold text-[#17243A] hover:text-[#C9A85C] transition-colors"
                >
                  +91 {BUSINESS_INFO.phone}
                </a>
                <p className="text-xs text-[#646B76] mt-0.5">
                  Instant messaging for fastest response
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F8F6F0] border border-[#E7E3DA] flex items-center justify-center text-[#C9A85C] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#646B76] block font-semibold">
                  Operational Hub
                </span>
                <p className="text-base font-bold text-[#17243A]">
                  Surat, Gujarat, India
                </p>
                <p className="text-xs text-[#646B76] mt-0.5">
                  Serving Surat city & surrounding districts
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E7E3DA]">
              <WhatsAppButton
                text="Chat on WhatsApp Directly"
                variant="dark"
                className="w-full py-4 text-sm font-bold"
              />
            </div>
          </div>
        </div>

        {/* Form Layout (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E7E3DA] shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#17243A] font-heading">
                Compose an Enquiry Message
              </h3>
              <p className="text-sm text-[#646B76] mt-1">
                Fill out your details below to automatically open WhatsApp with your formatted message ready to send.
              </p>
            </div>

            {/* Form submission info banner */}
            <div className="p-4 rounded-2xl bg-[#F8F6F0] border border-[#E7E3DA] text-xs sm:text-sm text-[#646B76] flex items-center gap-3">
              <Info className="w-4 h-4 text-[#C9A85C] shrink-0" />
              <span>
                Backend server form submission will be integrated later. Currently this formats and opens your message securely in WhatsApp.
              </span>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#17243A] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    required
                    className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E7E3DA] rounded-xl text-sm text-[#17243A] placeholder-[#646B76] focus:border-[#C9A85C] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#17243A] mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 98765 43210"
                    required
                    className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E7E3DA] rounded-xl text-sm text-[#17243A] placeholder-[#646B76] focus:border-[#C9A85C] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#17243A] mb-1.5">
                    Vehicle Preference
                  </label>
                  <input
                    type="text"
                    name="carPreference"
                    value={formData.carPreference}
                    onChange={handleChange}
                    placeholder="e.g. Hyundai Venue / Any SUV"
                    className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E7E3DA] rounded-xl text-sm text-[#17243A] placeholder-[#646B76] focus:border-[#C9A85C] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#17243A] mb-1.5">
                    Travel Dates / Duration
                  </label>
                  <input
                    type="text"
                    name="dates"
                    value={formData.dates}
                    onChange={handleChange}
                    placeholder="e.g. 12 Hours / Weekend"
                    className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E7E3DA] rounded-xl text-sm text-[#17243A] placeholder-[#646B76] focus:border-[#C9A85C] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#17243A] mb-1.5">
                  Message / Special Request
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your trip route, preferred pickup time, or any questions..."
                  className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E7E3DA] rounded-xl text-sm text-[#17243A] placeholder-[#646B76] focus:border-[#C9A85C] focus:bg-white focus:outline-none resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-[#17243A] hover:bg-[#223452] text-white font-bold text-sm transition-all shadow-md shadow-[#17243A]/15 cursor-pointer active:scale-95 border border-transparent hover:border-[#C9A85C]"
              >
                <Send className="w-4 h-4 text-[#C9A85C]" />
                <span>Send via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
