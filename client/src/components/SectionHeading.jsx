import React from 'react';

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'center', // 'center' | 'left'
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl'} ${className}`}>
      {tag && (
        <span className="inline-block text-xs uppercase tracking-widest font-bold px-3.5 py-1.5 rounded-full bg-[#C9A85C]/15 text-[#8C6A21] border border-[#C9A85C]/30 mb-3">
          {tag}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#17243A] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-[#646B76] leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-12 bg-[#C9A85C] rounded-full ${isCenter ? 'mx-auto' : ''}`} />
    </div>
  );
}
