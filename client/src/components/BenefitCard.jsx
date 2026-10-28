import React from 'react';

export default function BenefitCard({ icon: Icon, title, description }) {
  return (
    <div className="group p-6 sm:p-7 rounded-2xl bg-white border border-[#E7E3DA] hover:border-[#C9A85C] transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl hover:shadow-[#C9A85C]/10">
      <div className="w-12 h-12 rounded-xl bg-[#F8F6F0] border border-[#E7E3DA] flex items-center justify-center text-[#C9A85C] mb-5 group-hover:scale-105 group-hover:bg-[#C9A85C]/10 group-hover:border-[#C9A85C]/40 transition-all duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-[#17243A] mb-2 group-hover:text-[#C9A85C] transition-colors">
        {title}
      </h3>
      <p className="text-sm text-[#646B76] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
