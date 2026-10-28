import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Clock, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import BenefitCard from '../components/BenefitCard';
import CarCard from '../components/CarCard';
import CTASection from '../components/CTASection';
import { FLEET_DATA } from '../data/cars';

export default function HomePage() {
  const benefits = [
    {
      icon: Car,
      title: 'Multiple Car Options',
      description: 'Choose from sedans, compact SUVs, and family vehicles adapted to your specific travel route in and around Surat.',
    },
    {
      icon: Clock,
      title: 'Flexible Rental Enquiries',
      description: 'Discuss 12-hour, 24-hour, or extended multi-day packages directly with the business based on your schedule.',
    },
    {
      icon: MessageSquare,
      title: 'Personal Assistance',
      description: 'Direct communication over WhatsApp to coordinate pickup timing, document checks, and required rental details.',
    },
    {
      icon: ShieldCheck,
      title: 'Direct Business Communication',
      description: 'No hidden intermediate commissions. Deal straight with Dwarkadhish Car Rent for straightforward clarity.',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Explore Available Cars',
      desc: 'Browse our fleet catalog to see available vehicle models and verified rental packages.',
    },
    {
      step: '02',
      title: 'Choose a Rental Option',
      desc: 'Pick your preferred car and intended duration (e.g. 12-hour or 24-hour packages).',
    },
    {
      step: '03',
      title: 'Enquire Through WhatsApp',
      desc: 'Send a prefilled enquiry link with one click to connect directly with the business.',
    },
    {
      step: '04',
      title: 'Confirm Availability & Terms',
      desc: 'Finalize timing, documents, security deposit, and vehicle handover directly with the host.',
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-12">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Quick Benefits Section (White container on light ivory background) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Why Dwarkadhish Car Rent"
          title="Designed for Your Travel Comfort"
          subtitle="We focus on dependable vehicles, transparent communication, and simple WhatsApp coordination for your trips."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <BenefitCard
              key={i}
              icon={b.icon}
              title={b.title}
              description={b.description}
            />
          ))}
        </div>
      </section>

      {/* 3. Featured Fleet Section (Soft section background) */}
      <section className="bg-[#F0EEE7] py-16 border-y border-[#E7E3DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="inline-block text-xs uppercase tracking-widest font-bold px-3.5 py-1.5 rounded-full bg-[#C9A85C]/15 text-[#8C6A21] border border-[#C9A85C]/30 mb-3">
                Vehicle Inventory
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17243A] tracking-tight">
                Featured Fleet
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#646B76]">
                Explore cars ready for rental enquiries. Pricing and specifications are confirmed directly.
              </p>
            </div>
            <Link
              to="/fleet"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#17243A] hover:text-[#C9A85C] transition-colors group"
            >
              <span>View All Cars</span>
              <ArrowRight className="w-4 h-4 text-[#C9A85C] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Dynamic grid supporting 1 to N vehicles seamlessly */}
          <div className={`grid gap-6 sm:gap-8 ${
            FLEET_DATA.length === 1 
              ? 'grid-cols-1 max-w-md mx-auto md:mx-0' 
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {FLEET_DATA.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. How It Works Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="rounded-3xl bg-white border border-[#E7E3DA] p-8 sm:p-12 lg:p-16 shadow-xs">
          <SectionHeading
            tag="Simple 4-Step Process"
            title="How It Works"
            subtitle="Renting a car in Surat with Dwarkadhish Car Rent is direct and uncomplicated."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10">
            {steps.map((item, idx) => (
              <div key={idx} className="relative group p-4 rounded-2xl hover:bg-[#F8F6F0] transition-colors">
                <div className="text-3xl font-black text-[#C9A85C]/60 mb-3 font-heading group-hover:text-[#C9A85C] transition-colors">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-[#17243A] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#646B76] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Call To Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>
    </div>
  );
}
