import React from 'react';
import WhatsAppButton from './WhatsAppButton';

export default function CTASection({
  title = 'Planning Your Next Drive?',
  subtitle = 'Reach out directly on WhatsApp to check car availability, ask questions, or discuss convenient rental options in Surat.',
  buttonText = 'Contact on WhatsApp',
}) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 my-12 rounded-3xl bg-[#17243A] text-white border border-[#C9A85C]/30 shadow-2xl">
      {/* Decorative ambient subtle champagne gold glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C9A85C]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#223452]/40 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block text-xs uppercase tracking-widest font-bold px-3.5 py-1.5 rounded-full bg-[#C9A85C]/20 text-[#C9A85C] border border-[#C9A85C]/30 mb-4">
          Direct Assistance
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {title}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <WhatsAppButton
            text={buttonText}
            variant="gold"
            size="lg"
            className="w-full sm:w-auto font-bold py-4 px-8"
          />
        </div>

        <p className="mt-5 text-xs text-slate-400">
          *Enquiries through WhatsApp do not constitute an instant booking. Terms, documents, and availability will be verified directly.
        </p>
      </div>
    </section>
  );
}
