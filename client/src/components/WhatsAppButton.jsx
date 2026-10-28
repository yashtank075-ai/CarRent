import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

/**
 * Reusable WhatsApp Enquiry Action Button
 * @param {string} text - Button label
 * @param {string} customMessage - Message to pre-fill in WhatsApp
 * @param {string} className - Additional CSS classes
 * @param {'dark' | 'gold' | 'outline'} variant - Button styling variant
 * @param {string} size - 'sm' | 'md' | 'lg'
 */
export default function WhatsAppButton({
  text = 'Enquire on WhatsApp',
  customMessage = '',
  className = '',
  variant = 'dark', // 'dark' | 'gold' | 'outline'
  size = 'md',
  showIcon = true,
  onClick,
}) {
  const url = getWhatsAppLink(customMessage);

  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base font-semibold',
  };

  const baseStyle =
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 cursor-pointer active:scale-95 focus:outline-none';

  let themeStyle = '';
  if (variant === 'dark') {
    themeStyle =
      'bg-[#17243A] hover:bg-[#223452] text-white shadow-md shadow-[#17243A]/10 hover:shadow-lg hover:shadow-[#17243A]/20 hover:border-[#C9A85C] border border-transparent';
  } else if (variant === 'gold') {
    themeStyle =
      'bg-[#C9A85C] hover:bg-[#B18E43] text-white shadow-md shadow-[#C9A85C]/20 hover:shadow-lg hover:shadow-[#C9A85C]/30';
  } else {
    // outline
    themeStyle =
      'border border-[#E7E3DA] hover:border-[#C9A85C] text-[#17243A] bg-white hover:bg-[#F8F6F0] shadow-xs';
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`${baseStyle} ${sizeClasses[size] || sizeClasses.md} ${themeStyle} ${className}`}
      aria-label={`${text} (opens WhatsApp in a new tab)`}
    >
      {showIcon && (
        <MessageCircle
          className={`w-4 h-4 shrink-0 fill-current ${
            variant === 'dark' ? 'text-[#C9A85C]' : ''
          }`}
        />
      )}
      <span>{text}</span>
    </a>
  );
}
