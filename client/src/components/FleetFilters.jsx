import React from 'react';
import { Search, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { VEHICLE_CATEGORIES } from '../data/cars';

export default function FleetFilters({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  onReset,
}) {
  return (
    <div className="bg-white border border-[#E7E3DA] rounded-3xl p-5 sm:p-6 mb-10 shadow-sm">
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#646B76]" />
          <input
            type="text"
            placeholder="Search by car model or brand..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-[#F8F6F0] border border-[#E7E3DA] rounded-2xl text-sm text-[#17243A] placeholder-[#646B76] focus:border-[#C9A85C] focus:bg-white focus:outline-none transition-colors"
          />
        </div>

        {/* Category Pills / Select */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {VEHICLE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap cursor-pointer transition-all ${
                selectedCategory === cat
                  ? 'bg-[#17243A] text-white shadow-xs'
                  : 'bg-[#F8F6F0] text-[#646B76] hover:text-[#17243A] border border-[#E7E3DA] hover:border-[#C9A85C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort Select & Reset */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-[#F8F6F0] border border-[#E7E3DA] text-xs sm:text-sm text-[#17243A] font-medium rounded-xl pl-3.5 pr-8 py-2.5 focus:border-[#C9A85C] focus:bg-white focus:outline-none cursor-pointer"
            >
              <option value="default">Sort: Default</option>
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
            <SlidersHorizontal className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#646B76] pointer-events-none" />
          </div>

          {(searchTerm || selectedCategory !== 'All' || sortBy !== 'default') && (
            <button
              onClick={onReset}
              title="Reset Filters"
              className="p-2.5 bg-[#F8F6F0] border border-[#E7E3DA] hover:border-[#C9A85C] text-[#646B76] hover:text-[#17243A] rounded-xl transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
