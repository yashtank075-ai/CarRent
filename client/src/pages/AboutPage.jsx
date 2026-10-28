import React from 'react';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { MapPin, ShieldCheck, HeartHandshake } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/whatsapp';

export default function AboutPage() {
  const values = [
    {
      icon: MapPin,
      title: 'Rooted in Surat',
      description:
        'Operating directly in Surat, Gujarat, we assist local residents, visiting business professionals, and tourists with vehicle rental options.',
    },
    {
      icon: ShieldCheck,
      title: 'Transparent Communication',
      description:
        'We do not engage in obscured charges or hidden conditions. Every package, duration, and deposit is discussed directly with you.',
    },
    {
      icon: HeartHandshake,
      title: 'Customer-Centric Focus',
      description:
        'We prioritize punctuality, clean car handovers, and responsive communication for all customer enquiries.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* Page Heading */}
      <SectionHeading
        tag="About Us"
        title="About Dwarkadhish Car Rent"
        subtitle="Your trusted car rental partner in Surat, Gujarat."
      />

      {/* Overview Block */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-5 text-[#646B76] text-base leading-relaxed">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#17243A] font-heading">
            Committed to Convenient & Reliable Journeys
          </h3>
          <p>
            Dwarkadhish Car Rent provides car rental solutions tailored for individuals, families, and businesses traveling within Surat and neighboring regions in Gujarat.
          </p>
          <p>
            Whether you need a compact SUV for local city errands, a comfortable vehicle for business meetings, or a car for an outstation family journey, our goal is to offer a dependable, well-maintained ride with prompt personal coordination.
          </p>
          <div className="pt-2 flex items-center gap-3 text-[#17243A] font-semibold">
            <MapPin className="w-5 h-5 text-[#C9A85C]" />
            <span>Serving Surat, Gujarat, India</span>
          </div>
        </div>

        {/* Visual Card */}
        <div className="relative rounded-3xl overflow-hidden border border-[#E7E3DA] shadow-xl bg-white p-2.5 sm:p-3 aspect-[4/3] max-h-[380px]">
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#F0EEE7]">
            <img
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80"
              alt="Dwarkadhish Car Rent vehicles"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17243A]/50 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E7E3DA] shadow-sm">
              <span className="text-[10px] uppercase tracking-wider text-[#C9A85C] font-bold block">
                Direct Contact
              </span>
              <span className="text-[#17243A] font-bold text-sm">
                WhatsApp Support: {BUSINESS_INFO.displayPhone}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Principles */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#17243A] font-heading">
            Our Business Approach
          </h3>
          <p className="text-sm text-[#646B76] mt-2">
            Built on honest service, practical packages, and local accessibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="p-7 rounded-3xl bg-white border border-[#E7E3DA] hover:border-[#C9A85C] transition-all shadow-xs hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F8F6F0] border border-[#E7E3DA] flex items-center justify-center text-[#C9A85C] mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#17243A] mb-2">
                  {v.title}
                </h4>
                <p className="text-sm text-[#646B76] leading-relaxed">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <CTASection
        title="Ready to discuss your rental needs?"
        subtitle="Contact Dwarkadhish Car Rent directly on WhatsApp to learn more about our options."
        buttonText="Chat with Us on WhatsApp"
      />
    </div>
  );
}
