import React from 'react';
import { HelpCircle, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EmptyState({
  title = 'No Vehicles Found',
  message = 'We could not find any cars matching your selected criteria. Try resetting filters or check back soon as more vehicles are added.',
  showReset = false,
  onReset,
  actionLink,
  actionText,
}) {
  return (
    <div className="py-16 px-6 text-center max-w-md mx-auto rounded-3xl bg-white border border-[#E7E3DA] shadow-sm my-8">
      <div className="w-16 h-16 rounded-2xl bg-[#F8F6F0] border border-[#E7E3DA] flex items-center justify-center text-[#C9A85C] mx-auto mb-4">
        <HelpCircle className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-[#17243A] mb-2">{title}</h3>
      <p className="text-sm text-[#646B76] mb-6 leading-relaxed">{message}</p>

      {showReset && onReset && (
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F8F6F0] hover:bg-white border border-[#E7E3DA] hover:border-[#C9A85C] text-sm font-semibold text-[#17243A] transition-all cursor-pointer shadow-xs"
        >
          <RefreshCw className="w-4 h-4 text-[#C9A85C]" />
          <span>Reset Filters</span>
        </button>
      )}

      {actionLink && actionText && (
        <Link
          to={actionLink}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#17243A] text-white font-semibold text-sm hover:bg-[#223452] transition-colors shadow-sm"
        >
          {actionText}
        </Link>
      )}
    </div>
  );
}
